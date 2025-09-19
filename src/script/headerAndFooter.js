import '../css/headerAndFooter.css';

export function header() {
    // Grabs the header element to place all the following elements in 
    const header = document.querySelector('header');

    // Creates all new elements needed
    const siteTitle = document.createElement('h1');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');

    // Adding all new elements to the DOM
    header.appendChild(menuButton);
    header.appendChild(siteTitle);
    header.appendChild(contactButton);

    // Adding text to the elements
    siteTitle.textContent = 'My Restaurant';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    // Apply classes to elements for styling 
    header.className = 'headerNav';
}

export function footer() {
    // Grabs footer element to place elements into
    const footer = document.querySelector('footer');

    // &copy sets the copyright date
    const footerContent = 'My restaurant - &copy 2025';

    footer.innerHTML = footerContent;
}