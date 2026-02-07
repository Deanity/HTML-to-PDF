const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const html = fs.readFileSync("surat_pemberhentian.html", "utf-8");

    await page.setContent(html, {
        waitUntil: "networkidle0"
    });

    await page.pdf({
        path: "Surat-Pemberhentian.pdf",
        format: "A4",
        printBackground: true
    });

    await browser.close();
})();
