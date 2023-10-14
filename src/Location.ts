import { region, provinces, municipality, barangay } from "./utils";
import type { ILocationClass, IRegionType, IProvinceType, IMunicipalityType, IBarangayType } from "./typings/interfaces";


class Location {

  public data: {
    region: Promise<IRegionType[]>;
    provinces: IProvinceType[];
    municipality: IMunicipalityType[];
    barangay: IBarangayType[];

    selectedRegion: IRegionType;
    selectedProvince: IProvinceType;
    selectedMunicipality: IMunicipalityType;
    selectedBarangay: IBarangayType;
  };

  public locationValue: {
    region: string,
    provinces: string,
    municipality: string;
    barangay: string;
  }
  constructor() {
    this.data = {
      region: Promise.resolve([{ name: '', reg_code: '' }]),
      provinces: [],
      municipality: [],
      barangay: [],


      selectedRegion: { name: '', reg_code: '' },
      selectedProvince: { name: '', reg_code: '', prov_code: '' },
      selectedMunicipality: { name: '', prov_code: '', mun_code: '' },
      selectedBarangay: { name: '', mun_code: '' }
    };

    this.locationValue = {
      region: '',
      provinces: '',
      municipality: '',
      barangay: ''
    }
  }

  getRegion(code?: string) {
    if (code) {
      const response = region.then((regItem) => {
        const responseRegItem = regItem.filter((item) => {
          if (code === item.reg_code) {
            this.data.selectedRegion = item;
            this.locationValue.region = item.name
          }
        })
        return this;
      })
    }

    this.data.region = region;
    return this;
  }

  getProvince(code?: string) {
    if (this.data.selectedRegion && !code) {
      const response = provinces.then((provItem) => {
        const responseProvItem = provItem.filter((item) => {
          if (this.data.selectedRegion.reg_code === item.reg_code) {
            this.data.provinces.push(item)
            return this;
          }
        })
      })
    }
    if (this.data.selectedRegion && code) {
      const response = provinces.then((provItem) => {
        const responseProvItem = provItem.filter((item) => {
          if (code === item.prov_code) {
            this.data.selectedProvince = item;
            this.locationValue.provinces = item.name
          }
          if (this.data.selectedRegion.reg_code === item.reg_code) {
            this.data.provinces.push(item)
            return this;
          }

        })
      })
    }
    return this;
  }

  getMunicipality(code?: string) {
    if (this.data.selectedProvince && !code) {
      const response = municipality.then((munItem) => {
        const responseMunItem = munItem.filter((item) => {
          if (this.data.selectedProvince.prov_code === item.prov_code) {
            this.data.municipality.push(item)
            return this;
          }
        })
      })
    }

    if (this.data.selectedProvince && code) {
      const response = municipality.then((munItem) => {
        const responseMunItem = munItem.filter((item) => {
          if (code === item.mun_code) {
            this.data.selectedMunicipality = item;
            this.locationValue.municipality = item.name
          }
          if (this.data.selectedProvince.prov_code === item.prov_code) {
            this.data.municipality.push(item)
            return this;
          }
        })
      })
    }
    return this;
  }

  getBarangay(name?: string) {
    if (this.data.selectedMunicipality && !name) {
      const response = barangay.then((brgyItem) => {
        const responseBrgyItem = brgyItem.filter((item) => {
          if (this.data.selectedMunicipality.mun_code === item.mun_code) {
            this.data.barangay.push(item)
            return this;
          }
        })
      })
    }
    if (this.data.selectedMunicipality && name) {
      const response = barangay.then((brgyItem) => {
        const responseBrgyItem = brgyItem.filter((item) => {
          if (name === item.name) {
            this.data.selectedBarangay = item;
            this.locationValue.barangay = item.name
          }
          if (this.data.selectedMunicipality.mun_code === item.mun_code) {
            this.data.barangay.push(item)
            return this;
          }
        })
      })
    }
    return this;
  }

}

export default Location;