var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'bryanmiranda11.5@gmail.com',
            pass: 'biksdyvbsqmnwhyk'
        }
    }
);



var mailOptions= {
    from: 'bamirandab@unal.edu.co',
    to:'bryanmiranda11.5@gmail.com',
    subject: "Prueba de corre",
    text: "Correo de pruebas"
}

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log("Correo enviado exitosamente");
    }
});