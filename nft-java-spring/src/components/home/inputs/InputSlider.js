import React, { useRef, useEffect, useState } from 'react';
import InputRange from "react-input-range";
import './InputSlider.scss';

export default function InputSlider(props) {
    const [val, setVal] = useState({ min: props.min, max: props.max });
    const onChangeValue = (args) => {
        console.log(args);
    }
    return (
        <>
            <div>
                {props.title}
            </div>
            <div>
                <InputRange
                    step={props.step}
                    // formatLabel={value => null}
                    draggableTrack={false}
                    allowSameValues={false}
                    maxValue={props.max}
                    minValue={props.min}
                    value={val}
                    onChange={setVal}
                    onChangeComplete={(args) => onChangeValue(args)}
                />
                <div className='value-input-slider'>
                    <div className='min-input'>
                        {val.min}
                    </div>
                    <span>-</span>
                    <div className='max-input'>
                        {val.max}
                    </div>
                </div>
            </div>
        </>
    )
}
