const {Given, When, Then} = require('cucumber');
const Selector = require('testcafe').Selector;

Given('Abriendo la pagina de login', async function(){

    await testController.navigateTo('https://the-internet.herokuapp.com/login');

});

When('Escribiendo el username {string}', async function(username){
    let input = Selector('input#username').with({boundTestRun: testController});
    await testController.typeText(input, username);
});

When('Escribiendo el password {string}', async function(password){
    let input = Selector('input#password').with({boundTestRun:testController});
    await testController.typeText(input, password);
});

When('Dando click en el boton log', async function(){
    let button = Selector('button').with({boundTestRun:testController});
    await testController.click(button);
});

Then('Mostrando el mensaje ', async function(){
    let responseCard = Selector('div#flash').with({boundTestRun:testController});
    await testController.expect(responseCard.innerText).contains('You logged into a secure area!');
});

