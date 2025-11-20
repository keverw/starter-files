// Example script demonstrating TypeScript + ESLint in scripts folder
// Run with: bun run scripts/example-script.ts
import { formatCount } from '@/libs/utils/format';

interface User {
  name: string;
  isActive: boolean;
}

function greetUser(user: User): void {
  const status = user.isActive ? 'active' : 'inactive';
  console.log(`Hello, ${user.name}! Status: ${status}`);
}

// Example usage
const exampleUser: User = {
  name: 'World',
  isActive: true,
};

greetUser(exampleUser);

// Demonstrate @ alias works in scripts
console.log(formatCount(42));
