"use strict";


/**
 * Opens the browser print dialogue.
 *
 * The CSS @media print rules automatically:
 * - Remove the website buttons
 * - Remove the grey website background
 * - Remove the CV shadow
 * - Format the CV as A4
 *
 * The document title is temporarily changed so browsers may
 * suggest "Lee_Mifsud_CV" as the PDF filename.
 */
function downloadCV() {

    const originalTitle = document.title;

    document.title = "Lee_Mifsud_CV";

    window.print();


    /*
     * Restore the normal website title shortly after the
     * print dialogue has opened.
     */
    window.setTimeout(() => {

        document.title = originalTitle;

    }, 1000);

}


/**
 * Keyboard accessibility.
 *
 * Press Ctrl + Shift + D to open the CV download / print
 * dialogue while viewing the CV page.
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