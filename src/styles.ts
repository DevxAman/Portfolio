// Pre defined Styles
export const styles = {
  paddingX: "px-4 xs:px-6 sm:px-10 lg:px-16",
  paddingY: "py-8 sm:py-12 lg:py-16",
  padding: "px-4 xs:px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16",

  heroHeadText:
    "font-black text-white text-[clamp(1.75rem,8vw,5rem)] leading-[1.08] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium text-[clamp(1rem,4.8vw,1.875rem)] leading-[1.45]",

  sectionHeadText:
    "text-white font-black text-[clamp(2rem,8vw,3.75rem)] leading-tight",
  sectionSubText:
    "text-[13px] sm:text-[16px] lg:text-[18px] text-secondary uppercase tracking-wider",
} as const;
