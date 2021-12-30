var listNumber=5;
function change(listNumber){
    document.getElementById(listNumber).innerHTML=prompt("Please, enter the new item");
}
function add(){
    var groceryItems = ["Ruibarb","Eggs","Bread Loaf","Flour","Coffee"];
    var item=groceryItems[Math.floor(Math.random()*5)];
    listNumber++;
    document.getElementById("list").innerHTML+=`<li><div class="list"><div id="list`+listNumber+`">`+item+`</div><div class="rigth"><button class="button-2" onclick="change('list`+listNumber+`')">Change item</button></div></div></li>`;
}