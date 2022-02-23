var todos = [];

function init(){
    var leftPaneDiv = document.createElement("div");
    leftPaneDiv.setAttribute("id", "leftDiv");
    leftPaneDiv.innerHTML = "<h1>Task List</h1>";
    leftPaneDiv.innerHTML = leftPaneDiv.innerHTML + "<h3>You can type task in right side and hit enter</h3>"
    document.body.appendChild(leftPaneDiv)

    var rightPaneDiv = document.createElement("div");
    rightPaneDiv.setAttribute("id", "rightDiv");
    document.body.appendChild(rightPaneDiv);

    var textBox = document.createElement("textarea");
    textBox.setAttribute("class", "textBox");
    textBox.setAttribute("placeholder", "Enter your task");
    rightPaneDiv.appendChild(textBox);

    textBox.addEventListener("keydown", function(event){
        var eventCode = event.code;

        if(eventCode === "Enter" && textBox.value !== "" && textBox.value !== "\n"){
            event.preventDefault();
            var todo = document.createElement("div");
            todo.setAttribute("id", "todoDiv")
            var read = document.createElement("button");
            var delet = document.createElement("button");

            read.innerHTML = "Edit";
            delet.innerHTML = "Delete";

            todo.innerHTML = "<h3>" + textBox.value + "</h3>";
            todo.appendChild(read);
            todo.appendChild(delet);
            
            todos.push(textBox.value);
            localStorage.setItem("todos", JSON.stringify(todos));

            leftPaneDiv.appendChild(todo);

            delet.addEventListener("click", function(event){
                var parent = event.target.parentNode;
                var mainDiv = parent.parentNode;
                mainDiv.removeChild(parent);
                for(var i = 0; i < todos.length; i++){
                    if(todos[i] === parent.children[0].innerHTML){
                        todos.splice(i, 1);
                        console.log(1);
                        localStorage.setItem("todos", JSON.stringify(todos));
                    }
                }
                console.log(parent);  
            });

            read.addEventListener("click", function(event){
                var parent = event.target.parentNode;
                var mainDiv = parent.parentNode;
                textBox.value = parent.children[0].innerText;
                mainDiv.removeChild(parent);
                for(var i = 0; i < todos.length; i++){
                    if(todos[i] === parent.children[0].innerHTML){
                        todos.splice(i, 1);
                        console.log(1);
                        localStorage.setItem("todos", JSON.stringify(todos));
                    }
                }
                console.log(parent);
            });
            textBox.value = ""; 

        }
        else{
            if(textBox.value === "\n" || textBox.value === "")
                textBox.value = "";
        }
    });
}

init();

let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null)
{
  todos = JSON.parse(storedTodos);
}

todos.forEach(function(value){
    var todo = document.createElement("div");
    todo.setAttribute("id", "todoDiv")
    var read = document.createElement("button");
    var delet = document.createElement("button");

    read.innerHTML = "Edit";
    delet.innerHTML = "Delete";

    todo.innerHTML = "<h3>" + value + "</h3>";
    todo.appendChild(read);
    todo.appendChild(delet);

    leftPaneDiv = document.getElementById("leftDiv");
    leftPaneDiv.appendChild(todo);

    delet.addEventListener("click", function(event){
        parent = event.target.parentNode;
        mainDiv = parent.parentNode;
        mainDiv.removeChild(parent);
        for(var i = 0; i < todos.length; i++){
            if(todos[i] === parent.children[0].innerHTML){
                todos.splice(i, 1);
                console.log(1);
                localStorage.setItem("todos", JSON.stringify(todos));
            }
        }
        console.log(parent);
    });

    read.addEventListener("click", function(event){
        var parent = event.target.parentNode;
        var mainDiv = parent.parentNode;
        var textBox = document.querySelector("textarea");
        textBox.value = parent.children[0].innerText;
        mainDiv.removeChild(parent);
        for(var i = 0; i < todos.length; i++){
            if(todos[i] === parent.children[0].innerHTML){
                todos.splice(i, 1);
                console.log(1);
                localStorage.setItem("todos", JSON.stringify(todos));
            }
        }
        console.log(parent);
    });
});

