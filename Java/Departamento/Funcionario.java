package Departamento;

public class Funcionario {
    private String name;
    private Departamento departamento;

    public Funcionario(String name, Departamento departamento) {
        this.name = name;
        this.departamento = departamento;
    }

    public void alterarDepartamento(Departamento departamento) {
        this.departamento = departamento;
    }

    public String getName() {
        return this.name;
    } public String toString() {
        return this.getName() + " # " + this.departamento.getName();
    }
}