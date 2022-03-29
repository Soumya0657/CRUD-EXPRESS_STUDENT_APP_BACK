const { Router } = require("express");
const router = Router();
const {
  createStudents,
  getAllstudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/students");
router.route("").post(createStudents).get(getAllstudents);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);
module.exports = router;
