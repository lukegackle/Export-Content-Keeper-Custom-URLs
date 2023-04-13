let count = 0;
const inputs = document.getElementsByTagName("input");
for(let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  if(input.type === "text" && input.name.startsWith("URL_NAMES_")) {
    count++;
  }
}

var URLS = []
for (let i = 1; i <= count; i++) {
  URLS.push(document.querySelectorAll(''.concat('input[name=URL_NAMES_',i,']'))[0].value)
}
let csvContent = "data:text/csv;charset=utf-8,";

URLS.forEach(function(rowArray) {
    let row = rowArray; //.join(",");
    csvContent += row + "\r\n";
});
var encodedUri = encodeURI(csvContent);
window.open(encodedUri);
