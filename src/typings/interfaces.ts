export interface IRegionType {
  name: string;
  reg_code: string | number;
}

export interface IProvinceType {
  name: string;
  reg_code: string | number;
  prov_code: string | number;
}

export interface IMunicipalityType {
  name: string;
  prov_code: string | number;
  mun_code: string | number;
}

export interface IBarangayType {
  name: string;
  mun_code: string | number;
}

export interface ILocationClass {
  data: {
    // region: any;
    // province: IProvinceType | null | any;
  }
}