import { Module } from '@nestjs/common';
import { CodePlayController } from './code_play.controller';
import { CodePlayResolver } from './code_play.resolver';
import { CodePlayService } from './code_play.service';

@Module({
    controllers: [CodePlayController],
    providers: [CodePlayService, CodePlayResolver],
    exports: [CodePlayService]
})
export class CodePlayModule {}
