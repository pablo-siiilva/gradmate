const nodemailer = require('nodemailer');

async function enviarEmailDeNovoUsuario(senha, email) {
    enviarEmail(subject, text, email)
}

async function enviarEmail(subject, text, email) {
    var mailTransport = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'gradmate.suporte@outlook.com',
            pass: '!grad1234'
        }
    });

    mailTransport.sendMail({
        from: 'gradmate.suporte@outlook.com',
        to: email,
        subject: subject,
        text: text
    }, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado => ' + info.response);
        }
    });

    mailTransport.close();
}

module.exports = { enviarEmailDeNovoUsuario }