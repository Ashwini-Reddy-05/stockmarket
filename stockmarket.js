const stocks = [
    { symbol: 'AAPL', name: 'Apple', price: 185.92, change: 2.34 },
    { symbol: 'MSFT', name: 'Microsoft', price: 378.91, change: 3.12 },
    { symbol: 'GOOGL', name: 'Google', price: 141.80, change: 1.85 },
    { symbol: 'AMZN', name: 'Amazon', price: 155.33, change: -0.92 },
    { symbol: 'TSLA', name: 'Tesla', price: 248.48, change: 4.56 },
    { symbol: 'NVDA', name: 'NVIDIA', price: 495.22, change: 5.67 }
];

function showStocks() {
    const grid = document.getElementById('stocksGrid');
    let html = '';
    
    stocks.forEach(stock => {
        const color = stock.change >= 0 ? 'positive' : 'negative';
        const arrow = stock.change >= 0 ? '▲' : '▼';
        
        html += `
            <div class="stock-card">
                <div class="stock-symbol">${stock.symbol}</div>
                <div class="stock-name">${stock.name}</div>
                <div class="stock-price">$${stock.price.toFixed(2)}</div>
                <span class="stock-change ${color}">
                    ${arrow} ${Math.abs(stock.change).toFixed(2)}%
                </span>
            </div>
        `;
    });
    
    grid.innerHTML = html;
}

showStocks();
