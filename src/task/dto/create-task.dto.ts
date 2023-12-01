import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateTaskDto {
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    description: string

    @IsBoolean({ message: "IsBoolean" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    completed: boolean

    @IsNumber({}, { message: "IsNumber" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    ToDoListId: number
}
