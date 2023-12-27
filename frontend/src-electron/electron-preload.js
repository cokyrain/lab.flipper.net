import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('qFlipper', {
  spawn: args => ipcRenderer.send('qFlipper:spawn', args),
  onLog: callback => ipcRenderer.on('qFlipper:log', (_event, value) => callback(value))
})

contextBridge.exposeInMainWorld('serial', {
  list: (filter = { productId: '5740', vendorId: '0483' }) => ipcRenderer.invoke('serial:list', filter),
  open: path => ipcRenderer.invoke('serial:open', path),
  close: path => {
    ipcRenderer.removeAllListeners()
    return ipcRenderer.invoke('serial:close', path)
  },
  onOpen: callback => ipcRenderer.on('serial:onOpen', (_event, value) => callback(value)),
  onClose: callback => ipcRenderer.on('serial:onClose', (_event, value) => callback(value)),
  onData: callback => ipcRenderer.on('serial:onData', (_event, value) => callback(value)),
  write: ({ path, message }) => ipcRenderer.invoke('serial:write', { path, message }),
  isOpen: path => ipcRenderer.invoke('serial:isOpen', path)
})
