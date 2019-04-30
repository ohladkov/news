import { combineReducers } from 'redux';

const initialState = [
  {
    id: 0,
    source: {
      id: 'techradar',
      name: 'TechRadar',
    },
    author: 'https://www.facebook.com/TechRadar',
    title: 'The 18000mAh Energizer phone dies an undignified death after funding failure - TechRadar',
    description: 'Good night, sweet prince.',
    url: 'https://www.techradar.com/news/the-18000mah-energizer-phone-dies-an-undignified-death-after-funding-failure',
    urlToImage: 'https://cdn.mos.cms.futurecdn.net/PDS53v8MABuBPvrKVuprdM-1200-80.jpg',
    publishedAt: '2019-04-30T12:04:00Z',
    content:
      'The Energizer Power Max P18K Pop, an Energizer phone with a massive 18,000mAh battery, has finally finished ringing its death knell, after a wildly unsuccessful Indiegogo campaign saw it receive only 1% of the required funding.\r\nThe massive handset was shown … [+1344 chars]',
  },
  {
    id: 1,
    source: {
      id: 'the-hill',
      name: 'The Hill',
    },
    author: 'Reid Wilson',
    title: "Abrams won't run for Senate seat | TheHill - The Hill",
    description:
      'Former Democratic state legislative leader Stacey Abrams will not challenge Sen. David Perdue (R-Ga.) next year, a blow to Democrats who hoped to make inroads in a state Republicans have controlled for nearly two decades.',
    url: 'https://thehill.com/homenews/campaign/441288-abrams-wont-run-for-senate-seat',
    urlToImage: 'https://thehill.com/sites/default/files/abramsstacey04102019.jpg',
    publishedAt: '2019-04-30T11:57:03Z',
    content:
      'Former Democratic state legislative leader Stacey Abrams will not challenge Sen. David Perdue (R-Ga.) next year, a blow to Democrats who hoped to make inroads in a state Republicans have controlled for nearly two decades.\r\nIn a video posted to Twitter, Abrams… [+3006 chars]',
  },
  {
    id: 2,
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Nick Paton Walsh and Natalie Gallón, CNN',
    title: "Venezuela opposition leader Juan Guaidó declares 'final phase of Operation Freedom' - CNN",
    description:
      'The leader of Venezuela\'s opposition, Juan Guaidó, on Tuesday declared "the start of the end of the usurpation," in a dawn address in which he was flanked by men in military fatigues and armored vehicles in the capital Caracas.',
    url: 'https://www.cnn.com/2019/04/30/americas/venezuela-juan-guaido-leopoldo-lopez-intl/index.html',
    urlToImage:
      'https://cdn.cnn.com/cnnnext/dam/assets/190406135557-juan-guaido-manifestaciones-miraflores-tiembla-el-regimen-perdio-sots-00000000-super-tease.jpg',
    publishedAt: '2019-04-30T11:40:00Z',
    content: null,
  },
  {
    id: 3,
    source: {
      id: 'cnn',
      name: 'CNN',
    },
    author: 'Matt Egan, CNN Business',
    title: "GE burns through $1.2 billion but Wall Street is happy it wasn't worse - CNN",
    description:
      'General Electric has fallen so hard that Wall Street is relieved its industrial businesses only burned $1.2 billion of cash during the first quarter.',
    url: 'https://www.cnn.com/2019/04/30/investing/ge-earnings-stock/index.html',
    urlToImage: 'https://cdn.cnn.com/cnnnext/dam/assets/190429160202-ge-earnings-file-restricted-super-tease.jpg',
    publishedAt: '2019-04-30T11:37:00Z',
    content: null,
  },
  {
    id: 4,
    source: {
      id: 'cnbc',
      name: 'CNBC',
    },
    author: 'Michael Sheetz',
    title: "GE says Boeing's 737 Max is 'a new risk' to this year's earnings forecast - CNBC",
    description: 'General Electric adds Boeing\'s grounded 737 Max airplanes as "a new risk" in its earnings report.',
    url: 'https://www.cnbc.com/2019/04/30/general-electric-boeing-737-max-a-new-risk-to-2019-earnings.html',
    urlToImage: 'https://image.cnbcfm.com/api/v1/image/105830301-1554291986205gettyimages-1130206930.jpeg?v=1556102410',
    publishedAt: '2019-04-30T11:14:17Z',
    content:
      'General Electric added Boeing\'s grounded 737 Max airplanes as "a new risk" in its quarterly earnings report on Tuesday, citing production of engines for the planes and its ownership of several of the aircraft for its leasing business.\r\nGE said it is "working … [+1989 chars]',
  },
];

const post = (state, action) => {
  switch (action.type) {
    case 'VIEW_POST':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        viewed: true,
      };
    default:
      return state;
  }
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'VIEW_POST':
      return state.map((p) => post(p, action));
    default:
      return state;
  }
};

export default combineReducers({
  posts,
});
