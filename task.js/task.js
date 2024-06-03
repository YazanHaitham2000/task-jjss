/*----1---/*
var x=10;
var y=8;
var sum=x+y;
if(sum>10){
    console.log(" numbers is greater than 10");
}
if (sum<10) {
    console.log("number is not greater than 10");
} 
/*------*/

/*----2---/*
var username="yazan";
var password="haitham";
function check(username1,password1){
if(username1 === username && password1 === password){
    console.log("Access granted");
}else{
    console.log("Access denied");
}

}
var username2= prompt("enter username") ;
var password2= prompt("enter password");
check(username2,password2);
/*------*/

/*----3---/*
var num=11;
if(num>=10 && num<=20){
    console.log("The number is between 10 and 20");
}else{
    console.log("The number is not between 10 and 20");
}/*---------*/
/*----4---/*

var age=22;
if(age>=18){
    console.log("You can drive");
}else{
    console.log("You can not drive");
}/**----- */

/*-----5----/*
let num=11;
if(num>10 && num<0){
    console.log("invalid number");
}
else{
    console.log("correct number");
}/**----- */
/*-----6----/*
var num=6;
if(num>5 && num<10  ||   num>20 && num<25){
console.log("The number is valid");
}
else{
    console.log("The number is not valid");
}/**----- */
/*-----7----/*
var password="secret";
function check(password1){
    if(password1===password){
        console.log("Access granted");
    }else{
        console.log("Access denited");
    }
}
var password2=prompt("enter pass");
check(password2);
/*-----*/
/*-----8----/*
function check(num){
    if(num>0 && num<100 && num%2===0){
        console.log("The number is even and between 0 and 100");
    }else{
        console.log("The number is odd and not between 0 and 100");
    }
}
var num1=prompt("enter number");
check(num1);
/*-----*/
/*-----9----/*
function check(num1,num2){
    if(num1 || num2 <0){
console.log("At least one number is negative");
    }else{
        console.log("Both numbers are positive");
    }
}
var num3=prompt("num1");
var num4=prompt("num2");
check(num3,num4);
/*-----*/
/*----10---/*
var age=22;
if(age<=18){
    console.log("You qualify for a discount");
}else{
    console.log("You do not qualify for a discount");
}/**----- */




