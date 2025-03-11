let my_list = [];

function saveData(){
    localStorage.setItem("my_list", JSON.stringify(my_list));
}

function loadData(){
    const savedList = localStorage.getItem("my_list");
    if (my_list !== ""){
        my_list = JSON.parse(savedList);
        setListContent();
    }
}

function createHTMLList(liste){
    let htmlElements = liste.map((listItem) => `\t<li>${listItem}</li>\n`);
    // console.log(htmlElements);
    let flattenedList = htmlElements.toString().replaceAll(",", "");
    // console.log(flattenedList);
    let ergebnis = `<ul>\n${flattenedList}</ul>`
    return ergebnis
}; 

function setListContent(){
    let listDiv = document.getElementById("liste");
    let content = createHTMLList(my_list);
    listDiv.innerHTML = content;
}

function setUserInputList(){
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
    my_list = textList;
    setListContent();
}

function setUserInputList3(){
    let userInput = document.getElementById("userInput3");
    let text = userInput.value;
    let textList = text.split(",");
    my_list = my_list.concat(textList);
    setListContent();
    saveData();
}

function addItem(){
    let userInput = document.getElementById("userInput4");
    let newItem = userInput.value;
    myNewList = my_list.push(newItem);
    setListContent();
    saveData();
}

function removeLastItem(){
    my_list.pop();
    setListContent();
    saveData();
}