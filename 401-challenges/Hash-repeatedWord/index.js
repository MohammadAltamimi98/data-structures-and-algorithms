function repeatedWords(string) {
  try {
    let split = string.split(' ');
    console.log(split.length);
    console.log(split);
    let containerArray = [];
    let words = [];
    for (i = 0; i < split.length; i++) {
      let formatWord = split[i].toLowerCase();
      let container = words.includes(formatWord);
      if (container) {
        containerArray.push(formatWord);
      }
      words.push(formatWord);
    }
    if (containerArray.length === 0) return 'no repeatitions';
    return containerArray;

  } catch (error) {
    console.log(error.message);
  }
}

console.log(repeatedWords('say something say something'));
module.exports = repeatedWords;