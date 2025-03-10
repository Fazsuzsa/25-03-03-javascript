// schreibe eine Funktion createHTMLList(liste)
// sie solle eine JS Liste annehmen und daraus einen HTML String für eine ungeordnete Liste (<ul>) basteln

function createHTMLList(liste){
    let htmlElements = liste.map((listItem) => `\t<li>${listItem}</li>\n`);
    // console.log(htmlElements);
    let flattenedList = htmlElements.toString().replaceAll(",", "");
    // console.log(flattenedList);
    let ergebnis = `<ul>\n${flattenedList}</ul>`
    return ergebnis
}; 

const lehrer = ["Lukas", "Tom", "Kevin", "Suheib"];

function setListContent(){
    let listDiv = document.getElementById("liste")
    let content = createHTMLList(lehrer)
    listDiv.innerHTML = content
}

function setUserInputList(){
    // Text und Div aus dem Dokument holen:
    let userInput = document.getElementById("userInput")
    let text = userInput.value
    let listDiv = document.getElementById("liste")
    let textList = text.split(",")
    let content = createHTMLList(textList)
    listDiv.innerHTML = content
}