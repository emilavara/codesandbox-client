const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        title: "CodeSandbox",
        width: 1280,
        minWidth: 1280,
        height: 720,
        minHeight: 720,
        frame: true
    })

    win.loadURL('https://codesandbox.io')
    win.setMenu(null)
    
//     win.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] },
//     (d, c)=>{
//       if(d.responseHeaders['X-Frame-Options']){
//         delete d.responseHeaders['X-Frame-Options'];
//       } else if(d.responseHeaders['x-frame-options']) {
//         delete d.responseHeaders['x-frame-options'];
//       }

//       c({cancel: false, responseHeaders: d.responseHeaders});
//     }
//   );
}

app.whenReady().then(() => {
    createWindow()
})