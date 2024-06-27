const { assert } = require("console");
var randomEmail = generateRandomEmail();
const phoneNumber = generateRandomPhoneNumber();
module.exports = {
    
    
    'Login Test'(browser){
        
        browser.url('https://my.smartville.gr/login')
        browser.window.maximize();
        browser.waitForElementVisible('.languages')
        browser.element.findByText('Να επιτρέπονται όλα').click();
        browser.waitForElementVisible('button[type="submit"]');
        browser.element.find('#input-32').sendKeys('aggelos@ianic.gr');
        browser.element.find('#input-35').sendKeys('12345678');
        browser.click('button[type="submit"]');
        browser.element.findByText('Επιλέξτε υπηρεσία');
        browser.click('.v-list .deya-item:first-child');
        browser.pause(3000);
        browser.waitForElementVisible('.v-card');
        browser.waitForElementVisible('.stick');
        browser.end();
    },

    'Register Test'(browser, i){
        browser.window.maximize();
        
        for (let i = 0; i < 1; i++) {
            browser.url('https://my.smartville.gr/login');
            if (i == 0) {
               browser.element.findByText('Να επιτρέπονται όλα').click(); 
            }
            
            browser.click('a[href="/register"]');
            browser.pause(1000);
            browser.element.findAll('.v-input__slot').nth(0).click();
            browser.click(`#list-item-182-${i}`);
            browser.element.find('#input-101').sendKeys('name');
            browser.element.find('#input-104').sendKeys('lastname');
            browser.element.find('#input-107').setValue(randomEmail);
            browser.element.find('#input-110').setValue(phoneNumber);
            browser.element.findAll('.v-input--selection-controls__ripple').nth(2).click();
            browser.click('button[type="submit"]');
            browser.pause(1000);
            browser.verify.visible('.header-area'); 
        }
    },


    'light/dark mode test'(browser) {
        browser.url('https://my.smartville.gr/login')
        browser.window.maximize();
        //wsdearvb\dtgn mbrowser.element.findByText('Να επιτρέπονται όλα').click();
        browser.waitForElementVisible('.languages')
        //browser.element.findByText('Να επιτρέπονται όλα').click();
        browser.waitForElementVisible('button[type="submit"]');
        browser.element.find('#input-32').sendKeys('aggelos@ianic.gr');
        browser.element.find('#input-35').sendKeys('12345678');
        browser.click('button[type="submit"]');
        browser.element.findByText('Επιλέξτε υπηρεσία');
        browser.click('.v-list .deya-item:first-child');
        browser.pause(3000);
        browser.waitForElementVisible('.v-card');
        browser.waitForElementVisible('.stick');
        browser.waitForElementVisible('.dark-theme');
        browser.element.find('.dark-theme').click();
        browser.pause(3000);
        //browser.element.find('.v-icon notranslate icon icon-sun theme--dark');
        //browser.waitForElementVisible('.light-theme');
    },

    'bills tab test' (browser) {
        browser.element.find('a[href="/bills"]');
        browser.click('a[href="/bills"]');
        for (let index = 0; index < 3; index++) {
            browser.click('.languages')
            browser.element.findAll('[role="menuitem"]').nth(index).click();
            browser.element.find('.dark-theme').click();
            browser.assert.visible('.v-tab.v-tab--active[role="tab"][aria-selected="true"]')
            //browser.waitForElementVisible('.d-flex.align-center.ms-5.mb-7 .v-btn--icon.v-btn--round',2000)
            //browser.waitForElementVisible('.v-tab.v-tab--active[role="tab"][aria-selected="true"]', 2000)
            browser.element.find('.dark-theme').click();
            browser.assert.visible('.d-flex.align-center.ms-5.mb-7 .v-btn--icon.v-btn--round')
            //browser.waitForElementVisible('.d-flex.align-center.ms-5.mb-7 .v-btn--icon.v-btn--round',2000)
            //browser.waitForElementVisible('.v-tab.v-tab--active[role="tab"][aria-selected="true"]', 2000)
        }
        
        
    },

    'return to gr'(browser) {
        browser.assert.visible('.languages')
        browser.pause(3000);
        browser.element.find('.languages').click();
        browser.element.findAll('[role="menuitem"]').nth(1).click();
    },
    

    'Verify PDF Presence in All Expansion Panels' (browser) {
        browser
        //.url('your-webpage-url')  // Replace with your actual URL
        .waitForElementVisible('body', 1000)
        .elements('css selector', 'div.v-expansion-panel', function (result) {
            console.log('Expansion Panels Result:', result);  // Log the result

            if (result.status !== -1 && result.value.length > 0) {
                const expansionPanels = result.value;

                expansionPanels.forEach((panel) => {
                    if (panel && panel.ELEMENT) {
                        browser.elementIdElements(panel.ELEMENT, 'css selector', 'a.v-btn', function (res) {
                            console.log('PDF Links Result:', res);  // Log the result

                            if (res.status !== -1 && res.value.length > 0) {
                                const pdfLinks = res.value;

                                let foundPdf = false;

                                pdfLinks.forEach((link) => {
                                    if (link && link.ELEMENT) {
                                        browser.elementIdText(link.ELEMENT, function (textRes) {
                                        console.log('PDF Link Text:', textRes.value);  // Log the link text

                                        if (textRes.status !== -1 && textRes.value === 'PDF') {
                                            foundPdf = true;
                                        }
                                        });
                                    }
                                });

                                browser.perform(() => {
                                    browser.assert.ok(foundPdf, 'PDF link found in the expansion panel');
                                });
                            } else {
                                browser.perform(() => {
                                    browser.assert.fail('No PDF links found within the expansion panel');
                                });
                            }
                        });
                    } else {
                        browser.perform(() => {
                            //browser.assert.fail('No valid expansion panel element found');
                            
                        });
                    }
                });
            } else {
                browser.perform(() => {
                    browser.assert.fail('No expansion panels found on the page');
                });
            }
        });
    },

    'report tab test' (browser) {
        browser.element.find('a[href="/report"]')
        browser.click('a[href="/report"]');
        browser.element.find('.dark-theme').click();
        browser.element.find('.v-file-input__text');
        browser.element.find('.dark-theme').click();
        browser.element.find('.v-file-input__text');
    },

    'announcemens tab test' (browser) {
        browser.element.find('a[href="/announcements"]')
        browser.click('a[href="/announcements"]');
    },
    'support tab test' (browser){
        browser.element.find('a[href="/support"]')
        browser.click('a[href="/support"]');
    },
    'account tab test' (browser){
        browser.element.find('a[href="/account"]')
        browser.click('a[href="/account"]');
    },


    'theme test' (browser) {

    },


    after(browser){
         browser.end();
    },
}

function generateRandomEmail() {
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var username = '';
    for (var i = 0; i < 10; i++) {
        username += chars[Math.floor(Math.random() * chars.length)];
    }
    var domain = 'ianic.gr'; // You can choose any other domain
    return username + '@' + domain;
}

function generateRandomPhoneNumber() {
    const randomDigits = Math.floor(Math.random() * 10000000000);
    return randomDigits.toString().padStart(9, '0');
}