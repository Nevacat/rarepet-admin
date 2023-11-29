import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Layout from '../components/Common/Layout';

function RotuerHandler() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default RotuerHandler;
