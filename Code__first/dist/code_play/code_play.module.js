"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodePlayModule = void 0;
const common_1 = require("@nestjs/common");
const code_play_controller_1 = require("./code_play.controller");
const code_play_resolver_1 = require("./code_play.resolver");
const code_play_service_1 = require("./code_play.service");
let CodePlayModule = class CodePlayModule {
};
CodePlayModule = __decorate([
    (0, common_1.Module)({
        controllers: [code_play_controller_1.CodePlayController],
        providers: [code_play_service_1.CodePlayService, code_play_resolver_1.CodePlayResolver],
        exports: [code_play_service_1.CodePlayService]
    })
], CodePlayModule);
exports.CodePlayModule = CodePlayModule;
//# sourceMappingURL=code_play.module.js.map