// server.js 파일은 Express 서버에서
// 구동을 위한 기본 설정을 읽어들이는 파일임!

// 익스프레스 기본 모듈 import
const express = require("express");
// 서버 경로를 위한 import
const path = require("path");
// 서버 역할을 위한 익스프레스 생성자 메서드 불러오기
const app = express();

// 멀터 미들웨어를 불러온다! why? 파일전송 처리를 위해!
const multer = require("multer");

// 멀터를 이용하여 업로드 셋업을 한다!
// multer() 에 업로드할 폴더위치를 정해준다!
// dest 속성에 값으로 셋팅!
const upload = multer({ dest: "build/uploads/" });
// 파일 업로드는 POST방식으로 진행함!
// 익스프레스 서버 메서드에 post() 메서드로 설정함!
// -> 첫번째값은 루트 아래에 업로드관련 post 전송을 선택
// -> upload는 폴더명이 아니고 작업명이다!!!
// -> 두번째 항목은 전송종류를 설정 : 파일전송은 'file'
// -> 세번째는 내부전달 변수인 요청, 응답에 대한 함수
app.post("/upload", upload.single("file"),
 (req, res) => {
    console.log(req.file);
});

// 기본 포트 연결하기
app.listen(8080, function () {
    console.log("8080포트로 연결됨!");
});

// 서버 루트폴더 정적 연결하기!(루트 정하기)
// -> SPA에서 빌드하면 배포용 소스가 build 폴더에 생성되므로
// 이 배포용 폴더를 ROOT로 잡으면 편하다!!
app.use(express.static(path.join(__dirname, "/build")));
// -> SPA 앱 빌드시 유의사항 : package.json 파일에
// home:'http://localhost:8080' 을 등록하여 사용함!!!
// localhost는 127.0.0.1 내부호출 아이피와 동일함

// 첫 페이지 설정하기! -> url로 쳐서 들어가는 경로를 설정함!
// -> get 방식으로 연결하기 때문에 get() 메서드 사용!
app.get("/", function (request, response) {
    // 내부로 전달되는 값은 처음것이 요청, 두번째가 응답임!
    response.sendFile(path.join(__dirname), "/build/index.html");
    // 첫 페이지는 요청에 대한 응답임! 파일을 내려보내주므로
    // sendFile() 메서드 사용
});
