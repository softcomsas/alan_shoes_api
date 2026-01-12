"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../guard/auth.guard");
const roles_decorator_1 = require("./roles.decorator");
const role_guard_1 = require("../guard/role.guard");
function Auth(role) {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Roles)(role), (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard));
}
//# sourceMappingURL=auth.decorator.js.map