import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    name: string

    @IsEmail({}, { message: "IsEmail" })
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    email: string

    @IsStrongPassword({
        minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    }, { message: "A senha deve conter pelo menos 8 caracteres, 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial." })
    @IsString({ message: "IsString" })
    @IsNotEmpty({ message: "IsNotEmpty" })
    password: string
}
