import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateConversationDto {
	@IsOptional()
	@IsString()
	subject?: string;

	@IsString()
	@IsNotEmpty()
	message: string;
}

export default CreateConversationDto;
