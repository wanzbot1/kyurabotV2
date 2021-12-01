let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney - Pulsa〕
├ PULSA : 081998903280
├ Dana/Ovo/Gopay : 081998903280
Saweria : bit ly/donasisawer
└────

ingin donasi? Chat Owner
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
