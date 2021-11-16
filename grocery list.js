function displayList(){
    document.getElementById("container").hidden=false;
    const xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4 && xhr.status == 200){
            let obj = JSON.parse(this.responseText);
            Table(obj); 
        }
    
    };
    xhr.open("GET","lists.json", true);
    xhr.send();
}

function Table(obj){
    document.getElementById("things").style.display="none";
    let item = obj.item;
    let table ="<thead><tr><th>Sl.No</th><th>Item Name</th><th>Qty</th><th>Unit</th><th>Department</th><th>Notes</th><th>Checked</th></tr></thead>";
    for(let i=0;i<item.length;i++)
    {       
        table+="<tr>";
        table+="<td>"+item[i].SlNo+"</td><td>"+item[i].ItemName+"</td><td>"+item[i].Qty+"</td><td>"+item[i].Unit+"</td><td>"+item[i].Department+"</td><td>"+item[i].Notes+"</td><td><input type=checkbox></td>";
        table+="</tr>";
    }
    table+="</table>";
    document.getElementById("list").innerHTML=table;



}