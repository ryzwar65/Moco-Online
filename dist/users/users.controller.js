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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const user_entity_1 = require("../database/entities/user.entity");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll() {
        return this.usersService.showAll();
    }
    createData(password, fullname, email) {
        var data = {
            email: email,
            fullName: fullname,
            password: password
        };
        return this.usersService.create(data);
    }
    getById(uuid) {
        return this.usersService.showById(uuid);
    }
    updateData(uuid, password, fullname, email) {
        var data = {
            email: email,
            fullName: fullname,
            password: password
        };
        return this.usersService.update(uuid, data);
    }
    deleteData(uuid) {
        return this.usersService.delete(uuid);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UsersController.prototype, "getAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('password')),
    __param(1, common_1.Body('fullname')),
    __param(2, common_1.Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Object)
], UsersController.prototype, "createData", null);
__decorate([
    common_1.Get(':uuid'),
    __param(0, common_1.Param("uuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
__decorate([
    common_1.Put(":uuid"),
    __param(0, common_1.Param("uuid")),
    __param(1, common_1.Body('password')),
    __param(2, common_1.Body('fullname')),
    __param(3, common_1.Body('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateData", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body("uuid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteData", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map