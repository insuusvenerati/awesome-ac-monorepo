import { PartialType } from '@nestjs/mapped-types';
import { CreateNookmileDto } from './create-nookmile.dto';

export class UpdateNookmileDto extends PartialType(CreateNookmileDto) {}
