const SHEET_NAME = "Website Enquiries";

function doPost(e) {
  try {
    const payload = JSON.parse((e.postData && e.postData.contents) || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET") || "";

    if (expectedSecret && payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet(spreadsheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Course",
        "Message",
        "Source",
        "IP Address",
        "User Agent",
      ]);
    }

    sheet.appendRow([
      new Date(),
      text(payload.name),
      text(payload.email),
      text(payload.phone),
      text(payload.course),
      text(payload.message),
      text(payload.source),
      text(payload.ip),
      text(payload.userAgent),
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function getOrCreateSheet(spreadsheet) {
  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function text(value) {
  return value === undefined || value === null ? "" : String(value).slice(0, 5000);
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
