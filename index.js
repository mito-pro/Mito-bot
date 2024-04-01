/*
My real nickname is empty Resk
*/
const  { default:
makeWASocket,
AnyMessageContent, 
delay, DisconnectReason,
fetchLatestBaileysVersion,
getAggregateVotesInPollMessage,   /*By Resk*/
makeCacheableSignalKeyStore,
makeInMemoryStore,
PHONENUMBER_MCC, proto, 
useMultiFileAuthState,
downloadContentFromMessage,
generateWAMessageFromContent,
WAMessageContent, WAMessageKey 
}= require('@whiskeysockets/baileys')
require('./lib/info')//DADOS
require('./lib/msg')//TEMA

const { 
axios, cheerio, request, Boom, NodeCache,readline, fs, P, mimetype, exec, spawn,execSync, color, moment, hora, data,init, askAI, Chat, chatGPTAPI, chatGPT3,chatGPT35, chatGPT4, models, play1,play2, NoticiasAoMinuto, baixarVideoInstagram,LetradaMusica, menu, msgm,getGroupAdmins, getBuffer, getExtension, getFileBuffer,useStore,usePairingCode,msgRetryCounterCache,rl,question,
autofigu,getRandom,DLT_FLconst, upload, nit,fetchJson
} = require('./const.js');
 

//.   INICIO START
async function R3skOn() {
    const store = makeInMemoryStore({
        logger: P().child({
            level: 'debug',
            stream: 'store'
        })
    })
    // NOME DO ARQUIVO DO CÓDIGO QR
    const { state, saveCreds } = await useMultiFileAuthState('./lib/qr-code')
    const { version } = await fetchLatestBaileysVersion();
    const question = (text) => new Promise((resolve) => rl.question(text, resolve));

	const sock = makeWASocket({
version,
logger: P({ level: "silent" }),
usePairingCode,
mobile: false,
browser: ["FireFox (linux)"],
auth: state,
msgRetryCounterCache,
defaultQueryTimeoutMs: undefined,
patchMessageBeforeSending: (message) => {
                  
 const requiresPatch = !!(message.buttonsMessage || message.listMessage);
 if (requiresPatch) {
 message = {
 viewOnceMessage: {
 message: {
 messageContextInfo: {
 deviceListMetadataVersion: 2,
 deviceListMetadata: {},
 }, ...message }}}}
 return message;   }});
console.log(`\n\nPREFIX: ${prefix}\n\n`)

//.   CODIGO
if (!sock.authState.creds.registered) {
console.clear()//limpa o console
const phoneNumber = 
await question(`\nSEU NMR EX: 556692443214\n `);
const code = await sock.requestPairingCode(phoneNumber);
 console.log(`Seu código de conexão é: \n\n ${code}\n\n`);
    }
 
	   sock.ev.on("creds.update", saveCreds)
    store.bind(sock.ev)
    sock.ev.on("chats.set", () => {
        console.log("Tem conversas", store.chats.all())})
    sock.ev.on("contacts.set", () => {
        console.log("Tem contatos", Object.values(store.contacts))})
        			
sock.ev.on("connection.update", (update) => {
const {
connection,lastDisconnect } = update
if (connection === "close") {
const shouldReconnect = lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada erro", "Tentando reconectar...", shouldReconnect)
if (shouldReconnect) {
R3skOn()
}
} else if (connection === "open") {
 sock.sendMessage(id.id1, { text: mess.botOn })
}
})
sock.ev.on('messages.upsert', async ({ m, messages }) => {
try {
const info = messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

//.           TIPO MENSAGEM 
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
 bidy =budy.toLowerCase()
var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//.           QUOTEDS
const content = JSON.stringify(info.message)
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

//.        DEFINIÇÕES

const prefixo = prefix
const from = info.key.remoteJid
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
var command = comando
const arg = body.substring(body.indexOf(' ') + 1)
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith('@g.us')
const tescuk = ['0@s.whatsapp.net']
const q = args.join(' ')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const text = args.join(' ')
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const numeroBot = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
//.        BOT/DONO
const isGroupAdmins = groupAdmins.includes(sender) || false 
const argis = bidy.trim().split(/ +/)
const isOwner = sender.includes(numeroDono) 
const SoDono = isOwner
const rsk = sock

//.  CONSOLE 
if(!isGroup && isCmd)//by Resk
console.log(//cmd no pv
`${color('ད𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙉𝙊 𝙋𝙑ཌ', 'red')}\n
NOME: ${pushname}
COMANDO:`,color(command,'red'),'\n')

if(isGroup && isCmd)
console.log(//cmd no gp
`${color('ད𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙀𝙈 𝙂𝙍𝙐𝙋𝙊 ཌ', 'red')}\n
GRUPO: ${groupName}
NOME: ${pushname}
COMANDO:`,color(command,'red'),'\n')

if(!isCmd && !isGroup)
console.log(//msg no pv
`${color('ད𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝙉𝙊 𝙋𝙑ཌ', 'cyan')}\n
NOME:${pushname}\n
MENSAGEM `,color(budy,'cyan'),'\n')

if(isGroup && !isCmd) 
console.log(//msg em gp
`${color('ད𝙈𝙀𝙉𝙎𝘼𝙂𝙀𝙈 𝙀𝙈 𝙂𝙍𝙐𝙋𝙊 ཌ', 'cyan')}\n
GRUPO: ${groupName}
NOME: ${pushname}
MENSAGEM `,color(budy,'cyan'),'\n')

if(isAudio && !isCmd)
console.log(//msg em audio
`${color('ད𝘼𝙐𝘿𝙄𝙊 ཌ', 'cyan')}`)
 

//.       TIPO DA MENSAGEM
const reagir = (reassao) => {
rsk.sendMessage(from, {react: {text: reassao, key: info.key}})}
const reply = (texto) => {
  sock.sendMessage(from, { text: texto }, {quoted: info}) }
 const enviar = (texto) => {
sock.sendMessage(from, { text: texto }, {quoted: info}) }
  
/*        INÍCIO DAS FUNÇÕES 

🪐By Resk 
📅data criação 16/03/24
🗓️última atualização 18/03/24
😮‍💨venda proibida!!
*/

var ase = new Date();
var timed = ase.getHours();
switch(timed){
  case 0: timed = `Boa noite`; break;
  case 1: timed = `Vai dormir`; break;
  case 2: timed = `Vai dormir`; break;
  case 3: timed = `Boa madrugada`; break;
  case 4: timed = `Boa madrugada`; break;
  case 5: timed = `Bom Dia`; break;
  case 6: timed = `Bom Dia`; break;
  case 7: timed = `Bom Dia`; break;
  case 8: timed = `Bom Dia`; break;
  case 9: timed = `Bom Dia`; break;
  case 10: timed = `Bom Dia`; break;
  case 11: timed = `Boa tarde`; break;
  case 12: timed = `Boa tarde`; break;
  case 13: timed = `Boa tarde`; break;
  case 14: timed = `Boa tarde`; break;
  case 15: timed = `Boa tarde`; break;
  case 16: timed = `Boa tarde`; break;
  case 17: timed = `Boa tarde`; break;
  case 18: timed = `Boa noite`; break;
  case 19: timed = `Boa noite`; break;
  case 20: timed = `Boa noite`; break;
  case 21: timed = `Boa noite`; break;
  case 22: timed = `Boa noite`; break;
  case 23: timed = `Boa noite`; break;
}
async function carregamento () {//CARREGAMENTO!!
var carr = ["—͟͞R", "—͟͞RE", "—͟͞RES", "—͟͞RESK", "—͟͞RESKK","—͟͞K","—͟͞SK","—͟͞ESK","—͟͞RESK",`
—͟͞RESK :🍃` + web.canal];
let { key } = await rsk.sendMessage(from, {text: 
`ᴮʸ ᴿᵉˢᵏ`})//primeira mensagem
for (let i = 0; i < carr.length; i++) {
await rsk.sendMessage(from, {text: carr[i], edit: key });
}}

//.         AUTO FIGURINHAS

const isAutofigu = isGroup ? autofigu.includes(from) : false
if(isAutofigu && isGroup) {
async function autofiguf() {
await setTimeout(async() => {    
if(type === "videoMessage") {
if ((isMedia && info.message.videoMessage.seconds < 10)){  
rane = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
buffimg = await getFileBuffer(info.message.videoMessage, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./lib/${rano}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
rsk.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})}}
if(type === "imageMessage") {
rane = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
buffimg = await getFileBuffer(info.message.imageMessage, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
rsk.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})}}, 1000)}
autofiguf().catch(e => {
console.log(e)})}

//.     VIEWS UNICA ENVIA NO PV DO ID

if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var po = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
po.viewOnce = false
po.video = {url: po.url}
po.caption += `\n\n${by}...`
rsk.sendMessage(id.id1,po)
} else {
var po = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
po.viewOnce = false
po.image = {url: po.url}
po.caption += `\n\n${by}...`
rsk.sendMessage(id.id1,po)
}}

//.       GUARDA TODAS AS MENSAGENS 

const gp = isGroup ? true : false
raix = JSON.parse(fs.readFileSync('./lib/user/conversas.json', 'utf-8'))
const reskx = {//BY RESK
 nome: pushname,
 grupo : gp,
 id: from,
 "🤡": {
 data: data , hora: hora,
 msgm: budy }
 }
raix.push(reskx)
fs.writeFileSync('./lib/user/conversas.json', JSON.stringify(raix, null, 3))

//.          VERIFICADOS

raixz = fs.readFileSync("./lib/media/img.jpg")
const verificado  = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `${by}`,
          title: `TM`,
          jpegThumbnail: raixz,
        },
      },
    };
    
    const fig = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `Aqui está o seu sticker!`,
          title: `TM`,
          jpegThumbnail: raixz,
        },
      },
    };
        const fcatalogo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "0@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: raixz,
            },
            title: `${by}`, //R3SK 
            description: "BOT DE WHATSAPP",
            currencyCode: "USD",
            priceAmount1000: "999999000",
            retailerId: "RESK",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
     const floc2  = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        locationMessage: {
          name: "Brasil",
          jpegThumbnail: raixz,
        },
      },
    };

    const fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "0-1625305606@g.us",
          inviteCode: "mememteeeekkeke",
          groupName: "Mengter",
          caption: `${by}`,
          jpegThumbnail: raixz,
        },
      },
    };
    const fkaudio = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "0-1625305606@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: "0",
          ptt: "true",
        },
      },
    };
    
 if(budy === 'bot'){
 rsk.sendMessage(from,{
 sticker: fs.readFileSync('./lib/media/1.webp')},{
 quoted: fgclink })
 }
//.   COMANDOS COM PREFIX

switch(command){

case 'menu': 
carregamento()
{
rsk.sendMessage(from, {
image: raixz, caption: menu(prefix, moldura, moldura2, moldura1, numeroDono, nomeDono, nomeBot, pushname)}, { quoted: fcatalogo })}
break
//.         INTELIGÊNCIA ARTIFICIAL 
case 'bard':
case 'resk':
try{
reagir(r)
await init(token.bard);
let pao = await askAI(q)

 await sock.sendMessage(
    from,{ 
        image: fs.readFileSync('./lib/media/img.jpg'), 
        caption: pao,
        gifPlayback: false
})
}catch (erro) {
reagir(falha)}
reagir(s)
break

case 'ia':
case 'gpt':
try {//by Resk 
if (!q) return enviar('Ola como posso ajudar?')
const response = await chatGPT4(q)
      rsk.sendMessage(from, {
      image: fs.readFileSync('./lib/media/img.jpg'), 
      caption: response },{
      quoted : floc2 })
}catch (e){
enviar (e)
}
break;
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

//.     BAIXADORES
case 'play': 
if (!q) return enviar(mess.pesquisa);
enviar(mess.baixar);
play1(q).then(res => { 
 rsk.sendMessage(from, {image: {url: res.thumb}, caption: tema.musica}, {quoted: fkaudio});
rsk.sendMessage(from, {audio: {url: res.download}, mimetype: 'audio/mpeg', fileName: res.titulo}, {quoted: fkaudio});
}).catch(() => {
return enviar("Erro..");
}); 
break; 
case 'play2':
if (!q) return enviar(mess.pesquisa);
enviar(mess.baixar);
play2(q).then(res => { 
rsk.sendMessage(from, {video: {url: res.download}}, {quoted: info});
}).catch(() => {
return enviar("Erro..");
});
break;

case 'letra':
if (!q) return reply(mess.pesquisa);
reply(mess.baixar)
  try {
    const musicaInfo = await LetradaMusica(q);
    if (musicaInfo.LetraDaMusica && musicaInfo.ImagemMusic) {
      rsk.sendMessage(from, { image: { url: musicaInfo.ImagemMusic }, caption: by+`\n\n${musicaInfo.LetraDaMusica}`});
    } else {
      reply(mess.error);
    }} catch (error) {
reply(mess.error);}
  break;
  
  case 'insta': {
if (!q) return reply('kd a url')
  try {
enviar(mess.baixar)
    const xoxotao = await baixarVideoInstagram(q);
    if (xoxotao.length > 0) {
      const primeiroV = xoxotao[0];
      const instav = `${primeiroV.link_dl}`
      rsk.sendMessage(from, { video: { url: instav, mimetype: 'video/mp4' }})
    } else {
      reply(mess.error);
    }
  } catch (error) {
    reply(mess.error);
    console.error(error);
  }}
  break
  
 case 'ttk':
try {///VIDEO
reagir(r)
if(!q) return reply(mess.link)
if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
require('./lib/scraap/tiktok').Tiktok(q).then( data => {
rsk.sendMessage(from, { video: { url: data.nowm }}, { quoted: fcatalogo })})
} catch {
reply("Deu erro 😔")}
reagir(s)
break

case 'ttk2':
try {///AUDIO
reagir(r)
if(!q) return reply(mess.link)
if (!q.includes('tiktok')) return reply(`Link Invalido..!!`)
require('./lib/scraap/tiktok').Tiktok(q).then( data => {
rsk.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: fkaudio })
})
} catch {
reply("Deu erro 😔")
}
reagir(s)
break
//.             DONOS
//.             DONOS
case 'dono':
rsk.sendMessage(from, {
       displayName: nomeDono,
       contacts: {
       contacts: [{
       vcard: "BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:Resk🥀\n" +
"ORG:🪂💔\n" +
"TEL;waid=556692443214:+55 66 9244-3214\n" +
"END:VCARD"        }]}});
break

  case "igdono":
rsk.sendMessage(from,{

        video: fs.readFileSync('./lib/media/img.mp4'), 
        caption: 'segue agente ' + web.insta,
        gifPlayback: true
})
break 

 case 'getcase':
 case 'pegarcase':
 case 'getcmd':
 case 'pegarcmds':
 const turbrek = `break`
{
 if (!SoDono && !info.key.fromMe) return reply(mess.dono)
 if (!args[0]) return reply("Qual o case que você deseja pegar?")
try {
reply('case ' + `'${args[0]}'` + fs.readFileSync('./index.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch (err) {
console.error(err)
reply(mess.error)
}
}
break

case 'addcase':
if(!SoDono && !info.key.fromMe) return reply(mess.dono)
if (!args.join(" ")) return reply(`*CADE A CASE MANO??*`)
const pula = [fs.readFileSync('index.js', 'utf8').slice(0, fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5), q, fs.readFileSync('index.js', 'utf8').slice(fs.readFileSync('index.js', 'utf8').lastIndexOf('break') + 5)].join('\n');
fs.writeFileSync('index.js', pula);
reply(`*Obrigado ${pushname} por a nova case🤌🏼!*`);
  break

//.          STICKER/FIGURINHAS 

case 'autofigu': case 'autofig':
if (!isGroup) return reply(mess.grupo)
if (!isGroupAdmins) return reply(mess.adm)
if (!isBotGroupAdmins) return reply(mess.botadm)
if (args.length < 1) return reply(user.onf)
if (Number(args[0]) === 1) {
if (isAutofigu) return reply(user.onn)
autofigu.push(from)
fs.writeFileSync('./lib/id/autofigu.json', JSON.stringify(autofigu))
reply(user.on)
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply(user.offf)
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./lib/id/autofigu.json', JSON.stringify(autofigu))
reply(user.off)
} else {
reply(user.onf)
}
break

case 'f':
case 's':
case 'sticker':
case 'stk': {
(async function () {
var legenda = q ? q?.split("/")[0] : `
CRIADOR: 
NUMERO:
BOT: `
var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `
${nomeDono}
${numeroDono}
${nomeBot}
`
if (isMedia && !info.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
 
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
rsk.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: fig})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
rsk.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: fig})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break

//.       ABRIR FECHAR GRUPO

 case'grupo':
case 'gp': 
if (!isGroupAdmins) return reply('So adm')
if (args[0] === 'a') {
reply(`*GRUPO ABERTO COM SUCESSO*`)
await rsk.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*GRUPO FECHADO COM SUCESSO*`)
await rsk.groupSettingUpdate(from, 'announcement')
}				 
break

case 'notif': case 'aviso': case 'notificar':
if (!q) return reply('Qual Aviso mano?')
try {
ppUrl = await rsk.profilePictureUrl(from, 'image') 
} catch {
ppUrl = `${ftbot}`
}
let ds = await getBuffer(ppUrl)
   if (!isGroup) return reply('Comando apenas para grupo')
if (!isGroupAdmins) return reply('Você precisa ser adminstrador pra utilizar este comando.')

   if (!q) return reply(`Coloque o aviso na frente do comando.\nExemplo de como se usar: ${prefixo + command} hoje a noite não haverá sol.`)
let thumbInfo = `        | *MARCAÇAO DOS ADMS* |

Notificação do adminstrador: @${sender.split("@")[0]}
Mensagem: *${q}*`
grouup = await rsk.groupMetadata(from);
member = grouup['participants']
jids = [];
member.map(async adm => { jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
await rsk.sendMessage(from, {image: ds, caption: `${thumbInfo}`, mentions: jids }, { quoted: info})

break

 case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
rsk.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

//.      LINK DE IMG E VÍDEO

case 'link':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
resp = await upload(owgi)
enviar(resp) 
} else if ((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && args.length == 0) { 
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quoted','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
resp = await upload(owgi)
enviar(resp)
} else {
enviar("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
enviar('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é até 30 segundos.')
}
break

 //.   ID DO USUÁRIO OU GRUPO
 
case 'id':
enviar(from)
break
 
 case 'quantoscmd': {
fs.readFile('./index.js', 'utf8', (err, data) => {
 if (err) throw err;
 let regex = /case\s'(\w+)'/g;
 let match;
 let caseNames = [];
 while ((match = regex.exec(data)) !== null) {
 caseNames.push(match[1]);
 }
 let output = '' + caseNames.join('\n• ');
let totalCount = caseNames.length;
 reply(`\n_${nomeBot} tem: ${totalCount} comandos_\n${output} `);
});
}
break

    default:
}


//.      COMANDOS SEM PREFIX
 

 if(bidy === "limpar"){// by Resk
    if (!isGroupAdmins) return reply(mess.adm)
    if (!isGroup) return reply(mess.grupo)
    enviar(limpado)
 }
 
 if(bidy === "resk"){
enviar(web.canal)
 }
 
 if(bidy === 'menu') {// by resk
 carregamento()
rsk.sendMessage(from, {
image: raixz, caption: menu(prefix, moldura, moldura2, moldura1, numeroDono, nomeDono, nomeBot, pushname)}, { quoted: fcatalogo })
}

 
//.      FIM  COMANDOS SEM PREFIX


//await rsk.readMessages([info.key]);//auto vizu
} catch (erro) {
console.log(`${hora}\n\n` + erro)

}})
}R3skOn()

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(tema.index);
process.exit()
}})
