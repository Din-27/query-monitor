import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './tables.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getTables));

export default Router().use('/tables', defaultRouter);
