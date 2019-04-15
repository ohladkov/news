export default {
  NEWS_API_URLS: {
    TOP: 'https://newsapi.org/v2/top-headlines?',
    EVERYTHING: 'https://newsapi.org/v2/everything?',
  },
  NEWS_API_KEY_HEADER: { 'X-Api-Key': process.env.REACT_APP_NEWS_API_KEY }
};
