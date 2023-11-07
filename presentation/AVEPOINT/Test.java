package AVEPOINT;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public class Test {
        public static void main(String[] args) {
        int a = 0, b = 1;
        System.out.print(a + ", ");
        System.out.print(b + ", ");
        int sum = a + b;
        for (int i = 1; i < 1000; i++) {
            if (i == a + b) {
                System.out.print(i + ", ");
                a = b;
                b = i;
                sum += b;
            }
        }
        System.out.println("Sum = " + sum);
    }
//    public static void main(String[] args) {
//        int[] arr = {1, 2, 3,9,  5, 8};
//        for (int i = 1; i < 10; i++) {
//            if (binarySearch(arr, i) == -1) {
//                System.out.println(i);
//            }
//        }
//            Arrays.sort(arr);
//        System.out.println(Arrays.toString(arr));
//            System.out.println(binarySearch(arr, 2));
//    }

//    public static int binarySearch(int[] arr, int numb) {
//
//        int left = 0;
//        int right = arr.length - 1;
//        for (int i = left; i <= right; i++) {
//            int mid = (left + right) / 2;
//            if (arr[mid] == numb) {
//                return mid;
//            } else if (arr[mid] < numb) {
//                left = mid + 1;
//            } else {
//                right = mid - 1;
//            }
//        }
//        return -1;
//    }

//    public static void main(String[] args) {
////        System.out.println(solution("ThanhNhanDo"));
//        StringBuilder stringBuilder = new StringBuilder();
//        String arg1 = "ThanhNhanDo";
//        System.out.println(solution2(arg1));
//        for (int i = 0; i < arg1.length(); i++) {
////            char ch = arg1.charAt(i);
////            if(Character.isUpperCase(ch)){
////
////            }
//            if(String.valueOf(arg1.charAt(i)).equals(String.valueOf(arg1.charAt(i)).toUpperCase())){
//                System.out.println(true);
//                stringBuilder.append(" ").append(String.valueOf(arg1.charAt(i)).toLowerCase());
//            }else {
//                stringBuilder.append(arg1.charAt(i));
//            }
//        }
//        String result = stringBuilder.toString().trim();
//        System.out.println(result);

    //    }
    public static String solution(String arg1) {

        return arg1.replaceAll("([A-Z])", " $0").toLowerCase().trim();
    }

    //    public static List<String> solution2(String a){
//        List<String> arr = Arrays.asList(a.split(""));
//        int x = 564;
//        String[] arr1 = String.valueOf(x).split("");
//    }
//    public static void main(String[] args) {
//        int x = 10;
//        String[] arr1 = new String[]{Arrays.toString(String.valueOf(x).split(""))};
//        System.out.println(arr1[0]);
//        System.out.println(isPalindrome(10));
//    }
//    public static boolean isPalindrome(int x) {
//        if(x<0){
//            return false;
//        }
//        List<String> arr = Arrays.asList(String.valueOf(x).split(""));
//        for(int i = 0; i<arr.size()/2; i++){
//            if(!Objects.equals(arr.get(i), arr.get(arr.size() - 1 - i))){
//                return false;
//            }
//        }
//        return
//        String.valueOf(x).equals((String.valueOf(new StringBuilder(String.valueOf(x)).reverse())));
//    }
}
