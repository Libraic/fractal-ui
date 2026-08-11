import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout.tsx';
import { COURSES, PROBLEMS, TOPIC_PROBLEMS } from './routes.ts';
import { TopicPage } from '../features/topics/pages/TopicPage.tsx';
import { ProblemsPage } from '../features/problems/pages/ProblemsPage.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={COURSES} replace />} />
        <Route path={COURSES} element={<TopicPage />} />
        <Route path={PROBLEMS} element={<ProblemsPage />} />
        <Route path={TOPIC_PROBLEMS} element={<ProblemsPage />} />
      </Route>
    </Routes>
  );
}
