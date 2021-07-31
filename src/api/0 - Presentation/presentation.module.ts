import { Module } from '@nestjs/common';
import { ServicesModule } from '@services/services.module';
import { AuthController } from './Controllers/auth.controller';
import { SeriesController } from './Controllers/series.controller';
import { JwtAuthGuard } from './Guards/jwt-auth.guard';

@Module({
  imports: [ServicesModule],
  providers: [JwtAuthGuard],
  controllers: [SeriesController, AuthController],
})
export class PresentationModule {}
