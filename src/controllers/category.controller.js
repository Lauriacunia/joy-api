import { CategoryService } from "../services/category.service.js";
const categoryService = new CategoryService();

class CategoryController {
  async getAll(req, res) {
    try {
      req.session.count = req.session.count ? req.session.count + 1 : 1;
      console.log("req.session.count", req.session.count);
      const categories = await categoryService.getAll();
      categories
        ? res.status(200).json({
            status: "success",
            payload: categories,
          })
        : res.status(200).json({ status: "success", payload: [] });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const category = await categoryService.getOne(id);
      category
        ? res.status(200).json({
            status: "success",
            payload: category,
          })
        : res.status(404).json({
            status: "error",
            message: "Sorry, no Category found by id: " + id,
            payload: {},
          });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async create(req, res) {
    try {
      const categoryCreated = await categoryService.create(req.body);
      res.status(201).json({
        status: "success",
        payload: categoryCreated,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      //TODO: validate param
      const categoryUpdated = await categoryService.update(id, req.body);
      res.status(200).json({
        status: "success",
        payload: categoryUpdated,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
  async deleteOne(req, res) {
    try {
      const id = req.params.id;
      const categoryDeleted = await categoryService.delete(id);
      res.status(200).json({
        status: "success",
        payload: categoryDeleted,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
}

const categoryController = new CategoryController();
const { getAll, getOne, create, update, deleteOne } = categoryController;

export { getAll, getOne, create, update, deleteOne };
