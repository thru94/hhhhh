const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gv8gyY7S#0F2Qc8-f0fmLccjJiJQi1nKgdTht7fFqeNaYs5yN-O4", // session id
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", // true,false
ANTI_DELETE: process.env.ANTI_DELETE || "true", // true,false
MODE: process.env.MODE || "public", // public,private,groups,inbox
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE || "false", // true,false
LANG: process.env.LANG || "EN",





};
