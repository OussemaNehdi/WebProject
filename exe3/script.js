
function main(){
    var name = document.getElementsByName('name')[0].value;
    var content = document.getElementsByName('content')[0].value;

    
    var newTask = document.createElement('p');
    newTask.innerText = name + ': ' + content;

  
    document.getElementById('column1').appendChild(newTask);

    name = document.getElementsByName('name')[0].value = "";
    content = document.getElementsByName('content')[0].value = "";
    
    
}