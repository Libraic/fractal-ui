import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout.tsx';
import { COURSES, PROBLEMS } from './routes.ts';
import { Subjects } from '../features/subjects/components/Subjects.tsx';
import { ProblemsPage } from '../features/problems/pages/ProblemsPage.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to={COURSES} replace />} />
        <Route path={COURSES} element={<Subjects />} />
        <Route path={PROBLEMS} element={<ProblemsPage />} />
      </Route>
    </Routes>
  );
}
