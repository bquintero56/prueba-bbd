const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abriendo la pagina de Google', async function() {
    await testController.navigateTo('https://google.com');
});

When('Buscando {string} en Google', async function(text) {
    var input = Selector('.gLFyf').with({boundTestRun: testController});
    await this.addScreenshotToReport();
    await testController.typeText(input, text);
});

Then('Precionando click {string} para buscar en Google', async function(text) {
    await testController.pressKey(text);
});


