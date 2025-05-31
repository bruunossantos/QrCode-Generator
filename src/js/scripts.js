const container = document.querySelector(".qrcode-generator-container");
const btn = document.querySelector("#my-button button");
const qrCodeInput = document.querySelector("#qr-code-link input");
const qrCodeimg = document.querySelector("#qrcode img");

//Funções

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    btn.innerText = "Gerando...";
    qrCodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrCodeInputValue}`

    qrCodeimg.addEventListener ("load", () => {
        container.classList.add("active");
        btn.innerText = "QRCode gerado!"
    })
}

// Eventos

btn.addEventListener("click", () => {
    generateQrCode();
});