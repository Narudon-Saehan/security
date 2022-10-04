
const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
//const { abort } = require('process')

const bcrypt = require('bcrypt');
const saltRounds = 10;


const jwt = require('jsonwebtoken');
const secret = "seProjectG6"

const nodemailer = require('nodemailer');
const emailjs = require('@emailjs/browser');

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456789",
    database: "com_security"
})

app.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

/*app.get("/testNodemailer", (req, res) => {
    const mailOptions = {
        from: 'narudon.s@live.ku.th',
        to: 'narudon.s@ku.th',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
    nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // TLS requires secureConnection to be false
        port: 587,
        auth: {
            user: 'narudon.s@live.ku.th',
            pass: 'Nd-0620682282'
        },
        tls: {
            ciphers:'SSLv3'
        }
    }).sendMail(mailOptions, (err, result) => {
        if (err) {
            console.log(err);
            res.send("error")
        } else {
            console.log(result);
            res.send("OK");
        }
    })
    transporter.close()
})*/
app.post("/checkUserName", (req, res) => {
    const userName = req.body.userName
    db.query("SELECT * FROM users WHERE userName=?", [userName], (err, result) => {
        if (err) {
            res.json({ status: 'error', message: err })
        } if (result.length === 0) {
            res.json({ status: 'ok', message: "not found username" })
        } else {
            res.json({ status: 'ok', message: "found username" })
        }
    })
})

app.post("/register", (req, res) => {
    const userName = req.body.userName
    const plaintextPassword = req.body.password
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    //const token2 =jwt.sign({}, 'secret', {expiresIn: '2h'})
    const token = jwt.sign({ userName: userName, password: plaintextPassword, email: email, firstName: firstName, lastName: lastName }, secret, { expiresIn: '2h' })
    res.json({ status: 'ok', message: "login success", token: token })
})

app.post("/addUser", (req, res) => {
    // const userName = req.body.userName
    // const plaintextPassword = req.body.password
    // const firstName = req.body.firstName
    // const lastName = req.body.lastName
    //console.log([userName, plaintextPassword, firstName, lastName]);
    const token = req.body.token
    try {
        const decoded = jwt.verify(token, secret);
        const { userName, password, firstName, lastName } = decoded
        console.log(decoded);
        // db.query("SELECT * FROM users WHERE userName=?",
        //     [userName], (err, result) => {
        //         if (err) {
        //             res.json({ status: 'error', message: err })
        //             console.log(err);
        //         }if (result.length === 0) {
        //             res.json({ status: 'ok', message: "add user" })
        //         }else{
        //             res.json({ status: 'ok' , message: "user นี้มีในระบบแล้ว" })
        //             //res.send(result);
        //         }
        //     }
        // )
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            bcrypt.hash(password, salt, (err, hashPassword) => {
                if (err) {
                    res.json({ status: 'error', message: err })
                    return
                }
                //console.log(hashPassword);
                db.query("INSERT INTO users (userName,password,firstName,lastName) VALUES(?,?,?,?)",
                    [userName, hashPassword, firstName, lastName], (err, result) => {
                        if (err) {
                            res.json({ status: 'error', message: err })
                            console.log(err);
                        } else {
                            res.json({ status: 'ok' })
                            //res.send(result);
                        }
                    })
            });
        });
    } catch (err) {
        res.json({ status: "error", message: err.message })
    }
})

app.post("/loing", (req, res) => {
    const userName = req.body.userName
    const plaintextPassword = req.body.password
    db.query("SELECT * FROM users WHERE userName=?",
        [userName], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
            } else if (result.length === 0) {
                res.json({ status: 'error', message: "no user found" })
            } else {
                bcrypt.compare(plaintextPassword, result[0].password, (err, isLoing) => {
                    if (isLoing) {
                        const token = jwt.sign({ userName: userName, firstName: result[0].firstName, lastName: result[0].lastName }, secret, { expiresIn: '2h' })
                        res.json({ status: 'ok', message: "login success", token: token })
                    } else {
                        res.json({ status: 'error', message: "login failed" })
                    }
                })
            }
        })
});

///////ตรวจ token
app.post('/authen', (req, res) => {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, secret);
        res.json({ status: "ok", decoded })
    } catch (err) {
        res.json({ status: "error", message: err.message })
    }
})



app.post("/forgotPassword", (req, res) => {
    const userName = req.body.userName
    const token = jwt.sign({ userName: userName }, secret, { expiresIn: '15m' })
    res.json({ status: 'ok', message: "login success", token: token })
})

app.post("/resetPassword", (req, res) => {
    const userName = req.body.userName
    const token = req.body.token
    const decoded = jwt.verify(token, secret);
    if (userName === decoded) {
        res.json({ status: 'ok', message: "login success", token: token })
    }
})




app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 5000')
})

