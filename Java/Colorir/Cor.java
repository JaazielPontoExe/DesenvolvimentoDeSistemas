package Colorir;

// Classe -> Modelo/Forma
public class Cor {
    // Atributos -> Caractreisticas
    private int red, blue, green;
    private int max = 255, min = 0;

    // Construtor -> como o objeto é instanciado
    public Cor() {
        this.red = 0;
        this.green = 0;
        this.blue = 0;
    }

    public Cor(String cor) {
        this();
        if (cor == "blue") {
            this.blue = max;
        }
    }

    // Métodos -> Ações
    public void setRed(int red) {
        if (red < min) {
            red = min;
        } else if (red > max) {
            red = max;
        } this.red = red;
    }
    
}

// public/private -> escopo/visibilidade da instância
//      Instâncias internas de uma classe são, por padrão, privados
//          --> II Princípio de POO -> Encapsulamento