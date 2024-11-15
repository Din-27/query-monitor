import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './stored-procedure.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getStoredProcedure));

export default Router().use('/stored-procedure', defaultRouter);
