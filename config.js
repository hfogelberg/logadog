const CLOUDINARY_CLOUD_NAME = "golizzard";
const  CLOUDINARY_API_KEY = "925374862654622";
const  CLOUDINARY_API_SECRET = "doHBawwQUw7L2vYVKq5Dl9wbdUE";
const IS_LOCAL = process.env.NODE_ENV !== 'production';
const API_ROOT_URL = IS_LOCAL
    ? 'http://localhost:8081/api'
    : 'https://localhost:80/api'

module.exports = {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  IS_LOCAL,
  API_ROOT_URL
}
