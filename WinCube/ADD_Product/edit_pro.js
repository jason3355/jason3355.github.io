function add(){
    var div =document.getElementById("edit-pro");
    var div2 =document.createElement("div");
    div2.setAttribute("class","edit-pro");
    div.appendChild(div2);
    var input=document.createAttribute("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","請輸入規格選項，EX:藍色");
    div2.appendChild(input);
}