function addTask() {
  var input = document.getElementById("taskInput");
  var inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please enter a task!");
    return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    ul.removeChild(li);
    alert("Task deleted successfully!");
  };
  li.appendChild(deleteButton);

  var updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.onclick = function () {
    var newTask = prompt("Enter the updated task:");
    if (newTask !== null && newTask.trim() !== "") {
      textNode.nodeValue = newTask.trim();
      alert("Task updated successfully!");
    }
  };
  li.appendChild(updateButton);

  li.onclick = function () {
    this.classList.toggle("completed");
  };

  ul.appendChild(li);
  input.value = "";
  alert("Task added successfully!");
}
function showNotification(message) {
  var notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(function () {
    notification.classList.add("show-notification");
    setTimeout(function () {
      notification.classList.remove("show-notification");
      setTimeout(function () {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  }, 100);
}

function addTask() {
  var input = document.getElementById("taskInput");
  var inputValue = input.value.trim();

  if (inputValue === "") {
    showNotification("Please enter a task!");
    return;
  }

  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  var textNode = document.createTextNode(inputValue);
  li.appendChild(textNode);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.style.float = "right";
  deleteButton.onclick = function () {
    ul.removeChild(li);
    showNotification("Task deleted successfully!");
  };
  li.appendChild(deleteButton);

  var updateButton = document.createElement("button");
  updateButton.innerHTML = "Update";
  updateButton.style.float = "right";
  updateButton.onclick = function () {
    var newTask = prompt("Enter the updated task:");
    if (newTask !== null && newTask.trim() !== "") {
      textNode.nodeValue = newTask.trim();
      showNotification("Task updated successfully!");
    }
  };
  li.appendChild(updateButton);

  li.onclick = function () {
    this.classList.toggle("completed");
  };

  ul.appendChild(li);
  input.value = "";
  showNotification("Task added successfully!");
}
