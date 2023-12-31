// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/showSchools',
          permanent: true,
        },
      ];
    },
  };
  