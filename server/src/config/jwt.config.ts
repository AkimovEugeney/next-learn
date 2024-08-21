import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = async (
  configService: ConfigService
): Promise<JwtModuleOptions> => {
  // Получаем секрет из ConfigService
  const secret = configService.get<string>('JWT_SECRET')

  // Возвращаем объект конфигурации для JwtModuleOptions
  return {secret}
}
