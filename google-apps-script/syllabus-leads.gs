/** CyberVSI lead and payment-confirmation collector. */
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true, service: "CyberVSI leads endpoint" })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.setSpreadsheetTimeZone("Asia/Kolkata");
  var sheet = spreadsheet.getSheetByName("Syllabus Leads") || spreadsheet.insertSheet("Syllabus Leads");
  var data = JSON.parse((e.postData && e.postData.contents) || "{}");
  var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");
  ensureHeaders(sheet);
  var screenshotUrl = "";
  if (data.screenshotDataUrl) screenshotUrl = saveScreenshot(data.screenshotDataUrl, data.paymentId || "payment-proof");
  sheet.appendRow([timestamp, clean(data.name), clean(data.qualification), clean(data.email).toLowerCase(), clean(data.phone), clean(data.course), clean(data.message || ""), clean(data.source || "website"), timestamp, clean(data.paymentId || ""), screenshotUrl]);
  return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaders(sheet) {
  sheet.getRange(1, 1, 1, 11).setValues([["Timestamp", "Name", "Qualification", "Email", "Phone", "Course", "Message", "Source", "Submitted At", "Payment ID", "Payment Screenshot URL"]]);
}

function saveScreenshot(dataUrl, paymentId) {
  var match = dataUrl.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/);
  if (!match) return "";
  var folders = DriveApp.getFoldersByName("CyberVSI Payment Proofs");
  var folder = folders.hasNext() ? folders.next() : DriveApp.createFolder("CyberVSI Payment Proofs");
  var bytes = Utilities.base64Decode(match[2]);
  var safeId = paymentId.replace(/[^a-zA-Z0-9_-]/g, "-");
  var blob = Utilities.newBlob(bytes, "image/" + match[1], "CyberVSI-" + safeId + "-" + new Date().getTime() + "." + match[1]);
  return folder.createFile(blob).getUrl();
}

function clean(value) { return String(value || "").trim(); }
