# Minimal CRM Chrome Extension

A super minimal CRM that replaces your new tab page with a clean, functional dashboard inspired by Apple Notes.

## Features

- **Replace New Tab**: Opens a CRM dashboard in every new tab
- **Minimal Design**: Clean, Apple Notes-inspired interface with black text on white background
- **Persistent Storage**: All data saved locally using Chrome's storage API
- **Deal Management**: Add, edit, and delete deals with essential fields
- **Tagging System**: Organize deals by stage (Lead, Contacted, Qualified, Won, Lost) and funnel type (Sales, Partnerships, Advisors)
- **Offline First**: Works completely offline with no external dependencies

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `extension` folder
4. The extension will now override your new tab page

## Usage

- **New Deal**: Click the "+ New Deal" button to add a new deal
- **Edit Deal**: Click on any deal in the list to edit it
- **Delete Deal**: Open a deal for editing and click the "Delete" button
- **Data Persistence**: All data is automatically saved and will persist across browser sessions

## Data Storage

All data is stored locally using Chrome's `chrome.storage.local` API. Your data never leaves your device and works completely offline.

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension format)
- **Permissions**: Only `storage` permission for local data persistence
- **Technology**: Vanilla JavaScript, HTML, and CSS (no frameworks)
- **Storage**: Chrome Storage API for persistent data
- **Design**: Apple Notes-inspired minimalist interface

## File Structure

```
extension/
├── manifest.json       # Chrome extension manifest
├── newtab.html        # Main HTML page
├── newtab.js          # JavaScript functionality
├── style.css          # Minimal styling
├── background.js      # Background script
└── README.md          # This file
```

## Customization

The extension is built with vanilla JavaScript and CSS, making it easy to customize:

- Modify `style.css` for visual changes
- Update `newtab.js` for functionality changes
- Add new fields by updating both the HTML form and JavaScript logic

## Privacy

This extension:
- Stores all data locally on your device
- Does not send any data to external servers
- Does not require user authentication
- Works completely offline
- Requires only minimal permissions