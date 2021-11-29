module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url:'https://skw-strapi2.herokuapp.com',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bf3a8fba16ed04a0e9b00f69820b2606'),
    },
  },
});
