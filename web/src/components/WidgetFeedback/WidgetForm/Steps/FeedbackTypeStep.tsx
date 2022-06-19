import { Bug } from "phosphor-react";
import { feedbackTypes, TypeFeedbackType } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: TypeFeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (<>
        <header className="w-full p-4 border-b border-gray-200">
            <span className="leading-6 text-base font-semibold">Deixe seu feedback</span>
            <CloseButton />
        </header>
        <div className="flex pb-8 pt-4 gap-2 w-full px-4">
            {
                Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => onFeedbackTypeChanged(key as TypeFeedbackType)}
                            className="relative flex items-center justify-center 
                            h-20 w-20 mt-2 mb-2 mx-auto  
                          bg-gray-400 hover:bg-brand-500
                          text-brand-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-500 ease-linear
                            cursor-pointer shadow-lg group">
                            <img src={value.image.url} alt={value.image.alt} className="h-16 w-16"/>
                            <span className="absolute w-auto p-2 m-2 min-w-max bottom-[-3rem] rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">{value.title}</span>
                        </button>
                    );
                })
            }
        </div>
    </>)
}