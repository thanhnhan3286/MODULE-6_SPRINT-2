package com.example.be_pandahome.service.impl;

import com.example.be_pandahome.model.Order;
import com.example.be_pandahome.model.OrderDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMailSignup(String to, Integer number) throws MessagingException, UnsupportedEncodingException {
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
                "Công ty nội thất PANDA HOME"+ "\n"+"<br/>"+
                "Sđt : 0935195966" + "\n"+"<br/>"+
                "Email : pandahome@gmail.com" + "\n"+"<br/>"+
                "Địa chỉ : 280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);
        javaMailSender.send(message);
    }
    public void sendMailOrder(String to, Order orderNew) throws MessagingException, UnsupportedEncodingException {




        String fromAddress = "thanhnhan3568929@gmail.com";
        String senderName = "Công ty nội thất PANDA HOME";
        String subject = "Thông tin đặt hàng";
        String content = "<div style=\"font-family: Arial, sans-serif;background-color: #f5f5f5;margin: 0;padding: 20px;\">\n" +
                "    <div style=\"max-width: 600px;margin: 0 auto;background-color: #ffffff;padding: 20px;border-radius: 4px;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\">\n" +
                "        <h2 style=\"color: #333333;font-size: 24px;margin-bottom: 20px; text-align: center\">\n" +
                "            Thông tin giao hàng <span style=\"color: darkred\">"+ orderNew.getOrderCode() +"</span>\n" +
                "        </h2>\n" +
                "        <p style=\"color: #666666;margin-bottom: 3px;\">Cảm ơn bạn đã đặt hàng tại PANDA HOME! </p>\n" +
                "        <p style=\"color: #666666;margin-bottom: 3px;\">Đơn hàng của bạn đang được đóng gói, nhân viên của PANDA HOME sẽ liên hệ để xác nhận thời gian giao hàng, bạn vui lòng giữ liên lạc. </p>\n" +
                "        <p style=\"color: #666666;margin-bottom: 3px;\"> Chúng tôi xin gửi thông\n" +
                "            tin giao hàng (nếu có sai sót, bạn vui lòng liên hệ với PANDA HOME sớm nhất có thể để xử lý):</p>\n" +
                "        <div style=\"margin-left: 10%\">\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Mã đơn hàng: "+orderNew.getOrderCode()+"</h3>\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Người nhận hàng: "+orderNew.getConsigneeName()+"</h3>\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Số điện thoại nhận hàng: "+orderNew.getPhoneNumber()+"</h3>\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Địa chỉ nhận hàng: "+orderNew.getDeliveryAddress()+"</h3>\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Tổng tiền hàng: "+orderNew.getTotalPrice()+"</h3>\n" +
                "            <h3 style=\"color: #333333;font-size: 18px;margin-top: 30px;\"> - Phí vận chuyển: "+orderNew.getShippingCost()+"</h3>\n" +
                "        </div>\n" +
                "\n" +
                "\n" +
                "        <p style=\" color: #666666;margin-bottom: 10px;\">\n" +
                "        </p>\n" +
                "        <br>\n" +
                "        <br>\n" +
                "        <p>Cảm ơn bạn đã chọn PANDA HOME!</p>\n" +
                "        <br>\n" +
                "        <br>\n" +
                "        <br>\n" +
                "\n" +
                "    </div>\n" +
                "    <p>Công ty nội thất PANDA HOME</p>\n" +
                "    <p>Sđt : 0935195966</p>\n" +
                "    <p>Email : pandahome@gmail.com</p>\n" +
                "    <p>Địa chỉ : 280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng</p>\n" +
                "</div>";

        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom(fromAddress, senderName);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(content, true);
        javaMailSender.send(message);
    }
}
