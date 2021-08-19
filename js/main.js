//var nome = "Lucas Cicala Pena ";
//var idade = 19;
//var idade2 = 20;
//var frase = "japão é foda"
//alert( nome + "tem " + idade + "anos");
//console.log(nome);
//console.log(idade +idade2);
//console.log(frase.replace("japão","Brasil"));
//alert(frase.replace("japão","Brasil"));
//console.log(frase.toLowerCase());
//var list = ["Maça", "pera", "laranja"];
//list.pop()// retira um item da lista
//list.push("uva")// aidicona um item na lista
//console.log(list.length)//ve o tamanho da lista
//console.log(list.reverse()); //reverte a lista
//console.log(list.toString()); //passa o metodo para string
//console.log(list.join("-")); // voce pode adionar como quer que a lista apareça 
//var fruta ={nome: "maça", cor:"Vermelha"} // dicionario
//console.log(fruta.nome);
//console.log(fruta.cor);
/*
var idade = prompt("Qual sua idade");

if(idade >= 18){
    alert("maior de idade");

}else{
    alert("menor de idade");
}
*/
/*
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/
/*
var count;
for(count = 0;count <=5;count++){
    console.log(count);
}
*/
//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());

/*function soma(n1,n2){
    return n1 + n2;
}

function setreplace(frase,nome,novo_nome){
  return frase.replace(nome,novo_nome)
}
alert(soma(5,10));
alert(setreplace("vai japão","japão","Brasil"));
*/
/*
function ValidaIdade (idade){

    var validar = true;
    if(idade >= 19){
        validar =true
    }else{
        validar =false
    }
    return validar;
}


var idade = prompt("Qual sua idade");
console.log(ValidaIdade(idade));
*/

function botão(){
   document.getElementById("agradecimento").innerHTML="obrigado por clickar";
  
   // console.log( document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://twitter.com/home");
}

function trocar(elemento){
    elemento.innerHTML="otariokkkkkkkk";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML="Passa aqui paSSA";
}

function load(){
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}