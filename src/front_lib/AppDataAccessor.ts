import {DataAccessor, DbInfo, DbData} from './DataAccessor'
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

export class AppDataAccessor implements DataAccessor{
  db: any;
  constructor(){
    const SpeedbeeTs = require('speedbee_ts_js');

    const target = "/mnt/c/dev/github/speedbee-viewer/test.sdts";
    this.db = new SpeedbeeTs(target);

  }
  async info(){
    const dbInfo = this.db.info();
    const info: any = [];
    const options: any = [];

    Object.entries(dbInfo).forEach(entry => {
      const key: string | null = entry[0];
      const value: any = entry[1];
      
      if(key === "colInfo"){
        value.forEach((element: any) => {
          const option: {name: string; value: Array<any>} = {
            name:'',
            value:[],
          }
          Object.entries(element).forEach((entry: any) => {
            const key: any = entry[0];
            const value: any = entry[1];
            if(key == "cname"){
              option.name = value;
            }else{
              const infoKey = (colInfoKey as any)[(key.toString())];
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
        const infoKey = (dbInfoKeyList as any)[(key.toString())];
        if(infoKey){
          info.push({
            key:infoKey,
            value
          })
        }
      }
    })

    const result: DbInfo = {
      info,
      options
    }
    return result;
  }
  async getData(){
    const result: DbData = {
        type: "Col1",
        dataType: "int",
        keyType: "timestamp",
        key: "1",
        data: 1
    }
    return [ result ];
  }
}

export default AppDataAccessor