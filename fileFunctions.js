function backupSheet(sheetName) {
  // Check if there is a backup of the sheet; if not, creates one
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheetName = sheetName || sheet.getSheetName();
  var backupName = sheetName + '__backup';
  if (ss.getSheetByName(backupName)) {
    Logger.log('Backup already exists');
    return;
  }
  sheet.copyTo(ss).setName(backupName);
}