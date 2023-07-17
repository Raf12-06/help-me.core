import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { readdirSync } from 'fs';

async function bootstrap() {

  const PORT = process.env.PORT ?? 8000;

  const fastifyAdapter = new FastifyAdapter();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
  );

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  app.setViewEngine({
    engine: {
      handlebars: require('handlebars'),
    },
    templates: join(__dirname, '..', 'views'),
    options: {
      partials: Object.fromEntries(
        readdirSync(join(__dirname, '..', 'views/partials')).map((v) => [
          v.slice(null, -4),
          'partials/' + v,
        ]),
      ),
    },
  });

  await app.listen(PORT, () => {
    console.log(`Start on ${PORT}...`);
  });
}

bootstrap();
