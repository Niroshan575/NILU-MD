/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;Un4SQABZ#DFgz45YoUEAqbySpSPMjlRjm5W6eZHZhJT9NE04uY' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://niroshan_malindu_user:twLe2uX3gjYNCl5xcorfZMHyKOUV9il7@dpg-cjor40b6fquc73fndlm0-a.oregon-postgres.render.com/niroshan_malindu'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94714184446'

global.OWNER_NAME = 'ᴄʀᴀᴡʟ_ꜱʟ_ʏᴛ'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = 'you are block now sub and like my yt https://www.youtube.com/@crawl_sl_yt and comment your number i will unblock you' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.BOT_OFFLINE = false     //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@ᴄʀᴀᴡʟ 🤹‍♂️' //sticker

global.FOOTER = 'ᴄʀᴀᴡʟ_ꜱʟ'

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ᴄʀᴀᴡʟ © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = true 

global.ANTI_LINK = 'true' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = true

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/Jojrdp5D3X5DJnuJyaGXes' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: crawl_sl_yt" //ur yt chanel name
global.socialm = "GitHub: niroshan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

