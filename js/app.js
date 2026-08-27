const formulario = document.getElementById("formAluno");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const listaAlunos = document.getElementById("listaAlunos");

formulario.addEventListener("submit", cadastrarAluno);

function cadastrarAluno(event) {
    event.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos.");
        return;
    }

    const aluno = document.createElement("li");

    aluno.textContent = `${nome} - ${email}`;

    listaAlunos.appendChild(aluno);

    formulario.reset();
    campoNome.focus();
}