// can import css if no tailwind
import '@nitro-bio/sequence-viewers/dist/nitro.css';

const cn = (...classNames: (string | boolean)[]) =>
  classNames.filter(Boolean).join(" ");

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  return (
    <main className={cn(mode, "flex items-center content-center ")}>
      <div
        className={cn(
          "flex px-8 py-4 flex-col items-center content-center min-h-screen",
          "bg-white dark:bg-black",
        )}
      >
        <header className="flex items-center gap-2">
          <h1
            className={cn(
              "text-3xl font-bold text-center",
              "dark:text-zinc-100",
              "text-zinc-900",
            )}
          >
            Sequence Viewer
          </h1>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cn(
              "p-2 rounded-md border",
              "border-black dark:border-white",
              "text-black dark:text-white",
            )}
          >
            {mode} mode
          </button>
        </header>
        <_SequenceViewer />
      </div>
    </main>
  );
}

import {
  Annotation,
  AriadneSelection,
  SequenceViewer,
} from "@nitro-bio/sequence-viewers";
import { useState } from "react";

export const _SequenceViewer = () => {
  const [selection] = useState<AriadneSelection | null>({
    start: 140,
    end: 200,
    direction: "forward",
  });
  const annotations: Annotation[] = [
    {
      text: "example",
      type: "CDS",
      direction: "forward",
      start: 10,
      end: 200,
      className:
        "dark:text-amber-800 dark:bg-amber-400 bg-amber-600 text-white",
    },
    {
      text: "example",
      type: "foo",
      direction: "reverse",
      start: 300,
      end: 20,
      className: "dark:text-rose-800 dark:bg-rose-400 bg-rose-600 text-white",
    },
  ];
  const charClassName = ({ sequenceIdx }: { sequenceIdx: number }) => {
    if (sequenceIdx === 0) {
      return "pt-2 dark:text-brand-300 text-brand-600";
    } else if (sequenceIdx === 1) {
      return "dark:text-indigo-300 text-indigo-600";
    } else {
      return "dark:text-amber-300 text-amber-600";
    }
  };

  return (
    <SequenceViewer
      sequences={[
        "ATGC".repeat(100),
        " ".repeat(30) + "ATGC".repeat(20),
        " ".repeat(80) + "ATGC".repeat(70),
      ]}
      annotations={annotations}
      selection={selection}
      selectionClassName="bg-brand-600/20 dark:bg-brand-100/30"
      charClassName={charClassName}
      noValidate
    />
  );
};

export default App;
