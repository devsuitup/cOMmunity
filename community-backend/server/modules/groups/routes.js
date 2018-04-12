import { Router } from "express";
import * as GroupController from "./controller";

const routes = new Router();

routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/meetings/new', GroupController.createNewGroupMeeting);
// routes.get('/meetings', MeetingController.getAllMeetings);

export default routes;
