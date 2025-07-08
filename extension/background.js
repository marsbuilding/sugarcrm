// Background script for Chrome extension
// This file is included for potential future features but is not required for basic functionality

chrome.runtime.onInstalled.addListener(() => {
    console.log('Minimal CRM extension installed');
});

// Handle any future background tasks here
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'local' && changes.deals) {
        console.log('Deals updated:', changes.deals.newValue?.length || 0, 'total deals');
    }
});