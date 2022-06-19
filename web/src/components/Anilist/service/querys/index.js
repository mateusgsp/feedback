import { gql } from "@apollo/client";

const INFO_PERSON = gql`
query BrowseSeries($query: String, $type: MediaType) {
    Page {
      media(search: $query, type: $type) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
          large
        }
        format
        type
        averageScore
        popularity
        episodes
        season
        hashtag
        isAdult
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
      }
    }
  }
`;

export default INFO_PERSON;