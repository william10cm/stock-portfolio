import "./StockCard.css";

function StockCard({ stock, onToggleWatchlist }) {
  return (
    <div className="stock-card">
      <div className="stock-header">
        <h2>{stock.symbol}</h2>

        <button onClick={() => onToggleWatchlist(stock._id)}>
          {stock.isWatchlisted ? "Remove" : "Watchlist"}
        </button>
      </div>

      <p>{stock.companyName}</p>

      <h3>${stock.price}</h3>

      <p className={stock.change >= 0 ? "positive" : "negative"}>
        {stock.change}%
      </p>
    </div>
  );
}

export default StockCard;