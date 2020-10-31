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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const bcrypt = require("bcryptjs");
let UserEntity = class UserEntity extends base_entity_1.General {
    checkIfUnencryptedPasswordIsValid(unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
    hashPassword() {
        if (this.password) {
            this.password = bcrypt.hashSync(this.password, 8);
        }
    }
};
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], UserEntity.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar", length: "50", unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: "enum", enum: ["admin", "dosen", "mahasiswa"] }),
    __metadata("design:type", Array)
], UserEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column({ type: "varchar" }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "reset_token", void 0);
UserEntity = __decorate([
    typeorm_1.Entity("users")
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map