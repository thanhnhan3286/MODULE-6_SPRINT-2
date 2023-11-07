package giai_thuat;

import java.sql.SQLOutput;
import java.util.*;

public class Day_3 {
//    public static List<Integer> findDuplicates(int[] nums1, int[] nums2) {
//        Map<Integer, Integer> numberMap = new HashMap<>();
//        for (int num : nums1) {
//            numberMap.put(num, numberMap.getOrDefault(num, 0) + 1);
//        }
//        for (int num : nums2) {
//            if (numberMap.containsKey(num)) {
//                numberMap.put(num, 0);
//            }
//        }
//        List<Integer> duplicates = new ArrayList<>();
//        for (Map.Entry<Integer, Integer> entry : numberMap.entrySet()) {
//            if (entry.getValue() == 0) {
//                duplicates.add(entry.getKey());
//            }
//        }
//        return duplicates;
//    }
//
//    public static void main(String[] args) {
//        int[] nums1 = {1, 2, 2, 3, 4, 6, 8};
//        int[] nums2 = {2, 2, 2, 3, 5, 7, 8, 8};
//        List<Integer> duplicates = findDuplicates(nums1, nums2);
//        System.out.println("Các số trùng nhau: " + duplicates);
//    }


    public static Map<String, Integer> removeDuplicatesAndCountOccurrences(String string) {
//        String stringNew = string.toLowerCase();
        String[] words = string.trim().split("\\s+");
        Map<String, Integer> wordCountMap = new LinkedHashMap<>();
        for (String word : words) {
            wordCountMap.put(word, wordCountMap.getOrDefault(word, 0) + 1);
        }
        return wordCountMap;
    }
    public static void main(String[] args) {
        String input = "Các từ trùng lặp là các từ a b a b a b a b";
        Map<String, Integer> wordCountMap = removeDuplicatesAndCountOccurrences(input);
        List<String> newList = new ArrayList<>();
        System.out.println("Các từ trùng lặp là: ");
        for (Map.Entry<String, Integer> entry : wordCountMap.entrySet()) {
            newList.add(entry.getKey());
            if (entry.getValue() > 1) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
        String result = String.join(" ", newList);
        System.out.println("Chuỗi sau khi loại bỏ các giá trị trùng lặp: " + result);
    }
}
