function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaTeclas();
        },

        pressionaTeclas() {
            document.addEventListener('keyup', (e) => {
                const idTecla = e.key;
                const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "+", "-", "(", ")", "."];

                if (idTecla === "Enter") {
                    this.realizaConta();
                } else if (idTecla === "Backspace") {
                    this.apagaUm();
                } else if (idTecla === "Delete") {
                    this.clearDisplay();
                } else if (teclas.includes(idTecla)) {
                    this.btnParaDisplay(idTecla);
                }

            });
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const idBotao = e.target;

                if(idBotao.classList.contains('btn-num')) {
                    this.btnParaDisplay(idBotao.innerText);  
                }

                if(idBotao.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(idBotao.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(idBotao.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();

            }.bind(this))
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta || conta === Infinity) {
                    alert("Conta inválida");
                    this.display.value = ''
                    return
                }
                this.display.value = String(conta);
            } catch (err) {
                alert("Conta inválida");
                this.display.value = ''
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
