import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const winDim = useWindowDimensions();

  if (winDim.width < 600)
    return (
      <div
        style={{
          backgroundColor: "#6A77FD",
          width: "100%",
          display: "flex",
          height: "50px",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <div
            style={{
              width: 200,
              position: "relative",
              marginLeft: 14,
              height: "100%",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              fill
              sizes="100%"
              style={{ objectFit: "contain" }}
              quality={100}
              
            />
          </div>
        </Link>
        <div style={{ height: "100%" }}>
          <nav
            style={{
              display: "flex",
              gap: 20,
              height: "100%",
              alignItems: "center",
              marginRight: 24,
            }}
          >
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </div>
    );

  return (
    <div
      style={{
        backgroundColor: "#6A77FD",
        width: "100%",
        display: "flex",
        height: "100px",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <div
          style={{
            width: 400,
            position: "relative",
            marginLeft: 40,
            height: "100%",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            fill
            sizes="100%"
            style={{ objectFit: "contain" }}
            quality={100}
          />
        </div>
      </Link>
      <div style={{ height: "100%" }}>
        <nav
          style={{
            display: "flex",
            gap: 20,
            height: "100%",
            alignItems: "center",
            marginRight: 40,
          }}
        >
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
