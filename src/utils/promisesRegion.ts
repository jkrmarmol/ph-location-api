import Region from '../json/region.json';
import type { IRegionType } from '../typings/interfaces';


const region: Promise<IRegionType[]> = new Promise((resolve, reject) => {
  if (Region) {
    resolve(Region);
  } else {
    reject(new Error('Failed to load region data'));
  }
})

export default region;