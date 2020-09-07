function myfn()
{
	// variables ......
let a,b,c;
a = 4;
b = 5;
c = a + b;
return c;
}
//output methods
document.getElementById('demo').innerHTML="value of c : " + myfn();

document.write("using document.write the value of c is =   "+myfn());

document.getElementById('fis').innerHTML = "external javascript file"
 
 //operators
 let a,b,c,d,e,m;
 a=5;
 b=7;

 c=a+b;
 d=a/b;
 e=a-b;
 m=a*b;

 //conditionals ....
 let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

//Functions .....
function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}
multiply(4,6);
multiply(5,7);
multiply(6,8);

//Events .....
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

// creating external javascript file 
document.write('We can create external JavaScript file and embed it in many html page.');
document.write('It provides code re usability because single JavaScript file can be used in several html pages.');
document.write('An external JavaScript file must be saved by .js extension.'); 
document.write('It is recommended to embed all JavaScript files into a single file. It increases the speed of the webpage.');