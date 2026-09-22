import chalk from "chalk"
import dedent from "dedent-js"

const printError = (error) => {
  console.log(chalk.bgRed(' Error ') + " " + error)
}

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' Success ') + " " + message)
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(" HELP ")}
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для сохранения токена
    `
    )
}

export { printError, printSuccess, printHelp }
