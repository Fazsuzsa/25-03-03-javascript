function createHTMLList(liste){
    let htmlElements = liste.map((listItem) => `\t<li>${listItem}</li>\n`);
    // console.log(htmlElements);
    let flattenedList = htmlElements.toString().replaceAll(",", "");
    // console.log(flattenedList);
    let ergebnis = `<ul>\n${flattenedList}</ul>`
    return ergebnis
}; 

let lehrer = ["Lukas", "Tom", "Kevin", "Suheib"];

function setListContent(){
    let listDiv = document.getElementById("liste");
    let content = createHTMLList(lehrer);
    listDiv.innerHTML = content;
}

function setUserInputList(){
    // Text und Div aus dem Dokument holen:
    let userInput = document.getElementById("userInput");
    let text = userInput.value;
    let listDiv = document.getElementById("liste");
    let textList = text.split(",");
    let content = createHTMLList(textList);
    listDiv.innerHTML = content;
}

function setUserInputList2(){
    let userInput = document.getElementById("userInput2");
    let text = userInput.value;
    let textList = text.split(",");
    lehrer = textList;
    setListContent();
}

function setUserInputList3(){
    let userInput = document.getElementById("userInput3");
    let text = userInput.value;
    let textList = text.split(",");
    lehrer = lehrer.concat(textList);
    setListContent();
}

function addItem(){
    let userInput = document.getElementById("userInput4");
    let newItem = userInput.value;
    lehrerNeu = lehrer.push(newItem);
    setListContent();
}

function removeLastItem(){
    lehrer.pop();
    setListContent();
}