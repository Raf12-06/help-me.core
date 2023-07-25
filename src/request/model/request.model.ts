import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum RequestTypeE {
  repair = 'repair',
  help = 'help',
  deliver = 'deliver',
}

export type GeometryPoint = {
  type: 'Point';
  coordinates: [number, number];
  // crs: { type: 'name'; properties: { name: 'EPSG:2364' } };
};

export interface RequestCreateAttrs {
  point: GeometryPoint;
  request_type: RequestTypeE;
  description: string;
}

@Table({ tableName: 'request' })
export class Request extends Model<Request, RequestCreateAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.GEOMETRY('point', 4326), allowNull: false })
  point: GeometryPoint;

  @Column({
    type: DataType.ENUM(...Object.values(RequestTypeE)),
    allowNull: false,
  })
  request_type: RequestTypeE;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;
}
