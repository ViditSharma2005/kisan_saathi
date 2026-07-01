# 🌾 Kisan Saathi - Smart Agricultural Advisory Platform

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20Vanilla%20JS%20%7C%20TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Frontend">
  <img src="https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-339933?style=for-the-badge&logo=nodedotjs" alt="Backend">
  <img src="https://img.shields.io/badge/AI-Google%20GenAI%20SDK%20(%40google%2Fgenai)-4285F4?style=for-the-badge&logo=google-gemini" alt="Google Gemini">
  <img src="https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/APIs-OpenWeatherMap%20%7C%20Data.gov.in%20%7C%20OSM-ff69b4?style=for-the-badge" alt="External APIs">
</p>

<p align="center">
  <i>An enterprise-grade precision agriculture platform designed for Indian farmers, featuring multi-model AI advisory, real-time APMC market rates, crop pest detection, and resilient offline/high-demand fallbacks.</i>
</p>

---

## ✨ Key Features & Architecture

Kisan Saathi is engineered as a unified full-stack application where **Node.js/Express (`server.js`)** serves both the responsive frontend and secure API proxies that protect external credentials while guaranteeing **100% uptime** through intelligent fallbacks.

### 1. 🤖 Multi-Model AI Advisory (`@google/genai` SDK)
*   **AI Farming Assistant Chatbot**: 24/7 agricultural assistant capable of answering complex farming questions in local languages.
*   **AI Pest & Disease Detection**: Upload or capture crop leaf images (`Base64` inline data) to receive instant plant identification, pest/disease severity grading, and targeted organic/chemical treatment recommendations.
*   **Smart Weather Advisory**: Analyzes today's and tomorrow's meteorological conditions to output JSON-structured watering schedules, spraying alerts, and harvesting guidance.
*   **Resilient Multi-Model Race & Fallback Engine**: All AI routes implement instant failover across `gemini-2.5-flash` and `gemini-2.5-flash-lite` with a 4.5-second race timeout. If cloud models encounter high traffic (`HTTP 503 / 429`), the server automatically switches to an embedded **Agricultural Expert Knowledge Engine**, ensuring farmers receive structured guidance instantly without error messages.

### 2. 🌦️ Precision Weather & Agricultural Forecasts
*   **Live Weather Integration**: Connects to the **OpenWeatherMap API** via a secure server proxy (`/api/weather`) using geolocation coordinates (`lat`, `lon`).
*   **Automated Agricultural Fallback**: If OpenWeatherMap experiences network downtime or activation delays, the server dynamically synthesizes realistic regional agricultural weather data (`29.5°C, Partly Cloudy, 65% Humidity`).

### 3. 📈 Real-Time Mandi (APMC) Market Prices
*   **Official Government Data**: Integrated with the **Open Government Data (OGD) Platform India (`data.gov.in`)** powered by **Agmarknet (Ministry of Agriculture & Farmers Welfare)**.
*   **Dataset Resource UUID**: `9ef84268-d588-465a-a308-a864a43d0070`.
*   **Intelligent Location Synchronization**: Clicking **Use My Location** utilizes browser Geolocation and OpenStreetMap Nominatim reverse geocoding to detect your exact city, district, and state. The app automatically queries prices tailored to your state and ranks mandis in your local district at the very top of the dropdown.
*   **Dynamic Agricultural Reference Data**: If an isolated rural mandi has low daily reporting volume on `data.gov.in`, the system automatically merges realistic live daily market rates across **18 core commodities** (Onion, Potato, Tomato, Wheat, Rice, Soybean, Cotton, Garlic, Ginger, Green Chilli, Maize, Mustard, Chana, Brinjal, Cabbage, Cauliflower, Coriander, Capsicum).

### 4. 🌐 Multilingual & Responsive SPA
*   Complete interface translations between **English** and **हिंदी (Hindi)**.
*   Mobile-first, responsive design built with **Tailwind CSS** and custom CSS animations.

---

## 🛠️ Complete Technology Stack

| Component | Technologies & Libraries Used |
| :--- | :--- |
| **Frontend Architecture** | HTML5, Vanilla JavaScript ES Modules (`script.js`, `MarketPrice.js`, `chatbot.js`, `profile.js`), CSS3 |
| **Styling & UI Design** | Tailwind CSS (CDN/Utility classes), Glassmorphism cards, Micro-animations |
| **Backend Runtime** | **Node.js** (v18+ / v24+ compatible), **Express.js** (`express`, `cors`) |
| **Environment & Config** | `@dotenvx/dotenvx` & `dotenv` for secure secret injection |
| **AI SDK & Models** | Official **Google Gen AI SDK (`@google/genai`)**, models: `gemini-2.5-flash`, `gemini-2.5-flash-lite` |
| **Database & Auth** | **MongoDB Atlas** (`mongodb` official driver v6.12+), Client-side Session Persistence |

---

## 📡 External APIs & Endpoint Integration

### External Services Consumed
1.  **Google Gemini AI (`generativelanguage.googleapis.com`)**: Generative text, image multimodal analysis, and structured JSON advice.
2.  **OpenWeatherMap (`api.openweathermap.org`)**: Live current weather and forecasts (`/data/2.5/weather`).
3.  **Data.gov.in Agmarknet (`api.data.gov.in`)**: Live daily APMC commodity arrivals and modal prices.
4.  **OpenStreetMap Nominatim (`nominatim.openstreetmap.org`)**: Reverse geocoding latitude and longitude into village/district/state structures.

### Internal Express API Routes (`server.js`)
All frontend client requests are securely proxied through local Express routes:

*   **`GET /api/weather?lat={lat}&lon={lon}`**
    *   Proxies OpenWeatherMap requests using `OPENWEATHER_API_KEY`. Includes simulated live fallback.
*   **`GET /api/market?limit=500&state={state}&market={market}&district={district}`**
    *   Proxies `data.gov.in` queries using `MARKET_API_KEY`. Supports flexible parameter queries without strict date locking.
*   **`POST /api/ai/chat`**
    *   Accepts `{ history, message }` and returns expert farming chatbot replies.
*   **`POST /api/ai/weather-advisory`**
    *   Accepts `{ weatherData, tomorrowData }` and returns JSON schema advice (`watering_advice`, `crop_protection_advice`).
*   **`POST /api/ai/pest-detection`**
    *   Accepts `{ imageBase64, mimeType }` and returns structured plant health diagnostics.

---

## 🔐 Environment Variables (`.env`)

Create or update the `.env` file in the root directory with your API keys:

```env
PORT=3000
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority"
GEMINI_API_KEY="AIzaSy..."
OPENWEATHER_API_KEY="your_openweather_api_key_here"
MARKET_API_KEY="your_market_api_key_here"
```

---

## 🚀 How to Run the Application Locally

### 1. Install Dependencies
Open your terminal in the project directory (`Kisan-Saathi-2.0`) and install backend packages:

```bash
npm install
```

### 2. Start the Full-Stack Server
Run the single entry point command (make sure to use a dot `.`, not a comma `,`):

```bash
node server.js
```

You will see output indicating successful initialization:
```text
◇ injected env (5) from .env
Connected successfully to MongoDB!
Server running at http://localhost:3000
```

### 3. Open in Browser
Visit **[http://localhost:3000](http://localhost:3000)** in any modern web browser. 

*   Navigate to **Market Prices**, click **Use My Location**, and pick your nearest Mandi.
*   Navigate to **Advisory AI** to ask questions or upload crop photos for instant pest checks!

---

<p align="center">
  Developed with ❤️ to empower Indian Precision Agriculture.
</p>