import { copyFile, unlink } from 'node:fs/promises';

await copyFile('dist/app.html', 'dist/index.html');
await unlink('dist/app.html');
