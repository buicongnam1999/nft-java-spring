import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function ToastALert(props) {
  return (
    <>
      <Toast
        className="d-inline-block m-1"
        bg={props.variant.toLowerCase()}
        onClose={() => props.onCloseToast()} show={props.show} delay={3000} autohide
      >
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">{props.header}</strong>
          <small>{props.time}</small>
        </Toast.Header>
        <Toast.Body className={props.variant === 'Dark' && 'text-white'}>
          {props.body}
        </Toast.Body>
      </Toast>
    </>
  )
}
