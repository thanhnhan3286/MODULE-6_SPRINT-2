package DemoGeneric;
public class Main {
    public static void main(String[] args) {

        Test<Integer> integerBox = new Test<>();
        integerBox.setContent(15);
        Integer value = integerBox.getContent();
        System.out.println("integerBox: " + value);

        Test<String> stringBox = new Test<>();
        stringBox.setContent("Hello");
        String text = stringBox.getContent();
        System.out.println("stringBox: " + text);

//        stringBox.setContent(15);
    }

}
