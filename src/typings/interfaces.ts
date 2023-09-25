export interface CustomErrorHandling extends Error {
  status: number;
}

export interface IRegionType {
  name: string;
  reg_code: string | number;
}
export interface IProvinceType {
  name: string;
  reg_code: string | number;
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