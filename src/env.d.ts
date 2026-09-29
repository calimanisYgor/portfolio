/// <reference types="astro/client" />

// swiper's package.json "exports" maps "swiper/css" to a real .css file,
// so TypeScript resolves it directly instead of falling back to the
// `declare module '*.css'` wildcard from astro/client — needs its own
// ambient declaration.
declare module "swiper/css";
