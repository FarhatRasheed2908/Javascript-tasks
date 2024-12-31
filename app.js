//Counting
for(var i = 1; i <= 100 ; i++){
    document.write(i + "<br>")
}


//Odd numbers
for(var i = 1; i <= 100; i = i + 2){
    document.write(i + "<br>")
}


//Table 
var num = prompt("Enter your number")
for(var i = 1; i <= 10 ; i++){
    document.write(num + "x" + i + "=" + num*i + "<br>")
}

//Table with limit
var num = prompt("Enter your table number")
var num1 = prompt("Enter your limit of table")
var a = num1
for(var i = 1;i <= a; i++){

    document.write(num + "x" + i + "=" + num * i +  "<br>" )
}


//nested loop
for(var i=1;i <=5;i++){
    for(var j=1; j<=i; j++){
        document.write(j)
       }
       document.write( "<br>")
 }
