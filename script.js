// --- ICONS (inlined SVGs) ---
const ICONS = {
    sprout: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c-3.3 0-3-2.7-3-5V3.4C7 2.6 7.6 2 8.4 2H10c.8 0 1.4.6 1.4 1.4V5c0 .6-.4 1-1 1H9"/><path d="M14 20c3.3 0 3-2.7-3-5V3.4C17 2.6 16.4 2 15.6 2H14c-.8 0-1.4.6-1.4 1.4V5c0 .6.4 1 1 1h1.4"/><path d="M12 11V5a2 2 0 0 0-2-2H8.4C7.6 3 7 3.6 7 4.4V5"/></svg>`,
    cloudSun: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 22v-2"/><path d="m4.93 19.07 1.41-1.41"/><path d="M2 12h2"/><path d="m19.07 19.07-1.41-1.41"/><path d="M18 12a6 6 0 1 0-12 0"/><path d="M22 12h-2"/></svg>`,
    trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    camera: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
    upload: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
    chatbot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`
};

// --- Mock Data (Now with data-keys for translation) ---
const MOCK_FEATURES = [
    { icon: ICONS.cloudSun, dataKeyTitle: "feature_weather_title", dataKeyDesc: "feature_weather_desc", points: ["Live IMD weather data", "7-day accurate forecasts", "Drought & flood alerts", "Satellite imagery"], colorClass: 'sky-blue' },
    { icon: ICONS.trendingUp, dataKeyTitle: "feature_market_title", dataKeyDesc: "feature_market_desc", points: ["Real-time mandi rates", "Price trend analysis", "Demand forecasting", "Best selling locations"], colorClass: 'success' },
    { icon: ICONS.camera, dataKeyTitle: "feature_pest_title", dataKeyDesc: "feature_pest_desc", points: ["Instant photo diagnosis", "Treatment recommendations", "Prevention strategies", "Expert consultation"], colorClass: 'primary' },
    { icon: ICONS.chatbot, dataKeyTitle: "feature_advisory_title", dataKeyDesc: "feature_advisory_desc", points: ["Ask farming questions", "Get instant AI advice", "Personalized guidance", "24/7 availability"], colorClass: 'earth-brown' },
    { icon: ICONS.users, dataKeyTitle: "feature_language_title", dataKeyDesc: "feature_language_desc", points: ["Voice commands", "Hindi interface", "Regional languages", "Audio guidance"], colorClass: 'warning' },
    { icon: ICONS.shield, dataKeyTitle: "feature_offline_title", dataKeyDesc: "feature_offline_desc", points: ["Offline functionality", "Local data storage", "Auto-sync when online", "SMS alerts backup"], colorClass: 'destructive' },
];

const MOCK_OVERVIEW_STATS = [
    { dataKey: "overview_land_title", value: "5.2 Acres", subtitle: "Registered farmland", icon: ICONS.sprout, colorClass: 'primary' },
    { dataKey: "overview_season_title", value: "Rabi", subtitle: "Winter crops", icon: ICONS.cloudSun, colorClass: 'success' },
    { dataKey: "overview_crops_title", value: "3 Types", subtitle: "Wheat, Mustard, Peas", icon: ICONS.sprout, colorClass: 'crop-yellow' },
    { dataKey: "overview_alerts_title", value: "2 New", subtitle: "Weather & market", icon: ICONS.bell, colorClass: 'warning' }
];

const MOCK_OVERVIEW_ACTIONS = [
    { tab: 'weather', icon: ICONS.cloudSun, dataKeyTitle: 'feature_weather_title', dataKeyDesc: 'overview_weather_action', detail: 'Sunny, 28°C • Light rain expected tomorrow', colorClass: 'sky-blue' },
    { tab: 'market', icon: ICONS.trendingUp, dataKeyTitle: 'feature_market_title', dataKeyDesc: 'overview_market_action', detail: 'Wheat: ₹2,150/quintal • Trending up ↗', colorClass: 'success' },
    { tab: 'pest', icon: ICONS.camera, dataKeyTitle: 'feature_pest_title', dataKeyDesc: 'overview_pest_action', detail: 'Take a photo to identify pests and diseases', colorClass: 'primary' },
];

document.addEventListener('DOMContentLoaded', () => {

    // --- Element References ---
    const landingPage = document.getElementById('landing-page');
    const dashboardPage = document.getElementById('dashboard-page');
    const openDashboardButtons = [
        document.getElementById('open-dashboard-btn-1'),
        document.getElementById('open-dashboard-btn-2'),
        document.getElementById('open-dashboard-btn-3')
    ];
    const backToHomeButton = document.getElementById('back-to-home');

    const tabsContainer = document.getElementById('tabs-container');
    const tabButtons = tabsContainer.querySelectorAll('.dashboard-tab');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');

    // --- State ---
    let activeTab = 'overview';
    let isPestDetectionInitialized = false;
    let isWeatherInitialized = false;
    let isAdvisoryInitialized = false;
    let isProfileInitialized = false;
    let isMarketInitialized = false;

    // Helper for backend API base URL
    const API_BASE_URL = window.location.port === '3000' ? '' : 'http://localhost:3000';

    // --- Functions ---
    const showDashboard = () => {
        landingPage.classList.add('hidden');
        dashboardPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    };

    const showLandingPage = () => {
        dashboardPage.classList.add('hidden');
        landingPage.classList.remove('hidden');
        window.scrollTo(0, 0);
    };

    const updateTabs = () => {
        tabButtons.forEach(button => {
            const textSpan = button.querySelector('span.hidden.sm\\:inline');
            if (button.dataset.tab === activeTab) {
                button.setAttribute('data-state', 'active');
                button.classList.add('bg-white', 'text-gray-800', 'shadow-sm');
                if (textSpan) textSpan.classList.add('font-semibold');
            } else {
                button.setAttribute('data-state', 'inactive');
                button.classList.remove('bg-white', 'text-gray-800', 'shadow-sm');
                 if (textSpan) textSpan.classList.remove('font-semibold');
            }
        });

        tabContents.forEach(content => {
            if (content.id === `${activeTab}-content`) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    };

    const handleTabClick = (e) => {
        const tab = e.currentTarget.dataset.tab;
        if (tab) {
            activeTab = tab;
            updateTabs();

            if (tab === 'profile' && !isProfileInitialized) {
                if (typeof window.initializeProfileTab === 'function') window.initializeProfileTab();
                isProfileInitialized = true;
            }
            if (tab === 'market' && !isMarketInitialized) {
                if (typeof window.initializeMarketTab === 'function') window.initializeMarketTab();
                isMarketInitialized = true;
            }
            if (tab === 'pest' && !isPestDetectionInitialized) {
                initializePestDetection();
                isPestDetectionInitialized = true;
            }
            if (tab === 'weather' && !isWeatherInitialized) {
                initializeWeather();
                isWeatherInitialized = true;
            }
            if (tab === 'advisory' && !isAdvisoryInitialized) {
                if (typeof window.initializeChatbot === 'function') window.initializeChatbot(translations);
                isAdvisoryInitialized = true;
            }
        }
    };

    // --- Content Rendering ---
    const renderFeatures = () => {
        const grid = document.getElementById('features-grid');
        grid.innerHTML = MOCK_FEATURES.map(feature => `
            <div class="rounded-lg border bg-white text-gray-800 shadow-sm hover:shadow-lg transition-smooth p-6">
                <div class="p-3 gradient-${feature.colorClass.replace('-', ' ')}" style="background-color: hsl(var(--${feature.colorClass.split('-')[0]}))" class="rounded-lg w-fit mb-2">
                   ${feature.icon.replace('class="', `class="h-8 w-8 text-white `)}
                </div>
                <h4 class="text-xl font-semibold mt-2" data-key="${feature.dataKeyTitle}">${feature.dataKeyTitle}</h4>
                <p class="text-sm text-gray-500 mb-4" data-key="${feature.dataKeyDesc}">${feature.dataKeyDesc}</p>
                <ul class="text-sm text-gray-500 space-y-2">
                    ${feature.points.map(p => `<li>• ${p}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    };

    const renderOverview = () => {
        const container = document.getElementById('overview-content');
        container.innerHTML = `
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                ${MOCK_OVERVIEW_STATS.map(stat => `
                    <div class="rounded-lg border bg-white shadow-sm p-4">
                        <div class="flex flex-row items-center justify-between space-y-0 pb-2">
                            <h5 class="text-sm font-medium" data-key="${stat.dataKey}">${stat.dataKey}</h5>
                            <span class="text-gray-400">${stat.icon}</span>
                        </div>
                        <div>
                            <div class="text-2xl font-bold" style="color: hsl(var(--${stat.colorClass}));">${stat.value}</div>
                            <p class="text-xs text-gray-500">${stat.subtitle}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
             <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
                ${MOCK_OVERVIEW_ACTIONS.map(action => `
                    <div class="rounded-lg border bg-white shadow-sm hover:shadow-lg transition-smooth cursor-pointer p-6" data-action-tab="${action.tab}">
                        <div class="flex items-center gap-3">
                            <div class="p-2 rounded-lg" style="background: linear-gradient(135deg, hsl(var(--${action.colorClass})), hsl(var(--${action.colorClass.split('-')[0]}-light)))">
                                ${action.icon.replace('class="', `class="h-6 w-6 text-white `)}
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold" data-key="${action.dataKeyTitle}">${action.dataKeyTitle}</h4>
                                <p class="text-sm text-gray-500" data-key="${action.dataKeyDesc}">${action.dataKeyDesc}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-sm text-gray-500">${action.detail}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        container.querySelectorAll('[data-action-tab]').forEach(card => {
            card.addEventListener('click', () => {
                const targetTab = card.dataset.actionTab;
                if (!targetTab) return;
                activeTab = targetTab;
                updateTabs();
                if (targetTab === 'profile' && !isProfileInitialized) {
                    if (typeof window.initializeProfileTab === 'function') window.initializeProfileTab();
                    isProfileInitialized = true;
                }
                if (targetTab === 'market' && !isMarketInitialized) {
                    if (typeof window.initializeMarketTab === 'function') window.initializeMarketTab();
                    isMarketInitialized = true;
                }
                if (targetTab === 'pest' && !isPestDetectionInitialized) {
                    initializePestDetection();
                    isPestDetectionInitialized = true;
                }
                if (targetTab === 'weather' && !isWeatherInitialized) {
                    initializeWeather();
                    isWeatherInitialized = true;
                }
                if (targetTab === 'advisory' && !isAdvisoryInitialized) {
                    if (typeof window.initializeChatbot === 'function') window.initializeChatbot(translations);
                    isAdvisoryInitialized = true;
                }
            });
        });
    };

    

    const renderMarket = () => {
        document.getElementById('market-content').innerHTML = `
            <div class="rounded-lg border bg-white p-6 shadow-sm">
                <h3 class="text-xl font-bold mb-2" data-key="market_tab_title">Market Prices</h3>
                <p class="text-sm text-gray-500 mb-4" data-key="market_tab_subtitle">Live mandi rates and market trends</p>
                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                   <div class="p-4 border rounded-lg">
                        <p class="font-semibold">Wheat (गेहूं)</p> <p class="text-2xl font-bold text-green-700">₹2,150 / Quintal</p>
                        <p class="text-sm text-green-600">▲ 2.3%</p> <p class="text-xs text-gray-500 mt-2">Meerut, Uttar Pradesh</p>
                   </div>
                   <div class="p-4 border rounded-lg">
                        <p class="font-semibold">Rice (चावल)</p> <p class="text-2xl font-bold text-red-600">₹3,200 / Quintal</p>
                        <p class="text-sm text-red-600">▼ 1.5%</p> <p class="text-xs text-gray-500 mt-2">Saharanpur, Uttar Pradesh</p>
                   </div>
                </div>
            </div>`;
    };

    // --- WEATHER LOGIC ---
    const renderWeather = () => {
        document.getElementById('weather-content').innerHTML = `
            <div id="weather-container" class="space-y-6">
                <div id="weather-loader" class="text-center p-6 result-card">
                    <div class="spinner"></div>
                    <h3 class="font-semibold text-primary" data-key="weather_loading">Fetching local weather data...</h3>
                    <p class="text-sm text-gray-500" data-key="weather_loading_desc">Please allow location access for accurate reports.</p>
                </div>
                <div id="weather-error" class="hidden error-message"></div>
                <div id="weather-data-view" class="hidden grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <!-- Current Weather Card -->
                    <div id="current-weather-card" class="lg:col-span-1 weather-card flex flex-col items-center justify-center text-center"></div>
                    <!-- AI Advisory and Forecast Wrapper -->
                    <div class="lg:col-span-2 flex flex-col gap-6">
                         <!-- AI Advisory Card -->
                         <div id="ai-advisory-card" class="weather-advice-card p-6 rounded-lg"></div>
                         <!-- Tomorrow's Forecast Card -->
                         <div id="tomorrow-forecast-card" class="weather-card p-6 h-fit"></div>
                    </div>
                </div>
            </div>`;
    };

    const initializeWeather = () => {
        const loader = document.getElementById('weather-loader');
        const errorContainer = document.getElementById('weather-error');
        const dataView = document.getElementById('weather-data-view');
        
        // API key handled securely via backend proxy (.env)
        const OPENWEATHER_API_KEY = ""; 

        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            
            try {
                let weatherData, forecastData;
                try {
                    const res = await fetch(`${API_BASE_URL}/api/weather?lat=${latitude}&lon=${longitude}`);
                    if (res.ok) {
                        const data = await res.json();
                        weatherData = data.weatherData;
                        forecastData = data.forecastData;
                    }
                } catch (proxyErr) {
                    console.warn('Backend weather proxy unavailable, falling back to direct OpenWeather fetch...');
                }

                if (!weatherData || !forecastData) {
                    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`;
                    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`;
                    
                    const [weatherResponse, forecastResponse] = await Promise.all([
                        fetch(weatherApiUrl),
                        fetch(forecastApiUrl)
                    ]);

                    if (!weatherResponse.ok) {
                        if (weatherResponse.status === 401) {
                            throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
                        }
                        throw new Error(`OpenWeatherMap API error: ${weatherResponse.statusText}`);
                    }
                    if (!forecastResponse.ok) {
                        throw new Error(`Forecast API error: ${forecastResponse.statusText}`);
                    }
                    weatherData = await weatherResponse.json();
                    forecastData = await forecastResponse.json();
                }

                // Get tomorrow's forecast (24 hours from now)
                const tomorrow = forecastData.list.find(item => {
                    const itemDate = new Date(item.dt * 1000);
                    const now = new Date();
                    const timeDiff = itemDate.getTime() - now.getTime();
                    return timeDiff > 18 * 60 * 60 * 1000 && timeDiff < 30 * 60 * 60 * 1000; // Between 18-30 hours
                }) || forecastData.list[8]; // Fallback to 8th item (roughly 24 hours)

                // Fetch AI advice from backend route
                let aiAdvice;
                try {
                    const advisoryResponse = await fetch(`${API_BASE_URL}/api/ai/weather-advisory`, { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' }, 
                        body: JSON.stringify({ weatherData, tomorrowData: tomorrow }) 
                    });
                    
                    if (advisoryResponse.ok) {
                        aiAdvice = await advisoryResponse.json();
                    }
                } catch (geminiError) {
                    console.warn('AI advice unavailable:', geminiError);
                }

                // Fallback AI advice if Gemini fails
                if (!aiAdvice) {
                    aiAdvice = {
                        watering_advice: "Monitor soil moisture and water in early morning or evening to reduce evaporation.",
                        crop_protection_advice: "Keep monitoring for pests and diseases. Current weather conditions require regular field inspection.",
                        harvesting_advice: "Plan harvesting activities based on weather conditions. Avoid harvesting during rain.",
                        tomorrow_summary: `Tomorrow will be ${tomorrow.weather[0].description} with temperature around ${Math.round(tomorrow.main.temp)}°C.`
                    };
                }

                // Display the data
                displayWeatherData(weatherData, aiAdvice, tomorrow);
                loader.classList.add('hidden');
                dataView.classList.remove('hidden');

            } catch (error) {
                console.error("Weather feature error:", error);
                loader.classList.add('hidden');
                errorContainer.classList.remove('hidden');
                errorContainer.innerHTML = `<h4>Error</h4><p>${error.message}</p>`;
            }

        }, (error) => {
            loader.classList.add('hidden');
            errorContainer.classList.remove('hidden');
            let errorMessage = "An unknown error occurred.";
            if (error.code === 1) errorMessage = "Please allow location access to get weather reports.";
            if (error.code === 2) errorMessage = "Location information is unavailable.";
            if (error.code === 3) errorMessage = "Location request timed out.";
            errorContainer.innerHTML = `<h4 data-key="weather_error_location_title">Location Error</h4><p data-key="weather_error_location_desc">${errorMessage}</p>`;
            translatePage();
        });
    };

    // FIXED: Updated displayWeatherData function to handle the new data structure
    const displayWeatherData = (weatherData, aiAdvice, tomorrowData) => {
        const currentCard = document.getElementById('current-weather-card');
        const advisoryCard = document.getElementById('ai-advisory-card');
        const tomorrowCard = document.getElementById('tomorrow-forecast-card');

        // Current Weather
        currentCard.innerHTML = `
            <p class="text-lg font-medium" data-key="weather_current_location">Your Location</p>
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png" alt="${weatherData.weather[0].description}" class="weather-icon">
            <p class="text-6xl font-bold">${Math.round(weatherData.main.temp)}°C</p>
            <p class="text-lg capitalize">${weatherData.weather[0].description}</p>
            <p class="text-sm text-gray-500" data-key="weather_humidity">Humidity: ${weatherData.main.humidity}%</p>
        `;

        // AI Advisory
        advisoryCard.innerHTML = `
            <h4 class="text-xl font-bold mb-3" data-key="weather_ai_title">🤖 AI Farming Advice</h4>
            <div class="space-y-3 text-sm">
                <p><strong>💧 <span data-key="weather_advice_watering">Watering:</span></strong> ${aiAdvice.watering_advice}</p>
                <p><strong>🐛 <span data-key="weather_advice_protection">Crop Protection:</span></strong> ${aiAdvice.crop_protection_advice}</p>
                <p><strong>🌾 <span data-key="weather_advice_harvesting">Harvesting:</span></strong> ${aiAdvice.harvesting_advice}</p>
            </div>
        `;

        // Tomorrow's Forecast
        tomorrowCard.innerHTML = `
            <h4 class="text-xl font-bold mb-3" data-key="weather_tomorrow_title">Tomorrow's Forecast</h4>
            <div class="flex items-center gap-4">
                <img src="https://openweathermap.org/img/wn/${tomorrowData.weather[0].icon}@2x.png" alt="${tomorrowData.weather[0].description}">
                <div>
                    <p class="text-2xl font-semibold">${Math.round(tomorrowData.main.temp)}°C</p>
                    <p class="capitalize">${tomorrowData.weather[0].description}</p>
                    <p class="text-sm text-gray-600 mt-1">${aiAdvice.tomorrow_summary}</p>
                </div>
            </div>
        `;
        translatePage();
    };

    // --- PEST DETECTION LOGIC ---
    const renderPestDetection = () => {
        const container = document.getElementById('pest-content');
        container.innerHTML = `
            <div class="rounded-lg border bg-white p-6 shadow-sm">
                <h3 class="text-xl font-bold" data-key="pest_tab_title">Pest Detection</h3>
                <p class="text-sm text-gray-500 mb-4" data-key="pest_tab_subtitle">AI-powered pest and disease identification</p>
                
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <!-- Left Side: Upload and Tips -->
                    <div class="md:col-span-2 space-y-6">
                        <!-- Upload Section -->
                        <div class="pest-upload-area rounded-lg p-6 text-center cursor-pointer bg-white" id="pestUploadArea">
                            <div class="pest-upload-icon">📸</div>
                            <h3 class="text-lg font-semibold" data-key="pest_upload_title">Upload Plant Photo</h3>
                            <p class="text-sm text-gray-500" data-key="pest_upload_desc">Drag & drop or click to select an image</p>
                            <button class="mt-4 gradient-primary text-white text-sm font-medium py-2 px-4 rounded-lg" id="pestChoosePhotoButton">Choose Photo</button>
                            <input type="file" id="pestFileInput" class="hidden" accept="image/*">
                        </div>
                        <!-- Image Preview -->
                        <div id="pestPreviewContainer" class="hidden text-center">
                            <img id="pestImagePreview" class="max-w-full h-auto rounded-lg shadow-md mx-auto" alt="Preview">
                            <button class="mt-4 gradient-primary text-white font-medium py-2 px-6 rounded-lg" id="pestAnalyzeButton">Analyze with AI</button>
                        </div>
                        <!-- Tips Section -->
                        <div class="result-card">
                            <h4 data-key="pest_tips_title">📝 Tips for Best Results</h4>
                            <ul class="text-sm text-gray-600 space-y-2">
                               <li data-key="pest_tip_1"><strong>Good Lighting:</strong> Use daylight for clear photos.</li>
                               <li data-key="pest_tip_2"><strong>Clear Focus:</strong> Ensure affected leaves are in focus.</li>
                               <li data-key="pest_tip_3"><strong>Close-up Shots:</strong> Get close to show details of damage.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Right Side: Loading and Results -->
                    <div class="md:col-span-3">
                        <!-- Loading Section -->
                        <div id="pestLoadingSection" class="hidden text-center p-6 result-card">
                            <div class="spinner"></div>
                            <h3 class="font-semibold text-green-800" data-key="pest_loading_title">Analyzing your crop photo...</h3>
                            <p class="text-sm text-gray-500" data-key="pest_loading_desc">AI is examining the image for pests and diseases.</p>
                        </div>
                        <!-- Analysis Results Section -->
                        <div id="pestAnalysisSection" class="hidden space-y-4">
                             <div id="pestAnalysisResults"></div>
                             <div class="text-center">
                                 <button class="gradient-primary text-white font-medium py-2 px-6 rounded-lg" id="pestAnalyzeAnotherButton">Analyze Another Photo</button>
                             </div>
                        </div>
                    </div>
                </div>
            </div>`;
    };
    
    const initializePestDetection = () => {
        let pestSelectedImage = null;
        
        const uploadArea = document.getElementById('pestUploadArea');
        const fileInput = document.getElementById('pestFileInput');
        const choosePhotoButton = document.getElementById('pestChoosePhotoButton');
        const previewContainer = document.getElementById('pestPreviewContainer');
        const imagePreview = document.getElementById('pestImagePreview');
        const loadingSection = document.getElementById('pestLoadingSection');
        const analysisSection = document.getElementById('pestAnalysisSection');
        const analysisButton = document.getElementById('pestAnalyzeButton');
        const analyzeAnotherButton = document.getElementById('pestAnalyzeAnotherButton');

        const handleFile = (file) => {
            if (!file || !file.type.startsWith('image/')) {
                showMessageModal('Invalid File', 'Please select a valid image file.');
                return;
            }
            pestSelectedImage = file;
            const reader = new FileReader();
            reader.onload = e => {
                imagePreview.src = e.target.result;
                uploadArea.classList.add('hidden');
                previewContainer.classList.remove('hidden');
                analysisSection.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        };
        
        const analyzeImage = async () => {
            if (!pestSelectedImage) {
                showMessageModal('No Image', 'Please select an image first.');
                return;
            }
            loadingSection.classList.remove('hidden');
            analysisSection.classList.add('hidden');
            previewContainer.classList.add('hidden');

            try {
                const base64Image = await fileToBase64(pestSelectedImage);
                const response = await fetch(`${API_BASE_URL}/api/ai/pest-detection`, { 
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' }, 
                    body: JSON.stringify({ imageBase64: base64Image, mimeType: pestSelectedImage.type }) 
                });
                if (!response.ok) throw new Error(`API Error: ${response.statusText || response.status}`);
                const data = await response.json();
                displayAnalysisResults(data);
            } catch (error) {
                console.error('Analysis error:', error);
                displayErrorMessage('Analysis Failed', error.message);
            } finally {
                loadingSection.classList.add('hidden');
            }
        };
        
        const displayAnalysisResults = (data) => {
            const resultsContainer = document.getElementById('pestAnalysisResults');
            resultsContainer.innerHTML = `
                <div class="result-card result-summary-card-modern">
                    <h4 class="result-title">Analysis Summary</h4>
                    <p>${data.summary || 'Summary not available.'}</p>
                </div>
                <div class="result-card result-white-card">
                    <h4 class="result-title severity-red">Overall Health: ${data.health_status}</h4>
                    <p><strong>Plant Identified as:</strong> ${data.plant_identification || 'Unknown'}</p>
                </div>
                ${data.pest_detection?.has_pests ? `
                <div class="result-card result-white-card">
                    <h4 class="result-title severity-red">Pest Detected: ${data.pest_detection.severity} Severity</h4>
                    ${data.pest_detection.details.map(p => `<p><strong>${p.name}:</strong> ${p.description}</p>`).join('')}
                </div>` : ''}
                <div class="result-card result-white-card">
                    <h4 class="result-title severity-red">Disease Detected: ${(data.disease_detection && data.disease_detection.severity) ? data.disease_detection.severity : 'None'} Severity</h4>
                    ${data.disease_detection && data.disease_detection.details && data.disease_detection.details.length > 0 ? data.disease_detection.details.map(d => `<p><strong>${d.name}:</strong> ${d.description}</p>`).join('') : ''}
                </div>
                <div class="result-card treatment-card-modern">
                    <h4 class="result-title">Treatment Plan</h4>
                    <div class="section-title organic-title">Organic Treatments:</div>
                    <ul>${data.treatment_recommendations.organic.map(t => `<li>${t}</li>`).join('')}</ul>
                    <div class="section-title chemical-title">Chemical Treatments:</div>
                    <ul>${data.treatment_recommendations.chemical.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>
            `;
            analysisSection.classList.remove('hidden');
        };
    // Modern pest result card styles
    const style = document.createElement('style');
    style.innerHTML = `
    .result-card {
        border-radius: 16px;
        margin-bottom: 18px;
        padding: 1.25rem 1.5rem 1rem 1.5rem;
        font-size: 1rem;
    }
    .result-summary-card-modern {
        background: linear-gradient(120deg, #e6f4ea 0%, #d1f1d6 100%);
        border-left: 6px solid #3bb273;
        color: #1a2e1a;
        box-shadow: 0 2px 12px 0 rgba(60,180,120,0.07);
    }
    .result-white-card {
        background: #fff;
        border: 1.5px solid #ececec;
        color: #222;
        box-shadow: 0 1px 6px 0 rgba(0,0,0,0.04);
    }
    .treatment-card-modern {
        background: #f7fafc;
        border-left: 6px solid #60a5fa;
        color: #1a2e1a;
        box-shadow: 0 2px 12px 0 rgba(60,180,120,0.04);
    }
    .result-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .severity-red {
        color: #c00;
        font-weight: bold;
    }
    .section-title {
        font-weight: 600;
        margin-top: 0.75rem;
        margin-bottom: 0.25rem;
    }
    .organic-title { color: #15803d; }
    .chemical-title { color: #1d4ed8; }
    ul { margin: 0 0 0.5rem 1.25rem; }
    li { margin-bottom: 0.25rem; }
    `;
    document.head.appendChild(style);
        
        const displayErrorMessage = (title, message) => {
            document.getElementById('pestAnalysisResults').innerHTML = `<div class="error-message"><h4>❌ ${title}</h4><p>${message}</p></div>`;
            analysisSection.classList.remove('hidden');
        };
        
        const resetForNewAnalysis = () => {
            pestSelectedImage = null;
            fileInput.value = '';
            uploadArea.classList.remove('hidden');
            previewContainer.classList.add('hidden');
            analysisSection.classList.add('hidden');
        };

        choosePhotoButton.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', e => handleFile(e.target.files[0]));
        uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
        uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
        uploadArea.addEventListener('drop', e => { e.preventDefault(); uploadArea.classList.remove('dragover'); handleFile(e.dataTransfer.files[0]); });
        analysisButton.addEventListener('click', analyzeImage);
        analyzeAnotherButton.addEventListener('click', resetForNewAnalysis);
    };

    // --- ADVISORY CHATBOT DELEGATION ---
    const renderAdvisory = () => {
        if (typeof window.renderChatbot === 'function') {
            window.renderChatbot();
        } else {
            setTimeout(() => {
                if (typeof window.renderChatbot === 'function') window.renderChatbot();
            }, 100);
        }
    };

    const initializeAdvisoryChatbot = () => {
        if (typeof window.initializeChatbot === 'function') {
            window.initializeChatbot(translations);
        } else {
            setTimeout(() => {
                if (typeof window.initializeChatbot === 'function') window.initializeChatbot(translations);
            }, 100);
        }
    };

    
    // --- MULTILINGUAL SUPPORT ---
    const langBtnEn = document.getElementById('lang-btn-en');
    const langBtnHi = document.getElementById('lang-btn-hi');
    const langBtnEnDash = document.getElementById('lang-btn-en-dash');
    const langBtnHiDash = document.getElementById('lang-btn-hi-dash');
    let currentLanguage = 'en';
    let translations = {};

    // Fetch translation JSON and update the page
    const fetchTranslations = async (lang) => {
        try {
            const response = await fetch(`languages/${lang}.json`);
            if (!response.ok) {
                console.error(`Could not load translation file: ${lang}.json`);
                return;
            }
            translations = await response.json();
            window.translations = translations;
            translatePage();
        } catch (error) {
            console.error('Error fetching translations:', error);
        }
    };

    // Replace all [data-key] elements with translation
    const translatePage = () => {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
        document.querySelectorAll('[data-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (translations[key]) {
                element.placeholder = translations[key];
            }
        });
    };
    window.translatePage = translatePage;
    
    // Set language and update UI
    const setLanguage = (lang) => {
        currentLanguage = lang;
        fetchTranslations(lang);

        if (lang === 'hi') {
            langBtnHi.classList.add('active');
            langBtnEn.classList.remove('active');
            langBtnHiDash.classList.add('active');
            langBtnEnDash.classList.remove('active');
        } else {
            langBtnEn.classList.add('active');
            langBtnHi.classList.remove('active');
            langBtnEnDash.classList.add('active');
            langBtnHiDash.classList.remove('active');
        }
    };

    langBtnEn.addEventListener('click', () => setLanguage('en'));
    langBtnHi.addEventListener('click', () => setLanguage('hi'));
    langBtnEnDash.addEventListener('click', () => setLanguage('en'));
    langBtnHiDash.addEventListener('click', () => setLanguage('hi'));

    // --- Initial Setup ---
    // Utility: Convert file to base64 string
    const fileToBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });

    const initialize = () => {
        renderFeatures();
        renderOverview();
        // renderProfile(); // REMOVED: This is now handled on tab click
        renderWeather();
        renderMarket();
        renderAdvisory();
        renderPestDetection();
        updateTabs();
        setLanguage('en'); // Set initial language

        openDashboardButtons.forEach(btn => btn.addEventListener('click', showDashboard));
        backToHomeButton.addEventListener('click', showLandingPage);
        tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
        
        const modalCloseButton = document.getElementById('modal-close-btn');
        if(modalCloseButton) {
            modalCloseButton.addEventListener('click', () => {
                document.getElementById('messageModal').style.display = 'none';
            });
        }
    };

    initialize();
});
