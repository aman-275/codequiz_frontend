import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
};

export default function LayoutView({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
