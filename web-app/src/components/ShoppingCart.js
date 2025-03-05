import { useReducer } from "react";
 
function cartReducer(state, action) {
    const initialState = [];
    switch(action.type) {
        case "add":
            return [...state, action.item];
        case "remove":
            return state.filter((item,index) => index != action.index);
        case "clear":
            return initialState;
        default :
            return [...state];
    }
}
 
function ShoppingCart () {
    const[state, dispatch] = useReducer(cartReducer, []);
 
    return (
        <>
            <h2>Shopping cart ({state.length} items)</h2>
            <button onClick={() =>dispatch({type: "add", item: "Laptop"})}>Add laptop</button>
            <button onClick={() =>dispatch({type: "add", item: "Mobile"})}>Add Mobile</button>
            <button onClick={() =>dispatch({type: "clear"})}>clear</button>
            <ul>
                {state.map((item, index) => (
                    <li key={index}>{item} <button onClick={() =>dispatch({type: "remove", index})}>Remove</button></li>
                ))}
            </ul>
           
        </>
       
    );
}
 
export default ShoppingCart;