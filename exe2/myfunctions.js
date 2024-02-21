function main() {
    var myNumber = document.getElementById('numberInput').value;
    

    var myColor = document.getElementById('colorInput').value;
    
    var selectInput = document.getElementById('fontSelect');
    var selectedOption = selectInput.options[selectInput.selectedIndex].text;

    console.log(myNumber)
    console.log(myColor)
    console.log(selectedOption)
}
function changeColor(){
    var paragraph = document.getElementById('myPara');
    var myColor = document.getElementById('colorInput').value;

    paragraph.style.color = myColor

}
function changeSize(){
    var paragraph = document.getElementById('myPara');
    var myNumber = document.getElementById('numberInput').value;

    paragraph.style.fontSize = parseInt(myNumber) + "px"

}
function changeFont(){
    var paragraph = document.getElementById('myPara');
    var selectInput = document.getElementById('fontSelect');
    var selectedOption = selectInput.options[selectInput.selectedIndex].text;

    paragraph.style.fontFamily = selectedOption

}