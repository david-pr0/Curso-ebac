function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

function Funcionario(nome, idade, sexo, cargo) {
    let _cargo = cargo;
    Pessoa.call(this, nome, idade, sexo);
    this.getCargo = function() {
        return _cargo;
    }
}

function Aluno(nome, idade, sexo, curso) {
    let _curso = curso;
    Pessoa.call(this, nome, idade, sexo);
    this.getCurso = function() {
        return _curso;
    }
}

const funcionario1 = new Funcionario('David', 21, 'Masculino', 'dev-frontend');
const funcionario2 = new Funcionario('Maria', 23, 'Feminino', 'dev-backend');
const aluno1 = new Aluno('David', 21, 'Masculino', 'dev-frontend');
const aluno2 = new Aluno('Maria', 23, 'Feminino', 'dev-backend');

console.log(funcionario1, funcionario1.getCargo());
console.log(funcionario2, funcionario2.getCargo());
console.log(aluno1, aluno1.getCurso());
console.log(aluno2, aluno2.getCurso());