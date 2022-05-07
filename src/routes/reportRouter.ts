import express from "express";
import ReportController from "../controllers/reportController";

const GET_BY_COMPID_PATH: string = "/comp/:compid";

const CREATE_PATH: string = "/:compid";
const DELETE_PATH: string = "/:id";

const router = express.Router();

router.get(GET_BY_COMPID_PATH, ReportController.getAllReportsByCompanyID);
router.post(CREATE_PATH, ReportController.compileReport);
router.delete(DELETE_PATH, ReportController.deleteReport);

export default router;