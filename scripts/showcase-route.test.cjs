const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = process.cwd();
const read = path => readFileSync(join(root, path), 'utf8');

assert.equal(existsSync(join(root, 'app/showcase')), true, 'app/showcase should exist');
assert.equal(
  existsSync(join(root, 'app/tab-showcase')),
  false,
  'app/tab-showcase should be removed',
);

const rootLayout = read('app/_layout.tsx');
assert.match(rootLayout, /<Stack\.Screen name="showcase"/);
assert.doesNotMatch(rootLayout, /name="tab-showcase"/);

const home = read('app/(tabs)/index.tsx');
assert.match(home, /href="\/showcase"/);
assert.match(home, />Showcase</);
assert.doesNotMatch(home, /href="\/tab-showcase"/);
assert.doesNotMatch(home, /Tab Layout Showcase/);

const showcaseIndex = read('app/showcase/index.tsx');
assert.match(showcaseIndex, /const cases(?:: ShowcaseCase\[\])? = \[/);
assert.match(showcaseIndex, /href: '\/showcase\/\(glass-pill\)\/albums'/);
assert.match(showcaseIndex, /title: 'Photos Gallery'/);
assert.match(showcaseIndex, /photo|album|gallery/i);
assert.doesNotMatch(showcaseIndex, /\/tab-showcase/);
