// Obtenha os elementos dos botões de tema e idioma
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');

// Adicione os eventos de clique aos botões
themeToggle.addEventListener('click', toggleTheme);
languageToggle.addEventListener('click', toggleLanguage);

// Função para alternar entre tema claro e tema escuro
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}


// Código JavaScript para redirecionar para o repositório ao clicar no card
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const repositoryLink = card.querySelector('a').href;
    window.open(repositoryLink, '_blank');
  });
});