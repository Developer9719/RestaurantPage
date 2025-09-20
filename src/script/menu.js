import "../css/menu.css";

export function menu() {
    const contentArea = document.querySelector('.menu');
    contentArea.appendChild(document.createElement('h2'));

    const title = document.querySelector('h2');

    const sectionTitle = 'Menu';

    title.textContent = sectionTitle;

    const menuItems = ['Item 1', 'Item 2','Item 3'];
    
    menuItems.forEach(item => {
        let itemDisplay = contentArea.appendChild(document.createElement('p'));
        itemDisplay.textContent = `${item}`;
    });
}