class Alunos {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Alunos('David', 10);
const aluno2 = new Alunos('Ana', 8);
const aluno3 = new Alunos('Pedro', 4);

const alunos = [aluno1, aluno2, aluno3];
const alunosAprovados = alunos.filter(alunos => alunos.nota > 6);

const nomeDosAlunos = alunosAprovados.map((aluno) => aluno.nome);
const notaDosAlunos = alunosAprovados.map((aluno) => aluno.nota);

const nomeDosAlunosMensagem = nomeDosAlunos.join(', ');

console.log(`Os alunos ${nomeDosAlunosMensagem} foram aprovados`);
