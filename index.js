const task = document.getElementById("task");
const fromTime = document.getElementById("fromTime");
const toTime = document.getElementById("toTime");
const tod = document.getElementById("tod");
const schedule = document.getElementById("schedule");

// Add a new task to the list
function addTask() {
    if (
        task.value.trim() === '' ||
        fromTime.value.trim() === '' ||
        toTime.value.trim() === ''
    ) {
        alert("Write a Task along with its Time Duration to enter!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${task.value.trim()} (${fromTime.value.trim()} to ${toTime.value.trim()} ${tod.value}) <span>\u00d7</span>`;
        schedule.querySelector(".list").appendChild(li);
        saveData();
        task.value = '';
        fromTime.value = '';
        toTime.value = '';
    }
}

// Save the task list to localStorage
function saveData() {
    localStorage.setItem("data", schedule.querySelector(".list").innerHTML);
}

// Retrieve and display the saved task list from localStorage
function showData() {
    schedule.querySelector(".list").innerHTML = localStorage.getItem("data") || '';
}

// Handle click events for deleting tasks or marking them as completed
schedule.querySelector(".list").addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
});

// Load the saved data when the page is loaded
window.onload = showData;
