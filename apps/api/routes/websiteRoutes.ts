import { Router } from "express";
import {
  createHeartbeat,
  createMaintenanceWindow,
  createWebsite,
  deleteWebsite,
  getAllMaintenanceWindows,
  getAllWebsites,
  getHeartbeat,
  getHeartbeatDetails,
  getWebsiteStatus,
  updateHeartbeatStatus,
} from "../controllers/websiteController";
import { authMiddleware } from "../middleware";

const router = Router();

// @ts-expect-error - TODO: fix this type error
router.post("/website", authMiddleware, createWebsite);

router.get(
  "/website/status",
  // @ts-expect-error - TODO: fix this type error
  getWebsiteStatus,
);

// @ts-expect-error - TODO: fix this type error
router.get("/websites", authMiddleware, getAllWebsites);

// @ts-expect-error - TODO: fix this type error
router.delete("/website", authMiddleware, deleteWebsite);

// @ts-expect-error - TODO: fix this type error
router.post("/heartbeat", authMiddleware, createHeartbeat);

// @ts-expect-error - TODO: fix this type error
router.post("/maintenance-window", authMiddleware, createMaintenanceWindow);

// @ts-expect-error - TODO: fix this type error
router.get("/maintenance-windows", authMiddleware, getAllMaintenanceWindows);

router.get(
  "/heartbeat",
  // @ts-expect-error - TODO: fix this type error
  authMiddleware,
  getHeartbeat,
);

router.get(
  "/heartbeat/:status/:heartbeatId",
  // @ts-expect-error - TODO: fix this type error
  updateHeartbeatStatus,
);

router.get(
  "/heartbeat-details/:heartbeatId",
  // @ts-expect-error - TODO: fix this type error
  authMiddleware,
  getHeartbeatDetails,
);

export default router;
