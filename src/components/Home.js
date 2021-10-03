import React from 'react'
import { useDispatch } from 'react-redux'
import a from '../img/a.png'
import { ADD_TO_CART,REMOVE_TO_CART } from "../service/constants"
function Home(props) {

    console.warn("home: ", props.data)
    const dispatch = useDispatch();

    return (

        <div>

            <h1> Home Component </h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={a} alt=""/>
                </div>
                <div className="text-wrapper item">
                    <span className="span1"> I-Phone </span>
                    <span className="span1"> Price: $100.00 </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>{ dispatch({type:ADD_TO_CART, data: {price:1000,name:'i phone 11'}})}}> Add To Cart </button>
                    <button onClick={()=>{ dispatch({type:REMOVE_TO_CART})}} disabled={props.data.length ===0}>  Remove From Cart </button>
                </div>
            </div>
        </div>

    )
}

export default Home

// {()=>}
