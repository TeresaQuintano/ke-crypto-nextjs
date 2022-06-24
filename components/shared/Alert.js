import React from 'react';

export const Alert = (props) => {
  return (

      <button id={props.id ? props.id : ''} className="c-button c-button--only-icon">
        <span className="c-button--only-icon__icon c-alert-icon">
          <i className={`k-icon-${props.icon}`}></i>

        </span>
        {props.amount ?
            <>
              <span className="c-alert__amount">{props.amount} </span>
              <span className="u-sr-only">You have {props.amount}
                {props.amount === 1 ? ' notification' : ' notifications'}</span>
            </>
            : ('')
        }

      </button>
  )
}

