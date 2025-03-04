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
        //Evitar errores encapsulando todo en <>
        <>
        <h3 className='h3Producto'>Productos</h3>
        <div className='contenedorProductos'>
            {productos.map( producto => (
                <div className='producto' key={producto.id}>
                    <p>{producto.nombre}</p>
                    <button className='boton' onClick={() => addProductos(producto.id, producto.nombre)}>Agregar al carrito</button>
                </div>
            ))}
        </div>
        </>
     );
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Productos);