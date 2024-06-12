document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const modalImage = document.querySelector('.modal-content img');
    const modalDescription = document.querySelector('.modal-description');
    const closeModalButton = document.querySelector('.close-modal');

    // Função para rolar para a esquerda
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    });

    // Função para rolar para a direita
    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    });

    // Adiciona um evento de clique a cada item do carrossel
    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            const imageSrc = item.getAttribute('data-image');
            const descriptionText = item.querySelector('.description').textContent;

            // Atualiza o conteúdo do modal com a imagem e a descrição
            modalImage.src = imageSrc;
            modalDescription.textContent = descriptionText;

            // Adiciona uma classe à imagem para diminuir o tamanho
            modalImage.classList.add('small-image');

            // Exibe o modal
            modal.style.display = 'flex';
        });
    });

    // Função para fechar o modal
    closeModalButton.addEventListener('click', () => {
        // Remove a classe da imagem quando o modal é fechado
        modalImage.classList.remove('small-image');
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora do conteúdo do modal
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalImage.classList.remove('small-image');
            modal.style.display = 'none';
        }
    });
});
