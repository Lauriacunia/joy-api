import CONFIG from "../config/config.js";

let categoryDao;
let locationDao;
let voucherDao;
let userDao;

switch (CONFIG.DATASOURCE) {
  case "MYSQL": {
    // TODO: conection
    break;
  }
  case "MONGO": {
    const { CategoryMongoDao } = await import("./mongo/category.mongo.dao.js");
    categoryDao = new CategoryMongoDao();
    const { LocationMongoDao } = await import("./mongo/location.mongo.dao.js");
    locationDao = new LocationMongoDao();
    const { VoucherMongoDao } = await import("./mongo/voucher.mongo.dao.js");
    voucherDao = new VoucherMongoDao();
    const { UserMongoDao } = await import("./mongo/user.mongo.dao.js");
    userDao = new UserMongoDao();
    break;
  }
  default: {
    throw new Error("Error. DATASOURCE is requiered");
  }
}

const getDAOS = () => {
  return {
    categoryDao,
    locationDao,
    voucherDao,
    userDao,
  };
};

export default getDAOS;
