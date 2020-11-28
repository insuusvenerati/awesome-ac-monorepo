const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  images: {
    domains: ['acnhapi.com', 'acnhcdn.com', 'acnhapi.b-cdn.net'],
  },
});
