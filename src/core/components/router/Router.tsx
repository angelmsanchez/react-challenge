import React, { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../../../home/pages/index/Home'));
const StarWarsIndexPage = lazy(() => import('../../../star-wars/pages/index/StarWarsIndexPage'));
const StarWarsDetailPage = lazy(() => import('../../../star-wars/pages/detail/StarWarsDetailPage'));

export function Router(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/star-wars" element={<StarWarsIndexPage />} />
        <Route path="/star-wars/detail/:idStarWar" element={<StarWarsDetailPage />} />
      </Routes>
    </Suspense>
  );
}
