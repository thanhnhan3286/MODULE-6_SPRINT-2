package com.example.be_pandahome.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    //        public void sendMail(String to, String subject, String body, Integer number) {
//        String senderName = "CodeGym AirLines";
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(senderName);
//        message.setTo(to);
//        message.setSubject(subject);
//        message.setText(body);
//        javaMailSender.send(message);
//    }
//    public void sendMail(String to, Integer number) {
////        String senderName = "CodeGym AirLines";
//        String subject = "Xác nhận tài khoản";
//        String content = "Xác nhận tài khoản"+ "\n" + "\n" + "\n"+ "<p>Gửi " + to + ",</p><br>"
//                + "Cảm ơn bạn vì đã đăng ký tài khoản CodeGymAirLines. Để hoàn thiện đăng ký, " +
//                "bạn vui lòng nhập mã xác nhận: " + number + "<br/>";
//        content += "<br><br>" +
//                "Cảm ơn bạn đã chọn CodeGymAirLines! <br><br>\n" + "\n" + "\n" + "\n" +
//                "CodeGymAirLines\n" +
//                "Sđt: 0383767463\n" +
//                "Email: codegymairC0223G1@gmail.com\n" +
//                "Địa chỉ: 280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng";
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setTo(to);
//        message.setSubject(subject);
//        message.setText(content);
//        javaMailSender.send(message);
//    }
    public void sendMail(String to, Integer number) throws MessagingException, UnsupportedEncodingException {
        String fromAddress = "thanhnhan3568929@gmail.com";
        String senderName = "Công ty nội thất PANDA HOME";
        String subject = "Mã xác nhận đăng ký tài khoản PANDAHOME";
        String content = "<div style=\"font-family: Arial, sans-serif;\n" +
                "            background-color: #f5f5f5;\n" +
                "            margin: 0;\n" +
                "            padding: 20px;\">\n" +
                "    <div style=\"max-width: 600px;\n" +
                "            margin: 0 auto;\n" +
                "            background-color: #ffffff;\n" +
                "            padding: 20px;\n" +
                "            border-radius: 4px;\n" +
                "            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\">\n" +
                "        <h2 style=\"color: #333333;\n" +
                "            font-size: 24px;\n" +
                "            margin-bottom: 20px;\">Mã xác nhận đăng ký tài khoản PANDA HOME</h2>\n" +
                "        <p style=\"color: #666666;\n" +
                "            margin-bottom: 10px;\">Cảm ơn bạn đã đăng ký! Vui lòng sử dụng mã xác nhận sau đây để hoàn tất quá trình đăng\n" +
                "            ký:</p>\n" +
                "        <h3 style=\"color: #333333;\n" +
                "            font-size: 18px;\n" +
                "            margin-top: 30px;\">" + number + "</h3>\n" +
                "        <p style=\" color: #666666;\n" +
                "            margin-bottom: 10px;\"> Đây là một email tự động, vui lòng không trả lời.</p>\n" +
                "        <br>\n" +
                "        <br>\n" +
                "        <p>Cảm ơn bạn đã chọn PANDA HOME!</p>\n" +
                "    </div>\n" +
                "</div>" +
                "\n" + "\n" + "\n" + "\n" +
                "Công ty nội thất PANDA HOME"+ "\n"+
                "Sđt : 0935195966" + "\n"+
                "Email : pandahome@gmail.com" + "\n"+
                "Địa chỉ : 280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);
        javaMailSender.send(message);
    }
}
