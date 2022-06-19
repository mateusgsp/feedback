import { useState } from 'react';
import bugImgUrl from '../../../assets/bug.png';
import ideaImgUrl from '../../../assets/idea.png';
import thoughtImgUrl from '../../../assets/thought.png';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            url: bugImgUrl,
            alt: 'Imagem de um inseto'
        }
    }, IDEA: {
        title: 'Ideia',
        image: {
            url: ideaImgUrl,
            alt: 'Imagem de uma lâmpada'
        }
    }, OTHER: {
        title: 'Outro',
        image: {
            url: thoughtImgUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export type TypeFeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<TypeFeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            onRestartFeedback={handleRestartFeedback}
                            feedbackType={feedbackType}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}
        </div>
    );
}