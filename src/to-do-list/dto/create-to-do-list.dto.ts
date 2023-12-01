import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateToDoListDto {
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    name: string

    @IsNumber({}, { message: "IsNumber" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    userId: number
}
