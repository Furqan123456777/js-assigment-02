for(var i = 0; i <=100; i++  ){
    console.log (i)
}



for(var e = 100; e >=  0 ; e-- ){
    console.log (e)
}



//  for (var i = 1; i <= 10; i++) {
//    document.write("1" + "X" + i + "=" + i + "<br>");
//  }


// for(var e = 1; e <=10; e++){
//     document.write( e +   "X" + e + "="  + e + "<br>")
// }

function table (number) {
    for (var i=1; i<=10; i++) {

        var res = i*number;
        console.log(`${number} x ${i} = ${res}`);
    }
}


table(1);
table(2);
table(3);
table(4);
table(5);
table(6);
table(7);
table(8);
table(9);
table(10);


for(var a = 1; a <=100; a++){
    if(a % 2 == 0){
        console.log ("even number" + a )
    }
}




for(var a = 1; a <=100; a++){
    if(a % 2 != 0){
        console.log ("odd number" + a )
    }
}
        
         

    