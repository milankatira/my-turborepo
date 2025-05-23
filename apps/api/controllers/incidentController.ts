import type { Request, Response } from "express";
import { incidentService } from "../services/incidentService";

export async function getAllIncidents(req: Request, res: Response) {
  try {
    const userId = req.userId!;
    const incidents = await incidentService.getAllIncidents(userId);
    return res.json({ incidents });
  } catch (error) {
    console.error("Error getting incidents:", error);
    return res.status(500).json({ error: "Failed to get incidents" });
  }
}

export async function getIncidentDetails(req: Request, res: Response) {
  try {
    const { incidentId } = req.params;
    if (!incidentId) {
      return res.status(400).json({ error: "Incident ID is required" });
    }
    const incident = await incidentService.getIncidentDetails(incidentId);
    if (!incident) {
      return res.status(404).json({ error: "Incident not found" });
    }
    return res.json(incident);
  } catch (error) {
    console.error("Error getting incident details:", error);
    return res.status(500).json({ error: "Failed to get incident details" });
  }
}

export async function updateIncident(req: Request, res: Response) {
  try {
    const { incidentId } = req.params;
    const { status } = req.body;
    if (!incidentId || !status) {
      return res
        .status(400)
        .json({ error: "Incident ID and status are required" });
    }
    const updatedIncident = await incidentService.updateIncident(
      incidentId,
      status,
    );
    return res.json(updatedIncident);
  } catch (error) {
    console.error("Error updating incident:", error);
    return res.status(500).json({ error: "Failed to update incident" });
  }
}

export async function deleteIncident(req: Request, res: Response) {
  try {
    const { incidentId } = req.params;
    if (!incidentId) {
      return res.status(400).json({ error: "Incident ID is required" });
    }
    await incidentService.deleteIncident(incidentId);
    return res.json({ message: "Incident deleted successfully" });
  } catch (error) {
    console.error("Error deleting incident:", error);
    return res.status(500).json({ error: "Failed to delete incident" });
  }
}
