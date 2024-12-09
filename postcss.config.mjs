/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer', // Make sure autoprefixer is included
    'postcss-preset-env',
  ],
};

