let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪𝐒𝐄𝐖𝐀 𝐒𝐀𝐓𝐁𝐎𝐓𝐒𝐒⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *SEWA BOT TANYA*           ║│ *LANGSUNG KE*
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
        sections:  [{title: "STORE SATBOTSSS", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner satbotsss', description: "kalau mau sewa silahkan cht owner satbotsss", rowId:".ownersatbotsss"},
        {title: 'RULES', description: "rules zifabotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(botsattt|sewasat)$/i
handler.help = ['rules']
module.exports = handler
