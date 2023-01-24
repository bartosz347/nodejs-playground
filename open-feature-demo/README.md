# OpenFeature demo

> OpenFeature is an **open standard** for feature flag management, created to support a robust feature flag ecosystem
> using
> cloud native technologies. OpenFeature provides a **unified API and SDK**, and a **developer-first, cloud-native
> implementation**, with **extensibility for open source and commercial offerings**.

Source: [https://openfeature.dev](https://openfeature.dev)

The aim of this demo is to demonstrate how OpenFeature can be used to work with feature flags in a Node.js application.

There are two flags:

- `meowAtStartFlag` – boolean flag set statically in the feature flags backend.
- `fontSizeFlag` – numeric value dependent on age of the app user. In this demo age is based on seconds part of
  current time instead of real age. When `age` is less than 40 then `40` is returned, otherwise feature flag value
  is `25`.

For more feature flag configuration details see [Flagd section](#Flagd) below.

### Components

#### Flagd

[Feature flag daemon](https://github.com/open-feature/flagd) with two feature flags configured
in `flagd/flags-config.yml`.

#### Demo app

Demo application that uses OpenFeature to fetch feature flag values from Flagd.

### Starting the demo

```shell
docker compose up -d
npm run dev
```

### Additional notes about this demo project

Not related to OpenFeature, but somehow interesting:

This project uses ECMAScript Modules (ESM) in Node.js.

Resources:
https://www.typescriptlang.org/docs/handbook/esm-node.html
https://www.typescriptlang.org/docs/handbook/module-resolution.html
