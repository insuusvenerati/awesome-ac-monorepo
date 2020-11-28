import { IsOptional, IsString } from 'class-validator';

export class ListAllVillagers {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  species?: string;

  @IsString()
  @IsOptional()
  personality?: string;

  @IsString()
  @IsOptional()
  gender?: string;
}

export class ListOneVillager {
  @IsString()
  uniqueEntryId?: string;
}
