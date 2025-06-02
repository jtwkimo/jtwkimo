class FlightTracker {
    constructor() {
        this.apiKey = 'YOUR_API_KEY';
        this.trackedFlights = JSON.parse(localStorage.getItem('trackedFlights')) || [];
        this.searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        this.priceChart = null;
        this.initializeEventListeners();
        this.loadTrackedFlights();
        this.initializePriceChart();
    }
    initializeEventListeners() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons
