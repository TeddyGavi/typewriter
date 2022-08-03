// typewriter
//prints to the terminal each character from a given sentence, afterwards a newline is added 
const sentence = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  let x = 0;
  while (x < sentence.length) {
    for (const i of sentence) {
      setTimeout(() => {
        process.stdout.write(i);

      }, x);
      x += 50;
    }
    setTimeout(() => {
      process.stdout.write("\n");
    }, x);
  }
};

typewriter(sentence);