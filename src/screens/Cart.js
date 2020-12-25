import React from 'react'

const Cart = ({ match, location }) => {
    const id = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    return (
        <div>
            <p>ID: {id} QTY: {qty}</p>
        </div>
    )
}

export default Cart
