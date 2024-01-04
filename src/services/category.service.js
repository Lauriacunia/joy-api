import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { categoryDao } = getDAOS();

export class CategoryService extends BaseService {
  constructor() {
    super(categoryDao);
  }
}
