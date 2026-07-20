"use strict";


/**
 * Opens the browser print dialogue so the CV can be saved as a PDF.
 * The print stylesheet formats the document as two A4 pages.
 */
function downloadCV() {
    const originalTitle = document.title;

    document.title = "Lee_Mifsud_CV";
    window.print();

    window.setTimeout(() => {
        document.title = originalTitle;
    }, 1000);
}


/**
 * Keyboard shortcut: Ctrl + Shift + D
 */
document.addEventListener("keydown", (event) => {
    const isDownloadShortcut =
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "d";

    if (!isDownloadShortcut) {
        return;
    }

    event.preventDefault();
    downloadCV();
});
