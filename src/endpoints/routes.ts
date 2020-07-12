import express, { Router } from 'express';

import userProfileRoute from './userProfiles/routes'


const router: Router = express.Router();

router.use('/userProfiles', userProfileRoute)

export default router
