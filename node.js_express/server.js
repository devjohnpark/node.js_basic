// npm or yarn (-y) init으로 package.json 파일 생성
// yar add express -> express download

const express = require('express'); // express를 사용하여 http package에 비해 가독성과 유지보수성이 현저히 좋아짐

const app = express(); // express instance

// express web framework에서 http method function call 가능
// 해당 디렉토리 경로로 보내는 것을 routing 이라고 한다.
app.get('/', (req, res) => {
    res.send('<h1>Home Page<h1/>');
});

app.get('/post', (req, res) => {
    res.send('<h1>Post Page<h1/>');
});

app.get('/profile', (req, res) => {
    res.send('<h1>Profile Page<h1/>'); 
});

// 위의 라우터에 응답하지 않으면 404 반환 
// user : middle ware
app.use((req, res) => { 
    res.status.send('<h1>404 Page Not Found<h1/>');
});

app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
})

