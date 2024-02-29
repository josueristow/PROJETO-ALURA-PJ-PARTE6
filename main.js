const botoes = document. querySelectorAll(".botao");
const textos = document. querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
botoes[i].onclick = function(){

   for(let j=0;j<botoes.length;j++){
   botoes[j].classList.remove("ativo")
   textos[j].classList.remove("ativo")
}


botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");

console.log();
}

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-13T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Match.Floor(tempoFinal/1000);
    let minutos = Match.Floor(segundos/60);
    let horas = Match.Floor(minutos/60);
    return horas;


}