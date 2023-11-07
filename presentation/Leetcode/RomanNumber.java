package Leetcode;

public class RomanNumber {
    public static void main(String[] args) {
        System.out.println(romanToInt("MCMXCIV"));
    }

    public static int romanToInt(String s) {
        int numb = 0, preNum = 0, answer = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            switch (String.valueOf(s.charAt(i))) {
                case "I":
                    numb = 1;
                    break;
                case "V":
                    numb = 5;
                    break;
                case "X":
                    numb = 10;
                    break;
                case "L":
                    numb = 50;
                    break;
                case "C":
                    numb = 100;
                    break;
                case "D":
                    numb = 500;
                    break;
                case "M":
                    numb = 1000;
                    break;
            }
            if (numb < preNum) {
                answer -= numb;
            } else {
                answer += numb;
            }
            preNum = numb;
        }
        return answer;
    }
    public static int romanToInt2(String s){
        int i = 0, numb = 0, prev = 0, answer = 0;
        do {
            switch (String.valueOf(s.charAt(i))) {
                case "I":
                    numb = 1;
                    break;
                case "V":
                    numb = 5;
                    break;
                case "X":
                    numb = 10;
                    break;
                case "L":
                    numb = 50;
                    break;
                case "C":
                    numb = 100;
                    break;
                case "D":
                    numb = 500;
                    break;
                case "M":
                    numb = 1000;
                    break;
            }
            if(numb>prev){
                answer += numb;
            }else {

            }

            i++;
            return answer;
        }while (i<s.length());
    }
}
