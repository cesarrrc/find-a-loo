import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  navbar: boolean;
  setNavbar: Dispatch<SetStateAction<boolean>>;
};

export default function Home(props: Props) {
  const winDim = useWindowDimensions();
  useEffect(() => {
    props.setNavbar(false);
    return () => {
      props.setNavbar(true);
    };
  }, [props.navbar]);

  if (winDim.width < 600)
    return (
      <>
        <Head>
          <title>Find a Loo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 20,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "#6a77fd",
            maxWidth: 760,
            width: "100%",
            padding: 16,
            border: "1px black solid",
            borderRadius: 25,
            // maxHeight:'600px',
            // overflow: "auto",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "relative",
              height: "100px",
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              fill
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
          <div
            style={{
              // margin: "10px 0 0 0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontSize: 14,
                textAlign: "center",
                fontFamily: "Mulish, sans-serif",
                fontWeight: "200",
              }}
            >
              Life’s been pretty shitty lately. But finding a restroom shouldn’t
              be shitty, too. That’s why at “Find a Loo,” we’re making it our
              business to make finding a place for you to do your business the
              less shitty thing of your day.
            </h3>
            <p
              style={{
                fontSize: 14,
                textAlign: "center",
                marginTop: 24,
                fontFamily: "Mulish, sans-serif",
                fontWeight: "200",
              }}
            >
              Just select a city of choice to do your doo and we’ll come
              through—with the nearest, free public restroom in your area.
              Because we give a shit about where you handle your shit.{" "}
            </p>
            <nav
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "4px",
                marginTop: "40px",
                width: "100%",
              }}
            >
              <Link
                href={"/about"}
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                }}
              >
                ABOUT
              </Link>
              <Link
                href={"/current-location"}
                style={{
                  alignSelf: "center",
                }}
              >
                <button
                  style={{
                    padding: "14px 14px",
                    borderRadius: "50px",
                    backgroundColor: "whitesmoke",
                    color: "#c9af60",
                    fontFamily: "Mulish, sans-serif",
                    fontSize: 16,
                    fontWeight: "bolder",
                    cursor: "pointer",
                  }}
                >
                  FIND LOO NEAR YOU
                </button>
              </Link>
              <Link
                href={"/contact"}
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                }}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </section>
      </>
    );

  return (
    <>
      <Head>
        <title>Find a Loo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section
        style={{
          borderRadius: 25,
          display: "flex",
          flexDirection: "column",
          margin: 20,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          backgroundColor: "#6a77fd",
          maxWidth: 760,
          width: "100%",
          padding: 50,
          border: "1px black solid",
          // maxHeight:'600px',
          // overflow: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "100px",
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            fill
            style={{ objectFit: "contain" }}
            quality={100}
          />
        </div>
        <div
          style={{
            margin: "40px 0 0 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Mulish, sans-serif",
              fontWeight: "200",
            }}
          >
            Life’s been pretty shitty lately. But finding a restroom shouldn’t
            be shitty, too. That’s why at “Find a Loo,” we’re making it our
            business to make finding a place for you to do your business the
            less shitty thing of your day.
          </h3>
          <p
            style={{
              fontSize: 20,
              textAlign: "center",
              marginTop: 40,
              fontFamily: "Mulish, sans-serif",
              fontWeight: "200",
            }}
          >
            Just select a city of choice to do your doo and we’ll come
            through—with the nearest, free public restroom in your area. Because
            we give a shit about where you handle your shit.{" "}
          </p>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            <Link
              href={"/about"}
              style={{
                alignSelf: "center",
              }}
            >
              ABOUT
            </Link>
            <Link
              href={"/current-location"}
              style={{
                alignSelf: "center",
              }}
            >
              <button
                style={{
                  padding: "20px 40px",
                  borderRadius: "50px",
                  backgroundColor: "whitesmoke",
                  color: "#c9af60",
                  fontFamily: "Mulish, sans-serif",
                  fontSize: 18,
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
              >
                FIND LOO NEAR YOU
              </button>
            </Link>
            <Link
              href={"/contact"}
              style={{
                alignSelf: "center",
              }}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
