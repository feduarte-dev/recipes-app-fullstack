"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express = require("express");
require("express-async-errors");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.config();
        // Não remover essa rota
        this.app.get('/', (req, res) => res.json({ ok: true }));
        // Não remova esse middleware de erro, mas fique a vontade para customizá-lo
        // Mantenha ele sempre como o último middleware a ser chamado
        this.app.use(errorMiddleware_1.default);
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express.json());
        this.app.use(accessControl);
        this.routes();
    }
    routes() {
        this.app.use(routes_1.default);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
exports.app = new App().app;
// Vale a pena fazer o mesmo controller, service etc para meals e drink visto q as requisicoes sao mto parecidas, eu poderia passar por parametro qual tipo de recipe eu queria
// A necessidade de tipar com null qdo acessamos banco de dados é pq pode nao haver nada dentro deles?
// pq as vezes nao consigo usar o get properties como parametro da busca no banco de dados?
// parte de comecar a receita ta bugado
// o warning do frontend no docker é por conta dos arquivos do proprio front end com erros?
//# sourceMappingURL=app.js.map