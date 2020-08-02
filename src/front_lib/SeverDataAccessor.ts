import axios from "axios";
import {DataAccessor, DbInfo, DbData} from './DataAccessor'

export class SeverDataAccessor implements DataAccessor{
  async info(){
    const data: DbInfo  = (await axios.get('/db')).data
    console.log(data);
    return data
  }
  async getData(){
    const data: DbData[]  = (await axios.get('/data')).data
    console.log(data);
    return data
  }
}

export default SeverDataAccessor