import { Router } from "express";
import * as MeetingController from "./controller";

const routes = new Router();

routes.post('/meetings', MeetingController.createMeeting);
routes.get('/meetings', MeetingController.getAllMeetings);

export default routes;
