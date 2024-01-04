import CONFIG from "../config/config.js";

let categoryDao;

switch (CONFIG.DATASOURCE) {
  case "MYSQL": {
    // TODO: conection
    break;
  }
  case "MONGO": {
    const { CategoryMongoDao } = await import("./mongo/category.mongo.dao.js");
    categoryDao = new CategoryMongoDao();

    break;
  }
  default: {
    throw new Error("Error. DATASOURCE is requiered");
  }
}

const getDAOS = () => {
  return {
    categoryDao,
  };
};

export default getDAOS;
