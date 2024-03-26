function reverseValues() {
    let bimbimbim = document.getElementById("first").value;
    let bumbumbum = document.getElementById("second").value;

    document.getElementById("first").value = bumbumbum;
    document.getElementById("second").value = bimbimbim;
};

function vyborSveta() {
    let cvet = document.getElementById('vvod');
    let box = document.getElementsByClassName('korobka')[0];

    box.style.backgroundColor = cvet.value;
};