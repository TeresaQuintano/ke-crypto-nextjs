export const getStocks = () =>
    fetch(
        `http://localhost:3000/api/stocks`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
    ).then(res => res.json())

