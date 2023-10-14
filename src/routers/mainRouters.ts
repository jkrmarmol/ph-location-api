import express, { Request, Response, NextFunction } from 'express';
import { region, provinces, municipality, barangay } from '../utils';


const mainRouters = express.Router();

mainRouters.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await region)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
      next(new Error(err.name))
    }
  }
})

mainRouters.get('/:region', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { region } = req.params;
    const getSelectedRegion = (await provinces).filter((items) => {
      return items.reg_code === region
    })
    return res.json(getSelectedRegion)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
      next(new Error(err.name))
    }
  }
})

mainRouters.get('/:region/:province', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { region, province } = req.params;
    const getSelectedProvince = (await municipality).filter((item) => {
      return item.prov_code === province
    });
    return res.json(getSelectedProvince)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
      next(new Error(err.name))
    }
  }
})

mainRouters.get('/:region/:province/:municipality', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { municipality } = req.params;
    const getSelectedMunicipality = (await barangay).filter((item) => {
      return item.mun_code === municipality;
    })
    return res.json(getSelectedMunicipality)
  } catch (err) {
    if (err instanceof Error) {
      console.error(err)
      next(new Error(err.name))
    }
  }
})

export default mainRouters;