const jsdom = require("jsdom")
const { JSDOM } = jsdom
global.DOMParser = new JSDOM().window.DOMParser

const fabric = require('fabric').fabric;
const express = require('express');
const app = express();
app.use(express.json());

app.get('/test', (request, response) => {
    const canvas = new fabric.Canvas(null, { width: 100, height: 100 });
    const rect = new fabric.Rect({ width: 20, height: 50, fill: "#ff0000" })
    canvas.add(rect)
    canvas.renderAll()
    const imageData = rect.toDataURL()
    response.json({
        data: imageData
    })
})

export default {
    path: 'api',
    handler: app
}