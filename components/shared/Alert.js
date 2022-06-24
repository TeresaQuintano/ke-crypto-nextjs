import React from 'react';
import styles from '/styles/components/Alert.module.scss'
export const Alert = (props) => {
  return (

      <button id={props.id ? props.id : ''} className={`${styles["c-button"]} ${styles["c-button--only-icon"]}`}>
        <span className={`${styles["c-button--only-icon__icon"]} ${styles["c-alert-icon"]}`}>
          <i className={`${styles[`k-icon-${props.icon}`]}`}></i>

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

