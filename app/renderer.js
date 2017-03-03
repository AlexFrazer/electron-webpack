import electron, { app, BrowserWindow } from 'electron';

let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
  });

  const indexUrl = process.env.START_HOT
    ? `http://localhost:${process.env.PORT || 3000}`
    : `file://${__dirname}/index.html`;

  mainWindow.loadURL(indexUrl);
});