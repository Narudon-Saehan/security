
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


////////////////////////////////////Register//////////////////////////////////////////////
app.post("/checkUserName", (req, res) => {
    const email = req.body.email
    db.query("SELECT * FROM users WHERE email=?", [email], (err, result) => {
        if (err) {
            res.json({ status: 'error', message: err })
        }else if (result.length === 0) {
            res.json({ status: 'ok', message: "not found username" })
        } else {
            res.json({ status: 'ok', message: "found username" })
        }
    })
})
app.post("/register", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const question = req.body.question
    const answer = req.body.answer
    //const token2 =jwt.sign({}, 'secret', {expiresIn: '2h'})
    const token = jwt.sign({ email, password, firstName, lastName, question, answer }, secret, { expiresIn: '2h' })
    res.json({ status: 'ok', message: "login success", token: token })
})
app.post("/checkRegister", (req, res) => {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, secret);
        const { email } = decoded
        db.query("SELECT * FROM users WHERE email=?", [email], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
            } if (result.length === 0) {
                res.json({ status: 'ok', decoded: decoded, message: "not found email" })
            } else {
                res.json({ status: 'ok', decoded: decoded, message: "found email" })
            }
        })
    } catch (err) {
        res.json({ status: "error", message: err.message })
    }
})
app.post("/addUser", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const question = req.body.question
    const answer = req.body.answer
    const password_time = new Date().toISOString()
    
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
            db.query("INSERT INTO users (email,password,firstName,lastName,question,answer,role,password_time) VALUES(?,?,?,?,?,?,?,?)",
                [email, hashPassword, firstName, lastName, question, answer, "user", password_time], (err, result) => {
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
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Login//////////////////////////////////////////////
app.post("/login", (req, res) => {
    const email = req.body.email
    const plaintextPassword = req.body.password
    db.query("SELECT * FROM users WHERE email=?",
        [email], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
            } else if (result.length === 0) {
                res.json({ status: 'error', message: "no user found" })
            } else {
                bcrypt.compare(plaintextPassword, result[0].password, (err, isLoing) => {
                    if (isLoing) {
                        const token = jwt.sign({ email: email, firstName: result[0].firstName, lastName: result[0].lastName, role: result[0].role, password_time: result[0].password_time  }, secret, { expiresIn: '3h' })
                        res.json({ status: 'ok', message: "login success", token: token })
                    } else {
                        res.json({ status: 'error', message: "login failed" })
                    }
                })
            }
        })
});
//////////////////////////////ตรวจ token///////////////////////////////
app.post('/authen', (req, res) => {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, secret);
        res.json({ status: "ok", decoded })
    } catch (err) {
        res.json({ status: "error", message: err.message })
    }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////Forgot Password/////////////////////////////////////////////////////////////////
app.post("/forgotPassword/checkEmail", (req, res) => {
    const email = req.body.email
    db.query("SELECT * FROM users WHERE email=?", [email], (err, result) => {
        if (err) {
            res.json({ status: 'error', message: err })
        }else if (result.length === 0) {
            res.json({ status: 'ok', message: "not found email"})
        } else {
            const token = jwt.sign({ id: result[0].id, question:result[0].question}, secret, { expiresIn: '15m' })
            res.json({ status: 'ok', message: "found email", token: token  })
        }
    })
})
app.post("/forgotPassword/authen", (req, res) => {
    try {
        const token = req.body.token
        const decoded = jwt.verify(token, secret);
        res.json({ status: "ok", decoded })
    } catch (err) {
        res.json({ status: "error", message: err.message })
    }
})
app.post("/forgotPassword/checkAnswer", (req, res) => {
    const id = req.body.id
    const answer = req.body.answer
    db.query("SELECT * FROM users WHERE id=? AND answer=?", [id,answer], (err, result) => {
        if (err) {
            res.json({ status: 'error', message: err })
        }else if (result.length === 0) {
            res.json({ status: 'ok', message: "wrong"})
        } else {
            res.json({ status: 'ok', message: "correct"})
        }
    })
})
app.post("/forgotPassword/changePassword", (req, res) => {
    const id = req.body.id
    const password = req.body.password
    const password_time = new Date().toISOString()
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
            db.query("UPDATE users SET password=? , password_time=CONVERT_TZ(?,'+00:00','+7:00') WHERE id=? ",
                [hashPassword,password_time,id], (err, result) => {
                    if (err) {
                        res.json({ status: 'error', message: err })
                    } else {
                        res.json({ status: 'ok' ,result})
                        //res.send(result);
                    }
                })
        });
    });
})
//////////////////////////////////////////////////////////////////////////////////

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

