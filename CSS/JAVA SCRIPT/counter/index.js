const count = document.getElementById('count');
let c=0;
console.log(count.textContent);

function incr(){
  c++;
  count.textContent = c;
}
function decr(){
   c--;
   count.textContent = c;
}
function reset(){
    c = 0;
   count.textContent = c;
}