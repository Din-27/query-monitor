import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './events.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getEvents));

export default Router().use('/events', defaultRouter);
