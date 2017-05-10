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
  sheet.copyTo(ss).setName(backupName).hideSheet();
  protectSheet(backupName);
  Logger.log('Backup created');
}

function protectSheet(sheetName) {
  // Protect the active sheet, then remove all other users from the list of editors.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheetName) || ss.getActiveSheet();
  var protection = sheet.protect().setDescription('Sample protected sheet');

  // Ensure the current user is an editor before removing others. Otherwise, if the user's edit
  // permission comes from a group, the script will throw an exception upon removing the group.
  var me = Session.getEffectiveUser();
  protection.addEditor(me);
  protection.removeEditors(protection.getEditors());
  if (protection.canDomainEdit()) {
   protection.setDomainEdit(false);
  }
}