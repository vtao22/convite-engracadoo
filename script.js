const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    question.innerHTML = "VAAMOOOOO!!! Ainda bem que você não clicou no outro botão... Dito isso você ja pode me chamar de autista tb kkkkkkk ";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHR5dnhmMnVndzdpamw4dmc5amNpeWp0bXN4cTI4eTdvOXB6aWE4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dMyMc3bF4FF9m/giphy.gif";

    // Remove o botão NÃO da tela definitivamente
    noBtn.remove();

    // Ideias de encontros românticos
    const dateIdeas = [
        "...",
        "...",
        "...",
        "...",
    ];

    // Cria e estiliza o novo botão "Let's Go!"
    const letsGoBtn = document.createElement("button");
    letsGoBtn.textContent = "Clique aqui para continuar!";
    letsGoBtn.classList.add("letsgo-btn"); 
    letsGoBtn.style.position = "absolute";

    // Ajusta a posição dependendo da tela
    if (window.innerWidth <= 800) {
        letsGoBtn.style.left = "95%";
    } else {
        letsGoBtn.style.left = "63%";
    }

    letsGoBtn.style.transform = "translate(-50%, -50%)";
    letsGoBtn.style.width = "200px"; 

    // Evento de clique para mostrar o alerta E redirecionar
    letsGoBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * dateIdeas.length);
        const selectedDateIdea = dateIdeas[randomIndex];

        // 1. Mostra a ideia do date na tela
        alert(`Vc aceitou sair comigoo!!! Algumas ideias para o nosso date irao surgir no seu whatsapp: ${selectedDateIdea}`);

        // 2. REDIRECIONA PARA O LINK APÓS O USUÁRIO CLICAR EM "OK" NO ALERTA
        // Substitua o número de telefone pelo seu link do WhatsApp
        window.location.href = "https://wa.link/lxdhvt";
    });

    // Substitui o botão "SIM" pelo botão "Let's Go!"
    yesBtn.replaceWith(letsGoBtn);
};

// FUNÇÃO DE FUGA BLINDADA
const fugir = (e) => {
    // Evita qualquer comportamento de "clique real" no celular se a pessoa for super rápida
    if (e && e.cancelable) {
        e.preventDefault();
    }

    noBtn.style.position = "fixed";

    // Usar offsetWidth/Height é muito mais estável do que getBoundingClientRect() durante animações CSS
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    // Math.abs garante que o botão nunca vá para uma coordenada negativa (fugir para fora da tela)
    const randomX = Math.abs(Math.floor(Math.random() * maxX));
    const randomY = Math.abs(Math.floor(Math.random() * maxY));

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
};

// Evento do botão SIM
yesBtn.addEventListener("click", handleYesClick);

// OS 3 GATILHOS PARA GARANTIR QUE O BOTÃO NÃO PARE DE FUGIR:
noBtn.addEventListener("mouseenter", fugir); // O tradicional para o mouse do computador
noBtn.addEventListener("pointerdown", fugir); // O sensor supremo para toques rápidos no celular
noBtn.addEventListener("click", fugir); // Última barreira: se por milagre registrar um clique, ele foge de novo em vez de agir
