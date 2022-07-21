import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ButtonInfo(props) {
  return (
    <>
      <Button variant="outline-danger">{props.children}</Button>
    </>
  )
}
