function addItem(){
    var ol = document.getElementById("student-list");
    var candidate = document.getElementById("stu");
    var li = document.createElement("li");
    li.setAttribute('id',stu.value);
    li.appendChild(document.createTextNode(stu.value));
    ol.appendChild(li);
}