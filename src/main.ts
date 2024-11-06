import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/16.171.169.161/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/16.171.169.161/fullchain.pem'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(3000);
}
bootstrap();
