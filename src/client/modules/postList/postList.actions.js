import shordid from 'shortid';

export const CREATE_POST = 'CREATE_POST';

export const createPost = ({ authorName, body }) => ({
  type: CREATE_POST,
  payload: {
    authorName,
    body,
    date: Date.now(),
    id: shordid.generate(),
  },
});

export const SET_PRESET_ITEMS = 'SET_PRESET_ITEMS';

export const setPresetItems = () => ({
  type: SET_PRESET_ITEMS,
  payload: [
    {
      id: 1,
      date: Date.now(),
      authorName: 'Dan',
      body:
        '<p>Best way to structure your application is to move files around until it feels just right</p>',
    },
    {
      id: 2,
      date: Date.now(),
      authorName: 'Donald Trump',
      body: '<p>Code splitting will bring peace to the world</p>',
    },
    {
      id: 3,
      date: Date.now(),
      authorName: 'Wayne Gretzky',
      body: "<p>You miss 100 percent of the shots you don't take</p>",
    },
    {
      id: 4,
      date: Date.now(),
      authorName: 'Wix Ad',
      body: '<p>Come work at Wix, we have many positions open. For juniors as well!</p>',
    },
    {
      id: 5,
      date: Date.now(),
      authorName: 'Veryga',
      body: '<p>Ban the alcohol!</p>',
    },
    {
      id: 6,
      date: Date.now(),
      authorName: 'Mark Zuckerberg',
      body:
        "<p>The biggest risk is not taking any risk... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks</p>",
    },
    {
      id: 7,
      date: Date.now(),
      authorName: 'Trashcan',
      body: '<p>People throw trash in me, and I am fine with it</p>',
    },
    {
      id: 8,
      date: Date.now(),
      authorName: 'Albert Einstein',
      body: "<p>If you can't explain it simply, you don't understand it well enough</p>",
    },
    {
      id: 9,
      date: Date.now(),
      authorName: 'Mark Twain',
      body:
        "<p>Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.</p>",
    },
    {
      id: 10,
      date: Date.now(),
      authorName: 'Test',
      body: '<p>This is a test text</p>',
    },
  ],
});
