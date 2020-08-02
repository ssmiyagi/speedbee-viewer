export interface DbInfo{
  info: [
    {
      key: string;
      value: string|number;
    }
  ];
  options: [
    {
      name: string;
      value: [];
    }
  ];
}

export interface DbData{
  type: string;
  dataType: string;
  keyType: string;
  key: string|number;
  data: string|number;
}


export interface DataAccessor {
  info(): Promise<DbInfo>;
  getData(cnt: number,opt: any): Promise<DbData[]>;
}

export default DataAccessor
export const DataAccessorSybol = Symbol("DataAccessor")