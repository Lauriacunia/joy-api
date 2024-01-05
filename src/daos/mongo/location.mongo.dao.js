import BaseMongoDao from "./base.mongo.dao.js";
import locationModel from "../../models/location.model.js";

export class LocationMongoDao extends BaseMongoDao {
  constructor() {
    super(locationModel);
  }
}
