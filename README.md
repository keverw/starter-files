# Vite + React + TypeScript Starter Template

A modern, production-ready starter template with best practices and tooling configured.

## Features

✅ **Vite 7** - Lightning-fast build tool and dev server  
✅ **React 19** - Latest React with TypeScript  
✅ **Tailwind CSS 4** - Native Vite plugin, no PostCSS needed  
✅ **ESLint 9** - Flat config with strict rules  
✅ **TypeScript** - Type-aware linting  
✅ **Monorepo Ready** - Organized structure in `src/apps/demo`  
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
const visible = true;      // Error: Must have prefix
const permission = false;   // Error: Must have prefix
const editing = true;       // Error: Must have prefix
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
const isActive = true;  // Error: 'isActive' is defined but never used
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

## Configuration Files

- **`package.json`** - Root package with scripts
- **`eslint.config.js`** - ESLint 9 flat config
- **`tsconfig.json`** - Root TypeScript config
- **`src/apps/demo/vite.config.ts`** - Vite configuration
- **`src/apps/demo/tsconfig.json`** - Demo app TypeScript config

## Tailwind CSS 4

This project uses Tailwind CSS 4 with the new native Vite plugin:

- **No PostCSS needed** - Uses `@tailwindcss/vite` plugin
- **Simpler configuration** - Just import in CSS: `@import "tailwindcss";`
- **Faster builds** - Native Vite integration
- **All Tailwind features** - Full utility-first CSS framework

### Using Tailwind

Simply use Tailwind classes in your JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

### Customization

Tailwind 4 uses CSS-based configuration with the `@theme` directive. The demo includes custom brand colors:

```css
@import "tailwindcss";

@theme {
  /* Custom brand colors */
  --color-brand: #6366f1;
  --color-brand-50: #eef2ff;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  /* ... full color scale */
  
  /* Custom accent color */
  --color-accent: #f59e0b;
}
```

Then use them in your components:

```tsx
<button className="bg-brand hover:bg-brand-600 text-white">
  Click Me
</button>
```

**What's different from v3:**
- No `tailwind.config.js` needed
- Define colors directly in CSS with `@theme`
- Use CSS variables instead of JS config
- Full color scales with `-50` to `-950` shades
- `@apply` is deprecated - use components instead

## Component Approach (No @apply)

Tailwind CSS 4 deprecates `@apply` in favor of React/TypeScript components. Instead of creating CSS classes, create reusable components:

**❌ Old way (v3 with @apply):**
```css
.btn {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
```

**✅ New way (v4 with components):**
```tsx
// src/components/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
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

**Benefits:**
- Type-safe props
- Better IntelliSense
- Easier to maintain and test
- More flexible (can pass any React prop)

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

