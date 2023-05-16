import { useState } from "react";
import { GetStaticProps } from "next";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout";

import client from "@/apollo";
import { GET_LOCATIONS } from "@/apollo/gql";

import "@/styles/globals.css";

export default function App(props: any) {
  const [navbar, setNavbar] = useState(true);
  const [locations, setLocations] = useState({});
  return (
    <Layout navbar={navbar}>
      <props.Component
        {...props.pageProps}
        navbar={navbar}
        setNavbar={setNavbar}
        locations={locations}
        setLocations={setLocations}
      />
    </Layout>
  );
}

export const getInitialProps: any = async ({ params }) => {
  const results = await client.query({
    query: GET_LOCATIONS,
  });
  if (!results) {
    return { notFound: true };
  }

  return {
    props: {
      data: results.data,
    },
    revalidate: 600,
  };
};
