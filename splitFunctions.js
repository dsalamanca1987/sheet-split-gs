function sanitizeData(colId, tgtString) {
  // Removes target string from all items in column
  colId = colId || 4;
  tgtString = tgtString || 'SET of ';
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow();   // Number of rows to process
  var dataRange = sheet.getRange(startRow, colId, numRows, 1);
  var data = dataRange.getValues();
  var newData = data.map(function(item) {
    if(item[0].indexOf(tgtString) === -1) {
      return item;
    } else {
      return ([item[0].slice(tgtString.length)]);
    }
  });
  Logger.log(newData);
  dataRange.setValues(newData);
}

function splitData() {
  var sheet = SpreadsheetApp.getActiveSheet();
  SpreadsheetApp.getUi().alert('Yes?');
}