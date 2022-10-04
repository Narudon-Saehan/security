import React from 'react';
import emailjs from '@emailjs/browser';

const TestSendMail = () => {


    const sendEmail = (e) => {
        e.preventDefault();
        let temp = {
            user_name:"test",
            user_email:"oatsa11205@gmail.com",
            message:"test"
        }  
        emailjs.send('service_1izkvhc', 'template_l86x5fe', temp, 'G_I1Fw-Q-S55niWyy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div style={{display: "flex",flexDirection:'column',height:"100vh",justifyContent:'center',alignItems:"center",backgroundColor:'red'}}>
            <form onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" /><br/><br/>
                <label>Email</label>
                <input type="email" name="user_email" /><br/><br/>
                <label>Message</label>
                <textarea name="message" /><br/><br/>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default TestSendMail;