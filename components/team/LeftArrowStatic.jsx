// Import images.

const arrow_head = 'https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg'

const LeftArrow = ({ prev_step }) => {
  return (
    <>
      <div
        onClick={prev_step}
        className="absolute grid content-center z-30 flex-none cursor-pointer w-10 h-10 md:top-[122px] -top-[52px] left-0"
      >
        <div className="relative border border-t-mid-grey border-l-0 border-r-0 border-b-0 w-full rotate-180">
          <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
        </div>
      </div>
    </>
  );
};

export default LeftArrow;
