function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            // Para chamar uma chave(nesse caso metodo) do objeto dentro de outro, usar this
            this.cliqueBotoes();
            this.pressionaTeclas();
        },

        pressionaTeclas() {
            // arrow function -> para manter o this = calculadora
            document.addEventListener('keyup', (e) => {
                const idTecla = e.key;

                if (idTecla === "Enter") {
                    this.realizaConta();
                }

                if (idTecla === "Backspace") {
                    this.apagaUm();
                }

                if (idTecla === "Delete") {
                    this.clearDisplay();
                }
            });
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', function(e) {
                // this -> document
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

            }.bind(this)) // mudou o this -> document, para this -> calculadora;
            // se usar uma arrow function o this, nao se altera, mantem this -> calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        realizaConta() {
            // eval -> avalia o input e tenta executar CUIDADO!!
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
