let backgroundPage = chrome.extension.getBackgroundPage();
let word = backgroundPage.word.trim();

// console.log(word)

let url = `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=YOURAPIKEY`;
url=url.replace('/\s+/g','');
loadJSON(url,gotData);
function gotData(data){
    createP(data[0].text).style('font-size','38pt');
}