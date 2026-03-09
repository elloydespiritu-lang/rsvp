# Wedding Invitation System Setup Guide

This guide explains how to set up the backend for your wedding invitation system using Google Sheets and Google Apps Script.

## 1. Google Sheets Database Setup

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it **"Wedding Guests Database"**.
3. Rename the first sheet (tab at the bottom) to **"Guests"**.
4. Create the following headers in row 1 (A1 to H1):
   - `GuestID`
   - `GuestName`
   - `InviteCode`
   - `Email`
   - `RSVPStatus`
   - `NumberOfGuests`
   - `Message`
   - `Timestamp`
5. Add some sample data in row 2:
   - GuestID: `1`
   - GuestName: `John & Jane Doe`
   - InviteCode: `INV001`
   - Email: `john@example.com`
   - RSVPStatus: `Pending`

## 2. Google Apps Script Backend Code

1. In your Google Sheet, click on **Extensions > Apps Script**.
2. Delete any code in the editor and paste the following code:

```javascript
const SHEET_NAME = 'Guests';

function doGet(e) {
  // Handle CORS preflight requests
  if (e.parameter.action === 'options') {
    return ContentService.createTextOutput('')
      .setMimeType(ContentService.MimeType.TEXT);
  }

  const action = e.parameter.action;
  
  if (action === 'getGuest') {
    const inviteCode = e.parameter.inviteCode;
    const guestData = getGuestByCode(inviteCode);
    
    return ContentService.createTextOutput(JSON.stringify(guestData))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const action = e.parameter.action;
  
  if (action === 'submitRSVP') {
    const result = updateRSVP(
      e.parameter.inviteCode,
      e.parameter.attendance,
      e.parameter.guests,
      e.parameter.message
    );
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid action' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getGuestByCode(inviteCode) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === inviteCode) { // Column C is InviteCode (index 2)
      return {
        success: true,
        guestName: data[i][1],
        status: data[i][4]
      };
    }
  }
  
  return { success: false, error: 'Guest not found' };
}

function updateRSVP(inviteCode, attendance, guests, message) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === inviteCode) {
      // Update row (i + 1 because rows are 1-indexed)
      sheet.getRange(i + 1, 5).setValue(attendance); // RSVPStatus
      sheet.getRange(i + 1, 6).setValue(guests);     // NumberOfGuests
      sheet.getRange(i + 1, 7).setValue(message);    // Message
      sheet.getRange(i + 1, 8).setValue(new Date()); // Timestamp
      
      return { success: true };
    }
  }
  
  return { success: false, error: 'Guest not found' };
}
```

## 3. Deployment Instructions

1. In the Apps Script editor, click **Deploy > New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the details:
   - Description: `Wedding API v1`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**.
5. Authorize the access when prompted (you may need to click "Advanced" and "Go to project (unsafe)").
6. Copy the **Web app URL**. It will look like `https://script.google.com/macros/s/.../exec`.

## 4. Connecting Frontend to Backend

In your React application (`src/App.tsx` and `src/components/RSVP.tsx`), replace the placeholder API calls with your actual Web app URL.

**In `src/App.tsx`:**
```javascript
const response = await fetch(`YOUR_WEB_APP_URL?action=getGuest&inviteCode=${code}`);
```

**In `src/components/RSVP.tsx`:**
```javascript
await fetch('YOUR_WEB_APP_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    action: 'submitRSVP',
    inviteCode: inviteCode || 'UNKNOWN',
    attendance: formData.attendance,
    guests: formData.guests,
    message: formData.message
  })
});
```

## 5. Example Personalized Invitation Link

Once deployed to Netlify or Vercel, your links will look like this:

`https://your-wedding-site.netlify.app/?invite=INV001`

When the guest opens this link, the site will read `INV001`, fetch "John & Jane Doe" from your Google Sheet, and display a personalized greeting!
