document.addEventListener('DOMContentLoaded', (event) => {
    const navbarButtons = document.querySelectorAll('.nav-links');
    const sendButton = document.querySelector('#feedback-button');
    const smallnewscards = document.querySelectorAll('.smallnewscard');

    const setCursorPointer = (element) => {
        element.style.cursor = 'pointer';
    };

    const resetCursor = (element) => {
        element.style.cursor = '';
    };

    navbarButtons.forEach(btn => {
        btn.addEventListener('mouseover', () => setCursorPointer(btn));
        btn.addEventListener('mouseout', () => resetCursor(btn));
    });

    if (sendButton) {
        sendButton.addEventListener('mouseover', () => setCursorPointer(sendButton));
        sendButton.addEventListener('mouseout', () => resetCursor(sendButton));
    }

    // Apply to all smallnewscards
    smallnewscards.forEach(card => {
        card.addEventListener('mouseover', () => setCursorPointer(card));
        card.addEventListener('mouseout', () => resetCursor(card));
    });
});
