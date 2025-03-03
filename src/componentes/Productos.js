import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        productos: state.productos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProductos: (idProducto, nombre) => {
            dispatch({ type: 'AGREGAR_PRODUCTO_AL_CARRITO',
                       idProducto: idProducto,
                       nombre: nombre
            });
        }
    };
};


const Productos = ({productos, addProductos}) => {
    return ( 
        <div>
            <h3>Productos</h3>
            {productos.map( producto => (
                <div className='producto' key={producto.id}>
                    <p>{producto.nombre}</p>
                    <button onClick={() => addProductos(producto.id, producto.nombre)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
     );
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Productos);