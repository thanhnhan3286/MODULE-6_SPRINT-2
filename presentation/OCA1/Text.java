package OCA1;

public class Text {

    public void updatePrice(Product product, double price) {
        price = price * 2;
        product.price = product.price + price;
    }

    public static void main(String[] args) {
        Product prt = new Product();
        prt.price = 200;
        double newPrice = 100;
        Text t = new Text();
        t.updatePrice(prt, newPrice);
        System.out.println("Gía mới: " + prt.price + " : " + newPrice);
    }
}

