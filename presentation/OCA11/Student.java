package OCA11;

public class Student {
    String name;
    double b;

    boolean contract;

//    public Student(String name, double b, boolean contract) {
//        this.name = name;
//        this.b = b;
//        this.contract = contract;
//    }

    public Student() {
//        name = "hung";
//        b = 100.0f;
//        contract = true;
//        this("hung",122,true);
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", b=" + b +
                ", contract=" + contract +
                '}';
    }

    public static void main(String[] args) {
        Student s = new Student();
//        s.name = "hung";
//        s.b = 100;

        System.out.println(s);

    }
}
