import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsStrongPassword } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}

export default LoginInput;
