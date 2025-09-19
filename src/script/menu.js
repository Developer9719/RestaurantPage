import "../css/menu.css";

export function menu() {
    const contentArea = document.querySelector('.menu');
    contentArea.appendChild(document.createElement('h2'));
    contentArea.appendChild(document.createElement('p'));

    const title = document.querySelector('h2');
    const menuItemsDisplay = document.querySelector('p');

    const sectionTitle = 'Menu';

    title.textContent = sectionTitle;

    const menuItems = ['Item 1', 'Item 2','Item 3'];
    menuItems.forEach(element => {
        menuItemsDisplay.innerHTML = `${element} <br/>`; // Displays only 'Item 3'
    });
}