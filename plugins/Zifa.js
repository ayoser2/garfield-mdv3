let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
  Status : *_PRIVASI_* 

╭═[ *SCRIPT* ]═────···
┴
📮: *SC-SC MULU! BUAT LAH JGAN GRTISAN MULU...*
*PEMILIK SC:* wa.me/94772496127
╭═[ [❗] kalau mau beli sc silahkan chat pemilik sc aja ]═────···
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'PRIVASI')).buffer(), ext, '𝐨𝐰𝐧𝐞𝐫', 'MENU', '.menu', 'SC LAIN', '.sclain', m)

}
handler.customPrefix = /^(sc|.sc|script|.script)$/i
handler.command = new RegExp

module.exports = handler
let wm = global.botwm
