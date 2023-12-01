import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAuthServiceDto {
    @IsEmail({}, { message: "IsEmail" })
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    email: string

    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    password: string
}
