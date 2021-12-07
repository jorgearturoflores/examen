document.querySelector('#btnSavefrien').addEventListener('click',savefrien);
drawfrientable();


function savefrien(){
var sname= document.querySelector('#name').value,

addFriendtoSytem(sname);
drawfrientable();
}
function drawfrientable(){
     var list = getfrienlist(),
         tbody = document.querySelector);
         tbody.innerHTML = '';
         