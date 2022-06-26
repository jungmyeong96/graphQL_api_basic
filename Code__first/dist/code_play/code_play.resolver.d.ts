import { CodePlayService } from './code_play.service';
import { UserTemp } from './entity/user_information.entity';
export declare class CodePlayResolver {
    private readonly userService;
    constructor(userService: CodePlayService);
    getUserTempById(id: string): UserTemp;
}
