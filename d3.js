const field = document.body.innerText
  .split('\n')
  .map(s => s.split(''))

const cases = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

// part 1
const fn = ([dx, dy]) => {
let trees = 0;
  for(let x = 0, y = 0; y < field.length - 1; x += dx, y += dy) {
     if(x >= field[0].length) x = x % field[0].length
     trees += field[y][x] === '#'
  }
  return trees;
}

fn(cases[1])

// part 2
cases.reduce((a, v) => a * fn(v), 0)
