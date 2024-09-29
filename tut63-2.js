const { createServer } = require('node:http');

const hostname = '127.1.0.1';
const port = 3100;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');

  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRAINING STUDIO</title>
    <style>
        .left{
            color: aquamarine;
            display:inline-block ;
            left: 34px;
            top: 20px ;
            
            
        }
        ul{
            display: flex;
        }
        li{
            list-style: none;
            padding: 23px 15px;
        }

        body{
            background: url(pexels-victorfreitas-841130.jpg) no-repeat center center/cover;
        }
        .mid{
            display: block;
       
       width:  33%;
       margin: 100px auto;
       top: 70px;
       font-size: 20px;
       color: rgb(122, 143, 16);
        }
        h3 a{
            color: rgb(142, 69, 38);
            margin: 2px ;
            padding: 3px;
            border: 2px solid white;
            
        }
        h3{
            color: rgb(212, 202, 207);
        }
        
        .right{
            display: inline-block;
        color: brown;
        position: absolute;
        right: 34px;
        top: 5px;
        }

        .right1{
        display: inline-block;
        border: 2px solid black;
        position: absolute;
        right: 34px;
        top: 100px;
        width: 70px ;
        height: 70px;
        }
        img{
            max-width: 80px;
            max-height: 70px;
        }

    </style>
  </head>
  <body>
    <div class="left">
        <ul>
            <li>Home</li><br>
            <li>About</li><br>
            <li>Services</li><br>
            <li>Contact Us</li>
        </ul>
    </div>
    <div class="mid">
        <h3>WORK HARDER,GET STRONGER</h3>
        <h1>EASY WITH OUR GYM</h1>
        <h3><a href="form1.html">BECOME A MEMBER</a></h3>
    </div>
    <div class="right">
       <ul><h1>TRAINING STUDIO</h1></ul>
       <div class="right1">
        <img src="Gym Logo.jpg.jpeg" alt="">
       </div>

    </div>
  </body>
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
