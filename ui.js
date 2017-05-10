 // Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
 function onOpen(e) {
   SpreadsheetApp.getUi()
       .createMenu('-File-')
       .addItem('Backup Active Sheet', 'backupSheet')
       .addItem('Protect Active Sheet', 'protectSheet')
       // .addSeparator()
       // .addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
       //     .addItem('One Submenu Item', 'mySecondFunction')
       //     .addItem('Another Submenu Item', 'myThirdFunction'))
       .addToUi();
   SpreadsheetApp.getUi()
       .createMenu('-Splitter Functions-')
       .addItem('Sanitize data', 'sanitizeData')
       .addItem('Split data', 'splitData')
       // .addSeparator()
       // .addSubMenu(SpreadsheetApp.getUi().createMenu('My Submenu')
       //     .addItem('One Submenu Item', 'mySecondFunction')
       //     .addItem('Another Submenu Item', 'myThirdFunction'))
       .addToUi();
 }