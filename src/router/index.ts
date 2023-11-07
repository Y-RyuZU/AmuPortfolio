// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

// 動的インポート用のページコンポーネントを設定
const pageComponents = import.meta.glob('../pages/**/*.vue');

const routes = Object.keys(pageComponents).map((path) => {
    const name = path.replace(/\.\.\/pages|\.vue$/g, '').toLowerCase();
    return {
        path: name === '/home' ? '/' : name,
        component: () => pageComponents[path](),
    };
});

// ルーターを作成
const RouterView = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default RouterView;
