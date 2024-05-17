const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('Please enter a task');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;

        // Create the span for the close button
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        // Create the date and time element
        let dateSpan = document.createElement('span');
        let now = new Date();
        let dateString = now.toLocaleDateString();
        let timeString = now.toLocaleTimeString();
        dateSpan.innerHTML = `${dateString} ${timeString}`;
        dateSpan.className = 'datetime';
        li.appendChild(dateSpan);

        listContainer.appendChild(li);

        inputBox.value = ''; // Clear the input box
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN" && e.target.innerHTML === '\u00d7') {
        if (confirm('Confirm to delete this task?')) {
            e.target.parentElement.remove();
            saveData();
        }
    }
}, false);

function deleteAllTasks() {
    if (confirm('Confirm to delete all tasks?')) {
        listContainer.innerHTML = '';
        saveData();
    }
}

function deleteCompletedTasks() {
    if (confirm('Confirm to delete all completed tasks?')) {
        const completedTasks = listContainer.querySelectorAll('.checked');
        completedTasks.forEach(task => task.remove());
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}

showTask();
