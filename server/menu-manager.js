const { Menu, MenuItem }  = require('electron');

class MenuManager{
    constructor(){
        this.onSetupClick = () => {console.log('Setup clicked')}
        this.onHelp = () => {require('electron').shell.openExternal('http://www.zoomteams.com')}
    }

    build()
    {
        const menu = new Menu()
        menu.append(new MenuItem(this.getFileMenuTemplate()))
        menu.append(new MenuItem(this.getWindowMenuTemplate()))

        return menu
    }

    isMac(){
        return (process.platform === 'darwin')
    }

    getFileMenuTemplate(){
        return {
            label:'File',
            submenu:[{
                role:'quit'
            },
        {
            label:'Setting',
            click:this.onSetupClick
        }]
        }
    }

    getWindowMenuTemplate(){
        const windowSubMenu = [{
            role:'minimize'
        },
        {
            role:'close'
        },
        {
            label: 'Help',
                    click: this.onHelp
        }]

        const macSubMenu = [{
            label:'Minimize',
            role:'minimize'
        },
    {
        label:'Close',
        role:'close'
    },
    {
        label: 'Learn More',
                click: this.onHelp
    }]

        return {
            role:'window',
            submenu: this.isMac() ? macSubMenu : windowSubMenu
        }
    }

    getMacAppMenuTemplate(){
        return {
            role:'quit'
        }
    }
}

module.exports = new MenuManager()