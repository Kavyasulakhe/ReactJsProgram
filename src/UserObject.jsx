import React from "react";
function UserObject(props){
    return(
        <>
        <h2> The object as a prop from App.jsx component is </h2>
        <h3> The name is: {props.user.name} </h3>
        <h3>the proffession is:{props.user.proffesssion}</h3>

        </>
    )
}
export default UserObject;