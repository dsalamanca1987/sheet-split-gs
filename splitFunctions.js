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

function getData(sheet) {
  sheet = sheet || SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process
  var startCol = 1;
  var numRows = sheet.getLastRow();   // Number of rows to process
  var numCols = sheet.getLastColumn();
  var dataRange = sheet.getRange(startRow, startCol, numRows, numCols);
  return dataRange.getValues();
}

function runSplit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  //var ui = SpreadsheetApp.getUi();
  //var response = ui.alert('Are you sure you want to proceed?');
  // Process the user's response.
  //if (response == ui.Button.YES) {
  var dataObject = getSplitData(getData());
  //Logger.log(dataObject);
  var singleData = getDataByName(dataObject, "Pic Collage - Photo Collage Maker & Picture Editor");
  Logger.log(JSON.stringify(singleData));
  
  //}
  return;
}

function getSplitData(data, colId) {
  // Returns object of data with product name arrays
  colId = colId || 3;
  var dataObj = {};
  data.forEach(function(item, i) {
    if (dataObj.hasOwnProperty(item[colId])) {
      dataObj[item[colId]].push(data[i])
    } else {
      dataObj[item[colId]] = [];
    }
  });
  return dataObj;
}

function getDataByName(dataObj, name) {
  return dataObj[name];
}