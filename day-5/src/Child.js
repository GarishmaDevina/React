import React from "react";
function Child(props){
    return(
    <div className="Child">
        <h1>{props.img1}</h1>
        <p align="center"><b><i>Image-{props.v}</i></b></p>
    </div>
    )
};
export default Child;