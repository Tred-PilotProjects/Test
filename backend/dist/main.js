"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: process.env.NEXT_PUBLIC_APP_ORIGIN || '*',
        credentials: false,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const port = Number(process.env.PORT ?? 3000);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map