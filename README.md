# Vite + React + TypeScript Starter Template

A modern, production-ready starter template with best practices and tooling configured.

This repository is a proof-of-concept monorepo layout for hosting multiple Vite apps that utilize Tailwind CSS, ESLint, TypeScript, and Prettier. Each app lives under `src/apps/{name}` with its own configuration, and builds output to `dist/{name}` at the repository root. Use this as a foundation to add more apps under `src/apps/` and scale shared tooling.

> **Note:** This repository serves as the foundation for the [Unirend](https://github.com/keverw/unirend) starter template generator, providing a battle-tested setup for modern React applications.

## Features

✅ **Vite 7** - Lightning-fast build tool and dev server  
✅ **React 19** - Latest React with TypeScript  
✅ **Tailwind CSS 4** - Native Vite plugin, no PostCSS needed  
✅ **@apply, @utility, @layer** - Full support for custom styles  
✅ **ESLint 9** - Flat config with strict rules  
✅ **TypeScript** - Type-aware linting  
✅ **Monorepo Ready** - Organized structure in `src/apps/demo`  
✅ **Prettier** - Code formatting with Tailwind class sorting  
✅ **Boolean naming conventions** enforced (is, has, can, should, did, will, does)  
✅ **Unused variables detection**

## Quick Start

```bash
# Install dependencies (if needed)
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run ESLint
bun run lint

# Auto-fix ESLint issues
bun run lint:fix

# Format code with Prettier
bun run format

# Check formatting without changes
bun run format:check
```

The dev server will start at http://localhost:5173/

## Project Structure

```
.
├── src/
│   ├── apps/
│   │   └── demo/                 # Demo application (monorepo-friendly)
│   │       ├── public/           # Static assets
│   │       ├── src/              # App source code
│   │       │   ├── App.tsx       # Main app component
│   │       │   ├── main.tsx      # Entry point
│   │       │   ├── index.css     # Tailwind CSS imports
│   │       │   └── vite-env.d.ts # Vite types
│   │       ├── index.html        # HTML entry point
│   │       ├── vite.config.ts    # Vite configuration
│   │       └── tsconfig.json     # TypeScript config for demo
│   └── ...                       # Other apps can be added here
├── scripts/                      # Build scripts and utilities
├── dist/
│   └── demo/                     # Build output for demo app
│       ├── assets/               # Bundled JS/CSS with hashed filenames
│       ├── index.html            # Production HTML
│       └── vite.svg              # Static assets from public/
├── eslint.config.js              # ESLint configuration
├── tsconfig.json                 # Root TypeScript config
└── package.json                  # Root package.json with scripts
```

## Linting Rules

### Boolean Naming Convention

All boolean variables and parameters must follow a naming convention with specific prefixes:

**✅ Valid:**

```typescript
const isVisible = true;
const hasPermission = false;
const canEdit = true;
const shouldUpdate = false;
const didLoad = true;
const willRender = false;
const doesExist = true;
```

**❌ Invalid:**

```typescript
const visible = true; // Error: Must have prefix
const permission = false; // Error: Must have prefix
const editing = true; // Error: Must have prefix
```

### Unused Variables

ESLint will detect and report any unused variables:

**✅ Valid:**

```typescript
const isActive = true;
console.log(isActive); // Variable is used
```

**❌ Invalid:**

```typescript
const isActive = true; // Error: 'isActive' is defined but never used
const unusedVar = 'test'; // Error: 'unusedVar' is defined but never used
```

**Note:** Variables prefixed with underscore are allowed to be unused:

```typescript
const _isDebug = true; // ✅ OK - variables starting with _ can be unused
```

## Monorepo-Friendly Structure

The Vite configuration is stored in `src/apps/demo/` to be monorepo-friendly:

- Root `package.json` contains dev/build commands
- Vite config is in the app subfolder
- **All builds output to `dist/{app-name}`** at the root level
- Easy to add more apps in `src/apps/`
- Each app can have its own configuration

### Adding Another App

To add another app (e.g., `admin`):

1. Create `src/apps/admin/` with its own `vite.config.ts`
2. Configure `outDir: resolve(__dirname, '../../../dist/admin')`
3. Add scripts to root `package.json`:
   ```json
   "dev:admin": "cd src/apps/admin && vite",
   "build:admin": "cd src/apps/admin && tsc -b && vite build"
   ```

All apps will build to their own folder in `dist/` at the root.

## Path Aliases

This project uses the `@/` alias for cleaner imports across the monorepo:

```typescript
// Instead of relative imports:
import { formatCount } from '../../../libs/utils/format';

// Use the @ alias:
import { formatCount } from '@/libs/utils/format';
```

The `@/` alias points to the `src/` directory and works everywhere:

- **In apps:** `@/libs/utils/format` → `src/libs/utils/format`
- **In scripts:** `@/apps/demo/src/App` → `src/apps/demo/src/App`
- **In libs:** `@/apps/demo/types` → `src/apps/demo/types`

### Configuration

The alias is configured in two places:

**TypeScript (`tsconfig.json`):**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Vite (`src/apps/demo/vite.config.ts`):**

```typescript
resolve: {
  alias: {
    '@': resolve(__dirname, '../../../src'),
  },
}
```

Both TypeScript and Vite need to be configured for the alias to work in development and production builds.

## Configuration Files

- **`package.json`** - Root package with scripts
- **`eslint.config.js`** - ESLint 9 flat config
- **`tsconfig.json`** - Root TypeScript config with path aliases
- **`src/apps/demo/vite.config.ts`** - Vite configuration with alias resolution
- **`src/apps/demo/tsconfig.json`** - Demo app TypeScript config (extends root)

## Environment Configuration

Environment variables are excluded from version control for security. The `.env` file is ignored by Git.

### Setup

If your project requires environment variables, document them in this README or create a separate `.env.example` file.

**Option 1: Document in README (Recommended)**

List your environment variables directly in this section with their purpose and example values:

```bash
# .env
VITE_API_URL=https://api.example.com  # Backend API endpoint
VITE_APP_NAME=MyApp                   # Application display name
```

**Option 2: Use .env.example file**

Create a `.env.example` file at the root:

```bash
# .env.example
VITE_API_URL=https://api.example.com
VITE_APP_NAME=MyApp
```

Then copy it for local development and tweak as needed:

```bash
cp .env.example .env
```

### Using Environment Variables

Vite exposes environment variables prefixed with `VITE_` to your client code:

```typescript
// Access in your app
const apiUrl = import.meta.env.VITE_API_URL;
```

See [Vite's env variables documentation](https://vitejs.dev/guide/env-and-mode.html) for more details.

## Tailwind CSS 4

This project uses Tailwind CSS 4 with the new native Vite plugin:

- **No PostCSS needed** - Uses `@tailwindcss/vite` plugin
- **Simpler configuration** - Just import in CSS: `@import "tailwindcss";`
- **Faster builds** - Native Vite integration
- **All Tailwind features** - Full utility-first CSS framework

### Using Tailwind

Simply use Tailwind classes in your JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">Hello Tailwind!</div>
```

### Customization

Tailwind 4 uses CSS-based configuration with the `@theme` directive. The demo includes custom colors:

```css
@import 'tailwindcss';

@theme {
  /* Primary color (indigo) - must use --color- prefix */
  --color-primary: #6366f1;
  --color-primary-50: #eef2ff;
  --color-primary-500: #6366f1;
  --color-primary-600: #4f46e5;
  /* ... full color scale -50 to -950 */

  /* Showcase color - blue in light, green in dark */
  --color-showcase-50: #dbeafe;
  --color-showcase-500: #60a5fa;
}

/* Override colors in dark mode */
.dark {
  --color-primary: #818cf8; /* Brighter in dark mode */
  --color-showcase-50: #064e3b; /* Green in dark mode! */
}
```

Then use them in your components:

```tsx
<button className="bg-primary hover:bg-primary-600 text-white">
  Primary Button
</button>
<div className="bg-showcase-50">
  Blue in light mode, green in dark mode!
</div>
```

**What's different from v3:**

- No `tailwind.config.js` needed
- Define colors directly in CSS with `@theme`
- Use CSS variables instead of JS config
- Full color scales with `-50` to `-950` shades
- Native Vite plugin for faster builds
- `@utility` directive for creating custom utilities

## Custom Styles with @apply, @utility, and @layer

Tailwind CSS 4 fully supports `@apply`, `@utility`, and `@layer` directives for creating custom styles:

### Using @apply (Compose Existing Utilities)

Use `@apply` to compose existing Tailwind utilities into reusable CSS classes:

```css
/* src/index.css */
.btn-primary {
  @apply rounded-lg bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-600;
}

.card {
  @apply rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800;
}
```

Then use in your JSX:

```tsx
<button className="btn-primary">Click me</button>
<div className="card">Content here</div>
```

### Using @utility (Create New Utilities)

Use `@utility` to create custom utility classes that work like native Tailwind utilities:

```css
/* src/index.css */
@utility content-auto {
  content-visibility: auto;
}

@utility text-balance {
  text-wrap: balance;
}

@utility glass-effect {
  backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.7);
}
```

Then use them like any Tailwind class:

```tsx
<div className="glass-effect text-balance content-auto">
  Beautiful text with glassmorphism effect
</div>
```

### Using @layer (Organize Custom Styles)

Use `@layer` to organize custom styles into Tailwind's layers. **Important:** Within `@layer`, `@apply` can only use Tailwind's built-in utilities, not other custom classes:

```css
/* src/index.css */
@layer components {
  .btn-primary {
    @apply rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600;
  }

  .btn-secondary {
    @apply rounded-lg bg-gray-200 px-4 py-2 font-semibold text-gray-900 transition-colors hover:bg-gray-300;
  }

  .card {
    @apply rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .bg-gradient-radial {
    background: radial-gradient(circle, #818cf8, #4338ca);
  }
}
```

**Important Limitation (Tailwind CSS 4):** `@apply` can ONLY use Tailwind's built-in utilities. You cannot reference custom classes with `@apply` - **not inside `@layer`, not outside `@layer`, not anywhere.**

**Breaking change from v3:** In Tailwind CSS v3, you could compose custom classes with `@apply` (e.g., `.btn { @apply btn-base bg-blue-500; }` worked). This no longer works in v4.

If you need to compose styles, your options are:

1. **List all utilities directly** with `@apply` (no custom class composition)
2. **Use `@utility`** to create new utility classes (new in v4!)
3. **Use React components** for reusable styled elements (recommended)
4. **Use regular CSS** (extend classes without `@apply`)

### Component Approach (Alternative to @apply)

While `@apply` works great, you can also create reusable React components for type safety:

```tsx
// src/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-colors';
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-600 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
}
```

**Benefits of Component Approach:**

- Type-safe props with TypeScript
- Better IntelliSense and autocomplete
- Easier to test and maintain
- More flexible (can pass any React prop)

### Why Use @layer? (The Key Difference)

You might ask: "Why use `@layer` if I can just create `.my-class` without it?"

**TL;DR:** `@layer` gives your custom classes the same specificity behavior as Tailwind utilities, making them predictable and easy to override.

#### Without @layer:

```css
/* Regular CSS class - specificity issues */
.btn {
  @apply bg-blue-500 px-4 py-2;
}
```

```tsx
{
  /* ❌ The bg-green-500 might NOT override .btn's background */
}
<button className="btn bg-green-500">Won't be green!</button>;
```

#### With @layer:

```css
/* Proper Tailwind component layer */
@layer components {
  .btn {
    @apply bg-blue-500 px-4 py-2;
  }
}
```

```tsx
{
  /* ✅ The bg-green-500 WILL override because of proper cascade order */
}
<button className="btn bg-green-500">Will be green!</button>;
```

**Benefits of @layer:**

1. **Predictable Specificity** - Works like Tailwind's built-in utilities
2. **Easy Overrides** - Utility classes in HTML can override component classes
3. **Proper Cascade** - Order: `base` → `components` → `utilities`
4. **Better Organization** - Clear separation of concerns

**When to use each approach:**

- **`@apply` (standalone)**: Compose Tailwind utilities into a custom class when you don't need override control
- **`@apply` + `@layer components`**: Compose Tailwind utilities with predictable specificity (utilities can override)
- **`@utility`**: Create entirely new utility classes for CSS properties not in Tailwind
- **`@layer utilities`**: Organize custom utilities in Tailwind's cascade system
- **React Components**: Best for reusability, type safety, props, and complex logic (recommended)

## Code Formatting with Prettier

This project uses [Prettier](https://prettier.io/) with the [Tailwind CSS plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) to automatically sort Tailwind classes and format code.

### Monorepo-Friendly Setup

**Root config (`prettier.config.js`):**

```js
/** @type {import("prettier").Config} */
export default {
  // Minimal: rely on Prettier 3 defaults
};
```

**App config (`src/apps/demo/prettier.config.js`):**

```js
import baseConfig from '../../../prettier.config.js';

export default {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './src/index.css', // Required for Tailwind v4
};
```

### Tailwind Class Sorting

Classes are automatically sorted according to Tailwind's [recommended class order](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier):

**Before:**

```tsx
<button className="text-white px-4 bg-blue-500 rounded py-2">
```

**After:**

```tsx
<button className="rounded bg-blue-500 px-4 py-2 text-white">
```

### Editor Integration

For VS Code, install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enable format on save in `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## TypeScript Support

The ESLint configuration uses type-aware linting, which means:

- Type information from TypeScript is used for better linting
- Rules like naming conventions can check actual types
- More accurate and powerful error detection

## React Support

React-specific rules are configured:

- JSX variable usage is tracked
- React imports are properly handled (no need for `import React` in React 17+)
- React version is auto-detected

## Extending the Configuration

To add more rules, edit `eslint.config.js`:

```javascript
rules: {
  // Add your custom rules here
  '@typescript-eslint/explicit-function-return-type': 'warn',
  'no-console': 'warn',
  // ... more rules
}
```

## Tech Stack

### Core

- **Vite 7** - Build tool and dev server
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS

### Tooling

- **ESLint 9** - Linting with flat config
- **Bun** - Fast JavaScript runtime and package manager

### Dependencies

**Main:**

- `react` ^19.2.0
- `react-dom` ^19.2.0

**Dev:**

- `vite` ^7.2.2
- `@vitejs/plugin-react` ^5.1.0
- `@tailwindcss/vite` ^4.1.17
- `tailwindcss` ^4.1.17
- `eslint` ^9.39.1
- `typescript` ^5.9.3
- `@types/react` ^19.2.2
- `@types/react-dom` ^19.2.2
- `@types/node` ^24.10.0

## What's Different in This Setup

### ESLint 9

- Uses the new "flat config" format (`eslint.config.js`)
- The old `.eslintrc.*` format is deprecated
- Type-aware linting with TypeScript integration

### Tailwind CSS 4

- Native Vite plugin (`@tailwindcss/vite`)
- No PostCSS configuration needed
- CSS-based configuration with `@theme`
- Simply import in CSS: `@import "tailwindcss";`

### Monorepo Structure

- Vite config in app folder, not root
- Root `package.json` references subfolder configs
- Easy to add multiple apps
- Each app can have its own tooling

## Browser Support

The default Vite configuration targets modern browsers:

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

Update `vite.config.ts` to adjust browser targets if needed.

## License

MIT
