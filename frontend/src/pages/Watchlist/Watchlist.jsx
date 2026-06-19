import { useEffect, useState } from "react";
import {
  getWatchlist,
  toggleWatchlist,
} from "../../services/stockService";

import StockCard from "../../components/StockCard/StockCard";

import "./Watchlist.css";

function Watchlist() {
  const [stocks, setStocks] = useState([]);

  async function fetchWatchlist() {
    const data = await getWatchlist();
    setStocks(data);
  }

  useEffect(() => {
    fetchWatchlist();
  }, []);

  async function handleToggleWatchlist(id) {
    await toggleWatchlist(id);
    fetchWatchlist();
  }

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>

      <div className="stocks-grid">
        {stocks.map((stock) => (
          <StockCard
            key={stock._id}
            stock={stock}
            onToggleWatchlist={handleToggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Watchlist;