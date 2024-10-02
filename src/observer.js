//Oscar Ramces Alegría Mena - 1/10/24
//Class del Observer
class Subject {
  constructor() {
      this.observers = [];
  }

  subscribe(observer) {
      this.observers.push(observer);
  }

  unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(item) {
      this.observers.forEach(observer => observer.update(item));
  }
}

// Observador
class InventoryObserver {
  update(item) {
      console.log(`Se ha agregado un nuevo ítem al inventario: ${item.name}, tipo: ${item.type}, precio: $${item.price}`);
      
      // Notificación al agregar
      const notification = document.getElementById('notification');
      notification.innerText = `Artículo '${item.name}' agregado al inventario.`;
      notification.style.display = 'block'; // Mostrar notificación

      // Ocultar notificación
      setTimeout(() => {
          notification.style.display = 'none';
      }, 3000);
  }
}

// Clase que maneja los items
class Inventory extends Subject {
  constructor() {
      super();
      this.items = [];
  }

  // Verificación
  itemExists(newItem) {
      return this.items.some(item => item.name === newItem.name && item.type === newItem.type);
  }

  addItem(item) {
      // Verificar si el ítem ya está en el inventario
      if (this.itemExists(item)) {
          alert(`El ítem "${item.name}" de tipo "${item.type}" ya está en el inventario.`);
      } else {
          this.items.push(item);
          this.notify(item);
      }
  }

  //Mostrar los items
  listItems() {
      return this.items;
  }
}
