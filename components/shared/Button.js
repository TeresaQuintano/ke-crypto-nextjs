import React from 'react';

export const Button = (props) => {
  return (
      <button className={props.class}
              onClick={props.handler}
              type={props.type ? props.type : 'button'}
              id={props.id}
              data-testid={props.id}
      >
        {props.icon ?
            <i className={`c-button__icon k-icon-${props.icon}`}></i>
            : ''}
        {props.label}
      </button>


  )
}

