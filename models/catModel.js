'use strict';
const cats = [
  {
    id: '1',
    name: 'Frank',
    birthdate: '2010-10-30',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    birthdate: '2015-12-25',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

//TODO tee funktio joka palauttaa yhden kissan id:n peruusteella
const getCat = (id) => {
  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    if(cat.id == id)
    return cat
  }
};

module.exports = {
  cats,
  getCat,
};
