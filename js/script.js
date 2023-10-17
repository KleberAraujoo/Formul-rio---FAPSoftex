const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const idadeInput = document.getElementById("idade");
const salarioInput = document.getElementById("salario");
const diploma = document.getElementById("diploma");

$(idadeInput).inputmask("99/99/9999");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (checkForm()) {
        console.log("Formulário enviado com sucesso!");
    } else {
        console.log("Corrija os erros antes de enviar o formulário.");
    }
});

nameInput.addEventListener("blur", () => {
    checkInputname();
});

idadeInput.addEventListener("blur", () => {
    checkInputidade();
});

salarioInput.addEventListener("blur", () => {
    checkInputsalario();
});

function checkForm() {
    const nameValue = nameInput.value;
    const salarioValue = salarioInput.value;
    const idadeValue = idadeInput.value;

    const nameValid = /^[a-zA-Z]+$/.test(nameValue);
    const salarioValid = /^\d+$/.test(salarioValue);
    const idadeValid = /^\d{2}\/\d{2}\/\d{4}$/.test(idadeValue);

    if (!nameValid) {
        errorInput(nameInput, "Digite apenas letras no seu nome");
    } else {
        clearError(nameInput);
    }

    if (!salarioValid) {
        errorInput(salarioInput, "Digite apenas números no seu salário");
    } else {
        clearError(salarioInput);
    }

    if (!idadeValid) {
        errorInput(idadeInput, "Digite uma data válida na sua idade (DD/MM/AAAA)");
    } else {
        clearError(idadeInput);
    }

    return nameValid && salarioValid && idadeValid;
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.classList.add("error");
}

function clearError(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = "";
    formItem.classList.remove("error");
}

function checkInputname() {
    const nameValue = nameInput.value;

    if (!/^[a-zA-Z]+$/.test(nameValue)) {
        errorInput(nameInput, "Digite apenas letras no seu nome");
    } else {
        clearError(nameInput);
    }
}

function checkInputsalario() {
    const salarioValue = salarioInput.value;

    if (!/^\d+$/.test(salarioValue)) {
        errorInput(salarioInput, "Digite apenas números no seu salário");
    } else {
        clearError(salarioInput);
    }
}

function checkInputidade() {
    const idadeValue = idadeInput.value;

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(idadeValue)) {
        errorInput(idadeInput, "Digite uma data válida na sua idade (DD/MM/AAAA)");
    } else {
        clearError(idadeInput);
    }
}
