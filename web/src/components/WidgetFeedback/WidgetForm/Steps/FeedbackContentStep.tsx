import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackTypes, TypeFeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../../lib/api"

interface FeedbackContentStepProps {
    feedbackType: TypeFeedbackType;
    onRestartFeedback: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep(
    { feedbackType, onRestartFeedback, onFeedbackSent }:
        FeedbackContentStepProps) {
    const [comment, setComment] = useState('');
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();

        setIsSendingFeedback(true);


        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot,
        });

        setIsSendingFeedback(false);
        onFeedbackSent();
    }

    return (<>
        <FeedbackHeader
            feedbackTypeInfo={feedbackTypeInfo}
            onRestartFeedback={onRestartFeedback} />
        <FeedbackForm
            handleSubmitFeedback={handleSubmitFeedback}
            setComment={setComment}
            screenshot={screenshot}
            setScreenshot={setScreenshot}
            comment={comment}
            isSendingFeedback={isSendingFeedback} />
    </>)
}

interface FeedbackHeaderProps {
    feedbackTypeInfo: { image: { url: string; alt: string }; title: string };
    onRestartFeedback: () => void;
}

const FeedbackHeader = ({ feedbackTypeInfo, onRestartFeedback }: FeedbackHeaderProps) => {
    return <header className="w-full p-4 flex border-b border-gray-200">
        <button type="button"
            className="focus:outline-none focus:ring-brand-500 focus:ring-1"
            onClick={onRestartFeedback}>
            <ArrowLeft weight="bold" className="w-4 h-4 text-zinc-400 hover:text-zinc-100" />
        </button>
        <span className="ml-4 text-base font-semibold leading-6 flex items-center">
            <img
                src={feedbackTypeInfo.image.url}
                alt={feedbackTypeInfo.image.alt}
                className="h-6 w-6 mr-1" />
            {feedbackTypeInfo.title}
        </span>
        <CloseButton />
    </header>
}

interface FeedbackFormProps {
    handleSubmitFeedback: (event: FormEvent) => void;
    setComment: (value: string) => void;
    screenshot: string | null;
    setScreenshot: (value: string | null) => void;
    comment: string;
    isSendingFeedback: boolean;
}

const FeedbackForm = ({ handleSubmitFeedback, setComment, screenshot, setScreenshot, comment, isSendingFeedback }: FeedbackFormProps) => {
    return <form onSubmit={handleSubmitFeedback} className="mt-4 w-full flex flex-col">
        <input type="email" className="min-w-[304px] w-[100%-2rem] text-sm placeholder-zinc-400 border-zinc-200 text-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 outline-none p-1 mx-4 mb-2" placeholder="Digite seu email (opcional)"></input>
        <textarea className="min-w-[304px] w-[100%-2rem] min-h-[102px] text-sm placeholder-zinc-400 text-zinc-600 border-zinc-200 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none 
         scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent outline-none p-1 mx-4"
            placeholder="Conte com detalhes o que está acontecendo..."
            onChange={event => setComment(event.target.value)}></textarea>

        <footer className="flex gap-2 mt-4 bg-gray-200 w-full p-4 rounded-b-2xl">
            <ScreenshotButton
                screenshot={screenshot}
                onScreenshot={setScreenshot} />
            <button
                type="submit"
                disabled={comment.length === 0}
                className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500 text-white">
                {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
            </button>
        </footer>
    </form>
}