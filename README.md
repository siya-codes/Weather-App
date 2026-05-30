# Weather App

A React weather application that shows real-time weather details for cities, states, countries, and regions. The app uses location search to find coordinates first, then fetches current weather data for that exact place.

## Features

- Search by city, state, country, or region
- Location suggestions while typing
- Uses OpenWeather for live weather data
- Uses OpenStreetMap/Nominatim fallback for broader location search
- Temperature display in Celsius and Fahrenheit
- Weather details such as humidity, wind, visibility, sunrise, sunset, feels-like temperature, and pressure
- Dynamic background that changes based on temperature and weather condition
- Hot locations show heat-style background effects
- Responsive UI built with React, Vite, and Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- OpenWeather API
- OpenStreetMap/Nominatim geocoding

## How It Works

1. User enters a place name.
2. App searches for matching locations using OpenWeather geocoding and OpenStreetMap/Nominatim.
3. User selects a suggestion or submits the search.
4. App fetches current weather using latitude and longitude.
5. Background changes according to the temperature and weather condition.

Note: City weather is more exact than state or country weather. For states/countries, the app uses the main/center coordinates returned by the location search provider.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/siya-codes/Weather-App.git
cd Weather-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add OpenWeather API key

Open `src/App.jsx` and update this line with your OpenWeather API key:

```js
const API_KEY = 'your_api_key_here'
```

You can get an API key from:

```text
https://openweathermap.org/api
```

### 4. Run the app locally

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run lint

```bash
npm run lint
```

## Example Searches

- Chennai
- Tamil Nadu
- Maharashtra
- India
- California
- London
- New York

## Project Structure

```text
Weather-App/
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- Helper.jsx
|   |   |-- Icons.jsx
|   |   `-- WeatherBackground.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- package.json
`-- README.md
```

## Credits

- Weather data: OpenWeather
- Broader location search: OpenStreetMap/Nominatim
- Built with React and Vite
