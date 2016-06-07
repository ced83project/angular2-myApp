export class InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
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
