import { Injectable } from '@nestjs/common';
import { UserTemp } from './entity/user_information.entity';

@Injectable()
export class CodePlayService {
    getUserTempById(): UserTemp{
        const temp = new UserTemp();
        temp.email = "email";
        temp.id = "####123";
        temp.name = "junghan";
        return temp;
    }
}
