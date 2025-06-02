// script.js
class FlightTracker {
    constructor() {
        this.apiKey = 'YOUR_API_KEY'; // 需要申請真實的API金鑰
        this.trackedFlights = JSON.parse(localStorage.getItem('trackedFlights')) || [];
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        this.priceChart = null;
        
        this.initializeEventListeners();
        this.loadTrackedFlights();
        this.initializePriceChart();
    }

    initializeEventListeners() {
        // 分頁切換
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });

        // 搜尋表單提交
        const searchForm = document.getElementById('flightSearchForm');
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.searchFlights();
        });

        // 新增追蹤按鈕
        const addTrackingBtn = document.querySelector('.add-tracking-btn');
        addTrackingBtn.addEventListener('click', () => {
            this.showAddTrackingModal();
        });

        // 追蹤篩選器
        const trackingFilter = document.getElementById('trackingFilter');
        trackingFilter.addEventListener('change', (e) => {
            this.filterTrackedFlights(e.target.value);
        });

        // 設定最小日期為今天
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('departureDate').min = today;
        document.getElementById('returnDate').min = today;
    }

    switchTab(tabName) {
        // 隱藏所有分頁內容
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => content.classList.remove('active'));

        // 移除所有按鈕的活動狀態
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => btn.classList.remove('active'));

        // 顯示選中的分頁
        document.getElementById(tabName).classList.add('active');
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // 根據分頁載入相應內容
        if (tabName === 'tracking') {
            this.loadTrackedFlights();
        } else if (tabName === 'analytics') {
            this.loadAnalytics();
        }
    }

    async searchFlights() {
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;
        const departureDate = document.getElementById('departureDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const passengers = document.getElementById('passengers').value;

        if (!departure || !destination || !departureDate) {
            alert('請填寫必要的搜尋條件');
            return;
        }

        try {
            this.showLoadingState();
            
            // 模擬 API 調用（實際應用中需要連接真實的機票 API）
            const results = await this.fetchFlightPrices({
                departure,
                destination,
                departureDate,
                returnDate,
                passengers
            });

            this.displaySearchResults(results);
            this.saveSearchHistory({
                departure,
                destination,
                departureDate,
                returnDate,
                passengers,
                timestamp: new Date().toISOString()
            });

        } catch (error) {
            console.error('搜尋機票時發生錯誤:', error);
            this.showErrorMessage('搜尋機票時發生錯誤，請稍後再試');
        } finally {
            this.hideLoadingState();
        }
    }

    async fetchFlightPrices(searchParams) {
        // 模擬 API 響應（實際應用中需要連接真實的機票 API）
        await new Promise(resolve => setTimeout(resolve, 2000)); // 模擬網路延遲

        const mockResults = [
            {
                airline: '中華航空',
                flightNumber: 'CI100',
                departure: { time: '08:30', airport: searchParams.departure },
                arrival: { time: '13:45', airport: searchParams.destination },
                price: 15800,
                duration: '5h 15m',
                stops: 0,
                bookingClass: '經濟艙'
            },
            {
                airline: '長榮航空',
                flightNumber: 'BR216',
                departure: { time: '14:20', airport: searchParams.departure },
                arrival: { time: '19:35', airport: searchParams.destination },
                price: 16500,
                duration: '5h 15m',
                stops: 0,
                bookingClass: '經濟艙'
            },
            {
                airline: '台灣虎航',
                flightNumber: 'IT204',
                departure: { time: '19:45', airport: searchParams.departure },
                arrival: { time: '01:00+1', airport: searchParams.destination },
                price: 12900,
                duration: '5h 15m',
                stops: 0,
                bookingClass: '經濟艙'
            }
        ];

        // 添加一些隨機價格變化
        return mockResults.map(flight => ({
            ...flight,
            price: flight.price + Math.floor(Math.random() * 3000) - 1500
        }));
    }

    displaySearchResults(results) {
        const container = document.getElementById('resultsContainer');
        
        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">沒有找到符合條件的機票</p>';
            return;
        }

        container.innerHTML = results.map(flight => `
            <div class="flight-result">
                <div class="flight-header">
                    <div class="airline-info">
                        <h4>${flight.airline}</h4>
                        <span class="flight-number">${flight.flightNumber}</span>
                    </div>
                    <div class="price-info">
                        <span class="price">NT$ ${flight.price.toLocaleString()}</span>
                        <span class="booking-class">${flight.bookingClass}</span>
                    </div>
                </div>
                
                <div class="flight-details">
                    <div class="time-info">
                        <div class="departure">
                            <strong>${flight.departure.time}</strong>
                            <small>${flight.departure.airport}</small>
                        </div>
                        <div class="duration">
                            <span>${flight.duration}</span>
                            <div class="stops">${flight.stops === 0 ? '直飛' : `${flight.stops} 轉機`}</div>
                        </div>
                        <div class="arrival">
                            <strong>${flight.arrival.time}</strong>
                            <small>${flight.arrival.airport}</small>
                        </div>
                    </div>
                </div>
                
                <div class="flight-actions">
                    <button class="track-btn" onclick="flightTracker.addToTracking('${flight.flightNumber}', ${flight.price})">
                        加入追蹤
                    </button>
                    <button class="book-btn">立即預訂</button>
                </div>
            </div>
        `).join('');
    }

    addToTracking(flightNumber, currentPrice) {
        const departure = document.getElementById('departure').value;
        const destination = document.getElementById('destination').value;
        const departureDate = document.getElementById('departureDate').value;

        const trackingItem = {
            id: Date.now().toString(),
            flightNumber,
            route: `${departure} → ${destination}`,
            departureDate,
            currentPrice,
            initialPrice: currentPrice,
            priceHistory: [{
                date: new Date().toISOString(),
                price: currentPrice
            }],
            alertThreshold: currentPrice * 0.9, // 價格下降10%時提醒
            isActive: true
        };

        this.trackedFlights.push(trackingItem);
        this.saveTrackedFlights();
        this.showNotification('已成功加入價格追蹤');
    }

    loadTrackedFlights() {
        const container = document.getElementById('trackingList');
        
        if (this.trackedFlights.length === 0) {
            container.innerHTML = '<p class="no-tracking">尚未添加任何追蹤項目</p>';
            return;
        }

        container.innerHTML = this.trackedFlights.map(item => {
            const priceChange = item.currentPrice - item.initialPrice;
            const priceChangePercent = ((priceChange / item.initialPrice) * 100).toFixed(1);
            const priceChangeClass = priceChange < 0 ? 'price-down' : priceChange > 0 ? 'price-up' : 'price-same';

            return `
                <div class="tracking-item">
                    <div class="tracking-header">
                        <h4>${item.flightNumber}</h4>
                        <div class="tracking-controls">
                            <button class="toggle-btn" onclick="flightTracker.toggleTracking('${item.id}')">
                                ${item.isActive ? '暫停' : '啟用'}
                            </button>
                            <button class="delete-btn" onclick="flightTracker.removeTracking('${item.id}')">刪除</button>
                        </div>
                    </div>
                    
                    <div class="tracking-details">
                        <div class="route-info">
                            <span class="route">${item.route}</span>
                            <span class="date">${item.departureDate}</span>
                        </div>
                        
                        <div class="price-tracking">
                            <div class="current-price">
                                <span class="label">目前價格</span>
                                <span class="price">NT$ ${item.currentPrice.toLocaleString()}</span>
                            </div>
                            
                            <div class="price-change ${priceChangeClass}">
                                <span class="change-amount">
                                    ${priceChange >= 0 ? '+' : ''}NT$ ${priceChange.toLocaleString()}
                                </span>
                                <span class="change-percent">
                                    (${priceChange >= 0 ? '+' : ''}${priceChangePercent}%)
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="price-mini-chart">
                        <canvas id="chart-${item.id}" width="200" height="50"></canvas>
                    </div>
                </div>
            `;
        }).join('');

        // 為每個追蹤項目繪製小型價格圖表
        this.trackedFlights.forEach(item => {
            this.drawMiniChart(item);
        });
    }

    initializePriceChart() {
        const ctx = document.getElementById('priceChart');
        if (!ctx) return;

        this.priceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '機票價格趨勢分析'
                    },
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '價格 (NT$)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '日期'
                        }
                    }
                }
            }
        });
    }

    loadAnalytics() {
        if (!this.priceChart) {
            this.initializePriceChart();
            return;
        }

        // 準備圖表數據
        const datasets = this.trackedFlights.map((item, index) => {
            const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
            const color = colors[index % colors.length];

            return {
                label: item.flightNumber,
                data: item.priceHistory.map(point => ({
                    x: new Date(point.date).toLocaleDateString(),
                    y: point.price
                })),
                borderColor: color,
                backgroundColor: color + '20',
                tension: 0.4
            };
        });

        // 更新圖表
        this.priceChart.data.datasets = datasets;
        this.priceChart.update();

        // 更新統計摘要
        this.updateAnalyticsSummary();
    }

    updateAnalyticsSummary() {
        const avgPriceTrendElement = document.getElementById('avgPriceTrend');
        const bestBookingTimeElement = document.getElementById('bestBookingTime');

        if (this.trackedFlights.length === 0) {
            avgPriceTrendElement.textContent = '暫無數據';
            bestBookingTimeElement.textContent = '暫無數據';
            return;
        }

        // 計算平均價格趨勢
        const totalPriceChange = this.trackedFlights.reduce((sum, item) => {
            return sum + (item.currentPrice - item.initialPrice);
        }, 0);

        const avgPriceChange = totalPriceChange / this.trackedFlights.length;
        const avgPriceChangePercent = this.trackedFlights.reduce((sum, item) => {
            return sum + ((item.currentPrice - item.initialPrice) / item.initialPrice * 100);
        }, 0) / this.trackedFlights.length;

        avgPriceTrendElement.innerHTML = `
            平均價格變化: <span class="${avgPriceChange >= 0 ? 'price-up' : 'price-down'}">
                ${avgPriceChange >= 0 ? '+' : ''}NT$ ${Math.round(avgPriceChange).toLocaleString()} 
                (${avgPriceChange >= 0 ? '+' : ''}${avgPriceChangePercent.toFixed(1)}%)
            </span>
        `;

        // 建議最佳購票時機
        const recommendation = this.generateBookingRecommendation();
        bestBookingTimeElement.textContent = recommendation;
    }

    generateBookingRecommendation() {
        if (this.trackedFlights.length === 0) return '暫無數據';

        const downwardTrends = this.trackedFlights.filter(item => 
            item.currentPrice < item.initialPrice
        ).length;

        const totalTracked = this.trackedFlights.length;
        const downwardPercentage = (downwardTrends / totalTracked) * 100;

        if (downwardPercentage > 60) {
            return '目前有多個航線價格下降，建議近期預訂';
        } else if (downwardPercentage > 30) {
            return '部分航線價格波動，建議持續觀察';
        } else {
            return '多數航線價格上升，建議等待更好時機';
        }
    }

    // 輔助方法
    showLoadingState() {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = '<div class="loading">搜尋中...</div>';
    }

    hideLoadingState() {
        // 載入狀態會被搜尋結果替換
    }

    showErrorMessage(message) {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `<div class="error-message">${message}</div>`;
    }

    showNotification(message) {
        // 簡單的通知實現
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    saveTrackedFlights() {
        localStorage.setItem('trackedFlights', JSON.stringify(this.trackedFlights));
    }

    saveSearchHistory(searchData) {
        this.searchHistory.push(searchData);
        if (this.searchHistory.length > 50) {
            this.searchHistory = this.searchHistory.slice(-50); // 保留最近50次搜尋
        }
        localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }

    toggleTracking(id) {
        const item = this.trackedFlights.find(flight => flight.id === id);
        if (item) {
            item.isActive = !item.isActive;
            this.saveTrackedFlights();
            this.loadTrackedFlights();
        }
    }

    removeTracking(id) {
        this.trackedFlights = this.trackedFlights.filter(flight => flight.id !== id);
        this.saveTrackedFlights();
        this.loadTrackedFlights();
    }

    filterTrackedFlights(filter) {
        // 實現篩選邏輯
        const items = document.querySelectorAll('.tracking-item');
        items.forEach(item => {
            const flightId = item.querySelector('.delete-btn').getAttribute('onclick').match(/'([^']+)'/)[1];
            const flight = this.trackedFlights.find(f => f.id === flightId);
            
            let shouldShow = true;
            if (filter === 'price-drop' && flight.currentPrice >= flight.initialPrice) {
                shouldShow = false;
            } else if (filter === 'price-rise' && flight.currentPrice <= flight.initialPrice) {
                shouldShow = false;
            }
            
            item.style.display = shouldShow ? 'block' : 'none';
        });
    }

    drawMiniChart(trackingItem) {
        const canvas = document.getElementById(`chart-${trackingItem.id}`);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const data = trackingItem.priceHistory;
        
        if (data.length < 2) return;

        const width = canvas.width;
        const height = canvas.height;
        const padding = 5;

        // 清除畫布
        ctx.clearRect(0, 0, width, height);

        // 計算價格範圍
        const prices = data.map(point => point.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const priceRange = maxPrice - minPrice || 1;

        // 繪製線條
        ctx.strokeStyle = trackingItem.currentPrice < trackingItem.initialPrice ? '#27ae60' : '#e74c3c';
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((point, index) => {
            const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((point.price - minPrice) / priceRange) * (height - 2 * padding);
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.stroke();
    }

    showAddTrackingModal() {
        // 簡單的模態框實現
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>新增價格追蹤</h3>
                <form id="addTrackingForm">
                    <div class="form-group">
                        <label>出發城市</label>
                        <select id="modalDeparture" required>
                            <option value="TPE">台北 (TPE)</option>
                            <option value="KHH">高雄 (KHH)</option>
                            <option value="RMQ">台中 (RMQ)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>目的地城市</label>
                        <select id="modalDestination" required>
                            <option value="NRT">東京成田 (NRT)</option>
                            <option value="ICN">首爾仁川 (ICN)</option>
                            <option value="BKK">曼谷 (BKK)</option>
                            <option value="SIN">新加坡 (SIN)</option>
                            <option value="HKG">香港 (HKG)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>出發日期</label>
                        <input type="date" id="modalDate" required>
                    </div>
                    <div class="form-actions">
                        <button type="button" onclick="this.closest('.modal').remove()">取消</button>
                        <button type="submit">確認追蹤</button>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        // 處理表單提交
        modal.querySelector('#addTrackingForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            // 這裡可以添加新增追蹤的邏輯
            modal.remove();
        });
    }
}

// 初始化應用程式
let flightTracker;
document.addEventListener('DOMContentLoaded', () => {
    flightTracker = new FlightTracker();
});
