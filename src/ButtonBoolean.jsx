import React from "react";
function ButtonBoolean(props){
    return(
        <>
        <h2> The Button Component</h2>
        <button disabled={props.disabled} style={{backgroundColor:"green"}}>ClickMe</button>

        </>
    )
}
export default ButtonBoolean;