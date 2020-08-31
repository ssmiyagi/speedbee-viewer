import express from 'express';
// import socketIO from "socket.io";
const Speedbee_ts = require('speedbee_ts_js');
import dotenv  from 'dotenv'
dotenv.config()
console.log(process.env.DB_PATH)

// const target = "/mnt/c/dev/github/speedbee-viewer/test.sdts";
const target = process.env.DB_PATH;
const spdSoPath = process.env.SPD_SO_PATH;
const db = new Speedbee_ts(target,{speedbeeModulePath:spdSoPath});
const dbInfoKeyList = {
  "dbpar": "DBパラメーター",
  "dbPath": "DB作成場所",
  "idsz": "バイナリIDサイズ(バイト)",
  "ccnt": "カラム数",
  "sbsz": "ファイル同期書き込みバッファサイズ",
  "rmaxccnt": "最大ファイルキャッシュ数",
  "rmaxccnt2": "最大サーチ結果キャッシュ数",
  "sccnt_h": "Hiファイル書き込むカラム数",
  "sccnt_m": "Miファイル書き込むカラム数",
  "sccnt_l": "Loファイル書き込むカラム数",
  "sper_h": "Hiファイル同期データ期間(秒)",
  "sper_m": "Miファイル同期データ期間(秒)",
  "sper_l": "Loファイル同期データ期間(秒)",
  "lag_h": "Hiファイル同期ラグ時間(秒)",
  "lag_m": "Miファイル同期ラグ時間(秒)",
  "lag_l": "Loファイル同期ラグ時間(秒)",
  "maxf_h": "Hiファイル同期最大書き込み数",
  "maxf_m": "Miファイル同期最大書き込み数",
  "maxf_l": "Loファイル同期最大書き込み数",
  "stcnt": "ファイル同期実行回数",
}
const colInfoKey = {
   "ctype": "カラムタイプ",
    "dsz": "固定長データサイズ(バイト)",
    "rsz": "メモリ上での１レコードサイズ",
    "scnt": "メモリ保存件数",
    "icnt": "	sdts_open_db()後からの登録件数",
    "act": "カラムアクティブフラグ true アクティブ",
    "dtype": "カラムデータタイプ文字列",
    "colpar": "カラムパラメータ文字列",
    "msst": "メモリ内に格納されている先頭データのタイムスタンプ",
    "mset": "メモリ内に格納されている最終データのタイムスタンプ",
    "mscnt": "メモリ内に格納されているデータ件数",
    "hmsmpl": "サンプリングレート",
    "hmst": "開始タイムスタンプ",
    "mmmax": "M タイプ管理領域の最大件数",
    "mmspos": "M タイプ管理領域の開始位置",
    "mmucnt": "M タイプ管理領域の使用件数",
    "micnt": "M タイプのカレント登録件数※2",
    // "mminfo": {
    //   "type": "Buffer",
    //   "data": []
    // },
    // "wdcnt": 0,
    // "winfo": {
    //   "type": "Buffer",
    //   "data": []
    // } 
}
export default (app, http) => {

  app.use(express.json());
  app.get('/foo', (req, res) => {
    console.log("req come")
    res.json({msg: 'foo'});
  });
  app.get('/db', (req, res) => {

    let dbInfo = db.info();
    let info = [];
    let options = [];
    Object.entries(dbInfo).forEach(entry => {
      const key: string | null = entry[0];
      const value: any = entry[1];
      
      if(key === "colInfo"){
        value.forEach(element => {
          let option = {
            name:null,
            value:[],
          }
          Object.entries(element).forEach(entry => {
            const [key, value] = entry;
            if(key == "cname"){
              option.name = value;
            }else{
              const infoKey = colInfoKey[key];
              if(infoKey){
                option.value.push({
                  key:infoKey,
                  value
                })
              }
            }
          });
          options.push(option)
        });
      }else{
        const infoKey = dbInfoKeyList[key];
        if(infoKey){
          info.push({
            key:infoKey,
            value
          })
        }
      }
    });
    res.json({
      info,
      options
    });
  });

  app.get('/data', async (req, res) => {
    let info = db.info();
    const colNames = [];
    info.colInfo.forEach(element => {
      colNames.push(element.cname)
    });
    let queryVal = await db.selectQuery(colNames,()=>{return true});
    let responce = [];
    queryVal.forEach(colValue => {
      colValue.value.forEach(value =>{
        responce.push(
          {
            type:colValue.name,
            dataType:colValue.dataType,
            keyType:"timestamp",
            key:value.time,
            data:value.value 
          }
        )
      })
    });
    res.json(responce)
  });
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
