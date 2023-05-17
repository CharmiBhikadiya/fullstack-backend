const express = require("express");
const ProjectController = require("../controllers/project");
const router = express.Router();

router.get("/", ProjectController.getProjects);
router.get("/:id", ProjectController.getProjectById);
router.get("/", ProjectController.createProject);

module.exports = router;