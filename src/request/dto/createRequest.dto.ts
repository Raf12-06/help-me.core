import { RequestTypeE } from '../model/request.model';

export class CreateRequestDto {
  readonly request_type: RequestTypeE;
  readonly coordinates: [number, number];
  readonly description: string;
}
