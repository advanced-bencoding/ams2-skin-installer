const { app, BrowserWindow } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        title: "AMS2 Skin Installer",
        width: 1600,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    win.loadURL('http://localhost:3000') //loads index.html from a URL

    win.webContents.openDevTools() //open devtools
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{ //mac stuff
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})