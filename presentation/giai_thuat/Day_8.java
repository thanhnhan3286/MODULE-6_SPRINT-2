package giai_thuat;

import java.util.HashMap;
import java.util.Map;

public class Day_8 {
//    public static void main(String[] args) {
//        int[] arrNum = {4, 5, 6, 7, 8, 9};
//        int sum = 15;
//        int[][] result = {{-1, -1}, {-1, -1}};
//        for (int i = 0; i < arrNum.length - 1; i++) {
//            for (int j = i + 1; j < arrNum.length; j++) {
//                if (arrNum[i] + arrNum[j] == sum) {
//                    result[0][0] = arrNum[i];
//                    result[0][1] = i;
//                    result[1][0] = arrNum[j];
//                    result[1][1] = j;
//                    break;
//                }
//            }
//            if (result[0][0] != -1) {
//                break;
//            }
//        }
//        if (result[0][0] == -1) {
//            System.out.println("Không tìm thấy 2 số có tổng bằng : " + sum);
//        } else {
//            System.out.println("Vị trí của 2 số bất kỳ có tổng bằng : " + sum + " là: ");
//            System.out.println("Số thứ nhất: " + result[0][0] + " ở vị trí thứ " + result[0][1]);
//            System.out.println("Số thứ hai: " + result[1][0] + " ở vị trí thứ " + result[1][1]);
//        }
//
//    }
//    public static int[] findTwoSum(int[] nums, int target) {
//        Map<Integer, Integer> map = new HashMap<>();
//
//        for (int i = 0; i < nums.length; i++) {
//            int complement = target - nums[i];
//            if (map.containsKey(complement)) {
//                return new int[]{map.get(complement), i};
//            }
//            map.put(nums[i], i);
//        }
//
//        return new int[]{-1, -1}; // Không tìm thấy cặp số
//    }
//
//    public static void main(String[] args) {
//        int[] nums = {2, 4, 7, 11, 15};
//        int target = 26;
//        int[] result = findTwoSum(nums, target);
//        if (result[0] != -1) {
//            System.out.println("Vị trí của hai số có tổng " + target + ": " + result[0] + ", " + result[1]);
//        } else {
//            System.out.println("Không tìm thấy cặp số có tổng " + target + " trong mảng.");
//        }
//    }


    ///276
    public static int romanToInt(String roman) {
        Map<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
        int sum = 0;
        int n = roman.length();
        for (int i = 0; i < n; i++) {
            int currentVal = romanMap.get(roman.charAt(i));
            if (i < n - 1 && currentVal < romanMap.get(roman.charAt(i + 1))) {
                sum -= currentVal;
            } else {
                sum += currentVal;
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        String romanNumeral = "CMII";
        int result = romanToInt(romanNumeral);
        System.out.println("Giá trị số nguyên tương ứng: " + result);
    }
}
