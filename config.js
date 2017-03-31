const IS_LOCAL = process.env.NODE_ENV !== 'production';

const API_ROOT_URL = IS_LOCAL
    ? 'http://localhost:8081/api'
    : 'https://localhost:80/api'

console.log('API root ' + API_ROOT_URL);

module.exports = {
  IS_LOCAL,
  API_ROOT_URL
}
