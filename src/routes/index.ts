import { Router } from 'express';

import Appointments from './appointments.routes';
import Usurs from './users.routes';
import Sessions from './sessions.routes';

const routes = Router();

routes.use('/appointments', Appointments);
routes.use('/users', Usurs);
routes.use('/sessions', Sessions);

export default routes;
