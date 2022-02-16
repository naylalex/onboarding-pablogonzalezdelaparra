import { ApiProperty } from "@nestjs/swagger";

export class Task {
    // Map 1:1 to database tables
    @ApiProperty()
    id: number; 
    @ApiProperty()
    name: string;
}