// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

// 動的インポート用のページコンポーネントを設定
const pageComponents = import.meta.glob('../pages/**/*.vue');

// パス名を抽出してルートをマッピングするための関数を定義
const getPathName = (path: string) => {
    // /pages/Index.vue の場合は '/' にマッピングする
    if (path.endsWith('/Index.vue')) {
        return '/';
    }
    // パスから /pages と .vue を除去してパス名を取得
    return path.replace(/(\.\.\/pages|\.vue$)/g, '').toLowerCase();
};

// ルートを生成
const routes = Object.keys(pageComponents).map((path) => {
    const pathName = getPathName(path); // パス名を取得
    // '/index' の場合は '/' にマッピングする特別な処理を行う
    const routePath = pathName === '/index' ? '/' : pathName;
    return {
        path: routePath,
        component: () => pageComponents[path](),
    };
});

// ルーターを作成
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
