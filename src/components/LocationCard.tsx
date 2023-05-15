import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  location: {
    name: string;
    image: {
      asset: {
        title: string;
        path: string;
        url: string;
        description: string;
      };
    };
    description: string;
    slug: {
      current: string;
    };
    hours: {
      days: string;
      hours: string;
    }[];
    phone_number: string;
    hidden: string;
    address: {
      street_address: string;
      city_state_zip: string;
    };
  };
};

const LocationCard = ({
  location: {
    name,
    image,
    description,
    slug,
    hours,
    phone_number,
    hidden,
    address,
  },
}: Props) => {
  const winDim = useWindowDimensions();
  console.log(winDim);

  if (winDim.width < 600)
    return (
      <div
        style={{
          backgroundColor: "whitesmoke",
          color: "black",
          width: "100%",
          display: "flex",
          minHeight: 100,
          borderRadius: 25,
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{ minWidth: 160, position: "relative", overflow: "hidden" }}
        >
          <Image
            alt={name}
            src={image.asset.url}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <div
            style={{
              zIndex: 1,
              position: "absolute",
              height: "100%",
              width: "100%",
              // left: "0%",
              // right: "60.11%",
              // top: "0%",
              // bottom: "0%",

              background:
                "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0), #ffffff58 60%, #f5f5f5 80%)",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: 4,
            marginLeft: "-50px",
            zIndex: 100,
          }}
        >
          <h3
            style={{
              margin: 2,
              fontFamily: "Cinzel, sans-serif",
              fontSize: 12,
            }}
          >
            {name}
          </h3>
          <h5 style={{ fontFamily: "Cinzel, sans-serif", fontSize: 12 }}>
            <Link
              href={`https://www.google.com/maps/search/${name}+${address.city_state_zip}+${address.street_address}`}
            >
              {address.street_address}
              <br />
              {address.city_state_zip}
            </Link>
          </h5>
          {/* <p style={{ fontFamily: "Mulish, sans-serif", fontSize: 10 }}>
            {description}
          </p> */}
          <h4 style={{ fontFamily: "Cinzel, sans-serif", fontSize: 12 }}>
            <Link href={`tel:${phone_number}`}>{phone_number}</Link>
          </h4>
          <ul
            style={{
              listStyle: "none",
              width: "100%",
              textAlign: "center",
              margin: 4,
              fontFamily: "Bodoni Moda, serif",
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            Hours:
            {hours.length == 1 ? (
              <li>Everyday:&nbsp; {hours[0].hours}</li>
            ) : (
              <>
                {hours.map((hour) => (
                  <li>
                    {hour.days} &nbsp; &nbsp; {hour.hours}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    );

    
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        color: "black",
        width: "100%",
        display: "flex",
        minHeight: 140,
        borderRadius: 25,
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div style={{ minWidth: 240, position: "relative", overflow: "hidden" }}>
        <Image
          alt={name}
          src={image.asset.url}
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
        <div
          style={{
            zIndex: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
            // left: "0%",
            // right: "60.11%",
            // top: "0%",
            // bottom: "0%",

            background:
              "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0), #ffffff58 60%, #f5f5f5 80%)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 10,
          marginLeft: "-50px",
          zIndex: 100,
        }}
      >
        <h3 style={{ margin: 4, fontFamily: "Cinzel, sans-serif" }}>{name}</h3>
        <h4 style={{ fontFamily: "Cinzel, sans-serif" }}>
          <Link href={`tel:${phone_number}`}>{phone_number}</Link>
        </h4>
        <h5 style={{ fontFamily: "Cinzel, sans-serif" }}>
          <Link
            href={`https://www.google.com/maps/search/${name}+${address.city_state_zip}+${address.street_address}`}
          >
            {address.street_address}
            <br />
            {address.city_state_zip}
          </Link>
        </h5>
        <p style={{ fontFamily: "Mulish, sans-serif", fontSize: 14 }}>
          {description}
        </p>
        <ul
          style={{
            listStyle: "none",
            width: "100%",
            textAlign: "center",
            margin: 8,
            fontFamily: "Bodoni Moda, serif",
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          Hours:
          {hours.length == 1 ? (
            <li>Everyday:&nbsp; {hours[0].hours}</li>
          ) : (
            <>
              {hours.map((hour) => (
                <li>
                  {hour.days} &nbsp; &nbsp; {hour.hours}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LocationCard;
