'use client'

import { DrawerComponent } from "@/components/Drawer/indext";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Product } from "@/types/Product";
import { Drawer } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [products, setProducts] = useState<Product[] | null>(null);

  function openDrawer() {
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
  }

  function addNumber() {
    setCount(count + 1);
  }

  function rmvNumber() {
    setCount(count === 0 ? count : count - 1);
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
      <Header openDrawer={openDrawer} />
      <Main products={products} />
      <DrawerComponent open={open} closeDrawer={closeDrawer} count={count} addNumber={addNumber} rmvNumber={rmvNumber} />
    </>
  );
}

