import { app, BrowserWindow, globalShortcut } from 'electron';
import { MongodHelper } from 'mongodb-prebuilt';
import path from 'path';

// Handle shortcuts on window
if (require('electron-squirrel-startup')) {
    app.quit();
}

// Global reference of window object
let main_window;

// Initialize mongod and electron
function Initialize_mongod() 
{
    let mongod = new MongodHelper(['--dbpath', './db']);

    // Start mongod
    mongod.run().then(function (started) {
        console.log('Initialize mongod ...');
        Create_window();
        //Create_window();
    }, function (e) {
        console.log('Error: ' + e);
    });
}

function Create_window()
{
    // Create new browser window
    main_window = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html page
    main_window.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    // Disable menu
    main_window.setMenu(null);

    // Emitted when the window is closed
    main_window.on('closed', function () {
        // Dereference window object
        main_window = null;
    });

    // Enable developer tools
    Enable_devTools();
}

function Enable_devTools()
{
    // Detect os and change keys
    if (process.platform === 'darwin') {
        globalShortcut.register('Command + Shift + I', function () {
            main_window.webContents.openDevTools();
        });
    } else if (process.platform === 'linux' || process.platform === 'win32') {
        globalShortcut.register('Control + Shift + I', function () {
            main_window.webContents.openDevTools();
        });
    }

    // Debug: 
    main_window.webContents.openDevTools();
}

// Initialize mongod and create browser window
app.on('ready', Initialize_mongod);

// Quit when all window are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Activate on MacOS
app.on('activate', function () {
    // Recreate window in the app when dock icon is clicked
    if (window == null) {
        Initialize_mongod();
    }
});