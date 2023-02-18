import express from 'express';

import { Affmenu } from '../controllers/menu';
  
const router = express.Router();

router
  .route('/menus')
  .get(Affmenu);

  router
  .route('/menus/:id')
  .get(getmenuById);
  
export default router;