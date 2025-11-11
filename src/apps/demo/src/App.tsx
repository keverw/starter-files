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
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 transition-colors dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-balance text-gray-900 dark:text-white">
              Vite + React + Tailwind CSS 4
            </h1>
            <p className="text-lg text-balance text-gray-600 dark:text-gray-300">
              ESLint 9 • TypeScript • Monorepo Ready • @apply & @utility Support
            </p>
          </header>

          {/* Main Card */}
          <div className="mb-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <svg
                  className="h-10 w-10 text-white"
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
              <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {formatCount(count)}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Click the button to increment
              </p>
            </div>

            <button
              onClick={() => setCount((prevCount) => prevCount + 1)}
              className="w-full rounded-xl bg-primary px-6 py-4 font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-primary-600 hover:shadow-xl"
            >
              Increment Count
            </button>

            {/* Demo button using @apply */}
            <button
              onClick={() => alert('This button uses @apply!')}
              className="btn-fancy mt-4 w-full"
            >
              🎨 Button with @apply
            </button>

            {/* Demo button using @layer */}
            <button
              onClick={() => alert('This button uses @layer components!')}
              className="btn-layer-success mt-4 w-full"
            >
              🟢 Button with @layer
            </button>
          </div>

          {/* Testing @apply, @utility, and @layer demo card */}
          <div className="card-glass mb-8 content-auto">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-shadow text-xl font-bold text-gray-900 dark:text-white">
                ✨ All 3 Directives Working!
              </h3>
              <span className="badge-info">Tailwind CSS 4</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="rounded-lg bg-green-100 p-3 text-gray-900 dark:bg-green-900/50 dark:text-green-50">
                <strong className="text-green-900 dark:text-white">
                  <span className="dark:text-white">✓</span> @apply:
                </strong>{' '}
                The{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  .btn-fancy
                </code>{' '}
                and{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  .card-glass
                </code>{' '}
                classes use @apply to compose Tailwind utilities
              </div>
              <div className="rounded-lg bg-blue-100 p-3 text-gray-900 dark:bg-blue-900/50 dark:text-blue-50">
                <strong className="text-blue-900 dark:text-white">
                  <span className="dark:text-white">✓</span> @utility:
                </strong>{' '}
                The{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  text-balance
                </code>
                ,{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  content-auto
                </code>
                ,{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  text-shadow
                </code>
                , and{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  bg-gradient-radial
                </code>{' '}
                are custom utilities created with @utility
              </div>
              <div className="rounded-lg bg-purple-100 p-3 text-gray-900 dark:bg-purple-900/50 dark:text-purple-50">
                <strong className="text-purple-900 dark:text-white">
                  <span className="dark:text-white">✓</span> @layer:
                </strong>{' '}
                The{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  .btn-layer-success
                </code>{' '}
                and{' '}
                <code className="rounded bg-gray-200 px-2 py-1 text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                  .badge-info
                </code>{' '}
                classes use @layer to organize styles into Tailwind's layer
                system
              </div>
            </div>
          </div>

          {/* Demo: Why @layer matters */}
          <div className="mb-8 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              🤔 Why Use @layer? See the Difference!
            </h3>
            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <strong>Without @layer:</strong> Trying to override with{' '}
                  <code className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700">
                    bg-blue-500
                  </code>{' '}
                  - might not work reliably
                </p>
                <div className="test-without-layer rounded-lg bg-blue-500 text-white">
                  I have .test-without-layer AND bg-blue-500. Which wins? 🤷
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                  <strong>With @layer:</strong> The{' '}
                  <code className="rounded bg-gray-200 px-2 py-1 dark:bg-gray-700">
                    bg-blue-500
                  </code>{' '}
                  utility reliably overrides the component class
                </p>
                <div className="test-with-layer rounded-lg bg-blue-500 text-white">
                  I have .test-with-layer AND bg-blue-500. Blue wins! ✅
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
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
          <div className="flex items-center justify-center gap-4 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </span>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors dark:bg-primary"
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

function FeatureCard({
  title,
  description,
  icon,
  isHighlighted,
}: FeatureCardProps) {
  return (
    <div
      className={`${
        isHighlighted
          ? 'border-2 border-showcase-500 bg-showcase-50'
          : 'bg-white dark:bg-gray-800'
      } rounded-xl p-6 shadow-md transition-all hover:shadow-lg`}
    >
      <div className="mb-3 text-3xl">{icon}</div>
      <h3
        className={`mb-2 text-lg font-semibold ${
          isHighlighted ? 'text-showcase-900' : 'text-gray-900 dark:text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm ${
          isHighlighted
            ? 'text-showcase-700'
            : 'text-gray-600 dark:text-gray-400'
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default App;
