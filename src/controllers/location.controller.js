import { LocationService } from "../services/location.service.js";
const locationService = new LocationService();

class LocationController {
  async getAll(req, res) {
    try {
      console.log("getAll controller");
      const categories = await locationService.getAll();
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
      const location = await locationService.getOne(id);
      location
        ? res.status(200).json({
            status: "success",
            payload: location,
          })
        : res.status(404).json({
            status: "error",
            message: "Sorry, no location found by id: " + id,
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
      const locationCreated = await locationService.create(req.body);
      res.status(201).json({
        status: "success",
        payload: locationCreated,
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
      const locationUpdated = await locationService.update(id, req.body);
      res.status(200).json({
        status: "success",
        payload: locationUpdated,
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
      const locationDeleted = await locationService.delete(id);
      res.status(200).json({
        status: "success",
        payload: locationDeleted,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
}

const locationController = new LocationController();
const { getAll, getOne, create, update, deleteOne } = locationController;

export { getAll, getOne, create, update, deleteOne };
