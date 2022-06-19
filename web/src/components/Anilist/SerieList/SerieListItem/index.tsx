
export interface SerieListItemProps {
    averageScore: number;
    coverImage: { medium: string, large: string };
    endDate: { year: number, month: number, day: number };
    episodes: number;
    format: string;
    hashtag: string;
    id: number;
    isAdult: boolean;
    popularity: number;
    season: string;
    startDate: { year: number, month: number, day: number };
    title: { romaji: string, english: string, native: string, userPreferred: string };
    type: string;
}

export function SerieListItem(media: SerieListItemProps) {
    return (
        <div className="z-0 w-full sm:w-[48%] p-[2px] bg-gradient-to-br from-yellow-400 via-yellow-900 to-black shadow-sm">
            <div className="flex lg:flex-row flex-col items-strech justify-between h-full bg-gradient-to-br from-amber-900 via-black to-black text-white shadow-[inset_4px_4px_60px_0_rgba(0,0,0,0)]">
                <img className="w-full lg:w-auto lg:h-full flex-grow-0 hover:animate-pulse " src={media.coverImage.large} />
                <div className="flex-grow p-2 overflow-auto">
                    <h2
                        className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to-yellow-800 via-amber-600">
                        {media.title.userPreferred}</h2>
                    <p>Episodios: {media.episodes} - Temporada: {media.season}</p>
                    <p>Formato: {media.format} - Tipo: {media.type}</p>
                    <p className="mt-2">{"Romaji: " + (media.title?.romaji ?? '?')}</p>
                    <p>{"Original: " + (media.title?.native ?? '?')}</p>
                    <p>{"Inglês: " + (media.title?.english ?? '?')}</p>
                </div>
            </div>
        </div>)
}

