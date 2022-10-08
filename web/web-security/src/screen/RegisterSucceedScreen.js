import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";
import './LoginScreen.css';

const RegisterSucceedScreen = () => {
    const { token } = useParams();
    const [dataUser, setDataUser] = useState();
    const [loading, setLoading] = useState(true);
    const [statusRegister, setStatusRegister] = useState(false);
    const Swal = require('sweetalert2')

    const confirmRegister = () => {
        if (!statusRegister) {
            setLoading(true)
            axios.post("http://localhost:5000/addUser", {
                email: dataUser.email,
                password: dataUser.password,
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                question: dataUser.question,
                answer: dataUser.answer
            })
                .then((res) => {
                    if (res.data.status === "error") {
                        alert(res.data.message)
                    } else {
                        setStatusRegister(true)
                        setLoading(false)
                    }
                }).catch(() => {
                    console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                })
        }
    }
    const confirmRegister1 = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, confirm!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'OK',
                    'success'
                )
                confirmRegister();
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled'
                )
            }
        })
    }

    useEffect(() => {
        return () => {
            if (loading) {
                axios.post("http://localhost:5000/checkRegister", {
                    token: token,
                })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.status === "error") {
                            alert(res.data.message)
                            window.location = '/error'
                        } else {
                            if (res.data.message === "found email") {
                                setStatusRegister(true)
                            }
                            setDataUser(res.data.decoded)
                            setLoading(false)
                        }
                    }).catch(() => {
                        console.log("ไม่สามารถเชื่อมต่อกับ http://localhost:5000/register");
                    })
            }
        }
    }, []);

    if (loading) {
        return <LoadingScreen />
    }
    if (!statusRegister) {
        return (
            <body>
                <div className="bg-img">
                    <div className="content">
                        <header>Confirm to Register</header>
                        <div className="space">
                            <button type="button" class="btn btn-primary btn-lg" value="Submit" onClick={() => confirmRegister1()}>Submit</button>
                        </div>
                    </div>
                </div>
            </body>
        )
    }

    return (
        <body>
            <div className="bg-img">
                <div className="content">
                    <header>Register</header>
                    <button type="button" onClick={()=> window.location = '/'} class="btn btn-primary btn-lg" value="go to Login">go to Login</button>
                </div>
            </div>
        </body>
    )
}
export default RegisterSucceedScreen;