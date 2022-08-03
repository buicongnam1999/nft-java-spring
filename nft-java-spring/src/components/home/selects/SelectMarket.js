import React from 'react';
import './Select.scss';

export default function SelectMarket(props) {
    const selectOption = (param) => {
        props.selectOption(param);
    }

    const renderSelectMarket = (params) => {
        return <>{
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
    }

    return (
        <div className='custom-select'>
            <select onChange={(e) => selectOption(e.target.value)}>
                {renderSelectMarket(props.sortList)}
            </select>
        </div>
    )
}
