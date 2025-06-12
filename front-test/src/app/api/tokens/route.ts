import { NextResponse } from 'next/server';

const tokens = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 65432.10, marketCap: 1250000000000, volume24h: 28500000000, change24h: 2.5 },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3456.78, marketCap: 415000000000, volume24h: 15800000000, change24h: -1.2 },
  { id: 3, name: 'Binance Coin', symbol: 'BNB', price: 412.34, marketCap: 64000000000, volume24h: 2100000000, change24h: 0.8 },
  { id: 4, name: 'Solana', symbol: 'SOL', price: 123.45, marketCap: 52000000000, volume24h: 1800000000, change24h: 5.6 },
  { id: 5, name: 'Cardano', symbol: 'ADA', price: 0.45, marketCap: 15800000000, volume24h: 890000000, change24h: -2.3 },
  { id: 6, name: 'XRP', symbol: 'XRP', price: 0.58, marketCap: 31000000000, volume24h: 2100000000, change24h: 1.4 },
  { id: 7, name: 'Polkadot', symbol: 'DOT', price: 6.78, marketCap: 8500000000, volume24h: 450000000, change24h: -0.9 },
  { id: 8, name: 'Dogecoin', symbol: 'DOGE', price: 0.12, marketCap: 16800000000, volume24h: 780000000, change24h: 3.2 },
  { id: 9, name: 'Avalanche', symbol: 'AVAX', price: 34.56, marketCap: 12000000000, volume24h: 890000000, change24h: 4.1 },
  { id: 10, name: 'Polygon', symbol: 'MATIC', price: 0.89, marketCap: 8500000000, volume24h: 560000000, change24h: -1.5 },
  { id: 11, name: 'Chainlink', symbol: 'LINK', price: 14.23, marketCap: 7800000000, volume24h: 420000000, change24h: 2.8 },
  { id: 12, name: 'Uniswap', symbol: 'UNI', price: 7.89, marketCap: 5800000000, volume24h: 320000000, change24h: -0.7 },
  { id: 13, name: 'Litecoin', symbol: 'LTC', price: 78.90, marketCap: 5600000000, volume24h: 450000000, change24h: 1.2 },
  { id: 14, name: 'Bitcoin Cash', symbol: 'BCH', price: 234.56, marketCap: 4500000000, volume24h: 380000000, change24h: -2.1 },
  { id: 15, name: 'Stellar', symbol: 'XLM', price: 0.12, marketCap: 3200000000, volume24h: 210000000, change24h: 0.5 },
  { id: 16, name: 'Cosmos', symbol: 'ATOM', price: 8.76, marketCap: 2800000000, volume24h: 190000000, change24h: 3.4 },
  { id: 17, name: 'Monero', symbol: 'XMR', price: 167.89, marketCap: 3100000000, volume24h: 230000000, change24h: -1.8 },
  { id: 18, name: 'Ethereum Classic', symbol: 'ETC', price: 23.45, marketCap: 3400000000, volume24h: 280000000, change24h: 2.3 },
  { id: 19, name: 'Tezos', symbol: 'XTZ', price: 1.23, marketCap: 1200000000, volume24h: 89000000, change24h: -0.4 },
  { id: 20, name: 'Filecoin', symbol: 'FIL', price: 5.67, marketCap: 2500000000, volume24h: 180000000, change24h: 1.7 },
];

export async function GET() {
  return NextResponse.json({
    tokens: tokens,
  });
} 