import 'dotenv/config';

import './database';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import express from 'express';

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

// Configuração AdminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [],
});

const router = AdminJSExpress.buildRouter(adminJS);
app.use(adminJS.options.rootPath, router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${adminJS.options.rootPath}`)
});

