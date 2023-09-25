import Barangay from '../json/barangay.json';
import type { IBarangayType } from '../typings/interfaces';


const barangay: Promise<IBarangayType[]> = new Promise((resolve, reject) => {
  if (Barangay) {
    resolve(Barangay);
  } else {
    reject(new Error('Failed to load barangay data'));
  }
})

export default barangay;