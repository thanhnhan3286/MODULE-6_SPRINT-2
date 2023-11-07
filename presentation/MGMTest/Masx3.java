package MGMTest;

public class Masx3 {
    public static void main(String[] args) {
        String message = "theredfoxjumpedoverthelazydog";
        String secretKey = "quickfoxlazy";
        boolean result = checkOrder(message, secretKey);
        System.out.println(result);
    }

    public static boolean checkOrder(String message, String secretKey) {
        int messageIndex = 0;
        int secretKeyIndex = 0;
        while (messageIndex < message.length() && secretKeyIndex < secretKey.length()) {
            if (message.charAt(messageIndex) == secretKey.charAt(secretKeyIndex)) {
                secretKeyIndex++;
            }
            messageIndex++;
        }
        return secretKeyIndex == secretKey.length();
    }
}
