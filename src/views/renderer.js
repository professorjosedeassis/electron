/**
 * Processo de renderização
 */

console.log("Processo de renderização")
console.log(`Electron: ${api.verElectron()}`)

function openChild() {
    //console.log("teste do botão")
    api.open()
}

api.send("Oi!")

api.on((event, message) => {
    console.log(`Processo de renderização recebeu uma mensagem: ${message}`)
})