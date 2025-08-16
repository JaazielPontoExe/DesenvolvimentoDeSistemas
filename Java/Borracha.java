public class Borracha {
    // ATRIBUTOS -> CARCTERÍSTICAS
    public float tamanho = 24; // em cm³
    public int resistencia = 2; // de 1 a 3
    // CUIDADO COM SUPER MODELOS
    // String marca, cor;

    // MÉTODOS -> AÇÕES E ACESSO AOS DADOS
    public void apagar (String texto) {
        tamanho = tamanho - (float) texto.length() * 0.01f / (float) resistencia;
    }
}