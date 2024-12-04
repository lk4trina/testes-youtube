class ModelUsuario {
  constructor(id, dataNascimento) {
    this.id = id;
    this.dataNascimento = dataNascimento; // Data de nascimento no formato "YYYY-MM-DD"
  }

  setDataNascimento(dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  getId() {
    return this.id;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  // Método para calcular a idade do usuário
  calcularIdade() {
    const hoje = new Date();
    const nascimento = new Date(this.dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth();
    const dia = hoje.getDate();

    // Ajuste se o aniversário não ocorreu ainda este ano
    if (mes < nascimento.getMonth() || (mes === nascimento.getMonth() && dia < nascimento.getDate())) {
      idade--;
    }

    return idade;
  }
}

module.exports = ModelUsuario;
