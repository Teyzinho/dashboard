
import 'dotenv/config';

import './database/index.js';
import express from 'express';

import locale from './locales/index.js';

import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';

AdminJS.registerAdapter(AdminJSSequelize);

import usersResource from './resources/usersResource.js';
import projectResource from './resources/projectResource.js';

const app = express();

// Configuração AdminJS
const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [usersResource,projectResource],
    ...locale,
});

const router = AdminJSExpress.buildRouter(adminJS);
app.use(adminJS.options.rootPath, router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${adminJS.options.rootPath}`)
});

