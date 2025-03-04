// src/data/items.js
import image1 from './path/to/image1.png';
import image2 from './path/to/image2.png';
import image3 from './path/to/image3.png';
import image4 from './path/to/Try.png';
import image5 from './path/to/Search.png';

const items = [
  {
    id: 1,
    name: '1. "Try" Button click',
    content: 'After User clicks "Try" Button, move from Tutorial page to Main page',
    image: image4,
  },
  {
    id: 2,
    name: '2. "Search" Button click',
    content: 'After the user enters some of the patent contents [Patent ID | Patent Title | Inventor Name | Current Assignee] and clicks the "Search" button',
    image: image5,
  },
  {
    id: 3,
    name: '3. "Run" Button click',
    content: 'When user wants to see Triple&KG, click the "Run" Button',
    image: image3,
  },
  {
    id: 4,
    name: 'Patent Visualization',
    content: 'Using Google Patent',
    image: image1,
  },
  {
    id: 5,
    name: 'Word Highlighting',
    content: 'Content extracted by ChatGPT',
    image: image2,
  },
  {
    id: 6,
    name: 'Graph Visualization',
    content: 'Content extracted by ChatGPT',
    image: image3,
  }
];

export default items;