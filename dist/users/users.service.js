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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../database/entities/user.entity");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(UserRepo) {
        this.UserRepo = UserRepo;
    }
    async showAll() {
        return await this.UserRepo.find();
    }
    async showById(id) {
        return await this.UserRepo.findOneOrFail({ where: { uuid: id } });
    }
    async create(data) {
        var insertData = new user_entity_1.UserEntity();
        insertData.email = data.email;
        insertData.fullName = data.fullName;
        insertData.password = data.password;
        insertData.hashPassword();
        await this.UserRepo.save(insertData);
        return insertData;
    }
    async update(id, data) {
        await this.UserRepo.findOneOrFail({ where: { uuid: id } })
            .then(async (updateUser) => {
            updateUser.fullName = data.fullName;
            updateUser.email = data.email;
            if (data.password) {
                updateUser.password = data.password;
                updateUser.hashPassword();
            }
            await this.UserRepo.save(updateUser);
        });
        return this.UserRepo.findOne({ where: { uuid: id } });
    }
    async delete(data) {
        var waitingList = [];
        var count = 0;
        await Promise.all(data.map(async (item) => {
            count++;
            this.UserRepo.findOneOrFail({
                where: {
                    uuid: item,
                },
                withDeleted: true
            }).then(async (success) => {
                await this.UserRepo.remove(success);
                waitingList.push(success);
            });
        }));
        return {
            message: `${count} Users Successfully Deleted`
        };
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map