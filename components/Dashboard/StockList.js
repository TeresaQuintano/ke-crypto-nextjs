import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from '../../components';
import { StockListItem } from './StockListItem';
import { getStocks } from '../../api/api'
import { useApp } from '../../context/AppContext';

export const StockList = () => {
  let { setTotalAmount, setHasError } = useApp();
  const [isLoading, setIsLoading] = useState(false);
  const [stocks, setStocks] = useState([]);

  const handleFetch = () => {
    setIsLoading(true);

    getStocks()
        .then((response) => {

          const sum = response.reduce(function (prev, current) {
            return (prev + +current.stock)
          }, 0);

          setTotalAmount(sum)
          setStocks(response)
          setIsLoading(false);

        })
        .catch((error) => {
          setIsLoading(false);
          setHasError(true)
        });
  };

  useEffect(() => {
    handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderStockList = (
      <div className="c-list">
        <p className="c-list__title">Recent</p>
        <ul className="c-list-items">
          {stocks.map((item) => (
              <li key={item.id} className="c-list__item">
                <StockListItem
                    name={item.name}
                    stock={item.stock}
                    sku={item.sku}
                    variant={item.variant}
                />
              </li>
          ))}
        </ul>
      </div>
  )
  return (
      <div className="c-stock-list">
        {isLoading ? <LoadingSpinner/> : renderStockList}
      </div>
  )
}

