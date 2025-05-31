const container = document.querySelector(".qrcode-generator-container");
const btn = document.querySelector("#my-button button");
const qrCodeInput = document.querySelector("#qr-code-link input");
const qrCodeimg = document.querySelector("#qrcode img");
const downloadBtn = document.querySelector("#download-button button");

//Funções

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if (!qrCodeInputValue) {
        alert("Por favor, Digite um link para gerar o QR Code")
        return;
    }
    btn.innerText = "Gerando...";
    qrCodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrCodeInputValue}`

    qrCodeimg.addEventListener ("load", () => {
        container.classList.add("active");
        btn.innerText = "Gerar Novamente"
        document.getElementById("download-button").style.display = "block";
    })
}

function downloadQrCode () {
    const qrCodeURL = qrCodeimg.src;
    fetch(qrCodeURL)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        })
        .catch(() => alert("Erro ao fazer download do QR Code"));
}

// Eventos

btn.addEventListener("click", () => {
    if (container.classList.contains("active")) {
        location.reload();
    } else {
        generateQrCode();
    }
});

downloadBtn.addEventListener("click", downloadQrCode);
