import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './query.controller';

const defaultRouter = Router();

defaultRouter.post('/', requestHandler(controller.queryExecute));

export default Router().use('/query', defaultRouter);
