require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    format: 'esm',
    outdir: 'dist',
    bundle: true,
    sourcemap: true,
    packages: 'external',
  })
  .catch(() => process.exit(1));
