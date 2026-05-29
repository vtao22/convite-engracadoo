const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
    question.innerHTML = "VAAMOOOOO!!! Ainda bem que você não clicou no outro botão hein 🤭🤪 ";
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHR5dnhmMnVndzdpamw4dmc5amNpeWp0bXN4cTI4eTdvOXB6aWE4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dMyMc3bF4FF9m/giphy.gif";

    // Remove o botão "NÃO" da tela definitivamente
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
        alert(`Vc aceitou sair comigoo!!! Algumas ideias para o nosso date irao surgir no seu whatsapp ${selectedDateIdea}`);

        // 2. REDIRECIONA PARA O LINK APÓS O USUÁRIO CLICAR EM "OK" NO ALERTA
        // Substitua o número de telefone pelo seu link do WhatsApp
        window.location.href = "https://wa.link/lxdhvt";
    });

    // Substitui o botão "SIM" pelo botão "Let's Go!"
    yesBtn.replaceWith(letsGoBtn);
};

// O 'e' dentro dos parênteses pega as informações do evento (mouse ou toque)
const handleNoMouseOver = (e) => {
    // Essa linha abaixo impede que o celular registre um "clique" acidental enquanto você tenta tocar
    if (e) e.preventDefault();

    noBtn.style.position = "fixed";

    const { width, height } = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - width;
    const maxY = window.innerHeight - height;

    noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);

// AS CORREÇÕES PARA CELULAR ESTÃO AQUI 👇
noBtn.addEventListener("mouseover", handleNoMouseOver); // Funciona para computador
noBtn.addEventListener("touchstart", handleNoMouseOver, { passive: false }); // Funciona para o primeiro toque no celular
noBtn.addEventListener("click", handleNoMouseOver); // Garantia final caso a pessoa seja o The Flash e consiga clicar
