"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodePlayService = void 0;
const common_1 = require("@nestjs/common");
const user_information_entity_1 = require("./entity/user_information.entity");
let CodePlayService = class CodePlayService {
    getUserTempById() {
        const temp = new user_information_entity_1.UserTemp();
        temp.email = "email";
        temp.id = "####123";
        temp.name = "junghan";
        return temp;
    }
};
CodePlayService = __decorate([
    (0, common_1.Injectable)()
], CodePlayService);
exports.CodePlayService = CodePlayService;
//# sourceMappingURL=code_play.service.js.map