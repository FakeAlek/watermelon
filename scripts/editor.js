document.addEventListener("DOMContentLoaded", () => {
    const optionsButtons = document.querySelectorAll(".option_button");
    const advancedOptionButtons = document.querySelectorAll(".adv_option_button");
    const fontName = document.getElementById("fontName");
    const fontSizeRef = document.getElementById("fontSize");
    const writingArea = document.getElementById("text_input");
    const linkButton = document.getElementById("createLink");
    const alignButtons = document.querySelectorAll(".align");
    const spacingButtons = document.querySelectorAll(".spacing");
    const formatButtons = document.querySelectorAll(".format");
    const scriptButtons = document.querySelectorAll(".script");

    // Font List
    const fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia", "Courier New", "cursive"];

    fontList.forEach(value => {
        const option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });
    
    // Initial Settings
    const initializer = () => {
        highlighter(alignButtons, true);
        highlighter(spacingButtons, true);
        highlighter(formatButtons, false);
        highlighter(scriptButtons, true);

        // Options for font names
        fontList.forEach(value => {
            const option = document.createElement("option");
            option.value = value;
            option.innerHTML = value;
            fontName.appendChild(option);
        });

        // Size only till 7
        for (let i = 1; i <= 7; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            fontSizeRef.appendChild(option);
        }

        // Default size
        fontSizeRef.value = 3;
    };

    // Main logic
    const modifyText = (command, defaultUi, value) => {
        document.execCommand(command, defaultUi, value);
    };

    optionsButtons.forEach(button => {
        button.addEventListener("click", () => {
            modifyText(button.id, false, null);
        });
    });

    advancedOptionButtons.forEach(button => {
        button.addEventListener("change", () => {
            modifyText(button.id, false, button.value);
        });
    });

    linkButton.addEventListener("click", () => {
        let userLink = prompt("Enter a URL");
        if (/http/i.test(userLink)) {
            modifyText(linkButton.id, false, userLink);
        } else {
            userLink = "http://" + userLink;
            modifyText(linkButton.id, false, userLink);
        }
    });

    const highlighter = (buttons, needsRemoval) => {
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                if (needsRemoval) {
                    let alreadyActive = button.classList.contains("active");
                    highlighterRemover(buttons);
                    if (!alreadyActive) {
                        button.classList.add("active");
                    }
                } else {
                    button.classList.toggle("active");
                }
            });
        });
    };

    const highlighterRemover = (buttons) => {
        buttons.forEach(button => {
            button.classList.remove("active");
        });
    };

    function saveContent() {
        const content = writingArea.innerHTML;
        localStorage.setItem('savedContent', content);
    }

    function loadContent() {
        const savedContent = localStorage.getItem('savedContent');
        if (savedContent) {
            writingArea.innerHTML = savedContent;
        }
    }

    writingArea.addEventListener('input', saveContent);

    loadContent();

    // initializer();

    document.getElementById('downloadTxt').addEventListener('click', () => {
        const text = writingArea.innerHTML;
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'document.txt';
        link.click();
    });

    document.getElementById('downloadTxt2').addEventListener('click', () => {
        const text = writingArea.innerHTML;
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'document.html';
        link.click();
    });
});