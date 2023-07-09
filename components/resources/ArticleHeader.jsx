const Header = ({ customClass, title, text, summary }) => {
  return (
    <div
      className={`lg:flex resources-article-header-bg max-w[1000px] h-auto min-h-[300px] pt-20 ${customClass}`}
    >
      <div className="flex mx-auto h-full justify-between max-w-[1280px]">
        <div className="resources-article-title-wrapper">{title}</div>
        <div className="resources-article-summary">{summary}</div>
      </div>
    </div>
  );
};

export default Header;
