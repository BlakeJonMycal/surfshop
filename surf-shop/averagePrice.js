const { inventory } = require("./data.js")
const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")
for (let surfProduct of inventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }


    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (message !== "") {
        console.log(message)
    }
}
const averagePrice = calculateAveragePrice(inventory)
for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}  
console.log("\n------------------------\n")

console.log("\n------------------------\n")



console.log(averagePrice)

