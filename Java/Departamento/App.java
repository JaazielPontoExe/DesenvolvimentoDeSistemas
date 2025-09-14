package Departamento;

public class App {
    public static void main(String[] args) {
        Departamento d1 = new Departamento("TI - Desenvolvimento");
        Departamento d2 = new Departamento("TI - Infra");
        Departamento d3 = new Departamento("TI - Recrutamento");

        Funcionario f1 = new Funcionario("Vinicius", d3);

        System.out.println(d2.getName().equals("TI - Infra"));
        System.out.println(f1.getName().equals("Vinicius"));

        System.out.println(f1.toString().equals("Vinicius # TI - Recrutamento"));
        f1.alterarDepartamento(d1);

        System.out.println(f1.toString().equals("Vinicius # TI - Desenvolvimento"));
    }
}