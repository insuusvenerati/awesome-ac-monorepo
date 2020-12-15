const withNx = require('@nrwl/next/plugins/with-nx');
const withOffline = require('next-offline');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const swConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

const nextConfig = {
  images: {
    domains: ['acnhapi.com', 'acnhcdn.com', 'acnhapi.b-cdn.net'],
  },
};

module.exports = withPlugins(
  [[optimizedImages], [withNx], [withOffline, swConfig]],
  nextConfig
);
