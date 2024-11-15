import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './triggers.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getTriggers));

export default Router().use('/triggers', defaultRouter);
