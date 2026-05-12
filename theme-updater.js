const fs = require('fs');
const path = require('path');

const replacements = {
  'menarc-cyan': 'menarc-gold',
  'menarc-violet': 'menarc-white',
  'glow-cyan': 'glow-gold',
  'glow-violet': 'glow-white',
  '#00D1FF': '#D4AF37',
  '#7C3AED': '#FFFFFF',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const targetDirs = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app'),
  path.join(__dirname, 'lib')
];

let replacedCount = 0;

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    walkDir(dir, filePath => {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        for (const [key, value] of Object.entries(replacements)) {
          newContent = newContent.split(key).join(value);
        }
        if (content !== newContent) {
          fs.writeFileSync(filePath, newContent);
          console.log(`Updated ${filePath}`);
          replacedCount++;
        }
      }
    });
  }
});

console.log(`Done. Updated ${replacedCount} files.`);
