"use client"

import { OrbitingCircles } from "@/components/ui/orbiting-circles"

export function GrantwareOrbitingIntegrations() {
  return (
    <div className="relative flex h-[320px] w-[320px] flex-col items-center justify-center overflow-visible">
      {/* Center: GrantWare "G" */}
      <div className="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
        <span className="font-serif text-2xl font-semibold text-gray-900">G</span>
      </div>

      {/* Outer Ring: Larger icons, normal direction - 3 icons evenly spaced (120° apart) */}
      <OrbitingCircles
        className="size-12 border-none bg-white shadow-lg"
        duration={30}
        delay={0}
        radius={130}
      >
        <Icons.googleDrive className="size-6" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-12 border-none bg-white shadow-lg"
        duration={30}
        delay={10}
        radius={130}
      >
        <Icons.googleDocs className="size-6" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-12 border-none bg-white shadow-lg"
        duration={30}
        delay={20}
        radius={130}
      >
        <Icons.slack className="size-6" />
      </OrbitingCircles>

      {/* Inner Ring: Smaller icons, reverse direction - 3 icons evenly spaced (120° apart) */}
      <OrbitingCircles
        className="size-10 border-none bg-white shadow-lg"
        duration={25}
        delay={0}
        radius={70}
        reverse
      >
        <Icons.googleSheets className="size-5" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-10 border-none bg-white shadow-lg"
        duration={25}
        delay={8.33}
        radius={70}
        reverse
      >
        <Icons.pdf className="size-5" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-10 border-none bg-white shadow-lg"
        duration={25}
        delay={16.67}
        radius={70}
        reverse
      >
        <Icons.word className="size-5" />
      </OrbitingCircles>
    </div>
  )
}

const Icons = {
  googleDrive: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  slack: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
        fill="#E01E5A"
      />
    </svg>
  ),
  notion: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
      />
    </svg>
  ),
  googleDocs: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
        fill="#4285F4"
      />
      <path
        d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
        fill="#F1F1F1"
      />
      <path
        d="M29.375,0 L29.375,13.2954545 C29.375,15.7440341 31.3467969,17.7272727 33.78125,17.7272727 L47,17.7272727 L29.375,0 Z"
        fill="#A1C2FA"
      />
    </svg>
  ),
  googleSheets: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
        fill="#0F9D58"
      />
      <path
        d="M11.75,53.1818182 L35.25,53.1818182 L35.25,32.5 L11.75,32.5 L11.75,53.1818182 Z M14.6875,35.4545455 L20.5625,35.4545455 L20.5625,38.4090909 L14.6875,38.4090909 L14.6875,35.4545455 Z M14.6875,41.3636364 L20.5625,41.3636364 L20.5625,44.3181818 L14.6875,44.3181818 L14.6875,41.3636364 Z M14.6875,47.2727273 L20.5625,47.2727273 L20.5625,50.2272727 L14.6875,50.2272727 L14.6875,47.2727273 Z M23.5,35.4545455 L32.3125,35.4545455 L32.3125,38.4090909 L23.5,38.4090909 L23.5,35.4545455 Z M23.5,41.3636364 L32.3125,41.3636364 L32.3125,44.3181818 L23.5,44.3181818 L23.5,41.3636364 Z M23.5,47.2727273 L32.3125,47.2727273 L32.3125,50.2272727 L23.5,50.2272727 L23.5,47.2727273 Z"
        fill="#F1F1F1"
      />
      <path
        d="M29.375,0 L29.375,13.2954545 C29.375,15.7440341 31.3467969,17.7272727 33.78125,17.7272727 L47,17.7272727 L29.375,0 Z"
        fill="#87CEAC"
      />
    </svg>
  ),
  microsoft: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  ),
  pdf: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 18H17V16H7V18M17 14H7V12H17V14M7 10H11V8H7V10M20 4H15.83C15.42 2.84 14.31 2 13 2H11C9.69 2 8.58 2.84 8.17 4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V6C22 4.9 21.1 4 20 4M11 4H13C13.55 4 14 4.45 14 5S13.55 6 13 6H11C10.45 6 10 5.55 10 5S10.45 4 11 4M20 20H4V6H8V8H16V6H20V20Z"
        fill="#E53935"
      />
    </svg>
  ),
  word: ({ className }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6,2H14L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M13,3.5V9H18.5L13,3.5M7,13L8.5,18H10L11.5,14.5L13,18H14.5L16,13H14.5L13.5,16.5L12,13H11L9.5,16.5L8.5,13H7Z"
        fill="#2B579A"
      />
    </svg>
  ),
}

