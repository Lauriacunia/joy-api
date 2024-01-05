import BaseMongoDao from "./base.mongo.dao.js";
import voucherModel from "../../models/voucher.model.js";

export class VoucherMongoDao extends BaseMongoDao {
  constructor() {
    super(voucherModel);
  }
}
