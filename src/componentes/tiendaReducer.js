const initialState = {
    productos: [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' },
        { id: 3, nombre: 'Producto 3' },
        { id: 4, nombre: 'Producto 4' },
    ],
    carrito: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_PRODUCTO_AL_CARRITO': {
            const {nombre, idProducto} = action;
            if (state.carrito.length === 0) {
                return {
                   ...state,
                    carrito: [{ id: idProducto, nombre: nombre, cantidad: 1 }] // Nuevo producto añadido si no está
                };
            } else {
                const newCarrito = [...state.carrito]; // De esta manera el estado del carrito no se resetea
                const yaEnCarrito = newCarrito.filter((productoEnCarrito) => {
                    return productoEnCarrito.id === idProducto;
                }).length > 0;

                if (yaEnCarrito) {
                    newCarrito.forEach((productoEnCarrito, indexProducto) => {
                        if (productoEnCarrito.id === idProducto) {
                            const cantidad = newCarrito[indexProducto].cantidad;

                            newCarrito[indexProducto] = {id: idProducto, nombre: nombre, cantidad: cantidad + 1}; // +1 a la cantidad de ese producto en el carrito
                        }
                    });
                } 
                else {
                    newCarrito.push({ id: idProducto, nombre: nombre, cantidad: 1 }); // Nuevo producto añadido si no está y hay otros productos en el carrito
                }

                newCarrito.sort((a, b) => a.id - b.id); // Ordena los prodcutos en el carrito
                
                return {
                   ...state,
                    carrito: newCarrito
                };
            }
        }
        default: { 
            return state;
        }
    }
};

export default reducer;