// Example build/utility script
// ESLint will check this file too!

interface BuildOptions {
  isDevelopment: boolean;
  hasSourceMaps: boolean;
}

export function buildProject(options: BuildOptions): void {
  const { isDevelopment, hasSourceMaps } = options;
  
  console.log('Building project...');
  console.log(`Development mode: ${isDevelopment}`);
  console.log(`Source maps enabled: ${hasSourceMaps}`);
  
  // Your build logic here
  const isSuccessful = performBuild(isDevelopment, hasSourceMaps);
  
  if (isSuccessful) {
    console.log('✅ Build completed successfully!');
  } else {
    console.error('❌ Build failed!');
    process.exit(1);
  }
}

function performBuild(isDev: boolean, hasMaps: boolean): boolean {
  // Mock build process
  console.log(`Building with dev=${isDev}, maps=${hasMaps}`);
  return true;
}

// Example usage
if (import.meta.url === `file://${process.argv[1]}`) {
  buildProject({
    isDevelopment: process.env.NODE_ENV !== 'production',
    hasSourceMaps: true,
  });
}

