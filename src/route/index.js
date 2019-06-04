import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './constantRoutes'

Vue.use(Router);

const initRoutes = () => {
  return new Router({
    routes: constantRoutes,
  });
};

export function cleanRouter() {
  let newRouter = new Router([]);
  _router.matcher = newRouter.matcher; // reset router
}

const _router = initRoutes();

export default _router;
