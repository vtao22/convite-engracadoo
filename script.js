const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    question.innerHTML = "VAAMOOOOO!!! Ainda bem que você não clicou no outro botão hein 🤭🤪 ";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHR5dnhmMnVndzdpamw4dmc5amNpeWp0bXN4cTI4eTdvOXB6aWE4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dMyMc3bF4FF9m/giphy.gif";

    // Remove o evento do botão e o remove do DOM
    noBtn.removeEventListener("mouseover", handleNoMouseOver);
    noBtn.remove();

    // Ideias de encontros românticos (já traduzidas)
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
        alert(`Vc aceitou sair comigoo!!! Algumas ideias para o nosso date irao surgir no seu whatsapp ${selectedDateIdea}`);

        // 2. REDIRECIONA PARA O LINK APÓS O USUÁRIO CLICAR EM "OK" NO ALERTA
        // Substitua o número de telefone pelo seu link do WhatsApp (com o código do país 55 + DDD + número)
        window.location.href = "https://wa.link/lxdhvt";
        
        // Se preferir ir para um link de música do youtube, basta trocar para:
        // window.location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
    });

    // Substitui o botão "SIM" pelo botão "Let's Go!"
    yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
    const { width, height } = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;

    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);