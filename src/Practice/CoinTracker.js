import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 빈 Array를 기본값으로 할당하지 않으면 coins가 undefined가 돼 에러 발생할 수 있음 ex) length가 없음
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=4000") // ?limit=30를 붙이면 수천개가 있지만 30개만 가져옴
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); // 빈 배열이면 한번만 실행
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      {/* <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
