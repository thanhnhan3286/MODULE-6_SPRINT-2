package giai_thuat;

import java.util.Arrays;

public class Day_2 {
    //    public static void main(String[] args) {
//        String a = "ansnabsbsbdndnfhans";
//        char b = 'n';
//        int count = countCharacter(a, b);
//        System.out.println("Ký tự " + b + " xuất hiện: " + count + " lần.");
//    }
//
//    public static int countCharacter(String a, char b) {
//        int count = 0;
//        for (int i = 0; i < a.length(); i++) {
//            if (b == a.charAt(i)) {
//                count += 1;
//            }
//        }
//        return count;
//    }
    public static void main(String[] args) {
        String a = "ansnabsbsbdndnfhans";
        char[] chars = a.toCharArray();
        Arrays.sort(chars);
        System.out.println("Chuỗi đã sắp xếp: " + new String(chars));
    }


//    public static String delimiterCharacter(String a) {
//        char[] chars = a.toCharArray();
//        for (int i = 0; i < chars.length - 1; i++) {
//            if (chars[i] > chars[i + 1]) {
//                char temp = chars[i + 1];
//                chars[i + 1] = chars[i];
//                chars[i] = temp;
//                i--;
//            }
//        }
//        return  new String(chars);
//    } Sai - ko chạy được

}

