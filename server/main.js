// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, globalShortcut, remote} = require('electron')
const path = require('path')
// require('electron-reload')(__dirname, {
//   // Note that the path to electron may vary according to the main file
//   electron: require(path.join('__dirname','node_modules/electron'))
// });
const url = require('url')
const menuManager = require('./menu-manager')
// require('electron-reload')(__dirname);
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let splashScreen
// const iconPath = path.join(__dirname,'images/zticon.png')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', appReady)

function appReady(){
  
    menuManager.onSetupClick = () => {activateAndNav('setup')}
    const menu = menuManager.build()
    Menu.setApplicationMenu(null)
/*
    if(app.dock)
    {
        app.dock.setIcon(iconPath)
    }
*/
    // createSplashScreen()
    createWindow()

    globalShortcut.register('CmdOrCtrl+Shift+D', () => {
      win.webContents.toggleDevTools();
  });
}

function activateAndNav(page)
{
  if(!win)
    {
      createWindow(page);
    }
    else{
        navigateTo(page)
    }
}

function navigateTo(page)
{
  app.focus()
  if(page === "setup")
  {
    win.webContents.send('onSetupClick')
  }

}


function createWindow (page) {
  console.log(path.join(__dirname,'../www/index.html'));
  // Create the browser window.
  win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    title:"ZoomTeams",
    center:true,
    show:false
  })

  // and load the index.html of the app.
  // win.loadFile('index.html')
 // win.loadURL('http://localhost:8100')
  win.loadURL(url.format({
      pathname:path.join(__dirname,'../www/index.html'),
      protocol:'file:',
      slashes:true
  }))
 

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  win.once('ready-to-show',()=> {
    if(splashScreen && splashScreen.isVisible())
    {
      splashScreen.destroy()
      splashScreen = null
    }

    if(!win.isVisible())
    {
      win.show()
    }

    if(page)
    {
      navigateTo(page)
    }
  })
}



// Quit when all windows are closed.
app.on('window-all-closed', function () {
  globalShortcut.unregisterAll();
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.