This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Weather App 🌤️

A modern, responsive weather application built with Next.js that provides real-time weather information and 5-day forecasts for any location worldwide.

## 🚀 Live Demo

[View Live Application](YOUR_VERCEL_URL_HERE)

## ✨ Features

- **Real-time Weather Data**: Current weather conditions with detailed metrics
- **5-Day Forecast**: Extended weather predictions with daily breakdowns
- **Location Search**: Search for weather by city name or use your current location
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive UI**: Smooth loading states and intuitive user experience
- **Detailed Weather Metrics**: Temperature, humidity, wind speed, air pressure, visibility, sunrise/sunset times

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Tailwind Merge** - Intelligent Tailwind class merging
- **clsx** - Conditional class names utility

### State Management & Data Fetching
- **TanStack React Query** - Server state management and caching
- **Jotai** - Atomic state management for client state
- **Axios** - HTTP client for API requests

### UI & Icons
- **React Icons** - Comprehensive icon library
- **Custom Weather Icons** - Themed weather condition icons

### Utilities
- **date-fns** - Modern date utility library for formatting and parsing

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking

## 🌐 API

This application uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data and forecasts.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenWeatherMap API key

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file and add your API key:
```bash
NEXT_PUBLIC_WEATHER_KEY=your_openweathermap_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 How to Use

1. **Search by Location**: 
   - Type a city name in the search box
   - Press Enter to get weather data for that location

2. **Use Current Location**:
   - Click the location button (📍) to the left of the search box
   - Allow location permissions when prompted
   - Weather data will automatically load for your current position

3. **View Weather Details**:
   - Current temperature and conditions
   - Hourly forecast for today
   - 5-day extended forecast
   - Detailed metrics including humidity, wind speed, and more

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/     # Reusable UI components
│   ├── utils/         # Utility functions
│   └── atom.ts        # Jotai state atoms
├── components/        # Additional components
└── types/            # TypeScript type definitions
```

## 🌟 Key Features Explained

- **Skeleton Loading**: Smooth loading states that match the final UI structure
- **Error Handling**: Graceful error states with user-friendly messages  
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Performance**: Optimized with React Query caching and Next.js optimizations
- **Accessibility**: Semantic HTML and proper ARIA labels

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using Next.js and modern web technologies.