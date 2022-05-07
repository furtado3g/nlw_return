import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  bug: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um Inseto",
    },
  },
  idea: {
    title: "Ideia",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma Lampada",
    },
  },
  other: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const handleFeedBackTypeRestart = () => {
    setFeedbackType(null);
  };
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackTypeRestartRequested={handleFeedBackTypeRestart}/>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
