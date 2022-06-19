import { useQuery } from "@apollo/client";
import { AnilistGraphQLClient } from "./anilistapi"
import { SerieList } from "./SerieList"
import { browseSeries, seriesSearch } from "./service/querys";
import NavBar from "./Navbar";

export function Anilist() {
    const { loading, error, data } = useQuery(browseSeries, {
        variables: {
            /*query: "Bleach"*/
            page: 1
        }
    });

    if (loading) {
        return (<div className="h-screen w-screen flex items-center justify-center">
            <p className="mb-2 font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900 via-amber-600 animate-bounce">Loading...</p></div>);
    }

    if (error) {
        return <p>an error occurred...</p>;
    }

    console.log(data);
    return (<div className="flex">
        <NavBar />
        <SerieList data={data} />
    </div>) // <AnilistGraphQLClient />
}