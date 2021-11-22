
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('https://qa-devops.herokuapp.com:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('onclick Draw button displays div #choices', async ()=>{
    await driver.findElement(By.id('draw')).click();
    driver.manage().setTimeouts( { implicit: 5000 } )
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true) 
})

describe('does Add to Duo botton cause div #player-duo to display', () => {
        test('is div player-duo present before onclick Add to Duo', async ()=>{
            
            const displayedOriginal = await driver.findElement(By.id('player-duo')).isDisplayed();
            expect(displayedOriginal).toBe(false)
            
        })
        

        test('onclick Add to Duo button displays div #player-duo', async ()=>{

            await driver.findElement(By.id('draw')).click();
            driver.manage().setTimeouts( { implicit: 5000 } );
            await driver.findElement(By.xpath("//button[text()='Add to Duo']")).click();
            driver.manage().setTimeouts( { implicit: 5000 } );
            const playerDuo = await driver.findElement(By.id('player-duo'));
            const displayed = await playerDuo.isDisplayed();
            expect(displayed).toBe(true) 
        
        })

    })


// Check that when a bot is “Removed from Duo”, that it goes back to “choices”

// Note: You may want to use the sleep function after clicking on an element to make sure the tests don’t get ahead of themselves.