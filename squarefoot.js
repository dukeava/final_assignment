function calculateArea() {
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        alert("Please enter valid numbers for both width and height.");
        return;
    }

    const area = width * height;
    document.getElementById('areaResult').textContent = `${area} square feet`;

    const box = document.getElementById('growBox');
    box.style.width = `${width * 10}px`;
    box.style.height = `${height * 10}px`;
    box.style.backgroundColor = 'lightgreen';
}
