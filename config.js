/* Copyright (C) 2020 Yusuf Usta.

WhatsAsena - Yusuf Usta
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v8.0.0',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.INRL_SESSION === undefined ? '' : process.env.INRL_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,

    PM_BLOCK: process.env.PM_BLOCK === undefined ? 'false' : process.env.PM_BLOCK,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    WELCOME: process.env.WELCOME === undefined ? 'pp' : process.env.WELCOME,
    OWNER: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    ALL: process.env.ALL_CAPTION === undefined ? 'ᴍᴀᴅᴇ ʙʏ FASWEEH' : process.env.ALL_CAPTION,
    MENTION: process.env.TAG_REPLY === undefined ? '919895339960@s.whatsapp.net' : process.env.TAG_REPLY,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    PLKS: process.env.THERI_LIST === undefined ? false : process.env.THERI_LIST,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER,
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER),
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER,
    BOTNAME: process.env.BOT_NAME === undefined ? '  ☚⃟፝༄INRL☚⃟፝࿐  \n\n   *ωнαтsαρρ вσт™*   \n' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    SONGD: process.env.SONGD === undefined ? '✮⃝🎸INRL ÐØ₩₦ŁØÐł₦G ¥ØUƦ $Ø₦G✮⃝🎧' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? '✮⃝🎸INRL UPŁØλÐł₦G ¥ØUƦ $Ø₦G✮⃝🎧' : process.env.SONGU,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    GEAR: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'Note this' : process.env.TAG_HEADER,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    YAK: process.env.YAK === undefined ? '919895339960,0' : process.env.YAK,
    OWNERSHIP: process.env.OWNER_SHIP === undefined ? 'FASWEEH' : process.env.OWNER_SHIP,
    LOGO: process.env.LOGO_LINK === undefined ? 'https://i.imgur.com/880CEdp.jpeg' : process.env.LOGO_LINK,
    BOTV2: process.env.BOTV2_NAME === undefined ? 'INRL' : process.env.BOTV2_NAME,
    RUDHRA_AI: process.env.RUDHRA_AI === undefined ? 'false' : process.env.RUDHRA_AI,
    ALIVEBUTTON: process.env.ALIVEBUTTON === undefined ? 'ʜᴇʟʟᴏ ʙʀᴏ' : process.env.ALIVEBUTTON,
    ALIVE_BUTTON: process.env.ALIVE_BUTTON === undefined ? 'ʜɪ ᴅᴜᴅᴇ' : process.env.ALIVE_BUTTON,
    LG_LOGO: process.env.LG_LOGO === undefined ? 'https://telegra.ph/file/29caac7b35ddf3a5c8410.jpg' : process.env.LG_LOGO,
    LOGO_NAME: process.env.LOGO_NAME === undefined ? '☚⃟፝༄INRL☚⃟፝࿐' : process.env.LOGO_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'true' : process.env.NO_LOG,
    NU: process.env.NUMBER === undefined ? false : process.env.NUMBER,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "919895339960-1634134075",
    SUPPORT2: "919895809960-1617736751",
    SUPPORT3: "919895809960-1621015274"
};
