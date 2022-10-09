
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
        } else if (result.length === 0) {
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
            db.query("INSERT INTO users (email,password,firstName,lastName,question,answer,role,password_time) VALUES(?,?,?,?,?,?,?,CONVERT_TZ(?,'+00:00','+7:00'))",
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

    const log_date = new Date().toISOString()
    const log_time = new Date().toISOString()
    const ipv4 = req.body.ipv4
    const country = req.body.country
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const log_email = req.body.log_email
    let status_email = false
    let status_login = false

    db.query("SELECT * FROM users WHERE email=?",
        [email], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
            } else if (result.length === 0) {
                db.query("INSERT INTO log (log_date,log_time,ipv4,country,latitude,longitude,log_email,status_email,status_login) VALUES(CONVERT_TZ(?,'+00:00','+7:00'),CONVERT_TZ(?,'+00:00','+7:00'),?,?,?,?,?,?,?)",
                    [log_date,log_time, ipv4, country, latitude, longitude, log_email,status_email,status_login], (err, result) => {
                        if (err) {
                            res.json({ status: 'error', message: err })
                            //console.log(err);
                        } else {
                            res.json({ status: 'error', message: "Wrong email or password" })
                        }
                    })
                //res.json({ status: 'error', message: "no email found" })
            } else {
                status_email=true
                bcrypt.compare(plaintextPassword, result[0].password, (err, isLoing) => {
                    if (isLoing) {
                        status_login=true
                        const token = jwt.sign({ id: result[0].id, email: email, firstName: result[0].firstName, lastName: result[0].lastName, role: result[0].role, password_time: result[0].password_time }, secret, { expiresIn: '6h' })
                        db.query("INSERT INTO log (log_date,log_time,ipv4,country,latitude,longitude,log_email,status_email,status_login) VALUES(CONVERT_TZ(?,'+00:00','+7:00'),CONVERT_TZ(?,'+00:00','+7:00'),?,?,?,?,?,?,?)",
                            [log_date,log_time, ipv4, country, latitude, longitude, log_email,status_email,status_login], (err, result) => {
                                if (err) {
                                    res.json({ status: 'error', message: err })
                                    //console.log(err);
                                } else {
                                    res.json({ status: 'ok', message: "login success", token: token })
                                    //res.send(result);
                                }
                            })
                        //res.json({ status: 'ok', message: "login success", token: token })
                    } else {
                        db.query("INSERT INTO log (log_date,log_time,ipv4,country,latitude,longitude,log_email,status_email,status_login) VALUES(CONVERT_TZ(?,'+00:00','+7:00'),CONVERT_TZ(?,'+00:00','+7:00'),?,?,?,?,?,?,?)",
                            [log_date,log_time, ipv4, country, latitude, longitude, log_email,status_email,status_login], (err, result) => {
                                if (err) {
                                    res.json({ status: 'error', message: err })
                                    //console.log(err);
                                } else {
                                    res.json({ status: 'error', message: "Wrong email or password" })
                                    //res.send(result);
                                }
                            })
                        //res.json({ status: 'error', message: "login failed" })
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
        } else if (result.length === 0) {
            res.json({ status: 'ok', message: "not found email" })
        } else {
            const token = jwt.sign({ id: result[0].id, question: result[0].question }, secret, { expiresIn: '15m' })
            res.json({ status: 'ok', message: "found email", token: token })
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
    db.query("SELECT * FROM users WHERE id=? AND answer=?", [id, answer], (err, result) => {
        if (err) {
            res.json({ status: 'error', message: err })
        } else if (result.length === 0) {
            res.json({ status: 'ok', message: "wrong" })
        } else {
            res.json({ status: 'ok', message: "correct" })
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
                [hashPassword, password_time, id], (err, result) => {
                    if (err) {
                        res.json({ status: 'error', message: err })
                    } else {
                        res.json({ status: 'ok', result })
                        //res.send(result);
                    }
                })
        });
    });
})
///////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////Reset Password//////////////////////////////////////////////////

app.post("/resetPassword", (req, res) => {
    const id = req.body.id
    const plaintextPassword = req.body.password
    const password_time = new Date().toISOString()
    db.query("SELECT * FROM users WHERE id=?",
        [id], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
            }
            else {
                bcrypt.compare(plaintextPassword, result[0].password, (err, isLoing) => {
                    if (isLoing) {
                        res.json({ status: 'duplicate', message: "Duplicate the same password" })
                        return
                    }
                    bcrypt.genSalt(saltRounds, (err, salt) => {
                        if (err) {
                            res.json({ status: 'error', message: err })
                            return
                        }
                        bcrypt.hash(plaintextPassword, salt, (err, hashPassword) => {
                            if (err) {
                                res.json({ status: 'error', message: err })
                                return
                            }
                            db.query("UPDATE users SET password=? , password_time=CONVERT_TZ(?,'+00:00','+7:00') WHERE id=? ",
                                [hashPassword, password_time, id], (err, updateResult) => {
                                    if (err) {
                                        res.json({ status: 'error', message: err })
                                    } else {
                                        const token = jwt.sign({ id: result[0].id, email: result[0].email, firstName: result[0].firstName, lastName: result[0].lastName, role: result[0].role, password_time: password_time }, secret, { expiresIn: '3h' })
                                        res.json({ status: 'ok', message: "update success", token: token })
                                    }
                                })
                        })
                    })
                })
            }
        })
})

//////////////////////////////////////LOG////////////////////////////////////////////////////
app.post('/addLog', (req, res) => {
    const log_datetime = new Date().toISOString()
    const ipv4 = req.body.ipv4
    const country = req.body.country
    const latitude = req.body.latitude
    const longitude = req.body.longitude
    const log_email = req.body.log_email
    const status_email = req.body.status_email
    const status_login = req.body.status_login
    db.query("INSERT INTO log (log_datetime,ipv4,country,latitude,longitude,log_email,status_email,status_login) VALUES(CONVERT_TZ(?,'+00:00','+7:00'),?,?,?,?,?,?,?)",
        [log_datetime, ipv4, country, latitude, longitude, log_email,status_email,status_login], (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
                console.log(err);
            } else {
                res.json({ status: 'ok' })
                //res.send(result);
            }
        })
})

app.post('/testAddLog', (req, res) => {
    const date = new Date().toISOString().split("T")[0]
    const data_log = req.body.data_log
    db.query("SELECT * FROM test WHERE date=?",
        [date], (err, resultLog) => {
            if (err) {
                res.json({ status: 'error', message: err })
                console.log(err);
            } else {
                if(resultLog.length===0){
                    db.query("INSERT INTO test (date,data_log) VALUES(?,?)",
                    [date, "["+data_log+"]"], (err, result) => {
                        if (err) {
                            res.json({ status: 'error', message: err })
                        } else {
                            res.json({ status: 'ok',result:JSON.parse("["+data_log+"]") })
                        }
                    })
                    console.log("not found");
                }else{
                    let dataLogTemp = JSON.parse(resultLog[0].data_log)
                    let data_logTemp = JSON.parse(data_log)
                    dataLogTemp.push(data_logTemp)
                    let strDataLogTemp = JSON.stringify(dataLogTemp)
                    db.query("UPDATE test SET data_log=? WHERE log_id=? ",
                    [strDataLogTemp, resultLog[0].log_id], (err, result) => {
                        if (err) {
                            res.json({ status: 'error', message: err })
                            //console.log(err);
                        } else {
                            res.json({ status: 'ok',result:JSON.parse(strDataLogTemp) })
                        }
                    })
                    console.log("found");
                }
            }
        })
})

app.post('/getLog', (req, res) => {
    const log_date = req.body.log_date==="all"?"all":req.body.log_date
    const emailSearch = req.body.emailSearch
    const statusEmail = req.body.statusEmail==="all"?"all":req.body.statusEmail==="yes"?true:false
    const statusLogin= req.body.statusLogin==="all"?"all":req.body.statusLogin==="yes"?true:false
    const page= req.body.page
    console.log(page);

    let sqlLog_date =""
    let sqlStatusEmail=""
    let sqlStatusLogin=""
    let dataSearch = [emailSearch]

    if(log_date!=="all"){
        sqlLog_date = " AND log_date=?"
        dataSearch.push(log_date)
    }

    if(statusEmail!=="all"){
        sqlStatusEmail = " AND status_email=?"
        dataSearch.push(statusEmail)
    }
    if(statusLogin!=="all"){
        sqlStatusLogin = " AND status_login=?"
        dataSearch.push(statusLogin)
    }
    //console.log("SELECT * FROM log WHERE LOCATE(?, log_email)!=0"+sqlLog_date+sqlStatusEmail+sqlStatusLogin+" ORDER BY log_date,log_time DESC");
    //const emailSearch = ""
    db.query("SELECT * FROM log WHERE LOCATE(?, log_email)!=0"+sqlLog_date+sqlStatusEmail+sqlStatusLogin+" ORDER BY log_date,log_time DESC" ,
        dataSearch, (err, result) => {
            if (err) {
                res.json({ status: 'error', message: err })
                console.log(err);
            } else {
                res.json({ status: 'ok',result:result.slice((page-1)*20, page*20),length:result.length })
                //res.send(result);
            }
        })
})
///////////////////////////////////////////////LOG/////////////////////////////////////////////////



app.listen(5000, function () {
    console.log('CORS-enabled web server listening on port 5000')
})

