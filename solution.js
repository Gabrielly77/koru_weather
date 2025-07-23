import {
  getFromWeatherA,
  getFromWeatherB,
  getFromWeatherC,
} from './weatherServices.js';

export async function getFirstValidTemperature() {
  try {
    const temperature = await Promise.any([
      getFromWeatherA(),
      getFromWeatherB(),
      getFromWeatherC(),
    ]);
    // console.log({temperature})
    return temperature;
  } catch (error) {
    if (error instanceof AggregateError) { // caso todas as 3 requisições falharam
      return null;
    }
    throw error; // caso ocorra um erro inesperado
  }
}
