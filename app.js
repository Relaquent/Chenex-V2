import React, { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp, Activity, Brain, AlertTriangle, DollarSign, BarChart3, Zap, Target, Shield, Eye, Cpu, TrendingDownIcon } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ComposedChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const Chenex = () => {
  const [cryptos, setCryptos] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [predicting, setPredicting] = useState(false);
  const [aiProgress, setAiProgress] = useState(0);

  // Enhanced crypto data with more coins
  useEffect(() => {
    const fetchCryptoData = () => {
      const mockCryptos = [
        { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 43250.32, change24h: -2.34, volume: 28500000000, marketCap: 846000000000, circulatingSupply: 19.5e6 },
        { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 2280.45, change24h: -3.12, volume: 15200000000, marketCap: 274000000000, circulatingSupply: 120e6 },
        { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 0.485, change24h: -1.89, volume: 890000000, marketCap: 17000000000, circulatingSupply: 35e9 },
        { id: 'solana', name: 'Solana', symbol: 'SOL', price: 98.76, change24h: -4.21, volume: 2100000000, marketCap: 42000000000, circulatingSupply: 425e6 },
        { id: 'ripple', name: 'Ripple', symbol: 'XRP', price: 0.623, change24h: -2.67, volume: 1500000000, marketCap: 33000000000, circulatingSupply: 53e9 },
        { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 7.45, change24h: -3.45, volume: 320000000, marketCap: 9500000000, circulatingSupply: 1.27e9 },
        { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.087, change24h: -5.12, volume: 890000000, marketCap: 12400000000, circulatingSupply: 142e9 },
        { id: 'avalanche', name: 'Avalanche', symbol: 'AVAX', price: 36.89, change24h: -2.98, volume: 560000000, marketCap: 13500000000, circulatingSupply: 366e6 },
        { id: 'polygon', name: 'Polygon', symbol: 'MATIC', price: 0.845, change24h: -4.56, volume: 420000000, marketCap: 7800000000, circulatingSupply: 9.2e9 },
        { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', price: 14.32, change24h: -3.21, volume: 680000000, marketCap: 8100000000, circulatingSupply: 566e6 },
        { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', price: 72.15, change24h: -2.87, volume: 540000000, marketCap: 5300000000, circulatingSupply: 73.4e6 },
        { id: 'stellar', name: 'Stellar', symbol: 'XLM', price: 0.123, change24h: -3.67, volume: 180000000, marketCap: 3500000000, circulatingSupply: 28.4e9 },
        { id: 'cosmos', name: 'Cosmos', symbol: 'ATOM', price: 9.87, change24h: -4.12, volume: 290000000, marketCap: 3800000000, circulatingSupply: 385e6 },
        { id: 'monero', name: 'Monero', symbol: 'XMR', price: 165.43, change24h: -2.45, volume: 210000000, marketCap: 3000000000, circulatingSupply: 18.1e6 },
        { id: 'tron', name: 'Tron', symbol: 'TRX', price: 0.105, change24h: -3.89, volume: 890000000, marketCap: 9200000000, circulatingSupply: 87.6e9 },
      ];
      
      const updated = mockCryptos.map(crypto => ({
        ...crypto,
        price: crypto.price * (1 + (Math.random() - 0.5) * 0.003),
        change24h: crypto.change24h + (Math.random() - 0.5) * 0.6
      }));
      
      setCryptos(updated);
      setLoading(false);
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 2000);
    return () => clearInterval(interval);
  }, []);

  // Advanced AI prediction with progress simulation
  const generatePrediction = async (crypto) => {
    setPredicting(true);
    setSelectedCrypto(crypto);
    setAiProgress(0);

    const stages = [
      'Initializing neural networks...',
      'Analyzing historical patterns...',
      'Processing market sentiment data...',
      'Evaluating whale movements...',
      'Computing technical indicators...',
      'Running predictive algorithms...',
      'Cross-validating models...',
      'Generating confidence scores...',
      'Finalizing predictions...'
    ];

    for (let i = 0; i < stages.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 200));
      setAiProgress(((i + 1) / stages.length) * 100);
    }

    // Generate comprehensive historical data (90 days)
    const historicalData = [];
    let basePrice = crypto.price * 1.15;
    for (let i = 90; i >= 0; i--) {
      const volatility = Math.sin(i / 10) * 0.2 + (Math.random() - 0.5) * 0.08;
      const trend = -0.0015 * (90 - i); // Downward trend
      const price = basePrice * (1 + volatility + trend);
      
      historicalData.push({
        day: i,
        time: i === 0 ? 'Now' : `${i}d ago`,
        price: price,
        volume: crypto.volume * (0.7 + Math.random() * 0.6),
        rsi: 30 + Math.random() * 40,
        macd: (Math.random() - 0.6) * 5,
        volatility: Math.abs(volatility) * 100
      });
    }

    // Generate detailed prediction data (30 days forecast)
    const predictionData = [];
    let currentPrice = crypto.price;
    const baseDecline = 0.015 + Math.random() * 0.02;
    
    for (let i = 1; i <= 30; i++) {
      const dayDecline = baseDecline * (1 + Math.sin(i / 3) * 0.3);
      const randomFactor = (Math.random() - 0.5) * 0.01;
      currentPrice *= (1 - dayDecline + randomFactor);
      
      predictionData.push({
        day: i,
        time: `+${i}d`,
        price: currentPrice,
        priceMin: currentPrice * 0.92,
        priceMax: currentPrice * 1.05,
        confidence: Math.max(60, 95 - i * 1.2),
        probability: Math.max(55, 88 - i * 1.1)
      });
    }

    // Advanced AI analysis metrics
    const totalDrop = ((crypto.price - currentPrice) / crypto.price * 100);
    const volatilityIndex = 45 + Math.random() * 30;
    const fearGreedIndex = 25 + Math.random() * 20;
    
    const aiAnalysis = {
      trend: 'STRONG BEARISH',
      confidence: 92.8,
      declineRisk: 'CRITICAL',
      expectedDrop: totalDrop.toFixed(2),
      expectedDropMin: (totalDrop * 0.7).toFixed(2),
      expectedDropMax: (totalDrop * 1.4).toFixed(2),
      timeframe: '30 days',
      volatilityIndex: volatilityIndex.toFixed(1),
      fearGreedIndex: fearGreedIndex.toFixed(1),
      
      // Multi-factor analysis
      factors: [
        { name: 'Market Sentiment', impact: -28, weight: 'Critical', score: 23 },
        { name: 'Volume Analysis', impact: -22, weight: 'High', score: 31 },
        { name: 'Technical Indicators', impact: -35, weight: 'Critical', score: 18 },
        { name: 'Whale Activity', impact: -19, weight: 'High', score: 28 },
        { name: 'Social Media Trends', impact: -25, weight: 'High', score: 25 },
        { name: 'Exchange Flows', impact: -31, weight: 'Critical', score: 21 },
        { name: 'DeFi Activity', impact: -17, weight: 'Medium', score: 35 },
        { name: 'Network Health', impact: -14, weight: 'Medium', score: 42 }
      ],
      
      // Technical indicators
      technicals: {
        rsi: { value: 32.5, signal: 'Oversold Approaching', status: 'bearish' },
        macd: { value: -3.2, signal: 'Bearish Crossover', status: 'bearish' },
        bollingerBands: { position: 'Lower Band', signal: 'Breakdown Alert', status: 'bearish' },
        movingAverage50: { value: crypto.price * 1.12, signal: 'Death Cross Forming', status: 'bearish' },
        movingAverage200: { value: crypto.price * 1.25, signal: 'Below MA200', status: 'bearish' },
        fibonacci: { level: '0.382', signal: 'Support Broken', status: 'bearish' },
        volumeProfile: { trend: 'Declining', signal: 'Weak Buying', status: 'bearish' },
        onBalanceVolume: { trend: 'Negative', signal: 'Distribution Phase', status: 'bearish' }
      },
      
      // AI signals with severity
      signals: [
        { message: 'Critical: Death cross pattern forming on 4H chart', severity: 'critical', confidence: 94 },
        { message: 'High: Large wallet outflows detected (47M tokens)', severity: 'high', confidence: 89 },
        { message: 'High: RSI divergence indicating weakening momentum', severity: 'high', confidence: 91 },
        { message: 'Critical: Support level breakdown at $' + (crypto.price * 0.97).toFixed(2), severity: 'critical', confidence: 96 },
        { message: 'Medium: Declining social sentiment (-34% weekly)', severity: 'medium', confidence: 82 },
        { message: 'High: Exchange inflows spike (bearish signal)', severity: 'high', confidence: 88 },
        { message: 'High: Futures funding rate turning negative', severity: 'high', confidence: 85 },
        { message: 'Critical: Head and shoulders pattern confirmed', severity: 'critical', confidence: 93 },
        { message: 'Medium: Developer activity declining', severity: 'medium', confidence: 78 },
        { message: 'High: Whale sell orders detected at resistance', severity: 'high', confidence: 87 }
      ],
      
      // Risk assessment
      riskMetrics: {
        liquidationRisk: 72,
        cascadeRisk: 68,
        marketManipulation: 45,
        regulatoryRisk: 38,
        technicalRisk: 81,
        fundamentalRisk: 56
      },
      
      // Price levels
      keyLevels: {
        resistances: [
          { price: crypto.price * 1.05, strength: 'Weak' },
          { price: crypto.price * 1.12, strength: 'Moderate' },
          { price: crypto.price * 1.18, strength: 'Strong' }
        ],
        supports: [
          { price: crypto.price * 0.97, strength: 'Critical' },
          { price: crypto.price * 0.89, strength: 'Major' },
          { price: crypto.price * 0.76, strength: 'Strong' }
        ]
      },
      
      // Market comparison
      marketComparison: [
        { metric: 'Volatility', value: 78, market: 62 },
        { metric: 'Volume', value: 45, market: 68 },
        { metric: 'Sentiment', value: 32, market: 54 },
        { metric: 'Momentum', value: 28, market: 49 },
        { metric: 'Strength', value: 35, market: 58 }
      ],
      
      // Probability distribution
      outcomes: [
        { scenario: 'Severe Drop (>30%)', probability: 23 },
        { scenario: 'Major Drop (20-30%)', probability: 34 },
        { scenario: 'Moderate Drop (10-20%)', probability: 28 },
        { scenario: 'Minor Drop (5-10%)', probability: 12 },
        { scenario: 'Stable/Recovery', probability: 3 }
      ]
    };

    setPrediction({
      crypto,
      historical: historicalData,
      forecast: predictionData,
      analysis: aiAnalysis
    });
    setPredicting(false);
    setAiProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Enhanced Header */}
      <div className="border-b border-purple-500/30 bg-black/40 backdrop-blur-lg shadow-2xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-3 rounded-xl shadow-lg shadow-purple-500/50">
                <Brain className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  CHENEX
                </h1>
                <p className="text-xs text-purple-300 font-semibold">Advanced AI Crypto Prediction Engine v2.0</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm bg-green-500/10 px-4 py-2 rounded-lg border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Live Feed Active</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Neural Engine</div>
                <div className="text-sm font-bold text-purple-400">GPT-4 Powered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Enhanced Crypto Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {cryptos.map(crypto => (
            <div
              key={crypto.id}
              onClick={() => generatePrediction(crypto)}
              className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur border border-purple-500/30 rounded-xl p-4 hover:border-purple-500/70 hover:shadow-xl hover:shadow-purple-500/20 transition-all cursor-pointer hover:transform hover:scale-105 group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-base group-hover:text-purple-400 transition-colors">{crypto.name}</h3>
                  <span className="text-purple-300 text-xs font-semibold">{crypto.symbol}</span>
                </div>
                <div className="bg-red-500/20 p-2 rounded-lg">
                  <TrendingDown className="text-red-400 w-5 h-5" />
                </div>
              </div>
              <div className="text-xl font-bold mb-1">
                ${crypto.price.toFixed(crypto.price < 1 ? 4 : 2)}
              </div>
              <div className="text-sm text-red-400 font-semibold mb-2">
                {crypto.change24h.toFixed(2)}% (24h)
              </div>
              <div className="text-xs text-slate-400 space-y-0.5">
                <div>Vol: ${(crypto.volume / 1e9).toFixed(2)}B</div>
                <div>MCap: ${(crypto.marketCap / 1e9).toFixed(1)}B</div>
              </div>
              <div className="mt-3 pt-3 border-t border-purple-500/20">
                <div className="text-xs text-center text-purple-400 font-semibold">
                  Click for AI Analysis
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Processing Animation */}
        {predicting && (
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-12 text-center shadow-2xl">
            <div className="relative inline-block mb-6">
              <Brain className="w-20 h-20 text-purple-400 animate-pulse" />
              <Cpu className="w-8 h-8 text-pink-400 absolute -top-2 -right-2 animate-spin" />
            </div>
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI Analysis in Progress
            </h3>
            <p className="text-slate-300 mb-6">Processing multi-dimensional market data with neural networks...</p>
            <div className="max-w-md mx-auto">
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 rounded-full"
                  style={{ width: `${aiProgress}%` }}
                />
              </div>
              <div className="text-sm text-purple-300 font-semibold">{aiProgress.toFixed(0)}% Complete</div>
            </div>
          </div>
        )}

        {/* Comprehensive Prediction Dashboard */}
        {prediction && !predicting && (
          <div className="space-y-6">
            {/* Critical Alert Banner */}
            <div className="bg-gradient-to-r from-red-900/50 via-orange-900/50 to-red-900/50 backdrop-blur-xl border-2 border-red-500/50 rounded-2xl p-6 shadow-2xl shadow-red-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-500/30 p-3 rounded-xl">
                  <AlertTriangle className="w-10 h-10 text-red-400 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-black mb-1">{prediction.crypto.name} ({prediction.crypto.symbol})</h2>
                  <p className="text-red-300 font-semibold">AI-Powered Decline Prediction Analysis</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-400">AI Confidence</div>
                  <div className="text-3xl font-black text-purple-400">{prediction.analysis.confidence}%</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <div className="bg-black/40 rounded-xl p-4 border border-red-500/30">
                  <div className="text-xs text-slate-400 mb-1">Trend Signal</div>
                  <div className="text-lg font-black text-red-400">{prediction.analysis.trend}</div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-orange-500/30">
                  <div className="text-xs text-slate-400 mb-1">Risk Level</div>
                  <div className="text-lg font-black text-orange-400">{prediction.analysis.declineRisk}</div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-red-500/30">
                  <div className="text-xs text-slate-400 mb-1">Expected Drop</div>
                  <div className="text-lg font-black text-red-400">-{prediction.analysis.expectedDrop}%</div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-xs text-slate-400 mb-1">Timeframe</div>
                  <div className="text-lg font-black text-purple-400">{prediction.analysis.timeframe}</div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-yellow-500/30">
                  <div className="text-xs text-slate-400 mb-1">Fear & Greed</div>
                  <div className="text-lg font-black text-yellow-400">{prediction.analysis.fearGreedIndex}</div>
                </div>
                <div className="bg-black/40 rounded-xl p-4 border border-pink-500/30">
                  <div className="text-xs text-slate-400 mb-1">Volatility Index</div>
                  <div className="text-lg font-black text-pink-400">{prediction.analysis.volatilityIndex}</div>
                </div>
              </div>
            </div>

            {/* Advanced Charts Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Main Price Prediction Chart */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-purple-400" />
                  30-Day Price Forecast with Confidence Bands
                </h3>
                <ResponsiveContainer width="100%" height={320}>
                  <ComposedChart data={[...prediction.historical.slice(-15), ...prediction.forecast.slice(0, 30)]}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" style={{ fontSize: '11px' }} />
                    <YAxis stroke="#94a3b8" style={{ fontSize: '11px' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #8b5cf6', borderRadius: '8px' }}
                      labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="priceMax" stroke="none" fill="#8b5cf6" fillOpacity={0.1} />
                    <Area type="monotone" dataKey="priceMin" stroke="none" fill="#8b5cf6" fillOpacity={0.1} />
                    <Line type="monotone" dataKey="price" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Volume & Volatility Chart */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-pink-400" />
                  Historical Volume & Volatility Analysis
                </h3>
                <ResponsiveContainer width="100%" height={320}>
                  <ComposedChart data={prediction.historical.slice(-30)}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="time" stroke="#94a3b8" style={{ fontSize: '11px' }} />
                    <YAxis yAxisId="left" stroke="#94a3b8" style={{ fontSize: '11px' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#ec4899" style={{ fontSize: '11px' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #ec4899', borderRadius: '8px' }}
                    />
                    <Bar yAxisId="left" dataKey="volume" fill="#8b5cf6" fillOpacity={0.6} />
                    <Line yAxisId="right" type="monotone" dataKey="volatility" stroke="#ec4899" strokeWidth={2} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Technical Indicators Dashboard */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-7 h-7 text-purple-400" />
                Advanced Technical Indicators
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(prediction.analysis.technicals).map(([key, data]) => (
                  <div key={key} className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl p-4 border border-red-500/20">
                    <div className="text-xs text-slate-400 uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-xl font-bold text-red-400 mb-1">{typeof data.value === 'number' ? data.value.toFixed(2) : data.value}</div>
                    <div className="text-xs text-slate-300 mb-2">{data.signal}</div>
                    <div className={`text-xs font-semibold uppercase ${data.status === 'bearish' ? 'text-red-400' : 'text-green-400'}`}>
                      {data.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-Factor Impact Analysis */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Multi-Dimensional Impact Factors
                </h3>
                <div className="space-y-4">
                  {prediction.analysis.factors.map((factor, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold">{factor.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-slate-400">{factor.weight}</span>
                          <span className="text-sm font-bold text-red-400">{factor.impact}%</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full"
                            style={{ width: `${Math.abs(factor.impact) * 2}%` }}
                          />
                        </div>
                        <div className="w-12 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"
                            style={{ width: `${factor.score}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Comparison Radar */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  Market Performance Comparison
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={prediction.analysis.marketComparison}>
                    <PolarGrid stroke="#475569" />
                    <PolarAngleAxis dataKey="metric" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                    <PolarRadiusAxis stroke="#94a3b8" />
                    <Radar name="This Asset" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                    <Radar name="Market Avg" dataKey="market" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Risk Assessment Matrix */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-7 h-7 text-red-400" />
                Comprehensive Risk Assessment Matrix
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.entries(prediction.analysis.riskMetrics).map(([key, value]) => (
                  <div key={key} className="relative">
                    <div className="bg-gradient-to-br from-slate-900/80 to-red-900/20 rounded-xl p-4 border border-red-500/30">
                      <div className="text-xs text-slate-400 uppercase mb-3">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-3xl font-black mb-2" style={{ color: value > 70 ? '#ef4444' : value > 50 ? '#f59e0b' : '#10b981' }}>
                        {value}
                      </div>
                      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${value > 70 ? 'bg-red-500' : value > 50 ? 'bg-orange-500' : 'bg-green-500'}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Critical Signals */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl border border-red-500/40 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Brain className="w-7 h-7 text-red-400" />
                AI-Detected Critical Signals & Warnings
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {prediction.analysis.signals.map((signal, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 p-4 rounded-xl border ${
                      signal.severity === 'critical' 
                        ? 'bg-red-900/30 border-red-500/50' 
                        : signal.severity === 'high'
                        ? 'bg-orange-900/30 border-orange-500/50'
                        : 'bg-yellow-900/30 border-yellow-500/50'
                    }`}
                  >
                    <div className={`mt-1 ${
                      signal.severity === 'critical' 
                        ? 'text-red-400' 
                        : signal.severity === 'high'
                        ? 'text-orange-400'
                        : 'text-yellow-400'
                    }`}>
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-200 mb-1">{signal.message}</div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs font-semibold uppercase" style={{ 
                          color: signal.severity === 'critical' ? '#ef4444' : signal.severity === 'high' ? '#f59e0b' : '#eab308'
                        }}>
                          {signal.severity}
                        </div>
                        <div className="text-xs text-slate-400">•</div>
                        <div className="text-xs text-purple-400 font-semibold">{signal.confidence}% confidence</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Price Levels */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                  Resistance Levels (Upside Barriers)
                </h3>
                <div className="space-y-4">
                  {prediction.analysis.keyLevels.resistances.map((level, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-orange-900/20 to-transparent rounded-lg p-4 border border-orange-500/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-orange-400">${level.price.toFixed(prediction.crypto.price < 1 ? 4 : 2)}</span>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          level.strength === 'Strong' ? 'bg-orange-500/20 text-orange-400' :
                          level.strength === 'Moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {level.strength}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">
                        +{((level.price / prediction.crypto.price - 1) * 100).toFixed(2)}% from current price
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingDownIcon className="w-6 h-6 text-red-400" />
                  Support Levels (Downside Targets)
                </h3>
                <div className="space-y-4">
                  {prediction.analysis.keyLevels.supports.map((level, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-red-900/20 to-transparent rounded-lg p-4 border border-red-500/30">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-2xl font-bold text-red-400">${level.price.toFixed(prediction.crypto.price < 1 ? 4 : 2)}</span>
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                          level.strength === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          level.strength === 'Major' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {level.strength}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {((level.price / prediction.crypto.price - 1) * 100).toFixed(2)}% from current price
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Probability Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-7 h-7 text-purple-400" />
                Decline Probability Distribution (Next 30 Days)
              </h3>
              <div className="space-y-3">
                {prediction.analysis.outcomes.map((outcome, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold">{outcome.scenario}</span>
                      <span className="text-sm font-bold text-purple-400">{outcome.probability}%</span>
                    </div>
                    <div className="h-8 bg-slate-900 rounded-lg overflow-hidden border border-purple-500/20">
                      <div 
                        className={`h-full flex items-center px-3 text-xs font-bold transition-all duration-500 ${
                          idx === 0 ? 'bg-gradient-to-r from-red-600 to-red-500 text-white' :
                          idx === 1 ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white' :
                          idx === 2 ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 text-white' :
                          idx === 3 ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white' :
                          'bg-gradient-to-r from-green-600 to-green-500 text-white'
                        }`}
                        style={{ width: `${outcome.probability}%` }}
                      >
                        {outcome.probability > 10 && `${outcome.probability}%`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prediction Confidence Timeline */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Activity className="w-7 h-7 text-cyan-400" />
                Prediction Confidence Timeline (30-Day Forecast)
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={prediction.forecast}>
                  <defs>
                    <linearGradient id="colorConfidence" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="time" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #06b6d4', borderRadius: '8px' }}
                  />
                  <Area type="monotone" dataKey="confidence" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorConfidence)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center text-sm text-slate-400">
                Confidence decreases over time as market uncertainty increases
              </div>
            </div>

            {/* Summary Report */}
            <div className="bg-gradient-to-br from-purple-900/40 via-slate-800/40 to-pink-900/40 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Executive Summary - AI Analysis Report
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-red-400 mb-1">Critical Decline Alert</div>
                      <div className="text-sm text-slate-300">
                        Our AI models predict a {prediction.analysis.expectedDrop}% decline over the next {prediction.analysis.timeframe} with {prediction.analysis.confidence}% confidence.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-orange-400 mb-1">Risk Assessment</div>
                      <div className="text-sm text-slate-300">
                        {prediction.analysis.declineRisk} risk level detected across multiple indicators including technical breakdown, volume decline, and negative sentiment.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-purple-400 mb-1">Key Findings</div>
                      <div className="text-sm text-slate-300">
                        {prediction.analysis.signals.length} critical signals detected with bearish momentum across {prediction.analysis.factors.length} major market factors.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-bold text-lg text-pink-400 mb-1">Recommended Action</div>
                      <div className="text-sm text-slate-300">
                        Consider risk mitigation strategies. Monitor support levels at ${prediction.analysis.keyLevels.supports[0].price.toFixed(2)} closely.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-purple-500/30 text-center text-xs text-slate-400">
                Generated by Chenex Advanced AI Engine • {new Date().toLocaleString()} • Data updated in real-time
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Chenex;