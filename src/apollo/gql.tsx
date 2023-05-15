import { gql } from "@apollo/client";

export const GET_LOCATIONS = gql`
  {
    allLocation {
      name
      image {
        asset {
          title
          path
          url
          description
        }
      }
      description
      slug {
        current
      }
      hours {
        days
        hours
      }
      phone_number
      hidden
      address {
        street_address
        city_state_zip
      }
    }
  }
`;
