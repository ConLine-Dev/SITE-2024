require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const multer = require('multer');

// Multer é usado para anexar os arquivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Armazenar as credenciais
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});


// Rota para enviar e-mail
router.post('/send-email', upload.single('file'), async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const attachment = req.file;

        // Se sim, continue com o envio do email
        const mailOptions = {
                from: 'TRABALHE CONOSCO <trabalhe-conosco@conlinebr.com.br>',
                to: process.env.DESTINATION_EMAIL,
                subject: `TRABALHE CONOSCO - Currículo de ${name}`,
                html: `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title></title>
                </head>
                <body style="background-color: #ffffff; color: #3b3f44; position: relative; width: 100%; height: 100%;">
                <table cellspacing="0" cellpadding="0" border="0" role="presentation" style="background-color: #ffffff; width: 50% !important; height: 50vh !important; border-spacing: 10px 0; margin: 0 auto;">
                    <tbody style="max-width: 700px;">      
                        <tr>
                            <td style="font-size: 0px; line-height: 0px;" colspan="4"> 
                            <a href="https://conlinebr.com.br/" target="_blank" style="color: #f9423a; text-decoration: underline;">
                                <img src="https://img.mailinblue.com/6322847/images/content_library/original/658eba6707e23fdd489e8b7d.png" style="display: block; width: 250px; margin: 0 auto;">
                            </a> 
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="4" valign="top" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: center;">
                            <h1 style="margin: 0 auto; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                <span style="font-size: 24px;">
                                    <strong>Olá, segue os dados de um possível candidato</strong>
                                </span>
                            </h1>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="2" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #ffffff; font-size: 18px;">Nome</span>
                            </h2>
                            </td>

                            <td align="center" colspan="2" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #ffffff; font-size: 18px;">E-mail</span>
                            </h2>
                            </td>
                        </tr>

                        <tr>
                            <td align="center" colspan="2" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #ffffff; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center; width: 50%;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #3b3f44; font-size: 16px; font-weight: 400;">${name}</span>
                            </h2>
                            </td>

                            <td align="center" colspan="2" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #ffffff; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center; width: 50%;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #3b3f44; font-size: 16px; font-weight: 400;">${email}</span>
                            </h2>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" colspan="4" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center; width: 50%;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #ffffff; font-size: 18px;">Conte-nos um pouco sobre você!</span>
                            </h2>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" colspan="4" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #ffffff; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center; max-width: 500px;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #3b3f44; font-size: 16px; font-weight: 400;">${message}</span>
                            </h2>
                            </td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>         <tr>
                            <td>&nbsp;</td>
                        </tr>

                        <tr>
                            <td align="center" colspan="4" style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #ffffff; border-radius: 5px; line-height: 1; padding-bottom: 8px; text-align: center; max-width: 500px;">
                            <h2 style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                <span style="color: #f9423a; font-size: 18px;">Conline em movimento!</span>
                                <br>
                                <span style="color: #3b3f44; font-size: 15px; font-weight: 400;">Este email foi enviado através do formulário de</span>
                                <br>
                                <span style="color: #3b3f44; font-size: 15px; font-weight: 400;">Trabalhe conosco do site da Conline</span>
                            </h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </body>
                </html>
                `,
                attachments: [
                    {
                        filename: attachment.originalname,
                        content: attachment.buffer,
                    },
                ],
        };

        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ captchaSucess: true, info: info })
    } catch (error) {
        console.log(error)
        res.status(404).json({ error: 'Erro durante o processamento.' });
    }

});


module.exports = router;
