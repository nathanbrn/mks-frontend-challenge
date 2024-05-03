'use client'

import { DrawerComponent } from "@/components/Drawer/indext";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Product } from "@/types/Product";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { DialogComponent } from "@/components/Dialog";
import { getProducts } from "@/services/ProductsService";

export default function Home() {

  const [open, setOpen] = useState<boolean>(false);
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  const [productsCart, setProductsCart] = useState<Product[] | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  function openDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  function showAlert() {
    setOpenAlert(true);
  }

  function hideAlert() {
    setOpenAlert(false);
    setProductsCart(null);
    setTotal(0);
    setOpen(false);
  }

  return (
    <>
      <Header ProductsInCart={productsCart} openDrawer={openDrawer} />
      <Main isLoading={isLoading} total={total} setTotal={setTotal} products={products ?? []} setProductsCart={setProductsCart} productsCart={productsCart} />
      <DrawerComponent showAlert={showAlert} total={total} setTotal={setTotal} open={open} closeDrawer={closeDrawer} productsCart={productsCart} setProductsCart={setProductsCart} />
      <ToastContainer />
      <DialogComponent hideAlert={hideAlert} openAlert={openAlert} productsCart={productsCart} total={total} />
    </>
  );
}

