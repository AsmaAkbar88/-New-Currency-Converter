#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the list of currencies and their exchange rates
let currency: any = {
    USD: 1,
    JYP: 113,
    EUR: 0.9,
    CAD: 1.3,
    AUD: 1.65,
    PAK: 277.70 // Pakistan Rupees
    // add more currency 
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.green(" \n Select the currency to convert from: "),
        type: "list",
        choices: ["USD", "JYP", "EUR", "CAD", "AUD", "PAK"]
    },
    {
        name: "to",
        message: chalk.greenBright("\n Select the currency to convert into: "),
        type: "list",
        choices: ["USD", "JYP", "EUR", "CAD", "AUD", "PAK"]
    },
    {
        name: "amount",
        message: chalk.magenta(" \n Enter the amount to convert: "),
        type: "number",
    },
]);
// console.log(user_answer)
// perform currency conversion by using formula
let from_amount = currency[user_answer.from];
let to_amount = currency[user_answer.to];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Disply the converted amount
console.log(chalk.blueBright.bold(" \n Converted Amount: ", (converted_amount.toFixed(2))));
