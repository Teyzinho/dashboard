import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

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

