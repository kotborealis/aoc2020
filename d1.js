const values = document.body.innerText
  .split('\n')
  .map(v => Number.parseInt(v))

// part 1
for(let i of values)
  for(let j of values)
    if(i + j === 2020) 
      console.log(i * j)

// part 2
for(let i of values)
  for(let j of values)
    for(let k of values)
        if(i + j + k === 2020)
          console.log(i * j * k)
