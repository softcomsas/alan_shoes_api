import { Role } from "../../common/enums/roles";
export declare function Auth(role: Role): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
