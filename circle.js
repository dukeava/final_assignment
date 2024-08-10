function generateCircles() {
    const count = parseInt(document.getElementById('circleCount').value);
    
    if (isNaN(count) || count < 1 || count > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    const container = document.getElementById('circleContainer');
    container.innerHTML = '';  // Clear existing circles

    for (let i = 0; i < count; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.addEventListener('click', toggleColor);
        container.appendChild(circle);
    }
}

function toggleColor(event) {
    const circle = event.target;
    if (circle.style.backgroundColor === 'blue') {
        circle.style.backgroundColor = 'red';
    } else {
        circle.style.backgroundColor = 'blue';
    }
}
