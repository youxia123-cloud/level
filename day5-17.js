let http = require('http');
let fs = require('fs');

let server = http.createServer();
server.on('request', function(req, res) {
    let url = req.url;
    if (url === '/') {
        fs.readFile('./day5-16.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charst=utf-8');
                res.end('读取文件失败，请稍后重试！');
            } else {
                res.setHeader('Content-Type', 'text/html; charst=utf-8');
                res.end(data);
            }


        })
    }
    if (url === '/day5-16.1.html') {
        fs.readFile('./day5-16.1.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charst=utf-8');
                res.end('读取文件失败，请稍后重试！');
            } else {
                res.setHeader('Content-Type', 'text/html; charst=utf-8');
                res.end(data);
            }


        })
    }
});
server.listen(3000, function() {
    console.log('服务器启动成功');
})