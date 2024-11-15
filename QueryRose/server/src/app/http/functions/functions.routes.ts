import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './functions.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getFunctions));

export default Router().use('/functions', defaultRouter);
