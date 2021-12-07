import { Router } from 'express';
import * as PageController from '../controllers/page.controller';
import * as SerachController from '../controllers/search.controller';

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', SerachController.search);

export default router;