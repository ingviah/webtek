document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('newsModal');
    const modalImage = document.getElementById('modalImage');
    const modalHeader = document.getElementById('modalHeader');
    const modalParagraph = document.getElementById('modalParagraph');
    const closeModalButton = document.getElementById('closeModal'); // Added this line


    document.querySelector('.news').addEventListener('click', function (e) {
        if (e.target && e.target.parentElement.className === 'smallnewscard') {
            const card = e.target.parentElement;
            const imageSrc = card.querySelector('img').src;
            const headerText = card.querySelector('p:nth-child(2)').innerText;
            const fullArticle = card.getAttribute('data-article');  // Get full text from the data attribute

            modalImage.src = imageSrc;
            modalHeader.innerText = headerText;
            modalParagraph.innerText = fullArticle;  // Use full text here
            modal.style.display = 'block';
        }
    });

    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
