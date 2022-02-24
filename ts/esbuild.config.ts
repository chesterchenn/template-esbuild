require('esbuild')
  .serve(
    { port: 8000, servedir: '.' },
    {
      entryPoints: ['index.tsx'],
      bundle: true,
      tsconfig: 'tsconfig.json',
      outfile: 'out.js',
      loader: { '.js': 'jsx' },
      sourcemap: true,
    }
  )
  .then((server: { [key: string]: string }) => {
    console.log(server);
  });
