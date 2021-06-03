const btnTranslate = document.querySelector("#btn-translate");

const txtInput = document.querySelector("txt-input");

const outputDiv = document.querySelector("#output");

const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) { 
     return serverURL + "?" + "text=" + text
}

function clickHandler() {

    // outputDiv.innerText = "ajjjsjkjjaajs " +  txtInput.value;

    const inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clickHandler())