import React from 'react';
import NumberFormat from 'react-number-format';

export const GlobalPosition = (props) => {
  return (
      <div className="c-global-position">
        <p className="c-global-position__title">
          {props.title}
        </p>
        <h1 className="c-global-position__quantity">
          <NumberFormat
              value={props.quantity}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'} />
        </h1>

      </div>
  )
}

