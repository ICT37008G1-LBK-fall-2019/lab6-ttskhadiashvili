

var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];



function displayStudentsTable(studentList){
    var html = "<table border='1|1'>";
for (var i = 0; i < students.length; i++) {
    html+="<tr>";
    html+="<td>"+students[i].FirstName+"</td>";
    html+="<td>"+students[i].LastName+"</td>";
    html+="<td>"+students[i].PersonalNumber+"</td>";

    html+="</tr>";

}
html+="</table>";
document.getElementById("student-list").innerHTML = html;
}
displayStudentsTable(students);