import { Router, requestHandler } from '@knittotextile/knitto-http';
import controller from './views.controller';

const defaultRouter = Router();

defaultRouter.get('/:dbName', requestHandler(controller.getViews));

export default Router().use('/views', defaultRouter);
