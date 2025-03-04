import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
    carrito: state.carrito
    }
};

const Carrito = ({carrito}) => {
    return ( 
        <div>
            <h3 className='h3Carrito'>Carrito</h3>
            { carrito.length > 0 ?
                carrito.map((producto, index) => {
                    return (
                        <div key={index} className='productoCarrito'>
                            <p className='nombreProducto'>{producto.nombre}</p>
                            <p className='cantidadProducto'>{producto.cantidad}</p>
                        </div>
                    )
                })
                : <p>No hay productos en el carrito.</p>
            }
        </div>
    );
}
 
export default connect(mapStateToProps)(Carrito);