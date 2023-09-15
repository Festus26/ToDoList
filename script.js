// Function to check if Enter key is pressed and click the button
function checkEnter(event) {
    if (event.key === "Enter") {
        document.getElementById("submitButton").click();
    }
}
// Function to add a new task
function addTask() {
    const inputField = document.getElementById("newTask");
    const taskList = document.getElementById("taskList");

    // Get the task text from the input field
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.textContent.className = "task-text"
    listItem.className = "clearfix";

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.className = "Remove-button";

    const orderDiv = document.createElement("div");
    orderDiv.className = "order-div";
    orderDiv.textContent = "";

    const upButton = document.createElement("button");
    upButton.textContent = "↑";
    upButton.textContent.className = "button-content";
    upButton.className = "up-button";
    upButton.addEventListener("click", function () {
        moveUp(upButton);
    });


    const downButton = document.createElement("button");
    downButton.textContent = "↓";
    downButton.textContent.className = "button-content";
    downButton.className = "down-button";
    downButton.addEventListener("click", function () {
        moveDown(downButton);
    });

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(removeButton);

    // Append the new task to the task list
    taskList.appendChild(listItem);
    listItem.appendChild(orderDiv);
    orderDiv.appendChild(upButton);
    orderDiv.appendChild(downButton);

    // Clear the input field
    inputField.value = "";
}
function removeTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}
// Function to move the selected list item up
function moveUp(button) {
    const list = document.getElementById("taskList");
    const selectedItem = button.parentElement.parentElement;

    if (selectedItem) {
        const previousItem = selectedItem.previousElementSibling;

        if (previousItem) {
            list.insertBefore(selectedItem, previousItem);
        }
    }
}

// Function to move the selected list item down
function moveDown(button) {
    const list = document.getElementById("taskList");
    const selectedItem = button.parentElement.parentElement;

    if (selectedItem) {
        const nextItem = selectedItem.nextElementSibling;

        if (nextItem) {
            list.insertBefore(nextItem, selectedItem);
        }
    }
}

