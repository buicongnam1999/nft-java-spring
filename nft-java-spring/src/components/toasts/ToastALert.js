import React, { useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import './ToastALert.scss';
import { useAnimatePresence } from "use-animate-presence";

export default function ToastALert(props) {
    const popupVariants = {
        y: {
          from: -200,
          to: 0
        }
    }; 

    const popup = useAnimatePresence({
        variants: popupVariants,
        initial: "visible",
        options: {
          stiffness: 200,
          mass: 3,
          damping: 30
        }
    });

    useEffect(() => {
        setTimeout(() => {
          popup.togglePresence();
        }, 2000);
    }, [])

    if (!popup.isRendered) return null;

    return (
      <div ref={popup.ref}>
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
      </div>
    )
}
