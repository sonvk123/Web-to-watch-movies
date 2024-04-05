import { useEffect, useState } from "react";

export const useTrailer = (id) => {
  const [data, setData] = useState(null); // Lưu trữ dữ liệu phản hồi từ API
  const [error, setError] = useState(null); // Lưu trữ thông báo lỗi (nếu có)
  const [loading, setLoading] = useState(true); // Xác định trạng thái đang tải
  const [key_Trailer, setKey_Trailer] = useState(null); // Lưu trữ ID của video trailer
  const [Trailer, setTrailer] = useState(false); // Xác định trạng thái hiển thị video trailer

  const API_KEY = "6500f56c320884f1c02f02de944113e2";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );
        if (response.ok) {
          const responseData = await response.json();
          let foundVideo = null;
          //kiểm tra xem video có thỏa mãn điều kiện để hiển thị hay không
          for (const element of responseData.results) {
            if (
              element.site === "YouTube" &&
              (element.type === "Trailer" || element.type === "Teaser")
            ) {
              foundVideo = { ...element };
              break;
            }
          }
          if (foundVideo) {
            setKey_Trailer(foundVideo.key); // Lưu trữ ID của video trailer
            setTrailer(true); // có video trailer
          } else {
            setTrailer(false); // Không có video trailer
          }
          setData(responseData); // Lưu trữ dữ liệu phản hồi từ API
        } else {
          setError("Error fetching data"); // Xử lý lỗi khi không nhận được phản hồi thành công từ API
        }
      } catch (error) {
        setError(error); // Xử lý lỗi khi gặp lỗi trong quá trình gọi API
        setLoading(false);
      }
    };

    fetchData(); // Gọi hàm fetchData khi có sự thay đổi trong prop 'id'
  }, [id]);

  return {
    data, // Dữ liệu phản hồi từ API
    error, // Thông báo lỗi (nếu có)
    loading, // Trạng thái đang tải
    key_Trailer, // ID của video trailer
    Trailer, // Trạng thái hiển thị video trailer
  };
};