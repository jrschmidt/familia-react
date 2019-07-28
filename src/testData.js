const treeId = 't01';

const title = 'Green Family Tree <fake test data>';

const rootPersonId = 'p01';

const persons = [

  {
    _id: 'p01',
    gender: 'male',
    surname: 'Green',
    firstname: 'Andrew',
    father: 'p03',
    mother: 'p04',
    wife: 'p02',
    children: ['p07','p08','p09','p10', 'p11', 'p12', 'p13','p14', 'p15']
  },

  {
    _id: 'p02',
    gender: 'female',
    surname: 'Miller',
    firstname: 'Barbara',
    father: 'p05',
    mother: 'p06',
    husband: 'p01',
    children: ['p07','p08','p09','p10', 'p11', 'p12', 'p13','p14','p14']
  },

  {_id: 'p03', surname: 'Green', firstname: 'Charles'},
  {_id: 'p04', surname: 'Davis', firstname: 'Debby'},
  {_id: 'p05', surname: 'Miller', firstname: 'Edward'},
  {_id: 'p06', surname: 'Wilson', firstname: 'Flora'},
  {_id: 'p07', surname: 'Green', firstname: 'Gabby'},
  {_id: 'p08', surname: 'Green', firstname: 'Habby'},
  {_id: 'p09', surname: 'Green', firstname: 'Ibby'},
  {_id: 'p10', surname: 'Green', firstname: 'Jibby'},
  {_id: 'p11', surname: 'Green', firstname: 'Kibby'},
  {_id: 'p12', surname: 'Green', firstname: 'Libby'},
  {_id: 'p13', surname: 'Green', firstname: 'Mobby'},
  {_id: 'p14', surname: 'Green', firstname: 'Nobby'},
  {_id: 'p15', surname: 'Green', firstname: 'Obby'}

];

export { treeId, title, rootPersonId, persons };
