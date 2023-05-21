
const form = document.getElementById('form');
const tick = document.getElementById('ticker')

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form submission
  getStockInfo();
});

async function getStockInfo() {
  const ticker = tick.value;
  console.log("ticker:",ticker);
  
  const symbol = ticker.toUpperCase();
  console.log("symbol:", symbol);
  const api_url = `https://api.stockdata.org/v1/data/quote?symbols=${symbol}&api_token=wLJzNuB6aqvHUSJqnuS90h3kW5AXSm6FAObVPzEY`;

  const response = await fetch(api_url);
  const data1 = await response.json();

  const { data: [{name, price, day_high, day_low, previous_close_price, day_change, volume}] } = data1;

  document.getElementById('name').textContent = `${name}`;
  document.getElementById('price').textContent = `Price: ${price}`;
  document.getElementById('day_high').textContent = `High: ${day_high}`;
  document.getElementById('day_low').textContent = `Low: ${day_low}`;
  document.getElementById('previous_close_price').textContent = `Previous Close:${previous_close_price}`;
  document.getElementById('day_change').textContent = `Day Change: ${day_change}`;
  document.getElementById('volume').textContent = `Volume: ${volume}`;
}
