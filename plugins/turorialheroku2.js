let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪STORE⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *tutorial heroku*           
║│ *LANGSUNG KE*
║│ *OWNER*
╰─────────❉
📮 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ *_Tolong jangan dispam_*
_____••••••••• 
⬣━〔Store By Rozi〕━⬣
▌│█║▌║▌║║▌║▌║█│▌`.trim()
  const button = {
        buttonText: '↱ 🄺🄻🄸🄺 🅂🄸🄽🄸 ↲',
        description: kontol,
        sections:  [{title: "STORE heroku", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner rozi', description: "kalau mau jasa tutorial silahkan cht owner zifabotz", rowId:".sewazif"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(heroku3|run3)$/i
handler.help = ['heroku3']
module.exports = handler
