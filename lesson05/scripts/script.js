document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('chapterInput');
    const addButton = document.getElementById('addButton');
    const list = document.getElementById('chapterList');

    addButton.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value.trim();
            deleteButton.textContent = '❌';
            deleteButton.setAttribute('aria-label', 'Remove ' + input.value.trim());

            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            input.value = '';
            input.focus();
        } else {
            // Handle empty input case or provide a message
            // For simplicity, we're not adding a message in this example.
        }
    });
});
