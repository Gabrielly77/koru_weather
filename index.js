import { getFirstValidTemperature } from './solution.js';

getFirstValidTemperature()
  .then(temp => {
    if (temp !== null) {
      console.log('Temperatura atual:', temp, '°C');
    } else {
      console.log('Não foi possível obter a temperatura.');
    }
  });
  