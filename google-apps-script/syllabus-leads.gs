/**
 * CyberVSI syllabus lead collector.
 *
 * Create a spreadsheet tab named "Syllabus Leads" with this header row:
 * Timestamp | Name | Email | Phone | Course | Message | Source | Submitted At
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: "CyberVSI leads endpoint" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  spreadsheet.setSpreadsheetTimeZone("Asia/Kolkata");
  const sheet = spreadsheet.getSheetByName("Syllabus Leads") || spreadsheet.insertSheet("Syllabus Leads");
  const data = JSON.parse(e.postData.contents || "{}");
  const timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Course", "Message", "Source", "Submitted At"]);
  }

  sheet.appendRow([
    timestamp,
    String(data.name || "").trim(),
    String(data.email || "").trim().toLowerCase(),
    String(data.phone || "").trim(),
    String(data.course || "").trim(),
    String(data.message || "").trim(),
    String(data.source || "website").trim(),
    timestamp,
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
