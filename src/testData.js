const treeId = 't01';

const title = 'Green Family Tree <fake test data>';

const rootPersonId = 'p01';

const persons = [

  {
    _id: 'p01',
    generation: 0,
    gender: 'male',
    surname: 'Green',
    firstname: 'Richard',
    father: 'p03',
    mother: 'p04',
    wife: 'p02',
    children: ['p07', 'p08', 'p09', 'p10', 'p11']
  },

// (Add or delete any keys p07 through p15 to change number of children.
//  Be sure to do this for both mother and father.)

  {
    _id: 'p02',
    generation: 0,
    gender: 'female',
    surname: 'Lewis',
    firstname: 'Martha',
    father: 'p05',
    mother: 'p06',
    husband: 'p01',
    children: ['p07', 'p08', 'p09', 'p10', 'p11']
  },

  {
    _id: 'p03',
    generation: 1,
    gender: 'male',
    surname: 'Green',
    firstname: 'James',
    father: 'p51',
    wife: 'p04',
    children: ['p01']
  },

  {
    _id: 'p04',
    generation: 1,
    gender: 'female',
    surname: 'Felton',
    firstname: 'Virginia',
    father: 'p30',
    mother: 'p31',
    husband: 'p03',
    children: ['p01']
  },

  {
    _id: 'p05',
    generation: 1,
    gender: 'male',
    surname: 'Lewis',
    firstname: 'Edward',
    mother: 'p32',
    wife: 'p06',
    children: ['p02']
  },

  {
    generation: 1,
    _id: 'p06',
    gender: 'female',
    surname: 'Wilson',
    firstname: 'Flora',
    father: 'p40',
    mother: 'p41',
    husband: 'p05',
    children: ['p02']
  },

  {
    _id: 'p07',
    generation: -1,
    gender: 'female',
    surname: 'Green',
    firstname: 'Gabby',
    father: 'p01',
    mother: 'p02',
    husband: 'p20',
    children: ['p21', 'p22']
  },

  {
    _id: 'p08',
    generation: -1,
    gender: 'male',
    surname:'Green',
    firstname: 'Habby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p09',
    generation: -1,
    gender: 'female',
    surname: 'Green',
    firstname: 'Ibby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p10',
    generation: -1,
    gender: 'male',
    surname: 'Green',
    firstname: 'Jibby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p11',
    generation: -1,
    gender: 'female',
    surname: 'Green',
    firstname: 'Kibby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p12',
    generation: -1,
    gender: 'female',
    surname: 'Green',
    firstname: 'Libby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p13',
    generation: -1,
    gender: 'male',
    surname: 'Green',
    firstname: 'Mobby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p14',
    generation: -1,
    gender: 'male',
    surname: 'Green',
    firstname: 'Nobby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p15',
    generation: -1,
    gender: 'female',
    surname: 'Green',
    firstname: 'Obby',
    father: 'p01',
    mother: 'p02'
  },

  {
    _id: 'p20',
    generation: -1,
    gender: 'male',
    surname: 'Denton',
    firstname: 'Brian',
    wife: 'p07',
    children: ['p21', 'p22' ]
  },

  {
    _id: 'p21',
    generation: -2,
    gender: 'male',
    surname: 'Denton',
    firstname: 'Thomas',
    father: 'p20',
    mother: 'p07'
  },

  {
    _id: 'p22',
    generation: -2,
    gender: 'female',
    surname: 'Denton',
    firstname: 'Julia',
    father: 'p20',
    mother: 'p07'
  },

  {
    _id: 'p30',
    generation: 2,
    gender: 'male',
    surname: 'Davis',
    firstname: 'Albert',
    wife: 'p31',
    children: ['p04']
  },

  {
    _id: 'p31',
    generation: 2,
    gender: 'female',
    surname: 'Kenner',
    firstname: 'Audrey',
    husband: 'p30',
    children: ['p04']
  },

  {
    _id: 'p32',
    generation: 2,
    gender: 'female',
    surname: 'Quinn',
    firstname: 'Teresa',
    father: 'p33',
    children: ['p05']
  },

  {
    _id: 'p33',
    generation: 3,
    gender: 'male',
    surname: 'Quinn',
    firstname: 'William',
    children: ['p32']
  },

  {
    _id: 'p40',
    generation: 2,
    gender: 'male',
    surname: 'Wilson',
    firstname: 'Michael',
    father: 'p43',
    mother: 'p44',
    wife: 'p41',
    children: ['p06']
  },

  {
    _id: 'p41',
    generation: 2,
    gender: 'female',
    surname: 'Zimmer',
    firstname: 'Donna',
    father: 'p42',
    husband: 'p40',
    children: ['p06']
  },

  {
    _id: 'p42',
    generation: 3,
    gender: 'male',
    surname: 'Zimmer',
    firstname: 'Robert',
    children: ['p41']
  },

  {
    _id: 'p43',
    generation: 3,
    gender: 'male',
    surname: 'Wilson',
    firstname: 'David',
    wife: 'p44',
    children: ['p40']
  },

  {
    _id: 'p44',
    generation: 3,
    gender: 'female',
    surname: 'Miller',
    firstname: 'Nancy',
    father: 'p47',
    mother: 'p45',
    husband: 'p43',
    children: ['p40']
  },

  {
    _id: 'p45',
    generation: 4,
    gender: 'female',
    surname: 'Dover',
    firstname: 'Cora',
    father: 'p46',
    husband: 'p47',
    children: ['p44']
  },

  {
    _id: 'p46',
    generation: 5,
    gender: 'male',
    surname: 'Dover',
    firstname: 'Matthew',
    children: ['p45']
  },

  {
    _id: 'p47',
    generation: 4,
    gender: 'male',
    surname: 'Miller',
    firstname: 'Joshua',
    father: 'p48',
    mother: 'p49',
    wife: 'p45',
    children: ['p44']
  },

  {
    _id: 'p48',
    generation: 5,
    gender: 'male',
    surname: 'Miller',
    firstname: 'John',
    wife: 'p49',
    children: ['p47']
  },

  {
    _id: 'p49',
    generation: 5,
    gender: 'female',
    surname: 'Burton',
    firstname: 'Sarah',
    husband: 'p48',
    children: ['p47']
  },

  {
    _id: 'p51',
    generation: 2,
    gender: 'male',
    surname: 'Green',
    firstname: 'Alex',
    children: ['p03']
  },

];

export { treeId, title, rootPersonId, persons };
