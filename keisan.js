//console.log("test")
let value=0;
//取得する 
document.getElementById("test").addEventListener("click",function() {
  console.log("テストがクリックされました");
  document.getElementById("test").textContent="テストがクリックされました"
});

document.getElementById("b1b").addEventListener("click",function() {
  value=value+1;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b2b").addEventListener("click",function() {
  value=value+2;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b3b").addEventListener("click",function() {
  value=value+3;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b4b").addEventListener("click",function() {
  value=value+4;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b5b").addEventListener("click",function() {
  value=value+5;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b6b").addEventListener("click",function() {
  value=value+6;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b7b").addEventListener("click",function() {
  value=value+7;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b8b").addEventListener("click",function() {
  value=value+8;
  console.log(value);
  document.getElementById("sum").textContent=value;
});
document.getElementById("b9b").addEventListener("click",function() {
  value=value+9;
  console.log(value);
  document.getElementById("sum").textContent=value;
});

