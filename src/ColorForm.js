// import useState
import React, { useState } from 'react'

// ColorForm
function ColorForm(props){
    let [input, setInput] = useState('')

    // handle submit
    const handleSubmit = (e) => {
        // Eliminate the default behavior of form submittal
        e.preventDefault()
        //addColor function should be available within props
        props.addColor(input)
    }

    // color input form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    onChange={ (e) => setInput(e.target.value)} />
                    <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm