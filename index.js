function soma() {
  num1 = Number(document.getElementById('input1').value)
  num2 = Number(document.getElementById('input2').value)

  resposta = num1 + num2

  res = document.getElementById('res')
  res.innerHTML = 'A respossta é = ' + resposta
}

function sub() {
  num1 = Number(document.getElementById('input1').value)
  num2 = Number(document.getElementById('input2').value)

  resposta = num1 - num2

  res = document.getElementById('res')
  res.innerHTML = 'A respossta é = ' + resposta
}

function mult() {
  num1 = Number(document.getElementById('input1').value)
  num2 = Number(document.getElementById('input2').value)

  resposta = num1 * num2

  res = document.getElementById('res')
  res.innerHTML = 'A respossta é = ' + resposta
}

function divi() {
  num1 = Number(document.getElementById('input1').value)
  num2 = Number(document.getElementById('input2').value)

  resposta = num1 / num2

  res = document.getElementById('res')
  res.innerHTML = 'A respossta é = ' + resposta
}
