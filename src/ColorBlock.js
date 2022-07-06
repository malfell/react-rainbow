// Import react
import React from 'react'

// ColorBlock Function
//Renders the colors!
function ColorBlock(props) {
    return (
        <div className='colorBlock' style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

//export component
export default ColorBlock