import { Disciplina } from "./Disciplina";

class Aluno {

    nome: string;
    endereco: string;
    matricula: number;
    disciplinas: Array<Disciplina>;

    matricular(disciplina: Disciplina) : void {
        this.disciplinas.push(disciplina);
    }

    trancar(disciplina: Disciplina) : void {
        this.disciplinas.splice(this.disciplinas.indexOf(disciplina));
    }

    situacao() : string {
        let texto =  this.nome +"Matrícula: " + this.matricula + " Disciplinas: \n";
        this.disciplinas.forEach(element => {
            texto += element.nome + "\n"; 
        });
        return texto;
    }
}

let d1 = new Disciplina("Programacao Orientada a Objetos");
let d2 = new Disciplina("Programacao Estruturada");
let d3 = new Disciplina("Autoria Web");

let a1 = new Aluno();
a1.nome = "Joao Pedro";
a1.endereco = "Rua das Casas";
a1.matricula = 2019001;

a1.matricular(d1);
a1.matricular(d2);
a1.matricular(d3);
alert(a1.situacao);
a1.trancar(d2);
alert(a1.situacao);






