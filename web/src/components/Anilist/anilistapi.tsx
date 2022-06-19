import axios from 'axios';

export const AnilistApiBase = axios.create({
    baseURL: "https://graphql.anilist.co",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    /*proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 9000,
        auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
        }
    }*/
});

interface AnilistGraphQLClientProps {
    query: string;
    handleError: (error: any) => void;
    handleData: (data: any) => void;
}

export function AnilistGraphQLClient({ query, handleError, handleData }: AnilistGraphQLClientProps) {
    var query = `
query ($id: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
  }
}
`;

    if (true) return;

    var variables = {
        id: 15125
    };

    AnilistApiBase.post('', {
        query: query,
        variables: variables
    }).then(function (response) { handleData(response); })
        .catch((error) => handleError(error));
}