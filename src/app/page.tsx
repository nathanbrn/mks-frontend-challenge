'use client'

import { DrawerComponent } from "@/components/Drawer/indext";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Product } from "@/types/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productsCart, setProductsCart] = useState<Product[] | null>(null);

  function openDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  useEffect(() => {
    (async () => {
      await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC').then((product) => {
        setProducts(product.data.products);
      }).catch((error) => {
        console.log(error.message);
      })
    })();
  }, []);

  return (
    <>
      <Header ProductsInCart={productsCart} openDrawer={openDrawer} />
      <Main products={products}  setProductsCart={setProductsCart} productsCart={productsCart}/>
      <DrawerComponent open={open} closeDrawer={closeDrawer} productsCart={productsCart} />
      <ToastContainer />
    </>
  );
}

