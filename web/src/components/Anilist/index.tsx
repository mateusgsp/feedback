import { AnilistGraphQLClient } from "./anilistapi"

function handleError(error: any): void { }
function handleData(data: any): void { }

export function Anilist() {
    AnilistGraphQLClient({ query: "", handleData: handleData, handleError: handleError });
    return <div></div>
}