var inputtext= document.getElementById("input");
var send = document.getElementById("send");
// var tables = document.getElementById("show-chat");



var list1=[];
// var list2=[];
let n=0;
let x=0;
send.onclick =  function AddRow(){
    let addRow=document.getElementById("show-chat");
    let newRow=addRow.insertRow(n);

    list1[x] = inputtext.value;
    // list2[x] = inputtext.value;

    var cell1 = newRow.insertCell(0)
    // var cell1 = newRow.insertcell(1)

    cell1.innerHTML = list1[x]
    // cell2.innerHTML = list2[x]

    inputtext.value="";
}
n++;
x++;