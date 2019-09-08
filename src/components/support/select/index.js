import React from 'react'
import { useDispatch } from 'react-redux'


const makeOptions = (props) => {
    if (props.data) {
        let result = props.data.map((item) => <option key={item.ID} value={item.ID}>{props.placeholder}  {item.Name}</option>);
        return result = [
            <option key='default' value={'default'} >{props.placeholder} todos</option>,
            ...result
        ]
    } else {
        return <option key='default' value={'default'}>{props.placeholder}</option>;
    }
}

const Select = (props) => {
    const dispatch = useDispatch();
    const disabled = props.data ? false : true

    const handleChange = (event) => {
        const type = props.type
        const value = event.target.value
        dispatch({ type: type, newSelectedId: value })
    }
    return (
        <select
            style={styles}
            name={props.placeholder}
            disabled={disabled}
            value={props.value}
            onChange={handleChange}
        >
            {makeOptions(props)}
        </select >
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