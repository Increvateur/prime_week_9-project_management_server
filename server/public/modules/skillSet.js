function generateSkills(data){
  // switch (data) {
  //   case "fe":
  //     var fe = data.skillset[0];
  //     return fe;
  //     break;
  //   case "cs":
  //     var cs = data.skillset[1];
  //     return cs;
  //     break;
  //   case "ss":
  //     var ss = data.skillset[2];
  //     return ss;
  //     break;
  //   default:
  //     var random = data.skillset[randomNumber(0, data.skillset.length - 1)];
  //     return random;
  //     break;
  // }

  return data.skillset[randomNumber(0, data.skillset.length - 1)];
}

function randomNumber(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = generateSkills;
