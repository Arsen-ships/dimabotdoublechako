// npm install -g pm2
const { VK } = require('vk-io');
let config = require('./database/settings.json');

let start = Date.now()

let fink = true

const businesses2 = require("./spisok/бизнесы.js")

let hash = require("js-md5")

const md5 = require('js-md5');

let mkdirp = require("mkdirp")

const commands = [];

let utils = require('./utils.js')

const { stringify } = require("querystring");

let giving = false;

let chats = require('./database/chats.json')

let log = require('./database/log.json')

let double = require('./database/users.json')

let bossinfo = require('./database/bossinfo.json')

let botinfo = require("./database/botinfo.json");

let lg2 = {}

const fs = require('fs');


function getToken() {
  const tokens = JSON.parse(fs.readFileSync('./database/tokens.json', 'utf8'));
  return {
    token: tokens.token,
  };
}






const tokenData = getToken();

const vk = new VK({
  token: tokenData.token,
});

const path = require('path');

const loadCommands = async () => {
  const cmdDirs = [
    path.join(__dirname, 'команды'),
    path.join(__dirname, 'функции и интервалы'),
  ];

  for (const cmdDir of cmdDirs) {
    const files = fs.readdirSync(cmdDir);

    for (const file of files) {
      if (file.endsWith('.js')) {
        const command = require(path.join(cmdDir, file));
        commands.push(...command);
      }
    }
  }
};
function generateRandomString(length) {
  const englishCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const russianCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const characters = englishCharacters + russianCharacters;
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const chatlogi = tokenData.chatlogi;
function generateCustomHash(proverka) {

  let gamehash = hash(proverka);

  const replacementMap = {
    '0': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
    '6': '',
    '7': '',
    '8': '',
    '9': '',
    'a': '',
    'b': '',
    'c': '',
    'd': '',
    'e': '',
    'f': '',
    'g': '',
    'h': '',
    'i': '',
    'j': '',
    'k': '',
    'l': '',
    'm': '',
    'n': '',
    'o': '',
    'p': '',
    'q': '',
    'r': '',
    's': '',
    't': '',
    'u': '',
    'v': '',
    'w': '',
    'x': '',
    'y': '',
    'z': ''
  };

  let chineseHash = '';
  for (let char of gamehash) {
    chineseHash += replacementMap[char] || char;
  }

  return chineseHash;
}







vk.updates.on("wall_reply_new", async (message) => {


  if (Number(message.senderId) <= 0) return;

  let user = double.find(x => x.id === message.fromId)
  if (!user) {
    return
  }



  if (config.fortuna == message.objectId) {

    if (message.text == "Фортуна" || message.text == "фортуна" || message.text == "фарт" || message.text == "fortune") {

      multiply = utils.pick([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);

      if (multiply == 1) {

        multiply = utils.pick([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4]);

        if (multiply == 1) {

          config.fortunacount -= 1;

          user.balance += 50000000000000;

          if (user.notifications) vk.api.messages.send({

            user_id: user.id,

            message: `[УВЕДОМЛЕНИЕ]

						▶ Поздравляем! Удача улыбнулась вам и вы выиграли 50.000.000.000.000$ :3 '

						🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

            random_id: 0

          });

          vk.api.call("wall.createComment", {

            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 50.000.000.000.000$`

          });

          if (config.fortunacount <= 0) {

            q.api.wall.closeComments({

              owner_id: -228105719,

              post_id: config.fortuna

            });

            vk.api.call("wall.createComment", {

              owner_id: message.ownerId,

              post_id: message.objectId,

              message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(['😕', '😔', '😫'])}`

            });

          }

        }



        if (multiply == 2) {

          config.fortunacount -= 1;

          user.balance += 100000000000000;

          if (user.notifications) vk.api.messages.send({

            user_id: user.id,

            message: `[УВЕДОМЛЕНИЕ]

						▶ Поздравляем! Удача улыбнулась вам и вы выиграли 100.000.000.000.000$ :3 '

						🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

            random_id: 0

          });

          vk.api.call("wall.createComment", {

            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 100.000.000.000.000$ ${utils.pick(['😕', '😔', '😫'])}`

          });

          if (config.fortunacount <= 0) {

            q.api.wall.closeComments({

              owner_id: -228105719,

              post_id: config.fortuna

            });

            vk.api.call("wall.createComment", {

              owner_id: message.ownerId,

              post_id: message.objectId,

              message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(['😕', '😔', '😫'])}`

            });

          }

        }



        if (multiply == 3) {

          config.fortunacount -= 1;

          user.c3 += 2;

          if (user.notifications) vk.api.messages.send({

            user_id: user.id,

            message: `[УВЕДОМЛЕНИЕ]

						▶ Поздравляем! Удача улыбнулась вам и вы выиграли 2 Донат Кейса :3 Открытие по команде 'Кейс открыть 3'

						🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

            random_id: 0

          });

          vk.api.call("wall.createComment", {

            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 2 Донат кейсов ${utils.pick(['😕', '😔', '😫'])}`

          });

          if (config.fortunacount <= 0) {

            q.api.wall.closeComments({

              owner_id: -228105719,

              post_id: config.fortuna

            });

            vk.api.call("wall.createComment", {

              owner_id: message.ownerId,

              post_id: message.objectId,

              message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(['😕', '😔', '😫'])}`

            });

          }

        }



        if (multiply == 4) {

          config.fortunacount -= 1;

          user.c6 += 1;

          if (user.notifications) vk.api.messages.send({

            user_id: user.id,

            message: `[УВЕДОМЛЕНИЕ]

						▶ Поздравляем! Удача улыбнулась вам и вы выиграли Секретный кейс :3 Открытие по команде 'Кейс открыть 6'

						🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

            random_id: 0

          });

          vk.api.call("wall.createComment", {

            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Удача улыбнулась вам, на ваш баланс зачислен 1 Секретный кейс ${utils.pick(['😕', '😔', '😫'])}`

          });

          if (config.fortunacount <= 0) {

            q.api.wall.closeComments({

              owner_id: -228105719,

              post_id: config.fortuna

            });

            vk.api.call("wall.createComment", {

              owner_id: message.ownerId,

              post_id: message.objectId,

              message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(['😕', '😔', '😫'])}`

            });

          }

        }

      } else {

        return vk.api.call("wall.createComment", {

          owner_id: message.ownerId,

          post_id: message.objectId,

          reply_to_comment: message.id,

          message: `💞 Удача не на вашей стороне, попробуйте снова ${utils.pick(['😕', '😔', '😫'])}`

        });

      }

    }

  }

  /* if (!user.comments) {
     user.comments = [];
   }
 
 
   const groupInfo = await vk.api.call('groups.getById', {
     access_token: tokenData.token,
     v: '5.131',
   });
 
 
   if (!groupInfo || groupInfo.length === 0) {
     console.error('Не удалось получить информацию о группе.');
     return;
   }
 
 
   const groupId = groupInfo[0].id;
 
 
   const userCommented = user.comments.includes(message.objectId);
   if (userCommented) {
 
     return;
   }
 
 
   if (message.text.length < 5) {
     await vk.api.messages.send({
       user_id: user.id,
       message: '🚫 Ваш комментарий слишком скучный. Напишите что-то более интересное!',
       random_id: 0,
     });
     return;
   }
 
 
   user.comments.push(message.objectId);
 
 
   const currentTime = Date.now();
   const postTime = message.createdAt * 1000;
   const timeDifference = currentTime - postTime;
   let rewardAmount;
 
   if (timeDifference <= 60000) {
     rewardAmount = 30000;
   } else if (timeDifference <= 300000) {
     rewardAmount = 30000;
   } else if (timeDifference <= 600000) {
     rewardAmount = 2000;
   } else {
     rewardAmount = 1500;
   }
 
   user.balance2 += rewardAmount;
 
   await vk.api.messages.send({
     user_id: user.id,
     message: `💬 За комментарий ты получаешь ${utils.sp(rewardAmount)} GB.`,
     attachment: `wall - ${groupId}_${message.objectId} `,
     random_id: 0,
   });*/
});




async function startNewGame(chat) {

  const numbers = [2, 2, 3, 5];
  const rareNumber = 50;
  function getRandomWeighted(array) {
    const weights = array.map(() => Math.random());
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
    const randomNum = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (let i = 0; i < weights.length; i++) {
      cumulativeWeight += weights[i];
      if (randomNum <= cumulativeWeight) {
        return array[i];
      }
    }
  }
  function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function getRandomNormal(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  const randomChance = Math.random();
  let result;


  if (randomChance < 0.03) {
    result = rareNumber;
  } else {

    const filteredNumbers = numbers.filter(num => num !== rareNumber); 
    const randomType = Math.floor(Math.random() * 3);

    switch (randomType) {
      case 0:
        result = getRandomWeighted(filteredNumbers);
        break;
      case 1:
        result = getRandomFromArray(filteredNumbers);
        break;
      case 2:
        result = getRandomNormal(filteredNumbers);
        break;
    }
  }

  let proverka = `${result}|${generateRandomString(15)}`;
  let gamehash = await generateCustomHash(proverka);

  chat.games.push({
    result: result,
    stavka: true,
    hash: gamehash,
    proverka: proverka,
    stavki: []
  });
  // console.log(result)
  /*  let attachment;
  switch (result) {
           case 2: attachment = 'photo-171493284_457790008'; break;
           case 3: attachment = 'photo-171493284_457790009'; break;
           case 5: attachment = 'photo-171493284_457790010'; break;
           case 50: attachment = 'photo-171493284_457790007'; break;
  }

  await vk.api.messages.send({     
      chat_id: chat.id,
      message: `${gamehash}`,     
      attachment: attachment, 
      random_id: 0
  })*/

  chat.game = true;
  chat.games = chat.games.slice(-1);

}




async function startBot(chat) {
  try {
    for (const chat of chats) {
      const randomId = Math.floor(Math.random() * 100000);
      await vk.api.messages.send({
        chat_id: chat.id,
        message: `🔱 Бот запущен!`,
        random_id: randomId
      });
    }
  } catch (error) {
    console.error(``);
  }
}


setInterval(async () => {
  timerUpdated = false;
  const chat = chats.find(chat => chat.type === 1);
  if (chat) {
    for (const chat of chats) {
      if (chat.id >= 0 && chat.type == 1) {
        updateGameTime(chat);

        if (!chat.game) {
          startNewGame(chat);
        }

        if (chat.gametime <= 5 && chat.games[chat.games.length - 1].stavki.length > 0 && !messageSentFiveSeconds) {
          chat.games[chat.games.length - 1].stavka = false;
          vk.api.messages.send({
            chat_id: chat.id,
            message: 'До конца раунда осталось менее пяти секунд, ставки не принимаются',
            random_id: 0
          });
          messageSentFiveSeconds = true;
        }

        if (chat.gametime <= 2 && chat.games[chat.games.length - 1].stavki.length > 0 && !messageSentThreeSeconds) {
          vk.api.messages.send({
            chat_id: chat.id,
            message: 'Итак, результаты раунда...',
            random_id: 0
          });
          messageSentThreeSeconds = true;

        }
        if (chat.gametime <= 0 && !timerUpdated && chat.games[chat.games.length - 1].stavki.length > 0) {
          messageSentFiveSeconds = false;
          messageSentThreeSeconds = false;
          let win = [];
          let test = stringify({ instring: chat.games[chat.games.length - 1].proverka })
          let prov = "https://www.gigacalculator.com/calculators/md5-online-generator.php?" + test

          chat.games[chat.games.length - 1].stavki.forEach(stavka => {
            win.push({ id: stavka.id, type: stavka.type, amount: stavka.amount });
          });

          win.sort((a, b) => a.type - b.type);

          let text = '';

          for (let i = 0; i < win.length; i++) {
            let user = win[i];
            let gameResult = chat.games[chat.games.length - 1].result;
            let userId = user.id;

            let dbUser = double.find(u => u.id === userId);

            if (dbUser) {
              let userWon = user.type === gameResult;
              let winnings = 0;

              if (userWon) {
                winnings = user.amount * user.type;
                let roundedWinnings = Math.round(winnings);

                text += `✅ [id${user.id2}|${dbUser.tag}] ставка ${utils.sp(user.amount)} на x${user.type} выиграла! (приз ${utils.sp(roundedWinnings)} GB)\n`;
                dbUser.balance2 += roundedWinnings;

                /* // сделать для топдонов через иф
                dbUser.winStreaks = (dbUser.winStreaks || 0) + 1;

                let bonus = calculateBonus(dbUser, roundedWinnings);
                let roundedBonus = Math.round(bonus);
                dbUser.balance2 += roundedBonus;
                text += `Бонус для [id${user.id2}|${dbUser.tag}]: ${utils.sp(roundedBonus)} GB\n`;
*/
              } else {
                text += `❌ [id${user.id}|${dbUser.tag}] ставка ${utils.sp(user.amount)} на x${user.type} проиграла\n`;
                dbUser.winStreaks = 0;
              }
            } else {
              console.error(`Пользователь с ID ${user.id2} не найден в массиве double`);
            }
          }

          function calculateBonus(user, winnings) {
            let userWinStreak = user.winStreaks;
            let bonus = 0;
            return bonus;
          }

          let attachment;
          switch (chat.games[chat.games.length - 1].result) {
            case 2: attachment = 'photo-171493284_457790008'; break;
            case 3: attachment = 'photo-171493284_457790009'; break;
            case 5: attachment = 'photo-171493284_457790010'; break;
            case 50: attachment = 'photo-171493284_457790007'; break;
          }

          vk.api.messages.send({
            chat_id: chat.id,
            message: `Выпал множитель х${chat.games[chat.games.length - 1].result} 

${text}

Хеш игры: 
${chat.games[chat.games.length - 1].hash}
Проверка честности: ${chat.games[chat.games.length - 1].proverka}
`,
            attachment: attachment,
            keyboard: JSON.stringify({}),
            random_id: 0
          });
        }
      }
    }
    timerUpdated = true;
  }
}, 1000);

let user = new VK({
  token: tokenData.token,
});

const { updates, snippets } = vk;

function getUnix() {
  return Date.now();
}

function padTo2Digits(num) {
  let isNegative = num < 0;
  let absNum = Math.abs(num).toString();
  let paddedNum = absNum.padStart(2, '0');
  return isNegative ? '-' + paddedNum : paddedNum;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('.');
}

const post_to = async function (obj = {}) {
  const type = obj.type;
  const message = obj.message;
  const date = new Date();
  if (!fs.existsSync('./distribution')) { await mkdirp('./distribution') }
  if (type == "post_total_case") {
    if (!fs.existsSync(`./distribution/total_case/${botinfo.total_case_count}`)) {
      await mkdirp(`./distribution/total_case/${botinfo.total_case_count}`)
    }
    await fs.appendFileSync(require("path").join(`./distribution/total_case/${botinfo.total_case_count}`, `${formatDate(new Date())}.txt`), `${message}\n`, { encoding: "utf-8" });
  }
  if (type == "post_total_DC") {
    if (!fs.existsSync(`./distribution/total_DC/${botinfo.total_DC_count}`)) {
      await mkdirp(`./distribution/total_DC/${botinfo.total_DC_count}`)
    }
    await fs.appendFileSync(require("path").join(`./distribution/total_DC/${botinfo.total_DC_count}`, `${formatDate(new Date())}.txt`), `${message}\n`, { encoding: "utf-8" });
  }
}

const unixTime = getUnix();

const rnd = (() => {
  const gen = (min, max) => max++ && [...Array(max - min)].map((s, i) => String.fromCharCode(min + i));

  const sets = {
    num: gen(48, 57),
    alphaLower: gen(97, 122),
    alphaUpper: gen(65, 90),
  };

  function* iter(len, set) {
    if (set.length < 1) set = Object.values(sets).flat();
    for (let i = 0; i < len; i++) yield set[Math.random() * set.length | 0]
  }

  return Object.assign(((len, ...set) => [...iter(len, set.flat())].join('')), sets);
})();

function getResolve(text, api) {
  return new Promise(async function (resolve) {
    const { resolveResource } = require('vk-io')

    var resource = await resolveResource({ api, resource: text })
      .catch(() => { return resolve(false) })

    return resolve(resource)
  })
}

async function chatUsers(peer, group) {
  let chels = await vk.api.messages.getConversationMembers({ peer_id: peer, group_id: group })

  return chels

}

let game = false

const { performance } = require('perf_hooks');

vk.updates.on('chat_invite_user', async (message, bot) => {
  console.error(message);
  const inviterId = message.senderId; // ID того, кто пригласил
  const invitedUserId = message.eventMemberId; // ID приглашенного пользователя
  const chatId = message.chatId; // Получаем ID чата из сообщения (или peerId)

  let inviter = double.find(x => x.id === inviterId);
  let invitedUser = double.find(x => x.id === invitedUserId);

  // Проверяем, существует ли пригласивший пользователь
  if (!inviter) {
    bot('вы не получили награду, вы не зарегистрированы');
    return;
  }

  // Проверяем, есть ли у приглашенного пользователя флаг kik
  if (invitedUser && invitedUser.kik) {
    try {
      // Кикаем пользователя из чата, в который его пригласили
      await vk.api.messages.removeChatUser({
        chat_id: chatId, // используем ID чата из сообщения
        user_id: invitedUserId
      });

      await bot('Пользователь был кикнут');
    } catch (error) {
      console.error(`Ошибка при кике пользователя ${invitedUserId} из чата ${chatId}: ${error.message}`); // Логируем ошибку
      bot('Произошла ошибка при кике пользователя.');
    }
    return; // Прекращаем выполнение
  }

  // Персонаж не был кикнут, продолжаем с наградой
  const reward = 1000;
  inviter.balance2 += reward;

  await vk.api.messages.send({
    user_id: inviter.id,
    message: `🎉 Вы получили ${utils.sp(reward)} GB за приглашение нового участника в чат!`,
    random_id: 0
  });
});

loadCommands().then(() => {
  updates.on('message', async (message) => {


    if (Number(message.senderId) <= 0) return;

    if (/\[@club${groupId}|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[@club${groupId}|(.*)\]/ig, '').trim();
    if (!chats.find(x => x.id === message.chatId)) {
      if (message.isChat) {
        chats.push({
          id: message.chatId,
          type: 0,
          uid: chats.length,
          statuemoney: 0,
          statuepeople: 0,
          statuemsg: 0,
          statuemoneylvl: 0,
          statuepeoplelvl: 0,
          statuemsglvl: 0,
          reg: new Date(),
          priz: false,
          start: false,
          gametime: 60,
          game: false,
          games: []
        })

        message.chat = chats.find(x => x.id === message.chatId)
      } else {

        const chat = chats.find(chat => chat.id === message.chatId);
        if (chat) {
          if (chat.statuemsg < 10000) {
            chat.statuemsglvl = 0;
          }
          if (chat.statuemsg >= 10000) {
            chat.statuemsglvl = 1;
          }
          if (chat.statuemsg >= 100000) {
            chat.statuemsglvl = 2;
          }
          if (chat.statuemsg >= 500000) {
            chat.statuemsglvl = 3;
          }
        }

      }
    }

    if (!double.find(x => x.id === message.senderId)) {
      const [user_info] = await vk.api.users.get({ user_id: message.senderId });

      const date = new Date();

      double.push({
        id: message.senderId,
        id2: message.senderId,
        balance: 5000,
        mention: true,
        uid: double.length,
        winStreaks: 0,
        balance2: 0,
        ch: 0,
        vopros: "-",
        ostat: 0,
        bank: 0,
        bilet: 0,
        btc: 0,
        farm_btc: 0,
        videocard_dg: 0,
        biz: 0,
        energy: 10,
        maxenergy: 10,
        sataka: 1,
        bossyr: 0,
        pismo: 0,
        refcount: 0,
        ref: false,
        blago: 86400000,
        iznos: 0,
        bral: 86400000,
        tema: 1,
        parkedLength: 1,
        stock: {
          status: "Игрок",
          stpban: "Нет",
          strban: "Нет",
          stban: "Нет",
          bantop: "Нет",
        },
        astats: {
          warn: 0,
          blocked: false,
          reports: 0,
          bans: 0,
          rbans: 0,
          pbans: 0,
          balance: 0,
          bank: 0,
          astat: true,
          fakeid: double.length,
          tema: 1,
          kd: 0,
          car: false,
          yacht: false,
          helicopter: false,
          airplane: false,
          homes: false,
          apartment: false,
          videocard: false,
          bad: 0,
          norm: 0,
        },
        sertificats: {
          gosnomer: 0,
          car: 0,
          rating: 0,
          premium: 0,
          business: 0,
          vip: 0,
          opit: 0,
          activ: 0,
        },
        rub: 0,
        rubli: 0,
        sprcoin: 0,
        dcoins: 0,
        rating: 0,
        gon: 0,
        bans: {
          ban: false,
          rban: false,
          pban: false,
          bantimer: 0,
          rbantimer: 0,
          reason: "",
        },
        c1: 0,
        c2: 0,
        c3: 0,
        c4: 0,
        c5: 0,
        c6: 0,
        c7: 0,
        c8: 0,
        c9: 0,
        c10: 0,
        c11: 0,
        possilka1: 0,
        possilka2: 0,
        possilka3: 0,
        sound: 0,
        soundrating: 0,
        autosound: 0,
        tree: 0,
        leaf: 0,
        irrigation: 0,
        leafpribil: 0,
        minertool: 0,
        clanid: false,
        aktiv: 0,
        ruds: {
          zhelezo: 0,
          zoloto: 0,
          almaz: 0,
          materia: 0,
          obsidian: 0,
          plazma: 0,
          antimateria: 0,
        },
        procent: {
          clock: 0,
        },
        timers: {
          hasWorked: false,
          bonus: false,
          bonus2: false,
          vipbonus: false,
          prembonus: false,
          titanbonus: false,
          imperatorbonus: false,
          poxod: false,
          podarok: false,
          report: false,
          ban: false,
        },
        captcha: {
          vid: false,
          otvet: false,
          primer: false,
          pred: 0,
        },
        work: 0,
        lte2: false,
        bantop: false,
        notifications: true,
        promo: false,
        opit: 0,
        exp: 1,
        level: 1,
        tag: user_info.first_name,
        tag2: user_info.first_name,

        regDate: `${date.getDate()}.${date.getMonth() + 1
          }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,

        dostupe: false,


        settings: {
          busi: false,
        },

        fakeid: double.length,
        scar: {
          gosnomer: "undefined",
          gontime: false,
          prok_1: 1,
          prok_2: 1,
          prok_3: 1,
          prok_4: 1,
          prok_5: 1,
          prok_6: 1,
        },
        transport: {
          car: 0,
          yacht: 0,
          airplane: 0,
          helicopter: 0,
        },
        settings: {
          adm: 0,
          vip: false,
          premium: false,
          titan: false,
          imperator: false,
          topdon: false,
          joker: false,
          busi: false,
          king: false,
        },
        inf: false,
        infcas: 10,
        realty: {
          home: 0,
          apartment: 0,
          basement: false,
        },
        misc: {
          phone: 0,
          computer: 0,
          clock: 0,
          pet: 0,
          pet2: 0,
          pet3: 0,
          farm: 0,
          farm_count: 0,
          videocard_count: 0,
          videocard: 0,
        },
        pet: {
          lvl: 0,
          poterl: false,
        },
        marriage: {
          partner: 0,
          requests: [],
        },
        limitadd: {
          nicklimitadd: 16,
          banklimitadd: 500000000000,
          timeradd: utils.time(),
          playerlimitadd: 50000000000,
          sentadd: 0,
          paylimitadd: 50000000000,
          farmlimitadd: 1000,
          videocardlimitadd: 30,
        },
        limit: {
          nicklimit: 16,
          banklimit: 50000000000000,
          timer: utils.time(),
          playerlimit: 50000000000000,
          sent: 0,
          paylimit: 50000000000000,
          farmlimit: 1000,
          videocardlimit: 30,
        },
        fir: 1.0,
        fertilizer: 0,
        water: 0,
        gift: 0,
        questcasino: 0,
        firstmsg: true,
        questcup: 0,
        questrussion: 0,
        questracer: 0,
        questdonat: 0,
        questminer: 0,
        questbrak: false,
        questhack: 0,
        questclan: false,
        questautosound: 0,
        questtictactoe: 0,
        questfollow: false,
        questdamagedealer: 0,
        questbosspower: false,
        questallfucker: false,
        questbasket: 0,
        questcup2: 0,
        questrussion2: 0,
        questracer2: 0,
        questdonat2: 0,
        questminer2: 0,
        questtaxi: 0,
        questhack2: 0,
        questtrade: 0,
        questautosound2: 0,
        questtictactoe2: 0,
        questpremcase: false,
        questdamagedealer2: 0,
        questbosspower2: false,
        questallfucker2: false,
        prazdnikbussines: false,
        march8: false,
        stars1: false,
        stars2: false,
        stars3: false,
        stars4: false,
        stars5: false,
        ball: 0,
        petlim: false,
        antiget: false,
        lockdown: 0,
        kazna: 0,
        pay: 0,
        povesil: 0,
        gir: 0,
        arubli: 0,
        apromo: false,
        admid: false,
        rep: false,
        notif: {
          one: false,
        },
        time: {
          one: 0,
        },
        sms: 0,
        valentinki: 1,
        lim: 0,
        business: [],
        business2: [],

        tuk: 1,

        lastVisit: 0,

        photo: 0,

        notifications: true,

        lastbet: 50,
        status: {
          work: false,
          gon: false,
          boss: false,
          mainer: false,
          rich: false,
        },
        timers: {
          bonus: false,
        },

      });

      message.user = double.find(x => x.id === message.senderId);
      let priglostext = ''

    }



    botinfo.messagescount += 1;
    if (message.messagePayload && message.messagePayload.command) {
      message.text = message.messagePayload.command;
    }
    const command = commands.find(x => x[0].test(message.text));

    message.user = double.find(x => x.id === message.senderId);

    try {

      const groupInfo = await vk.api.call('groups.getById', {
        access_token: tokenData.token,
        v: '5.131',
      });

      if (!groupInfo || groupInfo.length === 0) {
        throw new Error('Не удалось получить информацию о группе.');
      }

      const groupId = groupInfo[0].id;

      const isMember = await vk.api.call('groups.isMember', {
        user_id: message.senderId,
        group_id: groupId,
      });


      if (command) {
        if (message.user.bans.bantimer <= 0) {
          if (!isMember) {
            const communityLink = `https://vk.com/public${groupId}`;
            await message.send(`🚫 Чтобы начать играть, пожалуйста, подпишитесь на [${communityLink}|сообщество] 💖`);
            return;
          }
        }
      }

    } catch (error) {
      console.error('Ошибка получения данных группы:', error);
      await message.send('Произошла ошибка, пожалуйста, попробуйте позже.');
    }

    message.chat = chats.find(x => x.id === message.chatId)

    const bot = async (text, params) => {
      if (text.length < 4000) {
        return message.send(`${message.user.mention ? `@id${message.user.id2} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
      } else {
        await message.send(`${message.user.mention ? `@id${message.user.id2} (${message.user.tag})` : `${message.user.tag}`}, ${text.substring(0, 4000)}`, params);
        for (let i = 1; i < text.length / 4000; i++) {
          await message.send(`${text.substring(i * 4000, 4000 + i * 4000)}`, params);
        }
      }
    };


    const startPingTime = performance.now();





    if (command) {
      const currentTime = new Date();
      user.lastVisit = `${currentTime.getDate()}.${currentTime.getMonth() + 1
        }.${currentTime.getFullYear()}, ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    }

    if (command) {

      if (message.isChat) {
        // await logCommand(chat);
        message.setActivity();
        // console.log(`${message.user.uid} - ${message.text}`);
      }



    }


    if (!command && !message.isChat) {
      await message.send(`Данной команды не существует! 😿

🔅 Вы можете просмотреть список всех команд написав «Помощь» 😌
♦️ Остались вопросы? Задайте их в репорт — «Репорт [вопрос]» ☃️`);
      return
    }

    /* if (command) {
       if (!message.isChat) {
         if (message.user.bans.ban) {
           const banReason = message.user.bans.reason || "Причина не указана";
           const datka = new Date(message.user.bans.bantimer);
           await message.send(`🚫 Вы находитесь в бане!\n\n💬 Причина: ${banReason}\n\n⏳ Блокировка действует до: ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${datka.getMonth() + 1
             }.${datka.getFullYear()}`);
           return;
         }
       }
     }*/

    if (command) {
      if (message.user.bans.ban) {
        return;
      }
    }

    if (message.isChat) {
      const chat = chats.find(chat => chat.id === message.chatId);
      if (chat) {
        chat.statuemsg += 1;
      }
    }



    let logDate = new Date();


    if (!log[message.user.uid]) log[message.user.uid] = [];


    const formattedDate = `${addZero(logDate.getDate())}.${addZero(logDate.getMonth() + 1)}.${logDate.getFullYear()}`;
    const formattedTime = `${addZero(logDate.getHours())}:${addZero(logDate.getMinutes())}:${addZero(logDate.getSeconds())}`;

    log[message.user.uid].push({
      time: `${formattedDate}, ${formattedTime}`,
      msg: `${message.text}`
    });

    let logs = log[message.user.uid];

    // Форматирование логов для записи в файл
    const logEntry = `${message.user.uid} | ${logs[logs.length - 1].time} | ${logs[logs.length - 1].msg}\n`;

    // Запись в файл logi.txt
    fs.appendFile('logi.txt', logEntry, (err) => {
    });




    if (!log[message.user.uid]) log[message.user.uid] = [];

    log[message.user.uid].push({

      time: `🕒 Время: ${addZero(logDate.getHours())}:${addZero(logDate.getMinutes())}:${addZero(logDate.getSeconds())}`,

      msg: `⏩ Команда: «${message.text}»`

    });



    if (logs.length > 20) log[message.user.uid] = logs.slice(logs.length - 20, logs.length);

    if (message.text) {
      message.user.sms += 1;
    }

    message.user.aktiv = `${datasss()}, ${timesss()}`;

    if (botinfo.wait) {
      if (command) {
        if (message.user.settings.adm < 6)
          await bot(
            `🚧 В данный момент ведутся технические работы.
 
Пожалуйста, подождите немного! ⏳`,
            // { attachment: `doc666148011_625223261` }
          );
  await message.send({ sticker_id: 74276 });
  return;
      }
    }


    const endPingTime = performance.now();
    const pingTime = endPingTime - startPingTime;

    // console.log(`Пинг: ${pingTime.toFixed(2)} мс.`);


    if (command && Array.isArray(command) && command[0] && typeof command[1] === 'function') {
      message.args = message.text.match(command[0]);
      if (message.args) {
        await command[1](message, bot)
      } else {
      }
    } else {
    }

  });
}).catch(console.error)


function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}






/*vk.updates.on("like_add", async (message) => {
  console.error(message);

  if (!message.likerId) {
    console.error("User ID not found in the message.");
    return;
  }

  let user = double.find(x => x.id === message.likerId);
  if (!user) {
    console.error(`User with ID ${message.likerId} not found in the double array.`);
    return;
  }

  
  if (!user.likes) {
    user.likes = {};
  }

  const postId = message.objectId;

  
  if (user.likes[postId]) {
    await vk.api.messages.send({
      user_id: user.id,
      message: '🚫 Вы уже оставили лайк к этому посту.',
      random_id: 0,
    });
    return;
  }


  user.likes[postId] = true;
  user.balance2 += 2000;

  await vk.api.messages.send({
    user_id: user.id,
    message: `❤️ За лайк поста вы получаете 2.000 GB.`,
    random_id: 0,
  });

  // console.log(`Пользователь ${user.uid} поставил лайк посту с ID ${postId}.`);
});*/



setInterval(async () => {
  double.map((user) => {
    user.timers.hasWorked = Math.max(user.timers.hasWorked - 10, 0);
    user.timers.bonus = Math.max(user.timers.bonus - 10, 0);
    user.timers.poxod = Math.max(user.timers.poxod - 10, 0);
    user.timers.vipbonus = Math.max(user.timers.vipbonus - 10, 0);
    user.timers.prembonus = Math.max(user.timers.prembonus - 10, 0);
    user.timers.titanbonus = Math.max(user.timers.titanbonus - 10, 0);
    user.timers.imperatorbonus = Math.max(user.timers.imperatorbonus - 10, 0);
    user.timers.podarok = Math.max(user.timers.podarok - 10, 0);
    user.scar.gontime = Math.max(user.scar.gontime - 10, 0);
    user.limit.sent = Math.max(user.limit.sent - 10, 0);
    user.limitadd.sentadd = Math.max(user.limitadd.sentadd - 10, 0);
    user.timers.report = Math.max(user.timers.report - 10, 0);
    user.timers.ban = Math.max(user.timers.ban - 10, 0);
  });
}, 10000);

function left(stamp) {
  stamp = stamp / 1000;
  let s = stamp % 60;
  stamp = (stamp - s) / 60
  let m = stamp % 60;
  stamp = (stamp - m) / 60;
  let h = (stamp) % 24;
  let d = (stamp - h) / 24;
  let text = ``;
  if (d > 0) text += Math.floor(d) + " д ";
  if (h > 0) text += Math.floor(h) + " ч ";
  if (m > 0) text += Math.floor(m) + " мин ";
  if (s > 0) text += Math.floor(s) + " сек ";
  return text;
}

function ensureNotificationsProperty(user) {
  if (user.notifications === undefined) {
    user.notifications = true;
  }
}


function unixStampLefta(stampa) {
  stampa = stampa / 1000;
  let s = stampa % 60;
  stampa = (stampa - s) / 60;
  let m = stampa % 60;
  let text = ``;
  if (m > 0) text += addZero(Math.floor(m)) + " мин. ";
  if (s > 0) text += addZero(Math.floor(s)) + " сек.";
  return text;
}

function unixStampLeft(stamp) {
  stamp = stamp / 1000;
  let s = stamp % 60;
  stamp = (stamp - s) / 60;
  let m = stamp % 60;
  stamp = (stamp - m) / 60;
  let h = stamp % 24;
  let d = (stamp - h) / 24;

  let text = ``;

  if (d > 0) text += Math.floor(d) + " д. ";
  if (h > 0) text += Math.floor(h) + " ч. ";
  if (m > 0) text += Math.floor(m) + " м. ";
  if (s > 0) text += Math.floor(s) + " с.";
  return text;
}


function addZero(i) {
  return i < 10 ? "0" + i : i;
}

function rand(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function unixStampLefta(time) {
  return Math.max(0, time - Date.now());
}



function convertTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  let timeStr = '';
  if (minutes > 0) {
    timeStr += `${minutes} минут `;
  }
  if (seconds > 0 || timeStr === '') {
    timeStr += `${seconds} секунд`;
  }
  return timeStr;
}





let gametame = 60;

function weightedPick(options, weights) {
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);
  let randomNum = Math.random() * totalWeight;
  for (let i = 0; i < options.length; i++) {
    if (randomNum < weights[i]) {
      return options[i];
    }
    randomNum -= weights[i];
  }
}










let timerUpdated = false;

function updateGameTime(chat) {
  if (chat.gametime <= 0) {
    chat.gametime = 60;
    chat.game = false;
  } else {
    chat.gametime -= 1;
  }
}

let messageSentFiveSeconds = false;

let messageSentThreeSeconds = false;

setInterval(async () => {
  double.map(user => {
    if (user.bonustime > 0) user.bonustime -= 1
  });
}, 1000);

function resetNegativeBalance(user) {
  if (user.balance2 < 0) {
    user.balance2 = 0;
  }
}

setInterval(() => {
  double.forEach(resetNegativeBalance);
}, 1);

setInterval(async () => {
  double.filter(x => x.balance2 >= 899999999999999999999).forEach(x => {
    x.balance2 = 899999999999999999999;
  });
}, 1);

setInterval(async () => {
  double.filter(x => x.balance >= 899999999999999999999).forEach(x => {
    x.balance = 899999999999999999999;
  });
}, 1);

const startTime = Date.now();

startBot();
vk.updates.start()
  .then(async () => {
    // console.log("Бот успешно запущен.");
  })
  .catch(console.error);

function timesss() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
}
function datasss() {
  const date = new Date();
  let days = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (month < 10) month = "0" + month;
  if (days < 10) days = "0" + days;
  return days + "." + month + "." + year;
}

setInterval(() => {
  //листики

  double
    .filter((x) => x.tree !== 0 && x.bans.ban === false && x.leafpribil <= 1000)
    .map((x) => {
      if (x.tree === 4 || x.leafpribil === 0) x.leafpribil += 10;

      if (x.tree === 1) x.leafpribil += 1;

      if (x.tree === 2) x.leafpribil += 3;

      if (x.tree === 3) x.leafpribil += 5;

      if (x.tree === 4) x.leafpribil += 9;

      if (x.tree === 5) x.leafpribil += 15;

      x.irrigation -= 1;

      if (x.settings.imperator) x.irrigation = 100;

      if (x.irrigation <= 0) x.tree = 0;
    });
}, 3600000);

setInterval(async () => {
  double
    .filter(
      (x) =>
        (x.stars1 === true ||
          x.stars2 === true ||
          x.stars3 === true ||
          x.stars4 === true ||
          x.stars5 === true) &&
        x.bans.ban === false
    )
    .map((x) => {
      if (x.stars1 === true) {
        x.ruds.almaz += 100;
      }

      if (x.stars2 === true) {
        x.ruds.materia += 75;
      }

      if (x.stars3 === true) {
        x.ruds.obsidian += 50;
      }

      if (x.stars4 === true) {
        x.ruds.plazma += 30;
      }

      if (x.stars5 === true) {
        x.rub += 30;
      }
    });
}, 3600000);

setInterval(() => {
  double
    .filter((x) => x.energy < x.maxenergy && x.bans.ban === false)
    .map((x) => {
      x.energy += 1;
    });
}, 300000);

setInterval(async () => {
  double
    .filter((x) => x.bans.ban === true && x.bans.bantimer <= Date.now() + 1)
    .map((x) => {
      x.bans.ban = false;
    });
}, 59000);

setInterval(() => {
  double
    .filter((x) => x.blago > 0)
    .map((x) => {
      x.blago -= 1000;
    });
}, 1000);

setInterval(async () => {
  if (bossinfo.boss < 0) {
    bossinfo.boss = 0;
  }
}, 1);

setInterval(() => {
  rand = utils.random(1, 15);

  botinfo.kursplazma = Math.floor(Number(rand * 100000000000));
}, 301000);

setInterval(() => {
  rand = utils.random(10, 25);

  botinfo.kursobsidian = Math.floor(Number(rand * 10000000000));
}, 301000);

setInterval(() => {
  rand = utils.random(1, 16);

  botinfo.kursmateria = Math.floor(Number(rand * 1000000000));
}, 301000);

setInterval(() => {
  rand = utils.random(1, 200);

  botinfo.kursalmaz = Math.floor(Number(rand * 1000000));
}, 301000);

setInterval(() => {
  rand = utils.random(1, 40);

  botinfo.kurszoloto = Math.floor(Number(rand * 100000));
}, 301000);

setInterval(() => {
  rand = utils.random(1, 50);

  botinfo.kurszhelezo = Math.floor(Number(rand * 10000));
}, 301000);
setInterval(() => {
  double
    .filter((x) => x.prazdnikbussines === true && x.balance >= 0)
    .map((x) => {
      x.balance += 50000000000;
    });
}, 60000);
setInterval(() => {
  double
    .filter((x) => x.balance < 0)
    .map((x) => {
      x.balance = 10000000;
    });

  chats
    .filter((x) => x.balance === null)
    .map((x) => {
      x.balance = 10000000;
    });

  chats
    .filter((x) => x.statuemoney === undefined)
    .map((x) => {
      x.balance = 10;
    });

  double
    .filter((x) => x.statuemoney === null)
    .map((x) => {
      x.balance = 10;
    });

  double
    .filter((x) => x.balance === undefined)
    .map((x) => {
      x.balance = 10000000;
    });

  double
    .filter((x) => isNaN(x.balance))
    .map((x) => {
      x.balance = 10000000;
    });

  double
    .filter((x) => !Number(x.rubli))
    .map((x) => {
      x.rubli = 0;
    });

  double
    .filter((x) => x.balance < 10000)
    .map((x) => {
      x.balance = 10000;
    });

  double
    .filter((x) => x.c1 === null)
    .map((x) => {
      x.c1 = 0;
    });

  double
    .filter((x) => x.c2 === null)
    .map((x) => {
      x.c2 = 0;
    });

  double
    .filter((x) => x.energy < 0)
    .map((x) => {
      x.energy = 0;
    });


  double.map((x) => {
    x.bank = Math.floor(Number(Math.floor(x.bank)));

    x.balance = Math.floor(Number(Math.floor(x.balance)));

    x.btc = Math.floor(Number(Math.floor(x.btc)));
  });

  double
    .filter((x) => x.settings.adm > 0)
    .map((x) => {
      x.bantop = true;

      x.limit.playerlimit = 0;
    });

}, 30000);

setInterval(async () => {
  if (!fink) {
    return;
  }
  if (fink) {
    double
      .filter((x) => x.bans.ban === false)
      .map((user) => {
        for (let i = 0; i < user.business2.length; i++) {
          const biz =
            businesses2[user.business2[i].id - 1][user.business2[i].upgrade - 1];

          if (user.business2[i].moneys <= biz.earn * 100)
            user.business2[i].moneys += Math.floor(
              (biz.earn / biz.workers) * user.business2[i].workers
            );
        }
      });
  }
}, 3600000);

setInterval(() => {
  double.map((x) => {
    if (x.tegg) {
      x.tegg = false;
    }
  });
}, 34000);

setInterval(() => {
  double
    .filter((x) => x.settings.premium !== false && x.bans.ban === false)
    .map((x) => {
      if (x.settings.premium) {
        x.balance += 150000000000;
      }
    });
}, 86400000);





setInterval(() => {
  double
    .filter((x) => x.misc.farm !== 0 && x.bans.ban === false)
    .map((x) => {
      if (x.misc.farm === 1 && x.farm_btc <= 100) {
        x.farm_btc += 1;
      }

      if (x.misc.farm === 2 && x.farm_btc <= 1000) {
        x.farm_btc += 10;
      }

      if (x.misc.farm === 3 && x.farm_btc <= 10000) {
        x.farm_btc += 100;
      }

      if (x.misc.farm === 4 && x.farm_btc <= 300000) {
        x.farm_btc += 1000;
      }

      if (x.misc.farm === 5 && x.farm_btc <= 2500000) {
        x.farm_btc += 20000;
      }

      if (x.misc.farm === 6 && x.farm_btc <= 10000000) {
        x.farm_btc += 100000;
      }

      if (x.misc.farm === 7 && x.farm_btc <= 40000000) {
        x.farm_btc += 200000;
      }
    });
}, 3600000);

setInterval(() => {
  double
    .filter((x) => x.timers.report === true)
    .map((x) => {
      x.timers.report = false;
    });
}, 10000);

setInterval(() => {
  double
    .filter((x) => x.settings.topdon)
    .map((x) => {
      x.energy += 5;

      x.c1 += 1;

      x.c2 += 1;

      x.c3 += 1;

      x.c4 += 1;

      x.c5 += 1;

      x.c6 += 1;

      x.c7 += 1;

      x.c8 += 1;

      x.c9 += 1;

      x.c10 += 1;

      x.c10 += 1;
    });
}, 86400000);
