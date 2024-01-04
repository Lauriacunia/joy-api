import BaseMongoDao from "./base.mongo.dao.js";
import categoryModel from "../../models/category.model.js";

export class CategoryMongoDao extends BaseMongoDao {
  constructor() {
    super(categoryModel);
  }
}
