public class PreObjeto {

    public static float apagar (float tamanho, int resistencia, String texto) {
        return tamanho - (float) texto.length() * 0.01f / (float) resistencia;
    }

    public static void main(String[] args) {
        float tamanho;
        int resistencia;
        String marca, cor;

        tamanho = 24; // cm³
        resistencia = 2; // varia de 1 a 3
        marca = "Mecur";
        cor = "Verde";

        // a cada 20 caracteres gastam .2cm³/resistencia
        String text1 = "Apaga isso...";
        String text2 = "Apaga mais isso ainda...";
        String text3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias rerum architecto voluptatem est veritatis quos mollitia ipsum. Fuga deleniti optio minus tenetur! Numquam nulla asperiores ratione atque doloremque! Praesentium?";

        // mostra o tamanho e apagar...
        System.out.println(tamanho);
        tamanho = apagar(tamanho,resistencia,text1);
        System.out.println(tamanho);
        tamanho = apagar(tamanho,resistencia,text2);
        System.out.println(tamanho);
        tamanho = apagar(tamanho,resistencia,text3);
        System.out.println(tamanho);
        tamanho = apagar(tamanho,resistencia,marca);
        System.out.println(tamanho);
        tamanho = apagar(tamanho,resistencia,cor);
        System.out.println(tamanho);
    }
}