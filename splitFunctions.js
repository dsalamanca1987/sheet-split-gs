function sanitizeData(colId, tgtString) {
  // Removes target string from all items in column
  colId = colId || 4;
  tgtString = tgtString || 'SET of ';
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var numRows = sheet.getLastRow();   // Number of rows to process
  var dataRange = sheet.getRange(startRow, colId, numRows, 1);
  var data = dataRange.getValues();
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    var productName = data[i][0];
    // Logger.log(productName);
    if (productName.indexOf(tgtString) === -1) {
      newData.push([productName]);
    } else {
      newData.push([productName.slice(tgtString.length)]);
    }
  }
  // Logger.log(newData);
  dataRange.setValues(newData);
}