import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/**
 * Next 16 ships `eslint-config-next` as native flat config, so no
 * `FlatCompat` shim is needed (and the shim in fact breaks on it).
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'public/blog/**', 'next-env.d.ts'],
  },
];

export default config;
