package giai_thuat;

public class Test {
    public static void main(String[] args) {
        String inputString = "    hello world example";
        String formattedString = formatString(inputString);
        System.out.println(formattedString);
    }

    private static String formatString(String inputString) {
        String[] words = inputString.split(" ");
        StringBuilder formattedBuilder = new StringBuilder();
        for (String word : words) {
            if (!word.isEmpty()) {
                String formattedWord = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
                formattedBuilder.append(formattedWord).append(" ");
            }
        }
        return formattedBuilder.toString().trim();
    }
}
