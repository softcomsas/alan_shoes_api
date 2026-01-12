import { UseGuards, applyDecorators } from "@nestjs/common";
import { Role } from "../../common/enums/roles";
import { AuthGuard } from "../guard/auth.guard";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "../guard/role.guard";

export function Auth(role: Role) {
    return applyDecorators(
        Roles(role), 
        UseGuards(AuthGuard, RolesGuard)
    );
  }
  