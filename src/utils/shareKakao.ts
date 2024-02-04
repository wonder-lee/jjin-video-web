const shareKakao = (
  route: string,
  title: string,
  description: string,
  imageUrl: string
) => {
  console.log("shareKakao", window.Kakao);
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    console.log("kakao", kakao.isInitialized());
    if (!kakao.isInitialized()) {
      kakao.init("f19781d99dd9a8dc83cfe9ab08330a51"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: description, // 인자값으로 받은 title
        imageUrl: imageUrl,
        imageWidth: 200,
        imageHeight: 100,
        link: {
          mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
          webUrl: route,
        },
      },
      buttons: [
        {
          title: "찐영상 보러 가기",
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    });
  }
};

export { shareKakao };
