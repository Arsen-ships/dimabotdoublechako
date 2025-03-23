console.log(`готово`);
const { VK } = require("vk-io");
const vk = new VK();
const user = new VK();
user.setOptions({
  token: "",
});

vk.setOptions({
  token: "", // group token
  pollingGroupId: 228105719,
});
const { updates, snippets } = vk;

const badcode = [];
const request = require("prequest");
const rq = require("request");
const admin = 557082643;
const admin2 = 557082643;
const fs = require("fs");

const promo = require("./save/promo.json");
let chats = require('../database/chats.json')

let double = require('../database/users.json')
let buttons = [];

setInterval(async () => {
  await saveUsers();
}, 3000);

async function saveUsers() {
  require("fs").writeFileSync(
    "./save/users.json",
    JSON.stringify(users, null, "\t")
  );
  return true;
}

const fetch = require("node-fetch");
const { promisify } = require("util");
let fink = true;
const utils = {
  sp: (int) => {
    int = int.toString();

    return int
      .split("")
      .reverse()
      .join("")
      .match(/[0-9]{1,3}/g)
      .join(".")
      .split("")
      .reverse()
      .join("");
  },

  numstring: (stringValue) => {
    stringValue = stringValue.trim();
    let relt = stringValue.replace(/[^0-9]/g, "");
    if (/[,.]\d{2}$/.test(stringValue)) {
      relt = relt.replace(/(\d{2})$/, ".");
    }
    return parseFloat(relt);
  },

  rn: (int, fixed) => {
    if (int === null) return null;

    if (int === 0) return "0";

    fixed = !fixed || fixed < 0 ? 0 : fixed;

    let b = int.toPrecision(2).split("e"),
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 33) / 3),
      c =
        k < 1
          ? int.toFixed(0 + fixed)
          : (int / Math.pow(10, k * 3)).toFixed(1 + fixed),
      d = c < 0 ? c : Math.abs(c),
      e =
        d +
        [
          "",
          " тыс",
          " млн",
          " млрд",
          " трлн",
          " трлд",
          " квтлн",
          " сктлн",
          " сптлн",
          " октлн",
          " нонлн",
          " дцлн",
        ][k];

    e = e.replace(/e/g, "");

    e = e.replace(/\+/g, "");

    e = e.replace(/Infinity/g, "ДОХЕРА");

    return e;
  },

  gi: (int) => {
    int = int.toString();

    let text = ``;

    for (let i = 0; i < int.length; i++) {
      text += `${int[i]}&#8419;`;
    }

    return text;
  },

  decl: (n, titles) => {
    return titles[
      n % 10 === 1 && n % 100 !== 11
        ? 0
        : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)
        ? 1
        : 2
    ];
  },

  random: (x, y) => {
    return y
      ? Math.round(Math.random() * (y - x)) + x
      : Math.round(Math.random() * x);
  },

  pick: (array) => {
    return array[utils.random(array.length - 1)];
  },

  time: () => {
    return parseInt(new Date().getTime() / 1000);
  },
};

const autosounder = [
  {
    id: 1,
    name: "ВАЗ-2112",
    cost: 5000000000,
    bass: 10,
    bassmult: 1,
  },
  {
    id: 2,
    name: "ВАЗ-2114",
    cost: 10000000000,
    bass: 20,
    bassmult: 1.1,
  },
  {
    id: 3,
    name: "VW-Golf 5",
    cost: 25000000000,
    bass: 30,
    bassmult: 1.2,
  },
  {
    id: 4,
    name: "Ford-Focus 3",
    cost: 35000000000,
    bass: 40,
    bassmult: 1.3,
  },
  {
    id: 5,
    name: "Opel-Astra GTS",
    cost: 50000000000,
    bass: 50,
    bassmult: 1.4,
  },
  {
    id: 6,
    name: "Audi Q7",
    cost: 100000000000,
    bass: 60,
    bassmult: 1.5,
  },
  {
    id: 7,
    name: "Mercedes-Benz GLA 250",
    cost: 255000000000,
    bass: 70,
    bassmult: 1.6,
  },
  {
    id: 8,
    name: "Volvo V60",
    cost: 500000000000,
    bass: 80,
    bassmult: 1.7,
  },
  {
    id: 9,
    name: "Jaguar SportBrake",
    cost: 888000000000,
    bass: 90,
    bassmult: 1.8,
  },
  {
    id: 10,
    name: "Porshe Macan",
    cost: 1000000000000,
    bass: 100,
    bassmult: 1.9,
  },
  {
    id: 11,
    name: "DeLorian Exclusive",
    cost: 3500000000000,
    bass: 110,
    bassmult: 2,
  },
  {
    id: 12,
    name: "Cadillac Escalade 3",
    cost: 5500000000000,
    bass: 120,
    bassmult: 2.1,
  },
  {
    id: 13,
    name: "Mercedes-Benz G63 AMG",
    cost: 10000000000000,
    bass: 150,
    bassmult: 2.2,
  },
  {
    id: 14,
    name: "Bentley Continental",
    cost: 25000000000000,
    bass: 200,
    bassmult: 2.3,
  },
  {
    id: 15,
    name: "Mercedes-Benz Vision Gran Turismo",
    cost: 100000000000000,
    bass: 300,
    bassmult: 2.4,
  },
];

const sound = [
  {
    name: "Батины динамики",
    cost: 5000000000,
    min: 10,
    max: 20,
    id: 1,
  },
  {
    name: "SWAT G410TS",
    cost: 25000000000,
    min: 20,
    max: 40,
    id: 2,
  },
  {
    name: "PionnerTX-302AS",
    cost: 50000000000,
    min: 40,
    max: 80,
    id: 3,
  },
  {
    name: "Alphard RTS-455T",
    cost: 100000000000,
    min: 80,
    max: 160,
    id: 4,
  },
  {
    name: "Bulava 250 HTS",
    cost: 250000000000,
    min: 160,
    max: 320,
    id: 5,
  },
  {
    name: "Machette RX-900",
    cost: 500000000000,
    min: 320,
    max: 640,
    id: 6,
  },
  {
    name: "JBL EX-290 GLA 250",
    cost: 1000000000000,
    min: 640,
    max: 960,
    id: 7,
  },
  {
    name: "Bass Sound",
    cost: 5000000000000,
    min: 960,
    max: 1920,
    id: 8,
  },
];

const cars = [
  {
    name: "Самокат",
    photo: "photo-197613406_457248103",
    cost: utils.numstring("5.000.000"),
    maxsk: 15,
    carsk: 4,
    razgon: 55.5,
    upgrade: utils.numstring("2.500.000"),
    id: 1,
  },
  {
    name: "Велосипед",
    photo: "photo-197613406_457248102",
    cost: utils.numstring("10.000.000"),
    maxsk: 35,
    carsk: 20,
    razgon: 45.8,
    upgrade: utils.numstring("5.000.000"),
    id: 2,
  },
  {
    name: "Мопед",
    photo: "photo-197613406_457248100",
    cost: utils.numstring("200.000.000"),
    maxsk: 60,
    carsk: 90,
    razgon: 32,
    upgrade: utils.numstring("100.000.000"),
    id: 3,
  },
  {
    name: "ВАЗ 2109",
    photo: "photo-197613406_457248099",
    cost: utils.numstring("5.000.000.000"),
    maxsk: 90,
    carsk: 120,
    razgon: 26.5,
    upgrade: utils.numstring("2.500.000.000"),
    id: 4,
  },
  {
    name: "Квадроцикл",
    photo: "photo-197613406_457248098",
    cost: utils.numstring("100.000.000.000"),
    maxsk: 80,
    carsk: 140,
    razgon: 21.5,
    upgrade: utils.numstring("50.000.000.000"),
    id: 5,
  },
  {
    name: "Вездеход",
    photo: "photo-197613406_457248097",
    cost: utils.numstring("500.000.000.000"),
    maxsk: 42,
    carsk: 210,
    razgon: 42.7,
    upgrade: utils.numstring("250.000.000.000"),
    id: 6,
  },
  {
    name: "Лада Xray",
    photo: "photo-197613406_457248096",
    cost: utils.numstring("1.000.000.000.000"),
    maxsk: 185,
    carsk: 290,
    razgon: 10.4,
    upgrade: utils.numstring("500.000.000.000"),
    id: 7,
  },
  {
    name: "Toyota FT-HS",
    photo: "photo-197613406_457248095",
    cost: utils.numstring("5.000.000.000.000"),
    maxsk: 350,
    carsk: 440,
    razgon: 4,
    upgrade: utils.numstring("2.500.000.000.000"),
    id: 8,
  },
  {
    name: "Subaru WRX STI",
    photo: "photo-197613406_457248094",
    cost: utils.numstring("10.000.000.000.000"),
    maxsk: 250,
    carsk: 300,
    razgon: 5.2,
    upgrade: utils.numstring("5.000.000.000.000"),
    id: 9,
  },
  {
    name: "Lamborghini Veneno",
    photo: "photo-197613406_457248092",
    cost: utils.numstring("100.000.000.000.000"),
    maxsk: 355,
    carsk: 750,
    razgon: 2.8,
    upgrade: utils.numstring("50000000000000"),
    id: 10,
  },
  {
    name: "Yamaha YZF R6",
    photo: "photo-197613406_457248091",
    cost: utils.numstring("12.000.000.000.000"),
    maxsk: 277,
    carsk: 122,
    razgon: 3.2,
    upgrade: utils.numstring("6.000.000.000.000"),
    id: 11,
  },
  {
    name: "Ferrari LaFerrari",
    photo: "photo-197613406_457248088",
    cost: utils.numstring("125.000.000.000.000"),
    maxsk: 350,
    carsk: 690,
    razgon: 3,
    upgrade: utils.numstring("62.500.000.000.000"),
    id: 12,
  },
  {
    name: "Koenigsegg Regera",
    photo: "photo-197613406_457248089",
    cost: utils.numstring("180.000.000.000.000"),
    maxsk: 390,
    carsk: 939,
    razgon: 3,
    upgrade: utils.numstring("90.000.000.000.000"),
    id: 13,
  },
  {
    name: "Rolls-Royce",
    photo: "photo-197613406_457248090",
    cost: utils.numstring("230.000.000.000.000"),
    maxsk: 300,
    carsk: 570,
    razgon: 4.9,
    upgrade: utils.numstring("115.000.000.000.000"),
    id: 14,
  },
  {
    name: "Tesla Cybertruck",
    photo: "photo-197613406_457248085",
    cost: utils.numstring("400.000.000.000.000"),
    maxsk: 209,
    carsk: 560,
    razgon: 2.9,
    upgrade: utils.numstring("200.000.000.000.000"),
    id: 15,
  },
  {
    name: "Lamborghini Aventador SVJ",
    photo: "photo-197613406_457248084",
    cost: utils.numstring("400.000.000.000.000"),
    maxsk: 400,
    carsk: 700,
    razgon: 2.9,
    upgrade: utils.numstring("200.000.000.000.000"),
    id: 16,
  },
  {
    name: "Портал",
    photo: "photo-197613406_457261083",
    cost: utils.numstring("9.000.000.000.000.000"),
    maxsk: 30000000,
    carsk: 30000000,
    razgon: 0.1,
    upgrade: utils.numstring("3.000.000.000.000.000"),
    id: 17,
  },
  {
    name: "Bugatti La Voiture Noire",
    photo: "photo-197613406_457248065",
    cost: utils.numstring("20.000.000.000.000.000"),
    maxsk: 420,
    carsk: 1500,
    razgon: 2.4,
    upgrade: utils.numstring("7.000.000.000.000.000"),
    id: 18,
  },
  {
    name: "Ford Mustang Bullitt",
    photo: "photo-197579361_457246157",
    cost: utils.numstring("50.000.000.000.000"),
    maxsk: 390,
    carsk: 950,
    razgon: 2.9,
    upgrade: utils.numstring("1.000"),
    id: 19,
  },
  {
    name: "Сани деда мороза",
    photo: "photo-197579361_457256668",
    cost: utils.numstring("100.000.000.000.000"),
    maxsk: 400,
    carsk: 960,
    razgon: 2.8,
    upgrade: utils.numstring("100"),
    id: 20,
  },
  {
    name: "Лыжи",
    photo: "photo-197579361_457258401",
    cost: utils.numstring("100.000.000.000.000"),
    maxsk: 400,
    carsk: 960,
    razgon: 2.8,
    upgrade: utils.numstring("100"),
    id: 21,
  },
  {
    name: "Карета отца демонов",
    photo: "photo-197579361_457265685",
    cost: utils.numstring("9.000.000.000.000.000"),
    maxsk: utils.numstring("999.999.999"),
    carsk: utils.numstring("999.999.999"),
    razgon: 0.01,
    upgrade: utils.numstring("90.000.000.000.000"),
    id: 22,
  },
  {
    name: "Bugatti Chiron",
    photo: "photo-197579361_457274084",
    cost: utils.numstring("200.000.000.000.000"),
    maxsk: 470,
    carsk: 990,
    razgon: 1.7,
    upgrade: utils.numstring("1.200.000.000.000"),
    id: 23,
  },
  {
    name: "Toyota Mark II на корабельном дизеле с 2-мя турбинами от боинга (Exclusive Edition)",
    photo: "photo-197613406_457278135",
    cost: utils.numstring("500"),
    maxsk: 589,
    carsk: utils.numstring("3.679"),
    razgon: 1.3,
    upgrade: utils.numstring("900.000.000.000.000"),
    id: 24,
  },
  {
    name: "Банан админа",
    photo: "photo-197613406_457278204",
    cost: utils.numstring("500"),
    maxsk: utils.numstring("99.999.999.999.999.999"),
    carsk: utils.numstring("99.999.999.999.999.999"),
    razgon: 0.1,
    upgrade: 1,
    id: 25,
  },
  {
    name: "BMW M8 Competition",
    photo: "photo-197613406_457278562",
    cost: utils.numstring("500"),
    maxsk: 290,
    carsk: 610,
    razgon: 2.9,
    upgrade: 1,
    id: 26,
  },
  {
    name: "Lamborgini Sian",
    photo: "photo-197613406_457278565",
    cost: utils.numstring("500"),
    maxsk: 490,
    carsk: 758,
    razgon: 2.8,
    upgrade: 1,
    id: 27,
  },
];

const pets = [
  {
    name: "Рыбка",

    cost: utils.numstring("100.000.000.000"),

    min: 10000,

    max: 500000,

    photo: `photo-197579361_457272157`,

    ico: `🐠`,

    id: 1,
  },

  {
    name: "Черепашка",

    cost: utils.numstring("500.000.000.000"),

    min: 25000,

    max: 125000,

    photo: `photo-197579361_457272151`,

    ico: `🐢`,

    id: 2,
  },

  {
    name: "Утка",

    cost: utils.numstring("5.000.000.000.000"),

    min: 6250000,

    max: 31250000,

    photo: `photo-197579361_457272152`,

    ico: `🦆`,

    id: 3,
  },

  {
    name: "Свинья",

    cost: utils.numstring("50.000.000.000.000"),

    min: 156205000,

    max: 781250000,

    photo: `photo-197579361_457272114`,

    ico: `🐷`,

    id: 4,
  },

  {
    name: "Кенгуру",

    cost: utils.numstring("100.000.000.000.000"),

    min: 440932896,

    max: 4100046927,

    photo: `photo-197579361_457272158`,

    ico: `🦘`,

    id: 5,
  },

  {
    name: "Собака",

    cost: utils.numstring("300.000.000.000.000"),

    min: 140500023,

    max: 740334055,

    photo: `photo-197579361_457272156`,

    ico: `🐶`,

    id: 6,
  },

  {
    name: "Панда",

    cost: utils.numstring("400.000.000.000.000"),

    min: 355329005,

    max: 1627004596,

    photo: `photo-197579361_457272150`,

    ico: `🐼`,

    id: 7,
  },

  {
    name: "Динозавр",

    cost: utils.numstring("500.000.000.000.000"),

    min: 3124321002,

    max: 27163228052,

    photo: `photo-197579361_457272153`,

    ico: `🦖`,

    id: 8,
  },

  {
    name: "Пчелка",

    cost: utils.numstring("1.000"),

    min: 700000000000,

    max: 1200000000000,

    photo: `photo-197579361_457341081`,

    ico: `🐝`,

    id: 9,
  },

  {
    name: "Кит",

    cost: utils.numstring("10.000"),

    min: 700000000000,

    max: 1200000000000,

    photo: `photo-197579361_457341080`,

    ico: `🐋`,

    id: 10,
  },

  {
    name: "Лошадь",

    cost: utils.numstring("15.000.000.000.000.000"),

    min: 77124321002,

    max: 997163228052,

    photo: `photo-197579361_457272157`,

    ico: `🐴`,

    id: 11,
  },

  {
    name: "Мышь",

    cost: utils.numstring("15.500.000.000.000.000"),

    min: 77524321002,

    max: 1008163228052,

    photo: `photo-197579361_457272157`,

    ico: `🐭`,

    id: 12,
  },

  {
    name: "Тигр",

    cost: 33300000000000000,

    min: 577524321002,

    max: 51008163228052,

    photo: `photo-197579361_457272157`,

    ico: `🐯`,

    id: 13,
  },

  {
    name: "Комар",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🦟`,

    id: 14,
  },

  {
    name: "Поросёнок",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🐖`,

    id: 15,
  },

  {
    name: "test pet",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🐖`,

    id: 16,
  },

  {
    name: "test pet",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🐖`,

    id: 17,
  },

  {
    name: "test pet",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🐖`,

    id: 18,
  },

  {
    name: "test pet",

    cost: 55500000000000000,

    min: 99999999999,

    max: 9999999999999,

    photo: `photo-197579361_457272157`,

    ico: `🐖`,

    id: 19,
  },

  {
    name: "Маленький котик",

    cost: 100,

    min: 1,

    max: 5,

    photo: `photo-211261524_457256865`,

    ico: `🐈`,

    id: 20,
  },
];

const pets2 = [
  {
    name: "Рыжик-Стёпа🐈Стёпа-Рыжик",

    cost: 100,

    min: 50,

    max: 100,

    photo: `photo-211261524_457278281`,

    ico: `🐈`,

    id: 1,
  },
];

const pets3 = [
  {
    name: "Пальма",

    cost: 100,

    min: 75,

    max: 125,

    photo: `photo-211261524_457301426`,

    ico: `🐈`,

    id: 1,
  },
];

const petsupd = [
  {
    cost: 2000000,

    id: 1,
  },

  {
    cost: 50000000,

    id: 2,
  },

  {
    cost: 1000000000,

    id: 3,
  },

  {
    cost: 600000000000,

    id: 4,
  },

  {
    cost: 2500000000000,

    id: 5,
  },

  {
    cost: 10000000000000,

    id: 6,
  },

  {
    cost: 60000000000000,

    id: 7,
  },

  {
    cost: 360000000000000,

    id: 8,
  },

  {
    cost: 15000000000000000,

    id: 9,
  },

  {
    cost: 25000000000000000,

    id: 10,
  },

  {
    cost: 3600000000000000,

    id: 11,
  },

  {
    cost: 3600000000000000,

    id: 12,
  },

  {
    cost: 66666666666666666666,

    id: 13,
  },

  {
    cost: 3600000000000,

    id: 14,
  },

  {
    cost: 3600000000000,

    id: 15,
  },

  {
    cost: 7200000000000,

    id: 16,
  },

  {
    cost: 66666666666666666666,

    id: 17,
  },
  {
    cost: 666666666666666666666,

    id: 18,
  },

  {
    cost: 666666666666666666666,

    id: 19,
  },

  {
    cost: 100,

    id: 20,
  },
];

const clocks = [
  {
    name: "DKNY NY2342",

    cost: 150000000,

    id: 1,
  },

  {
    name: "Earnshaw ES-8001-03",

    cost: 60000000,

    id: 2,
  },

  {
    name: "Orient ER27005W",

    cost: 114000000,

    id: 3,
  },

  {
    name: "Armani Exchange AX2104",

    cost: 325000000,

    id: 4,
  },

  {
    name: "Swiss Military Hanowa  06-3308.04.007",

    cost: 750000000,

    id: 5,
  },

  {
    name: "Calvin Klein K3M2212Z",

    cost: 900000000,

    id: 6,
  },

  {
    name: "Bomberg NS44CHSP.0098.3",

    cost: 1300000000,

    id: 7,
  },

  {
    name: "Armani Exchange AX2900",

    cost: 2225000000,

    id: 8,
  },

  {
    name: "Wainer WA. 10000-A",

    cost: 3440000000,

    id: 9,
  },
];

const yachts = [
  {
    name: "Ванна",

    cost: 10000000000,

    id: 1,
  },

  {
    name: "Nauticat 331",

    cost: 10000000000000,

    id: 2,
  },

  {
    name: "Nordhavn 56 MS",

    cost: 15000000000000,

    id: 3,
  },

  {
    name: "Princess 60",

    cost: 25000000000000,

    id: 4,
  },

  {
    name: "Azimut 70",

    cost: 35000000000000,

    id: 5,
  },

  {
    name: "Dominator 40M",

    cost: 50000000000000,

    id: 6,
  },

  {
    name: "Moonen 124",

    cost: 60000000000000,

    id: 7,
  },

  {
    name: "Wider 150",

    cost: 65000000000000,

    id: 8,
  },

  {
    name: "Palmer Johnson 42M SuperSport",

    cost: 80000000000000,

    id: 9,
  },

  {
    name: "Wider 165",

    cost: 85000000000000,

    id: 10,
  },

  {
    name: "Eclipse",

    cost: 150000000000000,

    id: 11,
  },

  {
    name: "Dubai",

    cost: 300000000000000,

    id: 12,
  },

  {
    name: "Streets of Monaco",

    cost: 750000000000000,

    id: 13,
  },
];

const airplanes = [
  {
    name: "Параплан",

    cost: 100000000000,

    id: 1,
  },

  {
    name: "АН-2",

    cost: 350000000000,

    id: 2,
  },

  {
    name: "Cessna-172E",

    cost: 700000000000,

    id: 3,
  },

  {
    name: "Supermarine Spitfire",

    cost: 1000000000000,

    id: 4,
  },

  {
    name: "BRM NG-5",

    cost: 1400000000000,

    id: 5,
  },

  {
    name: "Cessna T210",

    cost: 2600000000000,

    id: 6,
  },

  {
    name: "Beechcraft 1900D",

    cost: 5500000000000,

    id: 7,
  },

  {
    name: "Cessna 550",

    cost: 8000000000000,

    id: 8,
  },

  {
    name: "Hawker 4000",

    cost: 22400000000000,

    id: 9,
  },

  {
    name: "Learjet 31",

    cost: 45000000000000,

    id: 10,
  },

  {
    name: "Airbus A318",

    cost: 85000000000000,

    id: 11,
  },

  {
    name: "F-35A",

    cost: 160000000000000,

    id: 12,
  },

  {
    name: "Boeing 747-430 Custom",

    cost: 225000000000000,

    id: 13,
  },

  {
    name: "C-17A Globemaster III",

    cost: 350000000000000,

    id: 14,
  },

  {
    name: "F-22 Raptor",

    cost: 400000000000000,

    id: 15,
  },

  {
    name: "Airbus 380 Custom",

    cost: 600000000000000,

    id: 16,
  },

  {
    name: "B-2 Spirit Stealth Bomber",

    cost: 1359000000000000,

    id: 17,
  },
];

const helicopters = [
  {
    name: "Шарик с пропеллером",

    cost: 150000000000,

    id: 1,
  },

  {
    name: "RotorWay Exec 162F",

    cost: 300000000000,

    id: 2,
  },

  {
    name: "Robinson R44",

    cost: 450000000000,

    id: 3,
  },

  {
    name: "Hiller UH-12C",

    cost: 1300000000000,

    id: 4,
  },

  {
    name: "AW119 Koala",

    cost: 2500000000000,

    id: 5,
  },

  {
    name: "MBB BK 117",

    cost: 4000000000000,

    id: 6,
  },

  {
    name: "Eurocopter EC130",

    cost: 7500000000000,

    id: 7,
  },

  {
    name: "Leonardo AW109 Power",

    cost: 10000000000000,

    id: 8,
  },

  {
    name: "Sikorsky S-76",

    cost: 15000000000000,

    id: 9,
  },

  {
    name: "Bell 429WLG",

    cost: 19000000000000,

    id: 10,
  },

  {
    name: "NHI NH90",

    cost: 35000000000000,

    id: 11,
  },

  {
    name: "Kazan Mi-35M",

    cost: 60000000000000,

    id: 12,
  },

  {
    name: "Bell V-22 Osprey",

    cost: 135000000000000,

    id: 13,
  },
];

const homes = [
  {
    name: "Деревенский домик",

    cost: 500000000000,

    id: 1,
  },

  {
    name: "Маленький домик",

    cost: 7000000000000,

    id: 2,
  },

  {
    name: "Особняк в центре города",

    cost: 50000000000000,

    id: 3,
  },

  {
    name: "Загородный дом",

    cost: 200000000000000,

    id: 4,
  },

  {
    name: "Дом Тима Кука",

    cost: 800000000000000,

    id: 5,
  },
];

const apartments = [
  {
    name: "Чердак",

    cost: 10000000,

    id: 1,
  },

  {
    name: "Квартира в общежитии",

    cost: 500000000,

    id: 2,
  },

  {
    name: "Однокомнатная квартира",

    cost: 500000000000,

    id: 3,
  },

  {
    name: "Двухкомнатная квартира",

    cost: 2000000000000,

    id: 4,
  },

  {
    name: "Четырехкомнатная квартира",

    cost: 5000000000000,

    id: 5,
  },

  {
    name: "Квартира в центре Москвы",

    cost: 10000000000000,

    id: 6,
  },

  {
    name: "Двухуровневая квартира",

    cost: 40000000000000,

    id: 7,
  },

  {
    name: "Квартира с Евроремонтом",

    cost: 100000000000000,

    id: 8,
  },
];

const phones = [
  {
    name: "Nokia 108",

    cost: 50000,

    id: 1,
  },

  {
    name: "Nokia 3310",

    cost: 500000,

    id: 2,
  },

  {
    name: "BQ Aquaris M5",

    cost: 5000000,

    id: 3,
  },

  {
    name: "ASUS ZenFone 4",

    cost: 6000000,

    id: 4,
  },

  {
    name: "Samsung Galaxy S11",

    cost: 1300000000,

    id: 5,
  },

  {
    name: "Escobar Fold 1",

    cost: 1550000000,

    id: 6,
  },

  {
    name: "iPhone 11 Pro Max",

    cost: 2500000000,

    id: 7,
  },

  {
    name: "Xiaomi Mi Mix Alpha",

    cost: 2600000000,

    id: 8,
  },

  {
    name: "Samsung Galaxy S50+",

    cost: 2800000000,

    id: 9,
  },
];

const businesses2 = [
  [
    // Бизнес #1

    {
      // Стандартный бизнес

      name: "Шаурмечная",

      photo: "",

      cost: utils.numstring("10.000.000"),

      earn: utils.numstring("500.000"),

      workers: 2,

      id: 1,

      icon: "🥖",
    },

    {
      // Первое улучшение

      name: "5 шаурмечных",

      photo: "",

      cost: utils.numstring("50.000"),

      earn: utils.numstring("500.000"),

      workers: 10,

      id: 1,

      icon: "🥖",
    },

    {
      // Второе улучшение

      name: "Небольшая сеть шаурмечных",

      photo: "",

      cost: utils.numstring("100.000"),

      earn: utils.numstring("1.000.000"),

      workers: 30,

      id: 1,

      icon: "🥖",
    },

    {
      // 3 улучшение

      name: "Средняя сеть шаурмечных",

      photo: "",

      cost: utils.numstring("200.000"),

      earn: utils.numstring("2.000.000"),

      workers: 50,

      id: 1,

      icon: "🥖",
    },

    {
      // 4 улучшение

      name: "Лучшие шаурмечные в стране",

      photo: "",

      cost: utils.numstring("400.000"),

      earn: utils.numstring("3.000.000"),

      workers: 200,

      id: 1,

      icon: "🥖",
    },

    {
      // Последнее улучшение

      name: "Мировая шаурмечная",

      photo: "",

      cost: utils.numstring("800.000"),

      earn: utils.numstring("5.000.000"),

      workers: 750,

      id: 1,

      icon: "🥖",
    },
  ],

  [
    {
      name: "Ларёк",

      photo: "",

      cost: utils.numstring("100.000.000"),

      earn: utils.numstring("3.000.000"),

      workers: 1,

      id: 2,

      icon: "🏪",
    },

    {
      name: "5 ларьков",

      photo: "",

      cost: utils.numstring("50.000.000"),

      earn: utils.numstring("6.000.000"),

      workers: 5,

      id: 2,

      icon: "🏪",
    },

    {
      name: "Небольшая сеть ларьков",

      photo: "",

      cost: utils.numstring("100.000.000"),

      earn: utils.numstring("8.000.000"),

      workers: 10,

      id: 2,

      icon: "🏪",
    },

    {
      name: "Средняя сеть ларьков",

      photo: "",

      cost: utils.numstring("300.000.000"),

      earn: utils.numstring("12.000.000"),

      workers: 40,

      id: 2,

      icon: "🏪",
    },

    {
      name: "Ларьки во всех городах страны",

      photo: "",

      cost: utils.numstring("500.000.000"),

      earn: utils.numstring("24.000.000"),

      workers: 150,

      id: 2,

      icon: "🏪",
    },

    {
      name: "Ларьки в каждой стране",

      photo: "",

      cost: utils.numstring("1.000.000.000"),

      earn: utils.numstring("50.000.000"),

      workers: 400,

      id: 2,

      icon: "🏪",
    },
  ],

  [
    {
      name: "Забегаловка",

      photo: "",

      cost: utils.numstring("1.000.000.000"),

      earn: utils.numstring("18.000.000"),

      workers: 3,

      id: 3,

      icon: "🍴",
    },

    {
      name: "Общепит",

      photo: "",

      cost: utils.numstring("5.000.000.000"),

      earn: utils.numstring("18.000.000"),

      workers: 7,

      id: 3,

      icon: "🍴",
    },

    {
      name: "Ресторан",

      photo: "",

      cost: utils.numstring("9.000.000.000"),

      earn: utils.numstring("22.000.000"),

      workers: 15,

      id: 3,

      icon: "🍴",
    },

    {
      name: "Небольшая сеть ресторанов",

      photo: "",

      cost: utils.numstring("15.000.000.000"),

      earn: utils.numstring("30.000.000"),

      workers: 80,

      id: 3,

      icon: "🍴",
    },

    {
      name: "Лучшие рестораны в стране",

      photo: "",

      cost: utils.numstring("25.000.000.000"),

      earn: utils.numstring("50.000.000"),

      workers: 300,

      id: 3,

      icon: "🍴",
    },

    {
      name: "Лучшие рестораны в мире",

      photo: "",

      cost: utils.numstring("50.000.000.000"),

      earn: utils.numstring("100.000.000"),

      workers: 300,

      id: 3,

      icon: "🍴",
    },
  ],

  [
    {
      name: "Мини-магазин",

      photo: "",

      cost: utils.numstring("10.000.000.000"),

      earn: utils.numstring("96.000.000"),

      workers: 3,

      id: 4,

      icon: "👛",
    },

    {
      name: "Магазин",

      photo: "",

      cost: utils.numstring("50.000.000.000"),

      earn: utils.numstring("260.000.000"),

      workers: 10,

      id: 4,

      icon: "👛",
    },

    {
      name: "Сеть магазинов",

      photo: "",

      cost: utils.numstring("100.000.000.000"),

      earn: utils.numstring("350.000.000"),

      workers: 70,

      id: 4,

      icon: "👛",
    },

    {
      name: "Сеть супермаркетов",

      photo: "",

      cost: utils.numstring("150.000.000.000"),

      earn: utils.numstring("500.000.000"),

      workers: 500,

      id: 4,

      icon: "👛",
    },

    {
      name: "Сеть гипермаркетов",

      photo: "",

      cost: utils.numstring("300.000.000.000"),

      earn: utils.numstring("900.000.000"),

      workers: 500,

      id: 4,

      icon: "👛",
    },

    {
      name: "Крупнейший ТЦ",

      photo: "",

      cost: utils.numstring("700.000.000.000"),

      earn: utils.numstring("1.500.000.000"),

      workers: 500,

      id: 4,

      icon: "👛",
    },
  ],

  [
    {
      name: "Завод в гараже",

      photo: "",

      cost: utils.numstring("100.000.000.000"),

      earn: utils.numstring("576.000.000"),

      workers: 5,

      id: 5,

      icon: "🌆",
    },

    {
      name: "Средний завод",

      photo: "",

      cost: utils.numstring("500.000.000.000"),

      earn: utils.numstring("800.000.000"),

      workers: 20,

      id: 5,

      icon: "🌆",
    },

    {
      name: "Сеть заводов",

      photo: "",

      cost: utils.numstring("1.000.000.000.000"),

      earn: utils.numstring("1.500.000.000"),

      workers: 200,

      id: 5,

      icon: "🌆",
    },

    {
      name: "Главные заводы страны",

      photo: "",

      cost: utils.numstring("2.000.000.000.000"),

      earn: utils.numstring("2.000.000.000"),

      workers: 1000,

      id: 5,

      icon: "🌆",
    },

    {
      name: "Главные заводы мира",

      photo: "",

      cost: utils.numstring("4.000.000.000.000"),

      earn: utils.numstring("5.000.000.000"),

      workers: 1000,

      id: 5,

      icon: "🌆",
    },

    {
      name: "Главный межпланетный завод",

      photo: "",

      cost: utils.numstring("6.000.000.000.000"),

      earn: utils.numstring("10.000.000.000"),

      workers: 1000,

      id: 5,

      icon: "🌆",
    },
  ],

  [
    {
      name: "Угольная шахта",

      photo: "",

      cost: utils.numstring("500.000.000.000"),

      earn: utils.numstring("3.456.000.000"),

      workers: 50,

      id: 6,

      icon: "🏚",
    },

    {
      name: "Золотая шахта",

      photo: "",

      cost: utils.numstring("1.000.000.000.000"),

      earn: utils.numstring("5.000.000.000"),

      workers: 75,

      id: 6,

      icon: "🏚️",
    },

    {
      name: "Алмазная шахта",

      photo: "",

      cost: utils.numstring("5.000.000.000.000"),

      earn: utils.numstring("10.000.000.000"),

      workers: 200,

      id: 6,

      icon: "🏚",
    },

    {
      name: "Алмазный карьер",

      photo: "",

      cost: utils.numstring("7.000.000.000.000"),

      earn: utils.numstring("30.000.000.000"),

      workers: 360,

      id: 6,

      icon: "🏚",
    },

    {
      name: "Крупнейший алмазный карьер",

      photo: "",

      cost: utils.numstring("10.000.000.000.000"),

      earn: utils.numstring("80.000.000.000"),

      workers: 700,

      id: 6,

      icon: "🏚",
    },

    {
      name: "Мировой алмазный карьер",

      photo: "",

      cost: utils.numstring("20.000.000.000.000"),

      earn: utils.numstring("130.000.000.000"),

      workers: 700,

      id: 6,

      icon: "🏚",
    },
  ],

  [
    {
      name: "Маленький офис",

      photo: "",

      cost: utils.numstring("2.000.000.000.000"),

      earn: utils.numstring("22.500.000.000"),

      workers: 10,

      id: 7,

      icon: "🏢",
    },

    {
      name: "Средний офис",

      photo: "",

      cost: utils.numstring("10.000.000.000.000"),

      earn: utils.numstring("50.000.000.000"),

      workers: 60,

      id: 7,

      icon: "🏢",
    },

    {
      name: "Большой офис",

      photo: "",

      cost: utils.numstring("20.000.000.000.000"),

      earn: utils.numstring("100.000.000.000"),

      workers: 200,

      id: 7,

      icon: "🏢",
    },

    {
      name: "Офис-небоскрёб",

      photo: "",

      cost: utils.numstring("30.000.000.000.000"),

      earn: utils.numstring("300.000.000.000"),

      workers: 700,

      id: 7,

      icon: "🏢",
    },

    {
      name: "Офисный квартал",

      photo: "",

      cost: utils.numstring("50.000.000.000.000"),

      earn: utils.numstring("600.000.000.000"),

      workers: 700,

      id: 7,

      icon: "🏢",
    },

    {
      name: "Офисный город",

      photo: "",

      cost: utils.numstring("80.000.000.000.000"),

      earn: utils.numstring("1.500.000.000.000"),

      workers: 700,

      id: 7,

      icon: "🏢",
    },
  ],

  [
    {
      name: "Любительский GameDev",

      photo: "",

      cost: utils.numstring("10.000.000.000.000"),

      earn: utils.numstring("200.000.000.000"),

      workers: 5,

      id: 8,

      icon: "🕹",
    },

    {
      name: "Инди GameDev",

      photo: "",

      cost: utils.numstring("12.000.000.000.000"),

      earn: utils.numstring("200.000.000.000"),

      workers: 10,

      id: 8,

      icon: "🕹",
    },

    {
      name: "AA GameDev",

      photo: "",

      cost: utils.numstring("20.000.000.000.000"),

      earn: utils.numstring("350.000.000.000"),

      workers: 50,

      id: 8,

      icon: "🕹",
    },

    {
      name: "AAA GameDev",

      photo: "",

      cost: utils.numstring("30.000.000.000.000"),

      earn: utils.numstring("500.000.000.000"),

      workers: 500,

      id: 8,

      icon: "🕹",
    },

    {
      name: "AAAA GameDev",

      photo: "",

      cost: utils.numstring("50.000.000.000.000"),

      earn: utils.numstring("800.000.000.000"),

      workers: 500,

      id: 8,

      icon: "🕹",
    },

    {
      name: "AAAAA+ GameDev",

      photo: "",

      cost: utils.numstring("80.000.000.000.000"),

      earn: utils.numstring("2.000.000.000.000"),

      workers: 500,

      id: 8,

      icon: "🕹️",
    },
  ],

  [
    {
      name: "Нефтевышка",

      photo: "",

      cost: utils.numstring("50.000.000.000.000"),

      earn: utils.numstring("900.000.000.000"),

      workers: 8,

      id: 9,

      icon: "🏜",
    },

    {
      name: "Нефтяная платформа в море",

      photo: "",

      cost: utils.numstring("50.000.000.000.000"),

      earn: utils.numstring("500.000.000.000"),

      workers: 20,

      id: 9,

      icon: "🏜",
    },

    {
      name: "Нефтяная платформа в океане",

      photo: "",

      cost: utils.numstring("80.000.000.000.000"),

      earn: utils.numstring("800.000.000.000"),

      workers: 50,

      id: 9,

      icon: "🏜",
    },

    {
      name: "5 нефтеплатформ в океанах",

      photo: "",

      cost: utils.numstring("100.000.000.000.000"),

      earn: utils.numstring("2.000.000.000.000"),

      workers: 250,

      id: 9,

      icon: "🏜",
    },

    {
      name: "25 нефтеплатформ в океанах",

      photo: "",

      cost: utils.numstring("150.000.000.000.000"),

      earn: utils.numstring("5.000.000.000.000"),

      workers: 250,

      id: 9,

      icon: "🏜",
    },

    {
      name: "125 нефтеплатформ в океанах",

      photo: "",

      cost: utils.numstring("200.000.000.000.000"),

      earn: utils.numstring("10.000.000.000.000"),

      workers: 250,

      id: 9,

      icon: "🏜",
    },
  ],

  [
    {
      name: "Мини АЭС",

      photo: "",

      cost: utils.numstring("100.000.000.000.000"),

      earn: utils.numstring("2.400.000.000.000"),

      workers: 40,

      id: 10,

      icon: "💡",
    },

    {
      name: "Средняя АЭС",

      photo: "",

      cost: utils.numstring("150.000.000.000.000"),

      earn: utils.numstring("5.000.000.000.000"),

      workers: 75,

      id: 10,

      icon: "💡",
    },

    {
      name: "АЭС с 5 энергоблоками",

      photo: "",

      cost: utils.numstring("200.000.000.000.000"),

      earn: utils.numstring("9.000.000.000.000"),

      workers: 300,

      id: 10,

      icon: "💡",
    },

    {
      name: "Крупнейшая атомная станция",

      photo: "",

      cost: utils.numstring("250.000.000.000.000"),

      earn: utils.numstring("15.000.000.000.000"),

      workers: 650,

      id: 10,

      icon: "💡",
    },

    {
      name: "Крупнейший комплекс станций",

      photo: "",

      cost: utils.numstring("300.000.000.000.000"),

      earn: utils.numstring("19.000.000.000.000"),

      workers: 650,

      id: 10,

      icon: "💡",
    },
  ],

  [
    {
      name: "Космическое агентство",

      photo: "",

      cost: utils.numstring("1.000.000.000.000.000"),

      earn: utils.numstring("20.000.000.000.000"),

      workers: 100,

      id: 11,

      icon: "🚀",
    },

    {
      name: "Улучшенное космическое агентство",

      photo: "",

      cost: utils.numstring("1.500.000.000.000.000"),

      earn: utils.numstring("30.000.000.000.000"),

      workers: 200,

      id: 11,

      icon: "🚀",
    },

    {
      name: "Продвинутое космическое агентство",

      photo: "",

      cost: utils.numstring("2.000.000.000.000.000"),

      earn: utils.numstring("50.000.000.000.000"),

      workers: 350,

      id: 11,

      icon: "🚀",
    },

    {
      name: "Космическое агентство по полетам на Марс",

      photo: "",

      cost: utils.numstring("3.000.000.000.000.000"),

      earn: utils.numstring("70.000.000.000.000"),

      workers: 650,

      id: 11,

      icon: "🚀",
    },

    {
      name: "Космическое агентство по полетам на Юпитер",

      photo: "",

      cost: utils.numstring("4.000.000.000.000.000"),

      earn: utils.numstring("90.000.000.000.000"),

      workers: 650,

      id: 11,

      icon: "🚀",
    },

    {
      name: "Космическое агентство по полетам на Солнце",

      photo: "",

      cost: utils.numstring("5.000.000.000.000.000"),

      earn: utils.numstring("130.000.000.000.000"),

      workers: 650,

      id: 11,

      icon: "🚀",
    },
  ],

  [
    {
      name: "Межпланетный экспресс",

      photo: "photo-211261524_457239207",

      cost: utils.numstring("15.000.000.000.000.000"),

      earn: utils.numstring("100.000.000.000.000"),

      workers: 10000,

      id: 12,

      icon: "🛸",
    },

    {
      name: "Продвинутое космическое агентство",

      photo: "",

      cost: utils.numstring("5.000.000.000.000.000"),

      earn: utils.numstring("150.000.000.000.000"),

      workers: 10000,

      id: 12,

      icon: "🚀",
    },

    {
      name: "Космическое агентство по полетам на Марс",

      photo: "",

      cost: utils.numstring("10.000.000.000.000.000"),

      earn: utils.numstring("200.000.000.000.000"),

      workers: 10000,

      id: 12,

      icon: "🚀",
    },
  ],

  [
    {
      name: "Киностудии по всему миру",

      cost: utils.numstring("15.000.000.000.000.000"),

      earn: utils.numstring("250.000.000.000.000"),

      workers: 7500,

      id: 13,

      icon: "📹",
    },

    {
      name: "Киностудии по всей галактике",

      photo: "",

      cost: utils.numstring("20.000.000.000.000.000"),

      earn: utils.numstring("300.000.000.000.000"),

      workers: 10000,

      id: 13,

      icon: "📹",
    },
  ],

  [
    {
      name: "Кладбище зомби",

      cost: 1000000000,

      earn: 1000000000000,

      workers: 1,

      id: 14,

      icon: "☣",
    },

    {
      name: "Кладбище скелетов",

      cost: 1000000000000000,

      earn: 3000000000000,

      workers: 1,

      id: 14,

      icon: "☣",
    },

    {
      name: "Кладбище духов",

      cost: 2000000000000000,

      earn: 10000000000000,

      workers: 1,

      id: 14,

      icon: "☣",
    },
  ],

  [
    {
      name: "꧁༒☆•ѦƊ•☆༒꧂",

      photo: "photo-197579361_457241472",

      cost: 2000000000000000,

      earn: 6666666666666,

      workers: 666666666,

      id: 15,

      icon: "☣",
    },
  ],

  [
    {
      name: "Ледяные миньоны",

      photo: "photo-197579361_457241609",

      cost: 2000000000000000,

      earn: 10000000000000,

      workers: 20,

      id: 16,

      icon: "❄",
    },
  ],

  [
    {
      name: "🤯𝙹𝚜𝚙𝚏𝚘𝚘𝚕𝚑𝟷𝟿🤯",

      photo: "photo-197579361_457247553",

      cost: 2000000000000000,

      earn: 6000000000000,

      workers: 5,

      id: 17,

      icon: "♻",
    },
  ],

  [
    {
      name: "Страдания людей",

      photo: "photo-197579361_457265687",

      cost: 10000000000000,

      earn: 10000000000000,

      workers: 4,

      id: 18,

      icon: "☣",
    },
  ],

  [
    {
      name: "Sex Shop",

      photo: "photo-197579361_457265686",

      cost: 10000000000000,

      earn: 10000000000000,

      workers: 5000,

      id: 19,

      icon: "☣",
    },
  ],

  [
    {
      name: "Корпорация по сборке ПК",

      photo: "photo-197579361_457265689",

      cost: 10000000000000,

      earn: 10000000000000,

      workers: 12345654321,

      id: 20,

      icon: "☣",
    },
  ],

  [
    {
      name: "Майнинг биткоинов",

      photo: "photo-197579361_457337226",

      cost: 2000000000000000,

      earn: 20000000000000,

      workers: 500,

      id: 21,

      icon: "🌐",
    },
  ],

  [
    {
      name: "Сытый Ёжик",

      cost: 1000000000000000,

      earn: 15000000000000,

      workers: 666,

      id: 22,

      icon: "🦔",
    },
  ],

  [
    {
      name: "Атл групп",

      photo: "photo-197579361_457342282",

      cost: 1000000000000000,

      earn: 15000000000000,

      workers: 500,

      id: 23,

      icon: "🅰️",
    },
  ],

  [
    {
      name: "Личный Бизнес",

      photo: "photo",

      cost: 1000000000000000,

      earn: 15000000000000,

      workers: 666,

      id: 24,

      icon: "📇",
    },
  ],

  [
    {
      name: "TikTok House",

      photo: "photo",

      cost: 1000000000000000,

      earn: 15000000000000,

      workers: 666,

      id: 25,

      icon: "🏠",
    },
  ],

  [
    {
      name: "TikTok House",

      photo: "photo",

      cost: 1000000000000000,

      earn: 15000000000000,

      workers: 666,

      id: 26,

      icon: "🏠",
    },
  ],

  [
    {
      name: "Космодром и полеты на Венеру",

      photo: "photo-211261524_457255183",

      cost: 1000000000000000,

      earn: 40000000000000,

      workers: 40000,

      id: 27,

      icon: "🏠",
    },
  ],

  [
    {
      name: "Магазин Живого пива",

      photo: "photo-211261524_457260547",

      cost: 1000000000000000,

      earn: 25000000000000,

      workers: 40000,

      id: 28,

      icon: "🏠",
    },
  ],

  [
    {
      name: "🌪ᴘᴀʀᴀᴅɪsᴇ🌪",

      photo: "photo-211261524_457260547",

      cost: 1000000000000000,

      earn: 10000000000000,

      workers: 40000,

      id: 29,

      icon: "🏠",
    },
  ],

  [
    {
      name: "Личная шахта",

      photo: "photo-211261524_457279755",

      cost: 1500000000000000,

      earn: 15000000000000,

      workers: 40000,

      id: 30,

      icon: "🧨",
    },
  ],

  [
    {
      name: "Аэропорт",

      photo: "",

      cost: 1500000000000000,

      earn: 5000000000000,

      workers: 40000,

      id: 31,

      icon: "🧨",
    },

    {
      name: "Аэропорт",

      photo: "",

      cost: 1500000000000000,

      earn: 15000000000000,

      workers: 40000,

      id: 31,

      icon: "🧨",
    },
  ],
];

const computers = [
  {
    name: "DЕXР Аquilоn О175",

    cost: 10000,

    id: 1,
  },

  {
    name: "HYРЕRРС NЕО",

    cost: 500000,

    id: 2,
  },

  {
    name: "DЕLL Аliеnwаrе Аurоrа R7",

    cost: 1000000,

    id: 3,
  },

  {
    name: "HYРЕRРС СОSMОS X 3",

    cost: 3000000,

    id: 4,
  },

  {
    name: "HYРЕRРС РRЕMIUM",

    cost: 5000000,

    id: 5,
  },
];

const works = [
  {
    name: "Дворник",

    requiredLevel: 1,

    min: 10000,

    max: 25000,

    id: 1,
  },

  {
    name: "Сантехник",

    requiredLevel: 2,

    min: 50000,

    max: 125000,

    id: 2,
  },

  {
    name: "Электрик",

    requiredLevel: 3,

    min: 250000,

    max: 625000,

    id: 3,
  },

  {
    name: "Слесарь",

    requiredLevel: 4,

    min: 1250000,

    max: 3100000,

    id: 4,
  },

  {
    name: "Юрист",

    requiredLevel: 5,

    min: 6200000,

    max: 15500000,

    id: 5,
  },

  {
    name: "Бухгалтер",

    requiredLevel: 7,

    min: 31000000,

    max: 77000000,

    id: 6,
  },

  {
    name: "Бармен",

    requiredLevel: 10,

    min: 144000000,

    max: 360000000,

    id: 7,
  },

  {
    name: "Администратор",

    requiredLevel: 15,

    min: 720000000,

    max: 1800000000,

    id: 8,
  },

  {
    name: "Программист",

    requiredLevel: 20,

    min: 3600000000,

    max: 9000000000,

    id: 9,
  },

  {
    name: "Главный Программист",

    requiredLevel: 25,

    min: 18000000000,

    max: 45000000000,

    id: 10,
  },

  {
    name: "Директор",

    requiredLevel: 35,

    min: 90000000000,

    max: 230000000000,

    id: 11,
  },

  {
    name: "Президент",

    requiredLevel: 50,

    min: 500000000000,

    max: 1000000000000,

    id: 12,
  },

  {
    name: "Мафиози",

    requiredLevel: 100,

    min: 1000000000000,

    max: 2000000000000,

    id: 13,
  },

  {
    name: "Шахтер",

    requiredLevel: 500,

    min: 2000000000000,

    max: 3000000000000,

    id: 14,
  },

  {
    name: "Создатель Чако",

    requiredLevel: 1000,

    min: 5000000000000,

    max: 6000000000000,

    id: 15,
  },
];

const farms = [
  {
    name: "7U Nvidia",

    cost: 100000000,

    id: 1,
  },

  {
    name: "AntminerS9",

    cost: 2000000000,

    id: 2,
  },

  {
    name: "FM2020-BT400",

    cost: 70000000000,

    id: 3,
  },

  {
    name: "Gеnеsis Mining",

    cost: 500000000000,

    id: 4,
  },

  {
    name: "GigаWаtt",

    cost: 1000000000000,

    id: 5,
  },

  {
    name: "TerraEngine",

    cost: 10000000000000,

    id: 6,
  },

  {
    name: "YotaMiner",

    cost: 50000000000000,

    id: 7,
  },
];

const videocards = [
  {
    name: "MSI Radeon R7360 OC",

    cost: 100,

    id: 1,
  },

  {
    name: "GIGABYTE GeForce GTV 750 Ti",

    cost: 250,

    id: 2,
  },

  {
    name: "Gigabyte GeForce GTX 1080",

    cost: 500,

    id: 3,
  },

  {
    name: "NVIDIA TESLA V100",

    cost: 50000,

    id: 4,
  },
];

const minertool = [
  {
    name: "Деревянная кирка",

    cost: 1600000000000,

    id: 1,
  },

  {
    name: "Стальная кирка",

    cost: 10000000000000,

    id: 2,
  },

  {
    name: "Буровая установка",

    cost: 60000000000000,

    id: 3,
  },

  {
    name: "Адронный коллайдер",

    cost: 400000000000000,

    id: 4,
  },

  {
    name: "Разрушитель частиц",

    cost: 1000000000000000,

    id: 5,
  },
];

//Листики

const trees = [
  {
    name: "Одинокое дерево",

    cost: 1000000000000,

    photo: `photo-197579361_457242931`,

    earn: 1,

    id: 1,
  },

  {
    name: "Несколько деревьев",

    cost: 10000000000000,

    photo: `photo-197579361_457242933`,

    earn: 3,

    id: 2,
  },

  {
    name: "Лес",

    cost: 100000000000000,

    photo: `photo-197579361_457242932`,

    earn: 5,

    id: 3,
  },

  {
    name: "Опавшее дерево",

    cost: 500000000000000,

    photo: `photo-197579361_457242934`,

    earn: 9,

    id: 4,
  },

  {
    name: "Березка",

    cost: 500000000000000,

    photo: `photo-211261524_457380226`,

    earn: 15,

    id: 5,
  },
];

let btc = 50000;
let dog = 0.272;

let presidents = require("./save/presidents.json");
let config = require("./save/settings.json");
let bossinfo = require("./save/bossinfo.json");
let botinfo = require("./save/botinfo.json");
let casino = require("./save/casino.json");
let clans = require("./save/adop.json");
let chats = require("./save/chats.json");
let bitva = require("./save/pasxa.json");
let kursrudtime = Date.now() + 301000;

setInterval(() => {
  if (kursrudtime > Date.now()) {
    kursrudtime -= 1;
  }
  if (kursrudtime <= Date.now()) {
    kursrudtime = Date.now() + 301000;
  }
}, 1000);

function getUnix() {
  return Date.now();
}

function addZero(i) {
  return i < 10 ? "0" + i : i;
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
function clearTemp() {
  users.map((user) => {
    user.timers.hasWorked = 0;

    user.timers.bonus = 0;

    //user.energy = user.maxenergy;

    user.timers.poxod = 0;

    user.timers.vipbonus = 0;

    user.timers.prembonus = 0;

    user.timers.titanbonus = 0;

    user.timers.imperatorbonus = 0;

    user.timers.podarok = 0;

    user.promo = false;

    user.scar.gontime = 0;

    user.limit.paylimit = user.limit.playerlimit;

    user.limitadd.paylimitadd = user.limitadd.playerlimitadd;

    user.limit.sent = 0;

    user.limitadd.sentadd = 0;

    user.timers.report = 0;

    user.timers.ban = false;
  });
}

async function upplazma() {
  rand = utils.random(1, 15);

  botinfo.kursplazma = Math.floor(Number(rand * 100000000000));
}

async function upobsidian() {
  rand = utils.random(10, 25);

  botinfo.kursobsidian = Math.floor(Number(rand * 10000000000));
}

async function upmateria() {
  rand = utils.random(1, 16);

  botinfo.kursmateria = Math.floor(Number(rand * 1000000000));
}

async function upalmaz() {
  rand = utils.random(1, 200);

  botinfo.kursalmaz = Math.floor(Number(rand * 1000000));
}

async function upzoloto() {
  rand = utils.random(1, 40);

  botinfo.kurszoloto = Math.floor(Number(rand * 100000));
}

async function upzhelezo() {
  rand = utils.random(1, 50);

  botinfo.kurszhelezo = Math.floor(Number(rand * 10000));
}

async function saveUsers() {
  require("fs").writeFileSync(
    "./save/users.json",
    JSON.stringify(users, null, "\t")
  );

  return true;
}

async function saveBlago() {
  require("fs").writeFileSync(
    "./save/blago.json",
    JSON.stringify(blago, null, "\t")
  );

  return true;
}

async function savePromo() {
  require("fs").writeFileSync(
    "./save/settings.json",
    JSON.stringify(config, null, "\t")
  );

  return true;
}
async function saveBoss() {
  require("fs").writeFileSync(
    "./save/bossinfo.json",
    JSON.stringify(bossinfo, null, "\t")
  );

  return true;
}

async function saveAll() {
  require("fs").writeFileSync(
    "./save/botinfo.json",
    JSON.stringify(botinfo, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/bossinfo.json",
    JSON.stringify(bossinfo, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/users.json",
    JSON.stringify(users, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/settings.json",
    JSON.stringify(config, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/casino.json",
    JSON.stringify(casino, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/clans.json",
    JSON.stringify(clans, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/presidents.json",
    JSON.stringify(presidents, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/chats.json",
    JSON.stringify(chats, null, "\t")
  );

  require("fs").writeFileSync(
    "./save/pasxa.json",
    JSON.stringify(bitva, null, "\t")
  );
  return true;
}
vk.updates.start().then(() => {
  console.log("успешно запущен!");
});

vk.updates.on("like_add", async (message) => {
  return vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `Webhook (vk.com/dev/group_events) #like_add.\n\nAttachment: ${message.objectId}`,
  });
});

vk.updates.on("wall_reply_new", async (message) => {
  if (/\[228105719\|(.*)]/i.test(message.text))
    message.text = message.text.replace(/\[228105719\|(.*)]/gi, "").trim();

  if (Number(message.senderId) <= 0) return;

  let user = users.find((x) => x.id === message.fromId);

  if (!user) return;

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `🗑️ Возможно, этот комментарий содержит текст рекламного/оскорбительного формата

🆔 ID комментария: ${message.id} ✍️
💬❗ Написал @id${user.id} (${user.tag}) - ID: ${user.uid}

💌 Текст комментария: «${message.text}»

♻️ Чтобы удалить комментарий напишите «Удалить ${message.id}» или нажмите на кнопку ниже.
👇 Прикрепил пост, на котором был написан этот комментарий`,
    attachment: `wall-214585937_${message.objectId}`,
  });

  {
    if (config.timerpost === message.objectId) {
      if (Date.now() - config.timerTimeLast >= 300000) {
        user.c3 += 100;

        await vk.api.call("wall.createComment", {
          owner_id: message.ownerId,

          post_id: message.objectId,

          reply_to_comment: message.id,

          message: `💞 Ваш комментарий продержался 5 или более минут поздравляем <3`,
        });

        await vk.api.wall.closeComments({
          owner_id: -228105719,

          post_id: config.timerpost,
        });

        config.timerTimeLast = Date.now();
      } else {
        config.timerTimeLast = Date.now();
      }
    }

    if (config.chislopost === message.objectId)
      if (message.text === config.chislorand) {
        vk.api.call("wall.createComment", {
          owner_id: message.ownerId,

          post_id: message.objectId,

          reply_to_comment: message.id,

          message: `💞 Вы угадали число`,
        });

        await vk.api.wall.closeComments({
          owner_id: -228105719,

          post_id: config.chislopost,
        });

        user.settings.titan = true;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `[УВЕДОМЛЕНИЕ]
				▶ Поздравляем! Вы угадали число и выиграли TITAN VIP :3 Помощь по команде 'Titan help'
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });

        return;
      } else {
        return vk.api.call("wall.createComment", {
          owner_id: message.ownerId,

          post_id: message.objectId,

          reply_to_comment: message.id,

          message: `💞 Вы не угадали число попробуйте снова ${utils.pick([
            "😕",
            "😔",
            "😫",
          ])}`,
        });
      }

    let multiply = "";
    if (config.grabejpost === message.objectId) {
      if (
        message.text === "Грабить" ||
        message.text === "грабить" ||
        message.text === "Ограбить" ||
        message.text === "ограбить"
      ) {
        multiply = utils.pick([
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        ]);

        if (multiply === 1) {
          multiply = utils.pick([1, 1, 1, 2, 2, 3]);

          if (multiply === 1) {
            config.grabejcount -= 1;

            user.balance += 100000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]
					▶ Поздравляем! Вы совершили успешный грабеж и выиграли 100.000.000.000.000$ :3 '
					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Вы совершили успешный грабеж, на ваш баланс зачислено 100.000.000.000.000$ ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.grabejcount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.grabejpost,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }

          if (multiply === 2) {
            config.grabejcount -= 1;

            user.c3 += 5;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]
					▶ Поздравляем! Вы совершили успешный грабеж и выиграли 5 Донат Кейсов :3 Открытие по команде 'Кейс открыть 3'
					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Вы совершили успешный грабеж, на ваш баланс зачислено 5 Донат кейсов ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.grabejcount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.grabejpost,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }

          if (multiply === 3) {
            config.grabejcount -= 1;

            user.c6 += 1;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]
					▶ Поздравляем! Вы совершили успешный грабеж и выиграли Секретный кейс :3 Открытие по команде 'Кейс открыть 6'
					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Вы совершили успешный грабеж, на ваш баланс зачислен 1 Секретный кейс ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.grabejcount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.grabejpost,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }
        } else {
          return vk.api.call("wall.createComment", {
            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Грабеж неудался, попробуйте снова ${utils.pick([
              "😕",
              "😔",
              "😫",
            ])}`,
          });
        }
      }
    }

    if (config.fortuna === message.objectId) {
      if (
        message.text === "Фортуна" ||
        message.text === "фортуна" ||
        message.text === "фарт" ||
        message.text === "fortune"
      ) {
        multiply = utils.pick([
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        ]);

        if (multiply === 1) {
          multiply = utils.pick([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4]);

          if (multiply === 1) {
            config.fortunacount -= 1;

            user.balance += 50000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]
					▶ Поздравляем! Удача улыбнулась вам и вы выиграли 50.000.000.000.000$ :3 '
					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 50.000.000.000.000$`,
            });

            if (config.fortunacount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.fortuna,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }

          if (multiply === 2) {
            config.fortunacount -= 1;

            user.balance += 100000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]

					▶ Поздравляем! Удача улыбнулась вам и вы выиграли 100.000.000.000.000$ :3 '

					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 100.000.000.000.000$ ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.fortunacount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.fortuna,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }

          if (multiply === 3) {
            config.fortunacount -= 1;

            user.c3 += 2;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]

					▶ Поздравляем! Удача улыбнулась вам и вы выиграли 2 Донат Кейса :3 Открытие по команде 'Кейс открыть 3'

					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Удача улыбнулась вам, на ваш баланс зачислено 2 Донат кейсов ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.fortunacount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.fortuna,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }

          if (multiply === 4) {
            config.fortunacount -= 1;

            user.c6 += 1;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,

                message: `[УВЕДОМЛЕНИЕ]

					▶ Поздравляем! Удача улыбнулась вам и вы выиграли Секретный кейс :3 Открытие по команде 'Кейс открыть 6'

					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

                random_id: 0,
              });

            vk.api.call("wall.createComment", {
              owner_id: message.ownerId,

              post_id: message.objectId,

              reply_to_comment: message.id,

              message: `💞 Удача улыбнулась вам, на ваш баланс зачислен 1 Секретный кейс ${utils.pick(
                ["😕", "😔", "😫"]
              )}`,
            });

            if (config.fortunacount <= 0) {
              await vk.api.wall.closeComments({
                owner_id: -228105719,

                post_id: config.fortuna,
              });

              vk.api.call("wall.createComment", {
                owner_id: message.ownerId,

                post_id: message.objectId,

                message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
                  ["😕", "😔", "😫"]
                )}`,
              });
            }
          }
        } else {
          return vk.api.call("wall.createComment", {
            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Удача не на вашей стороне, попробуйте снова ${utils.pick(
              ["😕", "😔", "😫"]
            )}`,
          });
        }
      }
    }

    if (config.firpost === message.objectId) {
      if (
        message.text === "елка" ||
        message.text === "ёлка" ||
        message.text === "Елка" ||
        message.text === "Ёлка"
      ) {
        if (config.fircount <= 0) {
          vk.api.call("wall.createComment", {
            owner_id: message.ownerId,

            post_id: message.objectId,

            message: `💞 Акция закончилась, все призы были разыграны ${utils.pick(
              ["🙂", "😃", "😄", "🤑", "☺"]
            )}`,
          });

          await vk.api.wall.closeComments({
            owner_id: -228105719,

            post_id: config.firpost,
          });
        }

        multiply = utils.pick([
          1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0,
          0, 0, 0,
        ]);

        if (multiply === 1) {
          config.fircount -= 1;

          user.water += 1;

          if (user.notifications)
            await vk.api.messages.send({
              user_id: user.id,

              message: `[УВЕДОМЛЕНИЕ]

					▶ Поздравляем! Вы успешно нашли ведро воды для Ёлки ${utils.pick([
            "🙂",
            "😃",
            "😄",
            "🤑",
            "☺",
          ])} '

					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

              random_id: 0,
            });

          vk.api.call("wall.createComment", {
            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Вы успешно нашли ведро воды для Ёлки${utils.pick([
              "🙂",
              "😃",
              "😄",
              "🤑",
              "☺",
            ])}`,
          });
        }

        if (multiply === 2) {
          config.fircount -= 1;

          user.fertilizer += 1;

          if (user.notifications)
            await vk.api.messages.send({
              user_id: user.id,

              message: `[УВЕДОМЛЕНИЕ]

					▶ Поздравляем! Вы успешно нашли удобрение для Ёлки ${utils.pick([
            "🙂",
            "😃",
            "😄",
            "🤑",
            "☺",
          ])} '

					🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

              random_id: 0,
            });

          vk.api.call("wall.createComment", {
            owner_id: message.ownerId,

            post_id: message.objectId,

            reply_to_comment: message.id,

            message: `💞 Вы успешно нашли удобрение для Ёлки${utils.pick([
              "🙂",
              "😃",
              "😄",
              "🤑",
              "☺",
            ])}`,
          });
        }
      }
    }
  }
});

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

updates.on("message", async (message) => {
  if (Number(message.senderId) <= 0) return;
  if (/\[club228105719\|(.*)\]/i.test(message.text))
    message.text = message.text.replace(/\[club228105719\|(.*)\]/gi, "").trim();
  message.user = users.find((x) => x.id === message.senderId);

  if (!message.user) {
    const [user_info] = await user.api.users.get({
      user_id: message.senderId,
      fields:
        "photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",
    });
    const date = new Date();

    users.push({
      id: message.senderId,
      uid: users.length,
      balance: 5000,
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
      newyear: {
        kazino: 0,
        tutil: 0,
        case: 0,
        bottle: 0,
        razdacha: 0,
        safe: 0,
        trade: 0,
        titul: 0,
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
        fakeid: users.length,
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
      bantop: false,
      gon: 0,
      regDate: `${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      mention: true,
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
      tag: user_info.first_name,
      work: 0,
      lte2: false,
      business: [],
      notifications: true,
      promo: false,
      opit: 0,
      exp: 1,
      level: 1,
      bans: {
        ban: false,
        rban: false,
        pban: false,
        bantimer: 0,
        rbantimer: 0,
      },
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
      snegovik: {
        head: 0,
        torso: 0,
        arms: 0,
        down: 0,
        nose: 0,
        vedro: 0,
      },
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
      photo: 0,
      status: {
        work: false,
        gon: false,
        boss: false,
        mainer: false,
        rich: false,
      },
    });
    message.user = users.find((x) => x.id === message.senderId);
    message.send(
      ` 
&#8195;&#8195; Добро пожаловать! 😀👋🏻\n\n♻️ @club2228105719 (ЧакоБот) — игровой бот, с крутым и игровым арсеналом команд!\n🤗 Вы были успешно зарегистрированы в боте, приятной игры! 🎮\n▶️ Просмотреть список всех команд можно написав «Помощь» 🎊`,
      {
        keyboard: JSON.stringify({
          one_time: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "♻️ Помощь",
                },
                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.isChat) {
    if (!chats[message.chatId]) {
      chats[message.chatId] = [];
      chats[message.chatId] = {
        
        statuemoney: 0,
        statuepeople: 0,
        statuemsg: 0,
        statuemoneylvl: 0,
        statuepeoplelvl: 0,
        statuemsglvl: 0,
        reg: new Date(),
        priz: false,
      };
    } else {
      if (chats[message.chatId].statuemsg < 10000) {
        chats[message.chatId].statuemsglvl = 0;
      }
      if (chats[message.chatId].statuemsg >= 10000) {
        chats[message.chatId].statuemsglvl = 1;
      }
      if (chats[message.chatId].statuemsg >= 100000) {
        chats[message.chatId].statuemsglvl = 2;
      }
      if (chats[message.chatId].statuemsg >= 500000) {
        chats[message.chatId].statuemsglvl = 3;
      }
      let pear = 2000000000 + message.chatId;
      const chat_info = await vk.api.call("messages.getConversationMembers", {
        peer_id: pear,
      });

      chats[message.chatId].statuepeople = chat_info.count;

      if (chats[message.chatId].statuepeople < 10) {
        chats[message.chatId].statuepeoplelvl = 0;
      }

      if (chats[message.chatId].statuepeople >= 10) {
        chats[message.chatId].statuepeoplelvl = 1;
      }

      if (chats[message.chatId].statuepeople >= 25) {
        chats[message.chatId].statuepeoplelvl = 2;
      }

      if (chats[message.chatId].statuepeople >= 50) {
        chats[message.chatId].statuepeoplelvl = 3;
      }

      if (chats[message.chatId].statuepeople >= 60) {
        chats[message.chatId].statuepeoplelvl = 4;
      }

      if (chats[message.chatId].statuepeople >= 80) {
        chats[message.chatId].statuepeoplelvl = 5;
      }

      if (chats[message.chatId].statuepeople >= 100) {
        chats[message.chatId].statuepeoplelvl = 6;
      }
    }
  }

  if (message.referralSource && message.referralValue) {
    if (message.referralSource && message.referralValue === message.senderId)
      return message.send(`⚠ Вы не можете активировать своё приглашение.`);

    if (message.user.ref)
      return message.send(`⚠ Вы уже активировали приглашение.`);

    let user = await users.find((x) => x.id === message.referralSource);

    if (!user) return message.send(`⚠ Игрок не найден.`);

    message.user.ref = true;

    multiply = [1, 2, 3, 4];

    multiply = utils.pick(multiply);

    user.refcount += 1;

    user.fertilizer += 2;

    user.water += 2;

    if (user.refcount < 10) {
      if (multiply === 1) {
        user.c3 += 1;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислен 1 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 2) {
        user.balance += 10000000000000;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 10.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 3) {
        user.c2 += 3;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 3 Золотые-кейса за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 4) {
        user.rubli += 1;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 1 рубль за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }
    }

    if (user.refcount > 10 && user.refcount < 100) {
      if (multiply === 1) {
        user.c3 += 2;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 2 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 2) {
        user.balance += 20000000000000;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 20.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 3) {
        user.c2 += 5;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 5 Золотые-кейсов за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 4) {
        user.rubli += 2;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 2 рубля за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }
    }

    if (user.refcount === 666) {
      user.stars5 = true;
      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислена лучшая звезда за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (user.refcount > 100 && user.refcount !== 666) {
      if (multiply === 1) {
        user.c3 += 3;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 3 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 2) {
        user.balance += 50000000000000;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 50.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 3) {
        user.c2 += 10;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 10 Золотые-кейсов за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (multiply === 4) {
        user.rubli += 3;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 3 рубля за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }
    }

    if (user.refcount % 20 === 0) {
      user.c6 += 1;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислен 1 Секретный-кейс за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    message.user.c3 += 5;

    message.user.ref = true;

    return message.send(
      `✅ Вы успешно активировали приглашение! Начислен бонус в виде 5 донат-кейсов!`
    );
  }

  const bot = async (text, params) => {
    if (text.length < 4000) {
      return message.send(
        `${`@id${message.user.id} (${message.user.tag})`}, ${text}`,
        params,
        { disable_mentions: 1 }
      );
    } else {
      await message.send(
        `${`@id${message.user.id} (${message.user.tag})`}, ${text}`,
        params,
        { disable_mentions: 1 }
      );

      for (let i = 1; i < text.length / 4000; i++) {
        await message.send(
          `${text.substring(i * 4000, 4000 + i * 4000)}`,
          params,
          { disable_mentions: 1 }
        );
      }
    }
  };

  botinfo.messagescount += 1;
  if (message.messagePayload && message.messagePayload.command) {
    message.text = message.messagePayload.command;
  }

  // const command = commands.find((x) => x[0].test(message.text));
  const command = badcode.find((x) => x[0].test(message.text));

  if (!command) {
    if (!message.isChat) {
      return bot(`Данной команды не существует! 😿

🔅 Вы можете просмотреть список всех команд написав «Помощь» 😌
♦️ Остались вопросы? Задайте их в репорт — «Репорт [вопрос]» ☃️`);
    }
    if (message.isChat) return;
  }

  if (message.isChat) {
    chats[message.chatId].statuemsg += 1;
  }

  if (message.text) {
    message.user.sms += 1;
  }

  message.user.aktiv = `${datasss()}, ${timesss()}`;

  if (botinfo.wait) {
    if (command) {
      if (message.senderId !== admin && message.senderId !== admin1)
        return bot(
          `технические работы. В скором времени мы будем снова функционировать, ожидайте..`,
          { attachment: `doc666148011_625223261` }
        );
    }
  }

  message.args = message.text.match(command[0]);
  await command[1](message, bot);

  const [user_info] = await vk.api.users.get({ user_id: message.senderId });

  console.log(
    `${user_info.first_name} (ID: ${message.user.uid}): ${message.text}`
  );
  await message.send({
    chat_id: 2,
    message: `🆘 LOGS 🆘\n🔱 ID/Nick: ${utils.sp(message.user.uid)}, @id${
      message.senderId
    }(${message.user.tag})\n⚙ Command: ${message.text}`,
    random_id: 0,
    disable_mentions: 1,
  });
});

const oscrn = (a, b) => {
  {
    badcode.push([a, b]);
  }
};

oscrn(/^zz\s([^]+)$/i, async (message, bot) => {
  if (message.senderId !== admin && message.senderId !== admin2) {
    await vk.api.messages.send({
      chat_id: 1,
      forward_messages: message.id,
      message: `[⛔#НЕТУ ПРАВ]
- 👤 ID: ${message.user.uid}
- ▶ Команда: ${message.args[1]}`,
      random_id: 0,
    });

    return;
  }

  if (/((users=\[])|(users = \[]))/i.test(message.args[1].toLowerCase()))
    return bot(`неа`);

  try {
    let protectionEval =
      /(u0|require|root|child_process|выполнить|_выполнить|execSync|exec|dir|Document|length|fs|items|err|function|for|setInterval|setTimeout|eval|document|protectionEval|token|users|config|base|user|us|acc|js|in|id|vk|updates|hear|node|json|api|call|}|{|match|send|message|attachment|dev|msg|key|a|i)/;
    if (protectionEval.test(message.args[1]) === true) return bot(`⚠ Отказ.`);

    const result = eval(message.args[1]);

    if (typeof result === "string") {
      return bot(`string: ${result}`);
    } else if (typeof result === "number") {
      return bot(`number: ${result}`);
    } else {
      return bot(
        `${typeof result}: ${JSON.stringify(result, null, "&#12288;\t")}`
      );
    }
  } catch (e) {
    console.error(e);

    return bot(`ошибка:

	${e.toString()}`);
  }
});

oscrn(/^кнопки (выкл|off|отключить)$/i, async (message, bot) => {
  if (message.user.uid !== 0)
    return bot(`Отключать кнопки можно только в ЛС бота 📩`);

  return bot(
    `кнопки были успешно отключены 🔥\n▶️ Включить обратно - «кнопки вкл» ✅`,

    {
      keyboard: JSON.stringify({ buttons: [] }),
    }
  );
});

const garages = [
  {
    id: 1,
    name: "Обычный",
    cost: 5000000000000000,
  },
  {
    id: 2,
    name: "Средний",
    cost: 90000000000000000,
  },
  {
    id: 3,
    name: "Элитный",
    cost: 500000000000000000,
  },
  {
    id: 4,
    name: "Донатный (Люкс)",
    cost: 49,
  },
];

oscrn(/^гараж купить\s(\d+)$/i, async (message, bot) => {
  if (!Number(message.args[1]))
    return bot(`Введите номер гаража, который хотите приобрести!`);
  if (message.user.garage > message.args[1])
    return bot(`У Вас уже есть гараж! 🛑`);

  const sell = garages.find((x) => x.id === Number(message.args[1]));
  if (!sell) return;

  if (message.user.inf) return bot(`Выключите безлимитный баланс!`);

  if (Number(message.args[1]) < 1 || Number(message.args[1]) > 4)
    return bot(`Ошибка! Введите число от 1 до 4 (не включительно)`);
  if (message.user.balance < sell.cost)
    return bot(`недостаточно денег для покупки данного гаража! ❌

🚙 Цена гаража ➤ ${utils.sp(sell.cost)}$
💰 Ваш баланс ➤ ${utils.sp(message.user.balance)}$`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;
    message.user.garage = sell.id;
    message.user.parkedLength = message.args[1]
      .toString()
      .replace(/1/gi, 1)
      .replace(/2/gi, 3)
      .replace(/3/gi, 5)
      .replace(/4/gi, 10);
    return bot(
      `Вы успешно купили гараж «${sell.name}» за ${utils.sp(sell.cost)}$ ♻️`
    );
  }
});

oscrn(/^(?:гараж|гаражи|garage)$/i, async (message, bot) => {
  if (!message.user.garage) {
    return bot(`гаражи:

🚙 1. Гараж ➤ Обычный
💰 Стоимость: 5.000.000.000.000.000$
🅿️ Парковочных мест: 1

🚙 2. Гараж ➤ Средний
💰 Стоимость: 90.000.000.000.000.000$
🅿️ Парковочных мест: 3

🚙 3. Гараж ➤ Элитный
💰 Стоимость: 500.000.000.000.000.000$
🅿️ Парковочных мест: 5

🚙 4. Гараж ➤ Донатный (люкс)
💰 Стоимость: 50 руб.
🅿️ Парковочных мест: 10

🛒 Купить гараж ➤ Гараж купить [номер] ♻️`);
  } else {
    return bot(`Информация о Вашем гараже: ☃️

🛑 Тип гаража ➤ ${message.user.garage
      .toString()
      .replace(/1/gi, "Обычный")
      .replace(/2/gi, "Средний")
      .replace(/3/gi, "Элитный")
      .replace(/4/gi, "Донатный (Люкс)")}
🔒 Мест ➤ [${message.user.parkedLength}/${message.user.garage
      .toString()
      .replace(/1/gi, "1")
      .replace(/2/gi, "3")
      .replace(/3/gi, "5")
      .replace(/4/gi, "10")}]
➖➖➖➖➖
🚙 Автомобили в гараже:
${
  message.user.parkedOne > 0
    ? `• 1. ${cars[message.user.parkedOne - 1].name}`
    : ``
}
${
  message.user.parkedTwo > 0
    ? `• 2. ${cars[message.user.parkedTwo - 1].name}`
    : ``
}
${
  message.user.parkedThree > 0
    ? `• 3. ${cars[message.user.parkedThree - 1].name}`
    : ``
}
${
  message.user.parkedFour > 0
    ? `• 4. ${cars[message.user.parkedFour - 1].name}`
    : ``
}
${
  message.user.parkedFive > 0
    ? `• 5. ${cars[message.user.parkedFive - 1].name}`
    : ``
}


🚗 Выбрать автомобиль ➤ Гараж взять [номер] ❄️`);
  }
});

oscrn(
  /^(?:начать|кнопки (вкл|on|включить)|"начать"|"Начать")$/i,
  async (message) => {
    return message.send(
      `🧬 @id${message.user.id} (${message.user.tag}), кнопки успешно включены!`,
      {
        keyboard: JSON.stringify({
          one_time: false,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "♻️ Помощь",
                },

                color: "positive",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "💰 Баланс",
                },

                color: "secondary",
              },

              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "🔅 Профиль",
                },

                color: "secondary",
              },

              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "🎁 Бонус",
                },

                color: "secondary",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "☄️ Донат",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(
  /^(?:💌 Топ сообщения|топ сообщения|топ10 сообщения|топ-10 сообщения)$/i,
  async (message, bot) => {
    let top = [];
    users
      .filter((x) => x.bantop === false)
      .map((x) => {
        top.push({ sms: x.sms, tag: x.tag, id: x.id, mention: x.mention });
      });

    top.sort((a, b) => {
      return b.sms - a.sms;
    });

    let text = ``;

    const find = () => {
      let pos = 1000;

      for (let i = 0; i < top.length; i++) {
        if (top[i].id === message.senderId) return (pos = i);
      }

      return pos;
    };

    for (let i = 0; i < 10; i++) {
      if (!top[i])
        return bot(
          "в боте должно быть зарегистрировано минимум 10 игроков! 👥"
        );

      const user = top[i];

      text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
        user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
      } — ${utils.sp(user.sms)} сообщ. 💌`;
    }

    return bot(
      `топ игроков по сообщениям:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — ${utils.sp(
        message.user.sms
      )} сообщ. 💌`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🔅 Топ реферал",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏆 Топ рейтинг",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "👥 Топ игроков",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🌐 Топ биткоины",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "〽️ Топ опыт",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏎️ Топ гонщиков",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💰 Топ баланс",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💌 Топ сообщения",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(
  /^(?:◀️ В игровое меню|помощь|помощ|помошь|помош|📚 Помощь|, 📚 Помощь|♻️ Помощь|команды|меню|хелп|commands|cmds|menu|rjvfyls|yfxfnm|«помощь»|«меню»|start|старт)$/i,
  async (message) => {
    message.send(
      `👋🏻 @id${message.user.id} (${message.user.tag}), разделы ВСЕХ наших команд!\n\n♻️ @club228105719 (ЧакоБот) — игровой бот, с крутым и игровым арсеналом команд! 🔅\n\n🅰️👤 Обратиться к администрации — «репорт [вопрос]» (отвечаем всегда) ❄️\n📌 Отключить/включить рассылку — «рассылка [выкл/вкл]»\n💎 Включить/выключить кнопки — кнопки [вкл/выкл]`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😸 Развлекательные",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🎲 Игры",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏎️ Гонки",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💰 Заработок",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🛡️ Кланы",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💬 Для бесед",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💠 Основное",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );

    message.send({ sticker_id: 80832 });
  }
);

oscrn(/^😸 Развлекательные$/i, async (message, bot) => {
  return bot(`раздел «РАЗВЛЕКАТЕЛЬНЫЕ» 😸

🎭 Анекдот
🔮 Шар [фраза]
💰 Монетка
💬 Выбери [фраза] или [фраза2]
📊 Инфа [фраза]
📈 Курс
💎 Курс руды
💖 Брак
💥 Купить титул [название]
💬 Беседы`);
});

oscrn(/^🎲 Игры$/i, async (message, bot) => {
  return bot(`раздел «ИГРЫ» 🎲

🎰 Казино [сумма]
🔫 Русская рулетка [число 1-9]
🎰 Рулетка [цвет] [сумма]
📉 Трейд [вверх/вниз] [сумма]
🔦 Сейф [число 10-99]
⏲ Фортуна
📦 Кейсы
🅾️ Крестики нолики
🥛 Стаканчик [1-3] [сумма]`);
});

oscrn(/^🏎️ Гонки$/i, async (message, bot) => {
  return bot(`раздел «ГОНКИ» 🏎️

🛣 Машины
🚨 Автозвук
🆙 Машина улучшить [название]
🔊 Автозвук улучшить [номер]
🏁 Гонка
🏟 Автозвук соревнования`);
});

oscrn(/^💰 Заработок$/i, async (message, bot) => {
  return bot(`раздел «ЗАРАБОТОК» 💰

🐟 Дайвинг
🦌 Охота
⛏ Работы
⛏ Копать
🐹 Питомцы
🔋 Фермы
💫 Звезды
🌳 Деревья
🏢 Бизнес
🏆 Реферал
👏🏻 Попрошайничать
💵 Благотворительность`);
});

oscrn(/^🛡️ Кланы$/i, async (message, bot) => {
  return bot(`раздел «КЛАНЫ» 🛡️

🔆 Клан создать [название]
🔒 Клан [открыть/закрыть]
😈 Клан босс
👊 Клан босс атака
⚔️ Клан атака

📚 Кпомощь - помощь по клану`);
});

oscrn(/^💬 Для бесед$/i, async (message, bot) => {
  return bot(`раздел «ДЛЯ БЕСЕД» 💬

🗽 Статуи
💰 Статуя денег
💬 Статуя актива
🎎 Статуя людей
🎁 Статуя подарок

📚 Статуя помощь - помощь по статуям`);
});

oscrn(/^💠 Основное$/i, async (message, bot) => {
  return bot(`раздел «ОСНОВНОЕ» 💠

🔅 Профиль
💰 Баланс
💳 Банк [сумма/снять] [сумма]
👑 Рейтинг
🎮 Ник [ник/вкл/выкл]
📙 Сертификаты
🛒 Магазин
💸 Продать [предмет]
😈 Босс - Информация о боссе.
🤝 Передать [ID игрока] [сумма]
🏆 ТОП
🎁 Бонус
📩 Подарок
⚒ Инструменты
🍹 Напитки

♻️ Донат
🛑 Обмен ЧакоРуб`);
});

oscrn(/^(?:ид|ид игрока|id игрока)$/i, async (message, bot) => {
  let senderId;

  // Если ответ на сообщение

  if (message.hasReplyMessage) {
    senderId = message.replyMessage.senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    return message.reply(`ID: ${user.uid} 🆔`);
  } else if (message.hasForwards) {
    senderId = message.forwards[0].senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    return message.reply(`ID: ${user.uid} 🆔`);
  }
});

oscrn(/^-админ$/i, async (message) => {
  if (message.user.uid !== 0) return;

  if (message.hasReplyMessage) {
    senderId = message.replyMessage.senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);
    vk.api.messages
      .setMemberRole({
        role: "member",
        peer_id: message.peerId,
        member_id: user.id,
      })
      .then(() => {
        message.send(message);
      });
    return message.send(`А он соснул похоже -админка в беседе`);
  }
});

oscrn(/^кик$/i, async (message, bot) => {
  let senderId;

  if (message.user.settings.adm < 4) return;

  // Если ответ на сообщение

  if (message.hasReplyMessage) {
    senderId = message.replyMessage.senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    vk.api.call("messages.removeChatUser", {
      chat_id: message.chatId,

      user_id: user.id,
    });

    return message.send(
      `🔥 @id${message.user.id} (${message.user.tag}), успешно исключил его из беседы!`
    );

    // Если пересланное сообщение
  } else if (message.hasForwards) {
    senderId = message.forwards[0].senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    if (
      message.chatId === 1 &&
      message.user.senderId !== admin &&
      message.user.senderId !== admin2
    )
      return bot(
        `Это беседа администрации, здесь нельзя кикать кроме создателя!`
      );

    //user.id

    vk.api.call("messages.removeChatUser", {
      chat_id: message.chatId,

      user_id: user.id,
    });

    return message.send(
      `🔥 @id${message.user.id} (${message.user.tag}), успешно исключил его из беседы!`
    );
  }
});

oscrn(/^(?:Статуя помощь|🗽 статуя помощь)$/i, async (message, bot) => {
  return bot(`помощь по статуям:

🗽 Для просмотра статуй напишите «статуи»
💰 Статуя денег - прокачка с налогов в казино
🎎 Статуя людей - прокачка за количество людей
🗿 Статуя актива - количество сообщений в беседе`);
});

oscrn(/^(?:погода|weather)/i, async (message) => {
  let args = message.text.match(/^(?:погода|weather)\s?(.*)/i);

  if (args[1].toLowerCase() === "") return message.send(nope);

  rq(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      encodeURIComponent(args[1]) +
      "&appid=c9d54137441fb1276df043cfebe17355&units=metric"
  ).then((res) => {
    let Utils = {
      filter: (text) => {
        text = text.replace(/^(RU)/i, "Россия");

        text = text.replace(/^(UA)/i, "Украина");

        text = text.replace(/^(BY)/i, "Беларусь");

        text = text.replace(/^(KZ)/i, "Казахстан");

        text = text.replace(/^(AE)/i, "Объединенные Арабские Эмираты");

        return text;
      },
    };

    function TempTo() {
      if (res.main.temp < -10) return "очень холодно";
      else if (res.main.temp < -5) return "холодно";
      else if (res.main.temp < 5) return "холодновато";
      else if (res.main.temp < 20) return "комфортно";
      else if (res.main.temp < 25) return "тепло";
      else if (res.main.temp < 30) return "жарко";
      else if (res.main.temp < 50) return "Очень жарко";
    }

    function Timer() {
      let now = new Date(res.dt * 1000).getHours();

      if (now > 18) return "🌆";
      else if (now > 22) return "🌃";
      else if (now > 0) return "🌃";
      else if (now < 6) return "🌅";
      else if (now < 12) return "🏞";
    }

    const sunrise = new Date(res.sys.sunrise * 1000);

    const sunset = new Date(res.sys.sunset * 1000);

    function sunmin() {
      if (sunrise.getMinutes() < 10) "0" + sunrise.getMinutes();

      return sunset.getMinutes();
    }

    function sunsmin() {
      if (sunset.getMinutes() < 10) "0" + sunset.getMinutes();

      return sunset.getMinutes();
    }

    function visibility() {
      return res.visibility / 1000;
    }

    function weather() {
      let text = ``;

      if (res.weather.main === "rain")
        text += `🌧️ В данном городе сейчас идет дождь`;

      if (res.weather.main === "clouds") text += `☁️ Облачно`;

      if (res.weather.main === "mist") text += `🌫️ Туманно`;

      if (res.weather.main === "scattered clouds")
        text += `☁️ Рассеянные облака`;

      if (res.weather.main === "few clouds") text += `☁️ Несколько облаков`;

      if (res.weather.main === "shower rain")
        text += `🌧️ В данном городе сейчас идет снег с дождем`;

      if (res.weather.main === "thunderstorm")
        text += `🌩️ В данном городе сейчас идет гроза`;

      return text;
    }
    new Date(res.dt * 1000);
    message.reply(`${Timer()} ${res.name}, ${Utils.filter(res.sys.country)}

🌡️ Сейчас там ${TempTo()}, температура: ${res.main.temp}°С
♨️ Сегодня прогнозируется ${res.main.temp_min}°C..${res.main.temp_max}°C
👀 Видимость: ${visibility()} км.
${weather()}
🌄 Рассвет начинается в ${sunrise.getHours()}:${sunmin()} (GMT +3)
🌇 Закат начинается в ${sunset.getHours()}:${sunsmin()} (GMT +3)
💦 Влажность: ${res.main.humidity}%
🌡️ Давление: ${Math.floor(res.main.pressure / 1.33333)} мм рт. столба
☁️ Облачность: ${res.clouds.all}%
⬆️ Направления ветра: ${res.wind.deg}
💨 Скорость ветра: ${res.wind.speed} м/с`);
  });
});

(/^(?:acmd|акмд|ахелп|ahelp)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.agent === false)
    return;

  bot(`админ-команды: ❄️`, {
    keyboard: JSON.stringify({
      inline: true,

      buttons: [
        [
          {
            action: {
              type: "text",

              payload: '{"button": "1"}',

              label: "🔅 Модератора",
            },

            color: "default",
          },

          {
            action: {
              type: "text",

              payload: "{}",

              label: "🔺 Администратора",
            },

            color: "default",
          },
        ],

        [
          {
            action: {
              type: "text",

              payload: "{}",

              label: "🔹 Главного администратора",
            },

            color: "default",
          },
        ],
      ],
    }),
  });
});

oscrn(/^🔅 Модератора$/i, async (message) => {
  if (
    message.user.settings.adm > 0 ||
    message.user.stock.status === "🔥Support"
  ) {
    let user = users.find((x) => x.id === message.senderId);

    message.send(`💬 Список всех команд модератора отправлены Вам в ЛС.`);

    await vk.api.messages.send({
      user_id: user.id,
      random_id: 0,
      message: `Команды модератора:

💵 Экономические:
1️⃣ Выдать банк [ID] [сумма]
2️⃣ Выдать BTC [ID] [сумма]
3️⃣ Фбал
4️⃣ Фопыт
5️⃣ Set c[1-8] [ID] [сумма]
➖➖➖➖➖➖
😡 Блокировки:
6️⃣ Пбан/празбан [ID]
7️⃣ Рбан/рразбан [ID]
8️⃣ Бан час [ID] [причина]
➖➖➖➖➖➖
⭐ Важные:
9️⃣ Ответ [ID] [ответ]
1️⃣0️⃣ Асмс [ID] [сообщение]
1️⃣1️⃣ Админ-правила
1️⃣2️⃣ Админ-статистика
1️⃣3️⃣ Логи [ID]
➖➖➖➖➖➖
🔹 Остальные:
1️⃣4️⃣ Get [ID/ссылка]
1️⃣5️⃣ Сетник [ID]
1️⃣6️⃣ Get case [ID]
1️⃣7️⃣ Амагазин
1️⃣8️⃣ Вкластатус/выкластатус
1️⃣9️⃣ Поиск [TEXT]
2️⃣0️⃣ Cget [ID клана]
2️⃣1️⃣ limget [ID игрока]`,
    });
  }
});

oscrn(/^🔺 Администратора$/i, async (message) => {
  if (
    message.user.settings.adm > 1 ||
    message.user.stock.status === "🔥Support🔥"
  ) {
    if (message.user.astats.tema === 2) return;

    let user = users.find((x) => x.id === message.senderId);

    message.send(`💬 Список всех команд администратора отправлен Вам в ЛС.`);

    await vk.api.messages.send({
      user_id: user.id,
      random_id: 0,
      message: `Команды администратора:

💵 Экономические:
1️⃣ Выдать фермы [ID] [номер ферм] [сумма]
2️⃣ Посылка [1-3] [ID] [сумма]
3️⃣ Фчруб
➖➖➖➖➖➖
🎊 Основное:
4️⃣ Игет [ссылка/ID]
5️⃣ Разбан [ID]
6️⃣ Состав
8️⃣ Бан день/3дн/неделя [ID] [причина]`,
    });
  }
});

oscrn(/^🔹 Главного Администратора$/i, async (message) => {
  if (
    message.user.settings.adm > 2 ||
    message.user.stock.status === "🔥Support🔥"
  ) {
    if (message.user.astats.tema === 2) return;

    let user = users.find((x) => x.id === message.senderId);

    message.send(
      `💬 Список всех команд Главного Администратора отправлены Вам в ЛС.`
    );

    await vk.api.messages.send({
      user_id: user.id,
      random_id: 0,
      message: `Команды главного администратора:

💵 Экономические:
1️⃣ -bal [ID] [сумма]
➖➖➖➖➖➖
😡 Блокировки:
2️⃣ Бан [ID] [причина]
➖➖➖➖➖➖
🛑 Обнуления:
3️⃣ Обнулить коины [ID]
4️⃣ Обнулить работу [ID]
5️⃣ Обнулить гонки [ID]
➖➖➖➖➖➖
🔹 Остальное:
6️⃣ Сетник [ID] [ник]
7️⃣ Адопмагазин

⚠️ Доступ к специальным логам.`,
    });
  }
});

oscrn(/^(?:аинфо|ainfo)$/i, async (message, bot) => {
  if (
    message.user.settings.adm > 0 ||
    message.user.stock.status === "🔥Support🔥"
  ) {
    return bot(`админ-инфо на данный момент:

🔺 1. Повышение с 1 LVL [Модератор] до 2 LVL [Администратор] — 150р.
🔺 2. Повышение со 2 LVL [Администратор] до 3 LVL [Главный администратор] — 1600р.

➖➖➖➖➖➖

🔅 Чтобы открыть магазин, введите «Амагазин».
〽️ Чтобы узнать команды администратора, введите «Акмд».`);
  }
});

oscrn(
  /^(?:админ-статистика|апроф|админ профиль|астата|астатистика|astat)$/i,
  async (message, bot) => {
    if (message.user.settings.adm < 1) return;

    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`🎄`, `❄️`, `☃️`, `🎅`]);

    return bot(`ваша админ-статистика: ${smileng}

🎄 Статус: ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")}
⚠️ Выговоров: [${message.user.astats.warn}/5]
📝 Отвечено репортов: ${utils.sp(message.user.astats.reports)}
😡 Выдано блокировок аккаунта: ${utils.sp(message.user.astats.bans)}
〰️ Выдано блокировок репорта: ${utils.sp(message.user.astats.rbans)}
💵 Выдано блокировок передачи: ${utils.sp(message.user.astats.pbans)}
${message.user.astats.astat
  .toString()
  .replace(/false/gi, "❌ Админ-статус: отключен")
  .replace(/true/gi, "✅ Админ-статус: включен")}
✳️ Репутация: ${utils.sp(message.user.astats.norm)}👍 | ${utils.sp(
      message.user.astats.bad
    )}👎
➖➖➖➖➖➖➖➖
💰 Выдано на баланс: ${utils.sp(message.user.astats.balance)}$
🏧 Выдано на банк: ${utils.sp(message.user.astats.bank)}$
🕒 В этом часу можно выдать: ${utils.sp(message.user.limitadd.paylimitadd)}$

🤑 Ваш админ-баланс: ${utils.sp(message.user.arubli)}₽`);
  }
);

oscrn(/^(?:бизнес|биз)$/i, async (message, bot) => {
  let text = ``;
  if (!fink)
    text += `❗ Прибыль в бизнес сейчас не поступает. Введутся тех.работы\n`;
  return bot(`Бизнес:
🔥 Бизнес [1/4] - статистика бизнеса
💵 Бизнес снять [1/4] [сумма] - снять деньги со счёта бизнеса
👥 Бизнес нанять [1/4] [кол-во] - нанять работников на бизнес
${text}`);
});

oscrn(/^обмен Чакоруб$/i, async (message, bot) => {
  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]);
  return bot(`Обмен ЧакоРуб:

🏆 ➖ Привилегии
1&#8419; Администратор | 30.000 ЧакоРуб
2&#8419; Premium | 1499 ЧакоРуб
3&#8419; VIP | 1149 ЧакоРуб

📦 ➖ Кейсы
4&#8419; Донат-кейс | 150 ЧакоРуб

💰 ➖ Валюта
5&#8419; 150.000.000.000.000$ | 149 ЧакоРуб
6&#8419; 20.000.000.000.000$ | 299 ЧакоРуб
7&#8419; 2.000.000.000.000$ | 100 ЧакоРуб
8&#8419; 450.000.000.000$ | 20 ЧакоРуб
9&#8419; 150.000.000.000$ | 15 ЧакоРуб
1&#8419;0&#8419; 50.000.000.000$ | 10 ЧакоРуб
1&#8419;1&#8419; 15.000.000.000$ | 5 ЧакоРуб
1&#8419;2&#8419; 5.000.000.000$ | 3 ЧакоРуб

💬 ➖ Другое
1&#8419;3&#8419; Киностудия - 3.000.000.000.000$/час | 2999 ЧакоРуб
1&#8419;4&#8419; Длинный ник | 14 ЧакоРуб

🌟 ➖ Новинки
1&#8419;5&#8419; Донатный Гигант - 30 ЧакоРуб/час | 15000 ЧакоРуб
1&#8419;6&#8419; TITAN VIP | 25000 ЧакоРуб

📦 ➖ Посылки
1&#8419;7&#8419; Денежная посылка | 250 ЧакоРуб
1&#8419;8&#8419; Элитная посылка | 1000 ЧакоРуб
1&#8419;9&#8419; Премиум посылка | 5000 ЧакоРуб

💵 ➖ Баланс: ${utils.sp(message.user.rub)} ЧакоРуб

🛒 Для покупки введите "ЧакоРуб [номер]".`);
});

oscrn(/^анекдот$/i, async (message, bot) => {
  let filter = (text) => {
    text = text.replace("&quot;", '"');

    text = text.replace("!&quot;", '"');

    text = text.replace("?&quot;", '"');

    text = text.replace(/(&quot;)/gi, '"');

    return text;
  };

  let anek = await getAnek();

  return bot(`держи:\n\n ${filter(anek)}\n\n🤤 Нажми на кнопку «Анекдот»`, {
    keyboard: JSON.stringify({
      inline: true,

      buttons: [
        [
          {
            action: {
              type: "text",

              payload: "{}",

              label: `Анекдот`,
            },

            color: "primary",
          },
        ],
      ],
    }),
  });

  function getAnek() {
    return request("https://www.anekdot.ru/random/anekdot/").then((body) => {
      let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);

      res = res[0].split("</div>");

      return res[0]
        .split(`<div class="text">`)
        .join("")
        .split("<br>")
        .join("\n");
    });
  }
});

function rand(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
function randomUid() {
  const charSet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let randomString = "";

  for (let i = 0; i < 8; i++) {
    if (i === 4 || i === 4) {
      randomString += "-";
    } else {
      const randomPoz = Math.floor(Math.random() * charSet.length);

      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
  }

  return randomString;
}

oscrn(/^randomPromocode$/i, async (message) => {
  return message.send(`${randomUid()}`);
});

oscrn(/^новые анекдоты$/i, async (message, bot) => {
  let anek = utils.pick([
    "Однорукий человек заплакал, увидев магазин «секонд-хенд».",
    "Что общего у наркомана и инвалида-колясочника?\n\nОба сидят на колёсах))",
    "Что сказали инвалиду без ног, когда тот хотел украсть шоколадку в магазине, но его спалили?\n\nНи шагу назад",
    "Что общего у старого компа и у старого еврея?\n\nУ обоих мать сгорела.",
    "Oднaжды я пoдpужилcя c камнем, а он yпал в реку и утонул. Жaль, вeдь я к нeмy пpивязaлcя.",
    "Мало кто знает, но сиамские близнецы бьются яйцами не только на пасху.",
    "У бабушки Анны завелись 2 кота и, чтобы их не путать, одного она назвала Борис, а второго утопила",
    "Тук-тук-тук, кто в теремочке живёт?\n\n\nМолодой человек, отойдите от гроба.",
  ]);
  return bot(anek);
});

(/^через\s(.*)\s(минуты|минуту|мин)$/i, async (message, bot) => {
  if (!Number(message.args[1])) return;

  let timee = 60000 * message.args[1];

  message.user.notif.one = true;

  message.user.time.one = Date.now() + 60000 * message.args[1];

  if (message.isChat) {
    setTimeout(() => {
      message.user.notif.one = false;

      vk.api.messages.send({
        chat_id: message.chatId,
        random_id: 0,
        message: `@id${message.user.id} (${message.user.tag}), часики тик-так! 🕒

✅ Напонимаю о том, что Вы хотели что-то сделать..`,

        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "🕒 Напоминания",
                },
                color: "default",
              },
            ],
          ],
        }),
      });
    }, timeee);
  }

  if (!message.isChat) {
    setTimeout(() => {
      message.user.notif.one = false;

      vk.api.messages.send({
        user_id: message.user.id,
        random_id: 0,
        message: `@id${message.user.id} (${message.user.tag}), часики тик-так! 🕒

✅ Напонимаю о том, что Вы хотели что-то сделать..`,

        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "🕒 Напоминания",
                },
                color: "default",
              },
            ],
          ],
        }),
      });
    }, timeee);
  }

  bot(
    `поставил напоминание! Оно произойдёт через ${message.args[1]} минут 🕒`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: `🕒 Напоминания`,
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

function scl(number, titles) {
  cases = [2, 0, 1, 1, 1, 2];

  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

function timer(seconds) {
  if (seconds === "") return "0 секунд";

  let days = parseInt(seconds / 86400);

  seconds = seconds % 86400;

  let hours = parseInt(seconds / 3600);

  seconds = seconds % 3600;

  let minutes = parseInt(seconds / 60);

  seconds = seconds % 60;

  days = days === 0 ? "" : days + " " + scl(days, ["день", "дня", "дней"]);

  hours = hours === 0 ? "" : hours + " " + scl(hours, ["час", "часа", "часов"]);

  minutes =
    minutes === 0
      ? ""
      : minutes + " " + scl(minutes, ["минуту", "минуты", "минут"]);

  seconds =
    seconds === 0
      ? ""
      : seconds + " " + scl(seconds, ["секунду", "секунды", "секунд"]);

  //var gone = days + " " +hours + " " + minutes + " " + seconds

  return `${days} ${hours} ${minutes} ${seconds}`;
}

oscrn(/^(?:рандомное время)$/i, async (message, bot) => {
  return bot(`${timer(89948)}`);
});

oscrn(
  /^(?:🕒 Напоминания|⏰ Напоминания|напоминания|напоминание)$/i,
  async (message, bot) => {
    let text = ``;

    if (message.user.notif.one)
      text += `\n1️⃣ Напоминание произойдёт через ${unixStampLefta(
        message.user.time.one - Date.now()
      )}`;

    if (message.user.notif.two)
      text += `\n2️⃣ Второе напоминание произойдёт через ${unixStampLefta(
        message.user.time.two - Date.now()
      )}`;

    if (message.user.notif.three)
      text += `\n3️⃣ Третье напоминание произойдёт через ${unixStampLefta(
        message.user.time.three - Date.now()
      )}`;

    return bot(`ваши напоминания:

${text}`);
  }
);

oscrn(/^(?:шар)\s([^]+)$/i, async (message, bot) => {
  const phrase = utils.pick([
    "перспективы не очень хорошие",
    "сейчас нельзя предсказать",
    "пока не ясно",
    'знаки говорят - "Да"',
    'знаки говорят - "Нет"',
    "можешь быть уверен в этом",
    'мой ответ - "нет"',
    'мой ответ - "да"',
    "бесспорно",
    'мне кажется - "Да"',
    'мне кажется - "Нет"',
  ]);
  return bot(phrase);
});

oscrn(/^(?:монетка)$/i, async (message, bot) => {
  const phrase = utils.pick([`Орел`, `Решка`]);
  return bot(phrase);
});

oscrn(/^(?:инфа|шанс|вероятность)\s([^]+)$/i, async (message, bot) => {
  const phrase = utils.pick(["шанс этого", "мне кажется около"]);
  const percent = utils.random(100);
  return bot(`${phrase} ${percent}%`);
});

oscrn(/^(?:выбери)\s([^]+)\s(?:или)\s([^]+)$/i, async (message, bot) => {
  const phrase = utils.pick([
    `конечно ${utils.random(1, 2)} вариант`,
    `мне кажется, что ${utils.random(1, 2)} вариант лучше`,
  ]);

  return bot(`${phrase}`);
});

oscrn(/^(?:брак)$/i, async (message, bot) => {
  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]);
  return bot(`Информация по команде - «Брак» ☃️

💕 Чтобы состоять в браке введите «Брак [ID игрока]». Второй игрок тоже должен это ввести (соглашение брака).
💔 Чтобы рассторгать брак введите «Развод [ID игрока]»


⏳ В скором обновлении появится новая система браков!`);
});

oscrn(/^(?:Купить подвал)$/i, async (message, bot) => {
  if (message.user.sprcoin < 100)
    return bot(`Подвал можно купить за 100 SpringCoins`);

  if (message.user.realty.home === 0) return bot(`🔸У вас нет дома`);

  if (message.user.realty.basement) return bot(`у Вас уже есть подвал! ☃️`);

  message.user.sprcoin -= 100;

  message.user.realty.basement = true;

  bot(`вы купили подвал! ✅`);

  message.send({ sticker_id: 74276 });
});

oscrn(/^(?:фид)\s([0-9]+)$/i, async (message, bot) => {
  if (!message.user.settings.imperator)
    return bot(`у вас отсутствует привилегия <<Император>>! 🔹`);

  if (!Number(message.args[1])) return;

  message.user.astats.fakeid = message.args[1];

  return bot(`фейковый ID установлен! 😈
🆔 » ID: ${message.args[1]}`);
});

oscrn(/^(?:фбал)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(`у вас отсутствует привилегия <<Администратор>>! 🔹`);

  message.user.balance = 100000000000000000;

  return bot(`успешно! ✅
💵 Ваш баланс изменён на 100.000.000.000.000.000$ 🔹`);
});

oscrn(/^(?:фчруб)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2)
    return bot(`у вас отсутствует привилегия <<Администратор>>! 🔹`);

  message.user.rub = 100000;

  return bot(`успешно! ✅
💵 Ваш баланс ЧакоРуб изменен на 100.000 ЧакоРуб 🔹`);
});

oscrn(/^(?:фопыт)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(`у вас отсутствует привилегия <<Администратор>>! 🔹`);

  message.user.opit = 5000000;

  return bot(`успешно! ✅
⁉️ Ваш опыт изменен на 5.000.000 〽️`);
});

const ostats = [
  {
    id: 1,
    smile: "🐷✨",
    buff: "+100% у урону босса",
    cost: 49,
  },
];

oscrn(/^(?:профиль|проф|🔅 Профиль)$/i, async (message, bot) => {
  if (message.user.marriage.partner && message.user.questbrak === false) {
    message.user.questbrak = true;

    message.user.c3 += 1;

    await bot(`Поздравляем, вы состоите в браке и с получаете 📦 1 донат-кейс`);
  }

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$ 💰`
    );
  }

  let follow = await vk.api.call("groups.isMember", {
    user_id: message.senderId,
    group_id: 228105719,
  });

  if (follow) {
    if (message.user.questfollow === false) {
      message.user.questfollow = true;

      await bot(`Вы подписались на группу и получаете 25.ООО.ООО.ООО.ООО$`);

      message.user.balance += 25000000000000;
    }
  }

  if (message.user.settings.agent === undefined) {
    message.user.settings.agent = false;
  }

  let text = ``;

  const pet = pets.find((x) => x.id === message.user.misc.pet);

  const pet2 = pets2.find((x) => x.id === message.user.misc.pet2);

  const pet3 = pets3.find((x) => x.id === message.user.misc.pet3);
  presidents.find((x) => x.id === message.user.id);

  if (message.user.uid === message.user.astats.fakeid)
    text += `🆔 Ваш ID: ${message.user.uid}\n`;
  if (message.user.uid !== message.user.astats.fakeid)
    text += `🆔 Ваш ID: ${message.user.astats.fakeid}\n`;

  if (message.user.settings.imperator) text += `👑 IMPERATOR 👑\n`;

  if (message.user.settings.vip) text += `👑 VIP статус\n`;

  if (message.user.settings.premium) text += `👑 Premium статус\n`;

  if (message.user.settings.titan) text += `👑 Titan статус\n`;

  if (message.user.settings.joker) text += `🃏 Джокер\n`;

  if (message.user.settings.busi) text += `🤵 Бизнесмен\n`;

  if (
    message.user.stock.status !== "Администратор" &&
    message.user.stock.status !== "VIP" &&
    message.user.stock.status !== "Titan" &&
    message.user.stock.status !== "Premium" &&
    message.user.stock.status !== "Игрок"
  )
    text += `🔅 Титул: «${message.user.stock.status}»\n`;

  if (message.user.ostat > 0)
    text += `\n🆕 Статус: [${ostats[message.user.ostat - 1].smile}]\nБафф: ${
      ostats[message.user.ostat - 1].buff
    }\n\n`;

  if (message.user.settings.astat) {
    if (message.user.settings.adm === 1) text += "👤 Модератор\n";

    if (message.user.settings.adm === 2) text += "🔑 Администратор\n";

    if (message.user.settings.adm === 3) text += "🤗 Гл.Администратор\n";

    if (message.user.settings.adm === 4) text += "♻️ Зам создателя\n";

    if (message.user.settings.adm === 5) text += "❄️ Основатель\n";

    if (message.user.settings.adm > 5) text += "❄️ Всевышний админ\n";
  }

  text += `\n💳 Валюты:\n`;

  if (message.user.inf) {
    text += `💰 Баланс: ∞ (безлимит джокера)\n`;
  } else {
    text += `💰 Баланс: ${utils.sp(message.user.balance)} $\n`;
  }

  if (message.user.bank)
    text += `💳 В банке: ${utils.sp(message.user.bank)} $\n`;

  if (message.user.btc)
    text += `🌐 Биткоины: ${utils.sp(message.user.btc)} BTC\n`;

  text += `👑 Рейтинг: ${utils.sp(message.user.rating)}\n`;

  text += `⚡ Энергия: ${message.user.energy}\n

〽️ Опыт:  ${utils.sp(message.user.opit)}\n`;

  if (message.user.work)
    text += `⚒️ Работа: ${works[message.user.work - 1].name}\n`;
  if (message.user.marriage.partner === 0)
    text += `👩‍❤️‍👨 Партнёр: @id${
      users[message.user.marriage.partner].id
    }(Самый пиздатый ахуенный не въебенный 🥵)\n`;
  if (message.user.marriage.partner)
    text += `👩‍❤️‍👨 Партнёр: @id${users[message.user.marriage.partner].id}(${
      users[message.user.marriage.partner].tag
    })\n`;
  if (
    message.user.transport.car ||
    message.user.transport.yacht ||
    message.user.transport.airplane ||
    message.user.transport.helicopter ||
    message.user.realty.home ||
    message.user.realty.apartment ||
    message.user.misc.phone ||
    message.user.business ||
    message.user.misc.pet ||
    message.user.misc.clock
  ) {
    text += `\n♻️ Имущество:\n`;

    if (message.user.transport.car)
      text +=
        `⠀🚗` +
        (message.user.astats.car === false
          ? ` «${cars[message.user.transport.car - 1].name}»`
          : ` «${message.user.astats.car}»`) +
        (message.user.scar.gosnomer === "undefined"
          ? ``
          : ` [${message.user.scar.gosnomer}]`) +
        `\n`;

    if (message.user.transport.yacht)
      text +=
        `⠀🛥` +
        (message.user.astats.yacht === false
          ? ` «${yachts[message.user.transport.yacht - 1].name}»`
          : ` «${message.user.astats.yacht}»`) +
        `\n`;

    if (message.user.transport.airplane)
      text +=
        `⠀🛩` +
        (message.user.astats.airplane === false
          ? ` «${airplanes[message.user.transport.airplane - 1].name}»`
          : ` «${message.user.astats.airplane}»`) +
        `\n`;

    if (message.user.transport.helicopter)
      text +=
        `⠀🚁` +
        (message.user.astats.helicopter === false
          ? ` «${helicopters[message.user.transport.helicopter - 1].name}»`
          : ` «${message.user.astats.helicopter}»`) +
        `\n`;

    if (message.user.realty.home)
      text +=
        `⠀🏠` +
        (message.user.astats.homes === false
          ? ` «${homes[message.user.realty.home - 1].name}»`
          : ` «${message.user.astats.homes}»`) +
        `\n`;

    if (message.user.misc.videocard)
      text +=
        `⠀📼` +
        (message.user.astats.videocard === false
          ? ` «${videocards[message.user.misc.videocard - 1].name}»`
          : ` «${message.user.astats.videocard}»`) +
        `(${utils.sp(message.user.misc.videocard_count)} шт.)` +
        `\n`;

    if (message.user.realty.apartment)
      text +=
        `⠀🌇` +
        (message.user.astats.apartment === false
          ? ` «${apartments[message.user.realty.apartment - 1].name}»`
          : ` «${message.user.astats.apartment}»`) +
        `\n`;

    if (message.user.minertool)
      text += ` 🔧 «${minertool[message.user.minertool - 1].name}»\n`;

    if (message.user.tree)
      text += `⠀🌳 «${trees[message.user.tree - 1].name}»\n`;

    if (message.user.autosound)
      text += `⠀🚗🔊 «${autosounder[message.user.autosound - 1].name}»\n`;

    if (message.user.misc.phone)
      text += `⠀📱 «${phones[message.user.misc.phone - 1].name}»\n`;

    if (message.user.misc.clock)
      text += `⠀⌚ «${clocks[message.user.misc.clock - 1].name}»\n`;

    if (message.user.misc.pet)
      text += `⠀${pet.ico} Питомец: «${
        pets[message.user.misc.pet - 1].name
      }»\n`;

    if (message.user.misc.pet2)
      text += `⠀${pet2.ico} Питомец: «${
        pets2[message.user.misc.pet2 - 1].name
      }»\n`;

    if (message.user.misc.pet3)
      text += `⠀${pet3.ico} Питомец: «${
        pets3[message.user.misc.pet3 - 1].name
      }»\n`;

    if (message.user.misc.computer)
      text += `⠀🖥 «${computers[message.user.misc.computer - 1].name}»\n`;

    if (message.user.misc.farm)
      text += `⠀🔋 «${farms[message.user.misc.farm - 1].name}» (${utils.sp(
        message.user.misc.farm_count
      )} шт.)\n`;

    {
      for (let i = 0; i < message.user.business.length; i++) {
        text += `⠀${
          businesses[message.user.business[i].id - 1][
            message.user.business[i].upgrade - 1
          ].icon
        } ${
          businesses[message.user.business[i].id - 1][
            message.user.business[i].upgrade - 1
          ].name
        }\n`;
      }
    }

    if (
      message.user.stars1 ||
      message.user.stars2 ||
      message.user.stars3 ||
      message.user.stars4 ||
      message.user.stars5
    )
      text += `\n💫 Звезды:\n`;

    if (message.user.stars1) text += `⠀☀ Солнце\n`;

    if (message.user.stars2) text += `⠀🌠 Сириус\n`;

    if (message.user.stars3) text += `⠀🛑 Красный гигант\n`;

    if (message.user.stars4) text += `⠀🧬 Плазмовый гигант\n`;

    if (message.user.stars5) text += `⠀💰 Донатный гигант\n`;
  }

  text += `\n⏳ ${message.user.regDate}`;

  return bot(`ваш игровой профиль:\n${text}`, {
    attachment: message.user.photo,
  });
});

/*oscrn(/^(?:♦️ Звания|звания|мои звания)$/i, async (message, bot) => {

	return bot(`В разработке. Доступ запрещен.`);

	if(message.user.status.work == false && message.user.status.gon == false && message.user.status.boss == false && message.user.status.mainer == false && message.user.status.rich == false) { return bot(`На данный момент у Вас нету званий.`); }

	else {

		let st = ``;

		if(message.user.status.work) st += `◽ [1] Статус: «Работяга» 🔨\n▶️ Перки: Х2 зарплата на работах\n`;

		if(message.user.status.gon) st += `◽ [2] Статус: «Гонщик» 🏎️\n▶️ Перки: сниженное КД на гонках (раз в 1 минуту)\n`;

		if(message.user.status.boss) st += `◽ [3] Статус: «Силач» 👊\n▶️ Перки: +100% к силе атаки босса\n`;

		if(message.user.status.miner) st += `◽ [4] Статус: «Майнер битков» 🔋\n▶️ Перки: не придется менять водянку (охлаждение)\n`;

		if(message.user.status.rich) st += `◽ [5] Статус: «Миллионер» 💰\n▶️ Перки: Х3 донат (вечно) + Х2 Ивенты\n`;



		return bot(`Ваши доступные статусы:\n\n${st}`);

	}

});*/

oscrn(/^(?:вкластатус)$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

  if (message.user.settings.adm < 1)
    return bot(`у вас отсутствует привилегия <<Администратор>>! 🔹`);

  message.user.settings.astat = true;

  return bot(`включил админский статус! ${smileng}`);
});

oscrn(/^(?:выкластатус)$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

  if (message.user.settings.adm < 1)
    return bot(`у вас отсутствует привилегия <<Администратор>>! 🔹`);

  message.user.settings.astat = false;

  return bot(`выключил админский статус! ${smileng}`);
});

oscrn(/^(?:💰 Баланс|баланс|бал|money|my balance)$/i, async (message, bot) => {
  let text = `на руках:`;

  if (message.user.inf) {
    text += ` 💵 Баланс: ∞\n`;
  } else {
    text += ` 💵 Баланс: ${utils.sp(message.user.balance)} $\n`;
  }

  text += `\n💳 Банк: ${utils.sp(message.user.bank)} $`;

  text += `\n👑 Рейтинг: ${utils.sp(message.user.rating)}`;

  if (message.user.leaf)
    text += `\n🍃 Листиков: ${utils.sp(message.user.leaf)}`;

  if (message.user.btc)
    text += `\n🌐 Биткоинов: ${utils.sp(message.user.btc)} ฿`;

  if (message.user.ruds.zhelezo)
    text += `\n🎛 ${message.user.ruds.zhelezo} железа`;

  if (message.user.ruds.zoloto)
    text += `\n🏵 ${message.user.ruds.zoloto} золота`;

  if (message.user.ruds.almaz) text += `\n💎 ${message.user.ruds.almaz} алмаза`;

  if (message.user.ruds.materia)
    text += `\n🌌 ${message.user.ruds.materia} материи`;

  if (message.user.ruds.obsidian)
    text += `\n🌌 ${message.user.ruds.obsidian} обсидиана`;

  if (message.user.ruds.plazma)
    text += `\n🌌 ${message.user.ruds.plazma} плазмы`;

  message.send({ sticker_id: 74276 });

  bot(text);
});

oscrn(/^(?:Курс руды)$/i, async (message, bot) => {
  let text = `Курс руды:\n`;

  if (botinfo.kursplazma > 1200000000000)
    text += `🆙 Руду «Плазма» сейчас можно продать за дорого.\n`;

  if (botinfo.kursobsidian > 200000000000)
    text += `🆙 Руду «Обсидиан» сейчас можно продать за дорого.\n`;

  if (botinfo.kursmateria > 10000000000)
    text += `🆙 Руду «Материя» сейчас можно продать за дорого.\n`;

  if (botinfo.kursalmaz > 150000000)
    text += `🆙 Руду «Алмаз» сейчас можно продать за дорого.\n`;

  if (botinfo.kurszoloto > 3000000)
    text += `🆙 Руду «Золото» сейчас можно продать за дорого.\n`;

  if (botinfo.kurszoloto > 400000)
    text += `🆙 Руду «Железо» сейчас можно продать за дорого.\n`;

  text += `\n⚙️ 1 железо - ${utils.sp(botinfo.kurszhelezo)}$`;

  text += `\n🏵 1 золото - ${utils.sp(botinfo.kurszoloto)}$`;

  text += `\n💎 1 алмаз - ${utils.sp(botinfo.kursalmaz)}$`;

  text += `\n🌌 1 материя - ${utils.sp(botinfo.kursmateria)}$`;

  text += `\n🌌 1 обсидиан - ${utils.sp(botinfo.kursobsidian)}$`;

  text += `\n🌌 1 плазма - ${utils.sp(botinfo.kursplazma)}$`;

  text += `\n\n🔄 Курс руды обновится через ${unixStampLefta(
    kursrudtime - Date.now()
  )} ⏳`;

  return bot(text);
});

oscrn(/^(?:банк)$/i, async (message, bot) => {
  return bot(
    `На вашем банковском счету находится ${utils.sp(message.user.bank)}$ 🌧️`
  );
});

oscrn(/^(?:банк)\s(?:снять)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/([кk])/gi, "000");

  message.args[1] = message.args[1].replace(/([мm])/gi, "000000");

  message.args[1] = message.args[1].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.bank
  );

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.args[1] <= 0) return;

  if (message.args[1] > message.user.bank) return bot(`у вас нет данной суммы`);
  else if (message.args[1] <= message.user.bank) {
    message.user.balance += message.args[1];

    message.user.bank -= message.args[1];

    return bot(
      `Вы успешно сняли ${utils.sp(
        message.args[1]
      )}$ со своего банковского счёта 💳

▶️ Остаток на счёте: ${utils.sp(message.user.bank)}$
💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
      { attachment: `photo-197613406_457274000` }
    );
  }
});

oscrn(/^банк\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/([.,])/gi, "");
  message.args[1] = message.args[1].replace(/([кk])/gi, "000");
  message.args[1] = message.args[1].replace(/([мm])/gi, "000000");
  message.args[1] = message.args[1].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );
  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.args[1] <= 0) return;
  if (message.args[1] <= 14) return bot(`минимальная сумма вклада 50$`);
  if (message.user.banklim === undefined) {
    message.user.banklim = false;
  }

  if (!message.user.settings.imperator) {
    if (
      message.args[1] + message.user.bank - 1 >= message.user.limit.banklimit &&
      !message.user.banklim
    )
      return bot(
        `максимальная сумма вклада ${utils.sp(message.user.limit.banklimit)}$`
      );
    if (
      message.args[1] + message.user.bank - 1 >= 100000000000000000 &&
      message.user.banklim
    )
      return bot(`Максимальная сумма вклада 100.000.000.000.000.000$ ❌`);
  }

  if (message.args[1] > message.user.balance)
    return bot(`у вас нет данной суммы`);
  else if (message.args[1] <= message.user.balance) {
    message.user.balance -= message.args[1];
    message.user.bank += message.args[1];
    return bot(
      `Вы успешно положили на свой банковский счёт ${utils.sp(
        message.args[1]
      )}$ 💵💰`
    );
  }
});

oscrn(/^уведомления\s(выкл|вкл)$/i, async (message, bot) => {
  if (message.args[1].toLowerCase() === "выкл") {
    message.user.notifications = false;
    return bot(`уведомления отключены! 🔕`);
  }

  if (message.args[1].toLowerCase() === "вкл") {
    message.user.notifications = true;
    return bot(`уведомления включены! 🔔`);
  }
});

oscrn(/^(?:передать)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!botinfo.oipay)
    return bot(
      `❓Технические работы\nЗа подробной информацией - @club228105719(Основатель)`
    );

  message.args[2] = message.args[2].replace(/([.,])/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/([мm])/gi, "000000");

  message.args[2] = message.args[2].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  if (message.user.bans.pban)
    return bot(`Вам запрещено передавать деньги другим игрокам! ❌`);

  if (message.user.inf === true)
    return bot(`Выключите безлимитный баланс ${smileng}`);

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  if (message.args[2] > message.user.bank)
    return bot(`Недостаточно средств на балансе банка! ❌

💳 Баланс банка: ${utils.sp(message.user.bank)}$`);
  else if (message.args[2] <= message.user.bank) {
    if (message.user.limit == null)
      message.user.limit = { timer: utils.time(), sent: 0 };

    if (utils.time() - message.user.limit.timer >= 10800) {
      message.user.limit.timer = utils.time();

      message.user.limit.sent = 0;

      message.user.limit.paylimit = message.user.limit.playerlimit;
    }

    if (message.args[2] > message.user.limit.paylimit)
      return bot(
        `Вы указали число, больше Вашего лимита на данный момент!\n✅ Доступно ещё к передаче: ${utils.sp(
          message.user.limit.paylimit
        )}$\n🔄 Лимит восстанавливается каждые 3 часа.`
      );

    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`убедитесь в правильности ID игрока`);

    if (user.uid === message.user.uid) return bot(`Неверный ID`);

    if (message.user.pay < Date.now()) {
      message.user.pay = Date.now() + 5000;

      return bot(`Вы точно хотите перевести игроку @id${user.id} (${
        user.tag
      }) ${utils.sp(message.args[2])}$ 💵

⏳ У Вас есть 5 сек. на повторный ввод команды, чтобы передать средства.`);
    }

    if (message.user.pay > Date.now()) {
      await vk.api.messages.send({
        chat_id: chatlogi,
        forward_messages: message.id,
        message: `# LOG-BANK:\n\n👤 Передал: @id${message.user.id} (${
          message.user.tag
        })[ID: ${message.user.uid}]\n🤑 Получил: @id${user.id} (${user.tag})[${
          user.uid
        }]\n💵 Сумма: ${utils.sp(message.args[2])}$`,
        random_id: 0,
      });

      message.user.pay = Date.now() + 1000;

      message.user.bank -= Math.floor(Number(message.args[2]));

      message.user.limit.paylimit -= Math.floor(Number(message.args[2]));

      message.user.limit.sent += Math.floor(Number(message.args[2]));

      user.bank += Math.floor(Number(message.args[2] * 0.95));

      return bot(
        `Успешно! Игрок получил Ваши средства. Детальная информация о переводе:\n\n➡️ Переведено ${utils.sp(
          message.args[2]
        )}$\n➖ С учётом коммисии пришло ${utils.sp(
          message.args[2] * 0.95
        )}$\n👤 Получатель: ${
          user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
        }\n▶️ Оставшийся лимит: ${utils.sp(
          message.user.limit.paylimit
        )}$\n${smileng}`
      );
    }

    await bot(
      `вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$ ${smileng}`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `🔔 Уведомление:
👤 Игрок @id${message.user.id} (${message.user.tag})[ID: ${
          message.user.uid
        }] перевел Вам ${utils.sp(
          message.args[2]
        )}$ (с учётом комиссии пришло ${utils.sp(message.args[2] * 0.95)}$) 💵
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения ${smileng}`,
        random_id: 0,
      });
  }
});

oscrn(/^казино шанс\s([0-9]+)$/i, async (message) => {
  if (message.user.settings.joker === true) {
    message.user.infcas = message.args[1];
  }
});

oscrn(/^(?:бесконечный баланс включить)$/i, async (message, bot) => {
  if (message.user.settings.joker === true) {
    message.user.inf = true;

    message.user.balance = 999999999999999999999999999999999999;

    return bot(`Бесконечный баланс включен! ✅`);
  }
});

oscrn(/^(?:бесконечный баланс выключить)$/i, async (message, bot) => {
  if (message.user.settings.joker === true) {
    message.user.inf = false;

    message.user.balance = 100000;

    return bot(`Бесконечный баланс выключен! ❌`);
  }
});

oscrn(/^(?:передать)\s([0-9]+)\s(.*)\s(.*)$/i, async (message, bot) => {
  if (!botinfo.oipay)
    return bot(
      `❓Технические работы\n🔇За подробной информацией - @club228105719(Основатель)`
    );

  message.args[2] = message.args[2].replace(/([.,])/gi, "");

  message.args[2] = message.args[2].replace(/([кk])/gi, "000");

  message.args[2] = message.args[2].replace(/([мm])/gi, "000000");

  message.args[2] = message.args[2].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  if (message.user.bans.pban)
    return bot(`Вам запрещено передавать деньги другим игрокам! ❌`);

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  if (message.args[2] > message.user.bank)
    return bot(`Недостаточно средств на балансе банка! ❌

💳 Баланс банка: ${utils.sp(message.user.bank)}$`);
  else if (message.args[2] <= message.user.bank) {
    if (message.user.limit == null)
      message.user.limit = { timer: utils.time(), sent: 0 };

    if (utils.time() - message.user.limit.timer >= 3600) {
      message.user.limit.timer = utils.time();

      message.user.limit.sent = 0;

      message.user.limit.paylimit = message.user.limit.playerlimit;
    }

    if (message.args[2] > message.user.limit.paylimit)
      return bot(
        `Вы указали число, больше Вашего лимита на данный момент!\n✅ Доступно ещё к передаче: ${utils.sp(
          message.user.limit.paylimit
        )}$\n🔄 Лимит восстанавливается каждые 3 часа.`
      );

    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`убедитесь в правильности ID игрока`);

    if (user.uid === message.user.uid) return bot(`Неверный ID`);

    message.user.bank -= Math.floor(Number(message.args[2]));

    message.user.limit.paylimit -= Math.floor(Number(message.args[2]));

    message.user.limit.sent += Math.floor(Number(message.args[2]));

    user.bank += Math.floor(Number(message.args[2] * 0.9));

    await bot(`вы передали игроку ${user.tag} ${utils.sp(message.args[2])}$`);

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `🔔 Уведомление:
👤 Игрок @id${message.user.id} (${message.user.tag})[ID: ${
          message.user.uid
        }] перевел Вам ${utils.sp(
          message.args[2]
        )}$ (с учётом комиссии пришло ${utils.sp(message.args[2] * 0.95)}$) 💵
📨 Cообщение, которое Вам было написано: «${message.args[3]}»
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });

    await vk.api.messages.send({
      chat_id: 1,
      forward_messages: message.id,
      message: `# LOG-BANK:\n\n👤 Передал: @id${message.user.id} (${
        message.user.tag
      })[ID: ${message.user.uid}]\n🤑 Получил: @id${user.id} (${user.tag})[${
        user.uid
      }]\n💵 Сумма: ${utils.sp(message.args[2])}$\n📩 Сообщение: «${
        message.args[3]
      }»`,
      random_id: 0,
    });
  }
});

oscrn(/^(?:рейтинг)$/i, async (message, bot) => {
  return bot(`ваш рейтинг: ${utils.sp(message.user.rating)}👑`);
});

oscrn(/^(?:билеты)$/i, async (message, bot) => {
  return bot(`у вас всего ${utils.sp(message.user.bilet)} билетов 🎟`);
});

oscrn(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
  if (message.args[1].toLowerCase() === "вкл") {
    message.user.mention = true;

    return bot(`гиперссылка включена! 🆘`);
  }

  if (message.args[1].toLowerCase() === "выкл") {
    message.user.mention = false;

    return bot(`гиперссылка отключена! ☄️`);
  }
});

oscrn(/^(?:ник)\s(.*)$/i, async (message, bot) => {
  if (
    message.args[1].length > message.user.limit.nicklimit &&
    message.args[1].length > message.user.nicklimit
  )
    return bot(`вы указали длинный ник. 💬`);

  if (message.args[1].length > 32) return bot(`💬Ошибка`);

  message.args[1] = message.args[1].replace(/(@|\*|\.)/gi, "");

  message.user.tag = message.args[1];

  return bot(`вы успешно изменили свой ник-нейм! Он отличный! 🤗`);
});

oscrn(/^поиск\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  let text = ``;

  let t = 0;
  users
    .filter((x) => x.tag === message.args[1])
    .map((x) => {
      t = t + 1;

      text += `@id${x.id}(${x.tag}) - ${x.uid} id\n`;
    });
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

  bot(`нашел столько игроков с таким ником ${t} ${smileng}\n\n${text}`);
});

oscrn(/^(?:сетник)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.joker !== true)
    return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`убедитесь в правильности ID игрока`);

  user.tag = "Смените ник";

  return bot(`установлен ник «Смените ник»

🆔 » ID игрока: ${user.uid}`);
});

oscrn(/^(?:сетник)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 3 && message.user.settings.joker !== true)
    return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`убедитесь в правильности ID игрока`);

  let nickname = utils.pick([
    `великолепный`,
    `крутой`,
    `фантастический`,
    `классный`,
    `лучший`,
  ]);

  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

  user.tag = message.args[2];

  return bot(`${nickname} ник! ${smileng}

😈 Игроку @id${user.id} (${message.user.tag}) ID: ${user.uid} - был изменён ник на «${message.args[2]}»`);
});

Date.now();


oscrn(/@club228105719/i, async (message, bot) => {
  if (message.user.uid === 1 || message.user.uid === 0)
    return bot(
      `вы находитесь в белом листе (W-L), поэтому Вам не было выдано предупреждение.`
    );

  if (message.user.warn === undefined) {
    message.user.warn = 0;
  }

  if (message.user.warn < 5) {
    message.user.warn += 1;

    return message.send(
      `👤 @id${message.user.uid} (${message.user.tag}), уважаемый игрок! Если Вы хотите что-то добиться от Дмитрия, то советую Вам написать в личные сообщения только по ВАЖНЫМ делам.\n\n⏳ У Вас ${message.user.warn}/5 предупреждений, если Вы достигнете 5-ти предупреждений Вы будете заморожены в боте на 1 час из-за массовых упоминаний.`,
      { attachment: `video-187572210_456239730` }
    );
  }

  if (message.user.warn >= 5) {
    message.user.warn = 0;

    message.user.bans.ban = true;

    message.user.timers.ban = Date.now() + 3600000;

    return bot(
      `Вы достигли лимита предупреждений. Выдан бан на 1 час в целях защиты от массовых упоминаний.`
    );
  }
});

oscrn(/^(?:бот|о боте|техническая информация)$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  let subs = await vk.api.groups
    .getMembers({ group_id: 228105719 })
    .catch(() => {
      bot(` Ошибка.`);
    });

  let i = 0;

  users
    .filter((x) => x.bans.ban === true)
    .map(() => {
      i += 1;
    });

  return bot(`техническая информация о боте:
🌐 » Группа: @club228105719 (ЧакоБот)
👥 » Подписчиков: ${subs.count} чел.
☃️ » Игроков в БД: ${utils.sp(users.length)}
🚫 » Заблокированных игроков: ${utils.sp(i)}
${smileng}`);
});

oscrn(/^(?:магазин|shop|👛 магазин)$/i, async (message, bot) => {
  return bot(
    `разделы магазина:
🚙 Транспорт
🏘 Недвижимость
📺 Техника
📌 Остальное

💠 Для перехода по разделам используйте кнопки ниже.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🚙 Транспорт",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏘️ Недвижимость",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "📺 Техника",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "📌 Остальное",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:🚙 Транспорт)$/i, async (message, bot) => {
  return bot(`раздел «Транспорт» 🚙
🚗 Машины
🛥 Яхты
🛩 Самолеты
🚁 Вертолеты`);
});

oscrn(/^(?:🏘️ Недвижимость)$/i, async (message, bot) => {
  return bot(`раздел «Недвижимость» 🏘️
🏠 Дома [Подвал]
🌇 Квартиры`);
});

oscrn(/^(?:📌 Остальное)$/i, async (message, bot) => {
  return bot(`раздел «Остальное» 📌
🌳 Деревья
☕ Напитки
🔧 Инструменты
☀ Звезды
🦊 Питомцы
💼 Бизнесы
🔋 Фермы
📦 Кейсы
🌐 Биткоин [кол-во]
👑 Рейтинг [кол-во] - 700 млн$`);
});

oscrn(/^(?:📺 Техника)$/i, async (message, bot) => {
  return bot(`раздел «Техника» 📺
📱 Компьютеры
📱 Телефоны
⌚ Часы`);
});

/*🚙 Транспорт:

⠀⠀ 🚗 Машины

⠀⠀ 🛥 Яхты

⠀⠀ 🛩 Самолеты

⠀⠀ 🚁 Вертолеты



🏘 Недвижимость:

⠀⠀ 🏠 Дома [Подвал]

⠀⠀ 🌇 Квартиры



📺 Техника:

⠀⠀ 📱 Компьютеры

⠀⠀ 📱 Телефоны

⠀⠀ ⌚ Часы



🔧 Инструменты



📌 Остальное:

⠀⠀🌳 Деревья

⠀⠀☕ Напитки

⠀⠀🔧 Инструменты

⠀⠀☀ Звезды

⠀⠀🦊 Питомцы

⠀⠀💼 Бизнесы

⠀⠀🔋 Фермы

⠀⠀📦 Кейсы

⠀⠀🌐 Биткоин [кол-во]

⠀⠀👑 Рейтинг [кол-во] - 700 млн$ */

oscrn(/^(?:продать)\s(.*)\s?(.*)?$/i, async (message, bot) => {
  let options = {
    count: null,
  };

  message.args[2] = message.args[1].split(" ")[1];

  if (!message.args[2]) options.count = 1;
  if (message.args[2]) {
    message.args[2] = message.args[2].replace(/([.,])/gi, "");
    message.args[2] = message.args[2].replace(/([кk])/gi, "000");
    message.args[2] = message.args[2].replace(/([мm])/gi, "000000");
    message.args[2] = Math.floor(Number(message.args[2]));

    if (message.args[2] <= 0) return;
    if (!message.args[2]) options.count = 1;
    else if (message.args[2]) options.count = message.args[2];
  }

  if (/мяч/i.test(message.args[1].toLowerCase())) {
    if (!message.user.ball) return bot(`у вас нет мяча`);
    let a = Math.floor(balls[message.user.ball - 1].cost * 0.5);

    message.user.balance += Math.floor(balls[message.user.ball - 1].cost * 0.5);
    message.user.ball = 0;

    return bot(
      `вы продали свой мяч за ${utils.sp(
        a
      )}$ 🏀\n\n🛒 Вам было вернуто 50% от гос. стоимости мяча ♻️`
    );
  }

  if (/машин/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.car) return bot(`у вас нет машины`);
    let a = Math.floor(cars[message.user.transport.car - 1].cost * 0.6);

    message.user.balance += Math.floor(
      cars[message.user.transport.car - 1].cost * 0.6
    );
    message.user.transport.car = 0;
    message.user.scar.gosnomer = "undefined";
    message.user.scar.prok_1 = 1;
    message.user.scar.prok_2 = 1;
    message.user.scar.prok_3 = 1;
    message.user.scar.prok_4 = 1;
    message.user.scar.prok_5 = 1;
    message.user.scar.prok_6 = 1;

    return bot(
      `вы продали свою машину за ${utils.sp(
        a
      )}$ 🚗\n\n🛒 Вам было вернуто 60% от гос. стоимости машины ♻️`
    );
  }

  if (/автозвук/i.test(message.args[1].toLowerCase())) {
    if (!message.user.autosound) return bot(`у вас нет автозвук-машины`);
    let a = Math.floor(autosounder[message.user.autosound - 1].cost * 0.6);

    message.user.balance += Math.floor(
      autosounder[message.user.autosound - 1].cost * 0.6
    );
    message.user.autosound = 0;
    message.user.sound = 0;

    return bot(
      `вы продали свой автозвук за ${utils.sp(
        a
      )}$ 🔊\n\n🛒 Вам было вернуто 60% от гос. стоимости автозвука ♻️`
    );
  }

  if (/ферм/i.test(message.args[1].toLowerCase())) {
    if (message.user.misc.farm === 0) return bot(`У вас нет ферм.. 😢`);
    if (options.count > message.user.misc.farm_count)
      return bot(`У вас нет столько ферм! ❌`);
    if (options.count <= 0) return bot(`вы не можете продать столько ферм`);
    let a = Math.floor(
      farms[message.user.misc.farm - 1].cost * options.count * 0.1
    );

    message.user.balance += a;
    message.user.misc.farm_count -= options.count;
    if (message.user.misc.farm_count === 0) message.user.misc.farm = 0;

    return bot(
      `вы продали свои фермы (${options.count} шт.) за ${utils.sp(
        a
      )}$ 🔋\n\n🛒 Вам было вернуто 10% от гос. стоимости ферм ♻️`
    );
  }

  if (/видеокарт/i.test(message.args[1].toLowerCase())) {
    if (message.user.misc.videocard === 0) return bot(`😒У вас нет видеокарты`);
    if (options.count > message.user.misc.videocard_count)
      return bot(`😒У вас нет столько видеокарт`);
    if (options.count <= 0)
      return bot(`😒Вы не можете продать столько видеокарт`);
    let a = Math.floor(
      videocards[message.user.misc.videocard - 1].cost * options.count * 0.6
    );

    message.user.sprcoin += a;
    message.user.misc.videocard_count -= options.count;
    if (message.user.misc.videocard_count === 0)
      message.user.misc.videocard = 0;

    return bot(
      `Вы продали свои видеокарты (${options.count} шт.) за ${utils.sp(
        a
      )} SpringCoins ☣️\n\n🛒 Вам было вернуто 60% от гос. стоимости видеокарт ♻️`
    );
  }

  if (/догекои/i.test(message.args[1].toLowerCase())) {
    if (!message.user.dcoins) return bot(`у вас нет 💸 DogeCoins!`);
    if (options.count > message.user.dcoins)
      return bot(`недостаточно 💸 DogeCoins!`);

    if (!message.args[2]) options.count = message.user.dcoins; //
    else if (message.args[2]) options.count = message.args[2]; //
    let a = Math.floor(dog * options.count);

    message.user.balance += Math.floor(a);
    message.user.dcoins -= options.count;

    return bot(
      `вы продали 💸 DogeCoins (${options.count} шт.) за ${utils.sp(a)}$`
    );
  }

  if (/питом/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.pet) return bot(`у вас нет питомца!`);
    let a = Math.floor(pets[message.user.misc.pet - 1].cost * 0.6);

    if (message.user.misc.pet !== 9 && message.user.misc.pet !== 10) {
      message.user.balance += a;
      message.user.misc.pet = 0;
      message.user.pet.lvl = 0;
      message.user.pet.poterl = false;
      return bot(
        `вы продали своего питомца за ${utils.sp(
          a
        )}$ 🐾\n\n🛒 Вам было вернуто 60% от стоимости питомца ♻️`
      );
    }

    if (message.user.misc.pet === 9 || message.user.misc.pet === 10) {
      message.user.sprcoin += a;
      message.user.misc.pet = 0;
      message.user.pet.lvl = 0;
      message.user.pet.poterl = false;

      return bot(`вы продали своего питомца за ${utils.sp(a)} SpringCoins☣`);
    }
  }

  if (/желез/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.zhelezo < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a2 = message.user.ruds.zhelezo * botinfo.kurszhelezo;
    const zhelezosda = message.user.ruds.zhelezo;

    message.user.balance += message.user.ruds.zhelezo * botinfo.kurszhelezo;
    message.user.ruds.zhelezo = 0;
    return bot(
      `Вы продали ${utils.sp(zhelezosda)}ед. железа за ${utils.sp(a2)}$ 💵`
    );
  }

  if (/золот/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.zoloto < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a4 = message.user.ruds.zoloto * botinfo.kurszoloto;
    const zhelezosda3 = message.user.ruds.zoloto;

    message.user.balance += message.user.ruds.zoloto * botinfo.kurszoloto;
    message.user.ruds.zoloto = 0;

    return bot(
      `вы продали ${utils.sp(zhelezosda3)}ед. золота за ${utils.sp(a4)}$ 💵`
    );
  }

  if (/алмаз/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.almaz < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a3 = message.user.ruds.almaz * botinfo.kursalmaz;
    const zhelezosda2 = message.user.ruds.almaz;

    message.user.balance += message.user.ruds.almaz * botinfo.kursalmaz;
    message.user.ruds.almaz = 0;

    return bot(
      `вы продали ${utils.sp(zhelezosda2)}ед. алмазов за ${utils.sp(a3)}$ 💵`
    );
  }

  if (/матери/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.materia < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a5 = message.user.ruds.materia * botinfo.kursmateria;
    const zhelezosda4 = message.user.ruds.materia;

    message.user.balance += message.user.ruds.materia * botinfo.kursmateria;
    message.user.ruds.materia = 0;

    return bot(
      `вы продали ${utils.sp(zhelezosda4)}ед. материи за ${utils.sp(a5)}$ 💵`
    );
  }

  if (/обсидиан/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.obsidian < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a6 = message.user.ruds.obsidian * botinfo.kursobsidian;
    const zhelezosda5 = message.user.ruds.obsidian;

    message.user.balance += message.user.ruds.obsidian * botinfo.kursobsidian;
    message.user.ruds.obsidian = 0;

    return bot(
      `вы продали ${utils.sp(zhelezosda5)}ед. обсидиана за ${utils.sp(a6)}$ 💵`
    );
  }

  if (/плазму/i.test(message.args[1].toLowerCase())) {
    if (message.user.ruds.plazma < 1)
      return bot(`у Вас нету вида данной руды! 😢`);
    let a6 = message.user.ruds.plazma * botinfo.kursplazma;
    const zhelezosda6 = message.user.ruds.plazma;

    message.user.balance += message.user.ruds.plazma * botinfo.kursplazma;
    message.user.ruds.plazma = 0;

    return bot(
      `вы продали ${utils.sp(zhelezosda6)}ед. плазмы за ${utils.sp(a6)}$ 💵`
    );
  }

  if (/яхт/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.yacht) return bot(`у вас нет яхты`);
    let a = Math.floor(yachts[message.user.transport.yacht - 1].cost * 0.6);

    message.user.balance += Math.floor(
      yachts[message.user.transport.yacht - 1].cost * 0.6
    );
    message.user.transport.yacht = 0;

    return bot(
      `вы продали свою яхту за ${utils.sp(
        a
      )}$ 🚤\n\n🛒 Вам было вернуто 60% от гос. стоимости яхты ♻️`
    );
  }

  if (/инструмен(т|ты)/i.test(message.args[1].toLowerCase())) {
    if (!message.user.minertool) return bot(`у вас нет инструментов`);
    let a = Math.floor(minertool[message.user.minertool - 1].cost * 0.6);

    message.user.balance += Math.floor(
      minertool[message.user.minertool - 1].cost * 0.6
    );
    message.user.minertool = 0;

    return bot(
      `вы продали свои инструменты за ${utils.sp(
        a
      )}$ 🔧\n\n🛒 Вам было вернуто 60% от гос. стоимости инструмента ♻️`
    );
  }

  if (/дерево/i.test(message.args[1].toLowerCase())) {
    if (!message.user.tree)
      return bot(`у Вас нету дерева! 🌲
Для покупки дерева отправьте «деревья»`);
    let a = Math.floor(trees[message.user.tree - 1].cost * 0.6);
    //Листики
    message.user.balance += Math.floor(a);
    message.user.tree = 0;
    message.user.leafpribil = 0;

    return bot(
      `вы продали своё дерево за ${utils.sp(
        a
      )}$ 🌲\n\n🛒 Вам было вернуто 60% от стоимости дерева ♻️`
    );
  }

  if (/самол(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.airplane) return bot(`у вас нет самолёта`);
    let a = Math.floor(
      airplanes[message.user.transport.airplane - 1].cost * 0.6
    );

    message.user.balance += Math.floor(
      airplanes[message.user.transport.airplane - 1].cost * 0.6
    );
    message.user.transport.airplane = 0;

    return bot(
      `вы продали свой самолёт за ${utils.sp(
        a
      )}$ 🛩️\n\n🛒 Вам было вернуто 60% от гос. стоимости самолёта ♻️`
    );
  }

  if (/в([иея])рт([ао])л(е|ё|йо)т/i.test(message.args[1].toLowerCase())) {
    if (!message.user.transport.helicopter) return bot(`у вас нет вертолета`);
    let a = Math.floor(
      helicopters[message.user.transport.helicopter - 1].cost * 0.6
    );

    message.user.balance += Math.floor(
      helicopters[message.user.transport.helicopter - 1].cost * 0.6
    );
    message.user.transport.helicopter = 0;

    return bot(
      `вы продали свой вертолёт за ${utils.sp(
        a
      )}$ 🚁\n\n🛒 Вам было вернуто 60% от гос. стоимости вертолёта ♻️`
    );
  }

  if (/дом/i.test(message.args[1].toLowerCase())) {
    if (!message.user.realty.home) return bot(`у вас нет дома`);
    let a = Math.floor(homes[message.user.realty.home - 1].cost * 0.6);

    message.user.balance += Math.floor(
      homes[message.user.realty.home - 1].cost * 0.6
    );
    message.user.realty.home = 0;

    return bot(
      `вы продали свой дом за ${utils.sp(
        a
      )}$ 🏡\n\n🛒 Вам было вернуто 60% от гос. стоимости дома ♻️`
    );
  }

  if (/квартир/i.test(message.args[1].toLowerCase())) {
    if (!message.user.realty.apartment) return bot(`у вас нет квартиры`);
    let a = Math.floor(
      apartments[message.user.realty.apartment - 1].cost * 0.6
    );

    message.user.balance += Math.floor(
      apartments[message.user.realty.apartment - 1].cost * 0.6
    );
    message.user.realty.apartment = 0;

    return bot(
      `вы продали свою квартиру за ${utils.sp(
        a
      )}$ 🌆\n\n🛒 Вам было вернуто 60% от гос. стоимости квартиры ♻️`
    );
  }

  if (/телефон/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.phone) return bot(`у вас нет телефона`);
    let a = Math.floor(phones[message.user.misc.phone - 1].cost * 0.6);

    message.user.balance += Math.floor(
      phones[message.user.misc.phone - 1].cost * 0.6
    );
    message.user.misc.phone = 0;

    return bot(
      `вы продали свой телефон за ${utils.sp(
        a
      )}$ 📲\n\n🛒 Вам было вернуто 60% от гос. стоимости телефона ♻️`
    );
  }

  if (/часы/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.clock) return bot(`у вас нету часов`);
    let a = Math.floor(clocks[message.user.misc.clock - 1].cost * 0.6);

    message.user.balance += Math.floor(
      clocks[message.user.misc.clock - 1].cost * 0.6
    );
    message.user.misc.clock = 0;

    return bot(
      `вы продали свои часы за ${utils.sp(
        a
      )}$ ⌚\n\n🛒 Вам было вернуто 60% от гос. стоимости часов ♻️`
    );
  }

  if (/компьютер/i.test(message.args[1].toLowerCase())) {
    if (!message.user.misc.computer) return bot(`у вас нет компьютера`);
    let a = Math.floor(computers[message.user.misc.computer - 1].cost * 0.6);

    message.user.balance += Math.floor(
      computers[message.user.misc.computer - 1].cost * 0.6
    );
    message.user.misc.computer = 0;

    return bot(
      `вы продали свой компьютер за ${utils.sp(
        a
      )}$ 🖥️\n\n🛒 Вам было вернуто 60% от гос. стоимости компьютера ♻️`
    );
  }

  if (/рейтинг/i.test(message.args[1].toLowerCase())) {
    if (options.count > message.user.rating) return bot(`у вас нет рейтинга`);
    if (!message.args[2]) options.count = message.user.rating; //
    else if (message.args[2]) options.count = message.args[2]; //

    let a;

    if (!message.user.settings.imperator) {
      a = 120000000 * options.count;
    } else {
      a = 180000000 * options.count;
    }
    if (message.user.settings.topdon || message.user.settings.king) {
      a = 260000000 * options.count;
    }
    if (message.user.settings.rcom) {
      a = 260000000 * options.count;
    }

    message.user.balance += Math.floor(a);
    message.user.rating -= options.count;

    return bot(
      `вы продали ${options.count} ${utils.decl(options.count, [
        "рейтинг",
        "рейтинга",
        "рейтинга",
      ])} за ${utils.sp(Math.floor(a))}`
    );
  }

  if (/бизнес/i.test(message.args[1].toLowerCase())) {
    if (message.user.business.length === 0) return bot(`у вас нет бизнеса`);
    if (
      (options.count < 1 || options.count > 4) &&
      message.user.business.length <= 4
    )
      return bot(`используйте: Продать бизнес [от 1 до 4]`);
    if (message.user.business.length < options.count)
      return bot(`у вас нет этого бизнеса`);

    options.count--;

    let a = Math.floor(
      businesses[message.user.business[options.count].id - 1][
        message.user.business[options.count].upgrade - 1
      ].cost * 0.6
    );

    message.user.balance += Math.floor(a);
    message.user.business.splice(options.count, 1);

    return bot(
      `вы продали свой бизнес №${options.count} за ${utils.sp(
        a
      )}$ 🏢\n\n🛒 Вам было вернуто 60% от гос. стоимости + улучшений бизнеса ♻️`
    );
  }
  // Звёзды
  if (/звезд(у|а)/i.test(message.args[1].toLowerCase())) {
    if (options.count < 1 || options.count > 5)
      return bot(`используйте: Продать звезду [от 1 до 5]`);

    if (options.count === 1) {
      if (message.user.stars1) {
        message.user.ruds.almaz += 7500;
        message.user.stars1 = false;

        return bot(`вы продали свою звезду за 7.500 Алмазов 💎`);
      } else {
        return bot(`У вас нет данной звезды`);
      }
    }

    if (options.count === 2) {
      if (message.user.stars2) {
        message.user.ruds.materia += 5000;
        message.user.stars2 = false;

        return bot(`вы продали свою звезду за 5.000 Материи 🌌`);
      } else {
        return bot(`У вас нет данной звезды`);
      }
    }

    if (options.count === 3) {
      if (message.user.stars3) {
        message.user.ruds.obsidian += 2500;
        message.user.stars3 = false;

        return bot(`вы продали свою звезду за 2.500 Обсидиана 🌌`);
      } else {
        return bot(`У вас нет данной звезды`);
      }
    }

    if (options.count === 4) {
      if (message.user.stars4) {
        message.user.ruds.plazma += 1500;
        message.user.stars4 = false;

        return bot(`вы продали свою звезду за 1.500 Плазмы 🌌`);
      } else {
        return bot(`У вас нет данной звезды`);
      }
    }

    if (options.count === 5) {
      if (message.user.stars5) {
        message.user.rub += 7500;
        message.user.stars5 = false;

        return bot(`вы продали свою звезду за 7.500 ЧакоРуб 💰`);
      } else {
        return bot(`У вас нет данной звезды`);
      }
    }
  }

  if (/биткоин/i.test(message.args[1].toLowerCase())) {
    if (options.count > message.user.btc) return bot(`недостаточно биткоинов`);
    if (!message.args[2]) options.count = message.user.btc; //
    else if (message.args[2]) options.count = message.args[2]; //
    let a = Math.floor(btc * options.count);

    message.user.balance += Math.floor(a);
    message.user.btc -= options.count;

    return bot(
      `вы продали ${utils.sp(options.count)}₿ за ${utils.sp(a)}$ (1₿=${utils.sp(
        btc
      )}$)`
    );
  }
});

//Листики

oscrn(/^деревья\s?(\d+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Деревья:

🌳 1. Одинокое дерево: 1 листик/час (1.000.000.000.000$)
🌳 2. Несколько деревьев: 3 листика/час (10.000.000.000.000$)
🌳 3. Лес: 5 листиков/час (100.000.000.000.000$)

🛒 Для покупки введите «Деревья [номер]»
`);

  if (message.args[1] < 1 || message.args[1] >= 4)
    return bot("Неверный номер дерева");

  const sell = trees.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.tree !== 0)
    return bot(`у Вас уже есть Дерево (${trees[message.user.tree - 1].name})! 🙌
🛒 Чтобы его продать, напишите «Продать дерево»`);

  if (message.user.balance < sell.cost) return bot(`недостаточно денег!`);
  else if (message.user.balance >= message.args[1]) {
    message.user.balance -= sell.cost;

    message.user.irrigation = 100;

    message.user.tree = sell.id;

    return bot(`вы успешно купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
  }
});

oscrn(/^дерево$/i, async (message, bot) => {
  if (!message.user.tree)
    return bot(`у Вас нет дерева!

Для выбора дерева отправьте «Деревья»`);

  const biz = trees.find((x) => x.id === message.user.tree);

  const lvlcash = biz.earn; //листики pribil

  return bot(
    `информация о Вашем дереве «${biz.name}»:

🍂 Падает ${utils.sp(lvlcash)} лист./час
🍃 Упало ${utils.sp(message.user.leafpribil)}
💧 Осталось воды: ${utils.sp(message.user.irrigation)}%
`,
    {
      attachment: biz.photo,

      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🚿 Дерево полить",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "▶️ Дерево собрать",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌲 Дерево помощь",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});
oscrn(
  /^(?:дерево помощь|деревья помощь|🌲 Дерево помощь)$/i,
  async (message) => {
    return message.send(`помощь по дереву:

✅ Полить дерево, чтобы оно не засохло: Команда «Дерево полить»
🍃 Собрать листики с дерева: Команда «Дерево собрать»`);
  }
);

oscrn(/^(?:дерево|▶️ Дерево)\sсовобрать$/i, async (message, bot) => {
  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]);

  if (!message.user.tree)
    return bot(
      `У вас нет дерева! Можно просмотреть список всех продаваемых деревьев, написав команду «Деревья» 🌲`
    );

  if (!message.user.leafpribil)
    return bot(`У этого дерева ещё нету опавших листиков! ❌😢`);

  const biz_balance = message.user.leafpribil;

  message.user.leaf += message.user.leafpribil;

  message.user.leafpribil = 0;

  return bot(
    `Вы собрали со своего дерева ${utils.sp(biz_balance)} опавших листиков 🍃`
  );
});

oscrn(/^(?:дерево полить|🚿 Дерево полить)$/i, async (message, bot) => {
  if (message.user.tree < 1)
    return bot(`у Вас нет дерева.
❓ Для покупки введите "Деревья"`);

  if (message.user.irrigation >= 100) return bot(`дереву не требуется полив!`);

  if (message.user.balance < 10000000) return bot(`недостаточно денег. ⁉️`);
  else {
    message.user.irrigation = 100;

    message.user.balance -= 10000000;

    bot(
      `Дерево успешно было полито!\n\nВы полили дерево «${
        trees[message.user.tree - 1].name
      }» за 10.000.000$ 💧`
    );
  }
});

oscrn(/^(?:Солнце|Звезда 1)$/i, async (message, bot) => {
  if (!message.user.stars1) return bot(`Приобретите Солнце. "Звезды 1"`);

  return bot(
    `Информация о Вашей звезде:\n\n▶️ Название: «Солнце»\n🤑 Прибыль: 100 алмазов/час`,
    { attachment: `photo-197579361_457268021` }
  );
});

oscrn(/^(?:Сириус|Звезда 2)$/i, async (message, bot) => {
  if (!message.user.stars2) return bot(`Приобретите Сириус. "Звезды 2"`);

  return bot(
    `Информация о Вашей звезде:\n\n▶️ Название: «Сириус»\n🤑 Прибыль: 75 материи/час`,
    { attachment: `photo-197579361_457268018` }
  );
});

oscrn(/^(?:Красный гигант|Звезда 3)$/i, async (message, bot) => {
  if (!message.user.stars3)
    return bot(`Приобретите Красный гигант. "Звезды 3"`);

  return bot(
    `Информация о Вашей звезде:\n\n▶️ Название: «Красный гигант»\n🤑 Прибыль: 50 обсидиана/час`,
    { attachment: `photo-197579361_457268019` }
  );
});

oscrn(/^(?:Плазмовый гигант|Звезда 4)$/i, async (message, bot) => {
  if (!message.user.stars4)
    return bot(`Приобретите Плазмовый гигант. "Звезды 4"`);

  return bot(
    `Информация о Вашей звезде:\n\n▶️ Название: «Плазмовый гигант»\n🤑 Прибыль: 10 плазмы/час`,
    { attachment: `photo-197579361_457268022` }
  );
});

oscrn(/^(?:Донатный гигант|Звезда 5)$/i, async (message, bot) => {
  if (!message.user.stars5)
    return bot(`Приобретите Донатный гиган. "Звезды 5"`);

  return bot(
    `Информация о Вашей звезде:\n\n▶️ Название: «Донатный гигант»\n🤑 Прибыль: 30 ЧакоРуб/час`,
    { attachment: `photo-197579361_457268020` }
  );
});

oscrn(/^(?:звезды|☀ звезды|звёзды)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Звезды:

	${
    message.user.stars1 === true ? "✔️" : "✖️"
  } 1. Солнце 15.000 алмазов\nПрибыль: 100 алм/час.
	${
    message.user.stars2 === true ? "✔️" : "✖️"
  } 2. Сириус 10.000 материи\nПрибыль: 75 мат/час.
	${
    message.user.stars3 === true ? "✔️" : "✖️"
  } 3. Красный гигант 5.000 обсидиан\nПрибыль: 50 обс/час.
	${
    message.user.stars4 === true ? "✔️" : "✖️"
  } 4. Плазмовый гигант 3.000 плазмы\nПрибыль: 10 плз/час.
	${
    message.user.stars5 === true ? "✔️" : "✖️"
  } 5. Донатный гигант 15.000 ЧакоРуб\nПрибыль: 30 ЧакоРуб/час.

	Для покупки введите "Звезды [номер]"`);

  if (message.args[1] < 1 || message.args[1] > 5)
    return bot(`Введен неверный номер звезды, укажите номер от 1 до 5`);

  if (message.args[1] === 1) {
    if (message.user.stars1) return bot(`Вы уже купили данную звезду`);

    if (message.user.ruds.almaz >= 15000) {
      message.user.stars1 = true;

      message.user.ruds.almaz -= 15000;

      return bot(`вы успешно приобрели звезду Солнце 🔅`);
    } else {
      return bot(`Необходимо 15.000 алмазов`);
    }
  }

  if (message.args[1] === 2) {
    if (message.user.stars2) return bot(`Вы уже купили данную звезду`);

    if (message.user.ruds.materia >= 10000) {
      message.user.stars2 = true;

      message.user.ruds.materia -= 10000;

      return bot(`вы успешно приобрели звезду Сириус 🌠`);
    } else {
      return bot(`Необходимо 10.000 материи`);
    }
  }

  if (message.args[1] === 3) {
    if (message.user.stars3) return bot(`Вы уже купили данную звезду`);

    if (message.user.ruds.obsidian >= 5000) {
      message.user.stars3 = true;

      message.user.ruds.obsidian -= 5000;

      return bot(`Вы успешно приобрели звезду Красного гиганта 🔴`);
    } else {
      return bot(`Необходимо 5.000 обсидиана`);
    }
  }

  if (message.args[1] === 4) {
    if (message.user.stars4) return bot(`Вы уже купили данную звезду`);

    if (message.user.ruds.plazma >= 3000) {
      message.user.stars4 = true;

      message.user.ruds.plazma -= 3000;

      return bot(`Вы успешно приобрели звезду Плазмового гиганта 🌌`);
    } else {
      return bot(`Необходимо 3.000 плазмы`);
    }
  }

  if (message.args[1] === 5) {
    if (message.user.stars5) return bot(`Вы уже купили данную звезду`);

    if (message.user.rub >= 15000) {
      message.user.stars5 = true;

      message.user.rub -= 15000;

      return bot(`Вы успешно приобрели звезду Донатного гиганта 💵`);
    } else {
      return bot(`Необходимо 15.000 ЧакоРуб`);
    }
  }
});

oscrn(/^(?:машины|🚗 Машины)\s?([0-9]+)?$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!message.args[1])
    return bot(`машины:

${message.user.transport.car === 1 ? "✔️" : "✖️"} 1. Самокат (${utils.sp(
      cars.find((x) => x.id === Number(1)).cost
    )}$)
${message.user.transport.car === 2 ? "✔️" : "✖️"} 2. Велосипед (${utils.sp(
      cars.find((x) => x.id === Number(2)).cost
    )}$)
${message.user.transport.car === 3 ? "✔️" : "✖️"} 3. Мопед (${utils.sp(
      cars.find((x) => x.id === Number(3)).cost
    )}$)
${message.user.transport.car === 4 ? "✔️" : "✖️"} 4. ВАЗ 2109 (${utils.sp(
      cars.find((x) => x.id === Number(4)).cost
    )}$)
${message.user.transport.car === 5 ? "✔️" : "✖️"} 5. Квадроцикл (${utils.sp(
      cars.find((x) => x.id === Number(5)).cost
    )}$)
${message.user.transport.car === 6 ? "✔️" : "✖️"} 6. Вездеход (${utils.sp(
      cars.find((x) => x.id === Number(6)).cost
    )}$)
${message.user.transport.car === 7 ? "✔️" : "✖️"} 7. Лада Xray (${utils.sp(
      cars.find((x) => x.id === Number(7)).cost
    )}$)
${message.user.transport.car === 8 ? "✔️" : "✖️"} 8. Toyota FT-HSi (${utils.sp(
      cars.find((x) => x.id === Number(8)).cost
    )}$)
${message.user.transport.car === 9 ? "✔️" : "✖️"} 9. Subaru WRX STI (${utils.sp(
      cars.find((x) => x.id === Number(9)).cost
    )}$)
${
  message.user.transport.car === 10 ? "✔️" : "✖️"
} 10. Lamborghini Veneno (${utils.sp(
      cars.find((x) => x.id === Number(10)).cost
    )}$)
${
  message.user.transport.car === 11 ? "✔️" : "✖️"
} 11. Yamaha YZF R6 (${utils.sp(cars.find((x) => x.id === Number(11)).cost)}$)
${
  message.user.transport.car === 12 ? "✔️" : "✖️"
} 12. Ferrari LaFerrari (${utils.sp(
      cars.find((x) => x.id === Number(12)).cost
    )}$)
${
  message.user.transport.car === 13 ? "✔️" : "✖️"
} 13. Koenigsegg Regera (${utils.sp(
      cars.find((x) => x.id === Number(13)).cost
    )}$)
${message.user.transport.car === 14 ? "✔️" : "✖️"} 14. Rolls-Royce (${utils.sp(
      cars.find((x) => x.id === Number(14)).cost
    )}$)
${
  message.user.transport.car === 15 ? "✔️" : "✖️"
} 15. Tesla Cybertruck (${utils.sp(
      cars.find((x) => x.id === Number(15)).cost
    )}$)
${
  message.user.transport.car === 16 ? "✔️" : "✖️"
} 16. Lamborghini Aventador SVJ (${utils.sp(
      cars.find((x) => x.id === Number(16)).cost
    )}$)
${message.user.transport.car === 17 ? "✔️" : "✖️"} 17. Портал (${utils.sp(
      cars.find((x) => x.id === Number(17)).cost
    )}$)
${
  message.user.transport.car === 18 ? "✔️" : "✖️"
} 18. Bugatti La Voiture Noire [⭐ Экс.] (${utils.sp(
      cars.find((x) => x.id === Number(18)).cost
    )}$)

Для покупки введите "Машины [номер]"`);

  const sell = cars.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.args[1] < 1 || message.args[1] >= 19)
    return bot("Неверный номер машины.");

  if (message.user.transport.car)
    return bot(
      `у вас уже есть машина (${
        cars[message.user.transport.car - 1].name
      }), введите "Продать машину"`
    );

  if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.transport.car = sell.id;

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smileng}`
    );
  }
});

oscrn(
  /^(?:благотворительность положить|благо положить)\s(.*)$/i,
  async (message, bot) => {
    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]);

    message.args[1] = message.args[1].replace(/([.,])/gi, "");

    message.args[1] = message.args[1].replace(/([кk])/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё)/gi,
      message.user.balance
    );

    if (!Number(message.args[1])) return;

    if (message.args[1] < 0) return;

    if (Number(message.args[1]) > message.user.balance)
      return bot(`на вашем балансе столько нет!

💰 Баланс: ${utils.sp(message.user.balance)}$ ${smileng}`);

    if (message.user.settings.adm) return bot(`администрации запрещено!`);

    if (message.user.inf === true) return bot(`Выключите безлимитный баланс!`);

    if (message.args[1] > 1000000000000000)
      return bot(`За один раз больше 1.000.000.000.000.000$ положить нельзя`);

    message.args[1] = Math.floor(Number(message.args[1]));

    blago.balance += message.args[1];

    message.user.balance -= message.args[1];

    await bot(
      `вы успешно положили в благотворительный фонд «Алёша» ${utils.sp(
        message.args[1]
      )}$\n\n▶️ Остаток на балансе: ${utils.sp(
        message.user.balance
      )}$ 💰\n${smileng}`
    );
  }
);

oscrn(/^(?:автозвук)\s?([0-9]+)?$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!message.args[1])
    return bot(`Автозвук-Машины:

${message.user.autosound === 1 ? "✔️" : "✖️"} 1. ВАЗ-2112 (${utils.sp(
      autosounder.find((x) => x.id === Number(1)).cost
    )}$)
${message.user.autosound === 2 ? "✔️" : "✖️"} 2. ВАЗ-2114 (${utils.sp(
      autosounder.find((x) => x.id === Number(2)).cost
    )}$)
${message.user.autosound === 3 ? "✔️" : "✖️"} 3. VW-Golf 5 (${utils.sp(
      autosounder.find((x) => x.id === Number(3)).cost
    )}$)
${message.user.autosound === 4 ? "✔️" : "✖️"} 4. Ford-Focus 3 (${utils.sp(
      autosounder.find((x) => x.id === Number(4)).cost
    )}$)
${message.user.autosound === 5 ? "✔️" : "✖️"} 5. Opel-Astra GTS (${utils.sp(
      autosounder.find((x) => x.id === Number(5)).cost
    )}$)
${message.user.autosound === 6 ? "✔️" : "✖️"} 6. Audi Q7 (${utils.sp(
      autosounder.find((x) => x.id === Number(6)).cost
    )}$)
${
  message.user.autosound === 7 ? "✔️" : "✖️"
} 7. Mercedes-Benz GLA 250 (${utils.sp(
      autosounder.find((x) => x.id === Number(7)).cost
    )}$)
${message.user.autosound === 8 ? "✔️" : "✖️"} 8. Volvo V60 (${utils.sp(
      autosounder.find((x) => x.id === Number(8)).cost
    )}$)
${message.user.autosound === 9 ? "✔️" : "✖️"} 9. Jaguar SportBrake (${utils.sp(
      autosounder.find((x) => x.id === Number(9)).cost
    )}$)
${message.user.autosound === 10 ? "✔️" : "✖️"} 10. Porshe Macan (${utils.sp(
      autosounder.find((x) => x.id === Number(10)).cost
    )}$)
${
  message.user.autosound === 11 ? "✔️" : "✖️"
} 11. DeLorian Exclusive (${utils.sp(
      autosounder.find((x) => x.id === Number(11)).cost
    )}$)
${
  message.user.autosound === 12 ? "✔️" : "✖️"
} 12. Cadillac Escalade 3 (${utils.sp(
      autosounder.find((x) => x.id === Number(12)).cost
    )}$)
${
  message.user.autosound === 13 ? "✔️" : "✖️"
} 13. Mercedes-Benz G63 AMG (${utils.sp(
      autosounder.find((x) => x.id === Number(13)).cost
    )}$)
${
  message.user.autosound === 14 ? "✔️" : "✖️"
} 14. Bentley Continental (${utils.sp(
      autosounder.find((x) => x.id === Number(14)).cost
    )}$)
${
  message.user.autosound === 15 ? "✔️" : "✖️"
} 15. Mercedes-Benz Vision Gran Turismo (${utils.sp(
      autosounder.find((x) => x.id === Number(15)).cost
    )}$)

Для покупки введите "Автозвук [номер]"`);

  const sell = autosounder.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.autosound)
    return bot(
      `у вас уже есть машина (${
        autosounder[message.user.autosound - 1].name
      }), введите "Продать автозвук" ${smileng}`
    );

  if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.autosound = sell.id;

    return bot(
      `вы купили «${sell.name}» за ${utils.sp(sell.cost)}$ ${smileng}`
    );
  }
});

oscrn(/^(?:автозвук улучшить)\s?([0-9]+)?$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!message.args[1])
    return bot(`Автозвук-улучшения:

🔸 1. Батины динамики (5.000.000.000$) 10-20W
🔸 2. SWAT G410TS (25.000.000.000$) 20-40W
🔸 3. PionnerTX-302AS (50.000.000.000$) 40-80W
🔸 4. Alphard RTS-455T (100.000.000.000$) 80-160W
🔸 5. Bulava 250 HTS (250.000.000.000$) 160-320W
🔸 6. Machette RX-900 (500.000.000.000$) 320-640W
🔸 7. JBL EX-290 GLA 250 (1.000.000.000.000$) 640-960W
🔸 8. Bass Sound (5.000.000.000.000$) 960-1920W

Для покупки введите "Автозвук улучшить [номер]"

${smileng}`);

  const sell = sound.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.sound +=
      sell.id *
      utils.random(sell.min, sell.max) *
      autosounder[message.user.autosound - 1].bassmult;

    return bot(`вы купили «${sell.name}»за ${utils.sp(sell.cost)}$ ${smileng}`);
  }
});

oscrn(/^(?:автозвук соревновани([eя]))$/i, async (message, bot) => {
  if (!botinfo.oigon)
    return bot(
      `❓Технические работы\n🔇За подробной информацией - @club228105719(Основатель)`
    );

  if (!message.user.autosound)
    return bot(
      `у вас нет машины для участия в соревнованиях по автозвуку. Приобрести можно по команде «Автозвук [номер]»`
    );

  if (message.user.scar.gontime > Date.now())
    return bot(
      `передохните от автозвука ещё чуть-чуть! 😢\n\n⏳ Осталось ${unixStampLefta(
        message.user.scar.gontime - Date.now()
      )} до следующего использования автозвука. ❓`
    );

  if (message.user.sound <= 0)
    return bot(
      `у вас нет динамиков\n⏰ Приобретите в разделе "Автозвук улучшить"`
    );

  if (typeof message.user.questautosound === "number") {
    message.user.questautosound++;

    if (message.user.questautosound >= 5) {
      message.user.questautosound = true;

      await bot(
        `Поздравляем, Вы 5 раз поучаствовали в соревнованиях по автозвуку и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questautosound2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questautosound2++;

    if (message.user.questautosound2 >= 500) {
      message.user.questautosound2 = true;

      await bot(
        `Поздравляем, Вы 500 раз поучаствовали в соревнованиях по автозвуку и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  if (!message.isChat) {
    message.user.scar.gontime = Date.now() + 600000;
  } else {
    if (chats[message.chatId].statuemsglvl >= 1) {
      message.user.scar.gontime = Date.now() + 480000;
    } else {
      message.user.scar.gontime = Date.now() + 600000;
    }
  }

  if (message.user.settings.topdon) {
    message.user.scar.gontime = Date.now() + 300000;
  }

  if (message.user.settings.king) {
    message.user.scar.gontime = Date.now() + 60000;
  }

  //if(utils.random(message.user.sound/2,message.user.sound*2)<= message.user.sound){

  const rand = utils.random(1, 4);

  if (rand === 1) {
    message.user.sound = Number(Math.floor(message.user.sound * 0.9 - 1));

    message.user.balance += 30000000000000;

    return bot(
      `Ух ты! 😨\n✅ Вы успешно заняли 1 место и заработали ЦЕЛЫХ 30.000.000.000.000$, но у вас сломалось 10% оборудования! ❓\n🏪 Приобретите новое в магазине`
    );
  }

  if (rand === 2) {
    const cases = utils.pick([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);

    if (cases === 1) {
      message.user.c7++;

      message.user.sprcoin += 3;
    }

    if (cases === 1) {
      message.user.balance += 40000000000;

      message.user.soundrating += 1;

      return bot(
        `поздравляем, вы заняли первое место! 🥇\n\n💵 Заработано: 40.000.000.000$ 💰\n▫️Получен: Звуковой кубок 🏆\n🎶 +1 Автозвук кейс 📦\n+3 Spring Coin ☣️`
      );
    } else {
      message.user.balance += 50000000000;

      message.user.soundrating += 1;

      return bot(
        `поздравляем, вы заняли первое место! 🥇\n\n💵 Заработано: 50.000.000.000$ 💰\n▫️ Получен: Звуковой кубок 🏆`
      );
    }
  }

  if (rand === 3) {
    if (message.user.settings.imperator) {
      message.user.soundrating += 3;

      return bot(
        `поздравляем, вы заняли первое место! 🥇\n👑 Так как Вы император, Вы получили сразу 3 кубка`
      );
    } else {
      message.user.soundrating += 2;

      return bot(`поздравляем, вы заняли первое место и получили 2 кубка! 🥇`);
    }
  }

  if (rand === 4) {
    message.user.soundrating -= 1;

    return bot(`вы не пришли на соревнования и лишились одного кубка ❌😨`);
  }
});

oscrn(/^(?:автозвук машина)$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!message.user.autosound)
    return bot(
      `у вас нет машины для участвования в соревнаваниях по автозвуку. Приобрести по комманде "Автозвук [номер]" ${smileng}`
    );

  return bot(`ваш рейтинг: ${utils.sp(message.user.soundrating)}
🚗 ➖ Характеристики вашей машины:
™️ Название - «${autosounder[message.user.autosound - 1].name}»
🔊 Мощность - ${message.user.sound}W
${smileng}`);
});

oscrn(/^(?:топ автозвук|🏆 топ автозвук)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({
        soundrating: x.soundrating,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.soundrating - a.soundrating;
  });

  let text = ``;

  const find = () => {
    let pos = 100;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return message.send(
        "👥 В боте должно зарегистрировано не менее 10 игроков!"
      );

    const user = top[i];

    text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 🏆${utils.sp(user.soundrating)}`;
  }

  return bot(
    `топ автозвука:${text}
➖➖➖➖➖➖➖➖
➡${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(
      message.user.soundrating
    )}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ игроков",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Босс топ",
              },

              color: "negative",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:newdonate)$/i, async (message, bot) => {
  return bot(
    `раздел «Донат» 🔥💰

1️⃣👑 Император [Навсегда]
💵 Цена: 499 руб.
➖➖➖➖➖➖➖➖➖
2️⃣⚠️ VIP-статус [Навсегда]
💵 Цена: 100 руб.
➖➖➖➖➖➖➖➖➖
3️⃣💎 PREMIUM [Навсегда]
💵 Цена: 139 руб.
➖➖➖➖➖➖➖➖➖
4️⃣🎥 Бизнес «Киностудия» [Навсегда]
💵 Цена: 129 руб.
➖➖➖➖➖➖➖➖➖
5️⃣🛩️ Бизнес «Аэропорт» [Навсегда]
💵 Цена: 169 руб.
➖➖➖➖➖➖➖➖➖
6️⃣♨️ TITAN VIP [Навсегда]
💵 Цена: 349 руб.

🔹 Для покупки нужного товара нажмите на нижние кнопки или напишите «Донат [номер товара]»`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👑 Император",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "⚠️ VIP-статус",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💎 PREMIUM",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🎥 Бизнес «Киностудия»",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🛩️ Бизнес «Аэропорт»",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "♨️ TITAN VIP",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:яхты|🛥 Яхты|яхта)\s?([0-9]+)?$/i, async (message, bot) => {
  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]);

  if (!message.args[1])
    return bot(`яхты:

${message.user.transport.yacht === 1 ? "✔️" : "✖️"} 1. Ванна (10.000.000.000$)
${
  message.user.transport.yacht === 2 ? "✔️" : "✖️"
} 2. Nauticat 331 (10.000.000.000.000$)
${
  message.user.transport.yacht === 3 ? "✔️" : "✖️"
} 3. Nordhavn 56 MS (15.000.000.000.000$)
${
  message.user.transport.yacht === 4 ? "✔️" : "✖️"
} 4. Princess 60 (25.000.000.000.000$)
${
  message.user.transport.yacht === 5 ? "✔️" : "✖️"
} 5. Azimut 70 (35.000.000.000.000$)
${
  message.user.transport.yacht === 6 ? "✔️" : "✖️"
} 6. Dominator 40M (50.000.000.000.000$)
${
  message.user.transport.yacht === 7 ? "✔️" : "✖️"
} 7. Moonen 124 (60.000.000.000.000$)
${
  message.user.transport.yacht === 8 ? "✔️" : "✖️"
} 8. Wider 150 (65.000.000.000.000$)
${
  message.user.transport.yacht === 9 ? "✔️" : "✖️"
} 9. Palmer Johnson 42M SuperSport (80.000.000.000.000$)
${
  message.user.transport.yacht === 10 ? "✔️" : "✖️"
} 10. Wider 165 (85.000.000.000.000$)
${
  message.user.transport.yacht === 11 ? "✔️" : "✖️"
} 11. Eclipse (150.000.000.000.000$)
${
  message.user.transport.yacht === 12 ? "✔️" : "✖️"
} 12. Dubai (300.000.000.000.000$)
${
  message.user.transport.yacht === 13 ? "✔️" : "✖️"
} 13. Streets of Monaco (750.000.000.000.000$)

🛒 Для покупки введите «Яхта [номер]»

${smileng}`);

  const sell = yachts.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.transport.yacht)
    return bot(
      `у вас уже есть яхта (${
        yachts[message.user.transport.yacht - 1].name
      }), введите "Продать яхту"`
    );

  if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.transport.yacht = sell.id;

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
  }
});

//кнопка

oscrn(
  /^(?:самол[её]т|🛩 Самолеты|самол[её]ты)\s?([0-9]+)?$/i,
  async (message, bot) => {
    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]);

    if (!message.args[1])
      return bot(`самолеты:

${
  message.user.transport.airplane === 1 ? "✔️" : "✖️"
} 1. Параплан (100.000.000.000$)
${
  message.user.transport.airplane === 2 ? "✔️" : "✖️"
} 2. АН-2 (350.000.000.000$)
${
  message.user.transport.airplane === 3 ? "✔️" : "✖️"
} 3. Cessna-172E (700.000.000.000$)
${
  message.user.transport.airplane === 4 ? "✔️" : "✖️"
} 4. Supermarine Spitfire (1.000.000.000.000$)
${
  message.user.transport.airplane === 5 ? "✔️" : "✖️"
} 5. BRM NG-5 (1.400.000.000.000$)
${
  message.user.transport.airplane === 6 ? "✔️" : "✖️"
} 6. Cessna T210 (2.600.000.000.000$)
${
  message.user.transport.airplane === 7 ? "✔️" : "✖️"
} 7. Beechcraft 1900D (5.500.000.000.000$)
${
  message.user.transport.airplane === 8 ? "✔️" : "✖️"
} 8. Cessna 550 (8.000.000.000.000$)
${
  message.user.transport.airplane === 9 ? "✔️" : "✖️"
} 9. Hawker 4000 (22.400.000.000.000$)
${
  message.user.transport.airplane === 10 ? "✔️" : "✖️"
} 10. Learjet 31 (45.000.000.000.000$)
${
  message.user.transport.airplane === 11 ? "✔️" : "✖️"
} 11. Airbus A318 (85.000.000.000.000$)
${
  message.user.transport.airplane === 12 ? "✔️" : "✖️"
} 12. F-35A (160.000.000.000.000$)
${
  message.user.transport.airplane === 13 ? "✔️" : "✖️"
} 13. Boeing 747-430 Custom (225.000.000.000.000$)
${
  message.user.transport.airplane === 14 ? "✔️" : "✖️"
} 14. C-17A Globemaster III (350.000.000.000.000$)
${
  message.user.transport.airplane === 15 ? "✔️" : "✖️"
} 15. F-22 Raptor (400.000.000.000.000$)
${
  message.user.transport.airplane === 16 ? "✔️" : "✖️"
} 16. Airbus 380 Custom (600.000.000.000.000$)
${
  message.user.transport.airplane === 17 ? "✔️" : "✖️"
} 17. B-2 Spirit Stealth Bomber (1.359.000.000.000.000$)

🛒 Для покупки введите «Самолет [номер]»

${smileng}`);

    const sell = airplanes.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.transport.airplane)
      return bot(
        `у вас уже есть самолёт (${
          airplanes[message.user.transport.airplane - 1].name
        }), введите "Продать самолёт"`
      );

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.transport.airplane = sell.id;

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

//кнопка

oscrn(
  /^(?:вертол[её]т|🚁 Вертолеты|вертол[её]ты)\s?([0-9]+)?$/i,
  async (message, bot) => {
    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]);

    if (!message.args[1])
      return bot(`вертолеты:

${
  message.user.transport.helicopter === 1 ? "✔️" : "✖️"
} 1. Шарик с пропеллером (150.000.000.000$)
${
  message.user.transport.helicopter === 2 ? "✔️" : "✖️"
} 2. RotorWay Exec 162F (300.000.000.000$)
${
  message.user.transport.helicopter === 3 ? "✔️" : "✖️"
} 3. Robinson R44 (450.000.000.000$)
${
  message.user.transport.helicopter === 4 ? "✔️" : "✖️"
} 4. Hiller UH-12C (1.300.000.000.000$)
${
  message.user.transport.helicopter === 5 ? "✔️" : "✖️"
} 5. AW119 Koala (2.500.000.000.000$)
${
  message.user.transport.helicopter === 6 ? "✔️" : "✖️"
} 6. MBB BK 117 (4.000.000.000.000$)
${
  message.user.transport.helicopter === 7 ? "✔️" : "✖️"
} 7. Eurocopter EC130 (7.500.000.000.000$)
${
  message.user.transport.helicopter === 8 ? "✔️" : "✖️"
} 8. Leonardo AW109 Power (10.000.000.000.000$)
${
  message.user.transport.helicopter === 9 ? "✔️" : "✖️"
} 9. Sikorsky S-76 (15.000.000.000.000$)
${
  message.user.transport.helicopter === 10 ? "✔️" : "✖️"
} 10. Bell 429WLG (19.000.000.000.000$)
${
  message.user.transport.helicopter === 11 ? "✔️" : "✖️"
} 11. NHI NH90 (35.000.000.000.000$)
${
  message.user.transport.helicopter === 12 ? "✔️" : "✖️"
} 12. Kazan Mi-35M (60.000.000.000.000$)
${
  message.user.transport.helicopter === 13 ? "✔️" : "✖️"
} 13. Bell V-22 Osprey (135.000.000.000.000$)

🛒 Для покупки введите «Вертолет [номер]»

${smileng}`);

    const sell = helicopters.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.transport.helicopter)
      return bot(
        `у вас уже есть вертолёт (${
          homes[message.user.transport.helicopter - 1].name
        }), введите "Продать вертолёт"`
      );

    if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.transport.helicopter = sell.id;

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

oscrn(/^(?:Подвал)?$/i, async (message, bot) => {
  if (message.user.realty.home === 0)
    return bot(`У вас нет дома, чтобы иметь подвал! ❌`);

  if (!message.user.realty.basement)
    return bot(
      `Информация о Вашем подвале:\n\n🌐 Подвал используется для майнинга DogeCoin (DOG) 🪙\n💰 Чтобы купить подвал введите команду «Купить подвал» ❓`
    );

  if (message.user.realty.basement && message.user.misc.videocard_count < 1)
    return bot(
      `Информация о Вашем подвале:\n\n📼 У вас нет видеокарт! ❌\n❓ Покупка видеокарт: Видеокарты ☃️`
    );

  if (message.user.realty.basement && message.user.misc.videocard_count > 0) {
    const sell = videocards.find((x) => x.id === message.user.misc.videocard);

    return bot(
      `Информация о Вашем подвале:\n📼 Ваши видеокарты:\n ${sell.name} (${
        message.user.misc.videocard_count
      }шт.)\n💰 Баланс видеокарты: ${utils.sp(
        message.user.videocard_dg
      )} DOG\n🔸 Снять баланс: Видеокарта снять`
    );
  }
});

oscrn(/^(?:Видеокарта снять)$/i, async (message, bot) => {
  if (!message.user.misc.videocard) return bot(`У вас нет видеокарты ❌`);

  if (!message.user.videocard_dg)
    return bot(
      `на вашей видеокарте ничего нет, новые DogeCoin появятся скоро! ✅`
    );

  const dg_ = message.user.videocard_dg * message.user.misc.videocard_count;

  message.user.dcoins += dg_;

  message.user.videocard_dg = 0;

  return bot(
    `вы собрали ${utils.sp(
      dg_
    )} DOG, следующие появятся через час. ⌚\n🪙 Баланс DOG: ${utils.sp(
      message.user.dcoins
    )}`
  );
});

/*
oscrn(/^(?:Создать бой)\s?([^]*)$/i, async (message, bot) => {

if(message.user.settings.adm!=0 && message.user.settings.adm !=5) return bot(`Администрации запрещено играть!`);

if(!message.args[1]) return bot(`Играйте между игроками на рейтинг👑\n Создать бой [ставка]`);

if(message.user.petlim) return bot(`Учавствовать в бою можно раз в 2 минуты🙁`);

	message.args[1] = message.args[1].replace(/(\.|\,)/ig, '');

	message.args[1] = message.args[1].replace(/(к|k)/ig, '000');

	message.args[1] = message.args[1].replace(/(м|m)/ig, '000000');

	message.args[1] = message.args[1].replace(/(вабанк|вобанк|все|всё)/ig, message.user.balance);

	asd = Math.floor(Number(message.args[1]));



	if (!Number(asd)) return bot(`Введите количество рейтинга для игры🙁`);

	const btf = bitva.find(x=> x.user1 === message.user.uid);

	if(btf) return bot(`Вы уже ожидаете соперника на битву🙁 \n 💡 Чтобы игрок мог с вами сразиться он должен написать «бой ${message.user.uid}»`);

	if(!message.args[1] || message.args[1] <= 0) return bot(`Введите количество рейтинга для игры🙁`);

	if(asd > message.user.rating) return bot(`У вас нет столько рейтинга для ставки. \n ✅ У вас сейчас ${utils.sp(message.user.rating)} рейтинга🐣`);

	if(asd > 50000000) return bot(`Максимальная ставка - 50.000.000 рейтинга👑`)

	bitva.push({

		user1: message.user.uid,

		user2: 0,

		sum: asd

	});



	message.user.rating -= asd;

	return bot(`вы создали бой, ожидайте противника`); });



oscrn(/^(?:бой список)$/i, async (message, bot) => {

if(message.user.settings.adm!=0 && message.user.settings.adm !=5) return bot(`Администрации запрещено играть!`);

let text = ``;

	let sfg = [];



	bitva.map(x=> {

		sfg.push({ id: x.user1, sum: x.sum })

	})



	for(let i = 0; i < sfg.length; i++) {

		const tx = sfg[i];

		text += `👥Игрок: ${tx.id} Сумма игры: ${utils.sp(tx.sum)} рейтинга\n`

	}

	return bot(`список доступных боев: \n ${text} \n ✅ Вступить в бой: «бой [игрок]»`); });



oscrn(/^(?:бой)\s?([\d]*)$/i, async (message, bot) => {

if(message.user.settings.adm!=0 && message.user.settings.adm !=5) return bot(`Администрации запрещено играть!`);

	if(!message.args[1]) return bot(`Вы не указали ид игрока, в бой с которым хотите вступить!🙁`);

	if(message.user.petlim) return bot(`Учавствовать в бою можно раз в 2 минуты🙁`);

	const vshk = bitva.find(x=> x.user1 === Number(message.args[1]));

	if(Number(message.args[1]) === message.user.uid) return bot(`Против себя учавствовать в бою нельзя!🙁`);

	if(!vshk) return bot(`Данный игрок не участвует в бою, вы можете создать битву командой «создать бой [сумма рейтинга, на которую хотите сразиться]»🙁\n ✅ Либо посмотреть список доступных битв командой «бой список»`);

	if(message.user.rating < vshk.sum) return bot(`Недостаточно рейтинга для боя!🙁`);



	vshk.user2 = message.user.uid;



	const brand = utils.random(1, 2);

	const { createCanvas, loadImage, registerFont } = require('canvas')

	registerFont('fonts/ArialB.ttf', {

		family: 'ArialB'

	})

	const { fillTextWithTwemoji } = require('node-canvas-with-twemoji');

	const canvas = createCanvas(1280, 720);

	const ctx = canvas.getContext('2d');

	registerFont('yahfie.ttf', { family: 'Yahfie Heavy' });



	ctx.fillStyle = "#000000";

	ctx.fillRect(0, 0, 1, 1);

	ctx.fillStyle = "#FFFFFF";

	const img = await loadImage('./photo/bitvasliv.jpg');

	ctx.drawImage(img, 0, 0, 1280, 720);



	const canvs = createCanvas(1280, 720);

	const ctxx = canvs.getContext('2d');

	registerFont('yahfie.ttf', { family: 'Yahfie Heavy' });



	ctxx.fillStyle = "#000000";

	ctxx.fillRect(0, 0, 1, 1);

	ctxx.fillStyle = "#FFFFFF";

	const imgg = await loadImage('./photo/bitvawin.jpg');

	ctxx.drawImage(imgg, 0, 0, 1280, 720);



	if(brand === 1) {

		const win = users.find(x=> x.uid === vshk.user1);

		message.user.rating -= vshk.sum;

		win.rating += vshk.sum * 2;

		message.user.petlim = true;

		win.petlim = true;

		const del = bitva.findIndex(x=> x.user1 === Number(message.args[1]));

		bitva.splice(del, 1);

				vk.api.messages.send({

		chat_id: 1, forward_messages: message.id, message: `[⛔#БОЙ]
- 👤 1 ID: ${message.user.uid}
- 👤 2 ID: ${win.uid}
- 👑 Сумма: ${vshk.sum}
- ⚔️ Победил: ${win.uid}`, random_id: 0

	});

			if (message.chatId === 1 || message.chatId === 2423 || message.chatId === 394 || message.user.tema != 3) {

			bot(`Бой закончен⚔️\n 🙁 Проиграно рейтинга: ${utils.sp(vshk.sum)}👑`);

		}

		else {

		ctx.font = '80px ArialB';

		await fillTextWithTwemoji(ctx, `${utils.sp(vshk.sum)} шт. `, 500, 520);



		vk.upload

		.messagePhoto({

			source: {

			value: canvas.toBuffer(),

		}}).then(async (att) => {

		vk.api.messages.send({

			message: `Бой закончен⚔️`,

			attachment: `${att}`,

			peer_id: message.peerId,

			random_id: 0

		})

		});



		}



			if (win.tema != 3) {

			vk.api.messages.send({ user_id: win.id, message: `Бой закончен⚔️\n 💵 Выиграно рейтинга: ${utils.sp(vshk.sum)}👑`, random_id: 0 });

		}

		else {

		ctxx.font = '80px ArialB';

		await fillTextWithTwemoji(ctxx, `${utils.sp(vshk.sum)} шт. `, 500, 520);



		vk.upload

		.messagePhoto({

			source: {

			value: canvs.toBuffer(),

		}}).then(async (att) => {

		vk.api.messages.send({

			message: `Бой закончен⚔️`,

			attachment: `${att}`,

			peer_id: win.id,

			random_id: 0

		})

		});

		}

		return;

	}

	if(brand === 2) {

		const lose = users.find(x=> x.uid === vshk.user1);

		message.user.rating += vshk.sum;

		message.user.petlim = true;

		lose.petlim = true;

		const del = bitva.findIndex(x=> x.user1 === Number(message.args[1]));

		bitva.splice(del, 1);

							vk.api.messages.send({

		chat_id: 1, forward_messages: message.id, message: `[⛔#БОЙ]
- 👤 1 ID: ${message.user.uid}
- 👤 2 ID: ${lose.uid}
- 👑 Сумма: ${vshk.sum}
- ⚔️ Победил: ${message.user.uid}`, random_id: 0

	});

if (message.chatId === 1 || message.chatId === 2423 || message.chatId === 394 || message.user.tema != 3) {

			bot(`Бой закончен⚔️\n 💵 Выиграно рейтинга: ${utils.sp(vshk.sum)}👑`);

		}

		else {

		ctxx.font = '80px ArialB';

		await fillTextWithTwemoji(ctxx, `${utils.sp(vshk.sum)} шт. `, 500, 520);



		vk.upload

		.messagePhoto({

			source: {

			value: canvs.toBuffer(),

		}}).then(async (att) => {

		vk.api.messages.send({

			message: `Бой закончен⚔️`,

			attachment: `${att}`,

			peer_id: message.peerId,

			random_id: 0

		})

		});

		}



			if (lose.tema != 3) {

			vk.api.messages.send({ user_id: lose.id, message: `Бой закончен⚔️\n 🙁 Проиграно рейтинга: ${utils.sp(vshk.sum)}👑`, random_id: 0 });

		} else {

		ctx.font = '80px ArialB';

		await fillTextWithTwemoji(ctx, `${utils.sp(vshk.sum)} шт. `, 500, 520);



		vk.upload

		.messagePhoto({

			source: {

			value: canvas.toBuffer(),

		}}).then(async (att) => {

		vk.api.messages.send({

			message: `Бой закончен⚔️`,

			attachment: `${att}`,

			peer_id: lose.id,

			random_id: 0

		})

		});

		}

		return;

} });

*/
oscrn(/^(?:дом|🏡 Дома|дома)\s?([0-9]+)?$/i, async (message, bot) => {
  if (message.user.realty.home !== 0 && !message.user.realty.basement) {
    return bot(
      `Информация о Вашем доме:\n\n🏡 Дом: «${
        homes[message.user.realty.home - 1].name
      }»\n▶️ Чтобы начать майнить DogeCoin, для начала нужно купить подвал!\n🔰 Цена подвала: 100 SpringCoins ☣️`
    );
  }

  if (message.user.realty.home !== 0 && message.user.realty.basement) {
    return bot(
      `Информация о Вашем доме:\n\n🏡 Дом: «${
        homes[message.user.realty.home - 1].name
      }»\n▶️ Подвал: установлен`
    );
  }

  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]);

  if (!message.args[1] && message.user.realty.home === 0)
    return bot(`дома:

${
  message.user.realty.home === 1 ? "✔️" : "✖️"
} 1. Деревенский домик (${utils.sp(
      homes.find((x) => x.id === Number(1)).cost
    )}$)
${message.user.realty.home === 2 ? "✔️" : "✖️"} 2. Маленький домик (${utils.sp(
      homes.find((x) => x.id === Number(2)).cost
    )}$)
${
  message.user.realty.home === 3 ? "✔️" : "✖️"
} 3. Особняк в центре города (${utils.sp(
      homes.find((x) => x.id === Number(3)).cost
    )}$)
${message.user.realty.home === 4 ? "✔️" : "✖️"} 4. Загородный дом (${utils.sp(
      homes.find((x) => x.id === Number(4)).cost
    )}$)
${message.user.realty.home === 5 ? "✔️" : "✖️"} 5. Дом Тима Кука (${utils.sp(
      homes.find((x) => x.id === Number(5)).cost
    )}$)

🛒Для покупки введите «Дом [номер]» `);

  const sell = homes.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.realty.home)
    return bot(
      `у вас уже есть дом (${
        homes[message.user.realty.home - 1].name
      }), введите "Продать дом"`
    );

  if (message.user.balance < sell.cost) return bot(`недостаточно денег`);
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.realty.home = sell.id;

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
  }
});

oscrn(
  /^(?:квартира|🌇 Квартиры|квартиры)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(`квартиры:

${message.user.realty.apartment === 1 ? "✔️" : "✖️"} 1. Чердак (${utils.sp(
        apartments.find((x) => x.id === Number(1)).cost
      )}$)
${
  message.user.realty.apartment === 2 ? "✔️" : "✖️"
} 2. Квартира в общежитии (${utils.sp(
        apartments.find((x) => x.id === Number(2)).cost
      )}$)
${
  message.user.realty.apartment === 3 ? "✔️" : "✖️"
} 3. Однокомнатная квартира (${utils.sp(
        apartments.find((x) => x.id === Number(3)).cost
      )}$)
${
  message.user.realty.apartment === 4 ? "✔️" : "✖️"
} 4. Двухкомнатная квартира (${utils.sp(
        apartments.find((x) => x.id === Number(4)).cost
      )}$)
${
  message.user.realty.apartment === 5 ? "✔️" : "✖️"
} 5. Четырехкомнатная квартира (${utils.sp(
        apartments.find((x) => x.id === Number(5)).cost
      )}$)
${
  message.user.realty.apartment === 6 ? "✔️" : "✖️"
} 6. Квартира в центре Москвы (${utils.sp(
        apartments.find((x) => x.id === Number(6)).cost
      )}$)
${
  message.user.realty.apartment === 7 ? "✔️" : "✖️"
} 7. Двухуровневая квартира (${utils.sp(
        apartments.find((x) => x.id === Number(7)).cost
      )}$)
${
  message.user.realty.apartment === 8 ? "✔️" : "✖️"
} 8. Квартира с Евроремонтом (${utils.sp(
        apartments.find((x) => x.id === Number(8)).cost
      )}$)

🛒 Для покупки введите «Квартира [номер]»`);

    const sell = apartments.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.realty.apartment)
      return bot(
        `у вас уже есть квартира (${
          apartments[message.user.realty.apartment - 1].name
        }), чтобы её продать введите «Продать квартиру»`
      );

    if (message.user.balance < sell.cost)
      return bot(
        `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
          message.user.balance
        )}$ 💵`
      );
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.realty.apartment = sell.id;

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

//кнопка

oscrn(/^(?:фермы|🔋 Фермы)\s?([0-9]+)?\s?(.*)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`Майнинг фермы:

${message.user.misc.farm === 1 ? "✔️" : "✖️"} 1. 7U Nvidia 1₿/час (${utils.sp(
      farms.find((x) => x.id === Number(1)).cost
    )}$)
${message.user.misc.farm === 2 ? "✔️" : "✖️"} 2. AntminerS9 10₿/час (${utils.sp(
      farms.find((x) => x.id === Number(2)).cost
    )}$)
${
  message.user.misc.farm === 3 ? "✔️" : "✖️"
} 3. FM2020-BT400 100₿/час (${utils.sp(
      farms.find((x) => x.id === Number(3)).cost
    )}$)
${
  message.user.misc.farm === 4 ? "✔️" : "✖️"
} 4. Gеnеsis Mining 1.000₿/час (${utils.sp(
      farms.find((x) => x.id === Number(4)).cost
    )}$)
${
  message.user.misc.farm === 5 ? "✔️" : "✖️"
} 5. GigaWatt 20.000₿/час (${utils.sp(
      farms.find((x) => x.id === Number(5)).cost
    )}$)
${
  message.user.misc.farm === 6 ? "✔️" : "✖️"
} 6. TerraEngine 100.000₿/час (${utils.sp(
      farms.find((x) => x.id === Number(6)).cost
    )}$)
${
  message.user.misc.farm === 7 ? "✔️" : "✖️"
} 7. YotaMiner 200.000₿/час (${utils.sp(
      farms.find((x) => x.id === Number(7)).cost
    )}$)

🛒 Для покупки введите «Фермы [номер] [количество]»`);

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  const sell = farms.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  const count = Math.floor(message.args[2] ? Number(message.args[2]) : 1);

  if (count <= 0) return bot(`Вы указали кол-во ферм меньше 1-го ❌`);

  if (message.args[1] < 1 || message.args[1] >= 8)
    return bot("Неверный номер ферм.");

  if (!message.user.settings.imperator) {
    if (count + message.user.misc.farm_count > message.user.limit.farmlimit)
      return bot(
        `вы не можете иметь больше ${message.user.limit.farmlimit}шт. ферм одновременно ❌`
      );
  } else {
    if (count + message.user.misc.farm_count > 1000000) {
      if (count + message.user.misc.farm_count > message.user.limit.farmlimit)
        return bot(
          `вы не можете иметь больше ${message.user.limit.farmlimit}шт. ферм одновременно ❌`
        );
    }
  }

  if (
    message.user.misc.farm !== 0 &&
    message.user.misc.farm !== message.args[1]
  )
    return bot(`вы не можете купить ферму другого типа! 😨`);

  if (message.user.balance < sell.cost * count)
    return bot(
      `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
        message.user.balance
      )}$ 💵`
    );
  else if (message.user.balance >= sell.cost * count) {
    message.user.balance -= sell.cost * count;

    message.user.misc.farm = sell.id;

    message.user.misc.farm_count += count;

    return bot(
      `вы купили «${sell.name}» (${count} шт.) за ${utils.sp(
        sell.cost * count
      )}$`
    );
  }
});

oscrn(
  /^(?:видеокарты|🔋 видеокарты)\s?([0-9]+)?\s?(.*)?$/i,
  async (message, bot) => {
    if (message.user.realty.home === 0) return bot(`у Вас нет дома! ❌`);

    if (!message.user.realty.basement) return bot(`у Вас нет подвала! ❌`);

    if (!message.args[1])
      return bot(`Майнинг видеокарты:

${
  message.user.misc.videocard === 1 ? "✔️" : "✖️"
} 1. MSI Radeon R7360 OC (2.000.000.000 DogeCoins/час) (100 SpringCoins)
${
  message.user.misc.videocard === 2 ? "✔️" : "✖️"
} 2. GIGABYTE GeForce GTV 750 Ti (100.000.000.000 DogeCoins/час) (250 SpringCoins)
${
  message.user.misc.videocard === 3 ? "✔️" : "✖️"
} 3. Gigabyte GeForce GTX 1080 (500.000.000.000 DogeCoins/час) (500 SpringCoins)

🛒 Для покупки введите «Видеокарты [номер] [количество]»`);

    const sell = videocards.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    const count = Math.floor(message.args[2] ? Number(message.args[2]) : 1);

    if (count <= 0) return bot(`Вы указали кол-во видеокарт меньше 1-го ❌`);

    if (message.args[1] < 1 || message.args[1] >= 4)
      return bot("😒 Неверный номер видеокарты.");

    if (
      count + message.user.misc.videocard_count >
      message.user.limit.videocardlimit
    )
      return bot(
        `вы не можете иметь больше ${message.user.limit.videocardlimit}шт. видеокарт одновременно ❌`
      );

    if (
      message.user.misc.videocard !== 0 &&
      message.user.misc.videocard !== message.args[1]
    )
      return bot(`вы не можете купить видеокарту другого типа! ❌`);

    if (message.user.sprcoin < sell.cost * count)
      return bot(`недостаточно SpringCoins ❌`);
    else if (message.user.sprcoin >= sell.cost * count) {
      message.user.sprcoin -= sell.cost * count;

      message.user.misc.videocard = sell.id;

      message.user.misc.videocard_count += count;

      return bot(
        `вы купили «${sell.name}» (${count} шт.) за ${utils.sp(
          sell.cost * count
        )} SpringCoins ☣️`
      );
    }
  }
);

oscrn(
  /^(?:телефон|📱 Телефоны|телефоны)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(`телефоны:

${message.user.misc.phone === 1 ? "✔️" : "✖️"} 1. Nokia 108 (${utils.sp(
        phones.find((x) => x.id === Number(1)).cost
      )}$)
${message.user.misc.phone === 2 ? "✔️" : "✖️"} 2. Nokia 3310 (${utils.sp(
        phones.find((x) => x.id === Number(2)).cost
      )}$)
${message.user.misc.phone === 3 ? "✔️" : "✖️"} 3. BQ Aquaris M5 (${utils.sp(
        phones.find((x) => x.id === Number(3)).cost
      )}$)
${message.user.misc.phone === 4 ? "✔️" : "✖️"} 4. ASUS ZenFone 4 (${utils.sp(
        phones.find((x) => x.id === Number(4)).cost
      )}$)
${
  message.user.misc.phone === 5 ? "✔️" : "✖️"
} 5. Samsung Galaxy S11 (${utils.sp(
        phones.find((x) => x.id === Number(5)).cost
      )}$)
${message.user.misc.phone === 6 ? "✔️" : "✖️"} 6. Escobar Fold 1 (${utils.sp(
        phones.find((x) => x.id === Number(6)).cost
      )}$)
${message.user.misc.phone === 7 ? "✔️" : "✖️"} 7. iPhone 11 Pro Max (${utils.sp(
        phones.find((x) => x.id === Number(7)).cost
      )}$)
${
  message.user.misc.phone === 8 ? "✔️" : "✖️"
} 8. Xiaomi Mi Mix Alpha (${utils.sp(
        phones.find((x) => x.id === Number(8)).cost
      )}$)
${
  message.user.misc.phone === 9 ? "✔️" : "✖️"
} 9. Samsung Galaxy S50+ (${utils.sp(
        phones.find((x) => x.id === Number(9)).cost
      )}$)

🛒 Для покупки введите «Телефоны [номер]»`);

    const sell = phones.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.misc.phone)
      return bot(
        `у Вас уже есть телефон «${
          phones[message.user.misc.phone - 1].name
        }» ❌\nЧтобы его продать, введите «Продать телефон»`
      );

    if (message.user.balance < sell.cost)
      return bot(
        `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
          message.user.balance
        )}$ 💵`
      );
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.misc.phone = sell.id;

      message.user.procent.phone = utils.random(50, 100);

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

//кнопка

oscrn(/^(?:часы|⌚ Часы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`часы:

${message.user.misc.clock === 1 ? "✔️" : "✖️"} 1. DKNY NY2342 (150.000.000$)
${
  message.user.misc.clock === 2 ? "✔️" : "✖️"
} 2. Earnshaw ES-8001-03 (2017) (600.000.000$)
${message.user.misc.clock === 3 ? "✔️" : "✖️"} 3. Orient ER27005W (114.000.000$)
${
  message.user.misc.clock === 4 ? "✔️" : "✖️"
} 4. Armani Exchange AX2104 (325.000.000$)
${
  message.user.misc.clock === 5 ? "✔️" : "✖️"
} 5. Swiss Military Hanowa  06-3308.04.007 (750.000.000$)
${
  message.user.misc.clock === 6 ? "✔️" : "✖️"
} 6. Calvin Klein K3M2212Z (900.000.000$)
${
  message.user.misc.clock === 7 ? "✔️" : "✖️"
} 7. Bomberg NS44CHSP.0098.3 (1.300.000.000$)
${
  message.user.misc.clock === 8 ? "✔️" : "✖️"
} 8. Armani Exchange AX2900 (2.225.000.000$)
${
  message.user.misc.clock === 9 ? "✔️" : "✖️"
} 9. Wainer WA. 10000-A (3.440.000.000$)

🛒 Для покупки введите «Часы [номер]»`);

  const sell = clocks.find((x) => x.id === Number(message.args[1]));

  if (!sell) return;

  if (message.user.misc.clock)
    return bot(
      `у Вас уже есть часы «${
        clocks[message.user.misc.clock - 1].name
      }» ❌\nЧтобы их продать, введите «Продать часы»`
    );

  if (message.user.balance < sell.cost)
    return bot(
      `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
        message.user.balance
      )}$ 💵`
    );
  else if (message.user.balance >= sell.cost) {
    message.user.balance -= sell.cost;

    message.user.misc.clock = sell.id;

    message.user.procent.clock = utils.random(1, 100);

    return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
  }
});

//кнопка

oscrn(
  /^(?:компьютер|🖥 Компьютеры|компьютеры)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(`компьютеры:

${message.user.misc.computer === 1 ? "✔️" : "✖️"} 1. DЕXР Аquilоn О175 (10.000$)
${message.user.misc.computer === 2 ? "✔️" : "✖️"} 2. HYРЕRРС NЕО (500.000$)
${
  message.user.misc.computer === 3 ? "✔️" : "✖️"
} 3. DЕLL Аliеnwаrе Аurоrа R7 (1.000.000$)
${
  message.user.misc.computer === 4 ? "✔️" : "✖️"
} 4. HYРЕRРС СОSMОS X 3 (3.000.000$)
${
  message.user.misc.computer === 5 ? "✔️" : "✖️"
} 5. HYРЕRРС РRЕMIUM (5.000.000$)

🛒 Для покупки введите «Компьютер [номер]»`);

    const sell = computers.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.misc.computer)
      return bot(
        `у Вас уже есть компьютер «${
          computers[message.user.misc.computer - 1].name
        }» ❌\nЧтобы его продать, введите «Продать компьютер»`
      );

    if (message.user.balance < sell.cost)
      return bot(
        `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
          message.user.balance
        )}$ 💵`
      );
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.misc.computer = sell.id;

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

oscrn(
  /^(?:Инструменты|🔧Инструменты|🔧 Инструменты)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(`Инструменты:

${message.user.minertool === 1 ? "✔️" : "✖️"} 1. Деревянная кирка (${utils.sp(
        minertool.find((x) => x.id === Number(1)).cost
      )}$)
${message.user.minertool === 2 ? "✔️" : "✖️"} 2. Стальная кирка (${utils.sp(
        minertool.find((x) => x.id === Number(2)).cost
      )}$)
${message.user.minertool === 3 ? "✔️" : "✖️"} 3. Буровая установка (${utils.sp(
        minertool.find((x) => x.id === Number(3)).cost
      )}$)
${message.user.minertool === 4 ? "✔️" : "✖️"} 4. Адронный коллайдер (${utils.sp(
        minertool.find((x) => x.id === Number(4)).cost
      )}$)
${message.user.minertool === 5 ? "✔️" : "✖️"} 5. Разрушитель частиц (${utils.sp(
        minertool.find((x) => x.id === Number(5)).cost
      )}$)

🛒 Для покупки введите «Инструменты [номер]»`);

    const sell = minertool.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.minertool)
      return bot(
        `у Вас уже есть «${
          minertool[message.user.minertool - 1].name
        }» ❌\n Чтобы его продать, введите «Продать инструмент»`
      );

    if (message.user.balance < sell.cost)
      return bot(
        `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
          message.user.balance
        )}$ 💵`
      );
    else if (message.user.balance >= sell.cost) {
      message.user.balance -= sell.cost;

      message.user.minertool = sell.id;

      return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
    }
  }
);

oscrn(/^(?:🍹 Напитки|Напитки)$/i, async (message, bot) => {
  return bot(`Напитки:

🔸 1. Чай (2 листика)
🔸 2. Кофе (12 листиков)
🔸 3. Энергетик (26 листиков)
🔸 4. Отвар трав (56 листиков)
🔸 5. Черная жидкость (120 листиков)
🔸 6. Капля зелья энергии (150 листиков)
🔸 7. Истинное зелье энергии (2000 листиков)

🛒 Для покупки введите «Напитки [номер]»`);
});

oscrn(/^(?:Напитки|🍹 напитки)\s?([0-9]+)?$/i, async (message, bot) => {
  if (message.args[1] === 1) {
    if (message.user.leaf < 2) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 2;

    message.user.energy += 1;

    return bot(
      `вы успешно купили напиток «Чай» за 2 листика и восстановили 1 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 1",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 2) {
    if (message.user.leaf < 12) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 12;

    message.user.energy += 5;

    return bot(
      `вы успешно купили напиток «Кофе» за 12 листиков и восстановили 5 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 2",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 3) {
    if (message.user.leaf < 26) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 26;

    message.user.energy += 10;

    return bot(
      `вы успешно купили напиток «Энергетик» за 26 листиков и восстановили 10 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 3",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 4) {
    if (message.user.leaf < 56) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 56;

    message.user.energy += 20;

    return bot(
      `вы успешно купили напиток «Отвар трав» за 56 листиков и восстановили 20 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 4",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 5) {
    if (message.user.leaf < 120) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 120;

    message.user.energy += 40;

    return bot(
      `вы успешно купили напиток «Чёрную жидкость» за 120 листиков и восстановили 40 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 5",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 6) {
    if (message.user.leaf < 150) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 150;

    message.user.energy += 50;

    return bot(
      `вы успешно купили напиток «Капля зелья» за 150 листиков и восстановили 50 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 6",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 7) {
    if (message.user.leaf < 2000) return bot(`недостаточно листиков! 🍃`);

    message.user.leaf -= 2000;

    message.user.energy += 500;

    return bot(
      `вы успешно купили напиток «Зелье» за 2000 листиков и восстановили 500 энерг. ⚡`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "🍹 Напитки 7",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  return bot("неправильный номер напитка. 🍹");
});

oscrn(/^(?:Напитки)\s?([0-9]+)?\s?([0-9]+)?$/i, async (message, bot) => {
  if (message.user.uid !== 0) return;

  if (message.args[1] === 1) {
    if (message.user.leaf < 2 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 2 * message.args[2];

    message.user.energy += 1 * message.args[2];

    return bot(
      `вы купили Чай за ${2 * message.args[2]} листик  и восстановили ${
        1 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 1",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 2) {
    if (message.user.leaf < 12 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 12 * message.args[2];

    message.user.energy += 5 * message.args[2];

    return bot(
      `вы купили Чай за ${12 * message.args[2]} листиков(-а) и восстановили ${
        5 * message.args[2]
      } энергии(-ю)`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 2",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 3) {
    if (message.user.leaf < 26 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 26 * message.args[2];

    message.user.energy += 10 * message.args[2];

    return bot(
      `вы купили Чай за ${26 * message.args[2]} листик  и восстановили ${
        10 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 3",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 4) {
    if (message.user.leaf < 56 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 56 * message.args[2];

    message.user.energy += 20 * message.args[2];

    return bot(
      `вы купили Чай за ${56 * message.args[2]} листик  и восстановили ${
        20 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 4",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 5) {
    if (message.user.leaf < 120 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 120 * message.args[2];

    message.user.energy += 40 * message.args[2];

    return bot(
      `вы купили Чай за ${120 * message.args[2]} листик  и восстановили ${
        40 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 5",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 6) {
    if (message.user.leaf < 150 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 150 * message.args[2];

    message.user.energy += 50 * message.args[2];

    return bot(
      `вы купили Чай за ${150 * message.args[2]} листик  и восстановили ${
        50 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 6",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.args[1] === 7) {
    if (message.user.leaf < 2000 * message.args[2])
      return bot(`недостаточно листиков`);

    message.user.leaf -= 2000 * message.args[2];

    message.user.energy += 500 * message.args[2];

    return bot(
      `вы купили Чай за ${2000 * message.args[2]} листик  и восстановили ${
        500 * message.args[2]
      } энергию`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "5"}',

                  label: "Напитки 7",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  return bot("Неверный номер напитка.");
});

oscrn(/^(?:рейтинг)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/([кk])/gi, "000");

  message.args[1] = message.args[1].replace(/[мm]/gi, "000000");

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.args[1] <= 0) return;

  if (message.args[1] * 700000000 > message.user.balance)
    return bot(`у вас недостаточно денег`);
  else if (message.args[1] * 700000000 <= message.user.balance) {
    message.user.balance -= message.args[1] * 700000000;

    message.user.rating += message.args[1];

    return bot(
      `вы успешно повысили свой рейтинг на ${utils.sp(
        message.args[1]
      )}ед. 👑 за ${utils.sp(
        message.args[1] * 700000000
      )}$\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$`
    );
  }
});

//кнопка

oscrn(/^(?:бизнесы|💼 Бизнесы)\s?([0-9]+)?$/i, async (message, bot) => {
  if (!message.args[1])
    return bot(`бизнесы:

1️⃣ 🌯 Шаурмечная - ${utils.sp(businesses[1][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 500.000$/час

2️⃣ 🔺 Ларёк - ${utils.sp(businesses[2][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 3.000.000$/час

3️⃣ 🛒 Забегаловка - ${utils.sp(businesses[3][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 18.000.000$/час

4️⃣ 🏪 Мини-магазин - ${utils.sp(businesses[4][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 96.000.000$/час

5️⃣ 🏭 Завод в гараже - ${utils.sp(businesses[5][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 576.000.000$/час

6️⃣ 🏗 Угольная шахта - ${utils.sp(businesses[6][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 3.456.000.000$/час

7️⃣ 🗄 Маленький офис - ${utils.sp(businesses[7][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 22.500.000.000$/час

8️⃣ 🎮 Любительский GameDev - ${utils.sp(businesses[8][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 200.000.000.000$/час

9️⃣ 🛢 Нефтевышка - ${utils.sp(businesses[9][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 900.000.000.000$/час

1️⃣0️⃣ ⛽ Мини АЭС - ${utils.sp(businesses[10][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 2.400.000.000.000$/час

1️⃣1️⃣ 🚀 Космическое агентство - ${utils.sp(businesses[11][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 20.000.000.000.000$/час

1️⃣2️⃣ 🌐 Межпланетный экспресс - ${utils.sp(businesses[12][0].cost)}$
⠀ ⠀ ⠀ 💵 Прибыль: 100.000.000.000.000$/час

Для покупки введите «Бизнесы [номер бизнеса]»`);

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (message.user.settings.busi === true) {
    if (message.user.business.length >= 5)
      return bot(`Максимум можно иметь 5 бизнесов`);
  } else {
    if (message.user.business.length >= 4)
      return bot(`Максимум можно иметь 4 бизнеса`);
  }

  if (message.args[1] < 1 || message.args[1] >= 13)
    return bot("Неверный номер бизнеса.");

  message.args[1] = Number(message.args[1]) - 1;

  const sell = businesses[message.args[1]][0];

  if (sell == null) return;

  if (message.user.balance < sell.cost)
    return bot(
      `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
        message.user.balance
      )}$ 💵`
    );

  message.user.balance -= sell.cost;

  message.user.business.push({
    id: message.args[1] + 1,

    upgrade: 1,

    workers: 1,

    moneys: 0,
  });

  return bot(`вы купили «${sell.name}» за ${utils.sp(sell.cost)}$`);
});

oscrn(/^(?:энергия)$/i, async (message, bot) => {
  return bot(`ваша энергия: ${utils.sp(message.user.energy)} ⚡`);
});

oscrn(/^(?:биткоин)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = message.args[1].replace(
    /(вабанк|вобанк|все|всё)/gi,
    Math.floor(Number(message.user.balance / btc))
  );

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (message.args[1] <= 0) return;

  if (message.args[1] * btc > message.user.balance)
    return bot(
      `у Вас недостаточно денег! ❌\n\n💰 Ваш баланс: ${utils.sp(
        message.user.balance
      )}$ 💵\n🌐 Курс биткоина: ${btc}$`
    );
  else if (message.args[1] * btc <= message.user.balance) {
    message.user.balance -= message.args[1] * btc;

    message.user.btc += message.args[1];

    return bot(
      `вы купили ${utils.sp(message.args[1])} биткоинов за ${utils.sp(
        message.args[1] * btc
      )}$`
    );
  }
});

oscrn(/^(?:👥 Топ игроков|Топ SpringCoin|топ)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({
        sprcoin: x.sprcoin,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.sprcoin - a.sprcoin;
  });

  let text = ``;

  const find = () => {
    let pos = 1000;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return bot("в боте должно быть зарегистрировано минимум 10 игроков! 👥");

    const user = top[i];

    text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — ☣${utils.sp(user.sprcoin)}`;
  }

  return bot(
    `топ игроков по SpringCoin ☣️${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — ☣${utils.sp(
      message.user.sprcoin
    )}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

//кнопка

oscrn(
  /^(?:топ рейтинг|🏆 топ рейтинг|🏆 Топ игроков)$/i,
  async (message, bot) => {
    let top = [];

    users
      .filter((x) => x.bantop === false)
      .map((x) => {
        top.push({
          balance: x.balance,
          rating: x.rating,
          tag: x.tag,
          id: x.id,
          mention: x.mention,
        });
      });

    top.sort((a, b) => {
      return b.rating - a.rating;
    });

    let text = ``;

    const find = () => {
      let pos = 1000;

      for (let i = 0; i < top.length; i++) {
        if (top[i].id === message.senderId) return (pos = i);
      }

      return pos;
    };

    for (let i = 0; i < 10; i++) {
      if (!top[i])
        return bot(
          "в боте должно быть зарегистрировано минимум 10 игроков! 👥"
        );

      const user = top[i];

      text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
        user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
      } — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}`;
    }

    return bot(
      `топ игроков:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(
        message.user.rating
      )} | $${utils.rn(message.user.balance)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🔅 Топ реферал",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏆 Топ рейтинг",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "👥 Топ игроков",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🌐 Топ биткоины",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "〽️ Топ опыт",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏎️ Топ гонщиков",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💰 Топ баланс",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💌 Топ сообщения",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:топ баланс|💰 Топ баланс)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({
        balance: x.balance,
        rating: x.rating,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.balance - a.balance;
  });

  let text = ``;

  const find = () => {
    let pos = 1000;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return bot("в боте должно быть зарегистрировано минимум 10 игроков! 👥");

    const user = top[i];

    text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 👑${utils.sp(user.rating)} | $${utils.rn(user.balance)}`;
  }

  return bot(
    `топ игроков:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(
      message.user.rating
    )} | $${utils.rn(message.user.balance)}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:топ реферал|🔅 топ реферал|топ реф)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({
        refcount: x.refcount,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.refcount - a.refcount;
  });

  let text = ``;

  const find = () => {
    let pos = 1000;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return bot("в боте должно быть зарегистрировано минимум 10 игроков! 👥");

    const user = top[i];

    text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 👑${utils.sp(user.refcount)}`;
  }

  return bot(
    `топ по рефералам:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(
      message.user.refcount
    )}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(
  /^(?:🌐 топ (btc|биткоины)|топ биткоины|топ btc)$/i,
  async (message, bot) => {
    let top = [];

    users
      .filter((x) => x.bantop === false)
      .map((x) => {
        top.push({
          btc: x.btc,
          rating: x.rating,
          tag: x.tag,
          id: x.id,
          mention: x.mention,
        });
      });

    top.sort((a, b) => {
      return b.btc - a.btc;
    });

    let text = ``;

    const find = () => {
      let pos = 1000;

      for (let i = 0; i < top.length; i++) {
        if (top[i].id === message.senderId) return (pos = i);
      }

      return pos;
    };

    for (let i = 0; i < 10; i++) {
      if (!top[i])
        return bot(
          "в боте должно быть зарегистрировано минимум 10 игроков! 👥"
        );

      const user = top[i];

      text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
        user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
      } — 👑${utils.sp(user.rating)} | 🌐 BTC - ${utils.rn(user.btc)}`;
    }

    return bot(
      `топ по биткоинам:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — 👑${utils.sp(
        message.user.rating
      )} | 🌐 BTC - ${utils.rn(message.user.btc)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🔅 Топ реферал",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏆 Топ рейтинг",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "👥 Топ игроков",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🌐 Топ биткоины",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "〽️ Топ опыт",
                },

                color: "default",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🏎️ Топ гонщиков",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💰 Топ баланс",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "💌 Топ сообщения",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:топ опыт|〽️ топ опыт)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({
        balance: x.balance,
        opit: x.opit,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.opit - a.opit;
  });

  let text = ``;

  const find = () => {
    let pos = 1000;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return bot("в боте должно быть зарегистрировано минимум 10 игроков! 👥");

    const user = top[i];

    text += `\n${i === 9 ? `🔟` : `${i + 1}⃣`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 🏆${utils.sp(user.opit)} | $${utils.rn(user.balance)}`;
  }

  return bot(
    `топ игроков:${text}
		➖➖➖➖➖➖➖➖
	${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(
      message.user.opit
    )} | $${utils.rn(message.user.balance)}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(
  /^(?:Подарок|🌟 Подарок|🎁 Забрать подарок|@club228105719 🌟 Подарок)$/i,
  async (message, bot) => {
    if (chats[4].podarok === undefined) {
      chats[4].podarok = 3600000;
    }

    let user = users.find((x) => x.uid === botinfo.podarok);

    if (!message.isChat)
      return message.send(`🎁 @id${message.user.id} (${message.user.tag}), подарок можно получить только в нашей официальной беседе!
📩 Беседа: `);

    if (message.chatId !== 3)
      return message.send(`🎁 @id${message.user.id} (${message.user.tag}), подарок можно получить только в нашей официальной беседе!
📩 Беседа: `);

    if (chats[3].podarok > Date.now())
      return bot(`Подождите немного! 💡

⌛ Следующий подарок через: ${unixStampLeft(chats[3].podarok - Date.now())}
📥 Предыдущий подарок забрал игрок ${
        user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
      } (🆔: ${user.uid})`);

    //if(message.chatId !== 189) return bot(`команда работает только в беседе бота!\nhttps://vk.me/join/AJQ1d_kephcNPgijDYxivETu`);

    chats[3].podarok = Date.now() + 1800000;

    botinfo.podarok = message.user.uid;

    if (message.isChat) {
      setTimeout(() => {
        message.send({ sticker_id: 74276 });

        vk.api.messages.send({
          chat_id: 3,
          random_id: 0,
          message: `▶️ Подарок снова доступен для открытия! @all`,

          keyboard: JSON.stringify({
            inline: true,
            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: "{}",
                    label: "🎁 Забрать подарок",
                  },
                  color: "default",
                },
              ],
            ],
          }),
        });
      }, 1800000);
    }

    let prize = utils.pick([1, 1, 2, 2, 3, 3, 4, 4, 5]);

    if (prize === 1) {
      let denga = utils.random(100000000000, 700000000000);

      message.user.balance += denga;

      return message.send(`🎁 @id${message.user.id} (${
        message.user.tag
      }), вы открыли подарок! С него Вам выпало ${utils.sp(denga)}$

💡 Узнать свой баланс: «баланс»`);
    }

    if (prize === 2) {
      let rate = utils.random(5000, 15000);

      message.user.rating += rate;

      return message.send(`🎁 @id${message.user.id} (${
        message.user.tag
      }), вы открыли подарок! С него Вам выпало ${utils.sp(rate)} 👑

💡 Узнать свой рейтинг: «рейтинг»`);
    }

    if (prize === 3) {
      let bitc = utils.random(1000000, 10000000);

      message.user.btc += bitc;

      return message.send(`🎁 @id${message.user.id} (${
        message.user.tag
      }), вы открыли подарок! С него Вам выпало ${utils.sp(bitc)} биткоинов 💾

💡 Узнать свои биткоины: «биткоины»`);
    }

    if (prize === 4) {
      let dc = utils.random(1, 3);

      message.user.c3 += dc;

      return message.send(`🎁 @id${message.user.id} (${
        message.user.tag
      }), вы открыли подарок! С него Вам выпало ${utils.sp(dc)} донат-кейсов 📦

💡 Открыть данные кейсы: «Кейс открыть 3»`);
    }

    if (prize === 5) {
      let rubl = utils.random(1, 5);

      message.user.rubli += rubl;

      return message.send(`🎁 @id${message.user.id} (${
        message.user.tag
      }), вы открыли подарок! С него Вам выпало ${utils.sp(
        rubl
      )} донат-рублей! 💸

💡 На рубли можно купить донат, по команде: «донат»`);
    }
  }
);

//кнопка

oscrn(/^(?:бонус|🎁 Бонус|@club228105719 🎁 Бонус)$/i, async (message, bot) => {
  if (message.user.timers.bonus >= Date.now())
    return bot(
      `бонус можно будет получить через ${unixStampLefta(
        message.user.timers.bonus - Date.now()
      )} ☃️`
    );

  let randbal = utils.random(50000000, 50000000000);

  let randrating = utils.random(5, 1000);

  let randbank = utils.random(10000000, 5000000000);

  let randbtc = utils.random(10000, 1000000);

  let randbil = utils.random(1, 3);

  message.user.timers.bonus = Date.now() + 86400000;

  let prize = utils.random(1, 5);

  if (prize === 1) {
    message.user.balance += randbal;

    return bot(`Вы выиграли ${utils.sp(randbal)}$ 💵`);
  }

  if (prize === 2) {
    message.user.rating += randrating;

    return bot(
      `Вы выиграли ${utils.sp(randrating)}👑!\n👑 Рейтинг: ${utils.sp(
        message.user.rating
      )}`
    );
  }

  if (prize === 3) {
    message.user.bank += randbank;

    return bot(
      `Вы выиграли ${utils.sp(
        randbank
      )}$ на свой банковский счёт!\n💳 Счёт в банке: ${utils.sp(
        message.user.bank
      )}$`
    );
  }

  if (prize === 4) {
    message.user.btc += randbtc;

    return bot(
      `Вы выиграли ${utils.sp(randbtc)} биткоинов!\n🌐 Биткоинов: ${utils.sp(
        message.user.btc
      )}₿`
    );
  }

  if (prize === 5) {
    message.user.bilet += randbil;

    return bot(`Вы выиграли ${utils.sp(randbil)} билетов! 🎟`);
  }
});

oscrn(
  /^(?:бонус император|бонус imperator|imperarot бонус|император бонус)$/i,
  async (message, bot) => {
    if (!message.user.settings.imperator) return;

    if (message.user.timers.imperatorbonus >= Date.now())
      return bot(
        `👑 Император бонус можно будет получить через ${unixStampLeft(
          message.user.timers.imperatorbonus - Date.now()
        )}.`
      );

    let imperatorbonus1 = utils.random(1, 6);

    message.user.timers.imperatorbonus = Date.now() + 86400000;

    if (imperatorbonus1 === 1) {
      let bonuscash = utils.random(10000000000000, 10000000000000000);

      message.user.balance += bonuscash;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonuscash)}$ 🙂`);
    }

    if (imperatorbonus1 === 2) {
      let bonusbtc = utils.random(100000000, 500000000);

      message.user.btc += bonusbtc;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbtc)}₿`);
    }

    if (imperatorbonus1 === 3) {
      let bonusrating = utils.random(150000, 650000);

      message.user.rating += bonusrating;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusrating)} 👑`);
    }

    if (imperatorbonus1 === 4) {
      let bonusopit = utils.random(3000, 10000);

      message.user.opit += bonusopit;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusopit)} опыта 🏆`);
    }

    if (imperatorbonus1 === 5) {
      message.user.c3 += 5;

      message.send({ sticker_id: 74276 });

      bot(`УХ-ТЫ! 🎊\n🤗 Поздравляю, вы выиграли 5 донат-кейсов! 📦`);
    }

    if (imperatorbonus1 === 6) {
      message.user.c5 += 2;
      message.send({ sticker_id: 74276 });
      message.send(
        `ВОТ ЭТО УДАЧА! 🎊\n😱 Поздравляю, вы выиграли 2 супер кейса! 📦`
      );
    }
  }
);

oscrn(
  /^(?:бонус титан|бонус Titan|Titan бонус|премиум титан)$/i,
  async (message, bot) => {
    if (message.user.settings.titan !== true) return;

    if (message.user.timers.titanbonus > Date.now())
      return bot(
        ` Титан бонус можно будет получить через ${unixStampLeft(
          message.user.timers.titanbonus - Date.now()
        )}`
      );

    let titanbonus1 = utils.random(1, 5);

    message.user.timers.titanbonus = Date.now() + 86400000;

    if (titanbonus1 === 1) {
      let bonuscash = utils.random(5000000000, 50000000000);

      message.user.balance += bonuscash;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonuscash)}$. 🙂`);
    }

    if (titanbonus1 === 2) {
      let bonusbtc = utils.random(100000, 5000000);

      message.user.btc += bonusbtc;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbtc)}₿. 😅`);
    }

    if (titanbonus1 === 3) {
      let bonusrating = utils.random(3000, 30000);

      message.user.rating += bonusrating;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusrating)}👑`);
    }

    if (titanbonus1 === 4) {
      let bonusopit = utils.random(300, 3000);

      message.user.opit += bonusopit;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusopit)} опыта. 🏆`);
    }

    if (titanbonus1 === 5) {
      let bonusbilet = utils.random(1, 4);

      message.user.bilet += bonusbilet;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbilet)} билета. 🎫`);
    }
  }
);

oscrn(
  /^(?:бонус премиум|бонус PREMIUM|PREMIUM бонус|премиум бонус)$/i,
  async (message, bot) => {
    if (message.user.settings.premium !== true) return;

    if (message.user.timers.prembonus > Date.now())
      return bot(
        `💓 Премиум бонус можно будет получить через ${unixStampLeft(
          message.user.timers.prembonus - Date.now()
        )}`
      );

    let premiumbonus = utils.random(1, 5);

    message.user.timers.prembonus = Date.now() + 86400000;

    if (premiumbonus === 1) {
      let bonuscash = utils.random(5000000000, 50000000000);

      return bot(`поздравляю, вы выиграли ${utils.sp(bonuscash)}$. 🙂`);
    }

    if (premiumbonus === 2) {
      let bonusbtc = utils.random(100000, 5000000);

      message.user.btc += bonusbtc;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbtc)}₿. 😅`);
    }

    if (premiumbonus === 3) {
      let bonusrating = utils.random(3000, 30000);

      message.user.rating += bonusrating;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusrating)}👑`);
    }

    if (premiumbonus === 4) {
      let bonusopit = utils.random(300, 3000);

      message.user.opit += bonusopit;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusopit)} опыта. 🏆`);
    }

    if (premiumbonus === 5) {
      let bonusbilet = utils.random(1, 4);

      message.user.bilet += bonusbilet;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbilet)} билета. 🎟`);
    }
  }
);

oscrn(
  /^(?:бонус вип|бонус VIP|VIP бонус|вип бонус)$/i,
  async (message, bot) => {
    if (message.user.settings.vip !== true) return;

    if (message.user.timers.vipbonus > Date.now())
      return bot(
        `🎲 Вип бонус можно будет получить через ${unixStampLeft(
          message.user.timers.vipbonus - Date.now()
        )}`
      );

    let vipbonus = utils.random(1, 4);

    message.user.timers.vipbonus = Date.now() + 86400000;

    if (vipbonus === 1) {
      let bonuscash = utils.random(3000000000, 30000000000);

      message.user.balance += bonuscash;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonuscash)}$.`, {
        attachment: utils.pick([`photo-211261524_457239187`]),
      });
    }

    if (vipbonus === 2) {
      let bonusbtc = utils.random(50000, 5000000);

      message.user.btc += bonusbtc;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusbtc)}₿.`, {
        attachment: utils.pick([`photo-211261524_457239187`]),
      });
    }

    if (vipbonus === 3) {
      let bonusrating = utils.random(1000, 10000);

      message.user.rating += bonusrating;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusrating)}👑`, {
        attachment: utils.pick([`photo-211261524_457239187`]),
      });
    }

    if (vipbonus === 4) {
      let bonusopit = utils.random(100, 1000);

      message.user.opit += bonusopit;

      return bot(`поздравляю, вы выиграли ${utils.sp(bonusopit)} опыта. 🏆`, {
        attachment: utils.pick([`photo-211261524_457239187`]),
      });
    }
  }
);

oscrn(/^(?:капча)\s(.*)$/i, async (message, bot) => {
  if (message.user.captcha.vid === false)
    return bot(`у вас нету капчи, но я за вами слежу! 🤖`);

  if (message.args[1] === message.user.captcha.otvet) {
    message.user.captcha.vid = false;

    message.user.captcha.otvet = false;

    message.user.captcha.primer = false;

    message.user.captcha.pred = 0;

    return bot(`вы успешно прошли проверку на робота! ✅`);
  } else {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌
Введите "капча ${message.user.captcha.otvet}", чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }
});

oscrn(/^(?:смена инфо|сменить инфо)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  return bot(`помощь по смене имущества:

🔹 См машина [название/-]
🔹 См яхта [название/-]
🔹 См вертолет [название/-]
🔹 См самолет [название/-]
🔹 См дом [название/-]
🔹 См квартира [название/-]
🔹 См видеокарта [название/-]`);
});

oscrn(/^(?:см дом)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗

✍️ См дом [название/-]`);

  if (!message.user.realty.home)
    return bot(`у Вас нету машины для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.homes = false;

    return bot(`вернул прежнее название дома! 🏡`);
  } else {
    message.user.astats.homes = message.args[1];

    return bot(`ваш дом приобрел новое имя! 🔥
🏡 Новое название Вашего дома: ${message.args[1]}`);
  }
});

oscrn(/^(?:см квартира)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См квартира [название/-]`);

  if (!message.user.realty.apartment)
    return bot(`у Вас нету квартиры для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.apartment = false;

    return bot(`вернул прежнее название квартиры! 🌇`);
  } else {
    message.user.astats.apartment = message.args[1];

    return bot(`ваша квартира приобрела новое имя! 🔥
🌇 Новое название Вашей квартиры: ${message.args[1]}`);
  }
});

oscrn(/^(?:см видеокарта)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См видеокарта [название/-]`);

  if (!message.user.misc.videocard)
    return bot(`у Вас нету видеокарты для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.videocard = false;

    return bot(`вернул прежнее название видюхи! 📼`);
  } else {
    message.user.astats.videocard = message.args[1];

    return bot(`ваша видеокарта приобрела новое имя! 🔥
📼 Новое название Вашей видеокарты: ${message.args[1]}`);
  }
});

oscrn(/^(?:см машина)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См машина [название/-]`);

  if (!message.user.transport.car)
    return bot(`у Вас нету машины для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.car = false;

    return bot(`вернул прежнее название машины! 🚗
Оно поменялось в профиле и в информации о Вашей машине ✅`);
  } else {
    message.user.astats.car = message.args[1];

    return bot(`ваша машина приобрела новое имя! 🔥
🚗 Новое название Вашей машины: ${message.args[1]}`);
  }
});

oscrn(/^(?:см яхта)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См яхта [название/-]`);

  if (!message.user.transport.yacht)
    return bot(`у Вас нету яхты для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.yacht = false;

    return bot(`вернул прежнее название яхты! 🚤
Оно поменялось в профиле и в информации о Вашей яхте ✅`);
  } else {
    message.user.astats.yacht = message.args[1];

    return bot(`ваша яхта приобрела новое имя! 🔥
🚤 Новое название Вашей яхты: ${message.args[1]}`);
  }
});

oscrn(/^(?:см вертолет)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См вертолёт [название/-]`);

  if (!message.user.transport.helicopter)
    return bot(`у Вас нету вертолёта для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.helicopter = false;

    return bot(`вернул прежнее название вертолёта! 🚁
Оно поменялось в профиле и в информации о Вашем вертолёте ✅`);
  } else {
    message.user.astats.helicopter = message.args[1];

    return bot(`ваш вертолёт приобрел новое имя! 🔥
🚁 Новое название Вашего вертолёта: ${message.args[1]}`);
  }
});

oscrn(/^(?:см самолет)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!message.args[1])
    return bot(`пожалуйста, напишите название для её смены! ❗
✍️ См самолёт [название/-]`);

  if (!message.user.transport.airplane)
    return bot(`у Вас нету самолёта для смены названия! 😦`);

  if (message.args[1] === "-") {
    message.user.astats.airplane = false;

    return bot(`вернул прежнее название самолёта! ✈️
Оно поменялось в профиле и в информации о Вашем самолёте ✅`);
  } else {
    message.user.astats.airplane = message.args[1];

    return bot(`ваш самолёт приобрел новое имя! 🔥
✈️ Новое название Вашего самолёта: ${message.args[1]}`);
  }
});

oscrn(/^(?:ферма)$/i, async (message, bot) => {
  if (!message.user.misc.farm) return bot(`у вас нет фермы`);

  if (!message.user.farm_btc)
    return bot(`на вашей ферме пусто, новые биткоины появятся скоро`);

  let btc_ = message.user.farm_btc * message.user.misc.farm_count;

  if (message.user.farm_count >= 10000000) Math.floor((btc_ /= 2));

  message.user.btc += btc_;

  message.user.farm_btc = 0;

  return bot(`вы собрали ${utils.sp(
    btc_
  )}₿, следующие биткоины появятся через час
💾 Биткоинов: ${utils.sp(message.user.btc)}฿`);
});

oscrn(/^(?:ферма инфо)$/i, async (message, bot) => {
  if (!message.user.misc.farm) return bot(`у вас нет фермы`);

  const btc_ = message.user.farm_btc * message.user.misc.farm_count;

  return bot(`На ваших фермах накопилось ${utils.sp(btc_)}₿ 🌐`);
});

oscrn(/^(?:брак)\s([0-9]+)$/i, async (message, bot) => {
  const date = new Date();

  if (message.user.marriage.partner && message.user.questbrak === false) {
    message.user.questbrak = true;

    message.user.c3 += 1;

    await bot(`Поздравляем, вы состоите в браке иполучаете 📦 1 Донат-кейс.`);
  }

  if (message.user.marriage.partner)
    return bot(
      `вы уже в браке с игроком @id${
        users[message.user.marriage.partner].id
      } (${users[message.user.marriage.partner].tag}) 👀`
    );

  if (message.args[1] === message.user.uid)
    return bot(`вы не можете жениться/выйти замуж за себя! ✖️`);

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  if (user.marriage.partner) return bot(`этот человек уже состоит в браке! 😔`);

  if (user.marriage.requests.find((x) => x === message.args[1]))
    return bot(`вы уже делали предложение этому игроку! ⏳`);

  if (message.user.marriage.requests.find((x) => x === message.args[1])) {
    message.user.marriage.requests = [];

    message.user.marriage.partner = user.uid;

    message.user.marriage.data = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    user.marriage.requests = [];

    user.marriage.partner = message.user.uid;

    user.marriage.data = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return bot(`ПОЗДРАВЛЯЕМ! 🎊🤗
💕 Вы вступили в брак с игроком @id${user.id} (${user.tag}) ❤️\n❓ Чтобы узнать полную информацию, введите «Брак инфо» ☃️`);
  }

  user.marriage.requests.push(message.user.uid);

  return bot(`вы сделали предложение игроку @id${user.id} (${user.tag}) 💕`);
});

oscrn(/^(?:брак инфо)$/i, async (message, bot) => {
  let user = users.find((x) => x.uid === message.user.marriage.partner);
  if (message.user.marriage.partner === 0)
    return bot(
      `ваш партнёр: @id${user.id}(${user.tag}) ❤️\n⏰ Вступили в брак: ${message.user.marriage.data}`
    );
  if (!message.user.marriage.partner) return bot(`Вы не в браке! ✖️`);

  return bot(
    `ваш партнёр: @id${user.id}(${user.tag}) ❤️\n⏰ Вступили в брак: ${message.user.marriage.data}`
  );
});

oscrn(/^(?:браки)$/i, async (message, bot) => {
  if (message.user.marriage.partner && message.user.questbrak === false) {
    message.user.questbrak = true;

    message.user.c3 += 1;

    await bot(
      `Поздравляем, вы состоите в браке и с почетом получаете 📦 1 Донат-кейс.`
    );
  }

  if (message.user.marriage.partner) return bot(`вы уже состоите в браке`);

  return bot(`предложения:

	${message.user.marriage.requests
    .map((x) => `От игрока "${users[x].tag}" (ID: ${x})`)
    .join("\n")}`);
});

oscrn(/^(?:нреп)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.agent < 1) return;
  let i = 0;
  let test = ``;
  users
    .filter((x) => x.rep === true)
    .map((x) => {
      i += 1;
      test += `№${i}. @id${x.id} (${x.tag}) (ID › ${x.uid}). Вопрос › ${x.vopros}\n\n`;
    });

  return bot(`неотвеченные репорты/вопросы:

${test}`);
});

oscrn(/^(?:развод)$/i, async (message, bot) => {
  if (!message.user.marriage.partner) return bot(`вы не состоите в браке`);
  let user = users.find((x) => x.uid === message.user.marriage.partner);

  let data = message.user.marriage.data;
  message.user.marriage.partner = 0;
  user.marriage.partner = 0;

  return bot(`К сожалению, с сегодняшнего дня, Вы развелись со своим партнёром 😔
💔 Вы были в браке с ${data} 😢 `);
});

oscrn(/^(?:cid)$/i, async (message, bot) => {
  if (!message.isChat) return bot(`команда работает только в беседе с ботом!`);

  return message.send(`ID ${message.chatId}`);
});

oscrn(/^(?:репорт)\s([^]+)$/i, async (message) => {
  if (message.user.bans.rban)
    return message.send(
      `❌ @id${message.user.id} (${message.user.tag}), не удалось написать в репорт, потому-что Вы имеете блокировку РЕПОРТА.`
    );

  if (message.user.timers.timereport > Date.now())
    return message.send(`⏳ @id${message.user.id} (${
      message.user.tag
    }), подождите чуть-чуть! 😫
📥 Писать в репорт можно РАЗ в МИНУТУ (осталось: ${unixStampLeft(
      message.user.timers.timereport - Date.now()
    )})`);

  if (message.args[1].length > 100)
    return message.send(
      `❌ @id${message.user.id} (${message.user.tag}), вы превысили лимит символов. Попробуйте укоротить текст.`
    );

  message.user.timers.timereport = Date.now() + 60000;

  botinfo.reports += 1;

  message.user.rep = true;
  message.user.vopros = message.args[1];

  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);
  let offtop = `Здравствуйте уважаемый игрок! Просьба больше не писать в репорт не по теме иначе Вам будет выдана блокировка репорта.`;
  await vk.api.messages.send({
    chat_id: 1,
    forward_messages: message.id,
    message: `✏️ НОВЫЙ РЕПОРТ! @all ☃️ 🆕

▶️ Отправил игрок › @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}]
💬 Текст жалобы › «${message.args[1]}»

🔩 Для ответа используйте › «Ответ [ID игрока] [текст]»
🔎 Для просмотра профиля используйте кнопку
🔱 Если репорт был подан не по теме нажмите кнопку`,
    random_id: 0,

    keyboard: JSON.stringify({
      inline: true,
      buttons: [
        [
          {
            action: {
              type: "text",
              payload: { command: `гет ${message.user.uid}` },
              label: `🔎 Посмотреть профиль`,
            },
            color: "secondary",
          },
        ],
        [
          {
            action: {
              type: "text",
              payload: { command: `Ответ ${message.user.uid} ${offtop}` },
              label: `⚠ Не по теме`,
            },
            color: "negative",
          },
        ],
      ],
    }),
  });

  return message.send(
    `✅ @id${message.user.id} (${message.user.tag}), успешно! Сообщение было доставлено до администрации, ожидайте в скором времени ответа от администрации 💬`
  );
});

oscrn(/^(?:ответ)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (!botinfo.oaotv)
    return bot(
      `❓Технические работы\n🔇За подробной информацией - @228105719(Основатель)`
    );

  if (message.user.answeraccess === undefined) {
    message.user.answeraccess = false;
  } else {
    if (message.user.answeraccess === false) return;
  }

  if (message.user.settings.adm < 1 && !message.user.settings.agent) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (user.rep === false) return bot(`Игроку уже ответили! 😁`);

  user.admid = message.user.uid;
  user.rep = false;
  message.user.astats.reports += 1;
  message.user.rubli += 1;

  await vk.api.messages.send({
    user_id: user.id,
    random_id: 0,

    message: `▶️ ${message.user.settings.agent
      .toString()
      .replace(/false/gi, "Администратор")
      .replace(/0/gi, "Администратор")
      .replace(/1/gi, "Агент поддержки")
      .replace(
        /2/gi,
        "Главный агент поддержки"
      )} успешно ответил на Ваш репорт!\n\n💬 Его ответ: ${
      message.args[2]
    } | Приятной игры 😉\n\n✳️ Для оценки работы администратора нажмите на кнопку ниже.`,

    keyboard: JSON.stringify({
      inline: true,

      buttons: [
        [
          {
            action: {
              type: "text",

              payload: { command: `оценить ${message.user.uid} положительно` },

              label: "👍",
            },

            color: "default",
          },

          {
            action: {
              type: "text",

              payload: { command: `оценить ${message.user.uid} отрицательно` },

              label: "👎",
            },

            color: "default",
          },
        ],
      ],
    }),
  });

  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]); //utils.pick([`>`,`🎄`,`❄️`,`☃️`]);

  return bot(
    `Вы успешно ответили игроку @id${user.id} (${user.tag}) на его вопрос! 💬\n+1 донат-рубль 💵`
  );
});

oscrn(/^(?:агент помощь|агент кмд|агент-кмд)$/i, async (message, bot) => {
  if (message.user.settings.agent < 1) return;

  return bot(`агент-команды:

📛 1 уровень агента:
🔹 Ответ [ID] [текст] - ответить на вопрос (+1р. на донат-счет за ответ).
🔹 Рбан [ID] - заблокировать доступ к вопросам/репорту.
🔹 Рразбан [ID] - разблокировать доступ к вопросам/репортам.
🔹 Асмс [ID] - написать личное сообщение от бота игроку (дополнение к вопросу).

📛 2 уровень агента:
🔹 Аснять [ID] - снять агента.
🔹 Акик [ID] - выгнать с беседы агентов.
🔹 Апоставить [ID] - поставить на агента.
🔹 Авыг [ID] - выдать выговор агенту.`);
});

oscrn(/^(?:givepay)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  if (!Number(message.args[1])) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`не нашёл в БД такого игрока 😬`);

  user.limit.playerlimit = 999999999999999999999999;

  return bot(`выдал игроку @id${user.id} (${user.tag}) безлимитную передачу`);
});


oscrn(/^(?:оценить)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  if (!Number(message.args[1])) return;

  if (message.args[1] !== message.user.admid) return;

  if (message.user.rep === true) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (message.args[2] === "положительно") {
    user.astats.norm += 1;

    message.user.rep = true;

    message.user.admid = false;

    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

    await vk.api.messages.send({
      user_id: user.id,
      random_id: 0,

      message: `▶️ Игрок @id${message.user.id} (${
        message.user.tag
      }) оценил Ваш ответ на положительно! 👍${smileng}
〽️ Ваша репутация: ${utils.sp(user.astats.norm)} 👍 | ${utils.sp(
        user.astats.bad
      )} 👎`,
    });

    return bot(
      `вы успешно оценили работу администратора на «положительно» (👍).
😮 Благодарим за оценку, это нам помогает анализировать работу администрации! Администратор будет успешно уведомлён о Вашей оценке.`,
      { attachment: `photo-203302510_457239155` }
    );
  }

  if (message.args[2] === "отрицательно") {
    user.astats.bad += 1;

    message.user.rep = true;

    message.user.admid = false;

    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

    await vk.api.messages.send({
      user_id: user.id,
      random_id: 0,

      message: `▶️ Игрок @id${message.user.id} (${
        message.user.tag
      }) оценил Ваш ответ на отрицательно 👎${smileng}
〽️ Ваша репутация: ${utils.sp(user.astats.norm)} 👍 | ${utils.sp(
        user.astats.bad
      )} 👎`,
    });

    return bot(
      `вы успешно оценили работу администратора на «отрицательно» (👎).
😮 Благодарим за оценку, это нам помогает анализировать работу администрации! Администратор будет успешно уведомлён о Вашей оценке.`,
      { attachment: `photo-203302510_457239156` }
    );
  }
});

oscrn(/^(?:асмс)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (!botinfo.oaotv)
    return bot(
      `❓Технические работы\n🔇За подробной информацией - @228105719(Основатель)`
    );

  if (message.user.settings.adm < 1 && message.user.settings.agent < 1) return;

  if (message.user.answeraccess === undefined) {
    message.user.answeraccess = false;
  } else {
    if (message.user.answeraccess === false) return;
  }

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  await vk.api.messages.send({
    user_id: user.id,
    message: `▶️ Администратор / агент написал Вам сообщение: ❄️
✏️ Текст: «${message.args[2]}» ✅`,
    random_id: 0,
  });

  return bot(
    `Вы успешно написали игроку сообщение ❄️\n📩 Текст: «${message.args[2]}»`
  );
});

oscrn(/^(?:работа)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.work)
    return bot(`ваша профессия - ${works[message.user.work - 1].name}

${message.user.timers.hasWorked ? `Вы уже работали в эту минуту` : ``}`);

  const work = works.find((x) => x.id === Number(message.args[1]));

  if (!work) return console.log(message.args[1]);

  if (work.requiredLevel > message.user.level)
    return bot(`вы не можете устроиться на эту работу!`);
  else if (work.requiredLevel <= message.user.level) {
    message.user.work = work.id;

    return bot(`вы устроились на работу — «${work.name}» 🛠️

💡 Чтобы начать работать введите «Работать»`);
  }
});

let cmderror = utils.pick([
  `🤐`,
  `❌`,
  `😲`,
  `😯`,
  `😢`,
  `😖`,
  `😞`,
  `🤭`,
  `😑`,
  `😔`,
  `😶`,
  `🤔`,
  `☹️`,
  `😰`,
  `😓`,
  `🤥`,
]);

oscrn(/^(?:рп|ролеплей|эрпэ|ролевая игра|🎮 РП)$/i, async (message) => {
  return message.send(`📥 @id${message.user.id} (${message.user.tag}), РП-команды:

♨️ Отжарить [пересланное сообщение]
👊 Уебать [пересланное сообщение]
😱 Удивить [пересланное сообщение]
☠️ Убить [пересланное сообщение]
🤰 Выебать [пересланное сообщение]
🎉 Поздравить [пересланное сообщение]
🤐 Заткнуть [пересланное сообщение]
🎭 Заскамить [пересланное сообщение]
🗣️ Крикнуть [пересланное сообщение]
🔥 Сжечь [пересланное сообщение]
🕯️ Помянуть [пересланное сообщение]
🐈 Погладить [пересланное сообщение]
🥘 Угостить [пересланное сообщение]
⏳ Подождать [пересланное сообщение]
🥺 Пожалеть [пересланное сообщение]
💋 Поцеловать [пересланное сообщение]
🤗 Обнять [пересланное сообщение]
🛹 Прокатить [пересланное сообщение]
🤕 Избить [пересланное сообщение]
🙇‍♀️ Шлёпнуть [пересланное сообщение]`);
});

oscrn(/^(?:заткнуть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🤐 @id${message.user.id} (${message.user.tag}), Вы заткнули @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:отжарить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `♨️ @id${message.user.id} (${message.user.tag}), Вы отжарили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:уебать)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `👊 @id${message.user.id} (${message.user.tag}), Вы уебали @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:заткнуть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🤐 @id${message.user.id} (${message.user.tag}), Вы заткнули @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:удивить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `😱 @id${message.user.id} (${message.user.tag}), Вы удивили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:убить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `☠️ @id${message.user.id} (${message.user.tag}), Вы убили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:выебать)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🤐 @id${message.user.id} (${message.user.tag}), Вы выебали @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:поздравить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🎉 @id${message.user.id} (${message.user.tag}), Вы поздравили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:заскамить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🎭 @id${message.user.id} (${message.user.tag}), Вы заскамили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:крикнуть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🗣️ @id${message.user.id} (${message.user.tag}), Вы крикнули на @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:сжечь)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🔥 @id${message.user.id} (${message.user.tag}), Вы сожгли @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:помянуть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🕯️ @id${message.user.id} (${message.user.tag}), Вы помянули @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:погладить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🐈 @id${message.user.id} (${message.user.tag}), Вы погладили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:угостить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🥘 @id${message.user.id} (${message.user.tag}), Вы угостили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:подождать)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `⏳ @id${message.user.id} (${message.user.tag}), Вы подождали @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:пожалеть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🥺 @id${message.user.id} (${message.user.tag}), Вы пожалели @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:поцеловать)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `💋 @id${message.user.id} (${message.user.tag}), Вы поцеловали @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:обнять)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🤗 @id${message.user.id} (${message.user.tag}), Вы обняли @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:прокатить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🛹 @id${message.user.id} (${message.user.tag}), Вы прокатили на скейте @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:избить)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🤕 @id${message.user.id} (${message.user.tag}), Вы избили @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:шл(е|ё)пнуть)\s?((?:.|\n)+)?$/i, async (message) => {
  if (!message.replyMessage)
    return message.send(
      `${cmderror} @id${message.user.id} (${message.user.tag}), перешлите сообщение!`
    );

  if (message.replyMessage) {
    if (message.replyMessage.peerId < 0)
      return message.send(
        `💡 @id${message.senderId} (${message.user.tag}), нельзя применять РП-команды над группой!`
      );

    if (!message.isChat)
      return message.send(
        `❌ @id${message.user.id} (${message.user.tag}), РП-команды работают ТОЛЬКО в беседе!`
      );

    let [user_info] = await vk.api.users.get({
      user_ids: message.replyMessage.senderId,
      name_case: "gen",
    });

    return message.send(
      `🙇‍♀️ @id${message.user.id} (${message.user.tag}), Вы шлёпнули по попе @id${message.replyMessage.senderId} (${user_info.first_name} ${user_info.last_name})`
    );
  }
});

oscrn(/^(?:работы)$/i, async (message, bot) => {
  if (message.user.work)
    return bot(`ваша профессия - ${works[message.user.work - 1].name}

${message.user.timers.hasWorked ? `Вы уже работали в эту минуту` : ``}`);

  if (!message.args[1])
    //

    return bot(`Информация по работам:

🎀 Профессия | Необход. уровень | Зарплата
🔹 1. Дворник (1ур.), зарплата - 17.500$
🔸 2. Сантехник (2ур.), зарплата - 87.500$
🔹 3. Электрик (3ур.), зарплата - 437.500$
🔸 4. Слесарь (4ур.), зарплата - 2.175.000$
🔹 5. Юрист (5ур.), зарплата - 10.850.000$
🔸 6. Бухгалтер (7ур.), зарплата - 54.000.000$
🔹 7. Бармен (10ур.), зарплата - 252.000.000$
🔸 8. Администратор (15ур.), зарплата - 1.260.000.000$
🔹 9. Программист (20ур.), зарплата - 6.300.000.000$
🔸 10. Главный Программист (25ур.), зарплата - 31.500.000.000$
🔹 11. Директор (35ур.), зарплата - 160.000.000.000$
🔸 12. Президент (50ур.), зарплата - 750.000.000.000$
🔹 13. Мафиози (100ур.), зарплата - 1.500.000.000.000$
🔸 14. Шахтер (500ур.), зарплата - 2.500.000.000.000$
🔹 15. Создатель Чако (1000ур.), зарплата - 5.000.000.000.000$

〽️Для трудоустройства введите «Работа [номер]»`);
});

oscrn(/^(?:работать|⛏️ работать)$/i, async (message, bot) => {
  if (!message.user.work)
    return bot(`вы нигде не работаете 😢
▶️ Для просмотра всех работ введите «Работы»`);

  if (message.user.timers.hasWorked > Date.now())
    return bot(`рабочий день еще не начат! ❌
⏳ Вы сможете работать через ${unixStampLefta(
      message.user.timers.hasWorked - Date.now()
    )}`);

  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌
Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌
Введите «капча ${otv}», чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = `${pr1 + pr2}`;

      return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }
  const work = works.find((x) => x.id === message.user.work);
  const earn = utils.random(work.min, work.max);
  message.user.balance += earn;
  message.user.exp += 1;
  if (message.user.settings.king) {
    message.user.timers.hasWorked = Date.now() + 60000;
  }
  message.user.timers.hasWorked = Date.now() + 70000;
  if (message.user.settings.vip === true) message.user.exp += 1;
  if (message.user.settings.premium === true) message.user.exp += 2;
  let multiply = [0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 1, 0, 0];
  multiply = utils.pick(multiply);
  message.user.sprcoin += multiply;
  if (multiply !== 0) {
    return bot(`вы успешно закончили рабочий день.
💵 Вы заработали: ${utils.sp(earn)} $
〰️ Премия: +${multiply} SpringCoin ☣️
🔅 Ваш уровень рабочего - ${message.user.level}
📶 Ваш текущий опыт - ${message.user.exp}/70`);
  } else {
    return bot(`вы успешно закончили рабочий день.
💵 Вы заработали: ${utils.sp(earn)} $
🔅 Ваш уровень рабочего - ${message.user.level}
📶 Ваш текущий опыт - ${message.user.exp}/70`);
  }
});

oscrn(/^(?:уволиться)$/i, async (message, bot) => {
  if (!message.user.work)
    return bot(`вы нигде не трудоустроены! ❓
🔹 Чтобы просмотреть список всех работ, напишите «работы» ❄️`);

  message.user.work = 0;

  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`🎅`, `☃️`, `❄️`, `🎄`]);

  return bot(`вы успешно уволились со своей работы! 😢${smileng}`);
});

oscrn(/^(?:казино|🎲 Казино|азино|ставка)\s(.*)$/i, async (message, bot) => {
  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌
Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌
Введите «капча ${otv}», чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = pr1 + pr2;

      return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }

  if (!botinfo.oikaz)
    return bot(
      `❓Технические работы\n❓За подробной информацией - @club228105719(Основатель)`
    );

  if (message.args[1] < 0) return;

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = message.args[1].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Math.round(Number(message.args[1])));

  const smileos = utils.pick(["🙂", "😇"]);

  const smileyes = utils.pick(["🙂", "😃", "😄", "🤑", "☺"]);

  const smileno = utils.pick(["😕", "😔", "😫"]);

  if (message.args[1] <= 0) return;

  if (message.args[1] > message.user.balance)
    return bot(`у вас нет данной суммы`);
  else if (message.args[1] <= message.user.balance) {
    let multiply = [];

    let nalog = 0;

    message.user.balance -= message.args[1];

    if (message.args[1] < 10 && message.args[1] >= 1) {
      nalog = 0.01;

      multiply = [0.25, 5, 0.75, 1, 2, 5, 10, 50, 100, 1000]; //1169.5 - 10 - 116.95

      if (message.user.settings.vip) multiply = multiply.concat([250]); //1419.5 - 11 - 129.04

      if (message.user.settings.premium) multiply = multiply.concat([250, 500]); //1919.5 - 12 - 159.95

      if (message.user.settings.titan) multiply = multiply.concat([250, 2500]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 100 && message.args[1] >= 10) {
      nalog = 0.01;

      multiply = [0.25, 0, 5, 0.75, 1, 2, 5, 10, 50, 100, 500]; //669 - 10 - 66.9

      if (message.user.settings.vip) multiply = multiply.concat([250]); //919 - 11 - 83.54

      if (message.user.settings.premium) multiply = multiply.concat([250, 400]); //1319 - 12 -109.9

      if (message.user.settings.titan) multiply = multiply.concat([250, 1000]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 1000 && message.args[1] >= 100) {
      nalog = 0.02;

      multiply = [0.5, 0.75, 1, 2, 5, 10, 50, 50, 100, 200]; //419.25 - 10 - 41.93

      if (message.user.settings.vip) multiply = multiply.concat([100]); //519.25 - 11 - 47.2

      if (message.user.settings.premium) multiply = multiply.concat([100, 150]); //669.25 - 55.7

      if (message.user.settings.titan) multiply = multiply.concat([200, 220]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 10000 && message.args[1] >= 1000) {
      nalog = 0.02;

      multiply = [0.5, 0.75, 1, 2, 5, 10, 50, 50, 100, 100]; //319.25 - 10 - 31.93

      if (message.user.settings.vip) multiply = multiply.concat([50]); //369.25 - 11 - 33.56

      if (message.user.settings.premium) multiply = multiply.concat([50, 100]); //469.25 - 12 - 39.104

      if (message.user.settings.titan) multiply = multiply.concat([75, 100]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 100000 && message.args[1] >= 10000) {
      nalog = 0.03;

      multiply = [0.5, 0.75, 0.75, 1, 2, 5, 10, 50, 50, 100, 100]; //320 - 11 - 29.09

      if (message.user.settings.vip) multiply = multiply.concat([50]); //370 - 12 - 30.83

      if (message.user.settings.premium) multiply = multiply.concat([50, 75]); //445 - 13 - 34.23

      if (message.user.settings.titan) multiply = multiply.concat([75, 100]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 1000000 && message.args[1] >= 100000) {
      nalog = 0.03;

      multiply = [0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 50, 50, 100, 100]; //322.5 - 13 - 24.8

      if (message.user.settings.vip) multiply = multiply.concat([25]); //347.5 - 14 - 24.82

      if (message.user.settings.premium) multiply = multiply.concat([25, 50]); //397.5 - 15 - 26.5

      if (message.user.settings.titan) multiply = multiply.concat([50, 75]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 10000000 && message.args[1] >= 1000000) {
      nalog = 0.04;

      multiply = [0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 50, 50, 100]; //222.5 - 12 - 18.54

      if (message.user.settings.vip) multiply = multiply.concat([20]); //242.5 - 13 - 18.65

      if (message.user.settings.premium) multiply = multiply.concat([20, 35]); //277.5 - 14 - 19.82

      if (message.user.settings.titan) multiply = multiply.concat([50, 40]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 100000000 && message.args[1] >= 10000000) {
      nalog = 0.04;

      multiply = [0.25, 0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 10, 20, 50, 100]; //192.75 - 13 - 14.82

      if (message.user.settings.vip) multiply = multiply.concat([15]); //207.75 - 14 - 14.83

      if (message.user.settings.premium) multiply = multiply.concat([15, 25]); //232.75 - 15 - 15.51

      if (message.user.settings.titan) multiply = multiply.concat([20, 30]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 1000000000 && message.args[1] >= 100000000) {
      nalog = 0.05;

      multiply = [
        0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1, 2, 2, 5, 5, 10, 20, 25, 50,
      ]; //123 - 15 - 8.2

      if (message.user.settings.vip) multiply = multiply.concat([10]); //133 - 14 - 9.5

      if (message.user.settings.premium) multiply = multiply.concat([10, 15]); //148 - 15 - 9.86

      if (message.user.settings.titan) multiply = multiply.concat([15, 20]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 10000000000 && message.args[1] >= 1000000000) {
      nalog = 0.05;

      multiply = [
        0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 5, 5, 5, 10, 15, 25,
      ]; // 73.75 - 16 - 4.6

      if (message.user.settings.vip) multiply = multiply.concat([5]); // 78.75 - 17 - 4.63

      if (message.user.settings.premium) multiply = multiply.concat([5, 10]); //88.75 - 18 - 4.93

      if (message.user.settings.titan) multiply = multiply.concat([10, 15]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 100000000000 && message.args[1] >= 10000000000) {
      nalog = 0.06;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2,
        5, 5, 10,
      ]; //36.75 - 18 - 2.

      if (message.user.settings.vip) multiply = multiply.concat([3]); // 39.75 - 19 - 2.09

      if (message.user.settings.premium) multiply = multiply.concat([3, 5]); // 44.75 - 20 - 2.23

      if (message.user.settings.titan) multiply = multiply.concat([4, 7]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 1000000000000 && message.args[1] >= 100000000000) {
      nalog = 0.06;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2,
        2, 2, 2, 5, 5,
      ]; // 29 - 19 - 1.52

      if (message.user.settings.vip) multiply = multiply.concat([2]); //31 - 20 - 1.55

      if (message.user.settings.premium) multiply = multiply.concat([2, 5]); //36 - 21 - 1.71

      if (message.user.settings.titan) multiply = multiply.concat([3, 6]); //1919.5 - 12 - 159.95
    }

    if (message.args[1] < 10000000000000 && message.args[1] >= 1000000000000) {
      nalog = 0.07;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75,
        0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ]; //26 - 23 - 1.13

      if (message.user.settings.vip) multiply = multiply.concat([2]); // 28 - 24 - 1.16

      if (message.user.settings.premium) multiply = multiply.concat([2, 2]); // 30 - 25 - 1.2

      if (message.user.settings.titan) multiply = multiply.concat([3, 3]); //1919.5 - 12 - 159.95
    }

    if (
      message.args[1] < 100000000000000 &&
      message.args[1] >= 10000000000000
    ) {
      nalog = 0.07;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5,
        0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ]; //28 - 27 - 1.037

      if (message.user.settings.vip) multiply = multiply.concat([2]); //30 - 28 - 1.07

      if (message.user.settings.premium)
        multiply = multiply.concat([0.25, 0.25, 5]); //32.25 - 30 - 1.075

      if (message.user.settings.titan)
        multiply = multiply.concat([0.25, 1.25, 5]); //1919.5 - 12 - 159.95
    }

    if (
      message.args[1] < 1000000000000000 &&
      message.args[1] >= 100000000000000
    ) {
      nalog = 0.08;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5,
        0.5, 0.5, 0.75, 0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      ]; //26 - 27 - 0.96

      if (message.user.settings.vip) multiply = multiply.concat([1]); //27 - 28 -0.96

      if (message.user.settings.premium) multiply = multiply.concat([1, 2]); //29 - 29 - 1

      if (message.user.settings.titan) multiply = multiply.concat([1, 3]); //1919.5 - 12 - 159.95
    }

    if (
      message.args[1] < 10000000000000000 &&
      message.args[1] >= 1000000000000000
    ) {
      nalog = 0.09;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
        0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75, 0.75, 0.75, 0.75,
        0.75, 1, 2, 2, 2, 2, 2, 2, 2, 2,
      ]; //24 - 27 - 0.88

      if (message.user.settings.vip) multiply = multiply.concat([1]); // 25 - 28 - 0.89

      if (message.user.settings.premium) multiply = multiply.concat([1.2]); ///25.2 - 28 - 0.9

      if (message.user.settings.titan) multiply = multiply.concat([1.5]); //1919.5 - 12 - 159.95
    }

    if (
      message.args[1] < 100000000000000000 &&
      message.args[1] >= 10000000000000000
    ) {
      nalog = 0.09;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75,
        0.75, 0.75, 0.75, 0.75, 1, 2, 2, 2, 2, 2, 2,
      ]; //20 - 27 - 0.74

      if (message.user.settings.vip) multiply = multiply = multiply.concat([1]); //21 - 28 - 0.75

      if (message.user.settings.premium)
        multiply = multiply = multiply.concat([1.2]); //21.2 - 28 - 0.76

      if (message.user.settings.titan) multiply = multiply.concat([1.4]); //1919.5 - 12 - 159.95
    }

    if (
      message.args[1] < 1000000000000000000 &&
      message.args[1] >= 100000000000000000
    ) {
      nalog = 0.09;

      multiply = [
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25,
        0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5, 0.75,
        0.75, 0.75, 0.75, 0.75, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 2, 2, 2, 2,
      ]; //20 - 27 - 0.74

      if (message.user.settings.vip) multiply = multiply = multiply.concat([1]); //21 - 28 - 0.75

      if (message.user.settings.premium)
        multiply = multiply = multiply.concat([1.2]); //21.2 - 28 - 0.76

      if (message.user.settings.titan) multiply = multiply.concat([1.3]); //1919.5 - 12 - 159.95
    }

    if (message.user.settings.vip) nalog += 0.01;

    if (message.user.settings.premium) nalog += 0.02;

    if (message.user.balance > 10000000000) multiply = multiply.concat([0.75]);

    //if (message.user.balance > 100000000000) multiply = multiply.concat([0.25]);

    if (message.user.balance > 1000000000000)
      multiply = multiply.concat([0.25]);

    if (message.user.balance > 10000000000000)
      multiply = multiply.concat([0.75]);

    if (message.user.balance > 100000000000000)
      multiply = multiply.concat([0.5]);

    if (message.user.balance > 1000000000000000)
      multiply = multiply.concat([0.5]);

    if (message.user.balance > 10000000000000000)
      multiply = multiply.concat([0.25]);

    if (message.user.balance > 100000000000000000)
      multiply = multiply.concat([0.25]);

    if (message.user.balance > 1000000000000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.balance > 10000000000000000000)
      multiply = multiply.concat([0.25, 0.5, 0.25, 0.5, 0.25, 0.5]);

    if (message.user.balance > 100000000000000000000)
      multiply = multiply.concat([0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5]);

    if (message.user.balance > 1000000000000000000000)
      multiply = multiply.concat([0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5]);

    if (message.user.balance > 10000000000000000000000)
      multiply = multiply.concat([
        0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25,
        0.5, 0.25, 0.5,
      ]);

    if (message.user.rating > 10000) multiply = multiply.concat([0.75]);

    if (message.user.rating > 100000) multiply = multiply.concat([0.25]);

    if (message.user.rating > 1000000) multiply = multiply.concat([0.5]);

    if (message.user.rating > 10000000) multiply = multiply.concat([0.5]);

    if (message.user.rating > 100000000) multiply = multiply.concat([0.25]);

    if (message.user.rating > 1000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.rating > 10000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.rating > 100000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.rating > 1000000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.rating > 10000000000000)
      multiply = multiply.concat([0.25, 0.5]);

    if (message.user.btc > 100000000) multiply = multiply.concat([0.5]);

    if (message.user.btc > 1000000000) multiply = multiply.concat([0.25]);

    if (message.user.btc > 10000000000) multiply = multiply.concat([0.75]);

    if (message.user.btc > 100000000000) multiply = multiply.concat([0.5]);

    if (message.user.btc > 1000000000000) multiply = multiply.concat([0.25]);

    //if(message.isChat) multiply = multiply.concat([1.12,1.24,1.36]);

    let follow = await vk.api.call("groups.isMember", {
      user_id: message.senderId,
      group_id: 228105719,
    });

    if (follow) {
      multiply = multiply.concat([2]);

      nalog -= 0.01;

      if (message.user.questfollow === false) {
        message.user.questfollow = true;

        await bkz(`Вы подписались на группу и получаете 25.ООО.ООО.ООО.ООО$`);

        message.user.balance += 25000000000000;
      }
    }

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuepeoplelvl >= 1) {
          multiply = multiply.concat([3]);
        }

        if (chats[message.chatId].statuepeoplelvl >= 2) {
          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          if (message.args[1] < 100000000000000)
            multiply = multiply.concat([100]);
        }

        if (chats[message.chatId].statuepeoplelvl >= 3) {
          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          multiply = multiply.concat(multiply);

          if (message.args[1] < 50000000000000)
            multiply = multiply.concat([200]);
        }

        if (chats[message.chatId].statuepeoplelvl >= 5) {
          let multileaf;

          multileaf = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
            0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
            0, 0, 0, 0
          ];

          multileaf = utils.pick(multileaf);

          if (multileaf === 1) {
            message.user.leaf += 20;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: листики (20 шт)`
            );
          } else if (multileaf === 2) {
            message.user.ruds.plazma += 10;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: плазма (10 шт)`
            );
          } else if (multileaf === 3) {
            message.user.ruds.obsidian += 30;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: обсидиан (30 шт)`
            );
          } else if (multileaf === 4) {
            message.user.rub += 50;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: ЧакоРуб (50 шт)`
            );
          } else if (multileaf === 5) {
            message.user.bilet += 2;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: Билеты для фортуны (2 шт)`
            );
          } else if (multileaf === 6) {
            message.user.sprcoin += 10;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: SpringCoin (10 шт)`
            );
          } else if (multileaf === 7) {
            message.user.balance2 += 10000;

            await bot(
              `🎰Удача на вашей стороне!\n🎲Дополнительный приз: GB (10.000 шт)`
            );
          }
        }
      }
    }

    if (message.user.settings.topdon) {
      nalog = 0;

      multiply.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

      multiply.forEach(function (item, index) {
        if (item === 0) {
          multiply[index] = 0.3;
        }
      });
    }

    if (message.user.settings.king) {
      multiply.sort();

      for (let i = 0; i < multiply.length; i++) {
        if (multiply[i] < 0.75) multiply[i] = 0.75;
      }
    }

    multiply = utils.pick(multiply); //

    if (!follow && multiply < 1) {
      await bot(
        `подпишись на группу чтобы снизить налог и повысить шанс в казино 🤗`
      );
    }

    if (message.user.casinoplus > 0) {
      multiply = utils.pick([1, 2]);

      message.user.casinoplus -= 1;
    }

    if (message.user.casinominus > 0) {
      multiply = utils.pick([0.25, 0.25, 0.5, 0.75]);

      message.user.casinominus -= 1;
    }

    if (message.user.balance > 100000000000000) nalog += 0.04;

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (multiply > 1) {
          if (message.user.settings.adm < 1) {
            chats[message.chatId].statuemoney += Number(
              Math.floor(
                Math.round(
                  (message.args[1] * multiply - message.args[1]) * nalog
                )
              )
            );

            chats[message.chatId].statuemoney = Number(
              Math.floor(Math.round(chats[message.chatId].statuemoney))
            );

            if (chats[message.chatId].statuemoney >= 1000000000000000) {
              chats[message.chatId].statuemoneylvl = 1;
            }

            if (chats[message.chatId].statuemoney >= 50000000000000000) {
              chats[message.chatId].statuemoneylvl = 2;
            }

            if (chats[message.chatId].statuemoney >= 500000000000000000) {
              chats[message.chatId].statuemoneylvl = 3;
            }

            if (chats[message.chatId].statuemoneylvl === 1) {
              nalog -= 0.01;
            }

            if (chats[message.chatId].statuemoneylvl === 2) {
              nalog -= 0.03;
            }

            if (chats[message.chatId].statuemoneylvl === 3) {
              nalog -= 0.2;
            }

            if (nalog < 0) nalog = 0;
          }
        }
      }
    }

    if (message.user.settings.joker === true && message.user.inf === true) {
      multiply = message.user.infcas;
    }

    if (multiply <= 1)
      message.user.balance += Math.floor(
        Math.round(message.args[1] * multiply)
      );

    if (multiply > 1)
      message.user.balance += Math.floor(
        Math.round(
          message.args[1] * multiply * (1 - nalog) + message.args[1] * nalog
        )
      );

    if (multiply < 1 && message.user.settings.adm < 1)
      casino.balance += Number(
        Math.floor(
          Math.round(
            message.args[1] - Math.floor(Math.round(message.args[1] * multiply))
          )
        )
      );

    if (multiply > 1 && message.user.settings.adm < 1)
      casino.balance -= Number(
        Math.floor(
          Math.round(
            (Math.floor(Math.round(message.args[1] * multiply)) -
              message.args[1]) *
              (1 - nalog)
          )
        )
      );

    if (typeof message.user.questcasino === "number") {
      if (multiply >= 1) {
        message.user.questcasino++;

        if (message.user.questcasino >= 5) {
          await bot(
            `Поздравляем, Вы 5 раз выиграли в казино и получаете 📦 1 Донат-кейс.`
          );

          message.user.c3 += 1;

          message.user.questcasino = true;
        }
      } else {
        message.user.questcasino = 0;
      }
    }

    let photo = ``;

    if (multiply > 1) photo = `photo-211261524_457504145`;

    if (multiply === 1) photo = `photo-211261524_457504145`;

    if (multiply < 1) photo = `photo-211261524_457504146`;

    let wow = utils.pick([`😃`, `😄`, `😏`, `🙃`, `🙂`, `😲`, `🤤`]);

    let txt = utils.pick([
      `Вам очень повезло!`,
      `Вы везучий!`,
      `Повезло-повезло`,
      `Удача — с вами!`,
      `Да ты везучий!`,
    ]);

    await bot(
      `${
        multiply === 1
          ? `${txt} — ваши деньги остаются при вас (x${multiply}) ${smileos}`
          : `${
              multiply < 1
                ? `вы проиграли ${utils.sp(
                    message.args[1] - message.args[1] * multiply
                  )}$ 🚫
❌ » Ставка сгорела на x${multiply} ${smileno}`
                : `вы выиграли ${utils.sp(
                    Math.floor(
                      (message.args[1] * multiply - message.args[1]) *
                        (1 - nalog)
                    )
                  )}$ 💵
${wow} » ${txt}
♻️ » Умножена ставка на x${multiply} ${smileyes}`
            }`
      }
💰 » Баланс: ${utils.sp(message.user.balance)}$

	`,
      {
        attachment: photo,

        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: { command: `казино ${message.args[1]}` },

                  label: `🎰 Поставить повторно (${utils.rn(message.args[1])})`,
                },

                color: "primary",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(/^(?:русская рулетка)\s(.*)$/i, async (message, bot) => {
  message.args[1] = message.args[1].replace(/(\.|,)/gi, "");
  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");
  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");
  message.args[1] = message.args[1].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  const smileos = utils.pick(["🙂", "😇"]);
  const smileyes = utils.pick(["😃", "😄", "🤑", "☺"]);
  const smileno = utils.pick(["😕", "😔", "😫"]);

  if (message.user.balance < 100)
    return bot(`на балансе должно быть как минимум 100$ ${smileno}`);

  let multiply;

  if (message.args[1] <= 0 || message.args[1] >= 10)
    return bot(`В револьвере должно быть больше 0 и меньше 10 патронов`);
  if (message.args[1] === 1)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1,
    ]);
  if (message.args[1] === 2)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3,
    ]);

  if (message.args[1] === 3)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6, 1.6,
    ]);

  if (message.args[1] === 4)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1.9, 1.9, 1.9, 1.9, 1.9, 1.9,
    ]);

  if (message.args[1] === 5)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.3, 2.3, 2.3, 2.3, 2.3,
    ]);

  if (message.args[1] === 6)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.8, 2.8, 2.8, 2.8,
    ]);

  if (message.args[1] === 7)
    multiply = utils.pick([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3]);

  if (message.args[1] === 8)
    multiply = utils.pick([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6]);

  if (message.args[1] === 9)
    multiply = utils.pick([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10,
    ]);

  if (typeof message.user.questrussion === "number") {
    if (multiply >= 1) {
      message.user.questrussion++;

      if (message.user.questrussion >= 4) {
        message.user.questrussion = true;

        await bot(
          `Поздравляем, Вы 4 раза выиграли в русской рулетке и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    } else {
      message.user.questrussion = 0;
    }
  }

  if (typeof message.user.questrussion2 === "number") {
    if (message.user.questallfucker === true) message.user.questrussion2++;

    if (message.user.questrussion2 >= 100) {
      message.user.questrussion2 = true;

      await bot(
        `Поздравляем, Вы 100 раз играли в русской рулетке и получаете 📦 4 Донат-кейса.`
      );

      message.user.c3 += 4;
    }
  }

  if (message.user.settings.joker === true) {
    message.user.balance = Math.floor(message.user.balance * multiply + 0.1);

    message.user.bank = Math.floor(message.user.bank * multiply + 0.1);

    message.user.btc = Math.floor(message.user.btc * multiply + 0.1);

    message.user.rating = Math.floor(message.user.rating * multiply + 0.1);
  } else {
    message.user.balance = Math.floor(message.user.balance * multiply);

    message.user.bank = Math.floor(message.user.bank * multiply);

    message.user.btc = Math.floor(message.user.btc * multiply);

    message.user.rating = Math.floor(message.user.rating * multiply);
  }

  let photo = ``;

  return bot(
    `${
      multiply === 1
        ? `ваши деньги остаются при вас (x${multiply}) ${smileos}`
        : `${
            multiply < 1
              ? `вы проиграли все (x${multiply}) ${smileno}`
              : `вы выиграли увеличение баланса в (x${multiply}) раз ${smileyes}`
          }`
    }
	💰 Баланс: ${utils.sp(message.user.balance)}$`,
    {
      attachment: photo,
      keyboard: JSON.stringify({
        inline: true,
        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `русская рулетка ${message.args[1]}` },
                label: `🔫 Стрельнуть снова ${message.args[1]}`,
              },
              color: "primary",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(
  /^(?:рулетка красное|рулетка ред|ред рулетка|рулетка красный|красный рулетка|красное рулетка|рулетка красная)\s(.*)$/i,
  async (message, bot) => {
    const phrase = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`]);

    utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, `🤑`]);

    utils.pick(["🥺", "😔", "😞", "😣", "😓"]);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё|вб)/gi,
      message.user.balance
    );

    message.args[1] = Math.floor(Number(message.args[1]));

    if (!Number(message.args[1]))
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки.
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] <= 0)
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки.
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] > message.user.balance) {
      if (message.user.lte2 === false) {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      } else {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      }
    }

    if (message.args[1] >= 150000000000) {
      let prizes = utils.pick([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ]);

      let red = utils.pick([
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ]);

      let black = utils.pick([
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ]);

      if (message.args[1] <= message.user.balance) {
        if (prizes === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 2) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 4) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 6) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 8) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 10) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 12) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 14) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 16) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: 0 | ☘️ Zero
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }

    if (message.args[1] < 150000000000) {
      let prize = utils.pick([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ]);

      let red = utils.pick([
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ]);

      let black = utils.pick([
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ]);

      if (message.args[1] <= message.user.balance) {
        if (prize === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 2) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 4) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 6) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 8) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 10) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 12) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 14) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 16) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${red} | 🛑 Красное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: 0 | ☘️ Zero
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }
  }
);

oscrn(
  /^(?:рулетка черное|рулетка чёрное|рулетка черный|рулетка чёрный|черный рулетка|чёрный рулетка|рулетка блек|блек рулетка|черное рулетка|чёрное рулетка|рулетка черная|рулетка чёрная)\s(.*)$/i,
  async (message, bot) => {
    const phrase = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`]);

    utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, `🤑`]);

    utils.pick(["🥺", "😔", "😞", "😣", "😓"]);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё|вб)/gi,
      message.user.balance
    );

    message.args[1] = Math.floor(Number(message.args[1]));

    if (!Number(message.args[1]))
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] <= 0)
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] > message.user.balance) {
      if (message.user.lte2 === false) {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      } else {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      }
    }

    if (message.args[1] >= 150000000000) {
      if (message.args[1] <= message.user.balance) {
        let prizes = utils.pick([
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        ]);

        let red = utils.pick([
          1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
        ]);

        let black = utils.pick([
          2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
        ]);

        if (prizes === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 2) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 4) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 6) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 8) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 10) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 12) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 14) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$$`);
        }

        if (prizes === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 16) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: 0 | ☘️ Zero
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }

    if (message.args[1] < 150000000000) {
      let prize = utils.pick([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ]);

      let red = utils.pick([
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ]);

      let black = utils.pick([
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ]);

      if (message.args[1] <= message.user.balance) {
        if (prize === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 2) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 4) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 6) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 8) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 10) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 12) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 14) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 16) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 2);

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и выиграли!
🔢 Выпало число ${black} | ⚫ Чёрное
➕ Вы выиграли ${utils.sp(message.args[1] * 2)}$ 💵
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: 0 | ☘️ Zero
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }
  }
);

oscrn(
  /^(?:рулетка зиро|рулетка зеро|рулетка zero|зиро рулетка|зеро рулетка|zero рулетка|рулетка ноль|рулетка грин|грин рулетка|зеленое рулетка|зелёное рулетка|рулетка зеленое|рулетка зелёное)\s(.*)$/i,
  async (message, bot) => {
    const phrase = utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`]);

    utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, `🤑`]);

    utils.pick(["🥺", "😔", "😞", "😟", "😓"]);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё|вб)/gi,
      message.user.balance
    );

    message.args[1] = Math.floor(Number(message.args[1]));

    if (!Number(message.args[1]))
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки.
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] <= 0)
      return bot(
        `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки.
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
        { attachment: `photo-182435125_457257352` }
      );

    if (message.args[1] > message.user.balance) {
      if (message.user.lte2 === false) {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      } else {
        return bot(`у вас нет столько денег ${phrase}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
      }
    }

    if (message.args[1] >= 150000000000) {
      let prizes = utils.pick([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46,
      ]);

      let red = utils.pick([
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ]);

      let black = utils.pick([
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ]);

      if (message.args[1] <= message.user.balance) {
        if (prizes === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 2) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 4) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 6) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 8) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 10) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 12) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 14) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 16) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 19) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 20) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 21) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 22) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 23) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 24) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 25) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 26) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 27) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 28) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 29) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 30) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 31) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 32) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 33) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 34) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 35) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 36) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 37) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 38) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 39) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 40) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 41) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 42) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 43) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 44) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 36);

          bot(`сегодня ваш день! Вам выпало 🍀ZERO🍀, вы выиграли ${utils.sp(
            message.args[1] * 36
          )}$ (х36) ✅
💰 Баланс: ${utils.sp(message.user.balance)}$`);

          return message.sendSticker(726);
        }

        if (prizes === 45) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prizes === 46) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }

    if (message.args[1] < 150000000000) {
      let prize = utils.pick([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      ]);

      let red = utils.pick([
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
      ]);

      let black = utils.pick([
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
      ]);

      if (message.args[1] <= message.user.balance) {
        if (prize === 1) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 2) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 3) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 4) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 5) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 6) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 7) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 8) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 9) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 10) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 11) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 12) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 13) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 14) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 15) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 16) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 17) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 18) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 19) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 20) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 21) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 22) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 23) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 24) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 25) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 26) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 27) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 28) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!

🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 29) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 30) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 31) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 32) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
        if (prize === 33) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 34) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 35) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${red} | 🛑 Красное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 36) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (prize === 37) {
          message.user.balance -= message.args[1];

          message.user.balance += Math.floor(message.args[1] * 36);

          bot(`сегодня ваш день! Вам выпало 🍀ZERO🍀, вы выиграли ${utils.sp(
            message.args[1] * 36
          )}$ (х36) ✅
💰 Баланс: ${utils.sp(message.user.balance)}$`);

          return message.sendSticker(726);
        }

        if (prize === 38) {
          message.user.balance -= message.args[1];

          return bot(`вы поставили ставку и проиграли!
🔢 Выпало число: ${black} | ⚫ Чёрное
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }
  }
);

oscrn(/^(?:рулетка|🕹 Рулетка|🕹Рулетка|рулетке)$/i, async (message, bot) => {
  return bot(
    `как сыграть в рулетку?

🕹 Необходимо предугадать какой выпадет цвет!
🛑 Выпадет красное:
Рулетка красное [ставка] — в случае выигрыша вы получаете х2 со ставки.
⚫ Выпадет черное:
Рулетка черное [ставка] — в случае выигрыша вы получаете х2 со ставки.
🍀 Выпадет зеро:
Рулетка зеро [ставка] — в случае выигрыша вы получаете х36 со ставки.`,
    { attachment: `photo-182435125_457257352` }
  );
});

oscrn(/^(?:транслит)\s(.*)$/i, async (message) => {
  if (message.user.uid !== 0) return;

  message.args[1] = message.args[1].toString();

  let text = message.args[1];

  for (a in text) {
    text = text
      .replace(/(q)/gi, "й")
      .replace(/(w)/gi, "ц")
      .replace(/(e)/gi, "у")
      .replace(/(r)/gi, "к")
      .replace(/(t)/gi, "е")
      .replace(/(y)/gi, "н")
      .replace(/(u)/gi, "г")
      .replace(/(i)/gi, "ш")
      .replace(/(o)/gi, "щ")
      .replace(/(p)/gi, "з")
      .replace(/(a)/gi, "ф")
      .replace(/(s)/gi, "ы")
      .replace(/(d)/gi, "в")
      .replace(/(f)/gi, "а")
      .replace(/(g)/gi, "п")
      .replace(/(h)/gi, "р")
      .replace(/(j)/gi, "о")
      .replace(/(k)/gi, "л")
      .replace(/(l)/gi, "д")
      .replace(/(z)/gi, "я")
      .replace(/(x)/gi, "ч")
      .replace(/(c)/gi, "с")
      .replace(/(v)/gi, "м")
      .replace(/(b)/gi, "и")
      .replace(/(n)/gi, "т")
      .replace(/(m)/gi, "ь")
      .replace(/(\,)/gi, "б")
      .replace(/(\.)/gi, "ю")
      .replace(/(\;)/gi, "ж")
      .replace(/(\')/gi, "э");
  }

  message.send(text);
});

oscrn(/^(?:Русская рулетка)$/i, async (message, bot) => {
  return bot(
    `Вы вводите количество патронов заряженных в револьвер и нажимаете на курок 🔫💨.\n⚠️ Если произойдет выстрел, вы потеряете весь баланс (биткоины, банк, баланс) 😢`
  );
});

oscrn(/^(?:трейд|треид|треед)$/i, async (message, bot) => {
  return bot(
    `как заработать на трейдах?

💹 Необходимо предугадать в какую сторону пойдет график курса валют!
📈 Пойдёт вверх:
Трейд вверх [ставка]
📉 Пойдёт вниз:
Трейд вниз [ставка]`,
    { attachment: `photo-182435125_457257330` }
  );
});

oscrn(/^(?:трейд|треид|треед)\s(вверх|вниз)\s(.*)$/i, async (message, bot) => {
  utils.pick(["😳", "😞", `😟`, `😫`, `😲`]);

  const success = utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, "🤑"]);

  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  message.args[2] = message.args[2].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  if (!Number(message.args[2]))
    return bot(
      `как заработать на трейдах?

💹 Необходимо предугадать в какую сторону пойдет график курса валют!
📈 Пойдёт вверх:
Трейд вверх [ставка]
📉 Пойдёт вниз:
Трейд вниз [ставка]`,
      { attachment: `photo-182435125_457257330` }
    );

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0)
    return bot(
      `как заработать на трейдах?
💹 Необходимо предугадать в какую сторону пойдет график курса валют!
📈 Пойдёт вверх:
Трейд вверх [ставка]
📉 Пойдёт вниз:
Трейд вниз [ставка]`,
      { attachment: `photo-182435125_457257330` }
    );

  if (message.args[2] > message.user.balance)
    return bot(`у вас нет данной суммы
💰 Баланс: ${utils.sp(message.user.balance)}$`);

  if (
    typeof message.user.questtrade === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questtrade++;

    if (message.user.questtrade >= 50) {
      message.user.questtrade = true;

      await bot(
        `Вы 50 раз смогли сыграть в трейд и получаете 📦 2 Донат-кейсa.`
      );

      message.user.c3 += 2;
    }
  }

  if (message.args[2] <= message.user.balance) {
    if (message.args[2] <= 1000000000000) {
      message.user.balance -= message.args[2];

      const multiplysi = utils.pick([2, 2.1, 2.15]);

      if (message.args[1] === `вверх`) {
        const navisi = utils.pick([1, 2, 3, 4, 5, 6, 7]);

        if (navisi === 1) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 2) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 3) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 4) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);

          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 5) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 6) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);

          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navisi === 7) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }

      if (message.args[1] === `вниз`) {
        const naviv = utils.pick([1, 2, 3, 4, 5, 6, 7]);

        if (naviv === 1) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);

          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 2) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 3) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 4) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 5) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);

          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 6) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (naviv === 7) {
          message.user.balance += Math.floor(message.args[2] * multiplysi);

          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplysi)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }

    if (message.args[2] > 1000000000000) {
      message.user.balance -= message.args[2];

      const multiplys = utils.pick([2, 2.1, 2.15]);

      if (message.args[1] === `вверх`) {
        const navis = utils.pick([1, 2, 3, 4]);

        if (navis === 1) {
          message.user.balance += Math.floor(message.args[2] * multiplys);

          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplys)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navis === 2) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navis === 3) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navis === 4) {
          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }

      if (message.args[1] === `вниз`) {
        const navi = utils.pick([1, 2, 3, 4]);

        if (navi === 1) {
          message.user.balance += Math.floor(message.args[2] * multiplys);

          return bot(`курс подешевел ⏬ на ${utils.random(100)}$
💶 Ваша прибыль: +${utils.sp(
            Math.floor(message.args[2] * multiplys)
          )}$ ${success}
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navi === 2) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navi === 3) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }

        if (navi === 4) {
          return bot(`курс подорожал ⏫ на ${utils.random(100)}$
💶 Вы потеряли: -${utils.sp(Math.floor(message.args[2]))}$
💰 Баланс: ${utils.sp(message.user.balance)}$`);
        }
      }
    }
  }
});

oscrn(/^(?:бизнес)\s(\d)$/i, async (message, bot) => {
  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.user.settings.busi === true) {
    if (message.args[1] < 1 || message.args[1] > 5)
      return bot(`используйте: Бизнес [от 1 до 5]`);
  } else {
    if (message.args[1] < 1 || message.args[1] > 4)
      return bot(`используйте: Бизнес [от 1 до 4]`);
  }

  if (message.user.business.length < message.args[1])
    return bot(`у вас нет этого бизнеса`);

  message.args[1]--;

  const biz =
    businesses[message.user.business[message.args[1]].id - 1][
      message.user.business[message.args[1]].upgrade - 1
    ];
  let text = ``;
  if (!fink)
    text += `❗ Прибыль в бизнес сейчас не поступает. Введутся тех.работы\n`;

  /*if(message.user.business[message.args[1]].workers == biz.workers || businesses[message.user.business[message.args[1]].id - 1][message.user.business[message.args[1]].upgrade] != null)*/ return bot(`статистика бизнеса «${
    biz.name
  }»: ❄️
💰 Прибыль: ${utils.sp(
    Math.floor(
      (biz.earn / biz.workers) * message.user.business[message.args[1]].workers
    )
  )}$ / ч.
👷‍♂️ Рабочих: ${message.user.business[message.args[1]].workers}/${biz.workers}
💵 На балансе бизнеса: ${utils.sp(
    message.user.business[message.args[1]].moneys
  )}$

${text}
${
  businesses[message.user.business[message.args[1]].id - 1][
    message.user.business[message.args[1]].upgrade
  ] != null
    ? "▶️ Доступно улучшение бизнеса! Цена: " +
      utils.sp(
        businesses[message.user.business[message.args[1]].id - 1][
          message.user.business[message.args[1]].upgrade
        ].cost
      ) +
      "$"
    : ""
}`); 
});

oscrn(/^(?:бизнес)\s(?:снять)\s(\d)\s(.*)$/i, async (message, bot) => {
  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.user.settings.busi === true) {
    if (message.args[1] < 1 || message.args[1] > 5)
      return bot(`используйте: Бизнес снять [от 1 до 5] [количество]`);
  } else {
    if (message.args[1] < 1 || message.args[1] > 4)
      return bot(`используйте: Бизнес снять [от 1 до 4] [количество]`);
  }

  if (message.user.business.length < message.args[1])
    return bot(`у вас нет этого бизнеса`);

  message.args[1]--;

  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  message.args[2] = message.args[2].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.business[message.args[1]].moneys
  );

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0)
    return bot(`вы не можете снять столько со счёта бизнеса`);

  if (message.args[2] > message.user.business[message.args[1]].moneys)
    return bot(
      `У Вас нет столько денег на счёте этого бизнеса! ❌\n\n▶️ Баланс этого бизнеса: ${utils.sp(
        message.user.business[message.args[1]].moneys
      )}$ 💰`
    );

  message.user.balance += message.args[2];

  message.user.business[message.args[1]].moneys -= message.args[2];

  return bot(
    `Вы сняли со счёта бизнеса ${utils.sp(
      message.args[2]
    )}$ 💵\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$`
  );
});



oscrn(/^(?:бизнес)\s(?:улучшить)\s(.*)$/i, async (message, bot) => {
  message.args[1] = Math.floor(Number(message.args[1]));

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (message.user.settings.busi === true) {
    if (message.args[1] < 1 || message.args[1] > 5)
      return bot(`используйте: Бизнес улучшить [от 1 до 5]`);
  } else {
    if (message.args[1] < 1 || message.args[1] > 4)
      return bot(`используйте: Бизнес улучшить [от 1 до 4]`);
  }

  if (message.user.business.length < message.args[1])
    return bot(`у вас нет этого бизнеса`);

  message.args[1]--;

  if (
    businesses[message.user.business[message.args[1]].id - 1][
      message.user.business[message.args[1]].upgrade
    ] == null
  )
    return bot(`нет доступных улучшений для этого бизнеса! ❌`);

  const cost =
    businesses[message.user.business[message.args[1]].id - 1][
      message.user.business[message.args[1]].upgrade
    ].cost;

  if (cost > message.user.balance)
    return bot(`У Вас недостаточно денег для улучшения этого бизнеса! ❌`);

  message.user.balance -= cost;

  message.user.business[message.args[1]].upgrade++;

  return bot(
    `вы улучшили бизнес №${
      message.args[1] + 1
    } 🎉\n▶️ С Вашего баланса было снято ${utils.sp(
      cost
    )}$ 💵\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$`
  );
});

oscrn(/^(?:бизнес)\s(?:нанять)\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  message.args[2] = message.args[2].replace(/(вабанк|вобанк|все|всё)/gi, "1");

  message.args[1] = Math.floor(Number(message.args[1]));

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.user.settings.busi === true) {
    if (message.args[1] < 1 || message.args[1] > 5)
      return bot(
        `ошибка, данного бизнеса не существует. Используйте «Бизнес нанять [от 1 до 5] [кол-во работников]» ❓`
      );
  } else {
    if (message.args[1] < 1 || message.args[1] > 4)
      return bot(
        `ошибка, данного бизнеса не существует. Используйте «Бизнес нанять [от 1 до 4] [кол-во работников]» ❓`
      );
  }

  if (message.user.business.length < message.args[1])
    return bot(`у Вас нет этого бизнеса! ❌`);

  message.args[1]--;

  if (
    message.user.business[message.args[1]].workers + message.args[2] >
    businesses[message.user.business[message.args[1]].id - 1][
      message.user.business[message.args[1]].upgrade - 1
    ].workers
  )
    return bot(
      `в Вашем бизнесе не может поместится столько работников! ❌\n\n▶️ Попробуйте уменьшить кол-во.`
    );

  const cost = message.args[2] * 0;

  if (cost > message.user.balance)
    return bot(`у вас недостаточно денег для покупки рабочих`);

  message.user.balance -= cost;

  message.user.business[message.args[1]].workers += message.args[2];

  return bot(
    `вы наняли ${utils.sp(message.args[2])} рабочих 👷‍♂️ для бизнеса №${
      message.args[1] + 1
    } 🎉`
  );
});

oscrn(/^(?:сейф)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 10 || message.args[1] >= 100)
    return bot("диапазон от [10] до [99]");

  const int = utils.random(10, 99);

  message.args[1] = Number(message.args[1]);

  if (int === message.args[1]) {
    if (typeof message.user.questhack == "number") {
      message.user.questhack++;

      if (message.user.questhack >= 2) {
        message.user.c3++;

        await bot(
          `Вы дважды смогли угадать код от сейфа и получаете 📦 1 Донат-кейс.`
        );

        message.user.questhack = true;
      }
    }

    if (
      typeof message.user.questhack2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questhack2++;

      if (message.user.questhack2 >= 20) {
        message.user.questhack2 = true;

        await bot(
          `Вы 20 раз смогли открыли сейф и получаете 📦 2 донат-кейсa.`
        );

        message.user.c3 += 2;
      }
    }

    message.user.balance += 10000000000;

    return bot(`Вы успешно вскрыли и подобрали замок от данного сейфа! 🥷
💲 Вы успешно украли оттуда 10.000.000.000$ 💵`);
  } else if (int !== message.args[1]) {
    if (
      typeof message.user.questhack2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questhack2++;

      if (message.user.questhack2 >= 20) {
        message.user.questhack2 = true;

        await bot(`вы 20 раз открыли сейф и получаете 2 донат кейсa 📦`);

        message.user.c3 += 2;
      }
    }

    return bot(`вы не угадали число. Вам выпало число "${int}"
	🎉 Не отчаивайтесь, количество попыток неограниченно.

	Если вы угадаете код, то вы получите 10.000.000.000$`);
  }
});

//=========================================================================================

//=========================== Начало [Выдача привилегий] Начало ===========================

oscrn(/^(?:svip)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.vip !== false) return bot("игрок уже является [VIP]. ⚠");

    if (user.settings.premium || user.settings.titan) {
      user.settings.vip = true;

      return bot(`Игрок назначен [VIP]💎`);
    }

    user.settings.vip = true;
    user.stock.status = "VIP";
    user.limit.nicklimit = 21;
    user.level += 5;
    user.limit.banklimit = 100000000000000;
    user.limit.farmlimit = 3000;
    user.limit.videocardlimit = 50;
    user.limit.playerlimit = 100000000000000;
    user.limit.sent = 0;
    user.maxenergy = 20;

    await bot(
      `Вы выдали привилегию «VIP» игроку @id${user.id} (${user.tag}) 😱`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) выдал Вам привилегию «VIP» 💎
〽 Чтобы просмотреть список доступных Вам команд и преимуществ, напишите «VIP help» ❄
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:offvip)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.vip !== true)
      return bot("игрок не имеет [VIP] статуса. ⚠");

    user.settings.vip = false;

    user.stock.status = "Игрок";

    user.limit.nicklimit = 16;

    user.level -= 4;

    user.limit.banklimit = 50000000000000;

    user.limit.farmlimit = 1000;

    user.limit.videocardlimit = 30;

    user.limit.playerlimit = 50000000000000;

    user.limit.sent = 0;

    user.maxenergy = 10;

    await bot(
      `Вы забрали привилегию «VIP» у игрока @id${user.id} (${user.tag}) 😢`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) забрал Вашу привилегию «VIP» ❌
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:бизнесмен прем)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.busi) {
    if (message.user.timers.busiprem >= Date.now())
      return bot(`👑 Премиум можно выдать раз в неделю.`);

    message.user.timers.busiprem = Date.now() + 604800000;

    const user = await users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return;

    {
      let user = users.find((x) => x.uid === Number(message.args[1]));

      if (!user) return bot(`неверный ID игрока`);

      if (user.settings.premium !== false)
        return bot("игрок уже является [Premium]. ⚠");

      user.settings.premium = true;

      user.stock.status = "Premium";

      user.limit.nicklimit = 32;

      user.level += 35;

      user.opit += 5000;

      user.limit.banklimit = 200000000000000;

      user.limit.farmlimit = 5000;

      user.limit.videocardlimit = 75;

      user.limit.playerlimit = 200000000000000;

      user.limit.sent = 0;

      user.maxenergy = 30;

      await bot(
        `Вы выдали привилегию «PREMIUM» игроку @id${user.id} (${user.tag}) 🤗`
      );

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `▶️ Игрок @id${message.user.id} (${message.user.tag}) выдал Вам привилегию «PREMIUM» (команда бизнесмена) 🔥
〽️ Чтобы просмотреть список доступных Вам команд и преимуществ, напишите «Premium help» ❄️
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }
  }
});

oscrn(/^(?:sbusi)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  if (user.settings.busi) return bot(`игрок и так бизнесмен!`);

  user.settings.busi = true;

  user.balance += 9000000000000000;

  user.limit.banklimit = 10000000000000000000;

  user.limit.farmlimit = 150000;

  user.antiget = true;

  await bot(
    `Игрок (@id${user.id} (${user.tag})) получил привилегию «Бизнесмен» 🤗`
  );
});

oscrn(/^(?:sjoker)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  if (user.settings.joker) return bot(`игрок и так джокер!`);

  user.antiget = true;

  user.settings.joker = true;

  await bot(
    `Игрок (@id${user.id} (${user.tag})) получил привилегию «Джокер» 🤗`
  );
});

oscrn(/^(?:sprem)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.premium !== false)
      return bot(
        `Игрок [@id${user.id} (${user.tag})] уже имеет привилегию Premium 😸`
      );

    user.settings.premium = true;
    user.stock.status = "Premium";
    user.limit.nicklimit = 32;
    user.level += 35;
    user.opit += 5000;
    user.limit.banklimit = 200000000000000;
    user.limit.farmlimit = 5000;
    user.limit.videocardlimit = 75;
    user.limit.playerlimit = 200000000000000;
    user.limit.sent = 0;
    user.maxenergy = 30;

    await bot(`игрок назначен [Premium] 💎`);

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) выдал Вам привилегию «PREMIUM» 🔥
〽️ Чтобы просмотреть список доступных Вам команд и преимуществ, напишите «Premium help» ❄️
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:offprem)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.premium !== true)
      return bot("игрок не имеет [Premium] статуса. ⚠");

    user.settings.premium = false;

    user.stock.status = "Игрок";

    user.level -= 19;

    user.opit -= 5000;

    user.limit.nicklimit = 16;

    user.limit.banklimit = 50000000000000;

    user.limit.farmlimit = 1000;

    user.limit.videocardlimit = 30;

    user.limit.playerlimit = 50000000000000;

    user.limit.sent = 0;

    user.maxenergy = 10;

    await bot(
      `Вы забрали статус «PREMIUM» у игрока @id${user.id} (${user.tag}) 😢`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) забрал Вашу привилегию «PREMIUM» ❌
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:stitan)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.titan !== false)
      return bot("игрок уже является [TITAN]. ⚠");

    user.settings.titan = true;

    user.stock.status = "Titan";

    user.limit.nicklimit = 48;

    user.level += 50;

    user.opit += 50000;

    user.limit.banklimit = 500000000000000;

    user.limit.farmlimit = 10000;

    user.limit.playerlimit = 300000000000000;

    user.limit.sent = 0;

    user.limit.videocardlimit = 100;

    user.maxenergy = 100;

    await bot(
      `Вы выдали привилегию « TITAN » игроку @id${user.id} (${user.tag}) 😸`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) выдал Вам привилегию «TITAN» 😸
〽️ Чтобы просмотреть список доступных Вам команд и преимуществ, напишите «TITAN help» ❄️
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:offtitan)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока`);

    if (user.settings.titan !== true)
      return bot("игрок не имеет [Titan] статуса. ⚠");

    user.settings.titan = false;

    user.stock.status = "Игрок";

    user.level -= 19;

    user.opit -= 5000;

    user.limit.nicklimit = 16;

    user.limit.banklimit = 50000000000000;

    user.limit.farmlimit = 1000;

    user.limit.videocardlimit = 30;

    user.limit.playerlimit = 50000000000000;

    user.limit.sent = 0;

    user.maxenergy = 10;

    await bot(`забрал у игрока TITAN-статус! ⛔`);

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ Администратор @id${message.user.id} (${message.user.tag}) забрал Вашу привилегию «TITAN» ❌
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^setadmin\s([0-9]+)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  if (!Number(message.args[1])) return;

  if (message.args[2] < 0) return;

  const user = await users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`такого игрока нету в БД! ☹️`);

  user.limitadd.playerlimitadd = 1000000000000;

  user.settings.adm = message.args[2];

  user.bantop = true;

  await bot(
    `игрок [@id${user.id} (${user.tag})] был назначен на ${message.args[2]}ур. админки`
  );

  if (user.notifications)
    await vk.api.messages.send({
      user_id: user.id,
      message: `▶️ Владелец @id${message.user.id} (${message.user.tag}) назначил Вас на ${message.args[2]}ур. администратора! 😸

⚠️ До того, как Вы начнёте использовать администратора - ознакомьтесь с некоторыми важными частями ❗
📚 Все админ-команды использовать ТОЛЬКО в беседе администраторов или л/с (vk.me/club228105719)!
👉 Сразу ознакомьтесь со списком админ-правил по команде «аправила».
💾 Узнать список всех админ-команд можно по команде «акмд».
💬 Обязательно состоять в оф. беседе и админ беседе. `,
      random_id: 0,
    });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:
▶️ Владелец @id${message.user.id} (${message.user.tag}) выдал ${message.args[2]}ур. администратора игроку @id${user.id} (${user.tag}) ❄️`,
  });
});

oscrn(/^(?:vos)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  message.user.settings.adm = 6;

  message.user.bantop = true;

  await bot(`вы были восстановлены в правах. ✅`);
});

oscrn(/^(?:ответвкл)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  user.answeraccess = true;

  await message.send(
    `▶️ Администратор/агент @id${user.id} (${user.tag}) получил доступ к ответам! Теперь он может отвечать на репорты 😸`
  );
});

oscrn(/^(?:ответвыкл)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  user.answeraccess = false;

  await message.send(
    `▶️ Администратору/агенту @id${user.id} (${user.tag}) был закрыт доступ к ответам! Теперь он не может отвечать на репорты ❌😢`
  );
});

oscrn(
  /^(?:копать|⛏ Копать|@club228105719 ⛏ Копать|⛏ Шахта)$/i,
  async (message, bot) => {
    return bot(
      `Информация о шахте: ❄️
▶️ Чтобы копать определенную руду, используйте команду «копать железо/золото/алмазы/материю/обсидиан/плазму» ⛏️`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⛏ Копать железо",
                },
                color: "positive",
              },
            ],
          ],
        }),
      },
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⛏ Копать золото",
                },
                color: "positive",
              },
            ],
          ],
        }),
      },
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⛏ Копать алмазы",
                },
                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
);

//Кнопка

oscrn(
  /^(?:копать железо|⛏ Копать железо)\s([0-9]+)$/i,
  async (message, bot) => {
    if (!message.user.settings.titan)
      return bot(
        `Копать железо несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    if (message.user.energy < Number(message.args[1]))
      return bot(`недостаточно энергии`);

    let user = message.user;

    let randzhelezo = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(12, 50);

      randzhelezo += rand;
    }

    if (user.minertool >= 1) {
      randzhelezo *= 2;

      user.opit += Number(message.args[1]);
    }

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzhelezo *= 1.5;
        }
      }
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейсa.`
        );

        message.user.c3 += 2;
      }
    }

    randzhelezo = Math.floor(Math.round(randzhelezo));

    message.user.energy -= Number(message.args[1]);

    message.user.opit += Number(message.args[1]);

    message.user.ruds.zhelezo += randzhelezo;

    return bot(`+${utils.sp(randzhelezo)} железа ⚙️
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

oscrn(/^(?:копать железо|⛏ Копать железо)$/i, async (message, bot) => {
  let user = message.user;

  if (message.user.energy < 1) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  let randzhelezo = utils.random(12, 50);

  if (user.minertool >= 1) {
    randzhelezo *= 2;

    user.opit += 1;
  }

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randzhelezo *= 1.5;
      }
    }
  }

  if (typeof message.user.questminer === "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  randzhelezo = Math.floor(Math.round(randzhelezo));

  message.user.energy -= 1;

  message.user.opit += 1;

  message.user.ruds.zhelezo += randzhelezo;

  return bot(
    `+${utils.sp(randzhelezo)} железа ⚙️
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "⛏ Копать железо",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randzhelezo)} железа ⚙️
У Вас закончилась энергия! 🔋🤒 `,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать железо",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

//кнопка

oscrn(/^(?:копать золото|⛏ Копать золото)$/i, async (message, bot) => {
  if (message.user.opit < 300)
    return bot(
      `чтобы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`
    );

  if (message.user.energy < 1) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  if (typeof message.user.questminer === "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  let randzoloto = utils.random(4, 30);

  if (message.user.minertool >= 2) {
    randzoloto *= 2;

    message.user.opit += 5;
  }

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randzoloto *= 1.5;
      }
    }
  }

  randzoloto = Math.floor(Math.round(randzoloto));

  message.user.energy -= 1;

  message.user.opit += 5;

  message.user.ruds.zoloto += randzoloto;

  if (message.user.energy > 0)
    return bot(
      `+${utils.sp(randzoloto)} золота 💛
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать золото",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randzoloto)} золота 💛
У Вас закончилась энергия! 🔋🤒`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать золото",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(
  /^(?:копать золото|⛏ Копать золото)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.opit < 300)
      return bot(
        `чтобы копать золото нужно больше 300 опыта. Копайте железо и увеличивайте свой опыт! ⚠`
      );

    if (!message.user.settings.titan)
      return bot(
        `Копать золото несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    if (message.user.energy < Number(message.args[1])) {
      message.send({
        sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
      });

      return bot(
        `у Вас нехватает энергии! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
      );
    }

    let user = message.user;

    let randzoloto = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(1, 30);

      randzoloto += rand;
    }

    if (user.minertool >= 2) {
      randzoloto *= 2;

      user.opit += Number(message.args[1]) * 5;
    }

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzoloto *= 1.5;
        }
      }
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    randzoloto = Math.floor(Math.round(randzoloto));

    message.user.energy -= Number(message.args[1]);

    message.user.opit += Number(message.args[1]);

    message.user.ruds.zoloto += randzoloto;

    return bot(`+${utils.sp(randzoloto)} золота 💛
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

//кнопка

oscrn(/^(?:копать алмазы|⛏ Копать алмазы)$/i, async (message, bot) => {
  if (message.user.opit < 1500)
    return bot(
      `чтобы копать алмазы нужно больше 1.500 опыта. Копайте золото/железо и увеличивайте свой опыт! ⚠`
    );

  if (message.user.energy < 1) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  if (typeof message.user.questminer === "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  let randalmaz = utils.random(2, 18);

  if (message.user.minertool >= 3) {
    randalmaz *= 2;

    message.user.opit += 10;
  }

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randalmaz *= 1.5;
      }
    }
  }

  randalmaz = Math.floor(Math.round(randalmaz));

  message.user.energy -= 1;

  message.user.opit += 10;

  message.user.ruds.almaz += randalmaz;

  if (message.user.energy > 0)
    return bot(
      `+${utils.sp(randalmaz)} алмазов 💎
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать алмазы",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randalmaz)} алмазов 💎
У Вас закончилась энергия! 🔋🤒`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать алмазы",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(
  /^(?:копать алмазы|⛏ Копать алмазы)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.opit < 1500)
      return bot(
        `чтобы копать алмазы нужно больше 1.500 опыта. Копайте золото/железо и увеличивайте свой опыт! ⚠`
      );

    if (!message.user.settings.titan)
      return bot(
        `Копать алмазы несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    if (message.user.energy < Number(message.args[1])) {
      message.send({
        sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
      });

      return bot(
        `у Вас недостаточно энергии! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
      );
    }

    let user = message.user;

    let randzoloto = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(2, 6);

      randzoloto += rand;
    }

    if (user.minertool >= 3) {
      randzoloto *= 2;

      user.opit += Number(message.args[1]) * 10;
    }

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzoloto *= 1.5;
        }
      }
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    randzoloto = Math.floor(Math.round(randzoloto));

    message.user.energy -= Number(message.args[1]);

    message.user.opit += Number(message.args[1]);

    message.user.ruds.almaz += randzoloto;

    return bot(`+${utils.sp(randzoloto)} алмазов 💎
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

//кнопка

oscrn(/^(?:копать материю|⛏ Копать материю)$/i, async (message, bot) => {
  if (message.user.opit < 50000)
    return bot(`чтобы копать материю нужно больше 50.000 опыта. ⚠`);

  if (message.user.energy < 2) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  if (typeof message.user.questminer === "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  let randmateria = utils.random(2, 6);

  if (message.user.minertool >= 4) randmateria *= 2;

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randmateria *= 1.5;
      }
    }
  }

  randmateria = Math.floor(Math.round(randmateria));

  message.user.energy -= 2;

  message.user.opit += 20;

  message.user.ruds.materia += randmateria;

  if (message.isChat) {
    if (chats[message.chatId].statuemsglvl >= 3) {
      message.user.energy += 1;
    }
  }

  if (message.user.energy > 0)
    return bot(
      `+${utils.sp(randmateria)} материи 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать материю",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randmateria)} материи 🌌
У Вас закончилась энергия! 🔋🤒`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать материю",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(
  /^(?:копать материю|⛏ Копать материю)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.opit < 50000)
      return bot(`чтобы копать материю нужно больше 50.000 опыта. ⚠`);

    if (!message.user.settings.titan)
      return bot(
        `Копать материю несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    let randzoloto = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(1, 18);

      randzoloto += rand;
    }

    if (message.user.minertool >= 4) randzoloto *= 2;

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzoloto *= 1.5;
        }
      }
    }

    if (message.isChat && chats[message.chatId].statuemsglvl >= 3) {
      if (message.user.energy < Number(message.args[1]))
        return bot(`⚠ Недостаточно энергии`);

      randzoloto = Math.floor(Math.round(randzoloto));

      message.user.energy -= Number(message.args[1]);

      message.user.opit += Number(message.args[1]) * 20;

      message.user.ruds.materia += randzoloto;
    } else {
      randzoloto = Math.floor(Math.round(randzoloto));

      if (message.user.energy < Number(message.args[1]) * 2)
        return bot(`⚠ Недостаточно энергии`);

      message.user.energy -= Number(message.args[1]) * 2;

      message.user.opit += Number(message.args[1]) * 20;

      message.user.ruds.materia += randzoloto;
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    return bot(`+${utils.sp(randzoloto)} материи 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

oscrn(/^(?:копать обсидиан|⛏ Копать обсидиан)$/i, async (message, bot) => {
  if (message.user.opit < 100000)
    return bot(`чтобы копать обсидиан нужно больше 100.000 опыта. ⚠`);

  if (message.user.energy < 2) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  if (typeof message.user.questminer === "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  let randobsidian = utils.random(1, 3);

  if (message.user.minertool >= 5) randobsidian *= 2;

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randobsidian *= 1.5;
      }

      if (chats[message.chatId].statuemsglvl >= 3) {
        message.user.energy += 1;
      }
    }
  }

  randobsidian = Math.floor(Math.round(randobsidian));

  message.user.energy -= 2;

  message.user.opit += 50;

  message.user.ruds.obsidian += randobsidian;

  if (message.user.energy > 0)
    return bot(
      `+${utils.sp(randobsidian)} обсидиана 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать обсидиан",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randobsidian)} обсидиана 🌌
У Вас закончилась энергия! 🔋🤒`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать обсидиан",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(
  /^(?:копать обсидиан|⛏ Копать обсидиан)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.opit < 100000)
      return bot(`чтобы копать обсидиан нужно больше 100.000 опыта. ⚠`);

    if (!message.user.settings.titan)
      return bot(
        `Копать обсидиан несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    let randzoloto = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(1, 3);

      randzoloto += rand;
    }

    if (message.user.minertool >= 4) randzoloto *= 2;

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzoloto *= 1.5;
        }
      }
    }

    if (message.isChat && chats[message.chatId].statuemsglvl >= 3) {
      if (message.user.energy < Number(message.args[1]))
        return bot(`⚠ Недостаточно энергии`);

      randzoloto = Math.floor(Math.round(randzoloto));

      message.user.energy -= Number(message.args[1]);

      message.user.opit += Number(message.args[1]) * 50;

      message.user.ruds.obsidian += randzoloto;
    } else {
      randzoloto = Math.floor(Math.round(randzoloto));

      if (message.user.energy < Number(message.args[1]) * 2)
        return bot(`⚠ Недостаточно энергии`);

      message.user.energy -= Number(message.args[1]) * 2;

      message.user.opit += Number(message.args[1]) * 50;

      message.user.ruds.obsidian += randzoloto;
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    return bot(`+${utils.sp(randzoloto)} обсидиана 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

oscrn(/^(?:копать плазму|⛏ Копать плазму)$/i, async (message, bot) => {
  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuepeoplelvl <= 5) {
        return bot(
          `Статуя в этой беседе недостаточно улучшена для компания плазмы ❌`
        );
      }
    }
  } else {
    return bot(
      `Ресурс можно добыть только в беседе со статуей людей больше 5 уровня ❌`
    );
  }

  if (message.user.opit < 1000000)
    return bot(`чтобы копать плазму нужно больше 1.000.000 опыта. ⚠`);

  if (typeof message.user.questminer == "number") {
    message.user.questminer++;

    if (message.user.questminer >= 50) {
      message.user.questminer = true;

      await bot(
        `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questminer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questminer2++;

    if (message.user.questminer2 >= 5000) {
      message.user.questminer2 = true;

      await bot(
        `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  }

  let en = 4;

  let randplazma = utils.random(1, 2);

  if (message.user.minertool >= 5) randplazma *= 2;

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 2) {
        randplazma *= 1.5;
      }

      if (chats[message.chatId].statuemsglvl >= 3) {
        en = 3;
      }
    }
  }

  randplazma = Math.floor(Math.round(randplazma));

  if (message.user.energy < en) {
    message.send({
      sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
    });

    return bot(
      `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
    );
  }

  message.user.energy -= en;

  message.user.opit += 500;

  message.user.ruds.plazma += randplazma;

  if (message.user.energy > 0)
    return bot(
      `+${utils.sp(randplazma)} плазмы 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать плазму",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.energy < 1) {
    return bot(
      `+${utils.sp(randplazma)} плазмы 🌌
У Вас закончилась энергия! 🔋🤒`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⛏ Копать плазму",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(
  /^(?:копать плазму|⛏ Копать плазму)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuepeoplelvl <= 5) {
          return bot(
            `В этой беседе статуя недостаточно улучшена для копания плазмы ❌`
          );
        }
      }
    } else {
      return bot(
        `Ресурс можно добыть только в беседе со статуей людей больше 5 уровня ❌`
      );
    }

    if (message.user.opit < 1000000)
      return bot(`чтобы копать плазму нужно больше 1.000.000 опыта. ⚠`);

    if (!message.user.settings.titan)
      return bot(
        `Копать плазму несколько раз можно только Titan VIP\n❓Покупка: Донат`
      );

    if (!message.user.settings.topdon) {
      if (Number(message.args[1]) < 1 || Number(message.args[1]) > 10)
        return bot(`Больше 10 копаний за раз сделать нельзя.`);
    }

    let randzoloto = 0;

    let t = Number(message.args[1]);

    for (let i = 0; i < t; i++) {
      let rand = utils.random(1, 2);

      randzoloto += rand;
    }

    if (message.user.minertool >= 4) randzoloto *= 2;

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 2) {
          randzoloto *= 1.5;
        }
      }
    }

    if (message.isChat && chats[message.chatId].statuemsglvl >= 3) {
      if (message.user.energy < Number(message.args[1]) * 3)
        return bot(`⚠ Недостаточно энергии`);

      randzoloto = Math.floor(Math.round(randzoloto));

      message.user.energy -= Number(message.args[1]) * 3;

      message.user.opit += Number(message.args[1]) * 500;

      message.user.ruds.plazma += randzoloto;
    } else {
      randzoloto = Math.floor(Math.round(randzoloto));

      if (message.user.energy < Number(message.args[1]) * 4)
        return bot(`⚠ Недостаточно энергии`);

      message.user.energy -= Number(message.args[1]) * 4;

      message.user.opit += Number(message.args[1]) * 500;

      message.user.ruds.plazma += randzoloto;
    }

    if (typeof message.user.questminer === "number") {
      message.user.questminer += Number(message.args[1]);

      if (message.user.questminer >= 50) {
        message.user.questminer = true;

        await bot(
          `Поздравляем, Вы 50 раз покопали руду и получаете 📦 1 Донат-кейс.`
        );

        message.user.c3 += 1;
      }
    }

    if (
      typeof message.user.questminer2 === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questminer2 += Number(message.args[1]);

      if (message.user.questminer2 >= 5000) {
        message.user.questminer2 = true;

        await bot(
          `Поздравляем, Вы 5000 раз покопали руду и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    return bot(`+${utils.sp(randzoloto)} плазмы 🌌
⚡ Энергия: ${message.user.energy}, опыт: ${utils.sp(message.user.opit)}`);
  }
);

oscrn(/^(?:реф)\s([0-9]+)$/i, async (message, bot) => {
  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (user.id === message.user.id) return bot("Вы указали сами себя");

  if (!user) return bot("ID не найден");

  if (message.user.ref === true)
    return bot("Вы уже получили бонус за реферала");

  message.user.ref = true;

  let multiply = [1, 2, 3, 4];

  multiply = utils.pick(multiply);

  user.refcount += 1;

  user.fertilizer += 2;

  user.water += 2;

  if (user.refcount < 10) {
    if (multiply === 1) {
      user.c3 += 1;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ✅
				▶ Вам начислен 1 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 2) {
      user.balance += 10000000000000;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 10.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 3) {
      user.c2 += 3;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 3 Золотых-кейса за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 4) {
      user.rubli += 1;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 1 рубль за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }
  }

  if (user.refcount > 10 && user.refcount < 100) {
    if (multiply === 1) {
      user.c3 += 2;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 2 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 2) {
      user.balance += 20000000000000;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 20.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 3) {
      user.c2 += 5;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 5 Золотых-кейсов за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 4) {
      user.rubli += 2;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 2 рубля за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }
  }

  if (user.refcount === 666) {
    user.stars5 = true;

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислена лучшая звезда за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }

  if (user.refcount > 100 && user.refcount !== 666) {
    if (multiply === 1) {
      user.c3 += 3;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 3 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 2) {
      user.balance += 50000000000000;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 50.000.000.000.000$ за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 3) {
      user.c2 += 10;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 10 Золотых-кейсов за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }

    if (multiply === 4) {
      user.rubli += 3;

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислено 3 рубля за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомнения выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });
    }
  }

  if (user.refcount % 20 === 0) {
    user.c6 += 1;

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `УВЕДОМЛЕНИЕ ✅
			▶ Вам начислен 1 Секретный-кейс за то что игрок указал, что вы его пригласили!
			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }

  message.user.c3 += 5;

  return bot(
    "✅Вы получили 5 донат-кейсов за указание пригласившего вас игрока✅"
  );
});

oscrn(/^(?:реф)\s([^]+)$/i, async (message, bot) => {
  message.text.split(" ");

  let m = /^(?:https)\:\/\/(?:vk.com)\//i;

  if (m.test(message.args[1])) {
    message.args[1] = message.args[1].replace(
      /(?:https)\:\/\/(?:vk.com)\//gi,
      ""
    );

    await vk.api.utils
      .resolveScreenName({ screen_name: message.args[1] })

      .then(async (res) => {
        let user = users.find((x) => x.id === res.object_id);

        if (!user) return bot(`Неверный URL игрока!`);

        if (user.id === message.user.id) return bot("Вы указали сами себя");

        if (!user) return bot("ID не найден");

        if (message.user.ref === true)
          return bot("Вы уже получили бонус за реферала");

        message.user.ref = true;

        multiply = [1, 2, 3, 4];

        multiply = utils.pick(multiply);

        user.refcount += 1;

        user.fertilizer += 2;

        user.water += 2;

        if (user.refcount < 10) {
          if (multiply === 1) {
            user.c3 += 1;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислен 1 донат-кейс за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 2) {
            user.balance += 10000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислено 10.000.000.000.000$ за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 3) {
            user.c2 += 3;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислено 3 Золотых-кейса за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 4) {
            user.rubli += 1;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислено 1 рубль за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }
        }

        if (user.refcount > 10 && user.refcount < 100) {
          if (multiply === 1) {
            user.c3 += 2;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислено 2 донат-кейс за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 2) {
            user.balance += 20000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислено 20.000.000.000.000$ за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 3) {
            user.c2 += 5;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислено 5 Золотых-кейсов за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 4) {
            user.rubli += 2;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислено 2 рубля за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }
        }

        if (user.refcount === 666) {
          user.stars5 = true;

          if (user.notifications)
            await vk.api.messages.send({
              user_id: user.id,

              message: `УВЕДОМЛЕНИЕ ✅
						▶ Вам начислена лучшая звезда за то что игрок указал, что вы его пригласили!
						🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,

              random_id: 0,
            });
        }

        if (user.refcount > 100 && user.refcount !== 666) {
          if (multiply === 1) {
            user.c3 += 3;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
				▶ Вам начислено 3 донат-кейс за то что игрок указал, что вы его пригласили!
				🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 2) {
            user.balance += 50000000000000;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислено 50.000.000.000.000$ за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 3) {
            user.c2 += 10;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислено 10 Золотых-кейсов за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }

          if (multiply === 4) {
            user.rubli += 3;

            if (user.notifications)
              await vk.api.messages.send({
                user_id: user.id,
                message: `УВЕДОМЛЕНИЕ ✅
	▶ Вам начислено 3 рубля за то что игрок указал, что вы его пригласили!
	🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
                random_id: 0,
              });
          }
        }

        if (user.refcount % 20 === 0) {
          user.c6 += 1;

          if (user.notifications)
            await vk.api.messages.send({
              user_id: user.id,
              message: `УВЕДОМЛЕНИЕ ✅
▶ Вам начислен 1 Секретный-кейс за то что игрок указал, что вы его пригласили!
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
              random_id: 0,
            });
        }

        message.user.c3 += 5;

        return bot(
          "Вы получили 5 донат-кейсов за указание пригласившего вас игрока)"
        );
      });
  }
});

oscrn(
  /^(?:реф|🏆 реферал|реферал|@club228105719 реф|@club228105719 реферал|реферальная система)$/i,
  async (message, bot) => {
    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`❄️`,`🎄`,`☃️`,`🎅`]);

    let ref = `https://vk.me/public228105719?ref=${message.senderId}&ref_source=${message.senderId}`;

    let refka = await vk.api.utils.getShortLink({ url: ref });

    return bot(`Вы пригласили ${utils.sp(
      message.user.refcount
    )} пользователей ${smileng}

💰 За приглашение Вы получите один из призов:
👥 До 10 приглашённых - может выпасть: 1 донат-кейс, 3 золотых кейса, 1 рубль
👥 До 100 приглашённых- может выпасть: 2 донат-кейса, 20.000.000.000.000$ или 5 золотых кейсов, 2 рубля
👥 До 10000 приглашённых - может выпасть: 3 донат-кейса, 50.000.000.000.000$ , 10 золотых кейсов, 3 рубля
👥 За каждого 20 игрока даётся секретный кейс
👥 За 666 приглашённых вы получите звезду «Донатный гигант», прибыль: 30 ЧакоРуб/час

📌 Чтобы пригласить друга, отправьте ссылку: ${refka.short_url}

➖ Он должен нажать кнопку «Начать» и Вы получите приз!`);
  }
);

oscrn(
  /^(?:благотворительность снять|снять благотворительность)$/i,
  async (message, bot) => {
    if (message.user.bral === undefined) {
      message.user.bral = Date.now() + 86400000;
    }

    if (message.user.bral > Date.now())
      return bot(`вы уже брали деньги с банка благотворительности! ❌
⏳ Подождите ещё ${unixStampLeft(message.user.bral - Date.now())}!`);

    message.user.balance += Math.floor(Number(blago.balance * 0.02));

    blago.balance -= Math.floor(Number(blago.balance * 0.02));

    message.user.bral = Date.now() + 86400000;

    return bot(`вы сняли с счета благотворительности ${utils.sp(
      blago.balance * 0.02
    )}$ 💰
⏳ Возвращайся через ${unixStampLeft(message.user.bral - Date.now())}!`);
  }
);

oscrn(
  /^(?:благо|благотворительный фонд|фонд|благотворительный|благотворительность)$/i,
  async (message) => {
    return message.send(
      `✌️ @id${message.user.id} (${
        message.user.tag
      }), благотворительный фонд «Алёша» — это помощь новичкам в боте.
👨🏻‍💻 Новички и игроки смогут брать 2% с баланса фонда каждые сутки, и тратить их куда угодно.
↪️ Снять деньги с благотворительности: "благотворительность снять"
💬 Положить деньги: "благотворительность положить [сумма]"
💵 Банк благотворительности: ${utils.sp(blago.balance)}$`,
      { attachment: `photo-211261524_457248068` }
    );
  }
);

oscrn(
  /^(?:питомцы|🦊 Питомцы|@club228105719 🦊 Питомцы)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(`питомцы:
🐠 1. Рыбка (${utils.sp(pets.find((x) => x.id === Number(1)).cost)}$)
🐢 2. Черепашка (${utils.sp(pets.find((x) => x.id === Number(2)).cost)}$)
🦆 3. Утка (${utils.sp(pets.find((x) => x.id === Number(3)).cost)}$)
🐷 4. Свинья (${utils.sp(pets.find((x) => x.id === Number(4)).cost)}$)
🦘 5. Кенгуру (${utils.sp(pets.find((x) => x.id === Number(5)).cost)}$)
🐶 6. Собака (${utils.sp(pets.find((x) => x.id === Number(6)).cost)}$)
🐼 7. Панда (${utils.sp(pets.find((x) => x.id === Number(7)).cost)}$)
🦖 8. Динозавр (${utils.sp(pets.find((x) => x.id === Number(8)).cost)}$)
🐝 9. Пчелка (${utils.sp(
        pets.find((x) => x.id === Number(9)).cost
      )} SpringCoins ☣)
🐋 10. Кит (${utils.sp(
        pets.find((x) => x.id === Number(10)).cost
      )} SpringCoins ☣)

🛒 Для приобретения введите «Питомцы [номер]»`);

    const sell = pets.find((x) => x.id === Number(message.args[1]));

    if (!sell) return;

    if (message.user.misc.pet) return bot(`у Вас уже есть питомец.`);

    if (message.args[1] < 1 || message.args[1] > 10)
      return bot("Неверный номер питомца.");

    if (message.args[1] < 9) {
      if (message.user.balance < sell.cost)
        return bot(
          `у Вас недостаточно денег на балансе!\n\n🐶 Стоимость питомца: ${utils.sp(
            sell.cost
          )}$\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$`
        );
      else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;

        message.user.misc.pet = sell.id;

        message.user.pet.lvl += 1;
      }
    }

    if (message.args[1] > 8) {
      if (message.user.sprcoin < sell.cost)
        return bot(
          `вам нужно ${utils.sp(sell.cost)} SpringCoins☣ для покупки.`
        );
      else if (message.user.sprcoin >= sell.cost) {
        message.user.sprcoin -= sell.cost;

        message.user.misc.pet = sell.id;

        message.user.pet.lvl += 1;
      }
    }

    const pet = pets.find((x) => x.id === message.user.misc.pet);

    return bot(
      `вы приобрели питомца «${sell.name}» за ${utils.sp(
        sell.cost
      )}$ 💵\n\n〽️ Прокачивайте своего питомца и отправляйте на прогулку, чтобы он приносил ещё больше денег! ${
        pet.ico
      }`
    );
  }
);

oscrn(/^(?:питомец)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
  else {
    const pet = pets.find((x) => x.id === message.user.misc.pet);

    if (pets[message.user.misc.pet - 1].id > 19) {
      return bot(
        `информация:
${pet.ico} Питомец: «${pets[message.user.misc.pet - 1].name}»
💳 Стоимость улучшения: ${utils.sp(
          petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl
        )} SpringCoins ☣️
🌟 Уровень: ${message.user.pet.lvl}`,
        { attachment: pets[message.user.misc.pet - 1].photo }
      );
    }

    return bot(
      `информация о Вашем питомце: ❄️
${pet.ico} Питомец: «${pets[message.user.misc.pet - 1].name}» 🔥
➖➖➖➖➖
💵 Стоимость улучшения: ${utils.sp(
        petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl
      )}$
〽️ Уровень: ${utils.sp(message.user.pet.lvl)}`,
      { attachment: pets[message.user.misc.pet - 1].photo }
    );
  }
});

oscrn(/^(?:питомец 2)$/i, async (message, bot) => {
  if (message.user.misc.pet2 < 1) return bot(`у Вас нет питомца.`);
  else {
    const pet = pets2.find((x) => x.id === message.user.misc.pet2);

    return bot(
      `информация:

${pet.ico} Питомец: «${pets2[message.user.misc.pet2 - 1].name}»

`,
      { attachment: pets2[message.user.misc.pet2 - 1].photo }
    );
  }
});

oscrn(/^(?:питомец улучшить)$/i, async (message, bot) => {
  let lvlpoupd;
  let priceupd;
  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  if (message.user.misc.pet < 1)
    return bot(
      `у Вас нет питомца! 😿\n\n▶️ Просмотреть список продаваемых питомцев можно написав команду «Питомцы» 🛒`
    );
  else {
    const pet = pets.find((x) => x.id === message.user.misc.pet);

    if (pets[message.user.misc.pet - 1].id === 20) {
      if (
        message.user.sprcoin <
        petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl
      )
        return bot(`недостаточно SpringCoins ☣️`);

      if (message.user.pet.lvl > 14)
        return bot(`ваш питомец максимально улучшен! ${pet.ico}`);

      priceupd = petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl;

      lvlpoupd = message.user.pet.lvl + 1;

      message.user.sprcoin -= priceupd;

      message.user.pet.lvl += 1;

      return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(
        priceupd
      )} SpringCoins ☣️
	Баланс SpringCoins: ${utils.sp(message.user.sprcoin)} ☣️`);
    }

    if (
      message.user.balance <
      petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl
    )
      return bot(
        `у Вас недостаточно денег! ❌\n\n▶️ Стоимость улучшения: ${utils.sp(
          petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl
        )}$ 💵\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$`
      );

    if (message.user.pet.lvl > 14)
      return bot(`ваш питомец максимально улучшен! 😸`);

    priceupd = petsupd[message.user.misc.pet - 1].cost * message.user.pet.lvl;

    lvlpoupd = message.user.pet.lvl + 1;

    message.user.balance -= priceupd;

    message.user.pet.lvl += 1;

    return bot(`питомец был прокачен до ${lvlpoupd} уровня за ${utils.sp(
      priceupd
    )}$ 💵
▶️ Ваш баланс: ${utils.sp(message.user.balance)}$ 💰`);
  }
});

oscrn(/^(?:питомец 2 поход)$/i, async (message, bot) => {
  const pet = pets2.find((x) => x.id === message.user.misc.pet2);

  const earn = utils.random(pet.min, pet.max);

  if (message.user.timers.poxod2 > Date.now())
    return bot(
      `вы сможете отправить питомца в поход через ${unixStampLefta(
        message.user.timers.poxod2 - Date.now()
      )} Ваш питомец довольно сильно устал!`
    );

  message.user.sprcoin += earn;

  message.user.timers.poxod2 = Date.now() + 300000;

  return bot(`ваш питомец нашёл в походе ${utils.sp(earn)} SpringCoins ☣.`);
});

oscrn(/^(?:питомец 3 поход)$/i, async (message, bot) => {
  const pet = pets3.find((x) => x.id === message.user.misc.pet3);

  const earn = utils.random(pet.min, pet.max);

  if (message.user.timers.poxod3 > Date.now())
    return bot(
      `вы сможете отправить питомца в поход через ${unixStampLefta(
        message.user.timers.poxod3 - Date.now()
      )} Ваш питомец довольно сильно устал!`
    );

  message.user.sprcoin += earn;

  message.user.timers.poxod3 = Date.now() + 300000;

  return bot(`ваш питомец нашёл в походе ${utils.sp(earn)} SpringCoins ☣.`);
});

oscrn(/^(?:питомец поход)$/i, async (message, bot) => {
  if (message.user.misc.pet < 1) return bot(`у Вас нет питомца.`);
  else {
    if (pets[message.user.misc.pet - 1].id === 20) {
      let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      if (message.user.timers.poxod > Date.now())
        return bot(
          `вы сможете отправить питомца в поход через ${unixStampLefta(
            message.user.timers.poxod - Date.now()
          )} Ваш питомец довольно сильно устал!`
        );

      message.user.timers.poxod = Date.now() + 3600000;

      const pet = pets.find((x) => x.id === message.user.misc.pet);

      const earn = utils.random(pet.min, pet.max) * message.user.pet.lvl;

      if (prize === 1) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 2) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 3) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 4) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 5) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 6) {
        message.user.sprcoin += earn;

        return bot(`ваш питомец нашёл в походе ${utils.sp(
          earn
        )} SpringCoins ☣️. Улучшайте своего питомца!

		`);
      }

      if (prize === 7) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 8) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 9) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }

      if (prize === 10) {
        message.user.sprcoin += earn;

        return bot(
          `ваш питомец нашёл в походе ${utils.sp(
            earn
          )} SpringCoins ☣️. Улучшайте своего питомца!`
        );
      }
    }

    let prize = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    if (message.user.timers.poxod > Date.now())
      return bot(
        `вы сможете отправить питомца в поход через ${unixStampLefta(
          message.user.timers.poxod - Date.now()
        )} Ваш питомец довольно сильно устал!`
      );

    const pet = pets.find((x) => x.id === message.user.misc.pet);

    const earn = utils.random(pet.min, pet.max) * message.user.pet.lvl;

    message.user.timers.poxod = Date.now() + 3600000;

    if (prize === 1) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 2) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 3) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 4) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 5) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 6) {
      message.user.balance += earn;

      return bot(`ваш питомец нашёл в походе ${utils.sp(
        earn
      )}$. Улучшайте своего питомца!

		`);
    }

    if (prize === 7) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 8) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 9) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }

    if (prize === 10) {
      message.user.balance += earn;

      return bot(
        `ваш питомец нашёл в походе ${utils.sp(
          earn
        )}$. Улучшайте своего питомца!`
      );
    }
  }
});



oscrn(
  /(?:кейсы|📦 Список кейсов|📦 Кейсы 🎰|@club228105719 📦 Кейсы|📦 Кейсы)$/i,
  async (message, bot) => {
    let text = `📦 Ваши кейсы:`;

    if (message.user.c1 === 0) {
      if (message.user.c2 === 0) {
        if (message.user.c3 === 0) {
          if (message.user.c4 === 0) {
            if (message.user.c5 === 0) {
              if (message.user.c6 === 0) {
                if (message.user.c7 === 0) {
                  if (message.user.c8 === 0) {
                    if (message.user.c9 === 0) {
                      if (message.user.c10 === 0) {
                        if (message.user.c11 === 0) {
                          text += `У вас нет кейсов.\n`;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (message.user.c1 > 0) {
      text += `\n🔹 1. Обычный Кейс (${utils.sp(message.user.c1)} шт.)`;
    }

    if (message.user.c2 > 0) {
      text += `\n🔹 2. Золотой Кейс (${utils.sp(message.user.c2)} шт.)`;
    }

    if (message.user.c3 > 0) {
      text += `\n🔹 3. Донат-кейс (${utils.sp(message.user.c3)} шт.)`;
    }

    if (message.user.c4 > 0) {
      text += `\n🔹 4. Гоночный кейс (${utils.sp(message.user.c4)} шт.)`;
    }

    if (message.user.c5 > 0) {
      text += `\n🔹 5. Супер кейсов (${utils.sp(message.user.c5)} шт.)`;
    }

    if (message.user.c6 > 0) {
      text += `\n🔹 6. Секретных кейсов (${utils.sp(message.user.c6)} шт.)`;
    }

    if (message.user.c7 > 0) {
      text += `\n🔹 7. Автозвук кейсов (${utils.sp(message.user.c7)} шт.)`;
    }

    if (message.user.c8 > 0) {
      text += `\n🔹 8. Новых кейсов (${utils.sp(message.user.c8)} шт.)`;
    }

    if (message.user.c9 > 0) {
      text += `\n🔹 9. Премиум кейсов (${utils.sp(message.user.c9)} шт.)`;
    }

    if (message.user.c10 > 0) {
      text += `\n🔹 10. Ультра кейсов (${utils.sp(message.user.c10)} шт.)`;
    }

    if (message.user.c11 > 0) {
      text += `\n🔹 11. Админ кейсов (${utils.sp(message.user.c11)} шт.)`;
    }

    text += `\n❓ Покупка: «Кейс [номер] [кол-во]» ❄️\n🔑 Открыть кейс: «Кейс открыть [номер]» 🔥`;

    return bot(`кейсы:

📦 1. Обычный Кейс — 500.000.000.000$
📦 2. Золотой Кейс — 5.000.000.000.000$
📦 3. Донат-кейс — ${botinfo.sell25 ? `12` : `15`}руб. (иначе = 150 ЧакоРуб)

${text}`);
  }
);

oscrn(
  /^(?:попрошайка|попрошайничать|попрошайничать деньги|помочь деньгами|дайте денег|дай пж денеш|есть деньги|дай бабок)$/i,
  async (message, bot) => {
    if (message.user.energy < 1) {
      message.send({
        sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
      });
      return bot(
        `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
      );
    }

    if (
      typeof message.user.questtaxi === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questtaxi++;
      if (message.user.questtaxi >= 500) {
        message.user.questtaxi = true;
        await bot(
          `Информация » Поздравляем, Вы 500 раз попрошайничали и получаете 100.000.000.000.000$`
        );
        message.user.balance += 100000000000000;
      }
    }

    let taxicash = utils.random(633034996, 7255312092);

    message.user.energy -= 2;
    message.user.opit += 5;
    message.user.balance += taxicash;

    if (message.user.energy > 0) {
      setTimeout(() => {
        bot(`Вы начали попрошайничать деньги... 💵 🎅`);
      }, 1000);
      setTimeout(() => {
        bot(
          `Вы закончили попрошайничать деньги! 🙏 🤑

💰 Вы заработали › +${utils.sp(taxicash)}$
💡 Энергия › ${message.user.energy}, опыт › ${message.user.opit} ♻️`,
          { attachment: `photo-214585937_457315888` }
        );
      }, 6000);
    }
    if (message.user.energy < 1) {
      setTimeout(() => {
        bot(`Вы начали попрошайничать деньги... 💵 🎅`);
      }, 1000);
      setTimeout(() => {
        bot(
          `Вы закончили попрошайничать деньги! 🙏 🤑

💰 Вы заработали › +${utils.sp(taxicash)}$
💡 Энергия закончилась! ♻️`,
          { attachment: `photo-214585937_457315888` }
        );
      }, 6000);
    }
  }
);

oscrn(/^(?:set лимит выдачи)\s([0-9]+)\s(.*)$/i, async (message) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");
  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");
  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");
  if (message.user.settings.adm < 5) return;
  if (!Number(message.args[2])) return;
  message.args[2] = Math.floor(Number(message.args[2]));
  let user = users.find((x) => x.uid === Number(message.args[1]));
  user.limitadd.playerlimitadd = message.args[2];
});

oscrn(/^(?:выдать btc)\s([0-9]+)\s(.*)$/i, async (message, bot) => {


  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  if (message.user.settings.adm < 1) return;

  // if (message.args[2] > 1000000000000000) return bot(`За один раз больше 1.000.000.000.000.000 btc выдать нельзя`);

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока.`);

    if (message.user.uid !== user.uid) {
      if (message.user.limitadd == null)
        message.user.limitadd = { timeradd: utils.time(), sent: 0 };

      if (utils.time() - message.user.limitadd.timeradd >= 3600) {
        message.user.limitadd.timeradd = utils.time();

        message.user.limitadd.sentadd = 0;

        message.user.limitadd.paylimitadd =
          message.user.limitadd.playerlimitadd;
      }

      if (message.args[2] * btc > message.user.limitadd.paylimitadd)
        return bot(
          `превышен лимит выдачи! ❌\n▶️ Доступно: ${utils.sp(
            message.user.limitadd.paylimitadd
          )}$, выдача производится в зависимости от текущего курса биткоина и Вашего лимита 🔰`
        );

      let user = users.find((x) => x.uid === Number(message.args[1]));

      if (!user) return bot(`убедитесь в правильности ID игрока`);

      message.user.limitadd.paylimitadd -= message.args[2] * btc;

      message.user.limitadd.sentadd += message.args[2] * btc;

      user.btc += message.args[2];

      await bot(
        `вы выдали игроку ${user.tag} ${utils.sp(
          message.args[2]
        )} биткоинов! 🌐`
      );

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `▶️ УВЕДОМЛЕНИЕ

🤗 Администратор @id${message.user.id} (${
            message.user.tag
          }) выдал Вам ${utils.sp(message.args[2])} биткоинов! 🌐
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });

      await vk.api.messages.send({
        chat_id: 1,
        forward_messages: message.id,
        message: `# ВЫДАЧА:

▶️ Выдал: @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}]
👤 Получил: @id${user.id} (${user.tag})[ID: ${user.uid}]
🌐 Сумма: ${utils.sp(message.args[2])} BTC`,
        random_id: 0,
      });

      return;
    }

    user.btc += message.args[2];

    message.user.astats.balance += message.args[2];

    await bot(
      `вы выдали игроку ${user.tag} ${utils.sp(message.args[2])} биткоинов! 🌐`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ УВЕДОМЛЕНИЕ

🤗 Администратор @id${message.user.id} (${
          message.user.tag
        }) выдал Вам ${utils.sp(message.args[2])} биткоинов! 🌐
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:-bal)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  if (message.user.settings.adm < 3) return;

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока.`);

    user.balance -= message.args[2];

    await bot(
      `вы сняли со счета игрока ${user.tag} ${utils.sp(message.args[2])}$`
    );

    await vk.api.messages.send({
      chat_id: 1,
      forward_messages: message.id,
      message: `# РЕМУВ - БАЛАНСА:

▶️ Снял: @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}]
👤 Кому: @id${user.id} (${user.tag})[ID: ${user.uid}]
💰 Сумма: ${utils.sp(message.user.args[2])}$ 💵`,
      random_id: 0,
    });
  }
});

oscrn(/^(?:выдать фермы)\s([0-9]+)\s(.*)\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  message.args[3] = message.args[3].replace(/(\.|\,)/gi, "");

  message.args[3] = message.args[3].replace(/(к|k)/gi, "000");

  message.args[3] = message.args[3].replace(/(м|m)/gi, "000000");

  if (message.user.settings.adm < 1 && !message.user.settings.topdon) return;

  if (message.user.settings.adm === 1 && !message.user.settings.topdon)
    return bot(`Ваш уровень администратора ниже 2-го ❌`);

  if (message.args[3] > 10000)
    return bot(`За один раз больше 10.000 ферм выдать нельзя`);

  if (message.user.settings.adm < 5 || !message.user.settings.topdon) {
    if (message.args[1] !== message.user.uid)
      return bot(`Выдача доступна только себе`);
  }

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (!Number(message.args[3])) return;

  message.args[3] = Math.floor(Number(message.args[3]));

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока.`);

  if (user.limit.farmlimit < user.misc.farm_count + message.args[3])
    return bot(`У данного игрока лимит в ${user.limit.farmlimit} ферм`);

  user.misc.farm = message.args[2];

  user.misc.farm_count += message.args[3];

  await message.send(
    `вы выдали фермы игроку @id${user.id}(${user.tag})\n\n💽 Номер фермы ${
      message.args[2]
    }\n▶️ Кол-во: ${utils.sp(message.args[3])}`
  );

  if (user.notifications)
    await vk.api.messages.send({
      user_id: user.id,
      message: `▶️ УВЕДОМЛЕНИЕ:

🔥 Вам зачислено ${utils.sp(message.args[3])}шт. ферм (${
        farms[user.misc.farm - 1].name
      })
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
      random_id: 0,
    });
});

oscrn(/^(?:выдать банк)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
  if (!botinfo.oapay)
    return bot(
      `❓Технические работы\n🔇За подробной информацией - @club228105719(Основатель)`
    );

  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  if (message.user.settings.adm < 1) return;

  if (!Number(message.args[2])) return;

  if (message.args[2] > 1000000000000000)
    return bot(
      `за один раз можно выдать не больше 1.000.000.000.000.000$ на банк! ❌`
    );

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  {
    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока.`);

    if (message.user.uid !== user.uid) {
      if (message.user.limitadd == null)
        message.user.limitadd = { timeradd: utils.time(), sent: 0 };

      if (utils.time() - message.user.limitadd.timeradd >= 3600) {
        message.user.limitadd.timeradd = utils.time();

        message.user.limitadd.sentadd = 0;

        message.user.limitadd.paylimitadd =
          message.user.limitadd.playerlimitadd;
      }

      if (message.args[2] > message.user.limitadd.paylimitadd)
        return bot(
          `превышен лимит выдачи! ❌\n▶️ Доступно: ${utils.sp(
            message.user.limitadd.paylimitadd
          )}$ 💵`
        );

      let user = users.find((x) => x.uid === Number(message.args[1]));

      if (!user) return bot(`убедитесь в правильности ID игрока`);

      message.user.limitadd.paylimitadd -= message.args[2];

      message.user.limitadd.sentadd += message.args[2];

      user.bank += message.args[2];

      await bot(
        `вы выдали игроку @id${user.id}(${user.tag}) на банк ${utils.sp(
          message.args[2]
        )}$ 💵\n\n▶️ Ещё можно выдать ${utils.sp(
          message.user.limitadd.paylimitadd
        )}$ 💰`
      );

      if (user.notifications)
        await vk.api.messages.send({
          user_id: user.id,
          message: `▶️ УВЕДОМЛЕНИЕ:

🤗 Администратор @id${message.user.id} (${
            message.user.tag
          }) выдал Вам ${utils.sp(message.args[2])}$ на банковский счёт 💳
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
          random_id: 0,
        });

      await vk.api.messages.send({
        chat_id: 1,
        forward_messages: message.id,
        message: `# БАНК - ВЫДАЧА:

▶️ Выдал: @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}]
👤 Получил: @id${user.id} (${user.tag})[ID: ${user.uid}]
💰 Сумма: ${utils.sp(message.args[2])}$`,
        random_id: 0,
      });

      return;
    }

    user.bank += message.args[2];

    message.user.astats.balance += message.args[2];

    await bot(
      `вы выдали игроку @id${user.id}(${user.tag}) на банк ${utils.sp(
        message.args[2]
      )}$ 💵\n\n▶️ Ещё можно выдать ${utils.sp(
        message.user.limitadd.paylimitadd
      )}$ 💰`
    );

    if (user.notifications)
      await vk.api.messages.send({
        user_id: user.id,
        message: `▶️ УВЕДОМЛЕНИЕ:

🤗 Администратор @id${message.user.id} (${
          message.user.tag
        }) выдал Вам ${utils.sp(message.args[2])}$ на банковский счёт 💳
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
        random_id: 0,
      });
  }
});

oscrn(/^(?:пбан|pban)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.joker !== true)
    return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (user.uid === 0 || user.uid === 1 || user.uid === 2033)
    return message.send(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.pban !== false)
    return bot(`у игрока уже итак отключена передача 😸`);

  user.bans.pban = true;

  user.stock.stpban = "Да";

  message.user.astats.pbans += 1;

  return bot(`вы отключили передачу игроку - @id${user.id} (${user.tag}) ❌`);
});

oscrn(/^(?:празбан|punban)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.joker !== true)
    return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.pban !== true)
    return bot(`у игрока уже итак включен доступ к передаче 😸`);

  user.bans.pban = false;

  user.stock.stpban = "Нет";

  return bot(`вы включили передачу игроку - @id${user.id} (${user.tag}) ✅`);
});

oscrn(/^(?:рбан|rban)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.agent < 1) return;

  if (
    message.args[1] === 0 ||
    message.args[1] === 1 ||
    message.args[1] === 2033
  )
    return bot(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`Такого игрока не существует! ❌`);

  if (user.bans.rban !== false) return bot(`у игрока уже закрыт репорт ❌`);

  user.bans.rbantimer = Date.now() + 201600000;

  user.bans.rban = true;

  user.stock.strban = "Да";

  message.user.astats.rbans += 1;

  return bot(`вы выдали бан репорта игроку - @id${user.id} (${user.tag}) ❌`);
});

oscrn(/^(?:рразбан|runban)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1 && message.user.settings.agent < 1) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`Такого игрока не существует! ❌`);

  if (user.bans.rban !== true) return bot(`у игрока репорт уже включён 🙃`);

  user.bans.rbantimer = 0;

  user.bans.rban = false;

  user.stock.strban = "Нет";

  return bot(`вы разбанили репорт игроку - @id${user.id} (${user.tag}) ✅`);
});

oscrn(/^(?:разбан|unban)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== true) return bot(`игрок не в бане! 💚`);

  user.bans.bantimer = 0;

  user.bans.ban = false;

  message.user.bantop = false;

  await bot(`вы разбанили игрока @id${user.id}(${user.tag}) 🔥\n`);

  await vk.api.messages.send({
    user_id: user.id,

    message: `🚫 Ваш аккаунт был разблокирован! 💚\n\n▶️ Разблокировал: @id${message.user.id} (${message.user.tag}) 🤗`,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:



🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) снял блокировку аккаунта игрока ID: ${message.args[1]} 😡`,
  });
});

oscrn(/^(?:бан|ban)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm <= 2)
    return bot(
      `Данная команда доступна для 3-го уровня администратора и выше! ❌`
    );

  if (message.args[1] === 0 || message.args[1] === 1)
    return bot(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (message.user.settings.adm <= user.settings.adm) return;

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== false) return bot(`Игрок уже имеет блокировку 🚫`);

  user.bans.ban = true;
  const datka = new Date(user.bans.bantimer);
  user.bans.bantimer = Date.now() + 315360000000;

  message.user.astats.bans += 1;

  message.user.bantop = true;

  await bot(
    `Вы успешно заблокировали игрока @id${user.id}(${user.tag}) 🔥\n💬Причина блокировки: ${message.args[2]}\n`
  );

  await vk.api.messages.send({
    user_id: user.id,

    message: `▶️ Ваш аккаунт был заблокирован за нарушение внутриигровых правил бота! 🚫\n\n♻️ Подробная причина от администратора: «${
      message.args[2]
    }»\n⏳ Блокировка действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
      datka.getMonth() + 1
    }.${datka.getFullYear()} (МСК) ❌ `,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:

🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) заблокировал игрока ID: ${
      message.args[1]
    } 😡\n⏰ Срок бана: бессрочно 🚫\n♻️ Причина: ${message.args[2]}`,
  });
});

oscrn(/^(?:бан|ban)\s(3дн)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm <= 1)
    return bot(`⛔Команда доступна Admin-2+ уровня⛔`);

  message.user.timers.ban = Date.now() + 900000;

  let user = users.find((x) => x.uid === Number(message.args[2]));

  if (user.uid === 0 || user.uid === 1 || user.uid === 2033)
    return bot(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  if (message.user.settings.adm <= user.settings.adm) return;

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== false) return bot(`Игрок уже имеет блокировку 🚫`);
  user.bans.ban = true;

  user.bans.bantimer = Date.now() + 86400000 * 3;
  const datka = new Date(user.bans.bantimer);
  message.user.astats.bans += 1;

  message.user.bantop = true;

  await bot(
    `вы успешно забанили игрока @id${user.id}(${user.tag}) 🔥\n💬Причина блокировки: ${message.args[3]}\n`
  );

  await vk.api.messages.send({
    user_id: user.id,

    message: `▶️ Ваш аккаунт был заблокирован за нарушение внутриигровых правил бота! 🚫\n\n♻️ Подробная причина от администратора: «${
      message.args[3]
    }»\n⏳ Блокировка действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
      datka.getMonth() + 1
    }.${datka.getFullYear()} (МСК) ❌`,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:



🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) заблокировал игрока ID: ${
      message.args[2]
    } 😡\n⏰ Срок бана: 3 дня 🚫\n♻️ Причина: ${message.args[3]}`,
  });
});

oscrn(/^(?:бан|ban)\s(неделя)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm <= 1)
    return bot(
      `Данная команда доступна для 2-го уровня администратора и выше! ❌`
    );

  let user = users.find((x) => x.uid === Number(message.args[2]));

  if (user.uid === 0 || user.uid === 1 || user.uid === 2033)
    return bot(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  if (message.user.settings.adm <= user.settings.adm) return;

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== false) return bot(`Игрок уже имеет блокировку 🚫`);
  user.bans.ban = true;

  user.bans.bantimer = Date.now() + 604800000;
  const datka = new Date(user.bans.bantimer);
  message.user.astats.bans += 1;
  message.user.bantop = true;

  await bot(
    `вы успешно забанили игрока @id${user.id}(${user.tag}) 🔥\n💬 Причина блокировки: ${message.args[3]}\n\n`
  );

  await vk.api.messages.send({
    user_id: user.id,

    message: `▶️ Ваш аккаунт был заблокирован за нарушение внутриигровых правил бота! 🚫\n\n♻️ Подробная причина от администратора: «${
      message.args[3]
    }»\n⏳ Блокировка действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
      datka.getMonth() + 1
    }.${datka.getFullYear()} (МСК) ❌`,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:

🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) заблокировал игрока ID: ${
      message.args[2]
    } 😡\n⏰ Срок бана: 7 дней 🚫\n♻️ Причина: ${message.args[3]}`,
  });
});

oscrn(/^(?:бан|ban)\s(час)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(
      `Данная команда доступна для 1-го уровня администратора и выше! ❌`
    );

  let user = users.find((x) => x.uid === Number(message.args[2]));

  if (message.user.settings.adm <= user.settings.adm) return;

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== false) return bot(`Игрок уже имеет блокировку 🚫`);
  user.bans.ban = true;

  user.bans.bantimer = Date.now() + 3600000;
  const datka = new Date(user.bans.bantimer);

  message.user.astats.bans += 1;

  message.user.bantop = true;

  await bot(
    `вы успешно забанили игрока @id${user.id}(${user.tag}) 🔥\n💬 Причина блокировки: ${message.args[3]}\n⛔ Внимание! Бан/Разбан просто так запрещен`
  );

  await vk.api.messages.send({
    user_id: user.id,

    message: `▶️ Ваш аккаунт был заблокирован за нарушение внутриигровых правил бота! 🚫\n\n♻️ Подробная причина от администратора: «${
      message.args[2]
    }»\n⏳ Блокировка действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
      datka.getMonth() + 1
    }.${datka.getFullYear()} (МСК) ❌`,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:
🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) заблокировал игрока ID: ${
      message.args[2]
    } 😡\n⏰ Срок бана: 1 час 🚫\n♻️ Причина: ${message.args[3]}`,
  });
});

oscrn(/^(?:бан|ban)\s(день)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(
      `Данная команда доступна для 1-го уровня администратора и выше! ❌`
    );

  let user = users.find((x) => x.uid === Number(message.args[2]));

  if (user.uid === 0 || user.uid === 1 || user.uid === 2033)
    return bot(
      `Ваше действие было зарегистрировано и отправлено в специальную беседу логов.`
    );

  if (message.user.settings.adm <= user.settings.adm) return;

  if (!user)
    return bot(
      `проверьте тот ID, который Вы ввели, возможно, он некорректный 😡`
    );

  if (user.bans.ban !== false) return bot(`Игрок уже имеет блокировку 🚫`);

  user.bans.ban = true;

  user.bans.bantimer = Date.now() + 86400000;
  const datka = new Date(user.bans.bantimer);

  message.user.astats.bans += 1;

  message.user.bantop = true;

  await bot(
    `вы успешно забанили игрока @id${user.id}(${user.tag}) 🔥\n💬 Причина блокировки: ${message.args[3]}\n⛔ Внимание! Бан/Разбан просто так запрещен`
  );

  await vk.api.messages.send({
    user_id: user.id,

    message: `▶️ Ваш аккаунт был заблокирован за нарушение внутриигровых правил бота! 🚫\n\n♻️ Подробная причина от администратора: «${
      message.args[2]
    }»\n⏳ Блокировка действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
      datka.getMonth() + 1
    }.${datka.getFullYear()} (МСК) ❌`,

    random_id: 0,
  });

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⚠️ ADM-LOG:
🎅 ${message.user.settings.adm
      .toString()
      .replace(/1/gi, "Модератор")
      .replace(/2/gi, "Администратор")
      .replace(/3/gi, "Главный администратор")
      .replace(/4/gi, "Заместитель владельца")
      .replace(/5/gi, "Владелец")} @id${message.user.id} (${
      message.user.tag
    }) заблокировал игрока ID: ${
      message.args[2]
    } 😡\n⏰ Срок бана: 1 день 🚫\n♻️ Причина: ${message.args[3]}`,
  });
});

oscrn(/^(?:перм лист)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2) return;

  let text = ``;

  let t = 0;

  let text2 = ``;

  users
    .filter(
      (x) => x.bans.ban === true && x.bans.bantimer > Date.now() + 604800000
    )
    .map((x) => {
      t = t + 1;

      if (t < 100) text += `@id${x.id}(${x.tag}) - ${x.uid} id\n`;

      if (t >= 100) text2 += `@id${x.id}(${x.tag}) - ${x.uid} id\n`;
    });

  bot(`Всего в бане: ${t}`);

  bot(text);

  bot(text2);
});

//=============================================================================================

oscrn(/^(?:iget|игет)\s?(.*)?$/i, async (message, bot) => {
  if (message.user.settings.adm >= 1 || message.user.uid === 2033) {
    message.text.split(" ");

    if (!message.forwards[0] && !message.replyMessage && !message.args[1])
      return bot(`укажите ID игрока в боте/ссылку/пуш/перешлите сообщение`);

    if (!message.args[1]) {
      if (message.forwards[0]) idp = message.forwards[0].senderId;

      if (message.replyMessage) idp = message.replyMessage.senderId;
    }

    if (message.args[1]) {
      if (!Number(message.args[1])) {
        if (!message.args[1].match(/\|/i)) {
          mpq = message.args[1].replace(
            /((http|https)\:\/\/(vk.com|m.vk.com)\/|(vk.com)\/)/gi,
            ""
          );

          await vk.api.utils
            .resolveScreenName({ screen_name: mpq })
            .then((res) => {
              idp = res.object_id;
            });
        }

        if (message.args[1].match(/\|/i)) {
          arg = message.args[1].replace(/((\|[^]*)|(\[id))/gi, "");

          idp = Number(arg);
        }
      }

      if (Number(message.args[1])) idp = message.args[1];
    }

    if (Number(message.args[1]))
      user = users.find((x) => x.uid === Number(idp));

    if (!Number(message.args[1])) user = users.find((x) => x.id === idp);

    if (!user) return bot(`Неверный URL игрока или ID!`);

    new Date(user.bans.bantimer);

    return bot(
      `профиль администратора:

🆔 ➖ ID: ${utils.sp(user.uid)}
🔗 ➖ VK ссылка: vk.com/id${user.id}
👀 ➖ Ник: «${user.tag}»
` +
        (user.settings.adm === 0
          ? ``
          : `\n♨️ ➖ Администратор ${user.settings.adm} уровня`) +
        `
👤 ➖ Статус: «${user.stock.status}»

⚠ Админ-инфа:
♻️ ➖ Отправлено ответов: ${user.astats.reports}
🛑 ➖ Выдано банов: ${user.astats.bans}
⚠️ ➖ Предупреждений: [${user.astats.warn}/5]
🆘 ➖ Банов репорта: ${user.astats.rbans}
🚫 ➖ Банов передачи: ${user.astats.pbans}
✳️ ➖ Репутация: ${user.astats.norm}👍 | ${user.astats.bad}👎

✅ ➖ Выдано денег: ${utils.sp(user.astats.balance)} $
💳 ➖ Выдано на банк: ${utils.sp(user.astats.bank)} $

⏳ ➖ Дата регистрации: ${user.regDate}

			`
    );
  }
});

oscrn(/^(?:get|гет|профиль)\s?(.*)?$/i, async (message, bot) => {
  if (
    message.user.settings.premium !== true &&
    message.user.settings.titan !== true &&
    message.user.settings.adm < 1
  )
    return;

  message.text.split(" ");

  if (!message.forwards[0] && !message.replyMessage && !message.args[1])
    return bot(`укажите ID игрока в боте/ссылку/пуш/перешлите сообщение`);

  if (!message.args[1]) {
    if (message.forwards[0]) idp = message.forwards[0].senderId;

    if (message.replyMessage) idp = message.replyMessage.senderId;
  }

  if (message.args[1]) {
    if (!Number(message.args[1])) {
      if (!message.args[1].match(/\|/i)) {
        mpq = message.args[1].replace(
          /((http|https)\:\/\/(vk.com|m.vk.com)\/|(vk.com)\/)/gi,
          ""
        );

        await vk.api.utils
          .resolveScreenName({ screen_name: mpq })
          .then((res) => {
            idp = res.object_id;
          });
      }

      if (message.args[1].match(/\|/i)) {
        arg = message.args[1].replace(/((\|[^]*)|(\[id))/gi, "");

        idp = Number(arg);
      }
    }

    if (Number(message.args[1])) idp = message.args[1];
  }

  if (Number(message.args[1])) user = users.find((x) => x.uid === Number(idp));

  if (!Number(message.args[1])) user = users.find((x) => x.id === idp);

  if (!user) return bot(`такого игрока нет, либо произошла ошибка`);

  if (user.antiget)
    return bot(`поздравляю🎉 \n ✅ Вы обнулили себе профиль`);

  let text = ``;

  for (var i = 0; i < user.business.length; i++) {
    text += `⠀${
      businesses[user.business[i].id - 1][user.business[i].upgrade - 1].icon
    } ${
      businesses[user.business[i].id - 1][user.business[i].upgrade - 1].name
    }\n`;
  }

  const datka = new Date(user.bans.bantimer);

  let status = ``;

  if (user.id === spoler) text += "🔥💯 Cоздатель\n";
  
  if (user.settings.imperator) status += `👑⚡👑Imperator👑⚡👑\n`;


  if (user.settings.vip && user.settings.premium && user.settings.titan)
    status = `👑 VIP + Premium + Titan\n`;
  else if (!user.settings.vip && user.settings.premium && user.settings.titan)
    status = `👑 Premium + Titan\n`;
  else if (user.settings.vip && user.settings.premium && !user.settings.titan)
    status = `👑 VIP + Premium \n`;
  else if (user.settings.vip && !user.settings.premium && user.settings.titan)
    status = `👑 VIP + Titan\n`;
  else if (user.settings.vip && !user.settings.premium && !user.settings.titan)
    status = `👑 VIP статус\n`;
  else if (!user.settings.vip && user.settings.premium && !user.settings.titan)
    status = `👑 Premium статус\n`;
  else if (!user.settings.vip && !user.settings.premium && user.settings.titan)
    status = `👑 Titan статус\n`;

  let txt = user.bans.ban
    ? `📛 Заблокирован до: ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
        datka.getMonth() + 1
      }.${datka.getFullYear()}`
    : `📛 Блокировка: отсутствует`;
  let clanss = user.clanid ? `⚔️ Клан: ${clans[user.clanid].name}\n` : ``;

  let star = ``;

  if (user.stars1 || user.stars2 || user.stars3 || user.stars4 || user.stars5)
    star += `\n🌠 Звезды:\n`;

  if (user.stars1) star += `⠀☀ Солнце\n`;

  if (user.stars2) star += `⠀🌠 Сириус\n`;

  if (user.stars3) star += `⠀🛑 Красный гигант\n`;

  if (user.stars4) star += `⠀🧬 Плазмовый гигант\n`;

  if (user.stars5) star += `⠀💰 Донатный гигант\n`;

  let bbb = ``;
  for (var i = 0; i < user.business.length; i++) {
    bbb += `${
      businesses[user.business[i].id - 1][user.business[i].upgrade - 1].icon
    } ${
      businesses[user.business[i].id - 1][user.business[i].upgrade - 1].name
    }\n`;
  }

  return bot(
    `профиль игрока:

🆔 ID: ${utils.sp(user.uid)}
🔘 ВК ID: ${user.id} | Ссылка - vk.com/id${user.id}
🔥 Ник: «${user.tag}»
${clanss}
👑 Игровой статус: ${status}
🌟 Титул: ${user.stock.status}
💰 Баланс: ${utils.sp(user.balance)}$` +
      (user.bank === 0 ? `` : `\n💳 Банк: ${utils.sp(user.bank - 1)}$`) +
      `
🌐 Биткоинов: ${utils.sp(user.btc)}฿
💒 Семейное положение: ${user.marriage.partner}
👑 Рейтинг: ${utils.sp(user.rating)}
🏆 Опыт: ${utils.sp(user.opit)} | 🏋 Энергия: ${user.energy}

🔑 Имущество:` +
      (user.transport.car === 0
        ? ``
        : `\n⠀🚗 Машина: ${cars[user.transport.car - 1].name}`) +
      `` +
      (user.transport.yacht === 0
        ? ``
        : `\n⠀🛥 Яхта: ${yachts[user.transport.yacht - 1].name}`) +
      `` +
      (user.transport.airplane === 0
        ? ``
        : `\n⠀🛩 Самолёт: ${airplanes[user.transport.airplane - 1].name}`) +
      `` +
      (user.transport.helicopter === 0
        ? ``
        : `\n⠀🚁 Вертолёт: ${
            helicopters[user.transport.helicopter - 1].name
          }`) +
      `` +
      (user.realty.home === 0
        ? ``
        : `\n⠀🏠 Дом: ${homes[user.realty.home - 1].name}`) +
      `` +
      (user.realty.apartment === 0
        ? ``
        : `\n⠀🌇 Квартира: ${apartments[user.realty.apartment - 1].name}`) +
      `` +
      (user.misc.phone === 0
        ? ``
        : `\n⠀📱 Телефон: ${phones[user.misc.phone - 1].name}`) +
      `` +
      (user.misc.clock === 0
        ? ``
        : `\n⠀⌚ Часы: ${clocks[user.misc.clock - 1].name}`) +
      `` +
      (user.misc.pet === 0
        ? ``
        : `\n⠀🐌 Питомец: ${pets[user.misc.pet - 1].name}`) +
      `` +
      (user.misc.computer === 0
        ? ``
        : `\n⠀🖥 Компьютер: ${computers[user.misc.computer - 1].name}`) +
      `` +
      (user.misc.farm === 0
        ? ``
        : `\n⠀🔋 Ферма: ${user.misc.farm} (x${utils.sp(
            user.misc.farm_count
          )})`) +
      `


${bbb}

${star}


📆 Дата регистрации в боте: ${user.regDate}
🔌 Последняя активность в боте: ${user.aktiv}
➖➖➖➖➖➖➖
💵 Бан передачи: ${user.stock.stpban}
🔝 Запрет на появление в топе: ${user.stock.bantop}
🆘 Бан репорта: ${user.stock.strban}

${txt}
➖➖➖➖➖➖➖
➡ Передал: ${utils.sp(user.limit.sent)}$`
  );
});

oscrn(/^(?:кик)\s([^]+)$/i, async (message, bot) => {
  if (message.user.settings.adm <= 3 && message.user.settings.joker !== true)
    /* Ваш игровой ID */ return;

  message.text.split(" ");

  let m = /^(?:https)\:\/\/(?:vk.com)\//i;

  if (m.test(message.args[1])) {
    message.args[1] = message.args[1].replace(
      /(?:https)\:\/\/(?:vk.com)\//gi,
      ""
    );

    await vk.api.utils
      .resolveScreenName({ screen_name: message.args[1] })

      .then(async (res) => {
        let user = users.find((x) => x.id === res.object_id);

        if (!user) return bot(`Неверный URL игрока!`);

        if (
          message.chatId === 1 &&
          message.user.senderId !== admin &&
          message.user.senderId !== admin2
        )
          return bot(
            `Это беседа администрации, здесь нельзя кикать кроме создателя!`
          );

        vk.api.call("messages.removeChatUser", {
          chat_id: message.chatId,

          user_id: user.id,
        });

        console.log("Кик");
      });
  } else {
    return message.send(`Неверный URL игрока!`);
  }
});

oscrn(/^(?:время|time)$/i, async (message, bot) => {
  if (message.user.misc.clock < 1) return bot("у вас нет часов. ⌚");

  if (message.user.procent.clock < 0)
    return bot('ваши часы разряжены, используйте "Часы зарядить". ⚡');

  const date = new Date();

  return bot(`информация о Ваших часах: ❄️

⌚ Бренд: ${clocks[message.user.misc.clock - 1].name}
🎟 Дата: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.
⏰ Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
🔋 Батарея: ${message.user.procent.clock}%`);
});

oscrn(/^(?:часы зарядить)$/i, async (message, bot) => {
  if (message.user.misc.clock < 1) return bot("у вас нет часов. ⌚");

  if (5000 > message.user.btc)
    return bot(`недостаточно средств. 🌐\nНеобходимо 5.000฿`);

  if (message.user.procent.clock > 90) return bot(`часы и так заряжены. ⚡`);
  else if (message.user.procent.clock <= message.user.btc) {
    message.user.btc -= 5000;

    message.user.procent.clock = 100;

    return bot(
      `вы успешно зарядили часы. ✅\n⚡ Зарядка: ${message.user.procent.clock}%`
    );
  }
});

oscrn(/^(?:VIP help)$/i, async (message, bot) => {
  if (message.user.settings.vip !== true) return;

  if (message.isChat) return bot("команда работает только в ЛС сообщества.");

  return bot(`Преимущества VIP игроков:

🔥 Увеличен лимит передачи до 100.000.000.000.000$.
💲 Максимальная сумма вклада в банке 100.000.000.000.000$.
👑 «VIP» отметка в профиле.
🔋 Увеличен лимит ферм до 3000.
⚡ Увеличена максимальная энергия до 20.
🔱 Увеличен ежедневный бонус (X2).
🔱 Ускорено получение новых работ.
⭐ Ежедневный VIP бонус [Бонус VIP].
⭐ Повышен шанс в казино.
✒ Возможность ставить ник на 5 символов длиннее.

▶️ При возникновении проблемы напишите в репорт.`);
});

oscrn(/^(?:Premium help)$/i, async (message, bot) => {
  if (message.user.settings.premium !== true) return;

  if (message.isChat) return bot("команда работает только в ЛС сообщества.");

  return bot(`Преимущества Premium игроков:



🔥 Увеличен лимит передачи до 200.000.000.000.000$.
💰 Максимальная сумма вклада в банке 200.000.000.000.000$.
👑 «PREMIUM» отметка в профиле.
💰 Ежедневная выдача валюты (150млрд$).
🔋 Увеличен лимит ферм до 5000.
⚡ Увеличена максимальная энергия до 30.
👤 Возможность просматривать чужие профили .
⭐ Ежедневный Premium бонус [Бонус Premium].
⭐ Повышен шанс в казино.
💎 Возможность копать алмазы.
✒ Возможность ставить длинный ник.

▶️ При возникновении проблемы напишите в репорт.`);
});

oscrn(/^(?:Titan help)$/i, async (message, bot) => {
  if (message.user.settings.titan !== true) return;

  if (message.isChat) return bot("команда работает только в ЛС сообщества.");

  return bot(`Преимущества TITAN игроков:

🔥 Увеличен лимит передачи до 300.000.000.000.000$.
💲 Максимальная сумма вклада в банке 500.000.000.000.000$.
⚙️ «TITAN» отметка в профиле.
🔋 Увеличен лимит ферм до 10000.
⚡ Увеличена максимальная энергия до 100.
⚡ Повышен уровень работы
👤 Возможность просматривать чужие профили .
⭐ Ежедневный Titan бонус [Бонус Titan].
⭐ Повышен шанс в казино
💎 Возможность открывать сразу до 10 кейсов(обычный,золотой,гоночный)
💎 Возможность копать материю.
✒ Возможность ставить длинный ник.

▶️ При возникновении проблемы напишите в репорт.`);
});
oscrn(/^(?:Imperator help)$/i, async (message, bot) => {
  if (message.user.settings.imperator !== true) return;

  if (message.isChat) return bot("команда работает только в ЛС сообщества.");

  return bot(`Преимущества Imperator игроков:

1️⃣ МЕГА-КРУТАЯ отметка в ПРОФИЛЕ.
2️⃣ Покупка титула бесплатно.
3️⃣ Безлимитный банк.
4️⃣ Кол-во ферм увеличено до 1.000.000.
5️⃣ Император бонус (падают даже донат-кейсы).
6️⃣ Увеличение кубков при победе в гонках, и т.п.
7️⃣ Уменьшение коммисии при продаже рейтинга
8️⃣ ФЕЙК АЙДИ!
9️⃣ Увеличены шансы в казино.

▶️ При возникновении проблемы напишите в репорт.`);
});
oscrn(/^(?:Бизнесмен помощь)$/i, async (message, bot) => {
  if (message.user.settings.busi !== true) return;

  if (message.isChat) return bot("команда работает только в ЛС сообщества.");

  return bot(`🤵 Преимущества «БИЗНЕСМЕНА»:

• 🆙 Лимит БИЗНЕСОВ увеличен до 5!
• 🕳 Выдача ПРЕМИУМ'а игрокам НАВСЕГДА! [1 раз в неделю]
• 🔋 Лимит ферм увеличен до 150.000
• 🏦 Безлимитный банк

- Дополнительно:
📆 Вы получаете доступ к РАННЕМУ обновлению!
🦸‍♂ Вы получаете Анти-гет (его цена: 199₽, а в данной привилегии бесплатно)

▶️ При возникновении проблемы напишите в репорт.`);
});
oscrn(/^(?:кейс инфо)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 0 && message.args[1] > 7)
    return bot(`Вы ввели неверный номер кейса`);

  if (message.args[1] === 1)
    return bot(
      `Призы из обычного кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг 💥\n⃣ 💸 Биткоины 💸`
    );

  if (message.args[1] === 2)
    return bot(
      `Призы из золотых кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг\n⃣ 💸 Биткоины 💸💥`
    );

  if (message.args[1] === 3)
    return bot(
      `Призы из донат кейса:\n⃣ 💰 Деньги 💰\n⃣ 💰 GB 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг\n⃣ 📦 Донат кейсы 📦\n⃣ 💎 VIP статус 💎\n⃣ 💎 Premium статус 💎`
    );

  if (message.args[1] === 4)
    return bot(
      `Призы из гоночного кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг 💥`
    );

  if (message.args[1] === 5)
    return bot(
      `Призы из супер кейса:\n⃣ 💰 Деньги 💰\n⃣ 💥 Рейтинг 💥\n⃣ 🌳 Дерево 🌳\n⃣ 🐙 Питомец 🐙\n⃣ 🏦 Бизнес 🏦\n⃣ 🚙 Машина 🚙\n⃣ 🔥 Premium статус🔥`
    );

  if (message.args[1] === 6)
    return bot(
      `Призы из секретного кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг 💥\n⃣ 🐙 Питомец 🐙\n⃣ 📜 Сертификат на кинобизнес 📜\n⃣ 📜 Сертификат на лучшую машину 📜\n⃣ 🔥 Premium статус🔥`
    );

  if (message.args[1] === 7)
    return bot(
      `Призы из автозвук кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг 💥`
    );

  if (message.args[1] === 8) return bot(`Информацию узнать нельзя`);

  if (message.args[1] === 9)
    return bot(
      `Призы из премиум кейса:\n⃣ 💰 Деньги 💰\n⃣ 📈 Опыт 📈\n⃣ 💥 Рейтинг 💥\n📜 Сертификат на кинобизнес 📜\n⃣ 💸 Биткоины 💸\n⃣ 📜 Сертификат на лучшую машину 📜\n⃣ 🔥 Сертификат на Premium статус\n⃣ 🔥 Titan VIP 🔥`
    );
});

oscrn(/^(?:кейс открыть 1)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.c1 < message.args[1])
    return bot(`У вас нет столько кейсов.`);

  if (!message.user.settings.titan && !message.user.settings.premium)
    return bot(`Открывать несколько кейсов можно со статусом "Premium VIP" `);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 15 && !message.user.settings.titan)
  )
    return bot(`Больше 15 кейсов за раз открывать нельзя.`);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 100 && message.user.settings.titan)
  )
    return bot(`Больше 100 кейсов за раз открывать нельзя.`);

  message.user.c1 -= message.args[1];

  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += message.args[1];

  let btc = 0;

  let money = 0;

  let rating = 0;

  let opit = 0;

  let t = message.args[1];

  for (let i = 0; i < t; i++) {
    let rand = utils.random(1, 4);

    if (rand === 1) {
      let bon = utils.random(10000000000, 500000000000);

      money += Number(bon);
    }

    if (rand === 2) {
      let bon = utils.random(10, 60);

      opit += bon;
    }

    if (rand === 3) {
      let bon = utils.random(10, 100);

      rating += bon;
    }

    if (rand === 4) {
      btc += 500000;
    }
  }

  message.user.btc += btc;

  message.user.balance += money;

  message.user.opit += opit;

  message.user.rating += rating;

  return bot(
    `Вы успешно открыли ${utils.sp(message.args[1])} кейсов.

✅ ➖ С них Вам выпало:
🌐 Биткоины: ${utils.sp(btc)} BTC
💲 Деньги: ${utils.sp(money)}$
👑 Рейтинг: ${utils.sp(rating)}
📈 Опыт: ${utils.sp(opit)}

▶️ Весь лут уже находится на Вашем аккаунте.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: { command: `Кейс открыть 1 ${message.args[1]}` },

                label: `📦 Открыть снова`,
              },

              color: "primary",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:📦 кейс открыть 1|кейс открыть 1)$/i, async (message, bot) => {
  if (message.user.c1 < 1) return bot(`У Вас нет «Обычного кейса» ❌`);

  message.user.c1 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  let rand = utils.random(1, 4);

  if (rand === 1) {
    let bon = utils.random(10000000000, 500000000000);

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 1` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(10, 100);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта! 🏆`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 1` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(10, 100);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 👑`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 1` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 4) {
    message.user.btc += 50000000;

    return bot(`Вы выиграли 50.000.000 биткоинов! 🌐`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 1` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 2)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.c2 < message.args[1])
    return bot(`У вас нет столько кейсов.`);

  if (!message.user.settings.premium)
    return bot(`Открывать несколько кейсов можно со статусом "Premium VIP" `);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 15 && !message.user.settings.titan)
  )
    return bot(`Больше 15 кейсов за раз открывать нельзя.`);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 100 && message.user.settings.titan)
  )
    return bot(`Больше 100 кейсов за раз открывать нельзя.`);

  message.user.c2 -= message.args[1];
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += message.args[1];

  let btc = 0;

  let money = 0;

  let rating = 0;

  let opit = 0;

  let t = message.args[1];

  for (let i = 0; i < t; i++) {
    let rand = utils.random(1, 23);

    if (rand === 1) {
      let bon = utils.random(500, 10000);

      bon *= 1000000000;

      money += bon;
    }

    if (rand === 2) {
      let bon = utils.random(200, 300);

      opit += bon;
    }

    if (rand === 3) {
      let bon = utils.random(300, 30000);

      rating += bon;
    }

    if (rand === 4) {
      money += 200000000000;
    }

    if (rand === 5) {
      opit += 1500;
    }

    if (rand === 6) {
      money += 30000000000000;
    }

    if (rand === 7) {
      btc += 10000000;
    }

    if (rand === 8) {
      message.user.rating += 10000;
    }

    if (rand === 9) {
      money += 3000000000000;
    }

    if (rand === 10) {
      money += 5000000000000;
    }

    if (rand === 11) {
      opit += 1;
    }

    if (rand === 12) {
      let bon = utils.random(50, 2000);

      bon *= 1000000000;

      money += bon;
    }

    if (rand === 13) {
      money += 10000000000;
    }

    if (rand === 14) {
      opit += 1;
    }

    if (rand === 15) {
      money += 1000000000000;
    }

    if (rand === 16) {
      btc += 50000000;
    }

    if (rand === 17) {
      rating += 100000;
    }

    if (rand === 18) {
      let bon = utils.random(100000000000, 2000000000000);

      money += Number(bon);
    }

    if (rand === 19) {
      opit += 1;
    }

    if (rand === 20) {
      money += 3000000000000;
    }

    if (rand === 21) {
      btc += 500000;
    }

    if (rand === 22) {
      money += 10000000000;
    }

    if (rand === 23) {
      opit += 2500;
    }
  }

  message.user.btc += btc;

  message.user.balance += money;

  message.user.opit += opit;

  message.user.rating += rating;

  return bot(
    `Вы успешно открыли ${utils.sp(message.args[1])} кейсов.

✅ ➖ С них Вам выпало:
🌐 Биткоины: ${utils.sp(btc)} BTC
💲 Деньги: ${utils.sp(money)}$
👑 Рейтинг: ${utils.sp(rating)}
📈 Опыт: ${utils.sp(opit)}

▶️ Весь лут уже находится на Вашем аккаунте.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: { command: `Кейс открыть 2 ${message.args[1]}` },

                label: `📦 Открыть снова`,
              },

              color: "primary",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:кейс открыть 2|📦 кейс открыть 2)$/i, async (message, bot) => {
  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌

Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌

Введите «капча ${otv}», чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = pr1 + pr2;

      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }

  if (message.user.c2 < 1) return bot(`У вас нет «Золотого кейса» ❌`);

  message.user.c2 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  let rand = utils.random(1, 3);

  if (rand === 1) {
    let bon = utils.random(100000000000, 2000000000000);

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `кейс открыть 2` },
                label: `📦 Открыть снова`,
              },
              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(500, 4500);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта! 📈`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `кейс открыть 2` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(3000, 35000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 👑`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `кейс открыть 2` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  return bot(`вы ничего не выиграли.`, {
    keyboard: JSON.stringify({
      inline: true,

      buttons: [
        [
          {
            action: {
              type: "text",
              payload: { command: `кейс открыть 2` },
              label: `📦 Открыть снова`,
            },

            color: "positive",
          },
        ],
      ],
    }),
  });
});

oscrn(/^(?:кейс открыть 3)$/i, async (message, bot) => {
  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌

Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌

Введите «капча ${otv}», чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = pr1 + pr2;

      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }

  if (message.user.c3 < 1) return bot(`У вас нет "Донат-кейса".`);

  message.user.c3 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  if (typeof message.user.questdonat === "number") {
    message.user.questdonat++;

    if (message.user.questdonat >= 5) {
      message.user.questdonat = true;

      await bot(
        `Поздравляем, Вы 5 раз открыли донат-кейс и получаете 📦 1 Донат-кейс.`,
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 3` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questdonat2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questdonat2++;

    if (message.user.questdonat2 >= 50) {
      message.user.questdonat2 = true;

      await bot(
        `Поздравляем, Вы 50 раз открыли донат-кейс и получаете 2 Донат-кейсa.`,
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 3` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );

      message.user.c3 += 2;
    }
  }

  let rand = utils.random(1, 12);

  if (rand === 1) {
    let bon = utils.random(50000, 100000);

    bon *= 1000000000;

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(15000, 50000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 📈`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    if (message.user.settings.vip !== false) {
      message.user.c3++;

      return bot(
        "Вы выиграли VIP статус!\n♻️ Вы уже являетесь VIP, выдана компенсация в виде",
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 3` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );
    }

    if (message.user.settings.premium || message.user.settings.titan) {
      message.user.settings.vip = true;

      return bot(
        "Вы выиграли VIP статус! 🤗\n\n▶️ Узнать список всех команд VIP: «VIP help»",
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 3` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );
    }

    message.user.settings.vip = true;

    message.user.stock.status = "VIP";

    message.user.limit.nicklimit = 21;

    message.user.level += 5;

    message.user.limit.banklimit = 100000000000000;

    message.user.limit.farmlimit = 3000;

    message.user.limit.videocardlimit = 50;

    message.user.limit.playerlimit = 100000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 20;

    return bot(
      `Вы выиграли VIP статус! 🤗\n\n▶️ Узнать список всех команд VIP: «VIP help»`,
      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 3` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }

  if (rand === 4) {
    let bon = utils.random(10, 50);

    message.user.rub += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} ЧакоРуб 💰`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: { type: "text", payload: "{}", label: "Обмен ЧакоРуб" },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    message.user.balance += 1000000000000;

    return bot(`Вы выиграли 1.000.000.000.000$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    message.user.balance += 5000000000000;

    return bot(`Вы выиграли 5.000.000.000.000$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 7) {
    message.user.opit += 500;

    return bot(`Вы выиграли 500 опыта! 📈`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 8) {
    message.user.c3 += 2;

    return bot(`Вы выиграли 2 Донат-кейса! 📦`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },
              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 9) {
    let bon = utils.random(15000, 50000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 👑`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 10) {
    message.user.opit += 3500;

    return bot(`Вы выиграли 3500 опыта! 📈`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 11) {
    let bon = utils.random(15000, 50000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга! 👑`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 12) {
    let bon = utils.random(50000, 100000);

    bon *= 1000000000;

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$ 💵`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 3` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 4)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.c4 < message.args[1])
    return bot(`У вас нет столько кейсов.`);

  if (!message.user.settings.titan && !message.user.settings.premium)
    return bot(`Открывать несколько кейсов можно со статусом "Premium VIP" `);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 15 &&
      message.user.settings.premium &&
      !message.user.settings.titan)
  )
    return bot(`Больше 15 кейсов за раз открывать нельзя.`);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 100 &&
      message.user.settings.titan &&
      !message.user.settings.topdon)
  )
    return bot(`Больше 100 кейсов за раз открывать нельзя.`);

  message.user.c4 -= message.args[1];
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += message.args[1];

  let money = 0;

  let rating = 0;

  let opit = 0;

  let t = message.args[1];

  for (let i = 0; i < t; i++) {
    let rand = utils.random(1, 6);

    if (rand === 1) {
      let bon = utils.random(100, 3000);

      bon *= 10000000000;

      money += bon;
    }

    if (rand === 2) {
      let bon = utils.random(100, 1200);

      opit += bon;
    }

    if (rand === 3) {
      let bon = utils.random(60000, 300000);

      rating += bon;
    }

    if (rand === 4) {
      opit += 1;
    }

    if (rand === 5) {
      money += 400000000000;
    }

    if (rand === 6) {
      money += 200000000000;
    }
  }

  message.user.balance += money;

  message.user.opit += opit;

  message.user.rating += rating;

  return bot(
    `Вы успешно открыли ${utils.sp(message.args[1])} кейсов.

✅ ➖ С них Вам выпало:
💲 Деньги: ${utils.sp(money)}$
👑 Рейтинг: ${utils.sp(rating)}
📈 Опыт: ${utils.sp(opit)}

▶️ Весь лут уже находится на Вашем аккаунте.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: { command: `Кейс открыть 4 ${message.args[1]}` },

                label: `📦 Открыть снова`,
              },

              color: "primary",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:кейс открыть 4)$/i, async (message, bot) => {
  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌

Введите "капча ${message.user.captcha.otvet}", чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌

Введите "капча ${otv}", чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = pr1 + pr2;

      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }

  if (message.user.c4 < 1) return bot(`У вас нет "Гоночного кейса".`); // (советую настроить всю команду под себя)

  message.user.c4 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  let rand = utils.random(1, 6);

  if (rand === 1) {
    let bon = utils.random(100, 3000);

    bon *= 10000000000;

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(100, 1200);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(60000, 300000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 4) {
    return bot(`вы ничего не выиграли.`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },
              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    message.user.balance += 400000000000;

    return bot(`Вы выиграли 400.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    message.user.balance += 200000000000;

    return bot(`Вы выиграли 200.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 4` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 7)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.c7 < message.args[1])
    return bot(`У вас нет столько кейсов.`);

  if (!message.user.settings.titan && !message.user.settings.premium)
    return bot(`Открывать несколько кейсов можно со статусом "Premium VIP" `);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 15 && !message.user.settings.titan)
  )
    return bot(`Больше 15 кейсов за раз открывать нельзя.`);

  if (
    message.args[1] < 1 ||
    (message.args[1] > 100 && message.user.settings.titan)
  )
    return bot(`Больше 100 кейсов за раз открывать нельзя.`);

  message.user.c7 -= message.args[1];

  let money = 0;

  let rating = 0;

  let opit = 0;

  let t = message.args[1];

  for (let i = 0; i < t; i++) {
    let rand = utils.random(1, 6);

    if (rand === 1) {
      let bon = utils.random(100, 3000);

      bon *= 10000000000;

      money += bon;
    }

    if (rand === 2) {
      let bon = utils.random(100, 1200);

      opit += bon;
    }

    if (rand === 3) {
      let bon = utils.random(60000, 300000);

      rating += bon;
    }

    if (rand === 4) {
      opit += 1;
    }

    if (rand === 5) {
      money += 400000000000;
    }

    if (rand === 6) {
      money += 200000000000;
    }
  }

  message.user.balance += money;

  message.user.opit += opit;

  message.user.rating += rating;

  return bot(
    `Вы успешно открыли ${utils.sp(message.args[1])} кейсов.

✅ ➖ С них Вам выпало:
💲 Деньги: ${utils.sp(money)}$
👑 Рейтинг: ${utils.sp(rating)}
📈 Опыт: ${utils.sp(opit)}

▶️ Весь лут уже находится на Вашем аккаунте.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7 ${message.arg[1]}` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:кейс открыть 7)$/i, async (message, bot) => {
  if (message.user.c7 < 1) return bot(`У вас нет "Кейса Автозвука".`); // (советую настроить всю команду под себя)

  message.user.c7 -= 1;

  let rand = utils.random(1, 6);

  if (rand === 1) {
    let bon = utils.random(100, 3000);

    bon *= 10000000000;

    message.user.balance += bon;

    return bot(`Вы выиграли ${utils.sp(bon)}$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(100, 1200);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(60000, 300000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 4) {
    return bot(`вы ничего не выиграли.`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    message.user.balance += 400000000000;

    return bot(`Вы выиграли 400.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    message.user.balance += 200000000000;

    return bot(`Вы выиграли 200.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 7` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 5)$/i, async (message, bot) => {
  if (message.user.c5 < 1) return bot(`У вас нет "Супер-кейса".`);

  message.user.c5 -= 1;

  let rand = utils.random(1, 8);

  if (rand === 1) {
    message.user.balance += 100000000000000;

    return bot(`Вы выиграли 100.000.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    if (message.user.tree === 4) {
      return bot(
        `Вы выиграли Дерево, но у вас уже такое есть, мы дарим вам еще 1 кейс`,
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 5` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );

      message.user.c5 += 1;
    }

    message.user.tree = 4;

    message.user.irrigation = 100;

    message.user.leafpribil = 100;

    return bot(`Вы выиграли безлиственное дерево`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(500000, 1000000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    if (message.user.business.length >= 4) {
      message.user.c5 += 1;

      return bot(`у вас уже есть 4 бизнеса, поэтому мы дарим вам еще 1 кейс`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 5` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    message.user.business.push({
      id: 14,

      upgrade: 1,

      workers: 1,

      moneys: 10000000000000,
    });

    return bot(`Вы выиграли Праздничный бизнес`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    let bon = utils.random(100, 500);

    message.user.rub += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} ЧакоРуб`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 7) {
    if (message.user.business.length >= 4) {
      message.user.c5 += 1;

      return bot(`у вас уже есть 4 бизнеса, поэтому мы дарим вам еще 1 кейс`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 5` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    message.user.business.push({
      id: 14,

      upgrade: 1,

      workers: 1,

      moneys: 10000000000000,
    });

    return bot(`Вы выиграли Праздничный бизнес`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 8) {
    if (message.user.settings.premium === true) {
      message.user.c5 += 1;

      return bot(`у вас уже есть Premium поэтому мы дарим вам еще 1 кейс`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 5` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    if (message.user.settings.titan === true) {
      message.user.settings.premium = true;

      return bot(`Вы выиграли Premium`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 5` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    message.user.settings.premium = true;

    message.user.stock.status = "Premium";

    message.user.limit.nicklimit = 32;

    message.user.opit += 5000;

    message.user.level += 35;

    message.user.bilet += 5;

    message.user.limit.banklimit = 200000000000000;

    message.user.limit.farmlimit = 5000;

    message.user.limit.videocardlimit = 75;

    message.user.limit.playerlimit = 200000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 30;

    return bot(`Вы выиграли Premium`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  } else {
    return bot(`вы ничего не выиграли.`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 5` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 6)$/i, async (message, bot) => {
  if (message.user.c6 < 1) return bot(`У вас нет "Секретного кейса".`); // (советую настроить всю команду под себя)

  message.user.c6 -= 1;

  let rand = utils.random(1, 15);

  if (rand === 1) {
    message.user.balance += 100000000000000;

    return bot(`Вы выиграли 100.000.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 2) {
    let bon = utils.random(4000, 6000);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(500000, 1000000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 4) {
    if (message.user.misc.pet >= 11) {
      message.user.c6 += 1; ///////////////

      return bot(
        `Вы выиграли улучшенного динозавра, но у вас есть праздничный питомец,и мы не хоти у вас его забирать,поэтому дарим вам еще 1 кейс`,
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 6` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );
    }

    message.user.misc.pet = 8;

    message.user.pet.lvl = utils.random(10, 20);

    return bot(`Вы выиграли улучшенного динозавра`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    message.user.sertificats.business += 1;

    return bot(`Вы выиграли Сертификат на кинобизнес`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    message.user.sertificats.car += 1;

    return bot(`Вы выиграли сертификат на лучшую машину`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 7) {
    let bon = utils.random(500, 800);

    message.user.rub += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} ЧакоРуб`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: { type: "text", payload: "{}", label: "Обмен ЧакоРуб" },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 8) {
    if (message.user.settings.premium === true) {
      message.user.c6 += 1;

      return bot(`у вас уже есть Premium поэтому мы дарим вам еще 1 кейс`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 6` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    if (message.user.settings.titan === true) {
      message.user.settings.premium = true;

      return bot(`Вы выиграли Premium`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 6` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    message.user.settings.premium = true;

    message.user.stock.status = "Premium";

    message.user.limit.nicklimit = 32;

    message.user.opit += 5000;

    message.user.level += 35;

    message.user.bilet += 5;

    message.user.limit.banklimit = 200000000000000;

    message.user.limit.farmlimit = 5000;

    message.user.limit.videocardlimit = 75;

    message.user.limit.playerlimit = 200000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 30;

    return bot(`Вы выиграли Premium`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 9) {
    if (message.user.misc.pet >= 11) {
      message.user.c6 += 1; ///////////////

      return bot(
        `Вы выиграли улучшенного динозавра, но у вас есть праздничный питомец,и мы не хоти у вас его забирать,поэтому дарим вам еще 1 кейс`,
        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: { command: `Кейс открыть 6` },
                    label: `📦 Открыть снова`,
                  },

                  color: "positive",
                },
              ],
            ],
          }),
        }
      );
    }

    message.user.misc.pet = 8;

    message.user.pet.lvl = utils.random(10, 20);

    return bot(`Вы выиграли улучшенного динозавра`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 10) {
    message.user.balance += 100000000000000;

    return bot(`Вы выиграли 100.000.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 11) {
    let bon = utils.random(4000, 6000);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 12) {
    let bon = utils.random(500000, 1000000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 13) {
    let bon = utils.random(1000, 3000);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 14) {
    let bon = utils.random(200000, 600000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 15) {
    message.user.sertificats.car += 1;

    return bot(`Вы выиграли сертификат на лучшую машину`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 6` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }
});

oscrn(/^(?:кейс открыть 8)$/i, async (message, bot) => {
  if (message.user.c8 < 1) return bot(`У вас нет "Новогоднего кейса".`); // (советую настроить всю команду под себя)

  message.user.c8 -= 1;

  let rand = utils.random(8, 8);

  if (rand === 1) {
    let bon = utils.random(2000, 10000);

    message.user.balance2 += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} GB`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  

  if (rand === 2) {
    if (message.user.transport.car === 21) {
      message.user.c8 += 1;

      return bot(`у вас уже есть лыжи, поэтому мы дарим вам еще 1 кейс`, {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Кейс открыть 8` },
                  label: `📦 Открыть снова`,
                },

                color: "positive",
              },
            ],
          ],
        }),
      });
    }

    message.user.transport.car = 21;

    return bot(`Вы выиграли лыжи`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 3) {
    let bon = utils.random(100000, 200000);

    message.user.rating += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} рейтинга`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 4) {
    message.user.balance += 50000000000000;

    return bot(`Вы выиграли 50.000.000.000.000$`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 5) {
    let bon = utils.random(100, 1000);

    message.user.opit += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} опыта`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 6) {
    let bon = 100;

    message.user.gift += bon;

    return bot(`Вы выиграли ${utils.sp(bon)} подарков`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 7) {
    message.user.c3 += 2;

    return bot(`Вы выиграли 2 донат кейса`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  if (rand === 8) {
    if (message.user.misc.pets >= 16) {

      message.user.c8 += 1;///////////////

      return bot(`Вам выпал питомец Гринч,который у вас уже есть, вы получили еще 1 кейс`, {

        keyboard: JSON.stringify({

          "inline": true,

          "buttons": [[{

            "action": { "type": "text", "payload": "{}", "label": "Кейс открыть 8" },

            "color": "positive"

          }],]

        })

      });

    }

    message.user.misc.pets = 16;

    message.user.pets.lvl = 1;

    return bot(`Вы выиграли питомца Гринч`, {

      keyboard: JSON.stringify({

        "inline": true,

        "buttons": [[{

          "action": { "type": "text", "payload": "{}", "label": "Кейс открыть 8" },

          "color": "positive"

        }],]

      })

    })

  }

  if (rand === 9) {
    message.user.c6 += 1;

    return bot(`Вы выиграли секретный кейс`, {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: { command: `Кейс открыть 8` },
                label: `📦 Открыть снова`,
              },

              color: "positive",
            },
          ],
        ],
      }),
    });
  }

  //if (rand == 9) {

  //	message.user.prazdnikbussines=true;

  //	return bot(`Вы выиграли новогодний бизнес, он будет приносить вам по 50.000.000.000$ в минуту в автоматическом режиме`,{keyboard: JSON.stringify({"inline": true,"buttons": [[{"action": {"type": "text", "payload": "{}", "label": "Кейс открыть 8"}, "color": "positive"}],]})})

  //}
});

oscrn(/(?:кейс открыть 9|Открыть 🔥 Premium кейс)$/i, async (message, bot) => {
  if (message.user.c9 < 1) return bot(`У вас нет "🔥 Premium-кейса".`);

  if (message.user.questallfucker && !message.user.questpremcase) {
    message.user.questpremcase = true;

    await bot(`поздравляем, вы открыли премиум кейс и получили 50 трлн`);

    message.user.balance += 50000000000000;
  }

  let rand = utils.random(1, 100);

  message.user.c9 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  if (rand <= 40) {
    let mon = utils.random(1, 100);

    mon = mon * 2000000000000;

    message.user.balance += mon;

    return bot(`🔥Вы открыли Premium-кейс и выиграли ${utils.sp(mon)}$`);
  }

  if (rand > 40 && rand <= 60) {
    let mon = utils.random(1, 100);

    mon = mon * 100;

    message.user.opit += mon;

    return bot(`🔥Вы открыли Premium-кейс и выиграли ${utils.sp(mon)} опыта📈`);
  }

  if (rand > 60 && rand <= 70) {
    let mon = utils.random(1, 100);

    mon = mon * 10000;

    message.user.rating += mon;

    return bot(
      `🔥Вы открыли Premium-кейс и выиграли ${utils.sp(mon)} рейтинга👑`
    );
  }

  if (rand > 70 && rand <= 75) {
    message.user.sertificats.premium += 1;

    return bot(
      `🔥Вы открыли Premium-кейс и выиграли сертификат на Premium VIP📋`
    );
  }

  if (rand > 75 && rand <= 80) {
    message.user.sertificats.business += 1;

    return bot(
      `🔥Вы открыли Premium-кейс и выиграли сертификат на Киностудию📋`
    );
  }

  if (rand > 80 && rand <= 85) {
    message.user.sertificats.car += 1;

    return bot(
      `🔥Вы открыли Premium-кейс и выиграли сертификат на лучшую машину📋`
    );
  }

  if (rand > 85 && rand <= 98) {
    let mon = utils.random(1, 100);

    mon = mon * 20000000;

    message.user.btc += mon;

    return bot(
      `🔥Вы открыли Premium-кейс и выиграли ${utils.sp(mon)} биткоинов💸`
    );
  }

  if (rand > 98 && rand <= 100) {
    await vk.api.messages.send({
      user_id: 598680773,
      message: `▶️ УВЕДОМЛЕНИЕ:

♻️ Игрок @id${message.user.id} (${message.user.tag}) | vk.com/id${message.senderId} выиграл TITAN 🤗`,
      random_id: 0,
    });

    message.user.settings.titan = true;

    message.user.limit.nicklimit = 48;

    message.user.level += 50;

    message.user.opit += 50000;

    message.user.limit.banklimit = 500000000000000;

    message.user.limit.farmlimit = 10000;

    message.user.limit.playerlimit = 300000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 100;

    return bot(`🔥Вы открыли Premium-кейс и выиграли TITAN VIP🔥`);
  }
});

oscrn(/(?:кейс открыть 11)$/i, async (message, bot) => {
  if (message.user.c11 < 1) return bot(`У вас нет "Админ-кейса".`);

  message.user.c11 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  let rand = utils.random(1, 3000000000);

  mon = rand * 1000;

  message.user.limitadd.playerlimitadd += mon;

  return bot(
    `🔥Вы открыли Админ-кейс и выиграли +${utils.sp(
      mon
    )} $ к выдаче\n🏆Лимит обновиться через час!`
  );
});

oscrn(/(?:кейс открыть 10|Открыть 🔥 Ультра кейс)$/i, async (message, bot) => {
  if (message.user.c10 < 1) return bot(`У вас нет "🔥 Ультра-кейса".`);

  let rand = utils.random(1, 1000);

  message.user.c10 -= 1;
  if (message.user.otkr === undefined) {
    message.user.otkr = 0;
  }
  message.user.otkr += 1;

  if (rand <= 300) {
    let mon = utils.random(1, 30);

    mon = mon * 2000000000000;

    message.user.balance += mon;

    return bot(`🔥Вы открыли Ультра-кейс и выиграли ${utils.sp(mon)}$`);
  }

  if (rand > 300 && rand <= 500) {
    let mon = utils.random(1, 50);

    mon = mon * 100;

    message.user.opit += mon;

    return bot(`🔥Вы открыли Ультра-кейс и выиграли ${utils.sp(mon)} опыта📈`);
  }

  if (rand > 500 && rand <= 700) {
    let mon = utils.random(1, 65);

    mon = mon * 18347;

    message.user.rating += mon;

    return bot(
      `🔥Вы открыли Ультра-кейс и выиграли ${utils.sp(mon)} рейтинга👑`
    );
  }

  if (rand > 700 && rand <= 750) {
    let mon = utils.random(1, 20);

    message.user.rubli += Number(mon);

    return bot(
      `🔥Вы открыли Ультра-кейс и выиграли ${utils.sp(
        mon
      )} рублей на донат-счет`
    );
  }

  if (rand > 750 && rand <= 780) {
    message.user.sertificats.premium += 1;

    return bot(
      `🔥Вы открыли Ультра-кейс и выиграли сертификат на Premium VIP📋`
    );
  }

  if (rand > 780 && rand <= 820) {
    message.user.sertificats.business += 1;

    return bot(
      `🔥Вы открыли Ультра-кейс и выиграли сертификат на Киностудию📋`
    );
  }

  if (rand > 820 && rand <= 970) {
    let mon = utils.random(1, 100);

    mon = mon * 20000000;

    message.user.btc += mon;

    return bot(
      `🔥Вы открыли Ультра-кейс и выиграли ${utils.sp(mon)} биткоинов💸`
    );
  }

  if (rand > 970 && rand <= 990) {
    await vk.api.messages.send({
      user_id: message.user.id,

      message: `УВЕДОМЛЕНИЕ ✅\n🔥Ссылка на Titan беседу: https://vk.me/join/AJQ1d5Y7UCLPBK3dWXszvsA9`,

      random_id: 0,
    });

    await vk.api.messages.send({
      user_id: 547505173,
      message: `[УВЕДОМЛЕНИЕ]

				Игрок: vk.com/id${message.senderId} выиграл титан`,
      random_id: 0,
    });

    message.user.settings.titan = true;

    message.user.limit.nicklimit = 48;

    message.user.level += 50;

    message.user.opit += 50000;

    message.user.limit.banklimit = 500000000000000;

    message.user.limit.farmlimit = 10000;

    message.user.limit.playerlimit = 300000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 100;

    return bot(`🔥Вы открыли Ультра-кейс и выиграли TITAN VIP🔥`);
  }

  if (rand > 990 && rand <= 1000) {
    await vk.api.messages.send({
      user_id: 547505173,
      message: `[УВЕДОМЛЕНИЕ]

				Игрок: vk.com/id${message.senderId} выиграл звезду`,
      random_id: 0,
    });

    message.user.stars5 = true;

    return bot(`🔥Вы открыли Ультра-кейс и выиграли Донатного гиганта 💰`);
  }
});

oscrn(/^(?:кейс 1)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 0) return;

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  message.args[1] = Number(message.args[1]);

  let s = message.args[1] * 500000000000;

  s = Number(s);

  if (message.user.balance < s) return bot(` у Вас недостаточно денег 😔 `);

  message.user.c1 += message.args[1];

  message.user.balance -= s;

  return bot(
    `вы успешно купили «Обычный Кейс» (${utils.sp(
      message.args[1]
    )} шт.) за ${utils.sp(s)}$ 💵💰`
  );
});

oscrn(/^(?:кейс 2)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 0) return;

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  message.args[1] = Number(message.args[1]);

  let s = message.args[1] * 5000000000000;

  s = Number(s);

  if (message.user.balance < s) return bot(` у Вас недостаточно денег 😔 `);

  message.user.c2 += message.args[1];

  message.user.balance -= s;

  return bot(
    `вы успешно купили «Золотой Кейс» (${utils.sp(
      message.args[1]
    )} шт.) за ${utils.sp(s)}$ 💵💰`
  );
});

oscrn(/^(?:кейс 3)\s([0-9]+)$/i, async (message, bot) => {
  if (message.args[1] < 0) return;

  message.args[1] = Number(message.args[1]);

  let s = message.args[1] * 150;

  s = Number(s);

  if (message.user.rub < s) return bot(` у Вас недостаточно ЧакоРуб 😔 `);

  message.user.c3 += message.args[1];

  message.user.rub -= s;

  return bot(
    `вы успешно купили «Донат Кейс» (${utils.sp(
      message.args[1]
    )} шт.) за ${utils.sp(s)} ЧакоРуб 💵💰`
  );
});

oscrn(/^(?:кейс 4)$/i, async (message, bot) => {
  return bot(`Гоночный кейс невозможно приобрести. 💰`);
});
oscrn(/^(?:кейс 1|🗂 Обычный кейс)$/i, async (message, bot) => {
  if (message.user.balance < 500000000000)
    return bot(` у Вас недостаточно денег 😔 `);

  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

  message.user.c1 += 1;

  message.user.balance -= 500000000000;

  return bot(` вы успешно купили «Обычный Кейс» (1 шт.) 📦💰`);
});

oscrn(/^(?:кейс 2|🗂 Зотолотой кейс)$/i, async (message, bot) => {
  if (message.user.balance < 5000000000000)
    return bot(`у Вас недостаточно денег 😔`);
  if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);
  message.user.c2 += 1;
  message.user.balance -= 5000000000000;
  return bot(` вы успешно купили «Золотой Кейс» (1 шт.) 📦💰`);
});

oscrn(/^(?:кейс 3|🗂 Донат кейс)$/i, async (message, bot) => {
  if (message.user.rub < 150) return bot(` у Вас недостаточно ЧакоРуб 😔 `);

  message.user.c3 += 1;

  message.user.rub -= 150;

  return bot(` вы успешно купили «Донат Кейс» (1 шт.) 📦💰`);
});

oscrn(
  /^(?:Посылки|📦 Список посылок|@club228105719 📦Посылки|📦 Посылка)$/i,
  async (message, bot) => {
    if (typeof message.user.possilka1 != "number") message.user.possilka1 = 0;

    if (typeof message.user.possilka2 != "number") message.user.possilka2 = 0;

    if (typeof message.user.possilka3 != "number") message.user.possilka3 = 0;

    let text = `Ваши посылки:`;

    if (message.user.possilka1 > 0) {
      text += `💵 1. Денежная посылка: (${utils.sp(
        message.user.possilka1
      )} шт.)`;
    }

    if (message.user.possilka2 > 0) {
      text += `📩 2. Элитная посылка: (${utils.sp(
        message.user.possilka2
      )} шт.)`;
    }

    if (message.user.possilka3 > 0) {
      text += `🔮 3. Премиум посылка: (${utils.sp(
        message.user.possilka3
      )} шт.)`;
    }

    return bot(`Посылки:

📦 1. Денежная посылка — 250 ЧакоРуб [15 rub]
➖ Падает: от 1трлн до 200 трлн вирт💵
➖➖➖➖➖➖
📦 2. Элитная посылка - 1000 ЧакоРуб [50 rub]
➖ Падает: от 1трлн до 500 трлн вирт💵
➖ Падает: от 10.000 рейтинга до 1.000.000 рейтинга👑
🛑 Выпадает два предмета вместе!
➖➖➖➖➖➖
📦 3. Премиум посылка - 5000 ЧакоРуб [100 rub]
➖ Падает: от 1трлн до 750 трлн вирт💵
➖ Падает: от 10.000 рейтинга до 5.000.000 рейтинга👑
➖ Падает: от 500 ЧакоРуб до 10.000 ЧакоРуб⁉️
🛑 Выпадает три предмета вместе!
➖➖➖➖➖➖
📂 Открыть: Посылка открыть [номер]
🛒 Покупка за ЧакоРуб: ЧакоРуб [17/18/19]
🔹 Покупка за донат-рубли: «Донат»

${text}`);
  }
);

oscrn(/^(?:Посылка открыть 1)$/i, async (message, bot) => {
  if (message.user.possilka1 < 1) return bot(`🛑У вас нет данной посылки.`);

  message.user.possilka1 -= 1;

  let t = utils.random(1, 200);

  message.user.balance += t * 1000000000000;

  return bot(
    `Денежная посылка была успешно открыта!\n\n✅ ➖ Вам выпало: ${utils.rn(
      t * 1000000000000
    )}$💵`
  );
});

oscrn(/^(?:Посылка открыть 2)$/i, async (message, bot) => {
  if (message.user.possilka2 < 1) return bot(`🛑У вас нет данной посылки.`);

  message.user.possilka2 -= 1;

  let t = utils.random(1, 400);

  let t1 = utils.random(1, 80);

  message.user.balance += t * 1000000000000;

  message.user.rating += t1 * 10000;

  return bot(
    `Элитная посылка была успешно открыта!\n\n✅ ➖ Вам выпало:\n💰 Деньги: ${utils.rn(
      t * 1000000000000
    )}$ 💵\n👑 Рейтинг: ${utils.rn(t1 * 10000)}`
  );
});

oscrn(/^(?:Посылка открыть 3)$/i, async (message, bot) => {
  if (message.user.possilka3 < 1) return bot(`🛑У вас нет данной посылки.`);

  message.user.possilka3 -= 1;

  let t = utils.random(1, 500);

  let t1 = utils.random(1, 350);

  let t2 = utils.random(1, 10);

  message.user.balance += t * 1000000000000;

  message.user.rating += t1 * 10000;

  message.user.rub += t2 * 500;

  return bot(
    `Элитная посылка была успешно открыта!\n\n✅ ➖ Вам выпало:\n💰 Деньги: ${utils.rn(
      t * 1000000000000
    )}$ 💵\n👑 Рейтинг: ${utils.rn(t1 * 10000)}\n⁉️ Чакоруб: ${utils.rn(
      t2 * 500
    )}`
  );
});

oscrn(/^промо\s([^]+)$/i, async (message, bot) => {
  if (message.args[1] === "выкл") {
    if (message.user.id !== admin && message.user.id !== admin2)
      /* Ваш игровой ID */ return;

    config.promotip = "balance";

    config.promovalue = 0;

    config.promolimit = 0;

    await savePromo();

    clearPromo();

    return bot("Промокод обнулён! 🔱");
  }

  if (config.promoname === message.args[1]) {
    if (message.isChat)
      return bot(
        `что бы получить бонус с промокода вы должны отправить этот промокод боту в личку. 💬`
      );

    if (message.user.promo) return bot(`вы уже активировали промокод. ⛔`);
    else {
      if (promo >= config.promolimit)
        return bot(
          `у этого промокода закончились использования!\nВключи уведомления о новых записях в группе, чтобы узнавать о промокодах одним из первых! 📢`
        );

      if (config.promotip === "btc") message.user.btc += config.promovalue;

      if (config.promotip === "баланс")
        message.user.balance += config.promovalue;

      if (config.promotip === "донат-кейсы")
        message.user.c3 += config.promovalue;

      if (config.promotip === "рейтинг")
        message.user.rating += config.promovalue;

      if (config.promotip === "скоины")
        message.user.sprcoin += config.promovalue;

      if (config.promotip === "vip") {
        const user = message.user;

        if (!user) return bot(`неверный ID игрока`);

        if (user.settings.premium !== false)
          return bot("Вы уже является [Premium]. ⚠");

        if (user.settings.vip !== false)
          return bot("игрок уже является [VIP]. ⚠");

        user.settings.vip = true;

        user.stock.status = "VIP";

        user.limit.nicklimit = 21;

        user.level += 5;

        user.limit.banklimit = 100000000000000;

        user.limit.farmlimit = 3000;

        user.limit.videocardlimit = 50;

        user.limit.playerlimit = 100000000000000;

        user.limit.sent = 0;

        user.maxenergy = 20;

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `[❗УВЕДОМЛЕНИЕ❗]

			${user.tag} Вы получили VIP статус! 💎

			⚠ Для ознакомления с комаднами введите «VIP help»

			🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (config.promotip === "premium") {
        const user = message.user;

        if (!user) return bot(`неверный ID игрока`);

        if (user.settings.premium !== false)
          return bot("игрок уже является [Premium]. ⚠");

        user.settings.vip = false;

        user.settings.premium = true;

        user.stock.status = "Premium";

        user.limit.nicklimit = 32;

        user.level += 35;

        user.opit += 5000;

        user.limit.banklimit = 200000000000000;

        user.limit.farmlimit = 5000;

        user.limit.videocardlimit = 75;

        user.limit.playerlimit = 200000000000000;

        user.limit.sent = 0;

        user.maxenergy = 30;

        await bot(`игрок назначен [Premium] 💎`);

        if (user.notifications)
          await vk.api.messages.send({
            user_id: user.id,
            message: `[❗УВЕДОМЛЕНИЕ❗]
${user.tag} Вы получили Premium статус! 💎
⚠ Для ознакомления с комаднами введите «Premium help»
🔕 Введите «Уведомления выкл», если не хотите получать подобные сообщения`,
            random_id: 0,
          });
      }

      if (config.promotip === "hellpet") {
        message.user.misc.pet = utils.random(11, 12);

        message.user.pet.lvl = 1;
      }

      if (config.promotip === "hellcase") {
        message.user.c5 += config.promovalue;
      }
    }

    message.user.promo = true;

    promo += 1;

    ostalos = config.promolimit - promo;

    await savePromo();

    return bot(`зачислено +${utils.sp(config.promovalue)}${config.promotip
      .toString()
      .replace(/btc/gi, "฿")
      .replace(/balance/gi, "$")
      .replace(/dkeys/gi, " Донат-кейсов")} ✅

	📢 Осталось ${ostalos} использований.`);
  } else {
    return bot(
      `у данного промокода закончились использования, либо его не существует, проверьте правильность его написания`
    );
  }
});

oscrn(/^(?:чек промо)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  return bot(`настройки промо.

💣 Название: ${config.promoname}.
💣 Тип: ${config.promotip}.
💢 Сумма: ${config.promovalue}.
👥 Кол-во: ${config.promolimit}.
👥 Осталось: ${config.promolimit - promo}.

Типы промо: "btc","баланс","донат-кейсы","рейтинг","vip","premium"
Создать рандомный промокод "randomPromocode"`);
});

oscrn(
  /^(?:setpromo|sp)\s([^]+)\s([0-9]+)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.id !== admin && message.user.id !== admin2)
      /* Ваш игровой ID */ return;

    config.promoname = randomUid();

    config.promotip = message.args[1];

    config.promovalue = Number(utils.numstring(`${message.args[2]}`));

    config.promolimit = Number(message.args[3]);

    await savePromo();

    clearPromo();

    return bot(
      `настройки обновлены. ⚙

💣 Название: ${config.promoname}.
💣 Тип: ${config.promotip}.
💢 Сумма: ${utils.sp(config.promovalue)}.
👥 Кол-во: ${config.promolimit}.

🔱 Чтобы создать пост используйте кнопку`,
      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: { command: `Новыйпромокод` },
                  label: "🎗 Создаём",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:Новыйпромокод)$/i, async (message, bot) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  let res = await vk.api.wall
    .post({
      owner_id: `-228105719`,
      message: `Новый промо🍀\n💞 Вводи: ${config.promoname}`,
    })
    .then()
    .catch((e) => {
      message.send({ chat_id: 1, message: e, random_id: 0 });
    });

  return bot(`создан пост POST ID: ${res.post_id}`);
});

oscrn(/^(?:🎫 машина госномер|машина госномер)$/i, async (message, bot) => {
  if (!message.user.transport.car) return bot(`у вас нет машины`);

  let n_1 = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_2 = utils.random(0, 9);

  let n_3 = utils.random(0, 9);

  let n_4 = utils.random(0, 9);

  let n_5 = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_6 = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_7 = utils.pick(["777"]);

  if (message.user.balance < 30000000)
    return bot(`вам нужно 30.000.000$ для смены госномера.`);

  message.user.balance -= 30000000;

  message.user.scar.gosnomer = `${n_1}${n_2}${n_3}${n_4}${n_5}${n_6} ${n_7}`;

  let res = `${n_1}${n_2}${n_3}${n_4}${n_5}${n_6} ${n_7}`;

  return bot(
    `Вы поставили новый гос. номер на машину! ☃️
🚥 Номер: «${res}» 🎫
▶️ Стоимость обошлась в ${utils.sp(30000000)}$ 💵
🚗 Теперь эта машина будет ездить с такими номерами! 🚥`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",
                payload: "{}",
                label: "🎫 Машина госномер",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(
  /^(?:сетномер)\s([0-9]+)\s([а-я])([0-9])([0-9])([0-9])([а-я])([а-я])$/i,
  async (message, bot) => {
    if (message.user.id !== admin && message.user.id !== admin2)
      /* Ваш игровой ID */ return;

    let res = `${message.args[2]}${message.args[3]}${message.args[4]}${message.args[5]}${message.args[6]}${message.args[7]} 777`;

    let text = res.toLowerCase();

    const b =
      /(й|ц|г|ш|щ|з|ъ|ф|ы|п|л|д|ж|э|я|ч|и|ь|б|ю|q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m:)/;

    if (b.test(text) === true)
      return bot(`некорректный номер!

✅Напишите номер по шаблону, например: «A123BC», используя только русские буквы.
➕ Примеры: А777АА, А123МР, Р777РР и др.

🔤 Список разрешенных букв: А, В, Е, К, М, Н, О, Р, С, Т, У, Х`);

    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`неверный ID игрока! ❌`);

    for (i in users) {
      if (users[i].scar.gosnomer.toLowerCase() === res.toLowerCase())
        return bot(`номер «${res}» уже занят игроком @id${users[i].id} (${users[i].tag}) ❌



▶️ Укажите другой номер.`);
    }

    user.scar.gosnomer = res;

    return bot(`Вы поставили новый гос. номер на машину! ☃️
🚥 Номер: «${res}» 🎫
🚗 Теперь эта машина будет ездить с такими номерами! 🚥`);
  }
);

oscrn(/^(?:машина)$/i, async (message, bot) => {
  let smileng = `❄️`;

  if (!message.user.transport.car) return bot(`у вас нет машины`);

  // Улучшения »

  let g1 = message.user.scar.prok_1;

  let g2 = message.user.scar.prok_2;

  let g3 = message.user.scar.prok_3;

  let g4 = message.user.scar.prok_4;

  let g5 = message.user.scar.prok_5;

  let g6 = message.user.scar.prok_6;

  // Информация о машине »

  let carsk = cars[message.user.transport.car - 1].carsk;

  let maxsk = cars[message.user.transport.car - 1].maxsk;

  let m_sk = eval(
    `(${g1} + ${g2} + ${g3} + ${g4} + ${g5} + ${g6}) * 3 + ${carsk}`
  );

  let max_sk = eval(
    `(${g1} + ${g2} + ${g3} + ${g4} + ${g5} + ${g6}) * 5 + ${maxsk}`
  );

  // Разгон до 100км/ч » [!] Не смог .__.

  let razgon = cars[message.user.transport.car - 1].razgon;

  {
    if (message.chatId) {
      await vk.api.messages.send({
        chat_id: message.chatId,
        attachment: `${cars[message.user.transport.car - 1].photo}`,
        message:
          `

@id${message.user.id}(${message.user.tag}), информация о Вашей машине! 🚘
🚗 Название: «${
            message.user.astats.car === false
              ? `${cars[message.user.transport.car - 1].name}`
              : `${message.user.astats.car}`
          }» ${smileng}
🛣️ Максимальная скорость: ${max_sk}
🚗 Мощность: ${m_sk} л/с.
⏱ Разгон до 100км/час: ${razgon} секунд.
➖➖➖➖➖➖
🏆 Ваш рейтинг гонщика: ${message.user.gon}
🎫 Госномер: ` +
          (message.user.scar.gosnomer === "undefined"
            ? `Отсуствует`
            : `${message.user.scar.gosnomer}`) +
          ``,

        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "🏎️ Топ гонщиков",
                },

                color: "primary",
              },
            ],

            [
              {
                action: { type: "text", payload: "{}", label: "🏁 Гонка" },

                color: "positive",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "⏫ Улучшения",
                },
                color: "secondary",
              },
            ],
          ],
        }),
        random_id: 0,
      });
    }

    if (!message.isChat) {
      await vk.api.messages.send({
        user_id: message.user.id,
        attachment: `${cars[message.user.transport.car - 1].photo}`,
        message:
          `

@id${message.user.id}(${
            message.user.tag
          }), информация о Вашей машине! 🚘${smileng}

🚗 Название: «${
            message.user.astats.car === false
              ? `${cars[message.user.transport.car - 1].name}`
              : `${message.user.astats.car}`
          }» ${smileng}
🛣️ Максимальная скорость: ${max_sk}
🚗 Мощность: ${m_sk} л/с.
⏱ Разгон до 100км/час: ${razgon} секунд.
➖➖➖➖➖➖
🏆 Ваш рейтинг гонщика: ${message.user.gon}
🎫 Госномер: ` +
          (message.user.scar.gosnomer === "undefined"
            ? `Отсуствует`
            : `${message.user.scar.gosnomer}`) +
          ``,

        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "🏎️ Топ гонщиков",
                },

                color: "primary",
              },
            ],

            [
              {
                action: { type: "text", payload: "{}", label: "🏁 Гонка" },

                color: "positive",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: '{"button": "1"}',

                  label: "⏫ Улучшения",
                },
                color: "secondary",
              },
            ],
          ],
        }),
        random_id: 0,
      });
    }
  }
});

oscrn(/^(?:машина улучшить|⏫ Улучшения)$/i, async (message, bot) => {
  if (!message.user.transport.car) return bot(`у вас нет машины`);

  let g1 = message.user.scar.prok_1;

  let g2 = message.user.scar.prok_2;

  let g3 = message.user.scar.prok_3;

  let g4 = message.user.scar.prok_4;

  let g5 = message.user.scar.prok_5;

  let g6 = message.user.scar.prok_6;

  return bot(
    `улучшения авто:



🌑 Шины [${g1}/3]
⬆️ Улучшить: «машина улучшить шины»

🔧 Диски [${g2}/5]
⬆️ Улучшить: «машина улучшить диски»

⚙ Двигатель [${g3}/5]
⬆️ Улучшить: «машина улучшить двигатель»

🧨 Тормоза [${g4}/3]
⬆️ Улучшить: «машина улучшить тормоза»

🕹 Управление [${g5}/5]
⬆️ Улучшить: «машина улучшить управление»

🔑 Чип тюнинг [${g6}/1]
⬆️ Улучшить: «машина улучшить чип»


🎫 Госномер [` +
      (message.user.scar.gosnomer === "undefined"
        ? `Отсуствует`
        : `${message.user.scar.gosnomer}`) +
      `]

1⃣ Установить: "машина госномер" (30.000.000$)

💰 ➖ Стоимость улучшения: ${utils.sp(
        cars[message.user.transport.car - 1].upgrade
      )}$`
  );
});

oscrn(/^(?:машина улучшить шины)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_1 > 2) return bot(`шины максимально улучшены. ⚒`);

  if (cars[message.user.transport.car - 1].upgrade > message.user.balance)
    return bot(
      `для улучшения Вам нужно ${
        cars[message.user.transport.car - 1].upgrade
      }$ 💰`
    );

  message.user.balance -= cars[message.user.transport.car - 1].upgrade;

  message.user.scar.prok_1 += 1;

  return bot(`шины были улучшены [${message.user.scar.prok_1}/3] ⚒`);
});

oscrn(/^(?:машина улучшить диски)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_2 > 4) return bot(`диски максимально улучшены. ⚒`);

  if (cars[message.user.transport.car - 1].upgrade > message.user.balance)
    return bot(
      `для улучшения Вам нужно ${
        cars[message.user.transport.car - 1].upgrade
      }$ 💰`
    );

  message.user.balance -= cars[message.user.transport.car - 1].upgrade;

  message.user.scar.prok_2 += 1;

  return bot(`диски были улучшены [${message.user.scar.prok_2}/5] ⚒`);
});

oscrn(/^(?:машина улучшить двигатель)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_3 > 4)
    return bot(`двигатель максимально улучшен. ⚒`);

  if (cars[message.user.transport.car - 1].upgrade > message.user.balance)
    return bot(
      `для улучшения Вам нужно ${
        cars[message.user.transport.car - 1].upgrade
      }$ 💰`
    );

  message.user.balance -= cars[message.user.transport.car - 1].upgrade;

  message.user.scar.prok_3 += 1;

  return bot(`двигатель был улучшен [${message.user.scar.prok_3}/5] ⚒`);
});

oscrn(/^(?:машина улучшить тормоза)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_4 > 2)
    return bot(`тормоза максимально улучшены. ⚒`);

  if (cars[message.user.transport.car - 1].upgrade > message.user.balance)
    return bot(
      `для улучшения Вам нужно ${
        cars[message.user.transport.car - 1].upgrade
      }$ 💰`
    );

  message.user.balance -= cars[message.user.transport.car - 1].upgrade;

  message.user.scar.prok_4 += 1;

  return bot(`тормоща были улучшены [${message.user.scar.prok_4}/3] ⚒`);
});

oscrn(/^(?:машина улучшить управление)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_5 > 4)
    return bot(`управление максимально улучшено. ⚒`);

  if (cars[message.user.transport.car - 1].upgrade > message.user.balance)
    return bot(
      `для улучшения Вам нужно ${
        cars[message.user.transport.car - 1].upgrade
      }$ 💰`
    );

  message.user.balance -= cars[message.user.transport.car - 1].upgrade;

  message.user.scar.prok_5 += 1;

  return bot(`управление было улучшено [${message.user.scar.prok_5}/5] ⚒`);
});

oscrn(/^(?:машина улучшить чип)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.prok_6 > 0) return bot(`чип максимально улучшен. ⚒`);

  return bot(`${text}`);
});

//Кнопка

oscrn(/^(?:гонка|🏁 Гонка)$/i, async (message, bot) => {
  if (!message.user.transport.car)
    return bot(
      `у Вас нет транспортного средства! 🚗❌\n\n▶️ Просмотреть список продаваемых автомобилей: «Машины» 🛒`
    );

  if (message.user.scar.gontime > Date.now())
    return bot(`Ваша машина в ремонте! 🔩 🚙

🏁 Поехать на гонки Вы сможете через ${unixStampLefta(
      message.user.scar.gontime - Date.now()
    )} ❄️`);

  if (message.user.captcha.vid !== false) {
    if (message.user.captcha.vid === 1)
      return bot(`подозрительная активность! ❌

Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

    if (message.user.captcha.vid === 2)
      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
  }

  let captcha = utils.random(1, 100);

  if (captcha === 44) {
    let t = utils.pick([1, 2]);

    if (t === 1) {
      let otv = utils.random(100, 500);

      message.user.captcha.vid = 1;

      message.user.captcha.otvet = otv;

      return bot(`подозрительная активность! ❌

Введите «капча ${otv}», чтобы пройти проверку на робота!`);
    }

    if (t === 2) {
      let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

      message.user.captcha.vid = 2;

      message.user.captcha.otvet = pr1 + pr2;

      message.user.captcha.primer = pr1 + pr2;

      return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
        message.user.captcha.otvet / 2
      }» и введите "капча [ответ]"`);
    }
  }

  if (typeof message.user.questracer === "number") {
    message.user.questracer++;

    if (message.user.questracer >= 5) {
      message.user.questracer = true;

      await bot(
        `Поздравляем, Вы 5 раз поучаствовали в гонке и получаете 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }
  }

  if (
    typeof message.user.questracer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questracer2++;

    if (message.user.questracer2 >= 500) {
      message.user.questracer2 = true;

      await bot(
        `Поздравляем, Вы 500 раз поучаствовали в гонке и получаете 📦 2 Донат-кейсa.`
      );

      message.user.c3 += 2;
    }
  }

  let g1 = message.user.scar.prok_1;

  let g2 = message.user.scar.prok_2;

  let g3 = message.user.scar.prok_3;

  let g4 = message.user.scar.prok_4;

  let g5 = message.user.scar.prok_5;

  let g6 = message.user.scar.prok_6;

  // Информация о машине »

  let carsk = cars[message.user.transport.car - 1].carsk;

  let mymaxsk = cars[message.user.transport.car - 1].maxsk;

  let m_sk = eval(
    `(${g1} + ${g2} + ${g3} + ${g4} + ${g5} + ${g6}) * 3 + ${carsk}`
  );

  let mymax_sk = eval(
    `(${g1} + ${g2} + ${g3} + ${g4} + ${g5} + ${g6}) * 5 + ${mymaxsk}`
  );

  let s = utils.random(1, 16);

  let skorost = utils.random(5, 63); // Не знаю зачем это.

  let max_sk = eval(`${cars[s - 1].maxsk} + ${skorost}`);

  let p_sk = eval(`${cars[s - 1].carsk} + ${skorost}`);

  // Подбор Номера »

  let n_one = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_two = utils.random(0, 9);

  let n_three = utils.random(0, 9);

  let n_four = utils.random(0, 9);

  let n_five = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_six = utils.pick([
    "А",
    "В",
    "Е",
    "К",
    "М",
    "Н",
    "О",
    "Р",
    "С",
    "Т",
    "У",
    "Х",
  ]);

  let n_seven = utils.pick(["777"]);

  rgn = `${n_one}${n_two}${n_three}${n_four}${n_five}${n_six} ${n_seven}`;

  // Подбор Номера «

  const cases = utils.pick([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]);

  if (cases === 1) {
    message.user.c4++;

    message.user.sprcoin += 3;
  }

  bot(
    `Начался заезд против «${cars[s - 1].name}»

🏎 Ожидаем прибытие машин к финишу..`,
    {
      attachment: `${cars[message.user.transport.car - 1].photo},${
        cars[s - 1].photo
      }`,
    }
  );

  let w_reit = utils.random(5, 9);

  let p_reit = utils.random(2, 4);

  if (message.user.settings.imperator) {
    w_reit += 3;

    p_reit -= 1;
  }

  message.user.scar.gontime = true;

  if (!message.isChat) {
    message.user.scar.gontime = Date.now() + 900000;

    setTimeout(() => {
      if (message.isChat) {
        vk.api.messages.send({
          chat_id: message.chatId,
          random_id: 0,
          message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
        });

        message.send({ sticker_id: 74276 });
      }

      if (!message.isChat) {
        vk.api.messages.send({
          user_id: message.user.id,
          random_id: 0,
          message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
        });

        message.send({ sticker_id: 74276 });
      }
    }, 900000);
  } else {
    if (chats[message.chatId].statuemsglvl >= 1) {
      message.user.scar.gontime = Date.now() + 600000;

      setTimeout(() => {
        if (message.isChat) {
          vk.api.messages.send({
            chat_id: message.chatId,
            random_id: 0,
            message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
          });

          message.send({ sticker_id: 74276 });
        }

        if (!message.isChat) {
          vk.api.messages.send({
            user_id: message.user.id,
            random_id: 0,
            message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
          });

          message.send({ sticker_id: 74276 });
        }
      }, 600000);
    } else {
      message.user.scar.gontime = Date.now() + 900000;

      setTimeout(() => {
        if (message.isChat) {
          vk.api.messages.send({
            chat_id: message.chatId,
            random_id: 0,
            message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
          });

          message.send({ sticker_id: 74276 });
        }

        if (!message.isChat) {
          vk.api.messages.send({
            user_id: message.user.id,
            random_id: 0,
            message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
          });

          message.send({ sticker_id: 74276 });
        }
      }, 900000);
    }
  }

  if (message.user.settings.topdon) {
    message.user.scar.gontime = Date.now() + 300000;

    setTimeout(() => {
      if (message.isChat) {
        vk.api.messages.send({
          chat_id: message.chatId,
          random_id: 0,
          message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
        });

        message.send({ sticker_id: 74276 });
      }

      if (!message.isChat) {
        vk.api.messages.send({
          user_id: message.user.id,
          random_id: 0,
          message: `🏎️ @id${message.user.id} (${message.user.tag}), погоняешь на своей тачке? 😎



▶️ Скорее пиши «Гонка» и начинай всех разносить на гонке! 🤯`,
        });

        message.send({ sticker_id: 74276 });
      }
    }, 300000);
  }

  let smileng = utils.pick([
    `🌷`,
    `🌸`,
    `🌹`,
    `🌺`,
    `🌼`,
    `💐`,
    `❤️`,
    `💓`,
    `💕`,
  ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

  if (m_sk === p_sk)
    setTimeout(() => {
      return message
        .send(
          `Ничья! 😟



▶️ Улучшайте свой автомобиль, чтобы стать быстрее! 🏁`,
          {
            attachment: utils.pick([
              `${cars[message.user.transport.car - 1].photo}, ${
                cars[s - 1].photo
              }`,
            ]),
          }
        )
        .catch(() => {
          console.log(` Ошибка.`);
        });
    }, 5000);

  if (m_sk > p_sk && cases === 1) {
    message.user.c4 += 1;

    message.user.gon += w_reit;

    message.user.balance += 7500000000;

    setTimeout(() => {
      return message
        .send(
          `😈 Выигрыш! Ваша машина оказалсь быстрее противника! 🚗



⚙️ Характеристики машин:
🚗 Ваш автомобиль: «${cars[message.user.transport.car - 1].name}» ${smileng}
🚘 Скорость: ${mymax_sk}км/ч

🚙 Автомобиль противника: «${cars[s - 1].name}»
🚘 Скорость: ${max_sk}км/ч
🎫 Госномер: ${rgn}
➖➖➖➖➖➖➖
🏁 Получено рейтинга: +${w_reit}
🏆 Ваш рейтинг: ${utils.sp(message.user.gon)} 🏆
💵 Выигрыш: +7.500.000.000$ 🤑
📦 Кейсы: +1 Гоночный кейс`,
          {
            attachment: utils.pick([
              `${cars[message.user.transport.car - 1].photo}`,
            ]),
          }
        )
        .catch(() => {
          console.log(` Ошибка.`);
        });
    }, 5000);
  }

  if (m_sk > p_sk) {
    message.user.gon += w_reit;

    message.user.balance += 7500000000;

    setTimeout(() => {
      return message
        .send(
          `😈 Выигрыш! Ваша машина оказалсь быстрее противника! 🚗

⚙️ Характеристики машин:
🚗 Ваш автомобиль: «${cars[message.user.transport.car - 1].name}» ${smileng}
🚘 Скорость: ${mymax_sk}км/ч

🚙 Автомобиль противника: «${cars[s - 1].name}»
🚘 Скорость: ${max_sk}км/ч
🎫 Госномер: ${rgn}
➖➖➖➖➖➖➖
🏁 Получено рейтинга: +${w_reit}
🏆 Ваш рейтинг: ${utils.sp(message.user.gon)} 🏆
💵 Выигрыш: +7.500.000.000$ 🤑`,
          {
            attachment: utils.pick([
              `${cars[message.user.transport.car - 1].photo}`,
            ]),
          }
        )
        .catch(() => {
          console.log(` Ошибка.`);
        });
    }, 5000);
  }

  if (m_sk < p_sk) {
    message.user.gon -= p_reit;

    setTimeout(() => {
      return message
        .send(
          `👿 Проигрыш! Ваша машина оказалсь медленее противника! 🚗

⚙️ Характеристики машин:
🚗 Ваш автомобиль: «${cars[message.user.transport.car - 1].name}» ${smileng}
🚘 Скорость: ${mymax_sk}км/ч

🚙 Автомобиль противника: «${cars[s - 1].name}»
🚘 Скорость: ${max_sk}км/ч
🎫 Госномер: ${rgn}
➖➖➖➖➖➖➖
🏁 Рейтинг гонщика: -${p_reit} 🏆
🏆 Ваш рейтинг: ${message.user.gon} 🏆

⚙ Улучшайте свой автомобиль, чтобы стать быстрее!`,
          { attachment: utils.pick([`${cars[s - 1].photo}`]) }
        )
        .catch(() => {
          console.log(` Ошибка.`);
        });
    }, 5000);
  }
});

oscrn(/^(?:топ гонщиков|🏎️ Топ гонщиков|)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({ gon: x.gon, tag: x.tag, id: x.id, mention: x.mention });
    });

  top.sort((a, b) => {
    return b.gon - a.gon;
  });

  let text = ``;

  const find = () => {
    let pos = 100;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return message.send(
        "👥 В боте должно зарегистрировано не менее 10 игроков!"
      );

    const user = top[i];

    text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 🏆${utils.sp(user.gon)}`;
  }

  return bot(
    `топ гонщиков:${text}
		➖➖➖➖➖➖➖➖
➡${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(message.user.gon)}`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

const balls = [
  {
    name: "Spalding",

    cost: 100000000000,

    id: 1,
  },

  {
    name: "Molten",

    cost: 25000000000000,

    id: 2,
  },

  {
    name: "Wilson",

    cost: 250000000000000,

    id: 3,
  },

  {
    name: "Rawlings",

    cost: 500000000000000,

    id: 4,
  },
];

oscrn(
  /^(?:Баскетбол мячи|🏀 Баскетбол мячи)\s?([0-9]+)?$/i,
  async (message, bot) => {
    if (!message.args[1])
      return bot(
        `Баскетбольные мячи:\n🏀1.Spalding - 100.000.000.000$\n🏀2.Molten - 25.000.000.000.000$\n🏀3.Wilson- 250.000.000.000.000$\n🏀4.Rawlings - 500.000.000.000.000$\n\n🏐 Для покупки введите «Баскетбол мячи [номер]»`,
        { attachment: "photo-197579361_457317832" }
      );
    else {
      const sell = balls.find((x) => x.id === Number(message.args[1]));

      if (message.args[1] < 1 || message.args[1] >= 5)
        return bot("Неверный номер мяча 🏐");

      if (!sell) return;

      if (message.user.ball)
        return bot(
          `У вас уже есть мяч (${
            balls[message.user.ball - 1].name
          })!\n🛒 Чтобы его продать, введите «Продать мяч»`
        );

      if (message.user.balance < sell.cost)
        return bot(
          `у Вас не хватает денег! 💵❌\n\n💰 Ваш баланс: ${utils.sp(
            message.user.balance
          )}$ 💚`
        );
      else if (message.user.balance >= sell.cost) {
        message.user.balance -= sell.cost;

        message.user.ball = sell.id;

        return bot(
          `Вы успешно купили «${sell.name}» за ${utils.sp(sell.cost)}$`
        );
      }
    }
  }
);

oscrn(/^(?:Баскетбол)$/i, async (message, bot) => {
  return bot(
    `Информация о баскетболе:\n ⛹️ 1. Баскетбол игра\n🏀 2. Баскетбол мячи`,
    {
      attachment: "photo-197579361_457317813",

      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "⛹️ Баскетбол игра",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏀 Баскетбол мячи",
              },

              color: "negative",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:Баскетбол игра|⛹️ Баскетбол игра)$/i, async (message, bot) => {
  if (message.user.ball > 0) {
    if (message.user.timers.gamebasket > Date.now())
      return bot(
        `снова поиграть будет можно через ${unixStampLefta(
          message.user.timers.gamebasket - Date.now()
        )} ⛹️`
      );

    message.user.timers.gamebasket = Date.now() + 900000;

    if (
      typeof message.user.questbasket === "number" &&
      message.user.questallfucker === true
    ) {
      message.user.questbasket++;

      if (message.user.questbasket >= 100) {
        message.user.questbasket = true;

        await bot(
          `Поздравляем, Вы 100 раз играли в баскетбол и получаете 📦 2 Донат-кейса.`
        );

        message.user.c3 += 2;
      }
    }

    if (message.user.ball === 1) {
      let multiply = utils.pick([0, 0, 0, 0, 1]);

      if (multiply === 0) {
        let phraza = utils.pick([
          "Ваша команда проиграла",
          "Вы упали с мячом и не смогли забить",
          "Вас выгнали с игры",
        ]);

        return bot(
          `турнир по баскетболу завершён!



⛹️ ➖  Итоги:

▶️ Исход: ${phraza} 😢

🏀 Покупайте более крутые мячи и выигрывайте! 🤗`,
          { attachment: `photo-197579361_457317836` }
        );
      }

      if (multiply === 1) {
        let rand = utils.random(1, 15);

        message.user.balance += rand * 1000000000000;

        return bot(
          `турнир по баскетболу завершен!



⛹️ ➖ Итоги:

▶️ Исход: Первое место 🙀

💵 +${utils.rn(rand * 1000000000000)}$



💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
          { attachment: `photo-197579361_457317837` }
        );
      }
    }

    if (message.user.ball === 2) {
      let multiply = utils.pick([0, 0, 0, 1]);

      if (multiply === 0) {
        let phraza = utils.pick([
          "Ваша команда проиграла",
          "Вы упали с мячом и не смогли забить",
          "Вас выгнали с игры",
        ]);

        return bot(
          `турнир по баскетболу завершён!



⛹️ ➖  Итоги:

▶️ Исход: ${phraza} 😢

🏀 Покупайте более крутые мячи и выигрывайте! 🤗`,
          { attachment: `photo-197579361_457317836` }
        );
      }

      if (multiply === 1) {
        let rand = utils.random(1, 15);

        message.user.balance += rand * 1000000000000;

        return bot(
          `турнир по баскетболу завершен!



⛹️ ➖ Итоги:

▶️ Исход: Первое место 🙀

💵 +${utils.rn(rand * 1000000000000)}$



💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
          { attachment: `photo-197579361_457317837` }
        );
      }
    }

    if (message.user.ball === 3) {
      let multiply = utils.pick([0, 0, 1]);

      if (multiply === 0) {
        let phraza = utils.pick([
          "Ваша команда проиграла",
          "Вы упали с мячом и не смогли забить",
          "Вас выгнали с игры",
        ]);

        return bot(
          `турнир по баскетболу завершён!



⛹️ ➖  Итоги:

▶️ Исход: ${phraza} 😢

🏀 Покупайте более крутые мячи и выигрывайте! 🤗`,
          { attachment: `photo-197579361_457317836` }
        );
      }

      if (multiply === 1) {
        let rand = utils.random(1, 15);

        message.user.balance += rand * 1000000000000;

        return bot(
          `турнир по баскетболу завершен!



⛹️ ➖ Итоги:

▶️ Исход: Первое место 🙀

💵 +${utils.rn(rand * 1000000000000)}$



💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
          { attachment: `photo-197579361_457317837` }
        );
      }
    }

    if (message.user.ball === 4) {
      let multiply = utils.pick([0, 1]);

      if (multiply === 0) {
        let phraza = utils.pick([
          "Ваша команда проиграла",
          "Вы упали с мячом и не смогли забить",
          "Вас выгнали с игры",
        ]);

        return bot(
          `турнир по баскетболу завершён!



⛹️ ➖  Итоги:

▶️ Исход: ${phraza} 😢`,
          { attachment: `photo-197579361_457317837` }
        );
      }

      if (multiply === 1) {
        let rand = utils.random(1, 15);

        message.user.balance += rand * 1000000000000;

        return bot(
          `турнир по баскетболу завершен!



⛹️ ➖ Итоги:

▶️ Исход: Первое место 🙀

💵 +${utils.rn(rand * 1000000000000)}$



💰 Ваш баланс: ${utils.sp(message.user.balance)}$`,
          { attachment: `photo-197579361_457317837` }
        );
      }
    }
  }

  return bot(
    `у Вас нет баскетбольного мяча! 🏀❌\n\n▶️ Просмотреть список продаваемых мячей: «Баскетбол мячи» 🛒`
  );
});

oscrn(/^(?:топ работа)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.bantop === false)
    .map((x) => {
      top.push({ level: x.level, tag: x.tag, id: x.id, mention: x.mention });
    });

  top.sort((a, b) => {
    return b.level - a.level;
  });

  let text = ``;

  const find = () => {
    let pos = 100;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return message.send(
        " В боте должно зарегистрировано не менее 10 игроков!"
      );

    const user = top[i];

    text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 🏆${utils.sp(user.level)}lvl`;
  }

  return bot(`топ работников:${text}
		➖➖➖➖➖➖➖➖
➡${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(
    message.user.level
  )} lvl`);
});

oscrn(/^(?:топ ответы)$/i, async (message, bot) => {
  if (
    message.user.settings.adm < 1 &&
    message.user.stock.status !== "🔥Support🔥"
  )
    return;

  let top = [];

  users
    .filter((x) => x.settings.adm >= 1 || x.stock.status === "🔥Support🔥")
    .map((x) => {
      top.push({
        reports: x.astats.reports,
        tag: x.tag,
        id: x.id,
        mention: x.mention,
      });
    });

  top.sort((a, b) => {
    return b.reports - a.reports;
  });

  let text = ``;

  const find = () => {
    let pos = 100;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return message.send(
        "👥 В боте должно зарегистрировано не менее 10 игроков!"
      );

    const user = top[i];

    text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — 🏆${utils.sp(user.reports)} ответов`;
  }

  return bot(`топ ответов:${text}
		➖➖➖➖➖➖➖➖
➡${utils.gi(find() + 1)} ${message.user.tag} — 🏆${utils.sp(
    message.user.astats.reports
  )} ответов`);
});

oscrn(/^(?:unblocktop)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный [ID] игрока`);

  if (user.bantop !== true) return message.send(`у этого игрока нет бан топа.`);

  user.bantop = false;

  user.stock.bantop = "Нет";

  await bot(`вы сняли бан топ у игрока ${user.tag}`);

  await vk.api.messages.send({
    user_id: user.id,
    message: `Вам сняли блокировку топа. ✅`,
    random_id: 0,
  });
});

oscrn(/^(?:blocktop)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 5) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный [ID] игрока`);

  if (user.bantop !== false)
    return message.send(`у этого игрока уже имеется бан топа`);

  user.bantop = true;

  user.stock.bantop = "Да";

  await bot(`вы запретили игроку ${user.tag} появляться в топе.`);

  await vk.api.messages.send({
    user_id: user.id,
    message: `Вам выдали блокировку топа. ✅`,
    random_id: 0,
  });
});

oscrn(/^(?:〽️ Администраторы)$/i, async (message) => {
  if (message.user.settings.adm < 2) return;

  let moder;

  let t = 0;

  moder = "\n⬇️ Администраторы\n";

  users
    .filter((x) => x.settings.adm === 2)
    .map((x) => {
      t = t + 1;

      moder += `» @id${x.id}(${x.tag}) [ID: ${x.uid}]\n`;
    });

  let text = `\n`;

  if (moder.length !== 48) text += moder;

  return message.send(`▶️ ➖ Состав администраторов. (всего: ${t}): ${text}`);
});

oscrn(/^(?:♻️ Модераторы)$/i, async (message) => {
  if (message.user.settings.adm < 2) return;

  let moder;

  let t = 0;

  moder = "\n⬇️ Модераторы\n";

  users
    .filter((x) => x.settings.adm === 1)
    .map((x) => {
      t = t + 1;

      moder += `» @id${x.id}(${x.tag}) [ID: ${x.uid}]\n`;
    });

  let text = `\n`;

  if (moder.length !== 48) text += moder;

  return message.send(`▶️ ➖ Состав модераторов (всего: ${t}): ${text}`);
});

oscrn(/^(?:🚨 Агенты поддержки|агенты|🚨 Агенты)$/i, async (message) => {
  if (message.user.settings.agent === undefined) {
    message.user.settings.agent = false;
  }

  if (message.user.settings.agent < 1) return;

  let stmoder;

  let t = 0;

  moder = "\n🚨 Агенты поддержки\n";

  stmoder = "\n⚠️ Главные агенты поддержки\n";

  users
    .filter((x) => x.settings.agent === 2)
    .map((x) => {
      t = t + 1;

      stmoder += `» @id${x.id}(${x.tag})[ID: ${x.uid}]\n`;
    });

  users
    .filter((x) => x.settings.agent === 1)
    .map((x) => {
      t = t + 1;

      moder += `» @id${x.id}(${x.tag})[ID: ${x.uid}]\n`;
    });

  let text = `\n`;

  if (stmoder.length !== 48) text += stmoder;

  if (moder.length !== 48) text += moder;

  return message.send(`▶️ ➖ Состав агентов поддержки (всего: ${t}): ${text}`);
});

oscrn(/^(?:📛 Главные администраторы)$/i, async (message) => {
  if (message.user.settings.adm < 2) return;

  let osn, zam, ga;

  osn = "\n🤗 Основатель\n";

  zam = "\n😎 Заместитель основателя\n";

  ga = "\n🔱 Главный администратор\n";

  users
    .filter((x) => x.settings.adm > 2)
    .map((x) => {
      if (x.settings.adm === 5)
        osn += `» @id${x.id}(${x.tag}) [ID: ${x.uid}]\n`;

      if (x.settings.adm === 4)
        zam += `» @id${x.id}(${x.tag}) [ID: ${x.uid}]\n`;

      if (x.settings.adm === 3) ga += `» @id${x.id}(${x.tag}) [ID: ${x.uid}]\n`;
    });

  let text = `\n`;

  if (osn.length !== 48) text += osn;

  if (zam.length !== 48) text += zam;

  if (ga.length !== 48) text += ga;

  return message.send(`▶️ ➖ Состав старшей администрации: ${text}`);
});

oscrn(/^(?:состав)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  bot(
    `Выберите раздел:`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "📛 Главные администраторы",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Администраторы",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "♻️ Модераторы",
              },

              color: "positive",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🚨 Агенты",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:фортуна|🎡 Фортуна)$/i, async (message, bot) => {
  return bot(
    `выберите определённый номер фортуны:

1️⃣ Денежная фортуна
2️⃣ Донатная фортуна
3️⃣ Билетная фортуна

♻️ Чтобы перейти к определённой фортуне, напишите «фортуна [номер]» или нажмите кнопку ниже.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🎡💵 Денежная фортуна",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🎡🔥 Донатная фортуна",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🎡🎫 Билетная фортуна",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:🎡💵 Денежная фортуна|денежная фортуна)$/i, async (message, bot) => {
  return bot(`В разработке 🙃`);
});

oscrn(/^(?:🎡🔥 Донатная фортуна|донатная фортуна)$/i, async (message, bot) => {
  return bot(`В разработке 🙃`);
});

oscrn(
  /^(?:🎡🎫 Билетная фортуна|бил фортуна|билетная фортуна)$/i,
  async (message, bot) => {
    return bot(
      `Информация о «Билетной фортуне»: ❄️

♻️ ➖ Призы:
1️⃣ Элитные посылки
2️⃣ Сертификат на бизнес «Киностудия по всему миру»
3⃣ Донат кейсы
4⃣ Сертификат на госномер
5⃣ Сертификат на Ламборгини
6⃣ VIP Статус

🔹 Стоимость прокрута: 10 билетов 🎫

▶️ Прокрутить фортуну: «Фортуна 1 крутить»`,
      { attachment: `photo-211261524_457239021` }
    );
  }
);

oscrn(/^(?:фортуна 1 крутить)$/i, async (message, bot) => {
  let prize = utils.random(1, 6);

  if (message.user.bilet < 10)
    return bot(`недостаточно билетов для прокрута Билетной Фортуны! 🎡❌`);

  let randsmile = utils.pick(["😸", "🙃", "😃", "😁"]);

  if (prize === 1) {
    let randpos = utils.random(1, 3);

    message.user.bilet -= 10;

    message.user.possilka2 += randpos;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпало элитная(-ые) посылку(-и) (Х${randpos}) 📦! ${randsmile}`,
      { attachment: `photo-211261524_457239022` }
    );
  }

  if (prize === 2) {
    message.user.bilet -= 10;

    message.user.sertificats.business += 1;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпал сертификат на бизнес «🎥 Киностудия по всему миру»! ${randsmile}`,
      { attachment: `photo-211261524_457239023` }
    );
  }

  if (prize === 3) {
    let valuta = utils.random(1, 2);

    message.user.bilet -= 10;

    message.user.c3 += valuta;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпало донат-кейс(-ы, -ов) (Х${valuta}) 📦! ${randsmile}`,
      { attachment: `photo-211261524_457239027` }
    );
  }

  if (prize === 4) {
    message.user.bilet -= 10;

    message.user.sertificats.gosnomer += 1;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпал сертификат на гос. номер 🎫! ${randsmile}`,
      { attachment: `photo-211261524_457239024` }
    );
  }

  if (prize === 5) {
    message.user.bilet -= 10;

    message.user.sertificats.car += 1;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпал сертификат на машину «Ламборгини» 🚗! ${randsmile}`,
      { attachment: `photo-211261524_457239025` }
    );
  }

  if (prize === 6) {
    message.user.bilet -= 10;

    if (message.user.settings.vip !== false) {
      message.user.bilet += 10;

      return message.send(
        `🎡 @id${message.user.id} (${message.user.tag}), вам выпал «VIP» статус! 😲\n▶️ Вы уже имеете статус «VIP», выдана компенсация в виде возврата 10-ти билетов 🎫 {randsmile}`,
        { attachment: `photo-211261524_457239026` }
      );
    }

    if (
      message.user.settings.premium !== false ||
      message.user.settings.titan !== false
    ) {
      message.user.settings.vip = true;

      return bot("Вы выиграли VIP статус!💡");
    }

    message.user.settings.vip = true;

    message.user.stock.status = "VIP";

    message.user.limit.nicklimit = 21;

    message.user.level += 5;

    message.user.limit.banklimit = 100000000000000;

    message.user.limit.farmlimit = 3000;

    message.user.limit.videocardlimit = 50;

    message.user.limit.playerlimit = 100000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 20;

    return message.send(
      `🎡 @id${message.user.id} (${message.user.tag}), вам выпал «VIP» Статус! 😲\n🔥 Для ознакомления с командами введите «VIP help» ${randsmile}`,
      { attachment: `photo-211261524_457239026` }
    );
  }
});
oscrn(/^(?:Сертификаты)$/i, async (message) => {
  let text = ``;
  text +=
    `1&#8419; Сертификат на ГОСНОМЕР: ` +
    (message.user.sertificats.gosnomer === 0
      ? `[Нет]`
      : `[${message.user.sertificats.gosnomer}]`) +
    `\n`;

  text +=
    `2&#8419; Сертификат на ЛАМБОРГИНИ: ` +
    (message.user.sertificats.car === 0
      ? `[Нет]`
      : `[${message.user.sertificats.car}]`) +
    `\n`;

  text +=
    `3&#8419; Сертификат на РЕЙТИНГ: ` +
    (message.user.sertificats.rating === 0
      ? `[Нет]`
      : `[${message.user.sertificats.rating}]`) +
    `\n`;

  text +=
    `4&#8419; Сертификат на PREMIUM Статус: ` +
    (message.user.sertificats.premium === 0
      ? `[Нет]`
      : `[${message.user.sertificats.premium}]`) +
    `\n`;

  text +=
    `5&#8419; Сертификат на СЕКРЕТНЫЙ БИЗНЕС: ` +
    (message.user.sertificats.business === 0
      ? `[Нет]`
      : `[${message.user.sertificats.business}]`) +
    `\n`;

  text +=
    `6&#8419; Сертификат на VIP Статус: ` +
    (message.user.sertificats.vip === 0
      ? `[Нет]`
      : `[${message.user.sertificats.vip}]`) +
    `\n`;

  text +=
    `7&#8419; Сертификат на ОПЫТ: ` +
    (message.user.sertificats.opit === 0
      ? `[Нет]`
      : `[${message.user.sertificats.opit}]`) +
    `\n`;
  text += `❓ Для активации введите «Сертификат [номер]»\n\n`;
  text += `▶️ Есть возможность продать сертификаты.\n♻️ Подробнее: «Сертификаты инфо»\n`;

  text += ``;

  return message.send(`📋 Ваши сертификаты:\n\n${text}`);
});

oscrn(/^(?:Сертификаты инфо)$/i, async (message, bot) => {
  return bot(`информация о продаже сертификатов ❄️

1&#8419; Сертификат на ГОСНОМЕР - 15 билетов 🎡🎫
2&#8419; Сертификат на ЛАМБОРГИНИ - 2 денежные посылки 💵📦
3&#8419; Сертификат на СЕКРЕТНЫЙ БИЗНЕС - 1.000 ЧакоРуб 💰
4&#8419; Сертификат на PREMIUM Статус - 250 SpringCoins ☣️
5&#8419; Сертификат на VIP Статус - 100 SpringCoins ☣️

❓ Для продажи введите «Сертификат продать [номер]» ☃️`);
});

oscrn(/^(?:Сертификат продать)\s?([12345])$/i, async (message, bot) => {
  if (message.args[1] === "1") {
    if (message.user.sertificats.gosnomer < 1)
      return bot("у вас отсуствует данный сертификат.");

    message.user.sertificats.gosnomer -= 1;

    message.user.bilet += 15;

    return bot(`Сертификат на госномер успешно продан!\n🎡 +15 билетов 🎫`);
  }

  if (message.args[1] === "2") {
    if (message.user.sertificats.car < 1)
      return bot("у вас отсуствует данный сертификат.");

    message.user.sertificats.car -= 1;

    message.user.possilka1 += 2;

    return bot(
      `Сертификат на ламборгини успешно продан!\n📦 +2 денежные посылки 💵`
    );
  }

  if (message.args[1] === "3") {
    if (message.user.sertificats.business < 1)
      return bot("у вас отсуствует данный сертификат.");

    message.user.sertificats.business -= 1;

    message.user.rub += 1000;

    return bot(
      `Сертификат на бизнес «Киностудия по всему миру» успешно продан!\n+1000 ЧакоРуб 💰`
    );
  }

  if (message.args[1] === "4") {
    if (message.user.sertificats.premium < 1)
      return bot("у вас отсуствует данный сертификат.");

    message.user.sertificats.premium -= 1;

    message.user.sprcoin += 250;

    return bot(
      `Сертификат на «PREMIUM» статус успешно продан!\n+250 SpringCoins ☣️`
    );
  }

  if (message.args[1] === "5") {
    if (message.user.sertificats.vip < 1)
      return bot("у вас отсуствует данный сертификат.");

    message.user.sertificats.vip -= 1;

    message.user.sprcoin += 100;

    return bot(
      `Сертификат на «VIP» статус успешно продан!\n+100 SpringCoins ☣️`
    );
  }
});

oscrn(/^(?:6⃣ VIP Статус|Сертификат 6)$/i, async (message, bot) => {
  if (message.user.sertificats.vip < 1)
    return bot("у вас отсуствует данный сертификат.");

  if (message.user.settings.vip !== false)
    return bot(`Вы уже являетесь «VIP» игроком! 👑`);

  if (message.user.settings.premium || message.user.settings.titan) {
    message.user.settings.vip = true;

    message.user.sertificats.vip -= 1;

    return message.send(
      `☃️ @id${message.user.id} (${message.user.tag}), сертификат активирован!\n\nПросмотреть список команд для VIP'а: «VIP help»`
    );
  }

  const date = new Date();

  message.user.sertificats.vip -= 1;

  message.user.settings.vip = true;

  message.user.stock.status = "VIP";

  message.user.limit.nicklimit = 21;

  message.user.level += 5;

  message.user.limit.banklimit = 100000000000000;

  message.user.limit.farmlimit = 3000;

  message.user.limit.videocardlimit = 50;

  message.user.limit.playerlimit = 100000000000000;

  message.user.limit.sent = 0;

  message.user.maxenergy = 20;

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: VIP статус

♻️ Просмотреть список команд для VIP игрока: «VIP help»

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

oscrn(
  /^(?:госномер)\s([а-я])([0-9])([0-9])([0-9])([а-я])([а-я])$/i,
  async (message, bot) => {
    if (!message.user.transport.car) return bot(`у вас нет машины`);

    if (message.user.settings.adm > 0)
      return bot(
        `Администрации бота запрещено использовать данный сертификат!`
      );

    let res = `${message.args[1]}${message.args[2]}${message.args[3]}${message.args[4]}${message.args[5]}${message.args[6]} 777`;

    let text = res.toLowerCase();

    if (res === "А777АХ") return;

    const b =
      /(й|ц|г|ш|щ|з|ъ|ф|ы|п|л|д|ж|э|я|ч|и|ь|б|ю|q|w|e|r|t|y|u|i|o|p|a|s|d|f|g|h|j|k|l|z|x|c|v|b|n|m:)/;

    if (b.test(text) === true)
      return bot(`некорректный номер!



✅Напишите номер по шаблону, например: «A123BC», используя только русские буквы.



➕ Примеры: А777АА, А123МР, Р777РР и др.

🔤 Список разрешенных букв: А, В, Е, К, М, Н, О, Р, С, Т, У, Х`);

    if (message.user.sertificats.gosnomer < 1)
      return bot("у вас отсуствует данный сертификат.");

    const date = new Date();

    let user = users.find((x) => x.scar.gosnomer === res);

    if (user)
      return bot(`номер «${res}» уже занят игроком @id${user.id} (${user.tag}) ❌



▶️ Укажите другой номер.`);

    message.user.scar.gosnomer = res;

    message.user.sertificats.gosnomer -= 1;

    return message.send(`☃️ @id${message.user.id} (${
      message.user.tag
    }), сертификат успешно активирован! ❄️



▶️ Выигрыш: Госномер на автомобиль [${res}]

♻️ Госномер уже на Вашем автомобиле!

⏰ Дата активации: ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`);
  }
);

oscrn(/^(?:1⃣ Госномер|Сертификат 1)$/i, async (message, bot) => {
  if (message.user.sertificats.gosnomer < 1)
    return bot("у вас отсуствует данный сертификат.");

  return message.send(
    `⚠️ Используйте «Госномер [номер]»\n♻️ Например: «Госномер М777ММ».`
  );
});

oscrn(/^(?:4⃣ Premium Статус|Сертификат 4)$/i, async (message, bot) => {
  if (message.user.sertificats.premium < 1)
    return bot("у вас отсуствует данный сертификат.");

  if (message.user.settings.premium !== false)
    return message.send("💡 вы уже являетесь PREMIUM");

  if (message.user.settings.titan) {
    message.user.sertificats.premium -= 1;

    message.user.settings.premium = true;

    return bot(`Сертификат успешно активирован!`);
  }

  const date = new Date();

  message.user.sertificats.premium -= 1;

  message.user.settings.premium = true;

  message.user.stock.status = "Premium";

  message.user.limit.nicklimit = 32;

  message.user.level += 35;

  message.user.opit += 5000;

  message.user.limit.banklimit = 200000000000000;

  message.user.limit.farmlimit = 5000;

  message.user.limit.playerlimit = 200000000000000;

  message.user.limit.sent = 0;

  message.user.maxenergy = 30;

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: PREMIUM статус

♻️ Просмотреть список команд для PREMIUM игрока: «PREMIUM help»

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

oscrn(/^(?:7⃣ Опыт|Сертификат 7)$/i, async (message, bot) => {
  if (message.user.sertificats.opit < 1)
    return bot("у вас отсуствует данный сертификат.");

  const date = new Date();

  message.user.sertificats.opit -= 1;

  message.user.opit += 5000;

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: 5.000 опыта 📈

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

oscrn(/^(?:курс)$/i, async (message, bot) => {
  return bot(
    `выберите тип, который Вам нужен:`,

    {
      attachment: `photo-197613406_457258235`,

      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "callback",

                payload: { type: "btc" },

                label: "🌐 BTC",
              },

              color: "default",
            },

            {
              action: {
                type: "callback",

                payload: { type: "dog" },

                label: "🪙 DOG",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "callback",

                payload: { type: "what" },

                label: "🛍️ Почему такой курс?",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

vk.updates.on("message_event", async (message) => {
  const user = users.filter((x) => x.id === message.userId)[0];
  let playUserId = message.userId;
  if (!user) {
    console.log(`Не удалось найти пользователя в БД`);
    return;
  }

  if (
    user.bans.ban &&
    !/^репорт/i.test(message.text) &&
    !/^unbanme/i.test(message.text)
  )
    return;

  // if(message.eventPayload.type == "5") return vk.api.messages.sendMessageEventAnswer({ event_id: message.eventId, peer_id: message.peerId, user_id: message.userId, event_data: '{"type":"show_snackbar","text":"' + `тест`+ '"}' })

  if (message.eventPayload.type === "btc") {
    let mid = message.conversationMessageId;

    await vk.api.messages.edit({
      peer_id: message.peerId,
      conversation_message_id: mid,
      message: `🌐 Курс BTC на данный момент: ${utils.sp(btc)}$`, // Редактируем сообщение на котором была нажата кнопка
      keyboard: JSON.stringify({
        buttons: [
          [
            {
              action: {
                type: "callback",
                label: `◀`,
                payload: {
                  type: "show_snackbar",
                  play_ball: `nazadkyrs`,
                  useId: playUserId,
                },
              },
            },
          ],
        ],
        inline: true,
      }),
    });
  }
  if (message.eventPayload.type === "nazadkyrs") {
    let mid = message.conversationMessageId;

    await vk.api.messages.edit({
      peer_id: message.peerId,
      conversation_message_id: mid,
      message: `${
        user.mention ? `@id${user.id}(${user.tag})` : `${user.tag}`
      }, выберите тип, который Вам нужен:`, // Редактируем сообщение на котором была нажата кнопка
      keyboard: JSON.stringify({
        attachment: "photo-197613406_457258235",
        buttons: [
          [
            {
              action: {
                type: "callback",
                label: `🌐 BTC`,
                payload: {
                  type: "show_snackbar",
                  play_ball: `btc`,
                  useId: playUserId,
                },
              },
            },
            {
              action: {
                type: "callback",
                label: `🪙 `,
                payload: {
                  type: "show_snackbar",
                  play_ball: `dog`,
                  useId: playUserId,
                },
              },
            },
          ],
          [
            {
              action: {
                type: "callback",
                label: `🛍️ Почему такой курс?`,
                payload: {
                  type: "show_snackbar",
                  play_ball: `what`,
                  useId: playUserId,
                },
              },
            },
          ],
        ],
        inline: true,
      }),
    });
  }
  if (message.eventPayload.type === "dog") {
    let mid = message.conversationMessageId;

    await vk.api.messages.edit({
      peer_id: message.peerId,
      conversation_message_id: mid,
      message: `🪙 Курс DogeCoin на данный момент: ${utils.sp(dog)}$`, // Редактируем сообщение на котором была нажата кнопка
      keyboard: JSON.stringify({
        buttons: [
          [
            {
              action: {
                type: "callback",
                label: `◀`,
                payload: {
                  type: "show_snackbar",
                  play_ball: `nazadkyrs`,
                  useId: playUserId,
                },
              },
            },
          ],
        ],
        inline: true,
      }),
    });
  }

  if (message.eventPayload.type === "what") {
    let mid = message.conversationMessageId;

    await vk.api.messages.send({
      peer_id: message.peerId,
      random_id: 0,
      conversation_message_id: mid,
      message: `📈 Изменения в курсе зависят не от нас, а от изменений на оф. сайте криптовалюты.

⤵️ Если курс падает или повышается, это делается не нами.`, // Редактируем сообщение на котором была нажата кнопка
      keyboard: JSON.stringify({
        buttons: [
          [
            {
              action: {
                type: "callback",
                label: `◀`,
                payload: {
                  type: "show_snackbar",
                  play_ball: `nazadkyrs`,
                  useId: playUserId,
                },
              },
            },
          ],
        ],
        inline: true,
      }),
    });
  }
});

oscrn(/^(?:5⃣ Секретный бизнес|Сертификат 5)$/i, async (message, bot) => {
  if (message.user.sertificats.business < 1)
    return bot("у вас отсуствует данный сертификат.");

  const date = new Date();

  if (message.user.business.length >= 3) return bot(`у вас уже есть 3 бизнеса`);

  message.user.sertificats.business -= 1;

  message.user.business.push({
    id: 13,

    upgrade: 1,

    workers: 7500,

    moneys: 300000000000,
  });

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: Бизнес «Киностудия по всему миру»

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

oscrn(/^(?:3⃣ Рейтинг|Сертификат 3)$/i, async (message, bot) => {
  if (message.user.sertificats.rating < 1)
    return bot("у вас отсуствует данный сертификат.");

  const date = new Date();

  message.user.sertificats.rating -= 1;

  message.user.rating += 1000000;

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: 1.000.000 рейтинга 👑

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

oscrn(/^(?:2⃣ Лучшая машина|Сертификат 2)$/i, async (message, bot) => {
  if (message.user.sertificats.car < 1)
    return bot("у вас отсуствует данный сертификат.");

  const date = new Date();

  message.user.sertificats.car -= 1;

  message.user.transport.car = 16;

  message.user.scar.prok_1 = 3;

  message.user.scar.prok_2 = 5;

  message.user.scar.prok_3 = 5;

  message.user.scar.prok_4 = 3;

  message.user.scar.prok_5 = 5;

  return message.send(`☃️ @id${message.user.id} (${
    message.user.tag
  }), сертификат успешно активирован! ❄️



▶️ Выигрыш: автомобиль Lamborghini Aventador SVJ. (Улучшенная) 🚗

⏰ Дата активации: ${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`);
});

// Команды босса

oscrn(/^(?:😈 Босс|босс)$/i, async (message, bot) => {
  if (message.user.sataka >= 700 && message.user.questbosspower === false) {
    await bot(
      `Ваша сила больше 700, вы получаете бонус за свою силу в виде 250трлн$`
    );

    message.user.balance += 250000000000000;

    message.user.questbosspower = true;
  }

  utils.pick([`🌷`, `🌸`, `🌹`, `🌺`, `🌼`, `💐`, `❤️`, `💓`, `💕`]); //utils.pick([`🎅`, `☃️`, `❄️`, `🎄`]);

  return bot(
    `босс «${bossinfo.boss_name}» ❄️

💚 Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)}
🗡️ Нанесено урона: ${utils.sp(message.user.bossyr)} ед.
💪 Ваша сила: ${utils.sp(message.user.sataka)}
➖➖➖➖➖➖➖
♻️ Увеличить силу удара: «босс сила [кол-во]»
▶️ Стоимость: ${utils.sp(50000000000 * message.user.sataka)}$ 💵
👊 Ударить босса: «босс атака [кол-во]»

🔝 ТОП игроков по урону: «босс топ»`,

    {
      attachment: `${bossinfo.photo}`,

      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👊 Босс сила",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "⚔ Атака",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:босс сила)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm >= 1)
    return bot(
      `Любимой администрации запрещено повышать силу в целях защиты нашего босса 💚`
    );

  //return bot(`В данный момент функция недоступна`);

  //if(Number(Number(message.user.sataka) + Number(message.args[1])) >=1499) return bot( `превышен лимит прокачки силы.💯 - test ${Number(Number(message.user.sataka) + Number(message.args[1]))}`);

  let one = Number(
    ((50000000000 + 50000000000 * (message.user.sataka - 1)) *
      message.user.sataka) /
      2
  );

  let two = Number(
    ((50000000000 +
      50000000000 * (message.user.sataka + Number(message.args[1]) - 1)) *
      (message.user.sataka + Number(message.args[1]))) /
      2
  );

  let three = Number(Number(two) - Number(one));

  if (message.user.balance < Number(three)) return bot("недостаточно денег.");

  message.user.sataka += Number(message.args[1]);

  message.user.balance -= Number(three);

  if (message.user.sataka >= 700 && message.user.questbosspower === false) {
    await bot(
      `Ваша сила больше 700, вы получаете бонус за свою силу в виде 250трлн$`
    );

    message.user.balance += 250000000000000;

    message.user.questbosspower = true;
  }

  return bot(
    `сила Вашей атаки была повышена на ${utils.sp(
      message.args[1]
    )} ед. за ${utils.sp(three)}$ 💵👊
💰 Баланс: ${utils.sp(message.user.balance)}$`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👊 Босс сила",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});

//кнопка

oscrn(/^(?:босс атака)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm >= 1)
    return bot(
      `Любимой администрации запрещено повышать силу в целях защиты нашего босса 💚`
    );

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 3) {
        if (message.user.energy < message.args[1]) {
          message.send({
            sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
          });

          return bot(
            `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
          );
        }
      } else {
        if (message.user.energy < 2 * message.args[1]) {
          message.send({
            sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
          });

          return bot(
            `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
          );
        }
      }
    }
  } else {
    if (message.user.energy < 2 * message.args[1]) {
      message.send({
        sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
      });

      return bot(
        `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
      );
    }
  }

  let mn;

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuepeoplelvl >= 4) {
        mn = 1.25;
      } else {
        mn = 1;
      }
    }
  } else {
    mn = 1;
  }

  if (message.user.bmn >= 350 && message.user.bmn1 === false) {
    message.user.bmn1 = true;

    await message.send(`Вы получили новое звание!
▶️ Посмотреть можно в профиле «Профиль → Звания» ✅`);
  }

  if (message.user.bmn1 === true) {
    let pl = 2;
    mn += pl;
  }

  if (bossinfo.boss < 1)
    return bot(`босс мертв, следите за новостями в группе. 👊`);

  if (typeof message.user.questdamagedealer === "number") {
    message.user.questdamagedealer += Math.floor(
      Math.round(message.user.sataka * message.args[1] * mn)
    );

    if (message.user.questdamagedealer >= 250000) {
      message.user.questdamagedealer = true;

      await bot(
        `Поздравляем, Вы нанесли боссу 250.000 урона и с почетом получаете 5О.ООО.ООО.ООО.ООО$`
      );

      message.user.balance += 50000000000000;
    }
  }

  if (
    typeof message.user.questdamagedealer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questdamagedealer2 += Math.floor(
      Math.round(message.user.sataka * message.args[1] * mn)
    );

    if (message.user.questdamagedealer2 >= 1000000) {
      message.user.questdamagedealer2 = true;

      await bot(
        `Поздравляем, Вы нанесли боссу 1.000.000 урона и с почетом получаете 1ОО.ООО.ООО.ООО.ООО$`
      );

      message.user.balance += 100000000000000;
    }
  }

  message.user.bossyr += Math.floor(
    Math.round(message.user.sataka * message.args[1] * mn)
  );

  bossinfo.boss -= Math.floor(
    Math.round(message.user.sataka * message.args[1] * mn)
  );

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 3) {
        message.user.energy -= message.args[1];
      } else {
        message.user.energy -= 2 * message.args[1];
      }
    }
  } else {
    message.user.energy -= 2 * message.args[1];
  }

  if (message.user.energy > 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * message.args[1] * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия: ${message.user.energy} ед.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "positive",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.user.energy === 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * message.args[1] * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия: ${message.user.energy} ед.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "positive",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.user.energy < 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * message.args[1] * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия кончилась! ⛔`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "negative",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(/^(?:босс атака|⚔ Атака)$/i, async (message, bot) => {
  if (message.user.settings.adm >= 1)
    return bot(
      `Любимой администрации запрещено атаковать в целях защиты нашего босса 💚`
    );

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 3) {
        if (message.user.energy < 1) {
          message.send({
            sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
          });

          return bot(
            `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
          );
        }
      } else {
        if (message.user.energy < 2) {
          message.send({
            sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
          });

          return bot(
            `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
          );
        }
      }
    }
  } else {
    if (message.user.energy < 2) {
      message.send({
        sticker_id: utils.pick([74276, 74276, 74276, 74276, 74276, 74276]),
      });

      return bot(
        `у Вас закончилась энергия! 🔋🤒\n\n💤 Энергия восстанавливается каждые 5 минут.`
      );
    }
  }

  let mn;

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuepeoplelvl >= 4) {
        mn = 1.25;
      } else {
        mn = 1;
      }
    }
  } else {
    mn = 1;
  }

  if (bossinfo.boss < 1)
    return bot(`босс мёртв! ❌\n♻️ Следите за новостями в группе! 🙂`);

  if (typeof message.user.questdamagedealer === "number") {
    message.user.questdamagedealer += message.user.sataka;

    if (message.user.questdamagedealer >= 250000) {
      message.user.questdamagedealer = true;

      await bot(
        `поздравляем, вы нанесли боссу 250.000 урона и с почетом получаете 50трлн$ :3`
      );

      message.user.balance += 50000000000000;
    }
  }

  if (
    typeof message.user.questdamagedealer2 === "number" &&
    message.user.questallfucker === true
  ) {
    message.user.questdamagedealer2 += message.user.sataka;

    if (message.user.questdamagedealer2 >= 1000000) {
      message.user.questdamagedealer2 = true;

      await bot(
        `поздравляем, вы нанесли боссу 1.000.000 урона и с почетом получаете 100трлн$ :3`
      );

      message.user.balance += 100000000000000;
    }
  }

  message.user.bossyr += Math.floor(Math.round(message.user.sataka * mn));

  bossinfo.boss -= Math.floor(Math.round(message.user.sataka * mn));

  if (message.isChat) {
    if (chats[message.chatId]) {
      if (chats[message.chatId].statuemsglvl >= 3) {
        message.user.energy -= 1;
      } else {
        message.user.energy -= 2;
      }
    }
  } else {
    message.user.energy -= 2;
  }

  if (message.user.energy > 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия: ${message.user.energy} ед.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "positive",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.user.energy === 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия: ${message.user.energy} ед.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "positive",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }

  if (message.user.energy < 2) {
    return bot(
      `вы нанесли боссу ${utils.sp(
        Math.floor(Math.round(message.user.sataka * mn))
      )} урона! 👊🗡️
❤ Жизни босса: ${utils.sp(bossinfo.boss)} из ${utils.sp(bossinfo.boss_max)} 💚
⚡ Ваша энергия кончилась! ⛔`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Атака",
                },

                color: "negative",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "😈 Босс топ",
                },

                color: "secondary",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(/^(?:босс сила|👊 Босс сила)$/i, async (message, bot) => {
  if (message.user.settings.adm >= 1)
    return bot(
      `Любимой администрации запрещено повышать силу в целях защиты нашего босса 💚`
    );

  if (message.user.sataka >= 5000)
    return bot(`Ваша сила уже максимально прокачана! 💪🔝`);
  if (message.user.balance < 50000000000 * message.user.sataka)
    return bot(
      `у Вас не хватает денег! ❌💵\n\n💰 Ваш баланс: ${utils.sp(
        message.user.balance
      )}$ 💚`
    );

  message.user.balance -= 50000000000 * message.user.sataka;
  message.user.sataka += 1;

  if (message.user.sataka >= 700 && message.user.questbosspower === false) {
    await bot(
      `Ваша сила больше 700, вы получаете бонус за свою силу в виде 250трлн$`
    );

    message.user.balance += 250000000000000;

    message.user.questbosspower = true;
  }

  return bot(
    `сила Вашей атаки была повышена за ${utils.sp(
      50000000000 * (message.user.sataka - 1)
    )}$ 💵👊
💰 Баланс: ${utils.sp(message.user.balance)}$`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👊 Босс сила",
              },

              color: "positive",
            },
          ],
        ],
      }),
    }
  );
});



oscrn(/^(?:босс топ|😈 Босс топ)$/i, async (message, bot) => {
  let top = [];

  users
    .filter((x) => x.settings.adm === 0)
    .map((x) => {
      top.push({ bossyr: x.bossyr, tag: x.tag, id: x.id, mention: x.mention });
    });

  top.sort((a, b) => {
    return b.bossyr - a.bossyr;
  });

  let text = ``;

  const find = () => {
    let pos = 100;

    for (let i = 0; i < top.length; i++) {
      if (top[i].id === message.senderId) return (pos = i);
    }

    return pos;
  };

  for (let i = 0; i < 10; i++) {
    if (!top[i])
      return message.send(
        "👥 В боте должно зарегистрировано не менее 10 игроков!"
      );

    const user = top[i];

    text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} ${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    } — нанёс ${utils.sp(user.bossyr)} урона.`;
  }

  return bot(
    `топ по общему урону:${text}
➖➖➖➖➖➖➖➖
➡${utils.gi(find() + 1)} ${message.user.tag} — нанёс ${utils.sp(
      message.user.bossyr
    )} урона.`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🔅 Топ реферал",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "😈 Босс топ",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏆 Топ рейтинг",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "👥 Топ игроков",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🌐 Топ биткоины",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "〽️ Топ опыт",
              },

              color: "default",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "🏎️ Топ гонщиков",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💰 Топ баланс",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "💌 Топ сообщения",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

// Команды основателя

oscrn(/^(?:босс жизни)\s(.*)$/i, async (message) => {
  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/([кk])/gi, "000");

  message.args[1] = message.args[1].replace(/([мm])/gi, "000000");

  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  if (!Number(message.args[1])) return;

  message.args[1] = Math.floor(Number(message.args[1]));

  bossinfo.boss_max = message.args[1];

  return message.send("✅ Жизни босса установлены!");
});

oscrn(/^(?:босс фото)\s(.*)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  bossinfo.photo = message.args[1];

  return message.send("✅ Фото босса изменено!");
});

oscrn(/^босс имя\s(.*)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  bossinfo.boss_name = message.args[1];

  return message.send("✅ Имя босса изменено!");
});

oscrn(/^босс приз\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  if (user.settings.imperator === false) {
    user.settings.imperator = true;
  } else {
    user.rubli += 500;
  }

  await bot(`призы выданы игроку ${user.tag}.`);

  if (user.notifications)
    await vk.api.messages.send({
      user_id: user.id,
      message: `@id${user.id}(${user.tag}), спасибо за участие в битве с боссом! 😈
✅ Вы попали в топ 10 урона по боссу, поэтому мы дарим Вам подарок — Император! Если у Вас был император, то выдано 500 рублей на донат-счёт.`,
      random_id: 0,
    });
});

oscrn(/^(?:босс награды)$/i, async (message, bot) => {
  return bot(`награды ТОП 10 игрокам по урону:
	1&#8419;➖5&#8419; Император
	6&#8419;➖🔟 Ультра-кейсы - 5 шт.

	💠 Награды получат ТОП 10 игроков по урону.`);
});

oscrn(/^(?:босс восстановить)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  bossinfo.boss = bossinfo.boss_max;

  bossinfo.boss_name = bossinfo.boss_name;

  users.map((player) => {
    //player.sataka = 1;

    player.bossyr = 0;
  });

  return message.send("✅ Босс восстановлен!");
});

oscrn(/^(?:Обнулить)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  user.balance = 5000;

  user.bank = 0;

  user.bilet = 0;

  user.btc = 0;

  user.farm_btc = 0;

  user.biz = 0;

  user.energy = 10;

  user.maxenergy = 10;

  user.sataka = 1;

  user.bossyr = 0;

  user.stock.status = "Игрок";

  user.stock.stpban = "Нет";

  user.stock.strban = "Нет";

  user.stock.stban = "Нет";

  user.stock.bantop = "Нет";

  user.astats.blocked = false;

  user.astats.reports = 0;

  user.astats.bans = 0;

  user.astats.rbans = 0;

  user.astats.pbans = 0;

  user.astats.balance = 0;

  user.astats.bank = 0;

  user.astats.warn = 0;

  user.sertificats.gosnomer = 0;

  user.sertificats.car = 0;

  user.sertificats.rating = 0;

  user.sertificats.premium = 0;

  user.sertificats.business = 0;

  user.sertificats.vip = 0;

  user.sertificats.opit = 0;

  user.sertificats.activ = 0;

  user.rub = 0;

  user.casinoplus = 0;

  user.casinominus = 0;

  user.rating = 0;

  user.bantop = false;

  user.gon = 0;

  user.mention = true;

  user.c1 = 0;

  user.c2 = 0;

  user.c3 = 0;

  user.c4 = 0;

  user.c5 = 0;

  user.c6 = 0;

  user.c7 = 0;

  user.c8 = 0;

  user.c9 = 0;

  user.possilka1 = 0;

  user.possilka2 = 0;

  user.possilka3 = 0;

  (user.sound = 0),
    (user.soundrating = 0),
    (user.autosound = 0),
    (user.tree = 0),
    (user.leaf = 0),
    (user.irrigation = 0),
    (user.leafpribil = 0),
    (user.minertool = 0);

  user.ruds.zhelezo = 0;

  user.ruds.zoloto = 0;

  user.ruds.almaz = 0;

  user.ruds.materia = 0;

  user.ruds.obsidian = 0;

  user.ruds.plazma = 0;

  user.ruds.antimateria = 0;

  user.procent.clock = 0;

  user.timers.hasWorked = false;

  user.timers.bonus = false;

  user.timers.vipbonus = false;

  user.timers.prembonus = false;

  user.timers.titanbonus = false;

  user.timers.poxod = false;

  user.timers.podarok = false;

  user.timers.report = false;

  user.work = 0;

  user.lte2 = false;

  user.business = [];

  user.notifications = true;

  user.promo = false;

  user.opit = 0;

  user.exp = 1;

  user.level = 1;

  user.bans.ban = false;

  user.bans.rban = false;

  user.bans.pban = false;

  user.scar.gosnomer = "undefined";

  user.scar.gontime = false;

  user.scar.prok_1 = 1;

  user.scar.prok_2 = 1;

  user.scar.prok_3 = 1;

  user.scar.prok_4 = 1;

  user.scar.prok_5 = 1;

  user.scar.prok_6 = 1;

  user.transport.car = 0;

  user.transport.yacht = 0;

  user.transport.airplane = 0;

  user.transport.helicopter = 0;

  user.settings.adm = 0;

  user.settings.vip = false;

  user.settings.premium = false;

  user.settings.titan = false;

  user.realty.home = 0;

  user.realty.apartment = 0;

  user.misc.phone = 0;

  user.misc.computer = 0;

  user.misc.clock = 0;

  user.misc.pet = 0;

  user.misc.farm = 0;

  user.misc.farm_count = 0;

  user.pet.lvl = 0;

  user.pet.poterl = false;

  user.marriage.partner = 0;

  user.marriage.requests = [];

  user.limit.nicklimit = 16;

  user.limit.banklimit = 50000000000000;

  user.limit.timer = utils.time();

  user.limit.playerlimit = 50000000000000;

  user.limit.sent = 0;

  user.limit.paylimit = 50000000000000;

  user.limit.farmlimit = 1000;

  user.stars1 = false;

  user.stars2 = false;

  user.stars3 = false;

  user.stars4 = false;

  user.stars5 = false;

  user.settings.joker = false;

  user.settings.imperator = false;

  user.settings.busi = false;

  user.settings.agent = false;

  await vk.api.messages.send({
    chat_id: 1,
    random_id: 0,
    message: `⛔ Администратор @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}] обнулил игрока @id${user.id} (${user.tag})[ID: ${user.uid}] ❄️`,
  });

  return bot(
    `Вы обнулили [https://vk.com/id${user.id}|игрока] успешно. Ваши действия были зафиксированы и отправлены старшей администрации (в целях безопасности игроков).`
  );
});

oscrn(/^(?:клан настройки рейтинг)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/([мm])/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (!Number(message.args[1]))
    return bot(`вы забыли указать параметры 📛
💡 Используйте команду «клан настройки рейтинг [параметр/сумма]`);

  if (message.args[1] <= 0)
    return bot(`вы забыли указать параметры 📛
💡 Используйте команду «клан настройки рейтинг [параметр/сумма]`);

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана. `);

  if (message.args[1] < 1)
    return bot(`вы ввели недопустимое количество рейтинга 📛
👑 Используйте команду «Клан настройки рейтинг [сумма от 0 до 1.000.000]»`);

  if (message.args[1] > 1000000)
    return bot(`вы ввели недопустимое количество рейтинга 📛
👑 Используйте команду «Клан настройки рейтинг [сумма от 0 до 1.000.000]»`);

  clans[clanid].settings.rating = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы успешно изменили количество рейтинга для входа в клан на ${message.args[1]} 🎉`
  );
});

oscrn(/^(?:клан настройки фермы)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (!Number(message.args[1]))
    return bot(`вы забыли указать параметры 📛
💡 Используйте команду «клан настройки фермы [параметр/сумма]`);

  if (message.args[1] <= 0)
    return bot(`вы забыли указать параметры 📛
💡 Используйте команду «клан настройки фермы [параметр/сумма]`);

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана. `);

  if (message.args[1] < 1)
    return bot(`вы ввели недопустимое количество рейтинга 📛
🔋 Используйте команду «Клан настройки фермы [сумма от 0 до 60.000]»`);

  if (message.args[1] > 60000)
    return bot(`вы ввели недопустимое количество рейтинга 📛
🔋 Используйте команду «Клан настройки фермы [сумма от 0 до 60.000]»`);

  clans[clanid].settings.farms = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы успешно изменили количество ферм для входа в клан на ${message.args[1]} 🎉`
  );
});

oscrn(/^(?:клан настройки опыт)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (!Number(message.args[1]))
    return bot(`вы забыли указать параметры 📛
💡 Используйте команду «клан настройки опыт [параметр/сумма]`);

  if (message.args[1] <= 0)
    return bot(`вы забыли указать параметры 📛
👑 Используйте команду «клан настройки опыт [параметр/сумма]`);

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана. `);

  if (message.args[1] < 1)
    return bot(`вы ввели недопустимое количество рейтинга 📛
👑 Используйте команду «Клан настройки рейтинг [сумма от 0 до 100.000.000]»`);

  if (message.args[1] > 100000000)
    return bot(`вы ввели недопустимое количество рейтинга 📛
👑 Используйте команду «Клан настройки рейтинг [сумма от 0 до 100.000.000]»`);

  clans[clanid].settings.opit = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы успешно изменили количество опыта для входа в клан на ${message.args[1]} 🎉`
  );
});

oscrn(/^(?:клан настройки приглашение)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  message.args[1] = message.args[1].replace(/([.,])/gi, "");

  message.args[1] = message.args[1].replace(/([кk])/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (message.args[1] === 0) {
    clans[clanid].settings.invite = 0;

    return bot(
      `вы успешно изменили права приглашения в клан на ${
        message.args[1] === 0 ? `все участники` : `${message.args[1]} уровень`
      } 🎉`
    );
  }

  if (!message.args[1])
    return bot(`вы забыли указать параметры 📛
🏆 Используйте команду «клан настройки приглашение [уровень 1-3/все участники - 0]»`);

  if (Number(message.args[1] < 0))
    return bot(`вы ввели недопустимый уровень 📛
🏆 Используйте команду «Клан настройки приглашение [уровень 1-3/все участники - 0]»`);

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не администратор/создатель клана. `);

  if (Number(message.args[1] > 3))
    return bot(`вы ввели недопустимый уровень 📛
🏆 Используйте команду «Клан настройки приглашение [уровень 1-3/все участники - 0]»`);

  clans[clanid].settings.invite = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы успешно изменили права приглашения в клан на ${
      message.args[1] === 0 ? `все участники` : `${message.args[1]} уровень`
    } 🎉`
  );
});

oscrn(/^клан настройки кик\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

  message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (!Number(message.args[1]))
    return bot(`вы забыли указать параметры 📛
🏆 Используйте команду «клан настройки кик [уровень 1-3]»`);

  if (message.args[1] <= 0)
    return bot(`вы ввели недопустимый уровень 📛
🏆 Используйте команду «Клан настройки приглашение [уровень 1-3]»`);

  if (clans[clanid].users[message.user.uid].level < 3)
    return bot(`вы не создатель клана. `);

  if (message.args[1] > 3)
    return bot(`вы ввели недопустимый уровень 📛
🏆 Используйте команду «Клан настройки кик [уровень 1-3]»`);

  clans[clanid].settings.kick = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы успешно изменили права кика из клана на ${message.args[1]} уровень 🎉`
  );
});

oscrn(/^(?:клан настройки)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  if (clans[clanid].settings === undefined) {
    clans[clanid].settings = {};

    clans[clanid].settings.rating = 0;

    clans[clanid].settings.opit = 0;

    clans[clanid].settings.farms = 0;

    clans[clanid].settings.invite = 1;

    clans[clanid].settings.kick = 1;
  }

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(`настройки клана:
🔸 Вход: ${clans[clanid].open
    .toString()
    .replace(/false/gi, "закрыт")
    .replace(/true/gi, "открыт")}
👥 Исключать из клана: ${clans[clanid].settings.kick} ур.

⚙️ Параметры входа:
${utils.sp(clans[clanid].settings.rating)} 👑
${utils.sp(clans[clanid].settings.opit)} 🏆
${utils.sp(clans[clanid].settings.farms)} 🔋

⏳ Приглашать в клан: ${clans[clanid].settings.invite
    .toString()
    .replace(/0/gi, "все участники")
    .replace(/1/gi, "модератор и выше")
    .replace(/2/gi, "администратор и выше")
    .replace(/3/gi, "только создатель")}`);
});

/*oscrn(/^(?:создать банду|создать банда|create band)\s(.*)$/i, async (message, bot) => {
if(!message.args[1]) return bot(`Введите название для банды! ❌`);

	let zaprets1 = message.args[1].toLowerCase();
	var zapret = /(&#4448;|ᅠ|™|&#1;|أعلى||أحبك|�|�||�|™|�|&#0000;||�|™.|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|марихуана|Cuний кuт|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|█|▓|▒|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|разбуди в 4:20|#|подкладки|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|синийкит|цп|cp|изнасилование|несовершеннолетние)/
	var sss = zapret.test(zaprets1)
	let text = message.args[1].toLowerCase();
	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)

	if (zapret.test(zaprets1) === true || message.args[1].toLowerCase() === '') {
		return bot(`вы используете запрещенные слова/символы/смайлики 🆘\n\n😉 Придумайте другое название банды! ❌`);
	}

	if (message.args[1].length > 20) {

		return bot(`указано слишком длинное название для банды! ❓☃️

▶️ Максимальная длина названия банды: 20 символов ⛔`);
	}

	if (filter0.test(text) == true || filter1.test(text) == true) {
		var check = true;
		return;
	}

	let user = message.user;
	let name = message.args[1];
	let bid = message.user.bandid;

	if (bands[bid]) return bot(`Вы уже состоите в банде! 🔫 ⚠️`);

	if (message.user.balance < 100000000000000) return bot(`создание банды стоит 100.000.000.000.000$ ❌ 💵`);

	message.user.balance -= 100000000000000;

	if (!bands[bid]) {

		botinfo.number1 += 1;
		bands[botinfo.number1] = {
			owner: message.user,
			users: {},
			dmgboss: 0,
			zashita: 0,
			retin: 0,
			aue: 0,
			lox: 0,
			topsk: 0,
			pisko: 10,
			fuflo: 0,
			abramovich: 0,
			good: 0,
			number: botinfo.number,
			name: name,
			balance: 0,
			open: true,
			price: 100,
			exs: 0,
			people: 1,
			settings: {
				rating: 0,
				opit: 0,
				farms: 0,
				invite: 1,
				kick: 1
			}
		}

		user.bandid = botinfo.number1;

		bands[botinfo.number1].users[message.user.uid] = {
			level: 3,
			names: message.user.tag,
			vlozhil: 0,
			don: 0,
			volos: false,
			idd: message.user.id,
			uidd: message.user.uid
		}

		if (message.user.clanid && message.user.questclan == false) {
			message.user.questclan = true;
			message.user.balance += 50000000000000;
			await bot(`Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`);
		}

		return bot(`клан «${name}» успешно создан 💚\n\n🆔 ID клана: ${botinfo.number}\n♻️ Название: «${name}»\n⛔ Вход в клан: закрыт (автоматич.) ❄️`);
	}
});*/

oscrn(/^(?:клан создать)\s(.*)$/i, async (message, bot) => {
  utils.pick(["😳", "😒", `😟`, `🙄`, `🤔`]);

  const success = utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, "🤑"]);

  if (!message.args[1]) return bot(`введите название для клана! ${success}`);

  let zaprets1 = message.args[1].toLowerCase();

  const zapret =
    /(&#4448;|ᅠ|™|&#1;|أعلى||أحبك|�|�||�|™|�|&#0000;||�|™.|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|марихуана|Cuний кuт|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|█|▓|▒|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|разбуди в 4:20|#|подкладки|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|синийкит|цп|cp|изнасилование|несовершеннолетние)/;

  zapret.test(zaprets1);

  let text = message.args[1].toLowerCase();

  const filter0 =
    /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/;

  const filter1 =
    /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/;

  filter0.test(text);

  filter1.test(text);

  if (zapret.test(zaprets1) === true || message.args[1].toLowerCase() === "") {
    return bot(
      `вы используете запрещенные слова/символы/смайлики 🆘\n\n😉 Придумайте другое название клану.`
    );
  }

  if (message.args[1].length >= 21) {
    return bot(`указано слишком длинное название для клана! ❓☃️



▶️ Максимальная длина названия клана: 20 символов ⛔`);
  }

  if (filter0.test(text) === true || filter1.test(text) === true) {
    return;
  }

  let user = message.user;

  let name = message.args[1];

  let clanid = message.user.clanid;

  if (clans[clanid]) return bot(`вы уже состоите в другом клане ⚠`);

  if (message.user.balance < 100000000000)
    return bot(`создание клана стоит 100.000.000.000$ ❌💵`);

  message.user.balance -= 100000000000;

  if (!clans[clanid]) {
    let smile = utils.pick([
      `🤘`,
      `💥`,
      `💣`,
      `😻`,
      `😏`,
      `🤒`,
      `🤔`,
      `💎`,
      `♻`,
      `🏆`,
      `🔥`,
      `🌚`,
      `👻`,
      `💀`,
      `🎃`,
      `🚀`,
      `🎱`,
      `🍼`,
      `🍺`,
      `🐔`,
      `🐉`,
      `🌝`,
    ]);

    botinfo.number += 1;

    clans[botinfo.number] = {
      owner: message.user,

      users: {},

      dmgboss: 0,

      zashita: 0,

      retin: 0,

      aue: 0,

      lox: 0,

      topsk: 0,

      pisko: 10,

      fuflo: 0,

      abramovich: 0,

      good: 0,

      number: botinfo.number,

      name: name,

      balance: 0,

      smile: smile,

      open: true,

      price: 100,

      exs: 0,

      people: 1,

      settings: {
        rating: 0,

        opit: 0,

        farms: 0,

        invite: 1,

        kick: 1,
      },
    };

    user.clanid = botinfo.number;

    clans[botinfo.number].users[message.user.uid] = {
      level: 3,

      names: message.user.tag,

      vlozhil: 0,

      don: 0,

      volos: false,

      idd: message.user.id,

      uidd: message.user.uid,
    };

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    return bot(
      `клан «${name}» успешно создан 💚\n\n🆔 ID клана: ${botinfo.number}\n♻️ Название: «${name}»\n⛔ Вход в клан: закрыт (автоматич.) ❄️`
    );
  }
});

let smilw = utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`]);

oscrn(
  /^(?:покинуть|❌ Покинуть|❌Покинуть|клан покинуть)$/i,
  async (message, bot) => {
    const idclan = message.user.clanid;

    if (!idclan)
      return bot(
        `вы не состоите в клане! ❌\n\n❓ Вы можете создать клан по команде «Клан создать [название]» ❄️`
      );

    if (clans[idclan].users[message.user.uid].level === 3)
      return bot(
        `Создатель клана не может покинуть клан! ❌\n\n⛔ Вы можете его удалить по команде «клан удалить» ❓`
      );

    clans[idclan].people -= 1;

    message.user.clanid = false;

    delete clans[idclan].users[message.user.uid];

    let user = users.find((x) => x.uid === clans[idclan].owner.uid);

    if (user.notifications) {
      await vk.api.messages.send({
        user_id: user.id,

        message: `😕 Игрок [id${message.user.id}|${message.user.tag}] покинул Ваш клан («${clans[idclan].name}»)
▶ Введите «уведомления выкл» для отключения всех клановых уведомлений ❄️`,

        random_id: 0,
      });
    }

    return bot(`Вы успешно покинули клан! 😕`);
  }
);

oscrn(/^(?:коткрыть|клан открыть)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `вы не состоите в клане! ❌\n\n❓ Вы можете создать клан по команде «Клан создать [название]» ❄️`
    );

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана ${smilw}`);

  if (clans[clanid].open === true)
    return bot(
      `ваш клан уже открыт, цена за вход: ${utils.sp(clans[clanid].price)}$ 🤑`
    );

  clans[clanid].open = true;

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `Вход в клан открыт! 🙂\n\n💵 Цена за вход: ${utils.sp(
      clans[clanid].price
    )}$ 🤑`
  );
});

oscrn(/^(?:кзакрыть|клан закрыть)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `вы не состоите в клане! ❌\n\n❓ Вы можете создать клан по команде «Клан создать [название]» ❄️`
    );

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана ${smilw}`);

  if (clans[clanid].open === false)
    return bot(`ваш клан и так закрыт! 🚫
▶️ Открыть клан: «клан открыть» 🔓`);

  clans[clanid].open = false;

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `Вход в клан успешно закрыт! 🔒\n\n▶️ Открыть клан: «клан открыть» 🔓`
  );
});

oscrn(/^(?:кцена|клан цена)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `вы не состоите в клане! ❌\n\n❓ Вы можете создать клан по команде «Клан создать [название]» ❄️`
    );

  message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

  message.args[1] = message.args[1].replace(/([кk])/gi, "000");

  message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

  message.args[1] = Math.floor(Number(message.args[1]));

  if (!Number(message.args[1]))
    return bot(`цена за вход: ${utils.sp(clans[clanid].price)}$ ${smilw}
▶️ Установить новую цену: «клан цена [сумма]» 💵`);

  if (message.args[1] <= 0) return;

  if (clans[clanid].users[message.user.uid].level < 2)
    return bot(`вы не создатель/администратор клана 😕`);

  if (message.args[1] < 100)
    return bot(`Цена за вход должна быть не меньше 100$ ❌💵`);

  clans[clanid].price = Number(message.args[1]);

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `вы установили новую цену за вход в клан: ${utils.sp(message.args[1])}$ 💵`
  );
});

oscrn(
  /^(?:вступить||войти|клан войти|квступить)\s([0-9]+)$/i,
  async (message, bot) => {
    let idclan = message.args[1];

    let clanid = message.user.clanid;

    if (!clans[idclan]) return bot(`такого клана не существует! ❌`);

    if (clanid === idclan) return bot(`вы итак состоите в этом клане 😁`);

    if (clans[clanid])
      return bot(
        `вы уже состоите в другом клане! ❌\n\n▶️ Покинуть этот клан: «клан выйти» ❄️`
      );

    if (clans[idclan].people >= 50)
      return bot(`в данном клане максимальное количество участников! ❌`);

    if (clans[idclan].open === false)
      return bot(`данный клан закрыт, в него нельзя войти! 🔒❌`);

    if (message.user.balance < clans[idclan].price)
      return bot(
        `У Вас нет денег на вход! ❌\n\n▶️ Стоимость входа в клан: ${utils.sp(
          clans[idclan].price
        )}$ 😕\n💰 Ваш баланс: ${utils.sp(message.user.balance)}$ 💵`
      );

    if (message.user.rating < clans[idclan].settings.rating)
      return bot(`чтобы войти в этот клан, нужно иметь не меньше ${utils.sp(
        clans[idclan].settings.rating
      )} рейтинга ${smilw}
👑 Ваш рейтинг: ${utils.sp(message.user.rating)}`);

    if (message.user.opit < clans[idclan].settings.opit)
      return bot(`чтобы войти в этот клан, нужно иметь не меньше ${utils.sp(
        clans[idclan].settings.opit
      )} опыта ${smilw}
🏆 Ваш опыт: ${utils.sp(message.user.opit)}`);

    if (message.user.misc.farm_count < clans[idclan].settings.farms)
      return bot(`чтобы войти в этот клан, нужно иметь не меньше ${utils.sp(
        clans[idclan].settings.farms
      )} ферм 🤔
🔋 У Вас ${utils.sp(message.user.misc.farm_count)} ферм.`);

    if (message.user.settings.adm < 1)
      message.user.balance -= Number(clans[idclan].price);

    message.user.clanid = Number(message.args[1]);

    if (!clans[idclan].users[message.user]) {
      clans[idclan].users[message.user.uid] = {
        level: 0,

        names: message.user.tag,

        vlozhil: 0,

        don: 0,

        volos: false,

        idd: message.user.id,

        uidd: message.user.uid,
      };
    }

    clans[idclan].people += 1;

    if (message.user.settings.adm < 1)
      clans[idclan].balance += clans[idclan].price;

    let user = users.find((x) => x.uid === clans[idclan].owner.uid);

    if (user.notifications) {
      await vk.api.messages.send({
        user_id: user.id,

        message: `👤 Игрок [id${message.user.id}|${message.user.tag}] вошёл в Ваш клан! 😁
▶ Введите «уведомления выкл» для отключения всех клановых уведомлений ❄️`,

        random_id: 0,
      });
    }

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    return bot(
      `вы вошли в клан «${clans[idclan].name}» за ${utils.sp(
        clans[idclan].price
      )}$ ${smilw}\n\n📚 Команды клана: «кпомощь»`
    );
  }
);

oscrn(/^(?:кназвание|клан название)\s([^]+)$/i, async (message, bot) => {
  if (message.user.clanid === false)
    return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

  let zaprets1 = message.args[1].toLowerCase();

  const zapret =
    /(&#4448;|ᅠ|أعلى|أحبك|&#1;||марихуана|�|�||�|™|�|&#0000;||�|™.|youtu.be|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̡̛̛̛̛̥̗̹̬̠̙̗̞̲̺̦̬̠͚̺͖̗̰̝͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̈̔͗͆̀̋̏̐͋̃͒̊͊̾̋̽̉́̋̅͆̄̾̆̃͑̄́̆̇̐̃́̈́́̒͗̄̽̄̈́̇̎̊̒͗̾͐̍͂̐͋̀̊͐̇͑̽̑̀̀͆̓̍̈́̇̑̓̎͐͋̄͌̌͗̔̄̑̐̀̒̈́͆̊͆͌̓̓͛͑͒̾͆̿͂́̆̏͂̊̄̓̌̽̾̈́̓̽̋̇̌́̃̈́̍̌̋̽̓́̔̏͂̎̿̌̐̎̂̏̋̇̉̈́̕͘͘͘̚̚͘̚̕͘̚̕͘͘͘͘͘̚͝͝͝͝͝͝͝͝ͅ|˙̢̢̡̢̧̡̢̛̛̛̣̭̺̪̣̤̟̭͕̭̭̙͍͉͙̖͖̱̩̤̘̝̲͍͚͇̫̟͈͚̘̰̫̰̼̟̦͚̜̫͎̘̯̭̙̼̼̰̱̟̗͎̜͖͕̪͔̭̭̺̙͍̞̰̭̎͆̆̊̓͊̌̍͑̈́̊̓̌̀́͐̊̐̀͆̐̿̾́̇͌̅̐̐̎̊̽̅̏̿̋̍͑̔͒̽̋̏̋̋̋̇́̐̈͗̆̈́̌͗͐̽̈́̾̏̊͛͌͒͋̊̽̐̒͋͑͊͊̊̾̂̏̏̓̄̈͐͐̋̇͌̇̽̓͌̾͑̍̓́̈́̀̂̑̑̍̐̒̍͑̿̍͊͆͋̋̔̍̈̈̂̊̐̏͂̇̈̾̂͑̽̓̋͊̔̂̀̀͑̌͛͂̿̍̌̅̔̈́̓̓͗͛͑̏̇̐̍̌̈́̏̍̈̃̓̓̍̿̎́͌̍̈́̾̔̉́͐̓̕͘̕͘͘͜͜͠͝͝͝͠͠͝͠͝͝͠͝͝͝͝͝͝ͅ˙̵̧̡̢̨̧̧̢̨̢̨̡̡̢̧̢̧̨̨̧̢̡̡̨̡̧̡̡̨̛̛̛̛̛̛̛̪͇̥̝̼̻̗͓̤̱͖̙̭̯͙̦̭̗͚͉̜̳͎͎͇̪̭̠̖̱̣̠̟͉̯̣̮͚̙̹̠̤̞͔̩̼̻̟̻͔̹̠͚͍͕̣̹̞̲͙̠̳̟͕̣͇̭̹̮͕̯̫͚͕͕̯͔̟̺̞̟͉̥̞̗̼̭͉̩̣͖̘̣͓̣͎̖̖̥̖̳̮̦̥̹̙̲̘̰̘͈̮̞͙̘̟̯͚̲̜̰̦̯͇̥̯̭̼̥̼̯̖͈̥͎̳̯̻̦̗̖̘͍̬͍̻̠̝̭̜͇̯͔̹͉͖͕̜̳̹̹̜̹̗̺͈̻̹̲̪͚̯̙̤̤̰̞͖̳̜̫͚̖̰̺͕̮̠͇͎͕̘͉͉̟̥̩͙̖͔̟̮͓̪̯̣̼̂̿̿͆̽̾̆̋̓̂̆̀̋̓̋͐̓͌̓̏̈̔̉̀̀̈̈̾̎̓̀͋̀̈́͂̀̓͑̂̍̄̂́̈́̔͋̽́̏̀̂́̿͒͊͌̈́̓́͗͌̀̈́͗͛͌̉̏͛͋̎̂̅̇̒͋́̆̐̓̌́͑̌͗͋͐͒̾́̂̀̀̃͋͆̐̈̉̓͊̽̌͑̽̅͊͛̍̅̃̒̀͐̽͒̓͊̅̈͐̈́͆͊͒̆̋̃̂͗̓͆̾̆͂̓̿̐̄̀̀͂̉̋̚͘̚͘̚̕̕̚̕̚̚̕̚̚̚̚̕̕͜͜͜͜͜͜͜͜͜͠͝͠͝͠͠͠͝͠͝͝ͅͅͅ˙̧̡͕̰͖̰̬̩̞͔̩̞͖̤̞͍̙̥̭͎̻̭͖̳͈̦̹̣̖̞̘͕̗̖̱͍̗̩̩̳̹̹͚͙̗͙̲̪̝̫̰͇͎̤̬̼͉̤̹͓̭͈͛̈̑̌̏͒̽͐̃̅͂̓̐̌̈́̽̽̈́͗̏̅͆͂͛̍̾͑͑̌̊̄͑̎̑̈́͆̍̈͛̑̈́̀̆̄̇͋̏̏̀́̀͋̎̉̚̚͜͜͜͜͜͝͝͠˙̴̡̢̧̧̧̧̡̧̧̡̨̢̢̨̡̛̛̳̦̪̹̠̱̩̘̝̤͇̟̟̜̬̯͍͚͎͔̣͎̗̯͈̲̞͙̟̞̖͍̜̖͕͓̝̠̣͉̹̲̱̭͔̬̞̼̬̱͚̫̣͍̩̯̜͍͕͚̪̹̯͙̫̝̖͓͖̹̜̙̞̻͖̤͚̤̹̞̪͉͖͇̤̱̺̗̖̪̘̰̯̼͔̬̠̖͍̖͍̭͖̣̮̫͙̯̪̥͕̼͕͖̗̺̜̩̙̱̱͍͎̩̖͈̤̣̹̹̘̭͕̮͍̠̫̥̝̟̗̗͍̺͚̺̗͕͎͈̹̗̠̬̞̠̘̗̲͙̗͎̦̖̜̤̼̠̰͙̙̳̞̜͉͔͙̭̮̃̊̎͒̈̽̓̌͛̒͂̓͑̐̋͒͂̊͗͐̓̆͒̀̇͛́̉̌́̌̍̈́͌͌̽̉̉͒͊̀̂́̑̉̿͆̉̀̌͛̆̔͊̄̄̑̈́͗̒̀́̐̈́͑́̽͑͋̾̎̐͗̈̒̀̀̀̌̆̉̾̍̏̓̃̊̅͌̅̏̀̅͋̀̍͒̄̈́̀̎̅̊̔̆̓̋̄̽̍̀̋̈́̄̇̽͂̍̃̍͐̓̅̌̈́͂̓̈́͗̊͛̈́͊̀̾̊̿͊̑̑̑͑̽̈̿̋̏̂͒͗̆̽́͋̓͒̒̿̒͑͐̿̈́̓̉̇̚͘̕͘͘͘̚͘͜͜͜͜͝͝͝͠͝͠͝͝͠͠͝͝͝͝͠͝ͅͅͅͅͅͅ˙̢̧̢̡̧̧̧̧̢̡̡̨̛̛̛̛̛̛̞̺̺͚̻̜̗͇͇̥̞̭̯͓͍̗̝̫̥͎̭̙͔̫̜̝̱͎̦͉͚̪̘̥̖̥̙̰͙͕͚͓̹͈̤̗͈͈̪͓̙̪̗̤̱̫̯̩̹̪͙͖̱̦̞͎̺̫̣̥͇̥͖̩̰̜̞͉̞͓̥̤͕͙̥̥̳̤̞͔̟̟̯̲͉͉͍̜̗͎̦̱̯̺̤̟̱̹̫̖̹̜̠̳̦̹̺̜̥̬̹̭̯̬͍̥͙̠̙̥̭͔̻̩̫̹̦͍̺̫̤̪̜̙̠̞͇̖̣̼͙̳̫̮͈͈̦͈̭̱̺̺͚̰̻̤̭͈̯̮̙̦̖̠̜͇̪̙̭͉̝̹̲͍̟̫͖̰̻͕͙͓̲̾̑́̍̓̃̅̇͛̂̌̀̀̂͗̊͋͗̾̿̅͗̅̒́̓̾͆̍̽͐̾̉͊̋͗̽̒̐͗̀̾͑́̃̓̀́̊̄̿̓͐̅̇̐͒́̋̈́̀̄͌̐̋̃͋̐͌̒̓͗͛̏̓͐̒͌̓̓̊̈́̈̅̈́͗͒̊̇̀͂̅̿̄̍̾̆̄̇̇̋̾̾̂̅̉̎̈́̇́̍̅͑͌̃̀̈̈́̿͗̏̈́̃̌̄̈́̈́͐͊͌́̑̊̀͆̅͂͊͆͌̎͋͑́̌́̏̿̽̈̈́͆͑̋̈́̂̂̏̿̀̇͗́́̿̂̅͛͗͋͐͑͗͌͐̏̐̓̆̽͑̆̿̉͑͆̒͘̚͘͘̚̕̕̚͘͜͜͜͜͜͝͝͝͠͝͝͝͝͠͝͠͝ͅͅͅͅͅͅͅͅ˙̢̡̨̨̨̧̡̢̡̡̧̧̡̡̢̛̛̛̛̛͚̙̭͇͍̫̪̬͚͚͖͔͇͕̼̩͍̦̫͚̭̞̦̮̮̥͙̱̥͉̗̬͕̜̟̭̜̳̞̙̻͕̪̥͓̗̟̳̲̠͇̱̫͉͚̮̺̝͓̝͓͕̼͖̻̲̹̠̼̤̹̺͍̭̯̼̝̖̩͕̜̼̬̠̭͓̙̼̙͓̼̘̠̖̝̦͙̝͓̣̥͍̗̻͍̦̪͍̘͉̤͚̮͚̺̗̖̘̻̬̭̟̫̹̞͍͚̦̝̠͖̦̹̲͔͉͓͙̺͇̮͖̝̤̮̭͖͚͎̖̫̫̦̙̺͖̩͖̦͉̭̤̪̦͍̭̥͔̮͙̝̥̬̠̣̺̖̰͈̻̹͚͙̠̗̙͙͉͔͉̖̝̠̣͚͈̱̭̖̮͉͇͙̹̝̫̝̱̦̼̤͍̣̺̮̜̦̯̅̈́͂͒̈́̌̋̇̇̅́͒̒͊̏̈́̏̋͛̓̀͒͋̈́̀̒̊͌͆̿̂͌̔̊̏̊͗͒͊̿̽̀̌̉̍̋̔̉͑͐͆̏͑̌̈́͛͗̐͒̄̍̾̒̅͌̀̏̏̃͂̎͑͑̅̑̏̓̎̋͊͋̆̿̓͘̚̚͘͘̚͜͜͜͝͠͝͠ͅͅͅͅͅͅͅ˙̵̡̢̨̡̧̧̡̢̛̱̲̰̞̞̝͎͔̳̹̣͉̠̟̰̪͍̘̜͇̲̥̖͕̹͔͍͓̯͕͔͚̳͉͙̘̺̥̦̯̞̣͚̜̘̫͚̩̪͈̻̣̗̫̳̙̠̖̠̝̫̞͔̹̫̝̰͙͕͖͓̩̤̲̟̹̥͋́́̋͊̌̎̄̓͆͗̓͛͑́̉̂̽̌͋̿͌̃̌́̄͆̉̽̀͊͛̅́̀͋̔̎͊̓̇̀͘̚͘͘̕͜͝͝ͅ°̛͛̈́̑͆̌̉̂̈̀̏̏̅͌͆͆͌̀͑̂̂͑̍͊͒̇̏͐̈́̇͌͂̑̌̊̅̒̌̈́͑̿̾͐̐̽̏́̕͘͘͘̚̚͘͝|ส็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็็|ส|™|56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|разбуди в 4:20|#|Ỏ͖͈̞̩͎̻̫̫̜͉̠̫͕̭̭̫̫̹̗̹͈̼̠̖͍͚̥͈̮̼͕̠̤̯̻̥̬̗̼̳̤̳̬̪̹͚̞̼̠͕̼̠̦͚̫͔̯̹͉͉̘͎͕̼̣̝͙̱̟̹̩̟̳̦̭͉̮̖̭̣̣̞̙̗̜̺̭̻̥͚͙̝̦̲̱͉͖͉̰̦͎̫̣̼͎͍̠̮͓̹̹͉̤̰̗̙͕͇͔̱͕̭͈̳̗̭͔̘̖̺̮̜̠͖̘͓̳͕̟̠̱̫̤͓͔̘̰̲͙͍͇̙͎̣̼̗̖͙̯͉̠̟͈͍͕̪͓̝̩̦̖̹̼̠̘̮͚̟͉̺̜͍͓̯̳̱̻͕̣̳͉̻̭̭̱͍̪̩̭̺͕̺̼̥̪͖|█|▓|▒| ẖ̨̢̨̨̢̢̧̧̛̛̛̛̹̮͓͉̜͓̩͚̼͉͖̘̗͚̰͇͉͇͓̜͚͚̯̗͓͓̲̟̲͓̬͙̹̘̮͉̲̮̤̤̼͈̜̭̻͙͚̟͈̤̝̞͚̜͎͖̺̗͓͔̝͙̪̺͖̰͖̳̯̱̼͙̦͓̙̟̻͈̪̬̙̣͇̞͇̻̺͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̅̀̄͗̒͂̔͊͒̌̄̕͘̚̕̚̕͜͜͝͝͝͝͝ͅͅé̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|h̛̛͛̒̏͒̈́̊̏̔̅̾̅́̅̆͂́͋̍̈́̑̇̿̈́́̾̔̅͐͆͆͊̊̌̋̾̏͋͌̅̆́́̇̀́̇̈́̽̾̿̋͛̈̇̋̋̄̾͊̋̈́̀̃̈́̂̅͛́́̅́͊͆́̕͘̚̕̚͝͝͝͝͝|░|é̴̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̛̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̿͒̾̑̌̆̀̎͋̀̈́̓̓̄̂́̃̀̈́̋̎̎͌̈́̓̃̈́̐̾̀̃̎́̈͛̽̔͊͐́͌̿̐̍̈̔̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅͘̚̚̕͘̕̚͜͝͝͠͠͝͠͠͠ͅ.̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̨̡̢̢̧̧̨̨̧̢̧̛͙̟̮̩̥̻̬̱̝͔̝̼̗͖͎̪̲͓͔̝̤͖̫̳̟̪͎̳̭̞̝̣̗̝̱̱̮̠̙̟̙͖̤͔͇̩͍͙̰̭̝̫̜̺̝͓̻̱̤̲͉͙̦͕̰̣̬̣̺̖̘̘̮͈̭̫͍̻̰͍̼̤̙̩͖͇̒̌͆̔̄̔̓̏͛̉͛̈́̑̑̎̈́̑͂̾͑͆̑͂͂́̋͂̄̂̒̃̆̓̐̉̀̾̽͒̎̓͐͆͑̊̉͋͋̀̈́̓̎͛̌͌̂̽̔͆̍̊̓̽̂̆̀̿̀̋̍̃̔̉̇̎̋̈́͆̈́̚͘̚̕̚͘̕͘̚̚͘̚͝͝͠͠͝͝͝ͅͅͅ|̢̢̢̧̡̧̡̢̡̧̡̡̡̨̛̥̟̹͖̲̙̪̙̠̙͍̹̦̦͇̣̯͓̯͈͔̺̺̯͚̱͔̻̖̰̖̙̟͇̘͍͉̱̟͓̞͓̘͓̟̳͕̲̞̫̱̖̗̘͇̯͎̝̹̥̲͍̥͉̳̠̥͕̗͔̟͖͇͖͓̭͖̜̱̠̳̺͚̖̒̽̿͐̅́́̊̿̉̑̑͒̔́̓̄͊̀̋̓͛̇̍̇̈́͐͑̇̌̓̓͂̎̅̕͘̕̚͜͠͠ͅ.|̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏56#͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏|56#͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓͓̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏̏&|синийкит|подкладки|таурин|спайс|насвай|мморфин|сованикогданеспит|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|вк бо т |вкботру|сова никогда|сова спит|vkbot&#4448;ru|vkvot ru|vkbotru|vkbot|v k b o t . r u|в к бот|botvk|ботвк|vkbot|bot vk|пидр|трах|насилие|.com|.ru|.pw|.pro|.net|.co|.art|.website|vkmix|сова не спит|наркота|наркотики|кокс|амфетамин|кокаин|опиаты|6-мам|6-МАМ|морфин|кодеин|дигидрокодеин|6-mam|6-MAM|тебаин|буторфанол|наркотин|этилморфин|налорфин|пентазоцин|нальбуфин|бупренорфин|метамфетамин|эфедрин|псевдоэфедрин|хлорфентермин|амфепрамон|фенилэтиламин|фенилпропаноламин|сова никогда не спит|синий кит|цп|cp|изнасилование|несовершеннолетние)/;

  zapret.test(zaprets1);

  if (zapret.test(zaprets1) === true || message.args[1].toLowerCase() === "") {
    return bot(
      `вы используете запрещенные слова/символы.\n\n😉 Придумайте другое название для клана.`
    );
  }

  let text = message.args[1].toLowerCase();

  const filter0 =
    /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}/;

  const filter1 =
    /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/;

  filter0.test(text);

  filter1.test(text);

  if (filter0.test(text) === true || filter1.test(text) === true) {
    return;
  }

  let user = message.user;

  let clanid = user.clanid;

  if (clans[clanid].users[message.user.uid].level < 1)
    return bot(`вы не модератор клана! ❌`);

  if (clans[clanid].balance < 10000000000)
    return bot(`на балансе клана меньше 10.000.000.000$ 💰
▶️ Пополните баланс клана на 10.000.000.000$ по команде «клан казна [сумма]» ❄️`);

  clans[clanid].balance -= 10000000000;

  clans[clanid].name = message.args[1];

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(`Вы успешно изменили название клану за 10.000.000.000$! 😁
💰 Баланс клана: ${utils.sp(clans[clanid].balance)}$ ♻️`);
});

oscrn(
  /^(?:топ кланы|топ кланов|клановый топ|клан топ|топ клан|⚔ Топ кланы|, ⚔ Топ кланы)$/i,
  async (message, bot) => {
    let text = ``;

    const top = [];

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    for (let i = 0; i <= botinfo.number; i++) {
      if (clans[i])
        top.push({
          id: i,

          owner: clans[i].owner,

          people: clans[i].people,

          retin: clans[i].retin,

          name: clans[i].name,
        });
    }

    top.sort((a, b) => {
      return b.retin - a.retin;
    });

    for (let i = 0; i < 10; i++) {
      if (top.length > i) {
        const pizda = top[i];

        text += `\n${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} [${
          pizda.people
        }/50] 👥 — «[id${pizda.owner.id}|${pizda.name}]» — ${utils.sp(
          pizda.retin
        )}ед. 👑`;
      }
    }

    return bot(`лучшие кланы (TOP-10): ❄️${text}`, {
      attachment: "photo-182435125_457257381",
    });
  }
);

oscrn(/^(?:Зелье силы|купить зелье|🍹 Зелье)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

  if (clans[clanid].balance < 10000000000)
    return bot(`на балансе вашего клана меньше 10.000.000.000$ ❌💰
▶️ Пополните баланс клана на 10.000.000.000$ по команде «клан казна [сумма]» ❄️`);

  let id = message.user.uid;

  if (clans[clanid].users[id].level < 2)
    return bot(`вы не создатель/администратор клана! ❌`);

  if (clans[clanid].aue > getUnix())
    return bot(
      `у вашего клана уже имеется зелье силы, оно закончится через ${unixStampLefta(
        clans[clanid].aue - Date.now()
      )} 🍹`
    );

  clans[clanid].balance -= 10000000000;

  clans[clanid].aue = getUnix() + 600000;

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  bot(
    `вы успешно выпили клановое «Зелье силы» за 10.000.000.000$ 💚🍹
⚔ Команда для атаки босса: Клан босс атака 😁`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: '{"button": "5"}',

                label: "⚔ Клан босс атака",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:топ армия)$/i, async (message, bot) => {
  if (message.user.settings.adm < 2)
    return bot(`Функция доступна администрации выше 1-го уровня⛔`);

  let text = ``;

  const top = [];

  for (let i = 0; i <= botinfo.number; i++) {
    if (clans[i])
      top.push({
        id: i,

        owner: clans[i].owner,

        people: clans[i].people,

        retin: clans[i].retin,

        name: clans[i].name,

        zashita: clans[i].zashita,
      });
  }

  top.sort((a, b) => {
    return b.zashita - a.zashita;
  });

  for (let i = 0; i < 10; i++) {
    if (top.length > i) {
      const pizda = top[i];

      text += `${i === 9 ? `\n&#128287;` : `\n${i + 1}&#8419;`} [${
        pizda.people
      }/50] [id${pizda.owner.id}|${pizda.name}] — ${utils.sp(
        pizda.zashita
      )} 👑`;
    }
  }

  return bot(
    `лучшие кланы по армии (TOP-10): ❄️
${text}

`,
    { attachment: "photo-182435125_457257381" }
  );
});

oscrn(
  /^(?:клан состав|клан участники|клан у|состав клан|клановый состав|состав клана)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (!clanid)
      return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

    let text = ``;

    for (let id in clans[clanid].users) {
      let user = users[id];

      if (user.mention === true) {
        if (clans[clanid].users[id].level === 3)
          text += `👑 @id${user.id} (${user.tag}) (ID: ${
            user.uid
          }) - Вложил: ${utils.sp(clans[clanid].users[id].vlozhil)}$\n`;
        if (clans[clanid].users[id].level === 2)
          text += `🔪 @id${user.id} (${user.tag}) (ID: ${
            user.uid
          }) - Вложил: ${utils.sp(clans[clanid].users[id].vlozhil)}$\n`;
        if (clans[clanid].users[id].level === 1)
          text += `💎 @id${user.id} (${user.tag}) (ID: ${
            user.uid
          }) - Вложил: ${utils.sp(clans[clanid].users[id].vlozhil)}$\n`;
        if (clans[clanid].users[id].level === 0)
          text += `🌟 @id${user.id} (${user.tag}) (ID: ${
            user.uid
          }) - Вложил: ${utils.sp(clans[clanid].users[id].vlozhil)}$\n`;
      } else {
        if (clans[clanid].users[id].level === 3)
          text += `👑 ${user.tag} (ID: ${user.uid}) - Вложил: ${utils.sp(
            clans[clanid].users[id].vlozhil
          )}$\n`;
        if (clans[clanid].users[id].level === 2)
          text += `🔪 ${user.tag} (ID: ${user.uid}) - Вложил: ${utils.sp(
            clans[clanid].users[id].vlozhil
          )}$\n`;
        if (clans[clanid].users[id].level === 1)
          text += `💎 ${user.tag} (ID: ${user.uid}) - Вложил: ${utils.sp(
            clans[clanid].users[id].vlozhil
          )}$\n`;
        if (clans[clanid].users[id].level === 0)
          text += `🌟 ${user.tag} (ID: ${user.uid}) - Вложил: ${utils.sp(
            clans[clanid].users[id].vlozhil
          )}$\n`;
      }
    }

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    return bot(`участники клана «${clans[clanid].name}» [${clans[clanid].people}/50]:



${text}`);
  }
);

oscrn(/^(?:клан|⚔️ Клан|⚔ Клан|мой клан)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

  let shit = ``;

  let zel = ``;

  let minus = ``;

  if (clans[clanid].abramovich > getUnix())
    shit = `\n🛡️ Щит будет ещё действовать ещё ${unixStampLeft(
      clans[clanid].abramovich - Date.now()
    )}`;

  if (clans[clanid].aue > getUnix())
    `\n🍹 Зелье будет действовать ещё ${unixStampLeft(
      clans[clanid].aue - Date.now()
    )}`;

  if (clans[clanid].retin < 0) minus = `-`;

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(
    `ваш клан:
♻️ Название: «${clans[clanid].name}»
🆔 ID клана: ${clans[clanid].number}
💰 В казне сейчас находится ${utils.sp(clans[clanid].balance)}$
➖➖➖➖➖➖
👑 Рейтинг: ${minus}${utils.sp(clans[clanid].retin)}
🗡️ Армия: ${utils.sp(clans[clanid].zashita)}${shit}
➖➖➖➖➖➖
🏅 Побед: ${utils.sp(clans[clanid].good)}
⛔ Поражений: ${utils.sp(clans[clanid].fuflo)}
➖➖➖➖➖➖
👥 Участники: ${clans[clanid].people}/50
🚪 Вход: ${clans[clanid].open === true ? "открыт" : "закрыт"}`,
    { attachment: clans[clanid].photo }
  );
});

oscrn(/^(?:lget|лимиты гет|лгет|limget)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;
  if (!Number(message.args[1])) return bot(`укажите ID игрока! 🙂`);

  let user = users.find((x) => x.uid === Number(message.args[1]));
  if (!user) return bot(`Не нашёл такого игрока 🌧️`);

  return bot(`Лимиты игрока @id${user.id} (${user.tag}) ☃️

✍️ Лимит ник-нейма: ${user.limit.nicklimit} сим-ов
💳 Лимит банка: ${utils.sp(user.limit.banklimit)}$
💵 Лимит передачи: ${utils.sp(user.limit.playerlimit)}$
🔋 Лимит ферм: ${utils.sp(user.limit.farmlimit)} шт.
📼 Лимит видеокарт: ${utils.sp(user.limit.videocardlimit)} шт.

❓ Чтобы узнать подробную статистику игрока введите «Гет [ID игрока]» 😁`);
});

oscrn(/^(?:cget|клан гет|кгет|kget)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1) return;

  if (!Number(message.args[1])) return bot(`укажите ID клана! 🙂`);

  let user = await clans
    .filter((x) => x != null)
    .find((x) => x.number === Number(message.args[1]));

  let clanid = message.args[1];

  if (!user) return bot(`такого клана не существует! 😫`);

  let shit = ``;

  let zel = ``;

  let minus = ``;

  if (clans[clanid].abramovich > getUnix())
    shit = `\n🏹 Действие щита: ${unixStampLeft(
      clans[clanid].abramovich - Date.now()
    )}`;

  if (clans[clanid].aue > getUnix())
    `\n🍹 Зелье: ${unixStampLeft(clans[clanid].aue - Date.now())}`;

  if (clans[clanid].retin < 0) minus = `-`;

  return bot(
    `клан «№${message.args[1]}» ⚔️🔥😎

♻️ Название: «${clans[clanid].name}»
🆔 ID клана: ${clans[clanid].number}
💰 В казне сейчас находится ${utils.sp(clans[clanid].balance)}$
➖➖➖➖➖➖
👑 Рейтинг: ${minus}${utils.sp(clans[clanid].retin)}
🗡️ Армия: ${utils.sp(clans[clanid].zashita)}${shit}
➖➖➖➖➖➖
🏅 Побед: ${utils.sp(clans[clanid].good)}
⛔ Поражений: ${utils.sp(clans[clanid].fuflo)}
➖➖➖➖➖➖
👥 Участники: ${clans[clanid].people}/50
🚪 Вход: ${clans[clanid].open === true ? "открыт" : "закрыт"}`,
    { attachment: clans[clanid].photo }
  );
});

oscrn(
  /^(?:ккик|изгнать|исключить|клан кик)\s([0-9]+)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (!clanid)
      return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

    if (
      clans[clanid].users[message.user.uid].level < clans[clanid].settings.kick
    )
      return bot(
        `изгнать из клана может только ${clans[clanid].settings.invite
          .toString()
          .replace(/1/gi, "модератор и выше")
          .replace(/2/gi, "администратор и выше")
          .replace(/3/gi, "только создатель")} ${smilw}`
      );

    let user = users.find((x) => x.uid === Number(message.args[1]));

    if (clans[clanid].users[message.user.uid].level === 3) {
      if (!user) return bot(`такого игрока не существует ${smilw}`);

      if (clans[clanid].users[user.uid].level === 3)
        return bot(`нельзя изгнать создателя из клана! ❌

⛔ Удалить клан можно по команде «клан удалить»`);

      if (user.uid === message.user.uid)
        return bot(`вы не можете кикнуть себя! ❌`);

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶️ ${user.tag}, Вас изгнали из клана «${
          clans[message.user.clanid].name
        }»! 😕`,

        random_id: 0,
      });

      delete clans[clanid].users[user.uid];

      clans[clanid].people -= 1;

      user.clanid = false;

      if (message.user.clanid && message.user.questclan === false) {
        message.user.questclan = true;

        message.user.balance += 50000000000000;

        await bot(
          `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
        );
      }

      return bot(
        `Вы изгнали игрока ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } из клана ⛔`
      );
    }

    if (clans[clanid].users[message.user.uid].level === 2) {
      if (clans[clanid].users[user.uid].level === 2)
        return bot(`нельзя изгнать админа из клана ${smilw}`);

      if (clans[clanid].users[user.uid].level === 3)
        return bot(`нельзя изгнать создателя из клана ${smilw}`);

      if (!user) return bot(`такого игрока не существует ${smilw}`);

      if (user.uid === message.user.uid)
        return bot(`вы не можете кикнуть себя! ❌`);

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶️ ${user.tag}, Вас изгнали из клана «${
          clans[message.user.clanid].name
        }»! 😕`,

        random_id: 0,
      });

      delete clans[clanid].users[user.uid];

      clans[clanid].people -= 1;

      user.clanid = false;

      return bot(
        `Вы изгнали игрока ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } из клана ⛔`
      );
    }

    if (clans[clanid].users[message.user.uid].level === 1) {
      if (clans[clanid].users[user.uid].level === 1)
        return bot(`нельзя изгнать модератора из клана ${smilw}`);

      if (clans[clanid].users[user.uid].level === 2)
        return bot(`нельзя изгнать админа из клана ${smilw}`);

      if (clans[clanid].users[user.uid].level === 3)
        return bot(`нельзя изгнать создателя из клана ${smilw}`);

      if (!user) return bot(`такого игрока не существует ${smilw}`);

      if (user.uid === message.user.uid)
        return bot(`вы не можете кикнуть себя! ❌`);

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶️ ${user.tag}, Вас изгнали из клана «${
          clans[message.user.clanid].name
        }»! 😕`,

        random_id: 0,
      });

      delete clans[clanid].users[user.uid];

      clans[clanid].people -= 1;

      user.clanid = false;

      return bot(
        `Вы изгнали игрока ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } из клана ⛔`
      );
    }
  }
);

oscrn(
  /^(?:клан магазин|магазин клана|клановый магазин)$/i,
  async (message, bot) => {
    return bot(
      `магазин:

1⃣ Армия (100 единиц) — 3.000.000.000$
🛒 Приобрести этот товар: «армия [кол-во]»

2⃣ Щит на сутки — 150.000.000.000$
🛒 Приобрести этот товар: «купить щит»

3⃣ Зелье силы (10 мин) — 10.000.000.000$
🛒 Приобрести этот товар: «купить зелье»

🛡️ Покупая щит, когда Вы атакуете клан, он пропадает при любой атаке.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🛡 Щит",
                },

                color: "secondary",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "🍹 Зелье",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:клан босс|☠ Босс)$/i, async (message, bot) => {
  return bot(
    `КЛАННОВЫЙ БОСС 🗡️
▶️ Прошлый победивший клан: «[id${botinfo.final}|${botinfo.cfinal}]»
♻️ Босс: «${botinfo.name}» (${utils.sp(botinfo.xp)}/50.000❤️)

🗡️ Чтобы атаковать босса, введите «Клан босс атака»`,

    {
      attachment: `photo-197579361_457341110`,

      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "🍹 Зелье",
              },

              color: "positive",
            },

            {
              action: {
                type: "text",

                payload: "{}",

                label: "⚔ Клан босс атака",
              },

              color: "negative",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:клан босс атака|⚔ клан босс атака)$/i, async (message, bot) => {
  let damage;
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

  if (clans[clanid].lox > getUnix())
    return bot(`Ваша армия очень сильно устала! 😕
⏰ Атаковать босса можно будет через ${unixStampLefta(
      clans[clanid].lox - Date.now()
    )} ⏳`);

  if (clans[clanid].zashita < 1100)
    return bot(
      `для атаки требуется минимум 1100 армии, армии в вашем клане: ${clans[clanid].zashita} ❌`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔️ Клан армия 1000",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  let arm = utils.random(700, 1000);

  clans[clanid].zashita -= arm;

  //clans[clanid].zashita = Math.floor(Number(clans[clanid].zashita * 0.99));

  clans[clanid].pisko -= 1;

  if (clans[clanid].pisko < 1) {
    clans[clanid].pisko = 10;

    clans[clanid].lox = getUnix() + 60000;
  }

  if (clans[clanid].abramovich > getUnix())
    bot(`с Вашего клана снят щит! 🛡️❌`);

  clans[clanid].abramovich = 5;

  let prize = 1;

  if (clans[clanid].aue > getUnix()) {
    damage = utils.random(20, 30);
  } else {
    damage = utils.random(10, 20);
  }

  if (prize === 1) {
    clans[clanid].dmgboss += damage; //

    botinfo.xp -= damage;

    if (botinfo.xp <= 0) {
      let cash = utils.random(100000000000, 150000000000);

      clans[clanid].balance += cash;

      let ret = utils.random(1, 3);

      clans[clanid].retin += ret;

      clans[clanid].good += 1;

      botinfo.cfinal = clans[clanid].name;

      botinfo.final = message.user.id;

      botinfo.cash = cash;

      botinfo.xp = 50000;

      let cId = 0;

      let cdmg = 0;

      for (let i = 0; i < clans.length; i++) {
        if (clans[i] != null) {
          if (clans[i].dmgboss > cdmg) {
            cId = i;

            cdmg = clans[i].dmgboss;
          }
        }
      }

      const cl = await clans
        .filter((x) => x != null)
        .find((x) => x.dmgboss === cdmg);

      let cash1 = utils.random(1300000000000, 1900000000000);

      cl.balance += cash1;

      let ret1 = utils.random(15, 50);

      cl.retin += ret1;

      let user = users.find((x) => x.uid === cl.owner.uid);

      console.log(user.uid);

      let follow = await vk.api.call("groups.isMember", {
        user_id: user.id,
        group_id: 228105719,
      });

      if (follow) {
        let smileng = utils.pick([
          `🌷`,
          `🌸`,
          `🌹`,
          `🌺`,
          `🌼`,
          `💐`,
          `❤️`,
          `💓`,
          `💕`,
        ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

        if (user.notifications) {
          await vk.api.messages.send({
            user_id: cl.owner.id,

            message: `⚔️ Ваш клан занял ТОП-1 в битве с клановым боссом, Ваш клан получил ${utils.sp(
              ret1
            )} рейтинга 👑 и ${utils.sp(cash1)}$ 💵💰
🔔 Отписаться от уведомлений: «уведомления выкл» ${smileng}`,

            random_id: 0,
          });
        }
      }

      await clans.filter((x) => x != null).map((x) => (x.dmgboss = 0));

      bot(
        `поздравляем, вы нанесли ФИНАЛЬНЫЙ УДАР боссу! 💚
👑 Получено ${ret} рейтинга
🤑 Заработано: ${utils.sp(cash)}$

📚 Введите «клан босс» для просмотра информации.`,
        { attachment: `photo-197579361_457341110` }
      );

      return;
    }

    return bot(
      `вы нанесли удар боссу, -${damage} ХП! 💓
❤ Здоровье: ${utils.sp(botinfo.xp)} из 50.000 💚`,

      {
        attachment: `photo-197579361_457341110`,

        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "☠ Босс",
                },

                color: "negative",
              },

              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚔ Клан босс атака",
                },

                color: "positive",
              },
            ],
          ],
        }),
      }
    );
  }
});

oscrn(/^(?:купить щит|🛡 Щит)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

  if (clans[clanid].balance < 150000000000)
    return bot(`на балансе Вашего клана меньше 150.000.000.000$ 💰❌
▶️ Пополните баланс клана на 150.000.000.000$ по команде «клан казна [сумма]» ❄️`);

  let id = message.user.uid;

  if (clans[clanid].users[id].level < 2)
    return bot(`вы не создатель/администратор клана! ❌`);

  if (clans[clanid].abramovich > getUnix())
    return bot(
      `у Вашего клана уже имеется щит, он закончится через ${unixStampLeft(
        clans[clanid].abramovich - Date.now()
      )} ♻️`
    );

  clans[clanid].balance -= 150000000000;

  clans[clanid].abramovich = getUnix() + 86400000;

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(`Вы купили щит на 24 часа для своего клана! ✅
🛡️ Покупая щит, когда Вы атакуете клан, он пропадает при любой атаке.`);
});

oscrn(
  /^(?:кпомощь|🗡️ Клан помощь ♻️|◀️ Назад|кпомошь|кпомош|помощь клан|команды клана|клан команды|💡 Помощь|клан помощь|клан помошь|клан помош|«клан помощь»|клан помощ)$/i,
  async (message, bot) => {
    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    return bot(
      `Помощь по клану:

▶️ Основное
⚡ Создание и настройка кланов
👑 Управление кланом
➖➖➖➖➖

♻️ Для перехода в нужный раздел нажмите на кнопку.`,

      {
        keyboard: JSON.stringify({
          inline: true,

          buttons: [
            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "▶️ Основное",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "⚡ Создание и настройка кланов",
                },

                color: "default",
              },
            ],

            [
              {
                action: {
                  type: "text",

                  payload: "{}",

                  label: "👑 Управление кланом",
                },

                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:▶️ Основное|косновное|клан основное)$/i, async (message, bot) => {
  return bot(
    `основной раздел помощи для кланов ❄️

💡 Клан - информация о клане
📜 Кланы - список лучших кланов
👥 Клан участники - список всех участников клана
✔ Клан войти [айди клана] - вступить в клан
✅ Клан принять [айди клана] - войти в клан по приглашению
📛 Клан выйти - выйти с клана`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "◀️ Назад",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:⚡ Создание и настройка кланов)$/i, async (message, bot) => {
  return bot(
    `раздел «Создание и настройка для кланов» ❄️

✅ Клан создать [название]
⤴ Клан настройки - информация о настройках
🔎 Клан закрыть/открыть - открыть/закрыть вход в клан.
🚷 Клан настройки кик [уровень 1-3]
📬 Клан настройки приглашение [уровень 1-3/все участники - 0]
🏆 Клан настройки опыт [сумма]
👑 Клан настройки рейтинг [сумма]
🔋 Клан настройки фермы [кол-во]`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "◀️ Назад",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:👑 Управление кланом)$/i, async (message, bot) => {
  return bot(
    `раздел «Управление кланом» ❄️

🛡️ Клан [повысить/понизить] [айди игрока]
✅ Клан пригласить [айди игрока]
😢 Клан кик [айди игрока]
📛 Клан выйти - удалить клан
💰 Клан казна [сумма] - пополнить казну`,

    {
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "◀️ Назад",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(
  /^(?:кбанк|кбаланс|казна|клан казна|кказна|баланс клана|клан положить|кположить)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (!clanid)
      return bot(`у вас нет клана, вступите или создайте клан ${smilw}`);

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ 💵
💰 Пополнить казну: «казна [сумма]» 😁`);
  }
);

oscrn(
  /^(?:кположить|казна|клан казна|казна клан|клан положить|клан банк|банк клан|клан пополнить)\s(.*)$/i,
  async (message, bot) => {
    if (message.user.captcha.vid !== false) {
      if (message.user.captcha.vid === 1)
        return bot(`подозрительная активность! ❌
Введите «капча ${message.user.captcha.otvet}», чтобы пройти проверку на робота!`);

      if (message.user.captcha.vid === 2)
        return bot(`подозрительная активность! ❌
Решите пример «${message.user.captcha.otvet / 2} + ${
          message.user.captcha.otvet / 2
        }» и введите "капча [ответ]"`);
    }

    let captcha = utils.random(1, 100);

    if (captcha === 44) {
      let t = utils.pick([1, 2]);

      if (t === 1) {
        let otv = utils.random(100, 500);

        message.user.captcha.vid = 1;

        message.user.captcha.otvet = otv;

        return bot(`подозрительная активность! ❌
Введите «капча ${otv}», чтобы пройти проверку на робота!`);
      }

      if (t === 2) {
        let pr1 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

        let pr2 = utils.pick([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);

        message.user.captcha.vid = 2;

        message.user.captcha.otvet = pr1 + pr2;

        message.user.captcha.primer = pr1 + pr2;

        return bot(`подозрительная активность! ❌

Решите пример «${message.user.captcha.otvet / 2} + ${
          message.user.captcha.otvet / 2
        }» и введите "капча [ответ]"`);
      }
    }

    if (message.user.settings.adm >= 1) return bot(`bad error.`);

    if (message.user.inf === true) return bot(`Выключите безлимитный баланс`);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

    message.args[1] = message.args[1].replace(/([кk])/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = message.args[1].replace(
      /(вабанк|вобанк|все|всё)/gi,
      message.user.balance
    );

    let clanid = message.user.clanid;

    if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ❌`);

    if (!Number(message.args[1]))
      return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ 💰♻️
💰 Пополнить казну: «казна [сумма]» 😁`);

    message.args[1] = Math.floor(Number(message.args[1]));

    if (message.args[1] > message.user.balance)
      return bot(`Вы указали сумму, больше Вашего баланса 💰❌
💵 Баланс: ${utils.sp(message.user.balance)}$`);

    if (message.args[1] <= 0)
      return bot(`баланс вашего клана: ${utils.sp(clans[clanid].balance)}$ 💰
💰 Пополнить казну: «казна [сумма]» 😁`);

    let id = message.user.uid;

    message.user.balance -= message.args[1];

    clans[clanid].balance += message.args[1];

    clans[clanid].users[id].vlozhil += message.args[1];

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

    await vk.api.messages.send({
      chat_id: 1,
      forward_messages: message.id,
      message: `# КАЗНА: ${smileng}
👤 Игрок @id${message.user.id} (${
        message.user.tag
      }) положил в казну клана ${utils.sp(message.args[1])}$ 💵
🆔 ID клана: ${message.user.clanid}`,
      random_id: 0,
    });

    return bot(
      `вы успешно положили ${utils.sp(
        message.args[1]
      )}$ в банк клана ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`
    );
  }
);

oscrn(
  /^(?:клан удалить|кудалить|🗡️ Клан удалить ❌)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (!clanid) return bot(`у вас нет клана ${smilw}`);

    if (clans[clanid].users[message.user.uid].level < 3)
      return bot(`вы не создатель клана ${smilw}`);

    if (clans[clanid].people > 1)
      return bot(`в клане имеются люди, сначала исключите их всех ${smilw}`);

    if (clans[clanid].topsk < getUnix()) {
      clans[clanid].topsk = getUnix() + 600000;

      return bot(
        `Вы намерены удалить клан 🛡️❌\n\n♻️ Для удаления нажмите на кнопку ниже. 😀`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: "{}",

                    label: "🗡️ Клан удалить ❌",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );
    }

    delete clans[clanid];

    message.user.clanid = false;

    return bot(`вы удалили свой клан! 😕`);
  }
);

oscrn(/^(?:профиль фото|проф фото|пфото)\s(.*)$/i, async (message, bot) => {
  message.user.photo = message.args[1];

  return bot(`ваш профиль изменён 🤗`);
});

oscrn(/^(?:клан фото)\s(.*)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан ❌`);

  if (clans[clanid].users[message.user.uid].level < 3)
    return bot(`вы не создатель клана! ❌`);

  clans[clanid].photo = message.args[1];

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(`Фото клана изменено! ♻️`);
});

oscrn(/^(?:армия|армии)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid) return bot(`у вас нет клана ${smilw}`);

  return bot(`В вашем клане ${utils.sp(clans[clanid].zashita)} ед. армии ⚔
🛒 Приобрести армию: «армия [кол-во]»
🛍 Магазин: «клан магазин»`);
});

oscrn(
  /^(?:армия|армии|клан армия|купить армию|армию|единица армии)\s(.*)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (!clanid) return bot(`у вас нет клана ${smilw}`);

    message.args[1] = message.args[1].replace(/(\.|\,)/gi, "");

    message.args[1] = message.args[1].replace(/(к|k)/gi, "000");

    message.args[1] = message.args[1].replace(/(м|m)/gi, "000000");

    message.args[1] = Math.floor(Number(message.args[1]));

    let id = message.user.uid;

    let pay = 30000000;

    if (clans[clanid].users[id].level < 2)
      return bot(`вы не создатель/администратор клана ${smilw}`);

    if (clans[clanid].balance < 3000000000)
      return bot(`на балансе вашего клана меньше 3.000.000.000$ ${smilw}`);

    if (message.args[1] < 100)
      return bot(`Покупка армии идёт минимум от 100 единиц 😕
▶️ Пример: «армия 100» ❄️`);

    if (!Number(message.args[1]))
      return bot(`В вашем клане ${utils.sp(clans[clanid].zashita)} ед. армии ⚔
🛒 Приобрести армию: «армия [кол-во]»
🛍 Магазин: «клан магазин»`);

    if (message.args[1] <= 0) return;

    if (message.args[1] * pay > clans[clanid].balance) {
      const armich = Math.floor(clans[clanid].balance / 30000000);

      return bot(`Недостаточно денег в казне! 💰❌
💵 Баланс казны: ${utils.sp(clans[clanid].balance)}$
▶️ Этой суммы хватает на покупку ${utils.sp(armich)} ед. армии ⚔`);
    } else {
      clans[clanid].balance -= message.args[1] * pay;

      clans[clanid].zashita += message.args[1];

      if (message.user.clanid && message.user.questclan === false) {
        message.user.questclan = true;

        message.user.balance += 50000000000000;

        await bot(
          `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
        );
      }

      return bot(`Вы приобрели ${utils.sp(
        message.args[1]
      )} ед. армии за ${utils.sp(message.args[1] * pay)}$ ⚔💵
💰 Баланс казны: ${utils.sp(clans[clanid].balance)}$`);
    }
  }
);

oscrn(
  /^(?:пригласить|кпригласить|клан пригласить)\s([0-9]+)$/i,
  async (message, bot) => {
    let clanid = message.user.clanid;

    if (message.user.clanid === false)
      return bot(`у вас нет клана, вступите или создайте клан! ❌`);

    if (
      clans[clanid].users[message.user.uid].level <
      clans[clanid].settings.invite
    )
      return bot(
        `в клан может приглашать только ${clans[clanid].settings.invite
          .toString()
          .replace(/1/gi, "модератор и выше")
          .replace(/2/gi, "администратор и выше")
          .replace(/3/gi, "только создатель")} 😕`
      );

    if (message.user.lol > getUnix())
      return bot(`подождите чуть-чуть! 😥.
🛡️ Пригласить следующего игрока в клан можно будет через ${unixStampLeft(
        message.user.lol - Date.now()
      )} ⏰`);

    const user = await users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`данного игрока не существует! ❌`);

    let clanidi = user.clanid;

    if (clans[clanidi])
      return bot(`данный игрок уже состоит в другом клане! ❌`);

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    await bot(
      `Вы успешно пригласили игрока ${
        user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
      } в клан! 🛡️\n\n👤 Чтобы игрок вступил, ему нужно написать «вступить ${clanid}» 🗡️`
    );

    message.user.lol = getUnix() + 3600000;

    await vk.api.messages.send({
      user_id: user.id,

      message: `✉ Игрок [id${message.user.id}|${
        message.user.tag
      }] пригласил Вас в клан «${clans[message.user.clanid].name}»! 😀
▶️ Для вступления введите «Вступить ${message.user.clanid}» 😁`,

      random_id: 0,
    });
  }
);

oscrn(/^(?:повысить|клан повысить|кповысить)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid) return bot(`у вас нет клана, вступите или создайте клан! ❌`);

  return bot(`использованин команды - «повысить [ID игрока]»
🅰️ Администратор в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
👤 Модератор в клане может изменять название, исключать игроков.`);
});

oscrn(
  /^(?:повысить|клан повысить|кповысить)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.clanid === false) return bot(`у вас нет клана ${smilw}`);

    const user = await users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`такого игрока не существует! ❌`);

    if (user.uid === message.user.uid)
      return bot(`Вы зачем-то указали свой ID.. 😥`);

    let clanid = user.clanid;

    let clanidi = message.user.clanid;

    if (clans[clanidi].users[message.user.uid].level < 2)
      return bot(`вы не создатель/администратор клана ${smilw}`);

    if (clanid !== clanidi)
      return bot(`этот человек не состоит в клане ${smilw}`);

    if (clans[clanid].users[user.uid].level === 2)
      return bot(`данный игрок имеет максимальный статус в клане.`);

    if (clans[clanid].users[user.uid].level === 3)
      return bot(`Вы не можете повысить владельца клана.. 😕`);

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

    if (clans[clanid].users[user.uid].level < 1) {
      clans[clanid].users[user.uid].level = 1;

      await bot(
        `игрок ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } был назначен модератором в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`,
        ])}${smileng}`
      );

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶ Вас назначили модератором в клане «${
          clans[message.user.clanid].name
        }» 😁`,

        random_id: 0,
      });
    } else {
      if (clans[clanidi].users[message.user.uid].level < 3)
        return bot(
          `до уровня "админ" может повысить только создатель клана ${smilw}${smileng}`
        );

      clans[clanid].users[user.uid].level = 2;

      await bot(
        `игрок ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } был назначен администратором в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `😏`,
          `🤑`,
        ])}${smileng}`
      );

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶ Вас назначили администратором в клане «${
          clans[message.user.clanid].name
        }» 🎉`,

        random_id: 0,
      });
    }
  }
);

oscrn(/^(?:понизить|клан понизить|кпонизить)$/i, async (message, bot) => {
  let clanid = message.user.clanid;

  if (!clanid)
    return bot(
      `у вас нет клана, вступите или создайте клан ${utils.pick([
        `🤤`,
        `☺`,
        `🙂`,
        `😁`,
        `😏`,
        `🤑`,
      ])}`
    );

  if (message.user.clanid && message.user.questclan === false) {
    message.user.questclan = true;

    message.user.balance += 50000000000000;

    await bot(
      `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
    );
  }

  return bot(`использованин команды - «понизить [ID игрока]»
🅰️ Администратор в клане может приглашать и исключать игроков, изменять клан, проводить атаки.
👤 Модератор в клане может изменять название, исключать игроков.`);
});

oscrn(
  /^(?:понизить|клан понизить|кпонизить)\s([0-9]+)$/i,
  async (message, bot) => {
    if (message.user.clanid === false) return bot(`у вас нет клана 😥`);

    const user = await users.find((x) => x.uid === Number(message.args[1]));

    if (!user) return bot(`такого игрока не существует! ❌`);

    if (user.uid === message.user.uid)
      return bot(`Вы зачем-то указали свой ID.. 😥`);

    let clanid = user.clanid;

    let clanidi = message.user.clanid;

    if (clans[clanidi].users[message.user.uid].level < 2)
      return bot(`вы не создатель/администратор клана! 😥`);

    if (clanid !== clanidi)
      return bot(`этот человек не состоит в Вашем клане! 😥`);

    if (clans[clanid].users[user.uid].level === 3)
      return bot(`данный игрок является создателем в клане! ❌`);

    if (clans[clanid].users[user.uid].level < 1)
      return bot(`данный игрок является участником в клане! ❌`);

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    if (clans[clanid].users[user.uid].level === 1) {
      clans[clanid].users[user.uid].level = 0;

      await bot(
        `игрок ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } был понижен до прав участника в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `🤔`,
          `🤑`,
        ])}`
      );

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶ Вас понизили до прав участника в клане «${
          clans[message.user.clanid].name
        }» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `🤔`, `🤑`])}`,

        random_id: 0,
      });
    } else {
      if (clans[clanidi].users[message.user.uid].level < 3)
        return bot(
          `до уровня "модератор" может понизить только создатель клана ${utils.pick(
            [`🤤`, `☺`, `🙂`, `😁`, `🤔`, `🤑`]
          )}`
        );

      clans[clanid].users[user.uid].level = 1;

      await bot(
        `игрок ${
          message.user.mention
            ? `@id${message.user.id} (${message.user.tag})`
            : `${message.user.tag}`
        } был понижен до прав модератора в клане ${utils.pick([
          `🤤`,
          `☺`,
          `🙂`,
          `😁`,
          `🤔`,
          `🤑`,
        ])}`
      );

      await vk.api.messages.send({
        user_id: user.id,

        message: `▶ Вас понизили до прав модератора в клане «${
          clans[message.user.clanid].name
        }» ${utils.pick([`🤤`, `☺`, `🙂`, `😁`, `😏`, `🤑`])}`,

        random_id: 0,
      });
    }
  }
);

oscrn(
  /^(?:рандом атака|⚔ Атаковать|атака рандом|Атаковать|клан атака|атака клан)$/i,
  async (message, bot) => {
    let smileng = utils.pick([
      `🌷`,
      `🌸`,
      `🌹`,
      `🌺`,
      `🌼`,
      `💐`,
      `❤️`,
      `💓`,
      `💕`,
    ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

    const clanid = message.user.clanid;

    if (!clanid)
      return bot(
        `вы не состоите в клане! ❌
♻️ Информация по командам: «клан помощь» 🛡️`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: "{}",

                    label: "🗡️ Клан помощь ♻️",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );

    if (message.user.clanid && message.user.questclan === false) {
      message.user.questclan = true;

      message.user.balance += 50000000000000;

      await bot(
        `Поздравляем, Вы состоите в клане и получаете 5О.ООО.ООО.ООО.ООО$`
      );
    }

    if (clans[clanid].users[message.user.uid].level < 2)
      return bot(`вы не создатель/администратор клана ❌`);

    if (clans[clanid].balance < 10000000000)
      return bot(
        `на балансе вашего клана меньше 10.000.000.000$ 💰❌
▶️ Пополните баланс клана на 10.000.000.000$ по команде «клан казна [сумма]» ❄️`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: '{"button": "5"}',

                    label: "🗡️ Клан помощь ♻️",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );

    if (clans[clanid].zashita < 100)
      return bot(
        `для проведения атак требуется минимум 100 армии в вашем клане! ❌`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: '{"button": "5"}',

                    label: "🗡️ Клан помощь ♻️",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );

    if (clans[clanid].exs > getUnix())
      return bot(`ваша армия слишком устала 😩
⏰ Новую атаку можно начать через ${unixStampLefta(
        clans[clanid].exs - Date.now()
      )} 🗡️`);

    const randclan = utils.random(1, botinfo.number);

    if (!clans[randclan])
      return bot(
        `Подходящий клан не найден, попробуй снова! 🤔${smileng}`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: '{"button": "5"}',

                    label: "⚔ Атаковать",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );

    if (clans[randclan].abramovich > getUnix())
      return bot(
        `Подходящий клан не был найден! ❌\n\n▶️ Попробуйте еще раз! 😃`,

        {
          keyboard: JSON.stringify({
            inline: true,

            buttons: [
              [
                {
                  action: {
                    type: "text",

                    payload: '{"button": "5"}',

                    label: "⚔ Атаковать",
                  },

                  color: "default",
                },
              ],
            ],
          }),
        }
      );

    let user = users.find((x) => x.uid === clans[randclan].owner.uid);

    let text = ``;

    if (clans[clanid].abramovich > getUnix())
      text = `\n\n🛡️ С Вашего клана был снят щит! ❌`;

    if (clans[randclan].balance < 10000000000) {
      const klmoney = utils.random(100000000, 10000000000);

      if (clans[clanid].zashita === clans[randclan].zashita) {
        return bot(
          `Подходящий клан не был найден! ❌\n\n▶️ Попробуйте еще раз! 😃`,

          {
            keyboard: JSON.stringify({
              inline: true,

              buttons: [
                [
                  {
                    action: {
                      type: "text",

                      payload: '{"button": "5"}',

                      label: "⚔ Атаковать",
                    },

                    color: "default",
                  },
                ],
              ],
            }),
          }
        );
      }

      setTimeout(async () => {
        message.send(
          `▶️ ➖ [id${message.user.id}|${message.user.tag}], Ваша армия готова к новой атаке!
✅ ➖ Атаковать: «Клан атака» ⚔️`,

          {
            keyboard: JSON.stringify({
              inline: true,

              buttons: [
                [
                  {
                    action: {
                      type: "text",

                      payload: '{"button": "67"}',

                      label: "⚔ Атаковать",
                    },

                    color: "default",
                  },
                ],
              ],
            }),
          }
        );
      }, 300001);

      if (clans[clanid].zashita < clans[randclan].zashita) {
        clans[clanid].abramovich = 5;

        clans[clanid].exs = getUnix() + 300000;

        //let rand = utils.random(1,5);

        let r = 1; //+ rand;

        clans[randclan].good += r;

        clans[randclan].retin += r;

        clans[randclan].balance += klmoney;

        clans[clanid].retin -= 1;

        clans[clanid].fuflo += 1;

        resul = Math.floor(clans[clanid].zashita * 0.1);

        clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9);

        resulk = Math.floor(resul * 0.5);

        clans[randclan].zashita -= resulk;

        bot(
          `ваш клан потерпел поражение перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resul)} армии ❌${text}`
        );

        if (user.notifications) {
          let smileng = utils.pick([
            `🌷`,
            `🌸`,
            `🌹`,
            `🌺`,
            `🌼`,
            `💐`,
            `❤️`,
            `💓`,
            `💕`,
          ]); //utils.pick([`☃️`,`🎄`,`❄️`,`🎅`]);

          await vk.api.messages.send({
            user_id: user.id,

            message: `⚔ Ваш клан одержал победу перед «${
              clans[clanid].name
            }», вы потеряли ${utils.sp(resulk)} армии, украдено: ${utils.sp(
              klmoney
            )}$ 💵💰
🔔 Отписаться от уведомлений: «уведомления выкл» ${smileng}`, //\n\n♻️ Сейчас действует ЗОЛОТОЙ ЧАС, добавлено за победу ещё ${rand} рейтинга 👑

            random_id: 0,
          });
        }
      } else {
        clans[clanid].abramovich = 5;

        clans[clanid].exs = getUnix() + 300000;

        //let rand = utils.random(1,5);

        let r = 1; //+ rand;

        clans[clanid].good += r;

        clans[clanid].retin += r;

        clans[clanid].balance += klmoney;

        clans[randclan].retin -= 1;

        clans[randclan].fuflo += 1;

        resulkk = Math.floor(clans[randclan].zashita * 0.1);

        clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9);

        resulkkk = Math.floor(resulkk * 0.5);

        clans[clanid].zashita -= resulkkk;

        bot(
          `ваш клан одержал победу перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
            klmoney
          )}$ ✅${text}`
        ); //\n\n♻️ Сейчас действует ЗОЛОТОЙ ЧАС, добавлено за победу ещё ${rand} рейтинга 👑

        if (user.notifications) {
          await vk.api.messages.send({
            user_id: user.id,

            message: `⚔ Ваш клан потерпел поражение перед «${
              clans[clanid].name
            }», вы потеряли ${utils.sp(resulkk)} армии ❌
🔔 Отписаться от уведомлений: «уведомления выкл» ${smileng}`,

            random_id: 0,
          });
        }
      }
    } else {
      if (clans[clanid].zashita === clans[randclan].zashita) {
        return bot(
          `Подходящий клан не был найден! ❌\n\n▶️ Попробуйте еще раз! 😃`,

          {
            keyboard: JSON.stringify({
              inline: true,

              buttons: [
                [
                  {
                    action: {
                      type: "text",

                      payload: '{"button": "5"}',

                      label: "⚔ Атаковать",
                    },

                    color: "default",
                  },
                ],
              ],
            }),
          }
        );
      }

      setTimeout(async () => {
        message.send(
          `▶️ ➖ [id${message.user.id}|${message.user.tag}], Ваша армия готова к новой атаке!
✅ ➖ Атаковать: «Клан атака» ⚔️`,

          {
            keyboard: JSON.stringify({
              inline: true,

              buttons: [
                [
                  {
                    action: {
                      type: "text",

                      payload: '{"button": "67"}',

                      label: "⚔ Атаковать",
                    },

                    color: "default",
                  },
                ],
              ],
            }),
          }
        );
      }, 300001);

      if (clans[clanid].zashita < clans[randclan].zashita) {
        const kpmoney = utils.random(1000000000, clans[clanid].balance);

        clans[clanid].abramovich = 5;

        clans[clanid].exs = getUnix() + 300000;

        //let rand = utils.random(1,5);

        let r = 1; //+ rand;

        clans[randclan].good += r;

        clans[randclan].retin += r;

        clans[randclan].balance += kpmoney;

        clans[clanid].balance -= kpmoney;

        clans[clanid].retin -= 1;

        clans[clanid].fuflo += 1;

        resul1 = Math.floor(clans[clanid].zashita * 0.1);

        clans[clanid].zashita = Math.floor(clans[clanid].zashita * 0.9);

        resulk1 = Math.floor(resul1 * 0.5);

        clans[randclan].zashita -= resulk1;

        bot(
          `ваш клан потерпел поражение перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resul1)} армии и ${utils.sp(
            kpmoney
          )}$ ❌${text}`
        );

        if (user.notifications) {
          await vk.api.messages.send({
            user_id: user.id,

            message: `⚔ Ваш клан одержал победу перед «${
              clans[clanid].name
            }», вы потеряли ${utils.sp(resulk1)} армии, украдено: ${utils.sp(
              kpmoney
            )}$ 💵💰
🔔 Отписаться от уведомлений: «уведомления выкл» ${smileng}`,

            random_id: 0,
          });
        }
      } else {
        const kpmoney1 = utils.random(100000000, clans[randclan].balance);

        clans[clanid].abramovich = 5;

        clans[clanid].exs = getUnix() + 300000;

        //let rand = utils.random(1,5);

        let r = 1; // + rand;

        clans[clanid].good += r;

        clans[clanid].retin += r;

        clans[clanid].balance += kpmoney1;

        clans[randclan].balance -= kpmoney1;

        clans[randclan].retin -= 1;

        clans[randclan].fuflo += 1;

        resulkk = Math.floor(clans[randclan].zashita * 0.1);

        clans[randclan].zashita = Math.floor(clans[randclan].zashita * 0.9);

        resulkkk = Math.floor(resulkk * 0.5);

        clans[clanid].zashita -= resulkkk;

        bot(
          `ваш клан одержал победу перед «${
            clans[randclan].name
          }», вы потеряли ${utils.sp(resulkkk)} армии, украдено: ${utils.sp(
            kpmoney1
          )}$ 💵💰${text}`
        );

        if (user.notifications) {
          await vk.api.messages.send({
            user_id: user.id,

            message: `⚔ Ваш клан потерпел поражение перед «${
              clans[clanid].name
            }», вы потеряли ${utils.sp(resulkk)} армии и ${utils.sp(
              kpmoney1
            )}$ ❌
?? Отписаться от уведомлений: «уведомления выкл»`,

            random_id: 0,
          });
        }
      }
    }
  }
);

oscrn(/^(?:Удалить титул)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.adm < 3) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока! ❌`);

  if (
    user.stock.status === "Администратор" ||
    user.stock.status === "Игрок" ||
    user.stock.status === "Premium" ||
    user.stock.status === "Джокер" ||
    user.stock.status === "Бизнесмен" ||
    user.stock.status === "VIP"
  )
    return bot(`У игрока нет титула!`);

  user.stock.status = "Удалённый титул";

  await bot(
    `Вы удалили титул игроку @id${user.id} (${user.tag}) 👤\n\n➖ Удаление статуса просто так — запрещено! ➖`
  );

  if (user.notifications)
    await vk.api.messages.send({
      user_id: user.id,

      message: `Нарушение правил титула! 😥
👤 Администратор @id${message.user.id}(${message.user.tag}) удалил Вам титул! ❌`,

      random_id: 0,
    });

  await vk.api.messages.send({
    chat_id: 1,
    forward_messages: message.id,
    message: `#УДАЛЕНИЕ - ТИТУЛА:
👤 Игроку: @id${user.id} (${user.tag})[ID: ${user.uid}]
▶ Удалил: @id${message.user.id} (${message.user.tag})[ID: ${message.user.uid}]`,
    random_id: 0,
  });
});

oscrn(/^(?:Купить титул)\s(.*)$/i, async (message, bot) => {
  if (
    message.args[1] === "Администратор" ||
    message.args[1] === "Гл. Администратор" ||
    message.args[1] === "Админ" ||
    message.args[1] === "Джокер" ||
    message.args[1] === "Бизнесмен"
  )
    return;

  if (message.args[1].length > 20)
    return bot(`титул не должен превышать 20-ти символов! 😥`);

  if (message.args[1].length < 3)
    return bot(`титул не должен быть меньше 3-х символов! 😥`);

  if (!message.user.settings.imperator) {
    if (message.user.balance <= 500000000000000)
      return bot(
        `Для покупки титула нужно иметь 500.000.000.000.000$ ❌\n\n💰 Ваш баланс: ${utils.sp(
          message.user.balance
        )}$ 💵`
      );

    message.user.balance -= 500000000000000;
  }

  message.user.stock.status = `${message.args[1]}`;

  return bot(
    `Вы успешно купили титул «${message.args[1]}» 😃\n🚫 Внимание! Титулы на подобии "Администратор", "Дауны" (оскорбительные) строго запрещены! За нарушение — удаление титула.`
  );
});

oscrn(/^(?:раздачапремкейсов)$/i, async (message) => {
  utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, `🤑`, `😯`]);

  utils.pick([`ровно сутки`, `ровно 24 часа`, `ровно 1 день`]);

  utils.pick([`аккаунт`, `профиль`]);

  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  vk.api.wall
    .post({
      owner_id: -228105719,

      message: `💰 За репост вы получите Премиум кейс ❗
💎С данного кейса падает TITAN VIP
🎁Этого кейса нет в продаже!
🔥Акция действует ровно сутки
💎Ваш профиль должен быть открыт,чтобы вы получили приз`,

      attachments: "photo-197579361_457305558",
    })
    .then((response) => {
      vk.api.wall.openComments({
        owner_id: -228105719,

        post_id: response.post_id,
      });

      vk.api.wall.createComment({
        owner_id: -228105719,

        post_id: response.post_id,

        from_group: 228105719,

        message:
          "🎂 Кейс будет выдан по окончании акции, страница должна быть открыта.",
      });

      vk.api.wall.closeComments({
        owner_id: -228105719,

        post_id: response.post_id,
      });
    });
});

oscrn(/^(?:работай бля)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  vk.api
    .call("wall.getReposts", {
      owner_id: -228105719,
      post_id: message.args[1],
      count: 1000,
    })
    .then((res) => {
      res.items.map((x) => {
        if (x.from_id < 0) return;

        let user = users.find((a) => a.id === x.from_id);

        if (!user) return;

        user.c9 += 3;

        vk.api.messages.send({
          user_id: user.id,
          message: `АКЦИЯ ОКОНЧЕНА! 😯
${
  user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
}, благодарю за участие в нашей раздаче! Вам на аккаунт зачислено 3 ПРЕМИУМ КЕЙСА! 📦✅
🎁 Использование по команде "Кейс открыть 9"`,
          random_id: 0,
        });
      });
    });
});

oscrn(/^(?:раздачасккейс)$/i, async (message) => {
  utils.pick(["🤤", "☺", `🙂`, `😁`, `😏`, `🤑`, `😯`]);

  utils.pick([`ровно сутки`, `ровно 24 часа`, `ровно 1 день`]);

  utils.pick([`аккаунт`, `профиль`]);

  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  vk.api.wall
    .post({
      owner_id: -228105719,

      message: `💰За репост вы получите 1 Секретный кейс💰
🔥Акция действует ровно сутки
💎Ваш профиль должен быть открыт,чтобы вы получили приз`,

      attachments: "photo-197579361_457256672",
    })
    .then((response) => {
      vk.api.wall.openComments({
        owner_id: -228105719,

        post_id: response.post_id,
      });

      vk.api.wall.createComment({
        owner_id: -228105719,

        post_id: response.post_id,

        from_group: 228105719,

        message:
          "🎂 Кейс будет выданы по окончании акции, страница должна быть открыта.",
      });

      vk.api.wall.closeComments({
        owner_id: -228105719,

        post_id: response.post_id,
      });
    });
});

oscrn(/^(?:раздачакейсовначать)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  vk.api
    .call("wall.getReposts", {
      owner_id: -228105719,
      post_id: message.args[1],
      count: 1000,
    })
    .then((res) => {
      res.items.map((x) => {
        if (x.from_id < 0) return;

        let user = users.find((a) => a.id === x.from_id);

        if (!user) return;

        user.c3 += 3;

        vk.api.messages.send({
          user_id: user.id,
          message: `АКЦИЯ ОКОНЧЕНА! 😯
		${
      user.mention ? `@id${user.id} (${user.tag})` : `${user.tag}`
    }, благодарю за участие в нашей раздаче! Вам на аккаунт зачислено 3 кейса ✅
		🎁 Использование по команде Кейс открыть 3"`,
          random_id: 0,
        });
      });
    });

  await vk.api.wall.openComments({
    owner_id: -228105719,

    post_id: message.args[1],
  });

  await vk.api.wall.createComment({
    owner_id: -228105719,

    post_id: message.args[1],

    from_group: 228105719,

    message:
      "✅ Раздача закончена, подпишись на уведомления, чтобы узнавать в числе первых о новых акциях!",
  });

  await vk.api.wall.closeComments({
    owner_id: -228105719,

    post_id: message.args[1],
  });
});

oscrn(/^(?:статистика)$/i, async (message, bot) => {
  return bot(`В боте зарегистрировано: ${utils.sp(
    users.length - 1
  )} ${utils.decl(users.length - 1, ["игрок", "игрока", "игроков"])}.
💬 Принято сообщений: ${utils.sp(botinfo.messagescount)}`);
});

oscrn(/^(?:админстатистика)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(`Статистика доступна только администраторам`);

  let summ = 0;

  users
    .filter((x) => x.balance > 0 && x.bantop === false)
    .map((x) => {
      summ += x.balance;
    });

  let bank = 0;

  users
    .filter((x) => x.bank > 0 && x.bantop === false)
    .map((x) => {
      bank += x.bank;
    });

  let btc = 0;

  users
    .filter((x) => x.btc > 0 && x.bantop === false)
    .map((x) => {
      btc += x.btc;
    });

  let rating = 0;

  users
    .filter((x) => x.rating > 0 && x.bantop === false)
    .map((x) => {
      rating += x.rating;
    });

  let rub = 0;

  users
    .filter((x) => x.rub > 0 && x.bantop === false)
    .map((x) => {
      rub += x.rub;
    });

  let sprcoin = 0;

  users
    .filter((x) => x.sprcoin > 0 && x.bantop === false)
    .map((x) => {
      sprcoin += x.sprcoin;
    });

  return bot(`
👋🏻 В боте зарегистрировано: ${utils.sp(users.length - 1)} ${utils.decl(
    users.length - 1,
    ["игрок", "игрока", "игроков"]
  )}.
💬 Сообщений обработано: ${utils.sp(botinfo.messagescount)}
💵 Общий баланс пользователей: ${utils.sp(summ)} $
💳 На счетах в банке: ${utils.sp(bank)} $
🌐 Общий баланс BTC у игроков: ${utils.sp(btc)} BTC
💲 Донат-рубли: ${utils.sp(rub)}₽
🏆 Рейтинг игроков: ${utils.sp(rating)}
☣️ Общий баланс SpringCoins у игроков: ${utils.sp(sprcoin)}`);
});

oscrn(/^(?:снять предупреждение)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  user.astats.warn -= 1;

  if (user.astats.warn < 0) {
    user.astats.warn = 0;
  }

  return bot(
    `предупреждение у @id${user.id}(администратора) было успешно снято!`
  );
});

oscrn(/^(?:спред)$/i, async (message, bot) => {
  if (
    message.user.id !== admin &&
    message.user.id !== admin2 &&
    message.user.settings.adm !== 4 &&
    adop.pred.indexOf(message.user.uid) === -1
  )
    /* Ваш игровой ID */ return;

  let senderId;

  // Если ответ на сообщение

  if (message.hasReplyMessage) {
    senderId = message.replyMessage.senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    user.astats.warn -= 1;

    if (user.astats.warn < 0) {
      user.astats.warn = 0;
    }

    return bot(`Предупреждение успешно снято! ✅
⚠️ У администратора теперь ${user.astats.warn}/5 предупреждений!`);
  } else if (message.hasForwards) {
    senderId = message.forwards[0].senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    user.astats.warn -= 1;

    if (user.astats.warn < 0) {
      user.astats.warn = 0;
    }

    return bot(`Предупреждение успешно снято! ✅
⚠️ У администратора теперь ${user.astats.warn}/5 предупреждений!`);
  }
});

oscrn(/^(?:впред)$/i, async (message, bot) => {
  if (
    message.user.id !== admin &&
    message.user.id !== admin2 &&
    message.user.settings.adm !== 4 &&
    adop.pred.indexOf(message.user.uid) === -1
  )
    /* Ваш игровой ID */ return;

  let senderId;

  // Если ответ на сообщение

  if (message.hasReplyMessage) {
    senderId = message.replyMessage.senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    user.astats.warn += 1;

    if (user.astats.warn >= 5) {
      user.astats.warn = 0;

      user.settings.adm = 0;
    }

    return bot(`Предупреждение успешно выдано! 😡
⚠️ У администратора теперь ${user.astats.warn}/5 предупреждений!`);
  } else if (message.hasForwards) {
    senderId = message.forwards[0].senderId;

    let user = users.find((x) => x.id === senderId);

    if (!user) return bot(`Неверный URL игрока!`);

    user.astats.warn += 1;

    if (user.astats.warn >= 5) {
      user.astats.warn = 0;

      user.settings.adm = 0;
    }

    return bot(`Предупреждение успешно выдано! 😡
⚠️ У администратора теперь ${user.astats.warn}/5 предупреждений!`);
  }
});

oscrn(/^(?:постфортуна)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  vk.api.wall
    .post({
      owner_id: -228105719,

      message: `🎂 Акция — «ФОРТУНА»!

✅ В общем будет 100 призов в акции!
🛍️ Призы:
• 1. Секретные кейсы
• 2. Донат-кейсы
• 3. Игровая валюта

⭐ Чтобы испытать свою удачу,напишите в комментариях «Фортуна»
❌ Если бот не отвечает - призы все равно придут.`,

      attachments: "photo-197579361_457253129",
    })
    .then((response) => {
      config.fortuna = response.post_id;

      config.fortunacount = 100;

      vk.api.wall.openComments({
        owner_id: -228105719,

        post_id: response.post_id,
      });
    });

  bot(`Пост Фортуна - успешно создан`);
});
/*
oscrn(/^(?:постграбёж)$/i, async (message, bot) => {

	if (message.user.id !== admin && message.user.id !== admin2)  Ваш игровой ID  return;

	vk.api.wall.post({

		owner_id: -228105719,

		message: `🎂 Акция — ГРАБЁЖ!

✅ В общем будет 10 призов в акции!
🛍️ Призы:
• 1. Секретные кейсы
• 2. Донат-кейсы
• 3. Игровая валюта

⭐ Чтобы испытать свою удачу,напишите в комментариях «Грабёж»
❌ Если бот не отвечает - призы все равно придут.`,

		attachments: 'photo-197579361_457253129'

	}).then((response) => {

		config.grabejpost = response.post_id;

		config.grabejcount = 100;

		vk.api.wall.openComments({

			owner_id: -228105719,

			post_id: response.post_id

		});

	});

	bot(`Пост грабёж - успешно создан`);

});*/

oscrn(
  /^(?:Правила|⚠️ Правила \(1 ч.\) ◀️|⏪ Правила №1)$/i,
  async (message, bot) => {
    return bot(
      `Общие:

* 1.1 Незнание правил не освобождает от ответственности.
* 1.2 Начав использовать бота Вы подтверждаете свое согласие с данными правилами.
* 1.3 Администрация не несет ответственности за временную или постоянную невозможность игры в бота конкретным лицом или группой лиц.
* 1.4 Ответственность несет владелец аккаунта, независимо от того, кто совершал действия под данным аккаунтом.
* 1.5 Написав боту, вы автоматически соглашаетесь на получение рассылок от бота.
* — означает то, что Вы при регистрации аккаунта уже соглашены с этими правилами.

Действия с аккаунтом:
2.1 Запрещена любая автоматизация действий в боте
⛔ Наказание: блокировка на 7 дней + частичное/полное обнуление

2.2 Запрещено предоставлять игрокам услуги, такие как продажа игровой валюты, обмен валюты между ботами, «буст» аккаунта и т.п.
⛔ Наказание: вечная блокировка,полное обнуление.

2.3 Запрещена покупка (или попытка покупки) валюты/статусов/внутриигровых предметов/«буста» аккаунта у игроков.
⛔ Наказание: вечная блокировка,полное обнуление.

2.4 Запрещен обман игроков и/или администрации.
⛔ Наказание: блокировка аккаунта на 7 дней.

2.5 Запрещено выдавать себя за администрацию проекта.
⛔ Наказание: блокировка аккаунта на 3 дня.

2.6 Запрещена продажа/покупка/передача аккаунтов (исключение: на аккаунт зашел близкий родственник).
⛔ Наказание: вечная блокировка, полное обнуление.

2.7 Запрещены махинации (попытки) оплатами.
⛔ Наказание: блокировка навсегда, полное обнуление.

2.8 Запрещено ставить титул на подобии "Администратор", "Основатель", а также в оскорбительной и рекламной форме.
⛔ Наказание: удаление титула (Повторное нарушение = блокировка на 7 дней).

2.9 Запрещено ставить оскорбительные ники, используя ненормативную лексику, или вызвать агрессию с помощью ника.
⛔ Наказание: блокировка на 7 дней.

Комментарии и беседы бота:
3.1 Запрещено оскорбление других участников и/или родителей.
⛔ Наказание: бан на 7 дней.

3.2 Запрещено рекламировать, оставлять ссылки (в том числе и гиперссылки) не относящихся к @club228105719.
⛔ Наказание: занесение в чёрный список группы / черный список бота.

Общение:
4.1 Запрещено оскорбление/затрагивание родных.
⛔ Наказание: блокировка на 7 дней.

4.2 Запрещено оскорбление администрации.
⛔ Наказание: блокировка на 7 дней.

4.3 Запрещен флуд/спам в репорт.
⛔ Наказание: блокировка репорта на 3 дня.

4.4 Ввод в заблуждение игроков.
⛔ Наказание: блокировка (кол-во дней - по усмотрению администрации).

4.5 Склонения к самоубийству (Призывы к суициду или нанесению себе увечий)
⛔ Наказание: вечная блокировка аккаунта, занесение в ЧС группы.

4.6 Враждебные высказывания (Выражение нетерпимости к людям из-за расы, национальности, вероисповедания, гендера, сексуальной ориентации и других признаков)
⛔ Наказание: блокировка на 30 дней (Повторное нарушение = блокировка навсегда).

4.7 Призывы к травле (Призывы применять физическую силу и унижать конкретного человека)
⛔ Наказание: вечная блокировка аккаунта, занесение в ЧС группы.

4.8 Любое упоминание/пропагандирование наркотических вещ-в, сильного табака.
⛔ Наказание: блокировка на 7 дней (Повторное нарушение = блокировка на 30 дней).

Пожертвования
5.1 Оплачивая что-либо в разделе "товары", Вы помогаете проекту в развитии и обязательно получаете вознаграждение в виде ИГРОВОЙ валюты.
5.2 Администрация не возвращает пожертвования и не переносит полученное вознаграждение на другой аккаунт.
5.3 Игровая валюта не имеет никакой привязки к реальным деньгам, не имеет никакой реальной фактической стоимости и используется исключительно для использования в рамках игрового процесса.
5.4 Покупка доната только через команду "Пополнить"

⚠️ 2 часть правил по кнопке ниже! 🔜`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚠️ Правила (2 ч.)",
                },
                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(
  /^(?:правила 2|правила (2ч.)|⚠️ Правила \(2 ч.\))$/i,
  async (message, bot) => {
    return bot(
      `Прочее

6.1 Запрещено преднамеренно использовать баги и недочеты бота.
⛔ Наказание: блокировка аккаунта, полное/частичное обнуление.

6.2 Запрещены попытки навредить боту или заблокировать его.
⛔ Наказание: вечная блокировка аккаунта, занесение в черный список группы.

6.3 Разжигание межнациональной розни (действия, направленные на возбуждение межнациональной или межрасовой вражды)
⛔ Наказание: вечная блокировка аккаунта, занесение в черный список группы.`,
      {
        keyboard: JSON.stringify({
          inline: true,
          buttons: [
            [
              {
                action: {
                  type: "text",
                  payload: "{}",
                  label: "⚠️ Правила (1 ч.) ◀️",
                },
                color: "default",
              },
            ],
          ],
        }),
      }
    );
  }
);

oscrn(/^(?:кн помощь|крестики нолики)$/i, async (message, bot) => {
  return bot(
    " помощь по игре крестики нолики:\n⚠Вы всегда ходите крестиком, бот ходит ноликом.\n⚠Кн начать - начать новую игру\n⚠Кн [1-9] - сделать ход (если игра не начата, она автоматически начнется)\n⚠ После каждой игры боту необходимо отдохнуть от 1 до 4 минут"
  );
});

oscrn(/^(?:кн начать)$/i, async (message, bot) => {
  if (message.user.timers.gamekn > Date.now())
    return bot(
      `Подождите ещё ${unixstampLefta(
        message.user.timers.gamekn - Date.now()
      )} для следующей игры! ⚠️`
    );

  let pole = [
    0, 0, 0,

    0, 0, 0,

    0, 0, 0,
  ];

  let txt;

  message.user.pole = pole;

  if (message.user.knbot === true) {
    message.user.knbot = false;

    txt = "Бот ходит первым! ( ⭕ )\n";

    let rn = utils.pick([4, 0, 2, 6, 8]);

    pole[rn] = 2;

    for (let i = 0; i < 9; i++) {
      if (pole[i] === 0) {
        txt += "⬛";
      } else if (pole[i] === 2) {
        txt += "⭕";
      }

      if (i === 2 || i === 5) {
        txt += "\n";
      }
    }

    return bot(txt);
  } else {
    /*message.user.knbot = true;

		txt += "игра в кн началась (❌)\n⬛⬛⬛\n⬛⬛⬛\n⬛⬛⬛";*/

    message.user.knbot = true;

    txt = "Игра в крестики-нолики началась, бот ходит первым ( ⭕ )\n";

    let rn = utils.pick([4, 0, 2, 6, 8]);

    pole[rn] = 2;

    for (let i = 0; i < 9; i++) {
      if (pole[i] === 0) {
        txt += "⬛";
      } else if (pole[i] === 2) {
        txt += "⭕";
      }

      if (i === 2 || i === 5) {
        txt += "\n";
      }
    }

    return bot(txt);
  }
});

oscrn(/^(?:кн)\s([1-9])$/i, async (message, bot) => {
  if (
    Number(message.args[1]) < 1 ||
    Number(message.args[1]) > 9 ||
    parseInt(message.args[1]) !== Number(message.args[1])
  ) {
    return bot("Использование: Кн [номер клетки]");
  }

  if (message.user.timers.gamekn > Date.now())
    return bot(
      `Подождите ещё ${unixstampLefta(
        message.user.timers.gamekn - Date.now()
      )} для следующей игры! ⚠️`
    );

  utils.pick([
    `🤘`,
    `💥`,
    `💣`,
    `😻`,
    `😏`,
    `🤒`,
    `🤔`,
    `💎`,
    `♻`,
    `🏆`,
    `🔥`,
    `🌚`,
    `👻`,
    `💀`,
    `🎄`,
    `🎃`,
    `🚀`,
    `🎱`,
    `🍼`,
    `🍺`,
    `🐔`,
    `🐉`,
    `🌝`,
  ]);

  let pole = [
    0, 0, 0,

    0, 0, 0,

    0, 0, 0,
  ];

  let txt = "";

  if (typeof message.user.pole != "object") {
    message.user.pole = pole;

    if (message.user.knbot === true) {
      message.user.knbot = false;

      txt = "Бот ходит первым ( ⭕ )\n";

      let rn = utils.pick([5, 0, 2, 6, 8]);

      pole[rn] = 2;

      for (let i = 0; i < 9; i++) {
        if (pole[i] === 0) {
          txt += "⬛";
        } else if (pole[i] === 2) {
          txt += "⭕";
        }

        if (i === 2 || i === 5) {
          txt += "\n";
        }
      }

      return bot(txt);
    } else {
      message.user.knbot = true;

      txt += "Игра в крестики-нолики началась! ( ❌ )\n⬛⬛⬛\n⬛⬛⬛\n⬛⬛⬛";

      return bot(txt);
    }
  } else {
    pole = message.user.pole;

    txt += "Ваш ход ( ❌ )";
  }

  if (pole[Number(message.args[1]) - 1] === 0) {
    pole[Number(message.args[1]) - 1] = 1;
  } else {
    txt = "клетка уже занята!!!\n";

    for (let i = 0; i < 9; i++) {
      if (pole[i] === 0) {
        txt += "⬛";
      } else if (pole[i] === 1) {
        txt += "❌";
      } else if (pole[i] === 2) {
        txt += "⭕";
      }

      if (i === 2 || i === 5) {
        txt += "\n";
      }
    }

    return bot(txt);
  }

  if (
    (pole[1] === 2 && pole[2] === 2 && pole[0] === 0) ||
    (pole[3] === 2 && pole[6] === 2 && pole[0] === 0) ||
    (pole[4] === 2 && pole[8] === 2 && pole[0] === 0)
  ) {
    pole[0] = 2;
  } else if (
    (pole[0] === 1 && pole[4] === 2 && pole[8] === 1 && pole[1] === 0) ||
    (pole[2] === 1 && pole[4] === 2 && pole[6] === 1 && pole[1] === 0) ||
    (pole[0] === 2 && pole[2] === 2 && pole[1] === 0) ||
    (pole[4] === 2 && pole[7] === 2 && pole[1] === 0)
  ) {
    pole[1] = 2;
  } else if (
    (pole[0] === 2 && pole[1] === 2 && pole[2] === 0) ||
    (pole[5] === 2 && pole[8] === 2 && pole[2] === 0) ||
    (pole[4] === 2 && pole[6] === 2 && pole[2] === 0)
  ) {
    pole[2] = 2;
  } else if (
    (pole[4] === 2 && pole[5] === 2 && pole[3] === 0) ||
    (pole[0] === 2 && pole[6] === 2 && pole[3] === 0)
  ) {
    pole[3] = 2;
  } else if (
    (pole[1] === 2 && pole[7] === 2 && pole[4] === 0) ||
    (pole[3] === 2 && pole[5] === 2 && pole[4] === 0) ||
    (pole[0] === 2 && pole[8] === 2 && pole[4] === 0) ||
    (pole[2] === 2 && pole[6] === 2 && pole[4] === 0)
  ) {
    pole[4] = 2;
  } else if (
    (pole[2] === 2 && pole[8] === 2 && pole[5] === 0) ||
    (pole[3] === 2 && pole[4] === 2 && pole[5] === 0)
  ) {
    pole[5] = 2;
  } else if (
    (pole[4] === 2 && pole[2] === 2 && pole[6] === 0) ||
    (pole[8] === 2 && pole[7] === 2 && pole[6] === 0)
  ) {
    pole[6] = 2;
  } else if (
    (pole[6] === 2 && pole[8] === 2 && pole[7] === 0) ||
    (pole[4] === 2 && pole[1] === 2 && pole[7] === 0)
  ) {
    pole[7] = 2;
  } else if (
    (pole[0] === 2 && pole[4] === 2 && pole[8] === 0) ||
    (pole[6] === 2 && pole[7] === 2 && pole[8] === 0) ||
    (pole[5] === 2 && pole[2] === 2 && pole[8] === 0)
  ) {
    pole[8] = 2;
  } else if (
    (pole[1] === 1 && pole[2] === 1 && pole[0] === 0) ||
    (pole[3] === 1 && pole[6] === 1 && pole[0] === 0) ||
    (pole[4] === 1 && pole[8] === 1 && pole[0] === 0)
  ) {
    pole[0] = 2;
  } else if (
    (pole[0] === 1 && pole[2] === 1 && pole[1] === 0) ||
    (pole[4] === 1 && pole[7] === 1 && pole[1] === 0)
  ) {
    pole[1] = 2;
  } else if (
    (pole[0] === 1 && pole[1] === 1 && pole[2] === 0) ||
    (pole[5] === 1 && pole[8] === 1 && pole[2] === 0) ||
    (pole[4] === 1 && pole[6] === 1 && pole[2] === 0)
  ) {
    pole[2] = 2;
  } else if (
    (pole[4] === 1 && pole[5] === 1 && pole[3] === 0) ||
    (pole[0] === 1 && pole[6] === 1 && pole[3] === 0)
  ) {
    pole[3] = 2;
  } else if (
    (pole[1] === 1 && pole[7] === 1 && pole[4] === 0) ||
    (pole[3] === 1 && pole[5] === 1 && pole[4] === 0) ||
    (pole[0] === 1 && pole[8] === 1 && pole[4] === 0) ||
    (pole[2] === 1 && pole[6] === 1 && pole[4] === 0)
  ) {
    pole[4] = 2;
  } else if (
    (pole[2] === 1 && pole[8] === 1 && pole[5] === 0) ||
    (pole[3] === 1 && pole[4] === 1 && pole[5] === 0)
  ) {
    pole[5] = 2;
  } else if (
    (pole[0] === 1 && pole[3] === 1 && pole[6] === 0) ||
    (pole[7] === 1 && pole[8] === 1 && pole[6] === 0) ||
    (pole[4] === 1 && pole[2] === 1 && pole[6] === 0)
  ) {
    pole[6] = 2;
  } else if (
    (pole[6] === 1 && pole[8] === 1 && pole[7] === 0) ||
    (pole[4] === 1 && pole[1] === 1 && pole[7] === 0)
  ) {
    pole[7] = 2;
  } else if (
    (pole[0] === 1 && pole[4] === 1 && pole[8] === 0) ||
    (pole[6] === 1 && pole[7] === 1 && pole[8] === 0) ||
    (pole[5] === 1 && pole[2] === 1 && pole[8] === 0)
  ) {
    pole[8] = 2;
  } else if (pole[1] === 1 && pole[3] === 1 && pole[0] === 0) {
    pole[0] = 2;
  } else if (pole[1] === 1 && pole[5] === 1 && pole[2] === 0) {
    pole[2] = 2;
  } else if (pole[3] === 1 && pole[7] === 1 && pole[6] === 0) {
    pole[6] = 2;
  } else if (pole[5] === 1 && pole[7] === 1 && pole[8] === 0) {
    pole[8] = 2;
  } else {
    if (pole[4] === 0) {
      pole[4] = 2;
    } else if (pole[0] === 0) {
      pole[0] = 2;
    } else if (pole[2] === 0) {
      pole[2] = 2;
    } else if (pole[6] === 0) {
      pole[6] = 2;
    } else if (pole[8] === 0) {
      pole[8] = 2;
    } else if (pole[1] === 0) {
      pole[1] = 2;
    } else if (pole[3] === 0) {
      pole[3] = 2;
    } else if (pole[5] === 0) {
      pole[5] = 2;
    } else if (pole[7] === 0) {
      pole[7] = 2;
    }
  }

  message.user.pole = pole;

  txt += "\n";

  if (
    (pole[0] === 1 && pole[1] === 1 && pole[2] === 1) ||
    (pole[3] === 1 && pole[4] === 1 && pole[5] === 1) ||
    (pole[6] === 1 && pole[7] === 1 && pole[8] === 1) ||
    (pole[0] === 1 && pole[3] === 1 && pole[6] === 1) ||
    (pole[1] === 1 && pole[4] === 1 && pole[7] === 1) ||
    (pole[2] === 1 && pole[5] === 1 && pole[8] === 1) ||
    (pole[0] === 1 && pole[4] === 1 && pole[8] === 1) ||
    (pole[2] === 1 && pole[4] === 1 && pole[6] === 1)
  ) {
    txt = `😃 Вы ВЫИГРАЛИ!\n\n💰 На Ваш баланс зачисленно 1.000.000.000.000$\n`;

    message.user.balance += 1000000000000;

    message.user.timers.gamekn = Date.now() + 240000;

    if (
      message.user.questallfucker &&
      typeof message.user.questtictactoe2 === "number"
    )
      message.user.questtictactoe2 += 1;

    message.user.pole = false;

    if (typeof message.user.questtictactoe === "number") {
      message.user.questtictactoe = true;

      message.user.questtictactoe = true;

      await bot(
        `Поздравляем, Вы выиграли в крестики нолики и получили 📦 1 Донат-кейс.`
      );

      message.user.c3 += 1;
    }

    if (
      typeof message.user.questtictactoe2 === "number" &&
      message.user.questtictactoe2 === 150
    ) {
      message.user.questtictactoe2 = true;

      message.user.questtictactoe2 = true;

      await bot(
        `Поздравляем, Вы выиграли в крестики нолики и получили 📦 2 Донат-кейса.`
      );

      message.user.c3 += 2;
    }
  } else if (
    (pole[0] === 2 && pole[1] === 2 && pole[2] === 2) ||
    (pole[3] === 2 && pole[4] === 2 && pole[5] === 2) ||
    (pole[6] === 2 && pole[7] === 2 && pole[8] === 2) ||
    (pole[0] === 2 && pole[3] === 2 && pole[6] === 2) ||
    (pole[1] === 2 && pole[4] === 2 && pole[7] === 2) ||
    (pole[2] === 2 && pole[5] === 2 && pole[8] === 2) ||
    (pole[0] === 2 && pole[4] === 2 && pole[8] === 2) ||
    (pole[2] === 2 && pole[4] === 2 && pole[6] === 2)
  ) {
    txt = `😕 К сожалению, Вы проиграли! Бот победил. 🥺\n`;

    message.user.timers.gamekn = Date.now() + 60000;

    message.user.pole = false;
  } else if (
    pole[0] !== 0 &&
    pole[1] !== 0 &&
    pole[2] !== 0 &&
    pole[3] !== 0 &&
    pole[4] !== 0 &&
    pole[5] !== 0 &&
    pole[6] !== 0 &&
    pole[7] !== 0 &&
    pole[8] !== 0
  ) {
    txt = "ничья\n";

    message.user.timers.gamekn = Date.now() + 60000;

    message.user.pole = false;
  }

  for (let i = 0; i < 9; i++) {
    if (pole[i] === 0) {
      txt += "⬛";
    } else if (pole[i] === 1) {
      txt += "❌";
    } else if (pole[i] === 2) {
      txt += "⭕";
    }

    if (i === 2 || i === 5) {
      txt += "\n";
    }
  }

  return bot(txt);
});

oscrn(
  /^(?:дайвинг|плавать|🎏 дайвинг|🎣 плавать|🎣 дайвинг|🐠 Дайвинг|🐠 Дайвинг!)$/i,
  async (message, bot) => {
    if (message.user.timers.daiving > Date.now())
      return bot(
        `отправиться на дайвинг можно будет через ${unixStampLefta(
          message.user.timers.daiving - Date.now()
        )} 🙂`
      );

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 1) {
          message.user.timers.daiving = Date.now() + 480000;
        } else {
          message.user.timers.daiving = Date.now() + 600000;
        }
      }
    } else {
      message.user.timers.daiving = Date.now() + 600000;
    }

    if (message.user.settings.topdon) {
      message.user.timers.daiving = Date.now() + 120000;
    }

    if (message.user.settings.king) {
      message.user.timers.daiving = Date.now() + 60000;
    }

    let prize = utils.pick([1, 2, 2, 3, 4]);

    let denyushka = 0;

    denyushka += utils.pick([
      2500000000000, 25000000000, 50000000000, 250000000000,
    ]);

    if (prize === 1) {
      message.user.balance += denyushka;

      bot(
        `вы отправились в плавание на 150 метров 🐬, и Вам удалось сделать неплохие снимки разных рыб.

💰 За снимки Вам заплатили ${utils.sp(denyushka)}$`,
        { attachment: "photo-192023992_467239154" }
      );
    }

    if (prize === 2) {
      message.user.balance += denyushka;

      bot(
        `вам удалось заплыть довольно далеко 🐋, Вы успели поймать редкий вид рыбы.

💰 За находку Вам заплатили: ${utils.sp(denyushka)}$`,
        { attachment: "photo-192023992_467239155" }
      );
    }

    if (prize === 3) {
      message.user.balance -= 1000000;

      bot(
        `вы попытались заплытить поглубже, но Вам повстречалась акула 🦈.

❤ За лечение Вы заплатили 1.000.000$`,
        { attachment: "photo-192023992_467239156" }
      );
    }

    if (prize === 4) {
      message.user.balance += 10000000000;

      bot(
        `Вы заплыли очень далеко, и поймали очень редкий вид рыбы.

💰 За находку Вам заплатили: 10.000.000.000$`,
        { attachment: "photo-183294592_457239281" }
      );
    }

    if (prize === 5) {
      bot(
        `Вы решили поверить в себя, и поплыли не в ту сторону.\n\n🦑 Медуза ужалила вас в ногу и вы ничего не получили.`,
        { attachment: "photo-192023992_467239157" }
      );
    }
  }
);

oscrn(
  /^(?:охота|🏹 Охота|охотиться|сходить поохотиться|🏹 Охотиться|🏹 Охотиться!|🏹 Охота!)$/i,
  async (message, bot) => {
    if (message.user.timers.ohota > Date.now())
      return bot(
        `отправиться на дайвинг можно будет через ${unixStampLefta(
          message.user.timers.ohota - Date.now()
        )} 🏹 🦌`
      );

    if (message.isChat) {
      if (chats[message.chatId]) {
        if (chats[message.chatId].statuemsglvl >= 1) {
          message.user.timers.ohota = Date.now() + 480000;
        } else {
          message.user.timers.ohota = Date.now() + 600000;
        }
      }
    } else {
      message.user.timers.ohota = Date.now() + 600000;
    }

    if (message.user.settings.topdon) {
      message.user.timers.daiving = Date.now() + 120000;
    }

    if (message.user.settings.king) {
      message.user.timers.ohota = Date.now() + 60000;
    }

    let prize = utils.pick([1, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6]);

    if (prize === 1) {
      message.user.balance += 30000000000;

      return bot(
        `вы сходили на охоту в лес, и Вам удалось застрелить местного медведя 🐻

💰 За шкуру Вам заплатили 30.000.000.000$`,
        { attachment: "photo-192023992_467239161" }
      );
    }

    if (prize === 2) {
      message.user.balance += 100000000000;

      return bot(
        `пока Вы блуждали по лесу, Вы неожиданно встретили лису 🦊

💰 За хороший мех лисы Вам заплатили 100.000.000.000$`,
        { attachment: "photo-192023992_467239162" }
      );
    }

    if (prize === 3) {
      message.user.balance += 120000000000;

      return bot(
        `Вы зашли далеко в лес, и нашли очень дорогого зверька.

🦇 Вам заплатили за его снимки 120.000.000.000$`,
        { attachment: "photo-183294592_457239280" }
      );
    }

    if (prize === 4) {
      return bot(
        `вы решили пойти не в ту сторону леса, и наткнулись на дикого кабана. Вы выстрелили всю обойму, но кабан успел убежать 🏹

💰 Вам ничего не заплатили.`,
        { attachment: "photo-192023992_467239163" }
      );
    }

    if (prize === 5) {
      message.user.balance -= 25000000;

      return bot(
        `пока Вы болтали со своим партнёром по охоте, на Вас внезапно набросился свирепый волк 🐺

🧰 За лечение Вы заплатили 25.000.000$`,
        { attachment: "photo-192023992_467239164" }
      );
    }

    if (prize === 6) {
      message.user.balance -= 5000000;

      return bot(
        `Вы блуждали по лесу в поисках животины, но Вас неожиданно поймала лесная полиция за ловлю животных в не предназначенном для этого места 🚨

🆘 Вам пришлось заплатить штраф 5.000.000$ 🚨`,
        { attachment: "photo-192023992_467239165" }
      );
    }
  }
);

oscrn(/^(?:квесты|квест)$/i, async (message, bot) => {
  if (message.user.sataka >= 5000 && message.user.questbosspower2 === false) {
    await bot(
      `Ваша сила больше 5000, вы получаете бонус за свою силу в виде 500трлн$`
    );

    message.user.balance += 500000000000000;

    message.user.questbosspower2 = true;
  }

  if (
    message.user.questcasino === true &&
    message.user.questcup === true &&
    message.user.questrussion === true &&
    message.user.questracer === true &&
    message.user.questdonat === true &&
    message.user.questminer === true &&
    message.user.questbrak === true &&
    message.user.questhack === true &&
    message.user.questclan === true &&
    message.user.questautosound === true &&
    message.user.questtictactoe === true &&
    message.user.questfollow === true &&
    message.user.questdamagedealer === true &&
    message.user.questbosspower === true &&
    message.user.questallfucker === false
  ) {
    await bot(`Вы выполнили все квесты и получаете секретный кейс`);

    message.user.c6 += 1;

    message.user.questallfucker = true;
  }

  if (
    message.user.questbasket === true &&
    message.user.questcup2 === true &&
    message.user.questrussion2 === true &&
    message.user.questracer2 === true &&
    message.user.questdonat2 === true &&
    message.user.questminer2 === true &&
    message.user.questpremcase === true &&
    message.user.questhack2 === true &&
    message.user.questtrade === true &&
    message.user.questautosound2 === true &&
    message.user.questtictactoe2 === true &&
    message.user.questtaxi === true &&
    message.user.questdamagedealer2 === true &&
    message.user.questbosspower2 === true &&
    message.user.questallfucker === true &&
    message.user.questallfucker2 === false
  ) {
    await bot(
      `Вы выполнили все квесты второй линии и получаете премиум посылку`
    );

    message.user.possilka3 += 1;

    message.user.questallfucker2 = true;
  }

  let text = ``;

  if (!message.user.questallfucker) {
    text += message.user.questcasino === true ? `✔️` : `✖️`;

    text += ` 1. 5 раз подряд выиграть в казино\n🎁 Приз: 1 донат кейс\n`;

    text += message.user.questcup === true ? `✔️` : `✖️`;

    text += ` 2. 3 раза подряд отгадать стаканчик\n🎁 Приз: 50трлн$\n`;

    text += message.user.questrussion === true ? `✔️` : `✖️`;

    text += ` 3. 4 раза подряд выиграть в русскую рулетку\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questracer === true ? `✔️` : `✖️`;

    text += ` 4. 5 раз участвовать в гонке\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questdonat === true ? `✔️` : `✖️`;

    text += ` 5. открыть 5 донат-кейсов\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questminer === true ? `✔️` : `✖️`;

    text += ` 6. 50 раз копать руду\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questbrak === true ? `✔️` : `✖️`;

    text += ` 7. Вступить в брак\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questhack === true ? `✔️` : `✖️`;

    text += ` 8. открыть 2 сейфа\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questclan === true ? `✔️` : `✖️`;

    text += ` 9. Вступить в клан\n🎁 Приз: 50трлн$\n`;

    text += message.user.questautosound === true ? `✔️` : `✖️`;

    text += ` 10. Учавствовать в соревнованиях по автозвуку 5 раз\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questtictactoe === true ? `✔️` : `✖️`;

    text += ` 11. Выиграть в крестики нолики\n🎁 Приз: 1 донат-кейс\n`;

    text += message.user.questfollow === true ? `✔️` : `✖️`;

    text += ` 12. Подписаться на группу\n🎁 Приз: 25трлн$\n`;

    text += message.user.questdamagedealer === true ? `✔️` : `✖️`;

    text += ` 13. Нанести 250тыс. урона боссу\n🎁 Приз: 50трлн$\n`;

    text += message.user.questbosspower === true ? `✔️` : `✖️`;

    text += ` 14. Прокачать силу удара (босса) до 700\n🎁 Приз: 250трлн$\n`;

    text += message.user.questallfucker === true ? `✔️` : `✖️`;

    text += ` 15. Пройти все квесты\n🎁 Приз: 1 секретный кейс\n`;

    return bot(`одноразовые квесты:\n${text}`);
  } else {
    text += message.user.questbasket === true ? `✔️` : `✖️`;

    if (typeof message.user.questbasket === "number")
      text += ` 1. 100 раз сыграть в баскетбол\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questbasket}/100]\n`; //+

    if (typeof message.user.questbasket != "number")
      text += ` 1. 100 раз сыграть в баскетбол\n🎁 Приз: 2 донат кейса\n`; //+

    text += message.user.questcup2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questcup2 === "number")
      text += ` 2. 50 раз отгадать стаканчик\n🎁 Приз: 100трлн$\n🤖Прогресс: [${message.user.questcup2}/50]\n`; // +

    if (typeof message.user.questcup2 != "number")
      text += ` 2. 50 раз отгадать стаканчик\n🎁 Приз: 100трлн$\n`;

    text += message.user.questrussion2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questrussion2 === "number")
      text += ` 3. 100 раз сыграть в русскую рулетку\n🎁 Приз: 4 донат кейса\n🤖Прогресс: [${message.user.questrussion2}/100]\n`; // +

    if (typeof message.user.questrussion2 != "number")
      text += ` 3. 100 раз сыграть в русскую рулетку\n🎁 Приз: 4 донат кейса\n`;

    text += message.user.questracer2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questracer2 === "number")
      text += ` 4. 500 раз участвовать в гонке\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questracer2}/500]\n`; // +

    if (typeof message.user.questracer2 != "number")
      text += ` 4. 500 раз участвовать в гонке\n🎁 Приз: 2 донат кейса\n`; // +

    text += message.user.questdonat2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questdonat2 === "number")
      text += ` 5. открыть 50 донат-кейсов\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questdonat2}/50]\n`; // +

    if (typeof message.user.questdonat2 != "number")
      text += ` 5. открыть 50 донат-кейсов\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questminer2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questminer2 === "number")
      text += ` 6. 5000 раз копать руду\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questminer2}/5000]\n`; //+

    if (typeof message.user.questminer2 != "number")
      text += ` 6. 5000 раз копать руду\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questtrade === true ? `✔️` : `✖️`;

    if (typeof message.user.questtrade === "number")
      text += ` 7. 50 раз сыграть в трейд\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questtrade}/50]\n`;

    if (typeof message.user.questtrade != "number")
      text += ` 7. 50 раз сыграть в трейд\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questhack2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questhack2 === "number")
      text += ` 8. открыть 20 сейфов\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questhack2}/20]\n`;

    if (typeof message.user.questhack2 != "number")
      text += ` 8. открыть 20 сейфов\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questtaxi === true ? `✔️` : `✖️`;

    if (typeof message.user.questtaxi === "number")
      text += ` 9. 500 раз попрошайничать\n🎁 Приз: 100трлн$\n🤖Прогресс: [${message.user.questtaxi}/500]\n`; // +

    if (typeof message.user.questtaxi != "number")
      text += ` 9. 500 раз попрошайничать\n🎁 Приз: 100трлн$\n`;

    text += message.user.questautosound2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questautosound2 === "number")
      text += ` 10. Учавствовать в соревнованиях по автозвуку 500 раз\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questautosound2}/500]\n`; // +

    if (typeof message.user.questautosound2 != "number")
      text += ` 10. Учавствовать в соревнованиях по автозвуку 500 раз\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questtictactoe2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questtictactoe2 === "number")
      text += ` 11. Выиграть в крестики нолики 150 раз\n🎁 Приз: 2 донат кейса\n🤖Прогресс: [${message.user.questtictactoe2}/150]\n`; // +

    if (typeof message.user.questtictactoe2 != "number")
      text += ` 11. Выиграть в крестики нолики 150 раз\n🎁 Приз: 2 донат кейса\n`;

    text += message.user.questpremcase === true ? `✔️` : `✖️`;

    text += ` 12. Открыть премиум кейс\n  приз: 50трлн$\n`; // +

    text += message.user.questdamagedealer2 === true ? `✔️` : `✖️`;

    if (typeof message.user.questdamagedealer2 === "number")
      text += ` 13. Нанести 1 млн урона боссу\n🎁 Приз: 100трлн$\n🤖Прогресс: [${message.user.questdamagedealer2}/1.000.000]\n`; // +

    if (typeof message.user.questdamagedealer2 != "number")
      text += ` 13. Нанести 1 млн урона боссу\n🎁 Приз: 100трлн$\n`;

    text += message.user.questbosspower2 === true ? `✔️` : `✖️`;

    text += ` 14. Прокачать силу удара (босса) до 5000 ед.\n🎁 Приз: 500трлн$\n`; // +

    text += message.user.questallfucker2 === true ? `✔️` : `✖️`;

    text += ` 15. Пройти все квесты\n🎁 Приз: премиум посылка\n `; // +

    return bot(`Вторая линия квестов:\n${text}`);
  }
});

oscrn(/^(?:стаканчик)\s([1-3])\s(.*)$/i, async (message, bot) => {
  message.args[2] = message.args[2].replace(/(\.|\,)/gi, "");

  message.args[2] = message.args[2].replace(/(к|k)/gi, "000");

  message.args[2] = message.args[2].replace(/(м|m)/gi, "000000");

  message.args[2] = message.args[2].replace(
    /(вабанк|вобанк|все|всё)/gi,
    message.user.balance
  );

  utils.pick(["😇"]);

  utils.pick(["🙂", "😃", "😄", "🤑", "☺"]);

  utils.pick(["😕", "😔", "😫"]);

  if (!Number(message.args[2])) return;

  message.args[2] = Math.floor(Number(message.args[2]));

  if (message.args[2] <= 0) return;

  if (message.args[2] > message.user.balance)
    return bot(`у Вас недостаточно денег! 💰❌



💵 Ваш баланс: ${utils.sp(message.user.balance)}$ ❄️`);
  else if (message.args[2] <= message.user.balance) {
    message.user.balance -= message.args[2];

    const multiply = utils.pick([1.95, 1.9, 1.85, 1.8, 1.75, 1.7, 1.65]);

    const cup = utils.random(1, 3);

    if (cup === message.args[1]) {
      if (typeof message.user.questcup === "number") {
        message.user.questcup++;

        if (message.user.questallfucker === true) message.user.questcup2++;

        if (message.user.questcup >= 3) {
          message.user.questcup = true;

          await bot(
            `Поздравляем, Вы 3 раза выиграли в стаканчике и получаете 5О.ООО.ООО.ООО.ООО$`
          );

          message.user.balance += 50000000000000;
        }

        if (message.user.questcup2 >= 50) {
          message.user.questcup2 = true;

          await bot(
            `Поздравляем, Вы 50 раз выиграли в стаканчике и получаете 1ОО.ООО.ООО.ООО.ООО$`
          );

          message.user.balance += 100000000000000;
        }
      }

      if (typeof message.user.questcup2 === "number") {
        if (message.user.questallfucker === true) message.user.questcup2++;

        if (message.user.questcup2 >= 50) {
          message.user.questcup2 = true;

          await bot(
            `Поздравляем, Вы 50 раз выиграли в стаканчике и получаете 1ОО.ООО.ООО.ООО.ООО$`
          );

          message.user.balance += 100000000000000;
        }
      }

      message.user.balance += Math.floor(message.args[2] * multiply);

      return bot(
        `вы угадали! 🎊\n✅ Приз ${utils.sp(
          Math.floor(message.args[2] * multiply)
        )}$ 💵`
      );
    } else {
      if (typeof message.user.questcup === "number") {
        message.user.questcup = 0;
      }

      return bot(`НЕУСПЕШНО! ❌\n\n🥛 Это был ${cup}-ый стаканчик. 😡`);
    }
  }
});

oscrn(/^(?:беседы)$/i, async (message, bot) => {
  return bot(
    `наши официальные беседы 🔥\n\n✅ Беседа №1: https://vk.me/join/AJQ1d7ctRiIoKYlT84TaMWBE ♻️`
  );
});

oscrn(/^(?:стату(я|и))$/i, async (message, bot) => {
  return bot(
    `Список статуй:

💰 Статуя денег
💬 Статуя актива
👥 Статуя людей

🎁 При полной прокачки всех 3-х статуй, можно получить подарок «статуя подарок»`,
    {
      attachment: "photo-197579361_457262063",
      keyboard: JSON.stringify({
        inline: true,

        buttons: [
          [
            {
              action: {
                type: "text",

                payload: '{"button": "1"}',

                label: "Статуя денег",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "Статуя актива",
              },

              color: "default",
            },
          ],

          [
            {
              action: {
                type: "text",

                payload: "{}",

                label: "Статуя людей",
              },

              color: "default",
            },
          ],
        ],
      }),
    }
  );
});

oscrn(/^(?:стату(я|и))\s(денег|мажора)$/i, async (message, bot) => {
  if (message.isChat) {
    if (chats[message.chatId].statuemoneylvl === 0)
      return bot(
        `Статуя денег:

✨ Текущий уровень: 0
🏆 Прогресс: ${utils.sp(
          chats[message.chatId].statuemoney
        )}/1.000.000.000.000.000$
🏅 Бонусы: отсутствуют`,
        { attachment: "photo-197579361_457262064" }
      );

    if (chats[message.chatId].statuemoneylvl === 1)
      return bot(
        `Статуя денег:

✨ Текущий уровень: 1
🏆 Прогресс: ${utils.sp(
          chats[message.chatId].statuemoney
        )}/50.000.000.000.000.000$
🏅 Бонусы:

🏢 -1% налогов`,
        { attachment: "photo-197579361_457262064" }
      );

    if (chats[message.chatId].statuemoneylvl === 2)
      return bot(
        `Статуя денег:

✨ Текущий уровень: 2
🏆 Прогресс: ${utils.sp(
          chats[message.chatId].statuemoney
        )}/500.000.000.000.000.000$
🏅 Бонусы:

🏢 -3% налогов`,
        { attachment: "photo-197579361_457262064" }
      );

    if (chats[message.chatId].statuemoneylvl === 3)
      return bot(
        `Статуя денег:

✨Текущий уровень: 3
🏆 Прогресс: Максимальное улучшение
🏅Бонусы:

	🏢✅ Убран весь налог с казино`,
        { attachment: "photo-197579361_457262064" }
      );
  }
});

oscrn(/^(?:стату(я|и))\s(актива|сообщений)$/i, async (message, bot) => {
  if (message.isChat) {
    if (chats[message.chatId].statuemsglvl === 0)
      return bot(
        `Статуя актива:

✨ Текущий уровень: 0
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuemsg)}/10.000
🏅 Бонусы: отсутствуют`,
        { attachment: "photo-197579361_457262061" }
      );

    if (chats[message.chatId].statuemsglvl === 1)
      return bot(
        `Статуя актива:

✨ Текущий уровень: 1
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuemsg)}/100.000
🏅 Бонусы:

⏰ Уменьшение кулдауна гонки/автозвук/дайвинг/охота на 2 минуты`,
        { attachment: "photo-197579361_457262061" }
      );

    if (chats[message.chatId].statuemsglvl === 2)
      return bot(
        `Статуя актива:

✨ Текущий уровень: 2
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuemsg)}/500.000
🏅 Бонусы:

⏰ Уменьшение кулдауна гонки/автозвук/дайвинг/охота на 2 минуты
💎 Увеличение количества добываемых ресурсов в 1.5 раза`,
        { attachment: "photo-197579361_457262061" }
      );

    if (chats[message.chatId].statuemsglvl === 3)
      return bot(
        `Статуя актива:

✨ Текущий уровень: 3
🏆 Прогресс: Максимальное улучшение
🏅 Бонусы:

⏰ Уменьшение кулдауна гонки/автозвук/дайвинг/охота на 2 минуты
💎 Увеличение количества добываемых ресурсов в 1.5 раза
⚡ Атака на босса тратит 1 энергию
⛏️ Копание Материи/обсидиана требует 1 энергию, плазмы - 3 энергии`,
        { attachment: "photo-197579361_457262061" }
      );
  }
});

oscrn(/^(?:стату(я|и))\s(людей|участников)$/i, async (message, bot) => {
  if (message.isChat) {
    if (chats[message.chatId].statuepeoplelvl === 0)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 0
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/10
🏅 Бонусы: отсутствуют`,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 1)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 1
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/25
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино `,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 2)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 2
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/50
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино
🎰 Добавлен коэффициент x100 в казино`,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 3)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 3
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/60
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино
🎰 Добавлен коэффициент x100 в казино
🎰 Добавлен коэффициент x200 в казино`,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 4)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 4
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/80
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино
🎰 Добавлен коэффициент x100 в казино
🎰 Добавлен коэффициент x200 в казино
👊 Бонус к урону по боссу`,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 5)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 5
🏆 Прогресс: ${utils.sp(chats[message.chatId].statuepeople)}/100
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино
🎰 Добавлен коэффициент x100 в казино
🎰 Добавлен коэффициент x200 в казино
👊 Бонус к урону по боссу
🔮 Шанс выпадение листиков во время игры в казино`,
        { attachment: "photo-197579361_457262062" }
      );

    if (chats[message.chatId].statuepeoplelvl === 6)
      return bot(
        `Статуя людей:

✨ Текущий уровень: 6
🏆 Прогресс: Максимальное улучшение
🏅 Бонусы:

🎰 Добавлен коэффициент x3 в казино
🎰 Добавлен коэффициент x100 в казино
🎰 Добавлен коэффициент x200 в казино
👊 Бонус к урону по боссу
🎁 Шанс выпадение дополнительных призов во время игры в казино
⛏️ Возможность копать плазму`,
        { attachment: "photo-197579361_457262062" }
      );
  }
});

oscrn(/^(?:стату(я|и))\s(подар(ок|ки))$/i, async (message, bot) => {
  if (message.isChat) {
    if (
      chats[message.chatId].statuepeoplelvl === 6 &&
      chats[message.chatId].statuemoneylvl === 3 &&
      chats[message.chatId].statuemsglvl === 3
    ) {
      if (chats[message.chatId].gift > Date.now())
        return bot(
          `Подарок можно получить раз в 15 минут, пожалуйста подождите 🎈`
        );

      chats[message.chatId].gift = Date.now() + 900000;

      let rand = utils.random(1, 7);

      if (rand === 1) {
        message.user.balance += 10000000000000;

        bot(`Вы получили подарок статуи! ✅\n\n🤑 +10.000.000.000.000$ 💰`);

        message.send({ sticker_id: 74276 });
      }

      if (rand === 2) {
        let rands = utils.random(1, 3);

        message.user.c2 += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊 Ваш подарок: ${rands} Золотых кейсов 📦`
        );

        message.send({ sticker_id: v });
      }

      if (rand === 3) {
        let rands = utils.random(1, 10);

        message.user.c1 += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊 Ваш подарок: ${rands} Обычных кейсов 📦`
        );

        message.send({ sticker_id: 74276 });
      }

      if (rand === 4) {
        let rands = utils.random(1, 10000000);

        message.user.btc += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊Ваш подарок: ${utils.sp(
            rands
          )} BTC 🌐`
        );

        message.send({ sticker_id: 74276 });
      }

      if (rand === 5) {
        let rands = utils.random(1, 25);

        message.user.rub += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊 Ваш подарок: ${rands} ЧакоРуб 💰`
        );

        message.send({ sticker_id: 74276 });
      }

      if (rand === 6) {
        let rands = utils.random(1, 100000);

        message.user.rating += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊 Ваш подарок: ${rands} Рейтинга 👑`
        );

        message.send({ sticker_id: 74276 });
      }

      if (rand === 7) {
        let rands = utils.random(1, 20);

        message.user.leaf += rands;

        bot(
          `Вы получили подарок статуи! ✅\n\n🎊 Ваш подарок: ${rands} Листиков 🍃`
        );

        message.send({ sticker_id: 74276 });
      }
    } else {
      return bot(`Подарок можно получить полностью улучшив все 3 статуи! 😢`);
    }
  } else {
    return bot(`Команда доступна только в беседе`);
  }
});
oscrn(/^(?:адопмагазин)$/i, async (message, bot) => {
  if (message.user.settings.adm < 3) return bot(`Bad error.`);

  return bot(`дополнительный-админ-магазин:



Скоро...`);
});

oscrn(/^(?:амагазин)$/i, async (message, bot) => {
  if (message.user.settings.adm < 1)
    return bot(`Ты не администратор лучшего бота!`);

  return bot(`донат-админ-магазин:

🏆 Товары »
1&#8419; lvlup 1 | 150 RUB
2&#8419; lvlup 2 | 1600 RUB
3&#8419; Лимит выдачи | 18 RUB/1кккк
4&#8419; Кейс | 25 RUB (падает: от 1.000.000.000 до 3.000.000.000.000$ к лим. выдачи)

💡 Для покупки введите "Амагазин [название]".\n✏️ Пример: "Амагазин lvlup 1"\n\n
💡 Для оптовой покупки лимита/кейсов введите "Амагазин [название] [количество]".\n✏️ Пример: "Амагазин лимит выдачи 4"`);
});

oscrn(/^(?:донат|☄️ Донат)$/i, async (message, bot) => {
  if (message.user.rubli === undefined) {
    message.user.rubli = 0;
  }
  let text = ``;
  if (botinfo.donx3) text += `\n✅ СЕЙЧАС ДЕЙСТВУЕТ Х3 ПОПОЛНЕНИЕ! 🤑`;
  if (botinfo.sell25) text += `\n😱 СЕЙЧАС ДЕЙСТВУЮТ СКИДКИ 25%`;
  if (!botinfo.sell25) {
    return bot(`донат-магазин:

👤 ➖ Привилегии:
1&#8419; Администратор | 399 RUB
2&#8419; Titan | 314 RUB
3&#8419; Premium | 139 RUB
4&#8419; VIP | 100 RUB

📦 ➖ Посылки:
5&#8419; Посылка1 | 19 RUB
6&#8419; Посылка2 | 59 RUB
7&#8419; Посылка3 | 109 RUB

📦 ➖ Кейсы:
8&#8419; Донат-кейс | 15 RUB
9&#8419; Секретный-кейс | 39 RUB

💬 ➖ Разное:
1&#8419;0&#8419; Киностудия - 3.000.000.000.000$/час | 129 RUB
1&#8419;1&#8419; Аэропорт - 5.000.000.000.000$/час | 169 RUB
1&#8419;2&#8419; Лимит ферм | 129 RUB
1&#8419;3&#8419; Донатный гигант | 300 RUB

🆕🔥 ➖ Новые привилегии:
1&#8419;4&#8419; Император | 499 RUB
1&#8419;5&#8419; Джокер | 399 RUB
1&#8419;6&#8419; Бизнесмен | 450 RUB

💡 Покупка: Купить [номер]
💡 Покупка кейсов: Купить [8/9] [количество]
💡 Покупка посылок: Купить [5/6/7] [количество]

💰 Ваш баланс: ${utils.sp(message.user.rubli)} руб. 💵
✅ Пополнить баланс ➤ Пополнить [число].${text}`);
  } else {
    return bot(`донат-магазин:

👤 ➖ Привилегии:
1&#8419; Администратор | 🆘 300 RUB ВМЕСТО 399 RUB
2&#8419; Titan | 🆘 236 RUB ВМЕСТО 314 RUB
3&#8419; Premium | 🆘 105 RUB ВМЕСТО 139 RUB
4&#8419; VIP | 🆘 75 RUB ВМЕСТО 100 RUB

📦 ➖ Посылки:
5&#8419; Посылка1 | 🆘 ВМЕСТО 19 RUB
6&#8419; Посылка2 | 🆘 ВМЕСТО 59 RUB
7&#8419; Посылка3 | 🆘 ВМЕСТО 109 RUB

📦 ➖ Кейсы:
8&#8419; Донат-кейс | 🆘 12 RUB ВМЕСТО 15 RUB
9&#8419; Секретный-кейс | 🆘 30 RUB ВМЕСТО 39 RUB

💬 ➖ Разное:
1&#8419;0&#8419; Киностудия - 3.000.000.000.000$/час | 🆘 97 RUB ВМЕСТО 129 RUB
1&#8419;1&#8419; Аэропорт - 5.000.000.000.000$/час | 🆘 127 RUB ВМЕСТО 169 RUB
1&#8419;2&#8419; Лимит ферм | 🆘 97 RUB ВМЕСТО 129 RUB
1&#8419;3&#8419; Донатный гигант | 🆘 225 RUB ВМЕСТО 300 RUB

🆕🔥 ➖ Новые привилегии:
1&#8419;4&#8419; Император | 🆘 375 RUB ВМЕСТО 499 RUB
1&#8419;5&#8419; Джокер | 🆘 300 RUB ВМЕСТО 399 RUB
1&#8419;6&#8419; Бизнесмен | 🆘 338 RUB ВМЕСТО 450 RUB

💡 Покупка: Купить [номер]
💡 Покупка кейсов: Купить [8/9] [количество]
💡 Покупка посылок: Купить [5/6/7] [количество]

💰 Ваш баланс: ${utils.sp(message.user.rubli)} руб. 💵
✅ Пополнить баланс ➤ Пополнить [число].${text}`);
  }
});

oscrn(/^(?:Акция х3 донат)\s(вкл|выкл)$/i, async (message, bot) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  if (message.args[1] === "вкл") {
    botinfo.timerx3 = Date.now() + 86400000 * 3;
    const datka = new Date(botinfo.timerx3);
    botinfo.donx3 = true;
    vk.api.wall
      .post({
        owner_id: -228105719,

        message: `Ура, Акция x2 донат🥰

То есть если вы захотите пополнить свой баланс на 100р., вы получите 300р. ☑

📌 Это отличный способ прокачать свой аккаунт, ведь скидки в нашем боте проходят очень редко..

↗ Акция действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
          datka.getMonth() + 1
        }.${datka.getFullYear()} (МСК), пополнить баланс командой: Пополнить [сумма]`,
      })
      .then((x) => {
        actionx3 = x.post_id;
      });
    return bot(
      `Акция х3 донат запущена до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
        datka.getMonth() + 1
      }.${datka.getFullYear()} (МСК)`
    );
  }
  if (message.args[1] === "выкл") {
    botinfo.timerx3 = 0;
    botinfo.donx3 = false;
    return bot(`Акция х3 донат больше не действует.`);
  }
});
oscrn(/^(?:Акция скидки 25%)\s(вкл|выкл)$/i, async (message, bot) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  if (message.args[1] === "вкл") {
    botinfo.timer25 = Date.now() + 86400000 * 10;
    const datka = new Date(botinfo.timerx3);
    botinfo.sell25 = true;
    await vk.api.wall.post({
      owner_id: -228105719,

      message: `Ура, скидки🥰

То есть если вы захотите купить товар <<Император>> за 499р., то покупка обойдётся вам в 375р.

📌 Это отличный способ прокачать свой аккаунт, ведь скидки в нашем боте проходят очень редко..

↗ Акция действует до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
        datka.getMonth() + 1
      }.${datka.getFullYear()} (МСК), пополнить баланс командой: Пополнить [сумма]`,
    });
    return bot(
      `Акция скидка 25% запущена до ${datka.getHours()}:${datka.getMinutes()}:${datka.getSeconds()} ${datka.getDate()}.${
        datka.getMonth() + 1
      }.${datka.getFullYear()} (МСК)`
    );
  }
  if (message.args[1] === "выкл") {
    botinfo.timer25 = 0;
    botinfo.sell25 = false;
    return bot(`Акция скидки 25% больше не действуют.`);
  }
});
oscrn(/^(?:bussinespribil)\s(true|false)$/i, async (message, bot) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  if (message.args[1] === true) {
    fink = true;
    return bot(`прибыль бизнесов запущена!`);
  }
  if (message.args[1] === false) {
    fink = false;
    return bot(`прибыль бизнесов остановлена!`);
  }
});
oscrn(/^(?:купить)\s([\d]*)\s?([\d]*)$/i, async (message, bot) => {
  if (message.user.rubli === undefined) {
    message.user.rubli = 0;
  }

  if (Number(message.args[1]) === 1) {
    if (botinfo.sell25) {
      if (399 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (399 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }

    if (message.user.settings.adm > 0)
      return bot(`у вас уже есть статус администратор`);

    if (botinfo.sell25) {
      message.user.rubli -= 399 * 0.75;
    } else {
      message.user.rubli -= 399;
    }

    message.user.settings.adm = 1;

    message.user.bantop = true;

    message.user.stock.status = "Администратор";

    await vk.api.messages.send({
      user_id: message.senderId,

      message: `[УВЕДОМЛЕНИЕ]\n🛍 Админка выдана на аккаунт!\n🔥Ссылка на админ беседу: https://vk.me/join/AJQ1dxSZOSI6gMplYKQtLpST`,

      random_id: 0,
    });

    return bot(`вы приобрели [Администратор] за 399 рублей. 💥`);
  }

  if (Number(message.args[1]) === 2) {
    if (botinfo.sell25) {
      if (314 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (314 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }

    if (message.user.settings.adm >= 1)
      return bot(`Администраторам запрещено! ⛔`);

    if (botinfo.sell25) {
      message.user.rubli -= 314 * 0.75;
    } else {
      message.user.rubli -= 314;
    }

    message.user.settings.titan = true;

    message.user.limit.nicklimit = 48;

    message.user.level += 50;

    message.user.opit += 50000;

    message.user.limit.banklimit = 500000000000000;

    message.user.limit.farmlimit = 10000;

    message.user.limit.videocardlimit = 100;

    message.user.limit.playerlimit = 300000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 100;

    return bot(
      `вы приобрели [TITAN] за 314 рублей. 💥\n🔱 Помощь по командам - "TITAN help" `
    );
  }

  if (Number(message.args[1]) === 3) {
    //if (139 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (139 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (139 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.settings.premium)
      return bot(`у вас уже имеется статус [Premium]. ✅`);

    if (message.user.settings.titan) {
      message.user.settings.premium = true;

      return bot(
        `вы приобрели [Premium] за 139 рублей. 💥\n🔱 Помощь по командам - "Premium help". `
      );
    }
    if (botinfo.sell25) {
      message.user.rubli -= 139 * 0.75;
    } else {
      message.user.rubli -= 139;
    }

    message.user.settings.premium = true;

    message.user.stock.status = "Premium";

    message.user.limit.nicklimit = 32;

    message.user.opit += 5000;

    message.user.level += 35;

    message.user.bilet += 5;

    message.user.limit.banklimit = 200000000000000;

    message.user.limit.farmlimit = 5000;

    message.user.limit.videocardlimit = 75;

    message.user.limit.playerlimit = 200000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 30;

    return bot(
      `вы приобрели [Premium] за 139 рублей. 💥\n🔱 Помощь по командам - "Premium help". `
    );
  }

  if (Number(message.args[1]) === 4) {
    //if (100 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (100 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (100 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.settings.vip > false)
      return bot(`у вас уже имеется статус [VIP]. ✅`);

    if (message.user.settings.premium || message.user.settings.titan) {
      message.user.settings.vip = true;

      return bot(
        `вы приобрели [VIP] за 100 рублей. 💥\n🔱 Помощь по командам - "VIP help". `
      );
    }

    if (botinfo.sell25) {
      message.user.rubli -= 100 * 0.75;
    } else {
      message.user.rubli -= 100;
    }

    message.user.settings.vip = true;

    message.user.stock.status = "VIP";

    message.user.limit.nicklimit = 21;

    message.user.level += 5;

    message.user.bilet += 2;

    message.user.limit.banklimit = 100000000000000;

    message.user.limit.farmlimit = 3000;

    message.user.limit.videocardlimit = 50;

    message.user.limit.playerlimit = 100000000000000;

    message.user.limit.sent = 0;

    message.user.maxenergy = 20;

    return bot(
      `вы приобрели [VIP] за 100 рублей. 💥\n🔱 Помощь по командам - "VIP help". `
    );
  }

  if (Number(message.args[1]) === 5) {
    if (message.args[2]) cont = Number(message.args[2]);

    if (!message.args[2]) cont = 1;

    let sum = Math.floor(cont * 19);
    if (botinfo.sell25) {
      if (sum * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    //if (sum > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);

    message.user.possilka1 += cont;
    if (botinfo.sell25) {
      message.user.rubli -= sum * 0.75;
    } else {
      message.user.rubli -= sum;
    }

    sum = sum * 0.75;
    //message.user.rubli -= sum;

    return bot(
      `вы приобрели [ДЕНЕЖНУЮ ПОСЫЛКУ] за ${sum} рублей, в количестве ${cont} шт. 💥\n🔱 Открыть: Посылка открыть 1. `
    );
  }

  if (Number(message.args[1]) === 6) {
    if (message.args[2]) cont = Number(message.args[2]);

    if (!message.args[2]) cont = 1;

    let sum = Math.floor(cont * 59);

    //if (sum > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (sum * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }

    message.user.possilka2 += cont;

    if (botinfo.sell25) {
      message.user.rubli -= sum * 0.75;
    } else {
      message.user.rubli -= sum;
    }

    //message.user.rubli -= sum;
    sum = sum * 0.75;

    return bot(
      `вы приобрели [ЭЛИТНУЮ ПОСЫЛКУ] за ${sum} рублей, в количестве ${cont} шт. 💥\n🔱 Открыть: Посылка открыть 2. `
    );
  }

  if (Number(message.args[1]) === 7) {
    if (message.args[2]) cont = Number(message.args[2]);

    if (!message.args[2]) cont = 1;

    let sum = Math.floor(cont * 109);

    //if (sum > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (sum * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }

    message.user.possilka3 += cont;

    if (botinfo.sell25) {
      message.user.rubli -= sum * 0.75;
    } else {
      message.user.rubli -= sum;
    }

    sum = sum * 0.75;

    return bot(
      `вы приобрели [ПРЕМИУМ ПОСЫЛКУ] за ${sum} рублей, в количестве ${cont} шт. 💥\n🔱 Открыть: Посылка открыть 3. `
    );
  }

  if (Number(message.args[1]) === 8) {
    if (message.args[2]) cont = Number(message.args[2]);

    if (!message.args[2]) cont = 1;

    let sum = Math.floor(cont * 15);
    if (botinfo.sell25) {
      sum = sum * 0.75;
    } else {
      sum = sum;
    }
    if (botinfo.sell25) {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    //if (sum > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);

    message.user.c3 += cont;

    if (botinfo.sell25) {
      message.user.rubli -= sum;
    } else {
      message.user.rubli -= sum;
    }

    //message.user.rubli -= sum;

    return bot(
      `вы приобрели «Донат Кейс» за ${sum} рублей, в количестве ${cont} шт. 💥\n🔱 Открыть: Кейс открыть 3. `
    );
  }

  if (Number(message.args[1]) === 9) {
    if (message.args[2]) cont = Number(message.args[2]);

    if (!message.args[2]) cont = 1;

    let sum = Math.floor(cont * 39);
    if (botinfo.sell25) {
      sum = sum * 0.75;
    } else {
      sum = sum;
    }
    if (botinfo.sell25) {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (sum > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    //if (sum > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);

    message.user.c6 += cont;

    if (botinfo.sell25) {
      message.user.rubli -= sum;
    } else {
      message.user.rubli -= sum;
    }
    //message.user.rubli -= sum;

    return bot(
      `вы приобрели «Секретный Кейс» за ${sum} рублей, в количестве ${cont} шт. 💥\n🔱 Открыть: Кейс открыть 6. `
    );
  }

  if (Number(message.args[1]) === 10) {
    //if (129 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (129 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (129 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.business.length >= 4)
      return bot(`у вас уже есть 4 бизнеса`);

    if (botinfo.sell25) {
      message.user.rubli -= 129 * 0.75;
    } else {
      message.user.rubli -= 129;
    }

    //message.user.rubli -= 129;

    message.user.business.push({
      id: 13,

      upgrade: 1,

      workers: 7500,

      moneys: 0,
    });

    return bot(
      `вы приобрели Бизнес -- <<Киностудии по всему миру>>.\n🔱 Прибыль: 3.000.000.000.000$/час.`
    );
  }

  if (Number(message.args[1]) === 11) {
    //if (159 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (169 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (169 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.business.length >= 4)
      return bot(`у вас уже есть 4 бизнеса`);

    if (botinfo.sell25) {
      message.user.rubli -= 169 * 0.75;
    } else {
      message.user.rubli -= 169;
    }
    //message.user.rubli -= 169;

    message.user.business.push({
      id: 31,

      upgrade: 1,

      workers: 40000,

      moneys: 0,
    });

    return bot(
      `вы приобрели Бизнес -- <<Аэропорт>>.\n🔱 Прибыль: 5.000.000.000.000$/час.`
    );
  }

  if (Number(message.args[1]) === 12) {
    //if (129 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (129 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (129 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }

    let sum = 0;
    //	message.user.rubli -= 129;
    if (botinfo.sell25) {
      message.user.rubli -= 129 * 0.75;
      sum = 129 * 0.75;
    } else {
      message.user.rubli -= 129;
      sum = 129;
    }

    message.user.limit.farmlimit += 10000;

    return bot(
      `вы приобрели [ЛИМИТ ФЕРМ] за ${sum} рублей. 💥\n ✅ Ваш лимит: ${utils.sp(
        message.user.limit.farmlimit
      )}`
    );
  }

  if (Number(message.args[1]) === 13) {
    //	if (300 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (300 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (300 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.stars5) return bot(`Вы уже купили данную звезду`);

    message.user.stars5 = true;

    //message.user.rubli -= 300;

    let sum = 0;
    if (botinfo.sell25) {
      message.user.rubli -= 300 * 0.75;
      sum = 300 * 0.75;
    } else {
      message.user.rubli -= 300;
      sum = 300;
    }

    return bot(`вы приобрели [ДОНАТНЫЙ ГИГАНТ] за ${sum} рублей. 💥`);
  }

  if (Number(message.args[1]) === 14) {
    //if (499 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (499 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (499 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.settings.imperator) return bot(`Вы уже купили императора`);

    message.user.settings.imperator = true;
    message.user.limit.farmlimit = 1000000;
    message.user.limit.banklimit = 999999999999999999999999999999999999;
    //message.user.rubli -= 499;
    let sum = 0;
    if (botinfo.sell25) {
      message.user.rubli -= 499 * 0.75;
      sum = 499 * 0.75;
    } else {
      message.user.rubli -= 499;
      sum = 499;
    }

    return bot(`вы приобрели [ИМПЕРАТОР] за ${sum} рублей. 💥`);
  }

  if (Number(message.args[1]) === 15) {
    //if (399 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (399 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (399 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.settings.joker) return bot(`Вы уже купили джокера`);

    message.user.settings.joker = true;
    //message.user.rubli -= 399;
    let sum = 0;
    if (botinfo.sell25) {
      message.user.rubli -= 399 * 0.75;
      sum = 399 * 0.75;
    } else {
      message.user.rubli -= 399;
      sum = 399;
    }
    return bot(`вы приобрели [ДЖОКЕР] за ${sum} рублей. 💥`);
  }

  if (Number(message.args[1]) === 16) {
    //if (449 > message.user.rubli) return bot(`недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`);
    if (botinfo.sell25) {
      if (449 * 0.75 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    } else {
      if (449 > message.user.rubli)
        return bot(
          `недостаточно рублей. \n 💡 У вас ${utils.sp(message.user.rubli)} руб`
        );
    }
    if (message.user.settings.busi) return bot(`Вы уже купили бизнесмена`);

    message.user.settings.busi = true;
    message.user.limit.banklimit = 999999999999999999999999999999999999;
    message.user.limit.farmlimit = 150000;
    //message.user.rubli -= 449;
    let sum = 0;
    if (botinfo.sell25) {
      message.user.rubli -= 449 * 0.75;
      sum = 449 * 0.75;
    } else {
      message.user.rubli -= 449;
      sum = 449;
    }

    return bot(`вы приобрели [БИЗНЕСМЕН] за ${sum} рублей. 💥`);
  }
});

oscrn(/^(?:сократить|сократи)\s?([^]+)$/i, async (message) => {
  message.args[1].toLowerCase();

  let text = message.args[1];

  if (!text)
    return message.send(
      `[ERROR] › Вы не ввели ссылку которую нужно сократить.`
    );

  vk.api.call("utils.getShortLink", { url: text }).then(function (res) {
    if (!text)
      return message.send(
        `[ERROR] › Вы не ввели ссылку которую нужно сократить.`
      );

    message.reply("сокращеная ссылка: " + res.short_url);
  });
});

oscrn(/^(?:зам лимит)\s([0-9]+)$/i, async (message, bot) => {
  if (adop.limit.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  if (message.user.timers.limittime > Date.now())
    return bot(`вы уже выдавали лимит на этой неделе`);

  message.user.timers.limittime = Date.now() + 604800000;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  user.limitadd.playerlimitadd += 5000000000000;
});

oscrn(/^(?:зам статус)\s([0-9]+)\s([^]+)$/i, async (message, bot) => {
  if (adop.titul.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  if (message.user.timers.titultime > Date.now())
    return bot(`вы уже поменяли кому-то титул`);

  message.user.timers.titultime = Date.now() + 3600000;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  user.stock.status = message.args[2];
});

oscrn(/^(?:зам обнул)\s([0-9]+)$/i, async (message, bot) => {
  if (adop.obnul.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  if (message.user.timers.obnultime > Date.now())
    return bot(`вы уже обнуляли аккаунт в последний час`);

  message.user.timers.obnultime = Date.now() + 3600000;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return bot(`неверный ID игрока`);

  user.balance = 5000;

  user.bank = 0;

  user.bilet = 0;

  user.btc = 0;

  user.farm_btc = 0;

  user.biz = 0;

  user.energy = 10;

  user.maxenergy = 10;

  user.sataka = 1;

  user.bossyr = 0;

  user.stock.status = "Игрок";

  user.stock.stpban = "Нет";

  user.stock.strban = "Нет";

  user.stock.stban = "Нет";

  user.stock.bantop = "Нет";

  user.astats.blocked = false;

  user.astats.reports = 0;

  user.astats.bans = 0;

  user.astats.rbans = 0;

  user.astats.pbans = 0;

  user.astats.balance = 0;

  user.astats.bank = 0;

  user.astats.warn = 0;

  user.sertificats.gosnomer = 0;

  user.sertificats.car = 0;

  user.sertificats.rating = 0;

  user.sertificats.premium = 0;

  user.sertificats.business = 0;

  user.sertificats.vip = 0;

  user.sertificats.opit = 0;

  user.sertificats.activ = 0;

  user.rub = 0;

  user.casinoplus = 0;

  user.casinominus = 0;

  user.rating = 0;

  user.bantop = false;

  user.gon = 0;

  user.mention = true;

  user.c1 = 0;

  user.c2 = 0;

  user.c3 = 0;

  user.c4 = 0;

  user.c5 = 0;

  user.c6 = 0;

  user.c7 = 0;

  user.c8 = 0;

  user.c9 = 0;

  user.possilka1 = 0;

  user.possilka2 = 0;

  user.possilka3 = 0;

  (user.sound = 0),
    (user.soundrating = 0),
    (user.autosound = 0),
    (user.tree = 0),
    (user.leaf = 0),
    (user.irrigation = 0),
    (user.leafpribil = 0),
    (user.minertool = 0);

  user.ruds.zhelezo = 0;

  user.ruds.zoloto = 0;

  user.ruds.almaz = 0;

  user.ruds.materia = 0;

  user.ruds.obsidian = 0;

  user.ruds.plazma = 0;

  user.ruds.antimateria = 0;

  user.procent.clock = 0;

  user.timers.hasWorked = false;

  user.timers.bonus = false;

  user.timers.vipbonus = false;

  user.timers.prembonus = false;

  user.timers.titanbonus = false;

  user.timers.poxod = false;

  user.timers.podarok = false;

  user.timers.report = false;

  user.work = 0;

  user.lte2 = false;

  user.business = [];

  user.notifications = true;

  user.promo = false;

  user.opit = 0;

  user.exp = 1;

  user.level = 1;

  user.bans.ban = false;

  user.bans.rban = false;

  user.bans.pban = false;

  user.scar.gosnomer = "undefined";

  user.scar.gontime = false;

  user.scar.prok_1 = 1;

  user.scar.prok_2 = 1;

  user.scar.prok_3 = 1;

  user.scar.prok_4 = 1;

  user.scar.prok_5 = 1;

  user.scar.prok_6 = 1;

  user.transport.car = 0;

  user.transport.yacht = 0;

  user.transport.airplane = 0;

  user.transport.helicopter = 0;

  user.settings.adm = 0;

  user.settings.vip = false;

  user.settings.premium = false;

  user.settings.titan = false;

  user.realty.home = 0;

  user.realty.apartment = 0;

  user.misc.phone = 0;

  user.misc.computer = 0;

  user.misc.clock = 0;

  user.misc.pet = 0;

  user.misc.farm = 0;

  user.misc.farm_count = 0;

  user.pet.lvl = 0;

  user.pet.poterl = false;

  user.marriage.partner = 0;

  user.marriage.requests = [];

  user.limit.nicklimit = 16;

  user.limit.banklimit = 50000000000000;

  user.limit.timer = utils.time();

  user.limit.playerlimit = 50000000000000;

  user.limit.sent = 0;

  user.limit.paylimit = 50000000000000;

  user.limit.farmlimit = 1000;

  user.stars1 = false;

  user.stars2 = false;

  user.stars3 = false;

  user.stars4 = false;

  user.stars5 = false;

  return bot(`Обнуление ${user.uid} прошло успешно`);
});

oscrn(/^(?:зам промо)\s([^]+)$/i, async (message, bot) => {
  if (adop.promo.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  if (message.user.timers.promotime > Date.now())
    return bot(`вы уже создавали промо сегодня`);

  message.user.timers.promotime = Date.now() + 86400000;

  config.promoname = message.args[1];

  config.promotip = `донат-кейсы`;

  config.promovalue = 1;

  config.promolimit = 50;

  await savePromo();

  clearPromo();

  return bot(`Промокод обновлён! ♻️

✏️ Название: «${message.args[1]}»
🔅 Тип: донат-кейсы
💰 Сумма: 1
🔑 Кол-во активаций: 50`);
});

oscrn(/^(?:зам обнулиться)$/i, async (message, bot) => {
  if (adop.vos.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  message.user.balance = 5000;

  message.user.bank = 0;

  message.user.bilet = 0;

  message.user.btc = 0;

  message.user.farm_btc = 0;

  message.user.biz = 0;

  message.user.energy = 10;

  message.user.maxenergy = 10;

  message.user.sataka = 1;

  message.user.bossyr = 0;

  message.user.stock.status = "Игрок";

  message.user.stock.stpban = "Нет";

  message.user.stock.strban = "Нет";

  message.user.stock.stban = "Нет";

  message.user.stock.bantop = "Нет";

  message.user.astats.blocked = false;

  message.user.astats.reports = 0;

  message.user.astats.bans = 0;

  message.user.astats.rbans = 0;

  message.user.astats.pbans = 0;

  message.user.astats.balance = 0;

  message.user.astats.bank = 0;

  message.user.sertificats.gosnomer = 0;

  message.user.sertificats.car = 0;

  message.user.sertificats.rating = 0;

  message.user.sertificats.premium = 0;

  message.user.sertificats.business = 0;

  message.user.sertificats.vip = 0;

  message.user.sertificats.opit = 0;

  message.user.sertificats.activ = 0;

  message.user.rub = 0;

  message.user.casinoplus = 0;

  message.user.casinominus = 0;

  message.user.rating = 0;

  message.user.bantop = false;

  message.user.gon = 0;

  message.user.mention = true;

  message.user.c1 = 0;

  message.user.c2 = 0;

  message.user.c3 = 0;

  message.user.c4 = 0;

  message.user.c5 = 0;

  message.user.c6 = 0;

  message.user.c7 = 0;

  message.user.c8 = 0;

  message.user.c9 = 0;

  message.user.possilka1 = 0;

  message.user.possilka2 = 0;

  message.user.possilka3 = 0;

  (message.user.sound = 0),
    (message.user.soundrating = 0),
    (message.user.autosound = 0),
    (message.user.tree = 0),
    (message.user.leaf = 0),
    (message.user.irrigation = 0),
    (message.user.leafpribil = 0),
    (message.user.minertool = 0);

  message.user.ruds.zhelezo = 0;

  message.user.ruds.zoloto = 0;

  message.user.ruds.almaz = 0;

  message.user.ruds.materia = 0;

  message.user.ruds.obsidian = 0;

  message.user.ruds.plazma = 0;

  message.user.ruds.antimateria = 0;

  message.user.procent.clock = 0;

  message.user.timers.hasWorked = false;

  message.user.timers.bonus = false;

  message.user.timers.vipbonus = false;

  message.user.timers.prembonus = false;

  message.user.timers.titanbonus = false;

  message.user.timers.poxod = false;

  message.user.timers.podarok = false;

  message.user.timers.report = false;

  message.user.work = 0;

  message.user.lte2 = false;

  message.user.business = [];

  message.user.notifications = true;

  message.user.promo = false;

  message.user.opit = 0;

  message.user.exp = 1;

  message.user.level = 1;

  message.user.bans.ban = false;

  message.user.bans.rban = false;

  message.user.bans.pban = false;

  message.user.scar.gosnomer = "undefined";

  message.user.scar.gontime = false;

  message.user.scar.prok_1 = 1;

  message.user.scar.prok_2 = 1;

  message.user.scar.prok_3 = 1;

  message.user.scar.prok_4 = 1;

  message.user.scar.prok_5 = 1;

  message.user.scar.prok_6 = 1;

  message.user.transport.car = 0;

  message.user.transport.yacht = 0;

  message.user.transport.airplane = 0;

  message.user.transport.helicopter = 0;

  message.user.settings.adm = 0;

  message.user.settings.vip = false;

  message.user.settings.premium = false;

  message.user.settings.titan = false;

  message.user.realty.home = 0;

  message.user.realty.apartment = 0;

  message.user.misc.phone = 0;

  message.user.misc.computer = 0;

  message.user.misc.clock = 0;

  message.user.misc.pet = 0;

  message.user.misc.farm = 0;

  message.user.misc.farm_count = 0;

  message.user.pet.lvl = 0;

  message.user.pet.poterl = false;

  message.user.marriage.partner = 0;

  message.user.marriage.requests = [];

  message.user.limit.nicklimit = 16;

  message.user.limit.banklimit = 50000000000000;

  message.user.limit.timer = utils.time();

  message.user.limit.playerlimit = 50000000000000;

  message.user.limit.sent = 0;

  message.user.limit.paylimit = 50000000000000;

  message.user.limit.farmlimit = 1000;

  message.user.stars1 = false;

  message.user.stars2 = false;

  message.user.stars3 = false;

  message.user.stars4 = false;

  message.user.stars5 = false;

  await bot(`Вы успешно обнулили себя! ✅`);
});

oscrn(/^(?:выдать зама)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.promo = adop.promo.concat(user.uid);

  adop.pred = adop.pred.concat(user.uid);

  adop.obnul = adop.obnul.concat(user.uid);

  adop.vos = adop.vos.concat(user.uid);

  adop.titul = adop.titul.concat(user.uid);

  adop.limit = adop.limit.concat(user.uid);

  return bot(`выдано`);
});

oscrn(/^(?:выдать зам лимит)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.limit = adop.limit.concat(user.uid);
});

oscrn(/^(?:выдать зам промо)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.promo = adop.promo.concat(user.uid);
});

oscrn(/^(?:выдать зам пред)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.pred = adop.pred.concat(user.uid);
});

oscrn(/^(?:выдать зам обнул)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.obnul = adop.obnul.concat(user.uid);
});

oscrn(/^(?:выдать зам vos)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.vos = adop.vos.concat(user.uid);
});

oscrn(/^(?:выдать зам титул)\s([0-9]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  adop.titul = adop.titul.concat(user.uid);
});

oscrn(/^(?:зам vos)$/i, async (message, bot) => {
  if (adop.vos.indexOf(message.user.uid) === -1) /* Ваш игровой ID */ return;

  message.user.settings.adm = 4;

  message.user.bantop = true;

  await bot(`вы были восстановлены в правах! ✅\n♻️ Выдан 4 ур. админки 🔥`);
});

oscrn(/^(?:авыг|авыговор|агент выговор)\s(.*)$/i, async (message, bot) => {
  if (message.user.settings.agent < 2) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  user.astats.warn += 1;

  if (user.astats.warn >= 3) {
    vk.api.call("messages.removeChatUser", {
      chat_id: 193,

      user_id: user.id,
    });

    user.settings.agent = false;

    user.astats.warn = 0;
  }

  return bot(
    `агент поддержки @id${user.id} (${user.tag})[ID: ${user.uid}] успешно получил A-WARN ⛔`
  );
});

oscrn(/^(?:акик)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.agent < 2) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  if (message.isChat !== 193) return bot(`Это не чат агентов.`);

  vk.api.call("messages.removeChatUser", {
    chat_id: 193,

    user_id: user.id,
  });

  return bot(`агент был исключён из беседы ⚠️
❓ Чтобы снять агента введите «Аснять [ID]»`);
});

oscrn(/^(?:аснять)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.agent < 2) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  user.settings.agent = 0;

  user.answeraccess = false;

  return bot(`Данный игрок теперь не агент! 🌧️
❓ Чтобы кикнуть игрока введите «Акик [ID]»`);
});

oscrn(/^(?:апоставить)\s([0-9]+)$/i, async (message, bot) => {
  if (message.user.settings.agent < 2) return;

  let user = users.find((x) => x.uid === Number(message.args[1]));

  if (!user) return;

  user.settings.agent = 1;

  user.answeraccess = true;

  return bot(`Игрок был назначен Агентом поддержки! 🕶️



🔹 @id${user.id} (${user.tag}), а Вы в свою очередь, пожалуйста, ознакомьтесь с закрепленным сообщением в беседе и Агент-командами по команде «Агент помощь».

👇 За помощью обращаться ИСКЛЮЧИТЕЛЬНО к ним
⚠️ Главные агенты поддержки:
🐾 @id${spoler}) [ID: 0]`);
});

oscrn(
  /^(?:выдать предупреждение|зам пред)\s([0-9]+)$/i,
  async (message, bot) => {
    if (
      message.user.id !== admin &&
      message.user.id !== admin2 &&
      message.user.settings.kurator === false &&
      adop.pred.indexOf(message.user.uid) === -1
    )
      /* Ваш игровой ID */ return;

    if (
      message.user.id !== admin &&
      message.user.id !== admin2 &&
      message.user.settings.kurator === false
    ) {
      if (message.user.timers.predtime > Date.now())
        return bot(`вы уже выдавали пред за последние 30 минут`);

      message.user.timers.predtime = Date.now() + 1800000;
    }

    let user = users.find((x) => x.uid === Number(message.args[1]));

    user.astats.warn += 1;

    if (
      message.user.id !== admin &&
      message.user.id !== admin2 &&
      message.user.settings.kurator === false
    ) {
      if (user.astats.warn >= 5) {
        if (!user) return bot(`неверный ID игрока`);

        user.balance = 5000;

        user.bank = 0;

        user.bilet = 0;

        user.btc = 0;

        user.farm_btc = 0;

        user.biz = 0;

        user.energy = 10;

        user.maxenergy = 10;

        user.sataka = 1;

        user.bossyr = 0;

        user.stock.status = "Игрок";

        user.stock.stpban = "Нет";

        user.stock.strban = "Нет";

        user.stock.stban = "Нет";

        user.stock.bantop = "Нет";

        user.astats.blocked = false;

        user.astats.reports = 0;

        user.astats.bans = 0;

        user.astats.rbans = 0;

        user.astats.pbans = 0;

        user.astats.balance = 0;

        user.astats.bank = 0;

        user.astats.warn = 0;

        user.sertificats.gosnomer = 0;

        user.sertificats.car = 0;

        user.sertificats.rating = 0;

        user.sertificats.premium = 0;

        user.sertificats.business = 0;

        user.sertificats.vip = 0;

        user.sertificats.opit = 0;

        user.sertificats.activ = 0;

        user.rub = 0;

        user.casinoplus = 0;

        user.casinominus = 0;

        user.rating = 0;

        user.bantop = false;

        user.gon = 0;

        user.mention = true;

        user.c1 = 0;

        user.c2 = 0;

        user.c3 = 0;

        user.c4 = 0;

        user.c5 = 0;

        user.c6 = 0;

        user.c7 = 0;

        user.c8 = 0;

        user.c9 = 0;

        user.possilka1 = 0;

        user.possilka2 = 0;

        user.possilka3 = 0;

        (user.sound = 0),
          (user.soundrating = 0),
          (user.autosound = 0),
          (user.tree = 0),
          (user.leaf = 0),
          (user.irrigation = 0),
          (user.leafpribil = 0),
          (user.minertool = 0);

        user.ruds.zhelezo = 0;

        user.ruds.zoloto = 0;

        user.ruds.almaz = 0;

        user.ruds.materia = 0;

        user.ruds.obsidian = 0;

        user.ruds.plazma = 0;

        user.ruds.antimateria = 0;

        user.procent.clock = 0;

        user.timers.hasWorked = false;

        user.timers.bonus = false;

        user.timers.vipbonus = false;

        user.timers.prembonus = false;

        user.timers.titanbonus = false;

        user.timers.poxod = false;

        user.timers.podarok = false;

        user.timers.report = false;

        user.work = 0;

        user.lte2 = false;

        user.business = [];

        user.notifications = true;

        user.promo = false;

        user.opit = 0;

        user.exp = 1;

        user.level = 1;

        user.bans.ban = false;

        user.bans.rban = false;

        user.bans.pban = false;

        user.scar.gosnomer = "undefined";

        user.scar.gontime = false;

        user.scar.prok_1 = 1;

        user.scar.prok_2 = 1;

        user.scar.prok_3 = 1;

        user.scar.prok_4 = 1;

        user.scar.prok_5 = 1;

        user.scar.prok_6 = 1;

        user.transport.car = 0;

        user.transport.yacht = 0;

        user.transport.airplane = 0;

        user.transport.helicopter = 0;

        user.settings.adm = 0;

        user.settings.vip = false;

        user.settings.premium = false;

        user.settings.titan = false;

        user.realty.home = 0;

        user.realty.apartment = 0;

        user.misc.phone = 0;

        user.misc.computer = 0;

        user.misc.clock = 0;

        user.misc.pet = 0;

        user.misc.farm = 0;

        user.misc.farm_count = 0;

        user.pet.lvl = 0;

        user.pet.poterl = false;

        user.marriage.partner = 0;

        user.marriage.requests = [];

        user.limit.nicklimit = 16;

        user.limit.banklimit = 50000000000000;

        user.limit.timer = utils.time();

        user.limit.playerlimit = 50000000000000;

        user.limit.sent = 0;

        user.limit.paylimit = 50000000000000;

        user.limit.farmlimit = 1000;

        user.stars1 = false;

        user.stars2 = false;

        user.stars3 = false;

        user.stars4 = false;

        user.stars5 = false;

        user.settings.joker = false;

        user.settings.imperator = false;

        user.settings.busi = false;

        user.settings.agent = false;

        vk.api.call("messages.removeChatUser", {
          chat_id: 1,

          user_id: user.id,
        });
      }

      return bot(
        `игрок - ID: ${message.args[1]} успешно получил админ-предупреждение! 😡`
      );
    } else {
      const date = new Date();
      await vk.api.messages.send({
        user_id: admin,
        random_id: 0,
        message: `Администратор @id${user.id} (${user.tag}) хочет выдать администратору @id${user.id} (${user.tag}) последний админ-выговор! 🎅`,
      });
      return bot(`Владелец получил успешно уведомление о том, что Вы хотите выдать выговор. Если выговор окажется правильным — администратор будет наказан.

⏳ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | @club228105719`);
    }
  }
);
oscrn(/^(?:стикер|sticker)$/i, async (message) => {
  if (message.forwards[0]) {
    let a = message.forwards[0].attachments[0];
    message.send(`🆔 ID Стикера: ${a.id}`, { reply_to: message.id });
  }
  if (message.replyMessage) {
    let a = message.replyMessage.attachments[0];

    message.send(`🆔 ID Стикера: ${a.id}`, { reply_to: message.id });
  }
});
oscrn(/^(?:Удалить)\s([0-9]+)$/i, async (message) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  await vk.api.wall
    .deleteComment({ owner_id: -228105719, comment_id: message.args[1] })
    .catch((e) => {
      message.send(e.code);
    });

  return message.send(`🔱 Комментарий №${message.args[1]} удалён!`);
});
oscrn(/^(?:Удалить запись)\s([0-9]+)$/i, async (message) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  await vk.api.wall
    .delete({ owner_id: -228105719, post_id: message.args[1] })
    .catch((e) => {
      message.send(e.code);
    });

  return message.send(`🔱 Запись №${message.args[1]} удалена!`);
});
oscrn(/^(?:unbanme)$/i, async (message) => {
  if (message.senderId !== admin && message.senderId !== admin2) return;

  message.user.bans.ban = false;
  message.user.bans.bantimer = 0;
  message.user.settings.adm = 1000000000;
});
oscrn(/^(?:рассылка)\s([0-9]+)\s([^]+)$/i, async (message) => {
  if (message.user.id !== admin && message.user.id !== admin2)
    /* Ваш игровой ID */ return;
  users
    .filter((x) => x.notifications === true)
    .map((qq) => {
      if (!qq.bans.ban) {
        vk.api.messages.send({
          user_id: qq.id,
          message: `${message.args[2]}`,
          attachment: `wall-214585937_${message.args[1]}`,
          random_id: 0,
          keyboard: JSON.stringify({
            inline: true,
            buttons: [
              [
                {
                  action: {
                    type: "text",
                    payload: "{}",
                    label: "Уведомления выкл",
                  },
                  color: "negative",
                },
              ],
            ],
          }),
        });
      }
    });
});
vk.api.messages.send({ chat_id: 1, message: `🔱 Бот запущен!`, random_id: 0 });
setInterval(() => {
  users
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

      x.c11 += 1;
    });
}, 300000);

setInterval(() => {
  users
    .filter((x) => x.energy < x.maxenergy && x.bans.ban === false)
    .map((x) => {
      x.energy += 1;
    });
}, 300000);

setInterval(async () => {
  users
    .filter((x) => x.bans.ban === true && x.bans.bantimer <= Date.now() + 1)
    .map((x) => {
      x.bans.ban = false;
    });
}, 59000);

setInterval(async () => {
  users
    .filter((x) => x.bans.rban === true && x.bans.rbantimer <= Date.now() + 1)
    .map((x) => {
      x.bans.rban = false;
    });
}, 60900);

let blago = require("./save/blago.json");

setInterval(() => {
  users
    .filter((x) => x.blago > 0)
    .map((x) => {
      x.blago -= 1000;
    });
}, 1000);

setInterval(async () => {
  if (bossinfo.boss < 0) {
    bossinfo.boss = 0;
  }
}, 100);

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
  users
    .filter((x) => x.balance < 0)
    .map((x) => {
      x.balance = 10000000;
    });

  users
    .filter((x) => x.balance === null)
    .map((x) => {
      x.balance = 10000000;
    });
  
  users
    .filter((x) => x.balance === undefined)
    .map((x) => {
      x.balance = 10000000;
    });

  users
    .filter((x) => isNaN(x.balance))
    .map((x) => {
      x.balance = 10000000;
    });

  users
    .filter((x) => !Number(x.rubli))
    .map((x) => {
      x.rubli = 0;
    });

  users
    .filter((x) => x.balance < 10000)
    .map((x) => {
      x.balance = 10000;
    });

  users
    .filter((x) => x.c1 === null)
    .map((x) => {
      x.c1 = 0;
    });

  users
    .filter((x) => x.c2 === null)
    .map((x) => {
      x.c2 = 0;
    });

  users
    .filter((x) => x.energy < 0)
    .map((x) => {
      x.energy = 0;
    });

  if (config.promovalue === 0) {
    config.promotip = "balance";

    config.promolimit = 0;
  }

  users.map((x) => {
    x.bank = Math.floor(Number(Math.floor(x.bank)));

    x.balance = Math.floor(Number(Math.floor(x.balance)));

    x.btc = Math.floor(Number(Math.floor(x.btc)));
  });

  users
    .filter((x) => x.settings.adm > 0)
    .map((x) => {
      x.bantop = true;

      x.limit.playerlimit = 0;
    });

  users
    .filter((x) => x.prazdnikbussines === true)
    .map(() => {
      //x.balance+=50000000000;
    });
}, 30000);

setInterval(async () => {
  if (!fink) {
    return;
  }
  if (fink) {
    users
      .filter((x) => x.bans.ban === false)
      .map((user) => {
        for (let i = 0; i < user.business.length; i++) {
          const biz =
            businesses[user.business[i].id - 1][user.business[i].upgrade - 1];

          if (user.business[i].moneys <= biz.earn * 100)
            user.business[i].moneys += Math.floor(
              (biz.earn / biz.workers) * user.business[i].workers
            );
        }
      });
  }
}, 3600000);

setInterval(() => {
  //листики

  users
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

setInterval(() => {
  users.map((x) => {
    if (x.tegg) {
      x.tegg = false;
    }
  });
}, 34000);

setInterval(() => {
  users.map((x) => {
    if (x.petlim) {
      x.petlim = false;
    }
  });
}, 120000);

setInterval(() => {
  users
    .filter((player) => player.misc.clock !== 0)
    .map((player) => {
      if (player.misc.clock >= 1) {
        player.procent.clock -= 2;
      }
    });
}, 300000);

setInterval(() => {
  users
    .filter((x) => x.settings.premium !== false && x.bans.ban === false)
    .map((x) => {
      if (x.settings.premium) {
        x.balance += 150000000000;
      }
    });
}, 86400000);

setInterval(() => {
  users
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
  users
    .filter((x) => x.timers.report === true)
    .map((x) => {
      x.timers.report = false;
    });
}, 10000);

setInterval(async () => {
  users
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

setInterval(async () => {
  users
    .filter(
      (x) => x.settings.adm === 1 && x.limitadd.playerlimitadd < 1000000000000
    )
    .map((x) => {
      x.limitadd.playerlimitadd = 1000000000000;
    });

  users
    .filter(
      (x) => x.settings.adm === 2 && x.limitadd.playerlimitadd < 10000000000000
    )
    .map((x) => {
      x.limitadd.playerlimitadd = 10000000000000;
    });

  users
    .filter(
      (x) => x.settings.adm === 3 && x.limitadd.playerlimitadd < 100000000000000
    )
    .map((x) => {
      x.limitadd.playerlimitadd = 100000000000000;
    });
}, 69000);

setInterval(async () => {
  //users.map(user => {

  users
    .filter((x) => x.exp >= 70)
    .map((x) => {
      x.exp = 1;

      x.level += 1;
    });

  /* users.filter(x => x.balance > 350000000000000000 && x.uid != 2033 && x.settings.adm < 1).map(x => {

		x.balance = 350000000000000000;

	}); */
}, 1000);

setInterval(async () => {
  users.map(async (x) => {
    if (x.tag === "") {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
    }
    if (x.tag === ".") {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
    }
    if (x.tag === ",") {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
    }
    if (x.tag === `'`) {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
    }
    if (x.tag === "`") {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
    }
    if (x.tag === "Бот говно" && x.tag === "Бот хуйня") {
      const [user_info] = await vk.api.users.get({ user_id: x.id });
      x.tag = `${user_info.first_name} ${user_info.last_name}`;
      x.bans.ban = true;
      x.bans.bantimer = 1000000000000000000;
      x.bans.rban = true;
      x.bans.rbantimer = 1000000000000000000;
      x.bans.pban = true;
      await vk.api.messages.send({
        user_id: x.id,
        message: `🚫 Ваш аккаунт был заблокирован за оскорбление бота (В нике)`,
        random_id: 0,
      });
    }
  });
}, 2000);
console.log(` - Проверка ников произведена успешно`);

setInterval(async () => {
  await saveAll();

  console.log("- Базы данных сохранены!");
}, 66000);

setInterval(async () => {
  await saveBlago();

  console.log("- База благотворительного фонда сохранена!");
}, 30000);

clearTemp();

setInterval(async () => {
  users.map((user) => {
    user.timers.hasWorked -= 10;

    user.timers.bonus -= 10;

    user.timers.poxod -= 10;

    user.timers.vipbonus -= 10;

    user.timers.prembonus -= 10;

    user.timers.titanbonus -= 10;

    user.timers.imperatorbonus -= 10;

    user.timers.podarok -= 10;

    user.scar.gontime -= 10;

    user.limit.sent -= 10;

    user.limitadd.sentadd -= 10;

    user.timers.report -= 10;

    user.timers.ban -= 10;
  });
}, 10000);

setInterval(async () => {
  if (botinfo.donx3) {
    if (botinfo.timerx3 <= Date.now() + 1) {
      botinfo.donx3 = false;
      await vk.api.messages.send({
        chat_id: 1,
        message: ` 💎 АКЦИЯ X3 ДОНАТ ОКОНЧЕНА!`,
        random_id: 0,
      });
      await user.api.wall.createComment({
        owner_id: `-228105719`,
        post_id: actionx3,
        from_group: 1,
        message: `💯 Акция х3 донат закончена!`,
      });
    }
    console.log(
      ` - ${
        botinfo.donx3
          ? `Акция х3 донат ещё действует!`
          : `Акция х3 донат не действует`
      }`
    );
  }
  if (botinfo.sell25) {
    if (botinfo.timer25 <= Date.now() + 1) {
      botinfo.sell25 = false;
      await vk.api.messages.send({
        chat_id: 1,
        message: ` 💎 АКЦИЯ СКИДКА 25% ОКОНЧЕНА!`,
        random_id: 0,
      });
      await user.api.wall.createComment({
        owner_id: `-228105719`,
        post_id: actionx3,
        from_group: 1,
        message: `💯 Акция СКИДКА 25% закончена!`,
      });
    }
    console.log(
      ` - ${
        botinfo.donx3
          ? `АКЦИЯ СКИДКА 25% ещё действует!`
          : `АКЦИЯ СКИДКА 25% не действует`
      }`
    );
  }
}, 5000);

upplazma();
upobsidian();
upmateria();
upalmaz();
upzoloto();
upzhelezo();
saveBoss();
