let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        

let res = await fetch(global.API('bg', '/simi', { pesan: text })) 

   let json = await res.json() 

   if (json.status !== true) throw json 

   m.reply(json.result.jawab) 

 }
}
module.exports = handler
