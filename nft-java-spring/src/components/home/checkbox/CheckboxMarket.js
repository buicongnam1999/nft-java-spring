import React from 'react';
import './Checkbox.scss';

export default function CheckboxMarket(props) {
    return (
        <>
            {
                props.activeChild ?
                    <span>
                        <input type="checkbox" id={props.name + props.index} checked />
                        <label htmlFor={props.name + props.index} onClick={() => props.checkBox(props.name)}>{props.name}</label>
                    </span> :
                    <span>
                        <input type="checkbox" id={props.name + props.index} />
                        <label htmlFor={props.name + props.index} onClick={() => props.checkBox(props.name)}>{props.name}</label>
                    </span>
            }
        </>
    )
}
