import { Router } from 'express';

import Appointments from './appointments.routes';
import Usurs from './users.routes';

const routes = Router();

routes.use('/appointments', Appointments);
routes.use('/users', Usurs);

export default routes;
