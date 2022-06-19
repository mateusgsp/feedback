import { SerieListItem, SerieListItemProps } from "./SerieListItem";

interface SerieListProps {
    data: any;
}

export function SerieList({ data }: SerieListProps) {
    return <div className="mt-16 p-4 w-screen">
        <header>
            <h2 className=" mx-4 mb-2 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900 via-amber-600">Explorar Series</h2>
        </header>
        <div className="w-full flex flex-wrap gap-2 justify-center">
            {data.Page.media.map((media: SerieListItemProps) => {
                const title: string = media.title.romaji;
                console.log(media.title.romaji);
                return <SerieListItem {...media} />
            })}
        </div>
    </div>
}