
//Oscar Ramces Alegría Mena - 1/10/24
//Class Factory
class ItemFactory {
  static createItem(type, name, price) {
      switch (type) {
          case 'Producto':
              return new Producto(name, price);
          case 'Servicio':
              return new Servicio(name, price);
          default:
              throw new Error('Tipo de ítem no válido');
      }
  }
}

//Objetos
class Producto {
  constructor(name, price) {
      this.name = name;
      this.price = price;
      this.type = 'Producto';
  }
}

class Servicio {
  constructor(name, price) {
      this.name = name;
      this.price = price;
      this.type = 'Servicio';
  }
}
