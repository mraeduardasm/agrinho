document.addEventListener("DOMContentLoaded", function () {
    // Seleção dos elementos do DOM
    const btnIncrease = document.getElementById("btn-increase");
    const btnDecrease = document.getElementById("btn-decrease");
    const btnContrast = document.getElementById("btn-contrast");
    const body = document.body;

    // Definição do tamanho de fonte inicial e limites
    let currentFontSize = 16; 
    const maxFontSize = 26;
    const minFontSize = 12;

    // Função para Aumentar a Fonte
    btnIncrease.addEventListener("click", function () {
        if (currentFontSize < maxFontSize) {
            currentFontSize += 2;
            body.style.fontSize = currentFontSize + "px";
        }
    });

    // Função para Diminuir a Fonte
    btnDecrease.addEventListener("click", function () {
        if (currentFontSize > minFontSize) {
            currentFontSize -= 2;
            body.style.fontSize = currentFontSize + "px";
        }
    });

    // Função para Alternar o Alto Contraste
    btnContrast.addEventListener("click", function () {
        body.classList.toggle("high-contrast");
        
        // Atualiza o atributo de acessibilidade aria-pressed para leitores de tela
        const isPressed = body.classList.contains("high-contrast");
        btnContrast.setAttribute("aria-pressed", isPressed);
    });
});
