import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { voucherDao } = getDAOS();

export class VoucherService extends BaseService {
  constructor() {
    super(voucherDao);
  }
}
