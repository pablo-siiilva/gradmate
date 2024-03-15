const loginService = require('login/login-service')

router.get('/login', (req, res) => res.redirect('/'))
router.post('/login', (req, res) => {
    const { login, senha } = req.body;

    const loginResult = loginService.login(login, senha);
    if (!loginResult) {
        return res.status(500).render('login.ejs', { error: 'Erro ao fazer login' });
    }

    res.cookie.auth = loginResult;

    res.status(200).redirect('/');
});

router.get('/logout', (req, res) => {
    loginService.logout()
    res.redirect('/');
});

async function novaSenha(nome, ra, email) {
    const nomePart = nome.slice(0, 5).toUpperCase();
    const raPart = ra.slice(-3);
    const emailPart = email.slice(0, 3);
    const senha = `${nomePart}${raPart}${emailPart}`;

    console.log(senha)
    return enviarEmail(senha, email);
}

async function enviarEmail(senha, email) {
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
        subject: 'Senha do GradMate',
        text: 'Sua senha do GradMate é: ' + senha
    }, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });

    mailTransport.close();

    return senha;
}

module.exports = { login, logout, encryptPassword, novaSenha, enviarEmail }