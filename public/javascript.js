let value1=document.getElementById('value1');
let value2=document.getElementById("value2");
let value3=document.getElementById("value3");
let values=['Y','Y','X','Z','Y','X','Z','Z','Y'];
let inpSpeed=document.getElementById('inpSpeed');
function getRandom () {
	return values[Math.floor(Math.random()*8)];
}
let stop;
let reStart=false;
let start=function(){
document.getElementById("winner").style.backgroundColor = 'transparent';	
    stop=setInterval(()=>{
	value1.innerText=getRandom();
	value2.innerText=getRandom();
	value3.innerText=getRandom();
},100);}
btnStop.onclick=function(){
document.documentElement.style.setProperty('--speed',0);	
clearInterval(stop);
reStart=false;
if(value1.innerText==value2.innerText&&value1.innerText==value3.innerText){
	console.log('winner');
	let count=1;
	let time=setInterval(()=>{
		document.getElementById("winner").style.backgroundColor = count%2?'red':'green';
	      count++;
	      if(count==40){
            document.getElementById("winner").style.backgroundColor = 'transparent';
	      	clearInterval(time);}
	},100)
}

}
let v=20;
// console.log(value1); 
inpSpeed.onclick=function(ev){
v=ev.target.value;
}
btnStart.onclick=function(){

document.documentElement.style.setProperty('--speed',v);
console.log(v);
if(!reStart){
start();
reStart=true;
}else{
	console.log('TOO MANY TIMES');
}
}