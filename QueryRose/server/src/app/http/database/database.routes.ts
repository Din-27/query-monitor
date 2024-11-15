import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './database.controller';

const defaultRouter = Router();

defaultRouter.get('/', requestHandler(controller.getDatabases));

export default Router().use('/database', defaultRouter);
