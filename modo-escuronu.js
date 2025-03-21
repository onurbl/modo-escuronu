// Adiciona o CSS do modo escuro
const darkModeCSS = `
    /* Geral */
    body.dark-mode {
        background-color: #121212;
        color: #ffffff;
    }

    /* Cabeçalho */
    body.dark-mode nav.sc-gEvEer {
        background-color: #1a1a1a !important;
        color: #ffffff !important;
    }
    body.dark-mode .ddName p,
    body.dark-mode .ddName span {
        color: #ffffff !important;
    }
    body.dark-mode .MuiAvatar-root {
        background-color: #333333 !important;
        color: #ffffff !important;
    }

    /* Div dos botões (SALVAR RASCUNHO e CORRIGIR ONLINE) */
    body.dark-mode .jss1 {
        background-color: #1a1a1a !important; /* Fundo escuro */
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode .jss1 button {
        background-color: #333333 !important; /* Fundo escuro para os botões */
        color: #ffffff !important; /* Texto branco */
        border-color: #555555 !important; /* Borda cinza */
    }
    body.dark-mode .jss1 button[style*="background: var(--green)"] {
        background-color: #36a837 !important; /* Verde para o botão "CORRIGIR ONLINE" */
    }

    /* Rodapé */
    body.dark-mode .containerFooter {
        background-color: #1a1a1a !important; /* Fundo escuro */
    }
    body.dark-mode .footer-text2 {
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode #logoCODIS img,
    body.dark-mode #logoSEED img {
        filter: brightness(0.8); /* Ajuste de brilho para as imagens */
    }

    /* Div do campo de redação (jss5) */
    body.dark-mode .jss5 {
        background-color: #1a1a1a !important; /* Fundo escuro */
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode .jss20 {
        color: #ffffff !important; /* Texto branco para rótulos */
    }
    body.dark-mode .jss17 {
        background-color: #1a1a1a !important; /* Fundo escuro para o campo de redação */
        color: #ffffff !important; /* Texto branco */
        border: 1px solid #555555 !important; /* Borda cinza */
    }
    body.dark-mode .jss17::placeholder {
        color: #cccccc !important; /* Cor do placeholder */
    }
    body.dark-mode .jss31 small {
        color: #cccccc !important; /* Texto cinza claro para avisos */
    }
    body.dark-mode .jss10 h6 {
        color: #ffffff !important; /* Texto branco para contagem de palavras */
    }

    /* Campo de texto (input) */
    body.dark-mode .MuiInputBase-input {
        background-color: #1a1a1a !important; /* Fundo escuro */
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode .MuiOutlinedInput-notchedOutline {
        border-color: #555555 !important; /* Borda cinza */
    }
    body.dark-mode .MuiInputBase-root {
        background-color: #1a1a1a !important; /* Fundo escuro */
    }

    /* Div específica (jss6) */
    body.dark-mode .jss6 {
        background-color: #1a1a1a !important; /* Fundo escuro */
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode .jss6 h3 {
        color: #ffffff !important; /* Títulos em branco */
    }
    body.dark-mode .jss6 p {
        color: #ffffff !important; /* Texto em branco */
    }
    body.dark-mode .jss6 .ql-editor {
        background-color: #1a1a1a !important; /* Fundo escuro para a proposta */
        color: #ffffff !important; /* Texto branco */
    }
    body.dark-mode .jss6 hr {
        border-color: #555555 !important; /* Linha divisória cinza */
    }
    body.dark-mode .jss6 .MuiTypography-h6 {
        color: #ffffff !important; /* Texto branco para títulos */
    }
    body.dark-mode .jss6 div {
        color: #ffffff !important; /* Texto branco para textos de apoio */
    }
    body.dark-mode .jss6 img {
        filter: brightness(0.8); /* Ajuste de brilho para imagens */
    }
`;

// Cria um elemento <style> e adiciona o CSS
const style = document.createElement('style');
style.id = 'dark-mode-styles';
style.innerHTML = darkModeCSS;
document.head.appendChild(style);

// Função para alternar o modo escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}

// Verifica a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});

// Adiciona um botão para alternar o modo escuro
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Alternar Modo Escuro';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.zIndex = '1000';
toggleButton.style.padding = '10px';
toggleButton.style.backgroundColor = '#0f4665';
toggleButton.style.color = '#ffffff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.onclick = toggleDarkMode;
document.body.appendChild(toggleButton);

// Ativa o modo escuro imediatamente (opcional)
document.body.classList.add('dark-mode');
localStorage.setItem('darkMode', 'true');

console.log('Modo escuro aplicado! Use o botão no canto inferior direito para alternar.');
