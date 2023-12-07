import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login';
import Layout from '../components/Common/Layout';
import BoardPage from '../pages/Board';
import ProductsPage from '../pages/Products';
import OrdersPage from '../pages/Orders';
import AdvertisementPage from '../pages/Adventisement';
import UserPage from '../pages/User';
import AuctionPage from '../pages/Auction';

function RotuerHandler() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="auction" element={<AuctionPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="advertisement" element={<AdvertisementPage />} />
        <Route path="users" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default RotuerHandler;
