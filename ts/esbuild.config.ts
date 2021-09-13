require('esbuild')
  .serve(
    { port: 8000, servedir: "." },
    {
      entryPoints: ["index.ts", "app.tsx"],
      bundle: true,
      tsconfig: "tsconfig.json",
      outdir: "out",
      loader: {'.js': 'jsx'}
    }
  )
  .then((server: {[key: string]: string}) => {
    console.log(server);
  });
