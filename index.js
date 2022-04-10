(function () {
const button = document.querySelector("#btn");
const body = document.querySelector("body");
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const value =document.querySelector("#hex-value")
button.addEventListener("click", changehex);
    
    function changehex() {
        let hex = "#";
        for (let i = 0; i < 6; i++){
            const index = Math.floor(Math.random() * hexCode.length);
            hex +=hexCode[index]
        }
        value.textContent = hex;
        body.style.backgroundColor = hex;
    };
    
})();