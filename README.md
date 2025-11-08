# ESLint 9 Setup with TypeScript and React

This project is configured with ESLint 9, TypeScript, and React with specific coding standards enforced.

## Features

✅ **ESLint 9** with flat config format  
✅ **TypeScript** support with type-aware linting  
✅ **React** linting rules  
✅ **Boolean naming conventions** enforced (is, has, can, should, did, will, does)  
✅ **Unused variables detection**

## Installation

All dependencies are already installed. The project uses Bun as the package manager.

## Scripts

```bash
# Run ESLint on all files
bun run lint

# Run ESLint and auto-fix issues
bun run lint:fix
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

## Configuration Files

- **`eslint.config.js`** - ESLint 9 flat config with all rules
- **`tsconfig.json`** - TypeScript configuration
- **`package.json`** - Project dependencies and scripts

## Linted Directories

ESLint is configured to check all TypeScript files in your project, including:
- `src/` - Your application source code
- `scripts/` - Build scripts and utilities
- Any other directory with `.ts` or `.tsx` files

## Examples

Check these files for working examples:
- `src/example.tsx` - React component demonstrating proper boolean naming and variable usage
- `scripts/example-script.ts` - Build script showing that custom scripts are also linted
- `src/example-with-errors.tsx.disabled` - Examples of what ESLint will catch (rename to `.tsx` to test)

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

## Dependencies

### Main Dependencies
- `react` - React library
- `react-dom` - React DOM renderer

### Dev Dependencies
- `eslint` - ESLint core
- `@eslint/js` - ESLint JavaScript rules
- `typescript-eslint` - TypeScript ESLint integration
- `eslint-plugin-react` - React-specific linting rules
- `typescript` - TypeScript compiler
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `@typescript-eslint/eslint-plugin` - TypeScript ESLint plugin
- `@types/react` - TypeScript definitions for React
- `@types/react-dom` - TypeScript definitions for React DOM
- `@types/node` - TypeScript definitions for Node.js (for scripts)

## Notes

- ESLint 9 uses the new "flat config" format (`eslint.config.js`)
- The old `.eslintrc.*` format is deprecated
- Type-aware linting requires a `tsconfig.json` file

