'use client'

import { DrawerComponent } from "@/components/Drawer/indext";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Product } from "@/types/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';
import React from "react";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[] | null>(null);
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

  useEffect(() => {
    (async () => {
      await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC').then((product) => {
        setProducts(product.data.products);
      }).catch((error) => {
        console.log(error.message);
      })
    })();
  }, []);

  return (
    <>
      <Header ProductsInCart={productsCart} openDrawer={openDrawer} />
      <Main total={total} setTotal={setTotal} products={products} setProductsCart={setProductsCart} productsCart={productsCart} />
      <DrawerComponent showAlert={showAlert} total={total} setTotal={setTotal} open={open} closeDrawer={closeDrawer} productsCart={productsCart} setProductsCart={setProductsCart} />
      <ToastContainer />
      <Dialog
        open={openAlert}
        keepMounted
        onClose={hideAlert}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Compra Finalizada</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <br />
            <p>Obrigado por comprar!</p>
            <br />
            <p>Sua compra deu um total de: R${total.toLocaleString('BR')}</p>
            <br />
            <p>Os itens comprados foram:</p>
            <ul>
              {productsCart?.map(({ name, id }: Product, index) => (
                <li style={{ marginLeft: 8}} key={id}>{index+1} - {name}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={hideAlert}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

