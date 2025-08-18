import express from 'express';
import v1Router from './v1/v1Routes.js'; // Assuming you have a v1 router
import v2Router from './v2/v2Routes.js'; // Assuming you have a v2 router

const router=express.Router();



router.use('/v1',v1Router);
router.use('/v2',v2Router);


export default router;