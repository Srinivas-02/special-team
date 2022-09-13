function add(){
    var num1 = parseInt(document.getElementById("firstno").value);
    var num2 = parseInt(document.getElementById("secondno").value);
    var ans = num1+num2;
    var answer = document.getElementById("ans");
    answer.textContent += ans; 
}var but = document.getElementById("submitbut");
but.addEventListener("click",add);
