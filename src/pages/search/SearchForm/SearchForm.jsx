import { Fragment, useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [Error, setError] = useState(false);
  const [messageError, setMessageError] = useState(null);

  const [data, setData] = useState({
    name: "",
    genre: "",
    type: "all",
    language: "en",
    year: "",
  });

  // set from tìm kiếm
  const khi_sua_from = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });

    if (e.target.id === "name") {
      setError(false);
      setMessageError(null);
    }
  };

  // khi nhấn tìm kiếm
  const khi_nhan_SEARCH = (e) => {
    e.preventDefault();
    setIsClick(true);
    if (!data.name) {
      setError(true);
      setMessageError("Phần này không được để trống");
      return;
    }
    props.onChange("SEARCH", data);
  };

  // khi nhấn reset
  const khi_nhan_RESET = (e) => {
    e.preventDefault();
    setIsClick(false);
    setError(false);
    setMessageError(null);
    props.onChange("RESET");
    setData({
      name: "",
      genre: "",
      type: "all",
      language: "en",
      year: "",
    });
  };

  return (
    <Fragment>
      <form className={styles.SearchForm}>
        <div className={styles.input}>
          <div className={styles.name}>
            {/* <label>Nhập tên phim cần tìm</label> */}
            <input
              type="text"
              id="name"
              value={data.name}
              onChange={khi_sua_from}
              placeholder="Nhập tên phim cần tìm"
            />
            {isClick && Error && (
              <span style={{ color: "red" }}>{messageError}</span>
            )}
          </div>

          <div className={styles.genre}>
            <label htmlFor="genre">Tên thể loại:</label>
            <select value={data.genre} onChange={khi_sua_from} id="genre">
              <option value="">Mời chọn thể loại</option>
              <option value="28">Phim Hành Động</option>
              <option value="12">Phim Phiêu Lưu</option>
              <option value="16">Phim Hoạt Hình</option>
              <option value="35">Phim Hài Kịch</option>
              <option value="80">Phim Tội Phạm</option>
              <option value="99">Phim Tài Liệu</option>
              <option value="18">Phim Chính Kịch</option>
              <option value="10751">Phim Gia Đình</option>
              <option value="14">Phim Viễn Tưởng</option>
              <option value="36">Phim Lịch Sử</option>
              <option value="27">Phim Kinh Dị</option>
              <option value="10402">Phim Âm Nhạc</option>
              <option value="9648">Phim Bí Ẩn</option>
              <option value="10749">Phim Lãng Mạn</option>
              <option value="878">Phim Khoa Học Viễn Tưởng</option>
              <option value="10770">Phim TV</option>
              <option value="53">Phim Giật Gân</option>
              <option value="10752">Phim Chiến Tranh</option>
              <option value="37">Phim Miền Tây</option>
            </select>
          </div>
          <div className={styles.language}>
            <label htmlFor="type">Chọn loại</label>
            <select id="type" value={data.type} onChange={khi_sua_from}>
              <option value="all">all</option>
              <option value="movie">movie</option>
              <option value="tv">tv</option>
              <option value="person">person</option>
            </select>
          </div>
          <div className={styles.type}>
            <label htmlFor="language">Chọn ngôn ngữ</label>
            <select id="language" value={data.language} onChange={khi_sua_from}>
              <option value="en">en</option>
              <option value="ja">ja</option>
              <option value="ko">ko</option>
            </select>
          </div>
          <div className={styles.year}>
            {/* <label>Nhập năm cần tìm</label> */}
            <input
              type="number"
              id="year"
              min="0"
              value={data.year}
              onChange={khi_sua_from}
              placeholder="Nhập năm cần tìm"
            />
          </div>
          <svg
            className="svg-inline--fa fa-search fa-w-16"
            fill="#ccc"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
        <div className={styles.button}>
          <button className={styles.button_reset} onClick={khi_nhan_RESET}>
            RESET
          </button>
          <button className={styles.button_search} onClick={khi_nhan_SEARCH}>
            SEARCH
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default SearchForm;
