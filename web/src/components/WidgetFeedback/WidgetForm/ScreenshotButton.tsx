import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "./Loading";
import domtoimage from 'dom-to-image';

interface ScreenshotButtonProps {
    screenshot: string | null | undefined;
    onScreenshot: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshot }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);
        /*const canvas = await html2canvas(document.querySelector("html")!);
        const base64image = canvas.toDataURL('image/png')*/

        await domtoimage.toPng(document.querySelector("html")!)
            .then(function (dataUrl) {
                onScreenshot(dataUrl);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
/*
        console.log(base64image)
        onScreenshot(base64image);*/

        setIsTakingScreenshot(false);
    }
    if (screenshot) {
        return (
            <button
                type="button"
                className="p-1 w-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshot(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}>
                <Trash weight="fill" />
            </button>
        )
    }
    return (
        <button
            onClick={handleTakeScreenshot}
            type="button" className="h-10 p-2 bg-zinc-300 rounded-md border-transparent hover:bg-zinc-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 text-zinc-600">
            {isTakingScreenshot ? <Loading /> :
                <Camera className="h-6 w-6" />}
        </button>
    )
}