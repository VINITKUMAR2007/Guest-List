name_of_the_student_array = [];
display_name_array = [];

function submit(){
for (var i=1; i <= 4; i++){
name_of_the_student = document.getElementById("name_of_the_student_" +i).value;
console.log(name_of_the_student);

name_of_the_student_array.push(name_of_the_student);
console.log(name_of_the_student_array);


}
for(var k = 0; k< name_of_the_student_array.length; k++){
display_name_array.push("<h4> Name : "+name_of_the_student_array[k]+"</h4>");
 console.log(display_name_array);
document.getElementById("display_name_with_commas").innerHTML = display_name_array
}




}
