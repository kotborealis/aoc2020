const triplets = document.body.innerText
  .split('\n')
  .filter(i => i)
  .map(v => v.split(':'))
  .map(([policy, password]) => [
    policy.split(' ')[1],
    policy.split(' ')[0].split('-').map(i => Number.parseInt(i)),
    password
  ])

// part1
triplets
  .map(([letter, count, password]) => [letter, count, password.split('').filter(l => l === letter).length])
  .filter(([_, count, found]) => found >= count[0] && found <= count[1]).length

// part2
triplets
  .map(([letter, pos, password]) => [password[pos[0]] === letter, password[pos[1]] === letter])
  .filter(([lh, rh]) => lh ? !rh : rh).length
