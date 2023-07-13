var setadireita = window.document.getElementById("setadireita"); 
var leonardo = window.document.getElementById("leonardo");
var bruna = window.document.getElementById("bruna");
var samantha = window.document.getElementById("samantha");
var setaesquerda = window.document.getElementById("setaesquerda"); 


function rolarparadireita() {
    leonardo.style.display = "none";
    samantha.style.display = "flex";
    setadireita.style.display = "none";
    setadireita.style.marginTop = "55%";
    setaesquerda.style.display = "flex";
}

function rolarparaesquerda() {
    leonardo.style.display = "flex";
    samantha.style.display = "none";
    setadireita.style.display = "flex";
    setadireita.style.marginTop = "55%";
    setaesquerda.style.display = "none";
}