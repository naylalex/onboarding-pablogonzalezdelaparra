import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateTaskDto {
    @ApiProperty()
    @IsAlphanumeric()
    @MaxLength(10)
    name: string;
    @ApiProperty({required: false})
    age?: number;
}