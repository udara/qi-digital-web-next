// Import images.
const arrow_head = 'https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg'

const RightArrow = ({ next_step }) => {
  return (
    <>
      <div
        onClick={next_step}
        className="absolute grid content-center z-30 flex-none cursor-pointer w-10 h-10 md:top-[122px] -top-[52px] right-0"
      >
        <div className="relative border border-t-mid-grey border-l-0 border-r-0 border-b-0 w-full">
          <img src={arrow_head} className="h-6 absolute right-0 -top-3" />
        </div>
      </div>
    </>
  );
};

export default RightArrow;
