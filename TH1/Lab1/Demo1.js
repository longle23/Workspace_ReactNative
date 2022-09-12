var inputa = document.createElement('input');
inputa.setAttribute('id', 'num_a');
inputa.setAttribute('placeholder', 'a input');
document.body.appendChild(inputa);

var br = document.createElement('br');
// console.log(br);
document.body.appendChild(br)

var inputb = document.createElement('input');
inputb.setAttribute('id', 'num_b');
inputb.setAttribute('placeholder', 'b input');
document.body.appendChild(inputb);

var br = document.createElement('br');
// console.log(br);
document.body.appendChild(br)

var button = document.createElement('button');
// console.log(button)
button.textContent = 'Sum'
document.body.appendChild(button)

button.onclick = function () {
    var a = parseInt(document.getElementById('num_a').value);
    var b = parseInt(document.getElementById('num_b').value);

    document.body.appendChild(document.createElement('p ')).innerHTML = a + b;
}