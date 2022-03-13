const http= require('http');
const server=http.createServer((req,res)=>{
    // console.log(req);
    // const{headers,url,method}=req;
    // console.log(headers,url,method);

    res.setHeader('Content-Type','text/plain')
    res.write('helloWorld');
    res.end();
});

const PORT=3000;
server.listen(PORT,()=>console.log(`Server running in port ${PORT}`));