function replaceText() {
    let text = document.getElementById('textInput').value;
    let replacedText = text.replace(/holly/gi, 'TEMP')
                           .replace(/jolly/gi, 'holly')
                           .replace(/TEMP/gi, 'jolly');

    document.getElementById('result').textContent = replacedText;
}
