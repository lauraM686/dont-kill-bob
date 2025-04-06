const path = require ('path');
const { app, BrowserWindow } = require ('electron');

const isDev =process.env.NODE_ENV !== 'development';

function createMainWindow() {
    const mainWindow = new BrowserWindow ( {
        title: "Don't Kill Bob!",
        width: isDev ? 896 : 448,
        height: 600,
    } );

    // open devtools if in dev environment
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.loadFile(path.join (__dirname, './renderer/startpage.html'));

    
}

app.whenReady().then(() => {
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().lenght === 0) {
            createMainWindow()
        }
    })
});