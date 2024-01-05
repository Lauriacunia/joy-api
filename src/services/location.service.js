import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { locationDao } = getDAOS();

export class LocationService extends BaseService {
  constructor() {
    super(locationDao);
  }
}
