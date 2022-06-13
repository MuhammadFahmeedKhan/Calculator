function num(value){
  document.getElementById('inp').value += value;
}

function equal(){
    let a = document.getElementById('inp').value;
    let b = eval(a);
    document.getElementById('inp').value = b; 
}

function clr(){
    document.getElementById('inp').value = "";
}

function back(){
    let inp = document.getElementById('inp').value;
    document.getElementById('inp').value = inp.substring(0, inp.length -1); 
}

function percentage(){
    var p = document.getElementById('inp').value;
    document.getElementById('inp').value = p/100;    
}

function sqr(){
    var s = document.getElementById('inp').value;
    document.getElementById('inp').value = s*s;      
}

function rad(){
    var r = document.getElementById('inp').value;
    document.getElementById('inp').value = Math.sqrt(r);      
}