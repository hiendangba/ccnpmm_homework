import express from 'express';
import type { Application } from 'express';
import path from 'path';
const viewEngine = (app: Application): void => {
    app.use(express.static('./src/public'));
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
};

export default viewEngine;
