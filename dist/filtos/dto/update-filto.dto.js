"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFiltoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_filto_dto_1 = require("./create-filto.dto");
class UpdateFiltoDto extends (0, mapped_types_1.PartialType)(create_filto_dto_1.CreateFiltoDto) {
}
exports.UpdateFiltoDto = UpdateFiltoDto;
//# sourceMappingURL=update-filto.dto.js.map