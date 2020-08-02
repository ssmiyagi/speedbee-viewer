import express from 'express';
// import socketIO from "socket.io";

export default (app, http) => {
  app.use(express.json());
  app.get('/foo', (req, res) => {
    console.log("req come")
    res.json({msg: 'foo'});
  });
  app.get('/db', (req, res) => {
    res.json({
      info:[
        {
          key:"db名",
          value:"dbの名前だよ"
        }
      ],
      options:[
        {
          name:"col1",
          value:[
            {
              key:"カラム名",
              value:"あいうえお"
            }
          ]
        },
        {
          name:"col2",
          value:[
            {
              key:"カラム名",
              value:"かきくけこ"
            }
          ]
        }
      ]
    });
  });

  app.get('/data', (req, res) => {
    res.json([
      {
        type: "Col1",
        dataType: "int",
        keyType: "timestamp",
        key: "1",
        data: 1
      },
    ])
  });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
