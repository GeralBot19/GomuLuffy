let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐌𝐞𝐧𝐬𝐚𝐣𝐞:  ${pesan}`
let teks = `𝙰𝙲𝚃𝙸𝚅𝙴𝙽𝚂𝙴 - 𝙰𝙽𝙾𝚃𝙴𝙽𝚂𝙴 𝙾 𝚂𝙴𝚁𝙰𝙽 𝙲𝚄𝙿𝙾!! \n\n ${oi}\n\n ➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `🎭 ≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐆𝐨𝐦𝐮𝐋𝐮𝐟𝐟𝐲 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
