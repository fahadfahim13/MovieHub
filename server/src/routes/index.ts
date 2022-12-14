import express from 'express';
import authRoute from './AuthRoute';
import movieRoute from './MovieRoute';
import actorRoute from './ActorRoutes';
import categoryRoutes from './CategoryRoutes';

const router = express.Router();

const allRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/movies',
    route: movieRoute,
  },
  {
    path: '/actors',
    route: actorRoute,
  },
  {
    path: '/categories',
    route: categoryRoutes,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
