require('./lib/info')//DADOS
require('./lib/msg')//TEMA
//require('./index.js')
const  { default:
/*DEPENDE*/     makeWASocket,
                  AnyMessageContent, 
                  delay, DisconnectReason,
                  fetchLatestBaileysVersion,
/*By Resk*/      getAggregateVotesInPollMessage,
                  makeCacheableSignalKeyStore,
                  makeInMemoryStore,
                  PHONENUMBER_MCC, proto, 
                  useMultiFileAuthState,
                  downloadContentFromMessage,
                  generateWAMessageFromContent,
                  WAMessageContent, WAMessageKey 
                  }= require('@whiskeysockets/baileys')
                  
//.         DEPENDÊNCIAS
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request');
const { Boom } = require('@hapi/boom')
const NodeCache = require('node-cache')
const readline = require('readline')
const fs = require('fs')
const P = require('pino')
const mimetype = require("mime-types")
const { exec, spawn, execSync } = require("child_process")
const { color } = require('./lib/scraap/funções')
const moment = require('moment-timezone')
const hora = moment.tz('America/Sao_Paulo').format('HH:mm')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

//.           CODIGO SEM QRCODE
const useStore = !process.argv.includes('--no-store')
const usePairingCode = process.argv.includes('--use-pairing-code')
const msgRetryCounterCache = new NodeCache()
//interface
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

//.           INTELIGÊNCIA 

const { init, askAI, Chat } = require("bard-ai");
const chatGPTAPI = require('@danitech/chatgpt-api');
const { models } = chatGPTAPI;
const { chatGPT3, chatGPT35, chatGPT4 } = models;

//.           SCRAPER MODULO
const { upload, nit } = require('./lib/scraap/tourl');
const { play1, play2 } = require("./lib/scraap/scraper-play.js");
const { NoticiasAoMinuto, baixarVideoInstagram } = require('./lib/scraap/scraper2')
const { LetradaMusica } = require('./lib/scraap/letraMusic.js')

const msgm = require('./lib/user/null.json')

//.           EXPORTAÇÃO JSON
const autofigu = JSON.parse(fs.readFileSync('./lib/id/autofigu.json'))
//.           EXPORTAÇÃO JS
const { menu } = require('./lib/menu/menu.js')
//.           FUNÇÕES JS
// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}
const { getGroupAdmins, getBuffer, fetchJson } = require('./lib/scraap/funções')
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};
const getExtension = async (type) => {
	return await mimetype.extension(type)
}
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

//.          VERIFICADOS

module.exports = { 
//.           MENU MSG
menu, msgm,

//.           EXPORTAÇÃO JSON
autofigu,
//.           EXPORTAÇÃO JS

//.           DEPENDÊNCIAS 
axios, cheerio, request, Boom,
NodeCache, readline, fs, P,
mimetype, exec, spawn, execSync,
color, moment, hora, data, init, getRandom,

//.           INTELIGÊNCIA 
askAI, Chat, chatGPTAPI,
chatGPT3,chatGPT35, 
chatGPT4,models,

//.           SCRAPER MODULO
play1, play2,
NoticiasAoMinuto, baixarVideoInstagram,
LetradaMusica, 
upload, nit,

//.           FUNÇÕES JS
getGroupAdmins, getBuffer, 
getRandom, 
getExtension, getFileBuffer,DLT_FL,
fetchJson,


//.           SEM QRCODE
 useStore,
 usePairingCode,
 msgRetryCounterCache,
 rl,
 question
}

 