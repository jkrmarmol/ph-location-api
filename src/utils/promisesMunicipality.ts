import Municipality from '../json/municipality.json';
import type { IMunicipalityType } from '../typings/interfaces';


const municipality: Promise<IMunicipalityType[]> = new Promise((resolve, reject) => {
  if (Municipality) {
    resolve(Municipality);
  } else {
    reject(new Error('Failed to load municipality data'));
  }
})

export default municipality;