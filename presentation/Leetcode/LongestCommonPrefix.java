package Leetcode;

import java.util.*;

public class LongestCommonPrefix {
    public static String longestCommonPrefix(String[] strs) {
        StringBuilder str = new StringBuilder();
        int min = strs[0].length();
        for (int i = 1; i < strs.length; i++) {
            if (strs[i].length() < min) {
                min = strs[i].length();
            }
        }
        outerLoop:
        for (int i = 0; i < strs[0].length(); i++) {
            int count = 0;
            String atI = String.valueOf(strs[0].charAt(i));
            for (String s : strs) {
                if (String.valueOf(s.charAt(i)).equals(atI)) {
                    count++;
                } else {
                    break outerLoop;
                }
                if (count == strs.length) {
                    str.append(atI);
                    count = 0;
                }
            }
        }
        return str.toString();
    }

    public static void main(String[] args) {
        String[] str1 = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(str1));


        String str = "abcbcbdef";
        List<Character> l = new ArrayList<>();
        for (char c : str.toCharArray()) {
            int co = 0;
            for (int i = 0; i < str.length(); i++) {
                if (str.charAt(i) == c) {
                    co++;
                }
            }
            if (co > 1) {
                if (!l.contains(c)) {
                    l.add(c);
                }
            }
        }
        char[] ch = new char[l.size()];
        int i = 0;
        for (char c : l) {
            ch[i] = c;
            i++;
        }
//        return ch;

    }
}
