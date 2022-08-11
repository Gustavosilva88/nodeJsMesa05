
function idadeCachorro(AnoHumano, MesHumano) {
  const idadeCachorro = (7 / 12) * (12 * AnoHumano + MesHumano);
  return "seu pet tem " + Math.trunc(idadeCachorro) + " anos";
}

console.log(idadeCachorro(5, 6));