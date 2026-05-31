
            const list = document.getElementById('todo-list');
            const input = document.getElementById('todo-input');

            window.addTodoItem = function() {
                if(!input.value) return;
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${input.value}</span>
                    <button class="btn btn-secondary" style="padding: 4px 8px;" onclick="this.parentElement.classList.toggle('completed')">✓</button>
                `;
                list.appendChild(li);
                input.value = '';
            }
        