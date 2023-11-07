package giai_thuat;

public class Day_6 {
//    public static void main(String[] args) {
//        int n1 = 0, n2 = 1, n3;
//        System.out.print("Dãy Fibonacci nhỏ hơn 100: " + n1 + " " + n2);
//        n3 = n1 + n2;
//        while (n3 < 100) {
//            System.out.print(" " + n3);
//            n1 = n2;
//            n2 = n3;
//            n3 = n1 + n2;
//        }
//    }


    public static void main(String[] args) {
        System.out.println("Các số nguyên tố nhỏ hơn 100:");
        for (int i = 2; i < 100; i++) {
            if (isPrime(i)) {
                System.out.print(i + " ");
            }
        }
    }
    public static boolean isPrime(int number) {
        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
