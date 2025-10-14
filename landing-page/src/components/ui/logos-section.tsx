export function LogosSection() {
  return (
    <section className="bg-white max-w-[1312px] mx-auto">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-12 items-center px-8 py-20 w-full">
          {/* Title */}
          <div className="text-zinc-950 font-semibold text-sm leading-5 text-center whitespace-nowrap">
            Backed By Red Hat
          </div>

          {/* Logos Grid */}
          <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {/* Figma */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-[8.33%_20.83%_4.17%_20.83%]">
                  <div className="w-full h-full bg-zinc-950 rounded-sm" />
                </div>
              </div>
              <div className="text-zinc-950 font-medium text-sm leading-5 whitespace-nowrap">
                Figma
              </div>
            </div>

            {/* React.js */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-[41.18%_41.27%]">
                  <div className="w-full h-full bg-zinc-950 rounded-full" />
                </div>
                <div className="absolute inset-[30.16%_6.35%]">
                  <div className="w-full h-full border-2 border-zinc-950 rounded-full" />
                </div>
              </div>
              <div className="text-zinc-950 font-medium text-sm leading-5 whitespace-nowrap">
                React.js
              </div>
              <div className="text-zinc-500 font-medium text-sm leading-5 whitespace-nowrap">
                18.3.1
              </div>
            </div>

            {/* TypeScript */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-[4.167%]">
                  <div className="w-full h-full bg-zinc-950 rounded-sm" />
                </div>
              </div>
              <div className="text-zinc-950 font-medium text-sm leading-5 whitespace-nowrap">
                Typescript
              </div>
              <div className="text-zinc-500 font-medium text-sm leading-5 whitespace-nowrap">
                5.6.2
              </div>
            </div>

            {/* Shadcn */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6 overflow-hidden">
                <div className="absolute bottom-[18.75%] left-1/2 right-[18.75%] top-1/2">
                  <div className="w-full h-full border-2 border-zinc-950 rounded-sm" />
                </div>
                <div className="absolute bottom-1/4 left-[15.63%] right-1/4 top-[15.63%]">
                  <div className="w-full h-full border-2 border-zinc-950 rounded-sm" />
                </div>
              </div>
              <div className="text-zinc-950 font-medium text-sm leading-5 whitespace-nowrap">
                Shadcn
              </div>
              <div className="text-zinc-500 font-medium text-sm leading-5 whitespace-nowrap">
                2.0.7
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="flex gap-2 items-center">
              <div className="relative w-6 h-6">
                <div className="absolute inset-[20.83%_4.17%_16.67%_4.17%]">
                  <div className="w-full h-full bg-zinc-950 rounded-sm" />
                </div>
              </div>
              <div className="text-zinc-950 font-medium text-sm leading-5 whitespace-nowrap">
                Tailwind CSS
              </div>
              <div className="text-zinc-500 font-medium text-sm leading-5 whitespace-nowrap">
                3.4.11
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
