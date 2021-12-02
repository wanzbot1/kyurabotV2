let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('bg', '/simi', { pesan: text }))
        if (!res.ok) return m.reply(eror)
        let json = await res.json()
        if (json.result.jawab == 'Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.') await m.reply('siminya blom diajarin, ajarin di https://simsimi.com/teach')
        else await m.reply(`*Simi:* ${json.result.jawab}`)
        return !0
    }
    return true
}
module.exports = handler
