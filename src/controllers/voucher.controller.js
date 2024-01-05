import { VoucherService } from "../services/voucher.service.js";
const voucherService = new VoucherService();

class VoucherController {
  async getAll(req, res) {
    try {
      const vouchers = await voucherService.getAll();
      vouchers
        ? res.status(200).json({
            status: "success",
            payload: vouchers,
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
      const voucher = await voucherService.getOne(id);
      voucher
        ? res.status(200).json({
            status: "success",
            payload: voucher,
          })
        : res.status(404).json({
            status: "error",
            message: "Sorry, no Voucher found by id: " + id,
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
      const voucherCreated = await voucherService.create(req.body);
      res.status(201).json({
        status: "success",
        payload: voucherCreated,
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
      const voucherUpdated = await voucherService.update(id, req.body);
      res.status(200).json({
        status: "success",
        payload: voucherUpdated,
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
      const voucherDeleted = await voucherService.delete(id);
      res.status(200).json({
        status: "success",
        payload: voucherDeleted,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
}

const voucherController = new VoucherController();
const { getAll, getOne, create, update, deleteOne } = voucherController;

export { getAll, getOne, create, update, deleteOne };
