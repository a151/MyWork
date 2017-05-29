var numb1="";
var numb2="";
var fuhao="";

var lab=document.getElementById("out");
var btns=document.getElementsByTagName("a");
for (var i=0;i<btns.length;i++) {
	var btn=btns[i];
	btn.onclick=function(){
		var text = this.innerHTML;
		switch(text){
			case "AC":
			numb1="";
			numb2="";
			lab.innerHTML="";
			fuhao="";
				break;
				
			case "/":
			fuhao="/"
				break;
				
			case "*":
			fuhao="*"
				break;
				
			case "-":
			fuhao="-";
				break;
				
			case "+":
			fuhao="+"
				break;
				
			case ".":
			fuhao="."
				break;
				
			case "=":
			var f_numb1=parseFloat(numb1);
			var f_numb2=parseFloat(numb2);
			switch(fuhao){
				case "+":
				lab.innerHTML=f_numb1+f_numb2;
				break;
				case "-":
				lab.innerHTML=f_numb1-f_numb2;
				break;
				case "*":
				lab.innerHTML=f_numb1*f_numb2;
				break;
				case "/":
				lab.innerHTML=f_numb1/f_numb2;
				break;
			}
				break;
			default:
			if(fuhao==""){
				numb1=numb1+text;
				lab.innerHTML=numb1;
			}else{
				numb2=numb2+text;
				lab.innerHTML=numb2;
			}
				break;
		}
	}
}