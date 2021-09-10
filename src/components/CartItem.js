import React, { useContext } from 'react'
import { ProdContext } from '../context/ProductContext';
import './CartItem.css'
function CartItem(props) {


    const{incrementItem, decrementItem, deleteItemHandler} = useContext(ProdContext)

    const {id,title, image, qty, price, category} = props.data;
    
    const totalPrice = price * qty;

    return (
        <div className="main-cartItem">
            <div className="img-div">
                <img src={image} alt="item-img"></img>
            </div>
            <div className="product-details-div">
                <h1>{title}</h1>
                <p>{category}</p>
            </div>
            <div className="calculation-div">
                <div className="calculation-item">
                    <p onClick={()=>decrementItem(id)}>-</p>
                    <h3 className="calculation-qty">{qty}</h3>
                    <p onClick={()=>incrementItem(id)}>+</p>
                    <h3 className="calculation-price">${totalPrice}</h3>
                    <i className="fa fa-trash-o del-btn" onClick={()=>deleteItemHandler(id)}></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem;