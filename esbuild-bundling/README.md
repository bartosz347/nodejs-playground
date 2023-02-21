# esbuild

[esbuild](https://esbuild.github.io) is a powerful and fast JS build tool

- languages JS, TS, CSS and JSX
- supports minification, tree shaking and source maps
- has local server, watch mode and can be extended with plugins

There are some [TypeScript limitations](https://esbuild.github.io/content-types/#typescript-caveats)

- The emitDecoratorMetadata TypeScript configuration option is not supported. (
  Workarounds: https://github.com/airplanedev/lib/pull/534 or use SWC)
- The declaration TypeScript configuration option (i.e. generation of .d.ts files) is not supported.
- Esbuild does not check types – typecheck must be run manually
