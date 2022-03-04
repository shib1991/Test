
function minus(a,b){
    let min = a-b;
    alert(`a-b = ${min}`);
}
function plus(a,b){
    let sum = a+b;
    alert(`a+b = ${sum}`);
} 
//Для коммита
function umn(a,b){
    let um = a*b;
    alert(`a*b = ${um}`);
} 
function del(a,b){
    let d = a+b;
    alert(`a/b = ${d}`);
} 

function pow(a,b){
    let result = a;
    for (let i=1; i<b; i++){
        result *=a;
    }
return result;
}
let identinicator=promt('Выберите нужное действие: exp, -, +, /, *','');
let a= prompt('a','');
let b= prompt ('b','');
if (identinicator="+"){
    plus(a,b);
}else if (identinicator="-"){
    minus(a,b);
}else if(identinicator="*"){
    umn(a,b);
}else if(identinicator="/"){
    if(b=0){
        alert("b=0, на ноль делить нельзя")}else{
            del(a,b);
        }
}else if(identinicator="exp"){
    if(b<1){
     alert("Неверно задана степень")
    }else{
        pow(a,b);
    }
}