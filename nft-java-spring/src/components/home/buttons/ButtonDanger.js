import React from 'react';
import './Button.scss';

export default function ButtonDanger(props) {
  return (
    <>
        <div className='btn danger' onClick={() => props.method()}>
            {props.children}
        </div>
    </>
  )
}
