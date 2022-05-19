import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../../home/pages/index/Home'));
const WarriorIndexPage = lazy(() => import('../../../warriors/pages/list/WarriorListPage'));
const WarriorDetailPage = lazy(() => import('../../../warriors/pages/detail/WarriorDetailPage'));

export function Router(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/warriors" element={<WarriorIndexPage />} />
        <Route path="/warriors/detail/:idWarrior" element={<WarriorDetailPage />} />
      </Routes>
    </Suspense>
  );
}
