import React from 'react'

const makeOptions = (data, placeholder) => {
    if (data) {
        let result = data.map((item) => <option key={item.ID} value={item.ID}>{placeholder}  {item.Name}</option>);
        return result = [
            <option value={'default'}>{placeholder} todos</option>,
            ...result
        ]
    } else {
        return <option value={'default'}>{placeholder}</option>;
    }

}


const Select = (props) => {
    const disabled = props.data ? false : true
    return (
        <select style={styles} name={props.placeholder} disabled={disabled}>
            {makeOptions(props.data, props.placeholder)}
        </select>
    );
}

const styles = {
    width: '100%',
    border: '1px solid #C4C4C4',
    borderRadius: '3px',
    background: 'white',
    height: '30px'
}

export default Select;