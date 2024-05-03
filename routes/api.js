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
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
                xmlns:o="urn:schemas-microsoft-com:office:office">
    
                <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="format-detection" content="telephone=no">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title></title>
                <style type="text/css" emogrify="no">
                    #outlook a {
                        padding: 0;
                    }
    
                    .ExternalClass {
                        width: 100%;
                    }
    
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                        line-height: 100%;
                    }
    
                    table td {
                        border-collapse: collapse;
                        mso-line-height-rule: exactly;
                    }
    
                    .editable.image {
                        font-size: 0 !important;
                        line-height: 0 !important;
                    }
    
                    .nl2go_preheader {
                        display: none !important;
                        mso-hide: all !important;
                        mso-line-height-rule: exactly;
                        visibility: hidden !important;
                        line-height: 0px !important;
                        font-size: 0px !important;
                    }
    
                    body {
                        width: 100% !important;
                        -webkit-text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        margin: 0;
                        padding: 0;
                    }
    
                    img {
                        outline: none;
                        text-decoration: none;
                        -ms-interpolation-mode: bicubic;
                    }
    
                    a img {
                        border: none;
                    }
    
                    table {
                        border-collapse: collapse;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                    }
    
                    th {
                        font-weight: normal;
                        text-align: left;
                    }
    
                    *[class="gmail-fix"] {
                        display: none !important;
                    }
                </style>
                <style type="text/css" emogrify="no">
                    @media (max-width: 600px) {
                        .gmx-killpill {
                            content: ' /03D1';
                        }
                    }
                </style>
                <style type="text/css" emogrify="no">
                    @media (max-width: 600px) {
                        .gmx-killpill {
                            content: ' /03D1';
                        }
    
                        .r0-o {
                            border-style: solid !important;
                            margin: 0 auto 0 auto !important;
                            width: 320px !important
                        }
    
                        .r1-i {
                            background-color: #ffffff !important
                        }
    
                        .r2-c {
                            box-sizing: border-box !important;
                            text-align: center !important;
                            valign: top !important;
                            width: 100% !important
                        }
    
                        .r3-o {
                            border-style: solid !important;
                            margin: 0 auto 0 auto !important;
                            width: 100% !important
                        }
    
                        .r4-i {
                            background-color: #ffffff !important;
                            padding-bottom: 20px !important;
                            padding-left: 15px !important;
                            padding-right: 15px !important;
                            padding-top: 20px !important
                        }
    
                        .r5-c {
                            box-sizing: border-box !important;
                            display: block !important;
                            valign: top !important;
                            width: 100% !important
                        }
    
                        .r6-o {
                            border-style: solid !important;
                            width: 100% !important
                        }
    
                        .r7-i {
                            padding-left: 0px !important;
                            padding-right: 0px !important
                        }
    
                        .r8-i {
                            padding-bottom: 20px !important;
                            padding-left: 15px !important;
                            padding-right: 15px !important;
                            padding-top: 20px !important
                        }
    
                        .r9-c {
                            box-sizing: border-box !important;
                            text-align: left !important;
                            valign: top !important;
                            width: 100% !important
                        }
    
                        .r10-o {
                            border-style: solid !important;
                            margin: 0 auto 0 0 !important;
                            width: 100% !important
                        }
    
                        .r11-i {
                            padding-top: 15px !important;
                            text-align: center !important
                        }
    
                        .r12-o {
                            border-bottom-width: 0px !important;
                            border-left-width: 0px !important;
                            border-right-width: 0px !important;
                            border-style: solid !important;
                            border-top-width: 0px !important;
                            margin: 0 auto 0 auto !important;
                            margin-bottom: 0px !important;
                            margin-top: 0px !important;
                            width: 100% !important
                        }
    
                        .r13-i {
                            background-color: #f9423a !important;
                            padding-bottom: 8px !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                            padding-top: 0px !important;
                            text-align: center !important
                        }
    
                        .r14-o {
                            border-style: solid !important;
                            margin: 0 auto 0 0 !important;
                            margin-top: 2px !important;
                            width: 100% !important
                        }
    
                        .r15-i {
                            padding-bottom: 5px !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                            padding-top: 5px !important;
                            text-align: center !important
                        }
    
                        .r16-o {
                            background-size: cover !important;
                            border-style: solid !important;
                            margin: 0 auto 0 auto !important;
                            width: 100% !important
                        }
    
                        .r17-o {
                            border-style: solid !important;
                            margin: 0 auto 0 0 !important;
                            margin-bottom: 0px !important;
                            margin-top: 0px !important;
                            width: 100% !important
                        }
    
                        .r18-i {
                            background-color: #f9423a !important;
                            padding-bottom: 8px !important;
                            padding-top: 8px !important;
                            text-align: center !important
                        }
    
                        .r19-i {
                            padding-bottom: 15px !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                            padding-top: 5px !important;
                            text-align: left !important
                        }
    
                        .r20-c {
                            box-sizing: border-box !important;
                            text-align: center !important;
                            valign: top !important;
                            width: 320px !important
                        }
    
                        .r21-i {
                            color: #3b3f44 !important;
                            padding-bottom: 0px !important;
                            padding-top: 15px !important;
                            text-align: center !important
                        }
    
                        .r22-c {
                            box-sizing: border-box !important;
                            text-align: center !important;
                            width: 100% !important
                        }
    
                        .r23-i {
                            padding-bottom: 15px !important;
                            padding-left: 0px !important;
                            padding-right: 0px !important;
                            padding-top: 0px !important
                        }
    
                        .r24-c {
                            box-sizing: border-box !important;
                            text-align: center !important;
                            valign: top !important;
                            width: 129px !important
                        }
    
                        .r25-o {
                            border-style: solid !important;
                            margin: 0 auto 0 auto !important;
                            width: 129px !important
                        }
    
                        body {
                            -webkit-text-size-adjust: none
                        }
    
                        .nl2go-responsive-hide {
                            display: none
                        }
    
                        .nl2go-body-table {
                            min-width: unset !important
                        }
    
                        .mobshow {
                            height: auto !important;
                            overflow: visible !important;
                            max-height: unset !important;
                            visibility: visible !important;
                            border: none !important
                        }
    
                        .resp-table {
                            display: inline-table !important
                        }
    
                        .magic-resp {
                            display: table-cell !important
                        }
                    }
                </style>
                <style type="text/css">
                    p,
                    h1,
                    h2,
                    h3,
                    h4,
                    ol,
                    ul {
                        margin: 0;
                    }
    
                    a,
                    a:link {
                        color: #f9423a;
                        text-decoration: underline
                    }
    
                    .nl2go-default-textstyle {
                        color: #3b3f44;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 16px;
                        line-height: 1.5;
                        word-break: break-word
                    }
    
                    .default-button {
                        color: #ffffff;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: normal;
                        line-height: 1.15;
                        text-decoration: none;
                        word-break: break-word
                    }
    
                    .default-heading1 {
                        color: #1F2D3D;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 36px;
                        word-break: break-word
                    }
    
                    .default-heading2 {
                        color: #1F2D3D;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 32px;
                        word-break: break-word
                    }
    
                    .default-heading3 {
                        color: #1F2D3D;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 24px;
                        word-break: break-word
                    }
    
                    .default-heading4 {
                        color: #1F2D3D;
                        font-family: arial, helvetica, sans-serif;
                        font-size: 18px;
                        word-break: break-word
                    }
    
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: inherit !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important;
                    }
    
                    .no-show-for-you {
                        border: none;
                        display: none;
                        float: none;
                        font-size: 0;
                        height: 0;
                        line-height: 0;
                        max-height: 0;
                        mso-hide: all;
                        overflow: hidden;
                        table-layout: fixed;
                        visibility: hidden;
                        width: 0;
                    }
                </style>
                <!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
                <style type="text/css">
                    a:link {
                        color: #f9423a;
                        text-decoration: underline;
                    }
                </style>
                </head>
    
                <body bgcolor="#ffffff" text="#3b3f44" link="#f9423a" yahoo="fix" style="background-color: #ffffff;">
                <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%"
                    style="background-color: #ffffff; width: 100%;">
                    <tr>
                        <td>
                            <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center"
                            class="r0-o" style="table-layout: fixed; width: 600px;">
                            <tr>
                                <td valign="top" class="r1-i" style="background-color: #ffffff;">
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
                                        class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <tr>
                                        <td class="r4-i" style="background-color: #ffffff; padding-bottom: 20px; padding-top: 20px;">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r2-c" align="center">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="200" class="r3-o"
                                                                            style="table-layout: fixed; width: 200px;">
                                                                            <tr>
                                                                            <td style="font-size: 0px; line-height: 0px;"> <a
                                                                                    href="https://conlinebr.com.br/" target="_blank"
                                                                                    style="color: #f9423a; text-decoration: underline;">
                                                                                    <img
                                                                                        src="https://img.mailinblue.com/6322847/images/content_library/original/658eba6707e23fdd489e8b7d.png"
                                                                                        width="200" title="Venha" border="0"
                                                                                        style="display: block; width: 100%;"></a> </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
                                        class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <tr>
                                        <td class="r8-i" style="padding-bottom: 20px; padding-top: 20px;">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r10-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r11-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-top: 15px; text-align: center;">
                                                                                <div>
                                                                                    <h1 class="default-heading1"
                                                                                        style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                        <span style="font-size: 24px;"><strong>Olá,
                                                                                            segue os dados de um possível
                                                                                            candidato</strong></span></h1>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
                                        class="r3-o" style="table-layout: fixed; width: 100%;">
                                        <tr>
                                        <td class="r8-i" style="padding-bottom: 20px; padding-top: 20px;">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                <tr>
                                                    <th width="50%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r2-c" align="center">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r12-o"
                                                                            style="border-bottom-width: 0px; border-collapse: separate; border-left-width: 0px; border-radius: 10px; border-right-width: 0px; border-top-width: 0px; margin-bottom: 0px; margin-top: 0px; table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r13-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 10px; line-height: 1; padding-bottom: 8px; text-align: center;">
                                                                                <div>
                                                                                    <h2 class="default-heading2"
                                                                                        style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                                                                        <span
                                                                                        style="color: #ffffff; font-size: 18px;">Nome</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r14-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                            <td height="2" style="font-size: 2px; line-height: 2px;">
                                                                                ­</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r15-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                                <div>
                                                                                    <p style="margin: 0;">${name}</p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                    <th width="50%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r2-c" align="center">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r12-o"
                                                                            style="border-bottom-width: 0px; border-collapse: separate; border-left-width: 0px; border-radius: 10px; border-right-width: 0px; border-top-width: 0px; margin-bottom: 0px; margin-top: 0px; table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r13-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 10px; line-height: 1; padding-bottom: 8px; text-align: center;">
                                                                                <div>
                                                                                    <h2 class="default-heading2"
                                                                                        style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 32px; word-break: break-word;">
                                                                                        <span
                                                                                        style="color: #ffffff; font-size: 18px;">E-mail</span>
                                                                                    </h2>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r14-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                            <td height="2" style="font-size: 2px; line-height: 2px;">
                                                                                ­</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r15-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                                <div>
                                                                                    <p style="margin: 0;">${email}</p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
                                        class="r16-o" style="table-layout: fixed; width: 100%;">
                                        <tr>
                                        <td class="r8-i" style="padding-bottom: 20px; padding-top: 20px;">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r17-o"
                                                                            style="border-collapse: separate; border-radius: 10px; margin-bottom: 0px; margin-top: 0px; table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r18-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; word-break: break-word; background-color: #f9423a; border-radius: 10px; line-height: 1.15; padding-bottom: 8px; padding-top: 8px; text-align: center;">
                                                                                <div>
                                                                                    <p style="margin: 0; font-size: 18px;"><span
                                                                                        style="color: #FFFFFF;"><strong>Conte-nos um
                                                                                            pouco sobre você!</strong></span></p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r14-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr class="nl2go-responsive-hide">
                                                                            <td height="2" style="font-size: 2px; line-height: 2px;">
                                                                                ­</td>
                                                                            </tr>
                                                                            <tr>
                                                                            <td align="left" valign="top"
                                                                                class="r19-i nl2go-default-textstyle"
                                                                                style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; word-break: break-word; padding-bottom: 15px; padding-top: 5px; text-align: left;">
                                                                                <div>
                                                                                    <p style="margin: 0;">${message}}</p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </table>
                            <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%" align="center"
                            class="r3-o" style="table-layout: fixed; width: 100%;">
                            <tr>
                                <td valign="top">
                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center"
                                        class="r0-o" style="table-layout: fixed; width: 600px;">
                                        <tr>
                                        <td class="r8-i" style="padding-bottom: 20px; padding-top: 20px;">
                                            <table width="100%" cellspacing="0" cellpadding="0" border="0" role="presentation">
                                                <tr>
                                                    <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                    <table cellspacing="0" cellpadding="0" border="0" role="presentation"
                                                        width="100%" class="r6-o" style="table-layout: fixed; width: 100%;">
                                                        <tr>
                                                            <td valign="top" class="r7-i"
                                                                style="padding-left: 15px; padding-right: 15px;">
                                                                <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                                                role="presentation">
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r10-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r21-i nl2go-default-textstyle"
                                                                                style="font-family: arial,helvetica,sans-serif; word-break: break-word; color: #3b3f44; font-size: 18px; line-height: 1.5; padding-top: 15px; text-align: center;">
                                                                                <div>
                                                                                    <p style="margin: 0;"><span
                                                                                        style="color: #f9423a;"><strong>Conline em
                                                                                            movimento!</strong></span></p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="r9-c" align="left">
                                                                        <table cellspacing="0" cellpadding="0" border="0"
                                                                            role="presentation" width="100%" class="r10-o"
                                                                            style="table-layout: fixed; width: 100%;">
                                                                            <tr>
                                                                            <td align="center" valign="top"
                                                                                class="r21-i nl2go-default-textstyle"
                                                                                style="font-family: arial,helvetica,sans-serif; word-break: break-word; color: #3b3f44; font-size: 18px; line-height: 1.5; padding-top: 15px; text-align: center;">
                                                                                <div>
                                                                                    <p style="margin: 0; font-size: 14px;">Este email
                                                                                        foi enviado através do formulário de</p>
                                                                                    <p style="margin: 0; font-size: 14px;">Trabalhe
                                                                                        conosco do site da Conline</p>
                                                                                </div>
                                                                            </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    </th>
                                                </tr>
                                            </table>
                                        </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            </table>
                        </td>
                    </tr>
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
