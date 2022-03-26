document.addEventListener("DOMContentLoaded", () => {
    createSquares();

    const help = document.querySelector(".helpImg");
    const start = document.getElementById('start');
    const keys = document.querySelector('.keyContainer');
    const board = document.querySelector('.boardContainer');

    const consenents = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", 
                        "p", "r", "s", "t", "v", "w"];
    const vowels = ["a", "e", "i", "o", "u"];

    help.onclick = () => {
        const helpPop = document.getElementById('helpPop');
        helpPop.classList.toggle("show");
    }

    start.onclick = (e) => {
        e.target.classList.toggle('hide');
        pickKeys();
        keys.classList.add('show');
        board.classList.add('show');
    }

    function createSquares() {
        const gameBoard = document.getElementById("board")

        for (let index = 0; index < 36; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", "div1");
            square.setAttribute("ondrop", "drop(event)");
            square.setAttribute("ondragover", "allowDrop(event)");
            gameBoard.appendChild(square);
        }
    }

    function pickKeys() {
        let con = [];
        let vow = [];
        let conN = document.querySelectorAll('.c');
        let vowN = document.querySelectorAll('.v');
        // pick out vowels
        while(vow.length < 3) {
            let numV = Math.floor(Math.random() * 5);
            if(!vow.includes(vowels[numV])) {
                vow.push(vowels[numV]);
            }
            else {
                continue;
            }
        }
        // pick out consenents
        while(con.length < 9) {
            let numC = Math.floor(Math.random() * 17);
            if(!con.includes(consenents[numC])) {
                con.push(consenents[numC]);
            }
            else {
                continue;
            }
        }
        for (let i = 0; i < vow.length; i++) {
            vowN[i].textContent = vow[i];
        }
        for (let i = 0; i < con.length; i++) {
            conN[i].textContent = con[i];
        }

    }
});