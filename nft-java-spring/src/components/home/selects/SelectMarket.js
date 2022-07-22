import React, { useState, useEffect } from 'react';
import './Select.scss';

export default function
    (props) {
    const [showOptionList, setShowOptionList] = useState(true);

    const selectOption = (param) => {
        props.selectOption(param);
    }

    const renderSelectMarket = (params) => {
        let options = <>
            {
                props.sortList.map((param) =>
                    <option
                        data-name={param.name}
                        key={param.type}
                        onChange={() => selectOption(param.type)}
                        value={param.type}
                    >
                        {param.name}
                    </option>
                )
            }</>
        return options;
    }

    return (
        <div className='custom-select'>
            <select onChange={(e) => selectOption(e.target.value)}>
                {renderSelectMarket(props.sortList)}
            </select>
        </div>
    )
}
