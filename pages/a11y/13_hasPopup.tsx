const HasPopup = () => {
  return (
    <>
      <button
        type="button"
        id="menu-button"
        aria-haspopup="menu"
        aria-controls="menu-list"
        aria-expanded="false"
      >
        메뉴
      </button>
      <ul id="menu-list" role="menu" aria-labelledby="menu-button" hidden>
        <li>
          <a href="/completed">완결</a>
        </li>
        <li>
          <a href="/printed">단행본</a>
        </li>
      </ul>
    </>
  );
};

export default HasPopup;
