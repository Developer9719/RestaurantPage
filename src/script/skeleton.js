import "../css/skeleton.css";

export function skeletonWebsite() {
    // Header with Nav
    const body = document.querySelector('body');
    body.appendChild(document.createElement('header'));
    
    // Top Viewport Area
    body.appendChild(document.createElement('main'));
    const main = document.querySelector('main');
    const topArea = document.createElement('div');
    topArea.className = 'topArea';
    main.appendChild(topArea);

    // Menu
    const menuArea = document.createElement('div');
    menuArea.className = 'menu';
    main.appendChild(menuArea);

    // Contact
    const contactArea = document.createElement('div');
    contactArea.className = 'contact';
    main.appendChild(contactArea);

    // Footer
    const footer = document.createElement('footer');
    body.appendChild(footer);

}