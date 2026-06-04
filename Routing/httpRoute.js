const http = require("http")

const server = http.createServer((req,res)=>{
    if(req.url === "/products" && req.method === "GET"){
        console.log("Products route");
        res.end("Products route")
    }

    if(req.url === "/orders" && req.method === "POST"){
        console.log("Orders Route ");
        res.end("Orders Route");
    }

     //dynamic route
    if (req.url.startsWith("/orders/") && req.method === "PUT") {
        console.log("URL----", req.url, req.url.split('/'));
        const id = req.url.split('/')[2];

        console.log("orders PUT route---id", id);
        res.end("orders PUT route");
    }

    if (req.url === "/orders" && req.method === "DELETE") {
        console.log("orders delete route");
        res.end("orders DELETE route");
    }
})

server.listen(3000,()=>{
    console.log("server is running on 3000")
})