const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, 'docs');
const browserDir = path.join(docsDir, 'browser');

console.log('Building for GitHub Pages...');
try {
  // Run the build command
  // Note: outputPath is set to 'docs' in angular.json
  execSync('ng build --configuration production --base-href /portfolio/', { stdio: 'inherit' });

  // Check if docs/browser exists (Angular 17+ default for application builder)
  if (fs.existsSync(browserDir)) {
    console.log('Flattening docs/browser structure...');

    // Move files from docs/browser to docs
    const files = fs.readdirSync(browserDir);
    files.forEach(file => {
      const srcPath = path.join(browserDir, file);
      const destPath = path.join(docsDir, file);

      // Remove destination if it exists (to avoid error on move)
      if (fs.existsSync(destPath)) {
        fs.rmSync(destPath, { recursive: true, force: true });
      }

      fs.renameSync(srcPath, destPath);
    });

    // Remove empty browser directory
    fs.rmdirSync(browserDir);
    console.log('Build structure flattened successfully.');
  } else {
    console.log('docs/browser not found. Assuming flat structure already or build failed to create it.');
  }

  console.log('Build complete. Output in docs/');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
