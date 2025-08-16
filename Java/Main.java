public class Main {
    public static void main(String[] args) {
        // List<Borracha> borracha = new ArrayList<Borracha>(); -> ESTUDAR ISSO

        Borracha borracha = new Borracha(); // o tipo do objeto é sempre igual ao nome da classe
        borracha.tamanho = 24;
        borracha.resistencia = 2;

        String[] textos = {
            "Apaga isso...",
            "Apaga mais isso ainda...",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias rerum architecto voluptatem est veritatis quos mollitia ipsum. Fuga deleniti optio minus tenetur! Numquam nulla asperiores ratione atque doloremque! Praesentium?"
        };

        for (String string : textos) {
            borracha.apagar(string);
            System.out.println(borracha.tamanho);
        }
    }
}