import { useState, useEffect } from 'react';
import { formatCount } from '@/src/libs/utils/format';

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode by adding/removing 'dark' class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Vite + React + Tailwind CSS 4
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              ESLint 9 • TypeScript • Monorepo Ready
            </p>
          </header>

          {/* Main Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {formatCount(count)}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Click the button to increment
              </p>
            </div>

            <button
              onClick={() => setCount((prevCount) => prevCount + 1)}
              className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Increment Count
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <FeatureCard
              title="ESLint 9"
              description="Boolean naming conventions enforced"
              icon="✓"
              isHighlighted={false}
            />
            <FeatureCard
              title="Tailwind 4"
              description="Native Vite plugin, no PostCSS"
              icon="🎨"
              isHighlighted={false}
            />
            <FeatureCard
              title="TypeScript"
              description="Type-safe development"
              icon="📘"
              isHighlighted={false}
            />
            <FeatureCard
              title="Custom Theme"
              description="Uses @theme for custom colors"
              icon="🎨"
              isHighlighted={true}
            />
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 dark:bg-primary transition-colors"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isHighlighted: boolean;
}

function FeatureCard({ title, description, icon, isHighlighted }: FeatureCardProps) {
  return (
    <div className={`${
      isHighlighted 
        ? 'bg-showcase-50 border-2 border-showcase-500' 
        : 'bg-white dark:bg-gray-800'
    } p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className={`text-lg font-semibold mb-2 ${
        isHighlighted 
          ? 'text-showcase-900' 
          : 'text-gray-900 dark:text-white'
      }`}>
        {title}
      </h3>
      <p className={`text-sm ${
        isHighlighted 
          ? 'text-showcase-700' 
          : 'text-gray-600 dark:text-gray-400'
      }`}>
        {description}
      </p>
    </div>
  );
}

export default App;

