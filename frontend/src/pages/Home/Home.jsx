import { useEffect, useState } from "react";
import { getStocks, toggleWatchlist } from "../../services/stockService";
import StockCard from "../../components/StockCard/StockCard";
import "./Home.css";

function Home() {
  const [stocks, setStocks] = useState([]);

  async function fetchStocks() {
    const data = await getStocks();
    setStocks(data);
  }

  useEffect(() => {
    fetchStocks();
  }, []);

  async function handleToggleWatchlist(id) {
    await toggleWatchlist(id);
    fetchStocks();
  }

  return (
    <div className="home">
      <h1>All Stocks</h1>

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

export default Home;