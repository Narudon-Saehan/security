import emailjs from '@emailjs/browser';

export const sendEmail = (email,message,succeed,failed) => {
    let temp = {
        user_name:"test",
        user_email:email,
        message:message
    }  
    //emailjs.send('service_1izkvhc', 'template_l86x5fe', temp, 'G_I1Fw-Q-S55niWyy')
    emailjs.send('service_k0ugr97', 'template_d2jjzp6', temp, 'sV6WkuAhxA8YR917c')
        .then((result) => {
            succeed()
        }, (error) => {
            failed(error.text)
        });
};