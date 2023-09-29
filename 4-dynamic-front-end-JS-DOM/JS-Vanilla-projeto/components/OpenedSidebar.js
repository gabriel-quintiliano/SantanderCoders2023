export function renderOpenedSidebar() {
    const styleTag = document.createElement("style");

    styleTag.innerHTML = `
        dd
    `;

    // Obtendo a tag head do HTML
    const headTag = document.querySelector("head");

    // Inserindo a tag style como filha da tag head
    headTag.appendChild(styleTag);

    return `
        <nav>
            <ul>
                <li>Overview</li>
                <li>
                    Period
                    <ul>
                        <li>Day</li>
                        <li>Month</li>
                        <li>Year</li>
                    </ul>
                </li>
                <li>Chart</li>
                <li>Calendar</li>
                <li>Messages</li>
            </ul>
        </nav>  
    `
}