"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRemesaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_remesa_dto_1 = require("./create-remesa.dto");
class UpdateRemesaDto extends (0, mapped_types_1.PartialType)(create_remesa_dto_1.CreateRemesaDto) {
}
exports.UpdateRemesaDto = UpdateRemesaDto;
//# sourceMappingURL=update-remesa.dto.js.map