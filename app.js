//CHAPTERS# 31-34

//Question#1

// var rightNow = new Date();
// console.log(rightNow)



//Question#2
// var monthName=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var dat=new Date()
// alert(dat.getMonth())
// alert("Current month:"+monthName[dat.getMonth()])

//Question#3

// var monthName=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var dat=new Date()
// alert(dat.getMonth())
// alert("Current month:"+monthName[dat.getMonth()])


// //Question#4
// var d = new Date();
// var day = d.getDate();
// if (day== 0 || day==6){
//     alert("It's fun day")
// }
// else{
//     alert("It's working day")
//}

//Question#5

// var d= new Date()
// var day = d.getDate()
// if(day<16){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last fifteen days of the month")
// }


//Question#6
// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);


// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)




//Question#7
// var today = new Date();
// var time = today.getHours();
// alert(time)
// if(time>=0 && time<=12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

//Question#8
// var date=new Date()
// var day =date.lastday(2020,11)
// console.log(day)

//Question#9


//Question#11
// const d = new Date();
// d.setHours(d.getHours()+1);
// alert(d)

//Question#12
// var d = new Date();
// d.setFullYear(d.getFullYear() - 100);
// alert(d)


//Question#13

// var yearBorn=prompt("Enter your date of birth")
// var d= new Date()
// var n=d.getFullYear()
// var currentDate= new Date()
// var currentYear = currentDate. getFullYear();
// var age= currentYear-yearBorn
// console.log(age)



//Question#14

// var custName= 'ABC'
// var currentMonth='February'
// var numUnit=410
// var charges_Per_Unit=16
// var amount_within_due_date=650
// var late_payment=350
// var amount_after_due_date=6910

// var NetAmountDue=numUnit*charges_Per_Unit
// var paymentAfterDue=NetAmountDue+late_payment
// console.log(NetAmountDue)
// console.log(paymentAfterDue)




//Chapters# 35-38

//Question#1

// function date (){
// var dte=new Date()
// console.log(dte)
// }
// date()

//Question#2
// function greet(){
//     var firstName=prompt("Enter first name")
//     var lastName=prompt("Enter last name")
// }greet()

//Question#3

// function add(){
//     var valOne=prompt("Enter first value ")
//     var valTwo=prompt("Enter second value")
//     var c=parseInt(valOne)+parseInt(valTwo)

//     return  c

// }
// console.log(add())


//Question#4 "CALCULATOR"

// var a=parseInt(prompt("enter  1 no"))
// var b=parseInt(prompt("enter 2 no"))

// var c=prompt("enter operator")

// if(c=="+"){
//     function add(a,b){
//         var result=a+b
//         return result
//     }
//     console.log(add(a,b))
// }
// else if(c=="-"){
//     function sub(a,b){
//         var result=a-b
//         return result
//     }
//     console.log(sub(a,b))
// }
// else if(c=="*"){
//     function mul(a,b){
//         var result=a*b
//         return result
//     }
//     console.log(mul(a,b))
// }
// else{
//     function div(a,b){
//         var result=a%b
//         return result
//     }
//     console.log(div(a,b))
//}

//Question#5

// function square(){
//     var input=prompt("Enter number");
//     console.log(input**2);
// }
// square()

//Question#6

// program to find the factorial of a number

// function factorial(n) {
//     var answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var n = prompt("enter no");
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);





//Question#7

// function list(){
//     var firstNum=parseInt(prompt("Enter first number"))
//     var secondNum=parseInt(prompt("Enter last number"))

//     for(i=firstNum; i<=secondNum; i++){
//         console.log(i)

//     }
// } list()

//q8




//q9
// var a=5
// var b=5
// function area(height,width){
//     var Area=a*b
//     return Area

// }

// console.log(area(a,b))

//q10
// function palindrome(){
//     var word=prompt("enter word")
//     var lngth=word.length
//     console.log(lngth)
//     if(word.charAt(0)==word.charAt(lngth-1)){
//         console.log("palindrome")
//     }
//     else{
//         console.log("not palindrome")
//     }
// }
// palindrome()

//Question#11



//Question#12

// function longestWord(){
//     var strSplit=('Web Development Tutorial').split('');
//     var strSplit=["Web", "Development" , "Tutorial"];
//     var longestWord=0
//     for(var i = 0; i < strSplit.length; i++){
//         if(strSplit[i].length > longestWord){ 
//             longestWord = strSplit[i].length; 
//         }
        
//     }
//     return longestWord; 
// }
// console.log(longestWord())


//Question#13

// var str="JSResourceS.com"

// var count=(str.match(/o/g)).length;
// document.write(count)

//Question#14
// var radius=parseFloat(prompt("Enter radius"))

 
// function calcCircumference(a){
//     var result=2*radius*3.142
//     console.log(result)
// }
// function calcArea(a){
//     var result=3.142*(radius**2)
//     console.log(result)
// }
// calcArea(radius)
// calcCircumference(radius)