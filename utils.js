let utils = {
  sp: (int, useSpace = false) => {
    int = int.toString();

    
    let formattedNumber = int
      .split('')
      .reverse()
      .join('')
      .match(/[0-9]{1,3}/g)
      .join(useSpace ? ' ' : '.') 
      .split('')
      .reverse()
      .join('');

    return formattedNumber;
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
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 48000) / 3),
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
          " ундцлн",
          " додцлн",
          " трдцлн", 
          " квтрдцлн"
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
      text += `${int[i]}⃣`;
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


module.exports = utils;