const listItems = document.querySelectorAll('.draggable');
let draggedItem = null;

listItems.forEach((item) => {
    // When dragging starts
    item.addEventListener('dragstart', (e) => {
        draggedItem = item;
        setTimeout(() => item.classList.add('dragging'), 0);
    });

    // When dragging ends
    item.addEventListener('dragend', (e) => {
        setTimeout(() => item.classList.remove('dragging'), 0);
        draggedItem = null;
    });

    // Drag over another item
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
        const overItem = e.target;
        overItem.classList.add('over');
    });

    // Drag leaves another item
    item.addEventListener('dragleave', (e) => {
        e.target.classList.remove('over');
    });

    // Drop the item
    item.addEventListener('drop', (e) => {
        e.preventDefault();
        e.target.classList.remove('over');
        const list = e.target.parentNode;

        if (draggedItem && draggedItem !== e.target) {
            // Swap the dragged item with the target
            const items = Array.from(list.children);
            const draggedIndex = items.indexOf(draggedItem);
            const targetIndex = items.indexOf(e.target);

            if (draggedIndex > targetIndex) {
                list.insertBefore(draggedItem, e.target);
            } else {
                list.insertBefore(draggedItem, e.target.nextSibling);
            }
        }
    });
});
