import './basicLayoutStyles.css'; // Connecting CSS 

export function loadPage() {
    // Creates the basic structure of the webpage
    const content = document.getElementById("content");
    // content.innerHTML = `Test from JS loadPage() function. It works.`;

    // Top Photo Section
    content.appendChild(document.createElement("div")).id = "top-photo"; // Creating one top photo div

    // Two Column Layout
    content.appendChild(document.createElement("div")).className = "twoLayout";
    const twoLayout = document.querySelector(".twoLayout");
    
    for (let i = 0; i < 2; i++) {
        // Create a 2 column layout via css grid
        twoLayout.appendChild(document.createElement("div")).className = "section";
    }

    content.appendChild(document.createElement("div")).id = "bottomSection"; // Creating one bottom section

    content.appendChild(document.createElement("footer")).id = "footer"; // Creating one footer
}