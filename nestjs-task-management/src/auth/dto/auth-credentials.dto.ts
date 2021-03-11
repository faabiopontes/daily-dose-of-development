import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

const regexPasswordWithUpperCaseLowerCaseNumber = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(regexPasswordWithUpperCaseLowerCaseNumber, {
    message:
      'password must contain at least one upper case letter, one lower case letter, and a number',
  })
  password: string;
}
