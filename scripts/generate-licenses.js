const checker = require('license-checker');
const fs = require('node:fs');
const path = require('node:path');

const outPath = path.join(__dirname, '..', 'generated', 'licenses.json');

checker.init(
  {
    start: path.join(__dirname, '..'),
    production: true,
    excludePrivatePackages: true,
  },
  (err, packages) => {
    if (err) {
      console.error('license-checker failed:', err);
      process.exit(1);
    }

    const result = Object.entries(packages)
      .map(([key, pkg]) => {
        const atIdx = key.lastIndexOf('@');
        const name = atIdx > 0 ? key.slice(0, atIdx) : key;
        const version = atIdx > 0 ? key.slice(atIdx + 1) : '';
        return {
          name,
          version,
          licenses: pkg.licenses || 'Unknown',
          repository: pkg.repository || null,
          publisher: pkg.publisher || null,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));

    const out = JSON.stringify(result);
    const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
    if (existing !== out) {
      fs.writeFileSync(outPath, out);
    }
  },
);
