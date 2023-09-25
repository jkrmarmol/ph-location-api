import Provinces from '../json/provinces.json';
import type { IProvinceType } from '../typings/interfaces';


const provinces: Promise<IProvinceType[]> = new Promise((resolve, reject) => {
  if (Provinces) {
    resolve(Provinces);
  } else {
    reject(new Error('Failed to load provinces data'));
  }
})

export default provinces;