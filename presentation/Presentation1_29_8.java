public class Presentation1_29_8 {
    public static void main(String[] args) {
        int decimalNumber = 19; // Số hệ thập phân cần chuyển đổi

        // Gọi phương thức chuyển đổi và in ra kết quả
        String binaryNumber = decimalToBinary(decimalNumber);
        System.out.println("Hệ nhị phân: " + binaryNumber);

        String binaryNumber2 = decimalToBinary2(decimalNumber);
        System.out.println("Hệ nhị phân 2: " + binaryNumber2);
    }
    public static String decimalToBinary(int decimalNumber) {
        StringBuilder binary = new StringBuilder();

        // Chuyển đổi từ phần nguyên đến phần dư cho đến khi decimalNumber = 0
        while (decimalNumber > 0) {
            int remainder = decimalNumber % 2; // Lấy phần dư
            binary.insert(0, remainder); // Thêm phần dư vào đầu chuỗi
            decimalNumber /= 2; // Chia decimalNumber cho 2
        }

        // Trường hợp số hệ thập phân là 0
        if (binary.length() == 0) {
            binary.append("0");
        }

        return binary.toString();
    }
    public static String decimalToBinary2(int decimalNumber) {
        if (decimalNumber == 0) {
            return "0"; // Trường hợp số hệ thập phân là 0
        } else if (decimalNumber == 1) {
            return "1"; // Trường hợp số hệ thập phân là 1
        } else {
            return decimalToBinary(decimalNumber / 2) + decimalNumber % 2;
        }
    }
}
