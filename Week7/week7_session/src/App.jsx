// axios.get() 기본 구조

axios.get("요청할_주소")
  .then((response) => {
    // 요청 성공 시 실행됨
    console.log(response.data); // 응답 데이터 접근
  })
  .catch((error) => {
    // 요청 실패 시 실행됨
    console.error(error); // 에러 내용 출력
  });

/**
 * axios.get(URL): 서버에 GET 요청을 보냄
 *
 * response: 서버가 클라이언트에게 돌려준 응답 전체를 의미
 * response.data: 서버가 응답한 실제 데이터 
 * 
 * error: 요청이 실패했을 때 .catch()로 전달되는 예외 정보
 */

// axios.post() 기본 구조

axios.post("요청할_URL", 전송할_데이터)
  .then((response) => {
    // 성공 시 실행
    console.log(response.data); // 서버에서 받은 응답
  })
  .catch((error) => {
    // 실패 시 실행
    console.error(error); // 에러 정보
  });

/**
 * 요청할_URL: 데이터를 보낼 API 주소
 * 전송할 데이터: 백엔드에 보낼 데이터
 * ex..
 */

const newPost = {
  title: "오늘의 일기",
  content: "비가 와서 우울하다."
};

axios.post("http://localhost:4000/posts", newPost)

// axios.put() 기본 구조

axios.put("요청할_URL", 수정할_데이터)
  .then((response) => {
    // 요청 성공 시 실행
    console.log(response.data); // 서버 응답 출력
  })
  .catch((error) => {
    // 요청 실패 시 실행
    console.error(error); // 에러 정보 출력
  });

  /**
   * PUT의 목적은 전체 데이터 수정
   * -> 전체 필드를 보내야 함
   * 
   * 요청할_URL: 수정할 자원의 주소
   * 보통 URL에 /리소스/id 형태로 사용 
   * 
   * ex..
   */

  const updatedPost = {
  title: "수정된 제목입니다",
  content: "수정된 내용입니다"
  };

  axios.put("http://localhost:4000/posts/3", updatedPost)

  // axios.patch() 기본 구조

  axios.patch("요청할_URL", 수정할_일부_데이터)
  .then((response) => {
    // 요청 성공 시 실행
    console.log(response.data); // 서버에서 온 응답 출력
  })
  .catch((error) => {
    // 요청 실패 시 실행
    console.error(error); // 에러 정보 출력
  });

  /**
   * 요청할_URL: 수정할 자원의 대상 URL
   * 수정할_일부_데이터: 바꾸고 싶은 필드만 담은 객체
   * 
   * PATCH의 목적은 부분 수정
   * -> 수정할 속성만 보내면 됌
   * 
   * ex..
   */

  const partialUpdate = {
  title: "제목만 수정해봄"
  };

  axios.patch("http://localhost:4000/posts/3", partialUpdate)

  // axios.delete() 기본 구조

  axios.delete("삭제할_URL")
  .then((response) => {
    // 요청 성공 시 실행
    console.log(response.data); // 서버 응답 출력
  })
  .catch((error) => {
    // 요청 실패 시 실행
    console.error(error); // 에러 정보 출력
  });

  /**
   * 삭제할_URL: 삭제 대상의 자원 주소
   * -> 주로 URL에 id를 포함하여 특정 데이터를 지정
   */