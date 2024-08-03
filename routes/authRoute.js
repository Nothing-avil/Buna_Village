import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requiresSignIn } from "../middlewares/authMiddleware.js";

//router obj
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/signup", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//forgot password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requiresSignIn, isAdmin, testController);

//protected route auth
router.get("/customer-auth", requiresSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected admin-route auth
router.get("/admin-auth", requiresSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requiresSignIn, updateProfileController);

//orders
router.get("/orders", requiresSignIn, getOrdersController);

//all orders
router.get("/all-orders", requiresSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requiresSignIn,
  isAdmin,
  orderStatusController
);

export default router;
