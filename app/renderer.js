import electron, { app, BrowserWindow } from 'electron';

let mainWindow = null;

console.log(app);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  const { PORT, START_HOT } = process.env;
  const url = START_HOT ? `http://localhost:${PORT}` : `file://${__dirname}/index.html`;
  const { workAreaSize: { height, width } } = electron.screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    width,
    height,
    frame: false,
  });

  mainWindow.loadURL(url);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });
});