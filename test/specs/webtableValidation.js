import { expect as chaiExpect } from "chai"
describe('Web Table validation test suite', async () => {
   xit('web table validation test-case', async () => {
        await browser.url('/seleniumPractise/#/offers')
        await $("tr th:first-child").click()
        //retrieve the list of veggie names into an array A
        //sort the array A -> and store in array B
        //compare array A & array B
        const veggiesElements = $$("tr td:first-child")
        const originalVeggieNames = await veggiesElements.map(async veggie => await veggie.getText())
        console.log(originalVeggieNames)
        const veggies = originalVeggieNames.slice()
        //Arrays are pass by reference
        const sortedVeggies = veggies.sort()
        console.log(sortedVeggies)
        //chaiExpect(originalVeggieNames).to.eql(sortedVeggies)
        chaiExpect(veggies).to.eql(sortedVeggies)
    })

    it('Web table filter validation', async () => {
        await browser.url('/seleniumPractise/#/offers')
        await $("#search-field").setValue('tomato')
        const veggieLocators = $$("tr td:nth-child(1)")
        await expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        //expect(veggieLocators).toBeElementsArrayOfSize(1)
        console.log(await veggieLocators[0].getText())
        await expect(veggieLocators[0]).toHaveText('Tomato')
    })
})