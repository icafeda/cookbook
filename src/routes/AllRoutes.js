import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProductList,
  ProductDetail,
  Login,
  Register,
  CartPage,
  OrderPage,
  PageNotFound,
} from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:idRoute" element={<ProductDetail />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
