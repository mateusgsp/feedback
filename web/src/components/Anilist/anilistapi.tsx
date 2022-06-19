import { useQuery } from "@apollo/client";
import { allSearch, seriesSearch } from "./service/querys";

export function AnilistGraphQLClient() {
    const { loading, error, data } = useQuery(seriesSearch, {
        variables: {
            query: "Bleach"
        }
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>an error occurred...</p>;
    }

    console.log(data);
    return (<></>);
}