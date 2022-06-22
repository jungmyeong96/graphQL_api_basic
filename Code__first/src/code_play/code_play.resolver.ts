import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { CodePlayService } from './code_play.service';
import { UserTemp } from './entity/user_information.entity';

@Resolver()//graphql에서 controler가 resolver
export class CodePlayResolver {
    constructor(private readonly userService:CodePlayService) {}

    @Query(() => UserTemp) //option 스키마의 return값이 UserTemp
    getUserTempById(@Args("id") id:string){
        return this.userService.getUserTempById();
    }
}
