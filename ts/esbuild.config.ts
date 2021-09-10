require('esbuild')
  .serve(
    { port: 8000, servedir: "." },
    {
      entryPoints: ["index.ts"],
      bundle: true,
      tsconfig: "tsconfig.json",
      outfile: "out.js",
    }
  )
  .then((server: {[key: string]: string}) => {
    console.log(server);
  });
