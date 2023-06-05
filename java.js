function addMore() {
    document.getElementById('error').innerHTML = '';
    var text = document.getElementById('input-text').value;
    if (text === '') {
        document.getElementById('error').innerHTML = 'Enter any value';
    } else {
        var box = document.getElementById('box');
        var li = document.createElement('li');
        li.textContent = text;

        
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            box.removeChild(li);
        };
        li.appendChild(deleteBtn);

        // Create the edit button
        var editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function () {
            var newText = prompt('Enter new value'); 
            if (newText) {
                li.textContent = newText; 
            }
        };
        li.appendChild(editBtn);

        box.appendChild(li);
    }
    document.getElementById('input-text').value = '';
}