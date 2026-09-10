        document.addEventListener("DOMContentLoaded", () => {
            const terminal = document.getElementById('terminal-text');
            const loaderWrapper = document.getElementById('hacker-loader');
            
            const lines = [
                ">_ Estabelecendo conexão segura...",
                ">_ Resolvendo DNS e descriptografando dados...",
                ">_ Acesso Concedido_"
            ];
            
            let currentLine = 0;
            let currentChar = 0;
            let currentElement = null;

            function typeWriter() {
                if (currentLine < lines.length) {
                    if (currentChar === 0) {
                        currentElement = document.createElement('p');
                        if (currentLine === lines.length - 1) {
                            currentElement.style.color = '#b14dff'; /* Roxo neon */
                            currentElement.classList.add('blink');
                        }
                        terminal.appendChild(currentElement);
                    }
                    if (currentChar < lines[currentLine].length) {
                        currentElement.textContent += lines[currentLine].charAt(currentChar);
                        currentChar++;
                        setTimeout(typeWriter, 40);
                    } else {
                        currentLine++;
                        currentChar = 0;
                        setTimeout(typeWriter, 500);
                    }
                } else {
                    setTimeout(() => {
                        loaderWrapper.style.opacity = '0';
                        loaderWrapper.style.visibility = 'hidden';
                    }, 1000);
                }
            }
            typeWriter();
        });