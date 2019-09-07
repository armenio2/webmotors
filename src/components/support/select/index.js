import React from 'react'

const makeOptions = (data, placeholder) => {
    console.log("data ", data)
    return data.map((item) => <option value={item.ID}>{placeholder}: {item.Name}</option>);

}


const Select = (props) => {
    return (
        <select style={{ width: '100%', border: '1px solid #C4C4C4', borderRadius: '3px', background: 'white', height: '30px' }} name={props.placeholder}>
            {makeOptions(props.data, props.placeholder)}
        </select>
    );
}

export default Select;