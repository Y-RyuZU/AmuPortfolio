import { createRouter, createWebHistory } from 'vue-router';

const pageComponents = import.meta.glob('../pages/**/*.vue');

const getPathName = (path: string) => {
    if (path.endsWith('/Index.vue')) {
        return '/';
    }
    return path.replace(/(\.\.\/pages|\.vue$)/g, '').toLowerCase();
};

// 既存のルートを取得
const routes = Object.keys(pageComponents).map((path) => {
    const pathName = getPathName(path); // パス名を取得

    const routePath = pathName === '/index' ? '/' : pathName;
    return {
        path: routePath,
        component: () => pageComponents[path](),
    };
});

routes.push({
    path: '/datespot/:spot', // ':spot' は動的パラメータです。
    component: () => import('../pages/DateSpot.vue')
});

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
