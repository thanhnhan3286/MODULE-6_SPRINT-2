package giai_thuat;

import java.util.HashMap;
import java.util.Map;

public class Day_4 {
//    public static void main(String[] args) {
//        int num1 = 123456;
//        int num2 = 0;
//        while (num1 > 10) {
//            num2 += num1 % 10;
//            num1 = num1 / 10;
//            num2 *= 10;
//        }
//        num2 += num1;
//        System.out.println(num2);
//    }


    public static void main(String[] args) {
        String[] words = {"apple", "banana", "apple", "orange", "banana", "apple"};
        Map<String,Integer> mapString = new HashMap<>();
        for (String map : words) {
            if (mapString.containsKey(map)) {
                int count = mapString.get(map);
                mapString.put(map, count + 1);
            } else {
                mapString.put(map, 1);
            }
        }
        String[] uniqueWords = new String[mapString.size()];
        int index = 0;
        for (String word : mapString.keySet()) {
            uniqueWords[index] = word;
            index++;
        }
        for (String word : uniqueWords) {
            int count = mapString.get(word);
            System.out.println(word + ": " + count);
        }
    }
}
