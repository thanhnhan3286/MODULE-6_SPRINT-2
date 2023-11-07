package OCA6;

public class Test {
    public static void main(String[] args) {
        String ta = "a";
        ta = ta.concat("b");
        String tb = "c";
        ta = ta.concat(tb);
        ta.replace("c","d");
        ta = ta.concat(tb);
        System.out.println(ta);
    }
}
