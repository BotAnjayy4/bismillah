/**
   * Base Ori By : Dika Ardnt.
   * Recode By : RyukaTeam
   * Source Base : https://github.com/DikaArdnt
   * Source Recode : https://youtube.com/channel/UCjxavxEQa1Wd9A4J9tOmATA
   * No Enc? Ga Dijual Om 🤣
   * Gausah Reupload Kontol!
   * */

const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
    
    //===> GAUSAH DIUBAH
    global.owner = [`${setting.nomerowner}`,`${setting.nomerowner2}`,`${setting.nomerowner3}`] //Kalo Mau Lebih Tambahin Aja Dari Setting.json nya
    global.packname = `${setting.namaowner}`
    global.author = `© ${setting.namaowner}`
    global.sessionName = `${setting.sessionname}`
    global.donasi = `${setting.donasi}`
    global.prefa = ['','!','/','#','.']
    global.sp = '⭔'
    
    //===> EDIT SESUAI KEMAUANMU
    global.mess = {
    admin: '*LU Cuma Member Gblk🗿*',
    botAdmin: '*Gw Member Doank Bng:v*',
    owner: '*Sewa Owner Lah 😱*',
    group: '*Jan Disini,Di Gc Bae*',
    private: '*Pribadi Bae*',
    bot: '*KHUSUS PENGGUNA NOMER BOT*',
    wait: '*SABAR SEDANG DI PROSES ...*',
    done: '*DONE NGAB 🤗*',
    }
    global.thumb = fs.readFileSync('./media/ryuu.jpg')
    
    //===> INI JUGA GAUSAH DIUBAH
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
    })
