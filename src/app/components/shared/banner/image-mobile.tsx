export const ImageMobile = () => {
  return (
    <div className="mt-[100px] relative">
      <img
        alt="Web development"
        srcSet="https://ronasit.com/_next/static/media/ios-development-light.4e99bbeb.svg"
        src="https://ronasit.com/_next/static/media/ios-development-light.4e99bbeb.svg"
        decoding="async"
        className="relative"
      />
      <img
        alt="Cloud"
        srcSet="https://ronasit.com/_next/static/media/truck-light.6c3aa6d5.svg"
        src="https://ronasit.com/_next/static/media/truck-light.6c3aa6d5.svg"
        decoding="async"
        className="absolute bottom-[0] left-0"
      />
      <img
        alt="Mouse"
        srcSet="https://ronasit.com/_next/static/media/controls-light.8db0815e.svg"
        src="https://ronasit.com/_next/static/media/controls-light.8db0815e.svg"
        decoding="async"
        className="absolute transform -translate-x-1/2 bottom-[38%] right-[14%]"
      />
    </div>
  );
};
