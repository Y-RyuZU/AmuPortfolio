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
    path: '/datespot/:chara', // ':spot' は動的パラメータです。
    component: () => import('../pages/DateSpot.vue')
});

let savedScrollPosition = 0; // トップページのスクロール位置を保持する変数

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 他のルートから "/" に戻る際、保存されたスクロール位置を使用
        if (to.path === '/' && from.path !== '/') {
            return { top: savedScrollPosition };
        }

        // "/" から他のルートに移動する際、現在のスクロール位置を保存
        if (from.path === '/') {
            savedScrollPosition = window.scrollY;
        }

        // デフォルトではページのトップにスクロール
        return { top: 0 };
    },
});
export default router;
