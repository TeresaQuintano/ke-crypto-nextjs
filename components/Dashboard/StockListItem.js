import React from 'react';
import NumberFormat from 'react-number-format';

export const StockListItem = (props) => {
  return (
      <>
        <span className={`c-list__item-logo c-list__item-logo--${props.name}`}></span>
        <div className="c-list__item-details">
          <span className="c-list__item-detail c-list__item-name">{props.name}</span>
          <span className="c-list__item-detail c-list__item-stock">
                <NumberFormat
                    value={props.stock}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}/>
                </span>
          <span className="c-list__item-detail c-list__item-sku">{props.sku}</span>
          <span className={(props.variant > 0)
              ?
              'c-list__item-detail c-list__item-variant--positive'
              :
              'c-list__item-detail c-list__item-variant--negative'}>

                <NumberFormat
                    value={props.variant}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={props.variant > 0 ? '+' : ''}
                    suffix={'%'}/>
                </span>
        </div>
      </>
  )
}

