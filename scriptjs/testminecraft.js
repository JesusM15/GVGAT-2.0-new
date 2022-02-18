function resultado() {
if (document.getElementById('p13').checked==true) {p1=1}
else {p1=0}

if (document.getElementById('p21').checked==true) {p2=1}
else {p2=0}

if (document.getElementById('si2').checked==true) {p3=1}
else {p3=0}

if (document.getElementById('p33').checked===true) {p4=1}
else {p4=0}

if (document.getElementById('p44').checked===true) {p5=1}
else {p5=0}

if (document.getElementById('si12').checked===true) {p6=1}
else {p6=0}

if (document.getElementById('p52').checked===true) {p7=1}
else {p7=0}

if (document.getElementById('p61').checked===true) {p8=1}
else {p8=0}

nota= p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8;


alert(" Aciertos: " + nota);
if (nota == 7){
	alert("FELICIDADES ACERTASTE TODO!!! 🤗 ")

}

location.reload();
}
