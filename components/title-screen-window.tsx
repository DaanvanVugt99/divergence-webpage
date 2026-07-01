import { MinusIcon, SquareIcon, XIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export function TitleScreenWindow() {
  return (
    <Card className="gap-0 overflow-hidden rounded-xl border-0 bg-background p-0 text-foreground shadow-2xl shadow-black/35 ring-1 ring-border/80">
      <div className="flex h-10 items-center justify-between border-b border-border/80 bg-gradient-to-b from-white to-slate-100 px-3 dark:from-slate-800 dark:to-slate-950">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="grid size-3.5 place-items-center rounded-full bg-rose-400 text-rose-950 shadow-sm ring-1 ring-white/20">
            <XIcon className="size-2 opacity-70" />
          </span>
          <span className="grid size-3.5 place-items-center rounded-full bg-amber-300 text-amber-950 shadow-sm ring-1 ring-white/20">
            <MinusIcon className="size-2 opacity-70" />
          </span>
          <span className="grid size-3.5 place-items-center rounded-full bg-emerald-400 text-emerald-950 shadow-sm ring-1 ring-white/20">
            <SquareIcon className="size-1.5 opacity-70" />
          </span>
        </div>
        <div
          aria-hidden="true"
          className="h-1.5 w-20 rounded-full bg-slate-300/70 shadow-inner dark:bg-white/12"
        />
      </div>
      <video
        aria-label="Pokemon Emerald Rogue Divergence title screen"
        autoPlay
        className="block aspect-[3/2] w-[calc(100%+1px)] bg-black [image-rendering:pixelated]"
        loop
        muted
        playsInline
        poster="/titlescreen.gif"
      >
        <source src="/titlescreen.mp4" type="video/mp4" />
      </video>
    </Card>
  );
}
