/**
 * Created by mlingolu on 1/30/17.
 */


const {app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

require('dotenv').config();

let mainWindow;


function createWindow() {
    mainWindow = new BrowserWindow({width:800, height : 500});

    if(process.env.PACKAGE == 'true'){

        mainWindow.loadURL(url.format({
            pathname : path.join(__dirname,'public/index.html'),
            protocol :'file:',
            slashes : true
        }))

    }else{
        mainWindow.loadURL('http://localhost:3000');

        mainWindow.webContents.openDevTools();
    }


    mainWindow.on('closed',function () {
        mainWindow = null;
    })
}

app.on('ready', createWindow);


app.on('activate',()=> {
   if(mainWindow == null){
       createWindow();
   }
});


app.on('window-all-closed',function () {
    if(process.platform != 'darwin'){
        app.quit();
    }
});