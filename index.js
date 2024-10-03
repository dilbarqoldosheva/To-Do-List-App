// Task qo'shish funksiyasi
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    // Foydalanuvchi inputiga kiritilgan qiymatni olish
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Yangi vazifa yaratish
    const li = document.createElement('li');
    li.textContent = taskText;
    li.className = 'flex justify-between items-center bg-gray-100 p-2 mt-2 rounded-md shadow';

    // Delete tugmachasi
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'bg-red-500 text-white p-1 rounded hover:bg-red-600';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
    };

    // Vazifa tugallanganligini belgilash
    li.onclick = function () {
        li.classList.toggle('line-through');
        li.classList.toggle('text-gray-400');
    };

    // Elementni ro'yxatga qo'shish
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Input maydonini tozalash
    taskInput.value = '';
}