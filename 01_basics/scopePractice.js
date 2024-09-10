//Let's investigate the difference in the scope of 'Var' and 'Let'

let var1 = 20;

var var2 = 10;

function testScope(){
    let var1 = 30;
    var var2 = 100
    console.log(var1);
    console.log(var2);
}

testScope();

console.log(var1);
console.log(var2);