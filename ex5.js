
function valorDaHoraDeTrabalho(salarioMensal) {
  const valorDaHoraDeTrabalho = salarioMensal / 160;
  return "O valor da sua hora de trabalho é de R$ " + valorDaHoraDeTrabalho.toFixed(2);
}

console.log(valorDaHoraDeTrabalho(2000, 00));