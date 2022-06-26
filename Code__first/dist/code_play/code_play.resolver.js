"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodePlayResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const code_play_service_1 = require("./code_play.service");
const user_information_entity_1 = require("./entity/user_information.entity");
let CodePlayResolver = class CodePlayResolver {
    constructor(userService) {
        this.userService = userService;
    }
    getUserTempById(id) {
        return this.userService.getUserTempById();
    }
};
__decorate([
    (0, graphql_1.Query)(() => user_information_entity_1.UserTemp),
    __param(0, (0, graphql_2.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CodePlayResolver.prototype, "getUserTempById", null);
CodePlayResolver = __decorate([
    (0, graphql_2.Resolver)(),
    __metadata("design:paramtypes", [code_play_service_1.CodePlayService])
], CodePlayResolver);
exports.CodePlayResolver = CodePlayResolver;
//# sourceMappingURL=code_play.resolver.js.map