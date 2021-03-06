import { gql } from "@apollo/client";

export const serieIdActivity = gql`
# Currently there isn't a activity relation on the MediaType
query ($mediaId: Int) {
  Page {
    activities (mediaId: $mediaId, type: MEDIA_LIST, sort: ID_DESC) {
      ... on ListActivity {
        id
        user {
          id
          name
        }
        media {
          id
          
        }
      }
    }
  }
}`;
