//Crear Patrones de diseño
const inventory = new Inventory();
const observer = new InventoryObserver();
inventory.subscribe(observer);

//Agregar items
function addItemToInventory() {
    const type = document.getElementById('itemType').value;
    const name = document.getElementById('itemName').value;
    const price = parseFloat(document.getElementById('itemPrice').value);

    if (name === '' || isNaN(price)) {
        alert('Por favor, ingresa un nombre y precio válidos.');
        return;
    }

    //Crear Item con factory
    const newItem = ItemFactory.createItem(type, name, price);

    // Agregar el item al inventario
    inventory.addItem(newItem);

    // Actualizar la lista de los objetos
    updateInventoryList();
}

// Actualizar la interfaz con el inventario actual
function updateInventoryList() {
    const inventoryList = document.getElementById('inventoryList');
    //Limpiar la lista actual
    inventoryList.innerHTML = '';

    inventory.listItems().forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.type}: ${item.name} - $${item.price.toFixed(2)}`;
        inventoryList.appendChild(li);
    });
}
