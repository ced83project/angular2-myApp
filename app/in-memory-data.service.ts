export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice', power: '1'},
      {id: 12, name: 'Narco', power: '9'},
      {id: 13, name: 'Bombasto', power: '3'},
      {id: 14, name: 'Celeritas', power: '4'},
      {id: 15, name: 'Magneta', power: '8'},
      {id: 16, name: 'RubberMan', power: '2'},
      {id: 17, name: 'Dynama', power: '5'},
      {id: 18, name: 'Dr IQ', power: '3'},
      {id: 19, name: 'Magma', power: '9'},
      {id: 20, name: 'Tornado', power: '2'}
/** 
      {id: 11, name: 'Mr. Nice', power: 'Really Smart'},
      {id: 12, name: 'Narco', power: 'Super Flexible'},
      {id: 13, name: 'Bombasto', power: 'Super Hot'},
      {id: 14, name: 'Celeritas', power: 'Weather Changer'},
      {id: 15, name: 'Magneta', power: 'Really Smart'},
      {id: 16, name: 'RubberMan', power: 'Super Flexible'},
      {id: 17, name: 'Dynama', power: 'Super Hot'},
      {id: 18, name: 'Dr IQ', power: 'Weather Changer'},
      {id: 19, name: 'Magma', power: 'Really Smart'},
      {id: 20, name: 'Tornado', power: 'Super Flexible'}
*/
    ];
    return {heroes};
  }
}
