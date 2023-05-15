import Image from "next/image";
import React, { useContext } from "react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  navbar: boolean;
};

const Layout = ({ children, navbar }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      {navbar && (
        <header style={{ width: "100%" }}>
          <Navbar />
        </header>
      )}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -3,
        }}
      >
        <Image
          src="/images/rolls.jpg"
          alt="Picture of the author"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
      <main
        style={{
          display: "flex",
          flex: '1 1 auto',
          width: "100%",
          justifyContent:'center'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
