const num = [2, 5, 6, 5, 6, 4, 8, 9, 7, 8, 8, 8, 1];

function count_dup(num) {
  let counts = {};

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] == num[j]) {
        return (value = num[i]);
      }
    }
    if (counts[value]) {
      counts[value] += 1;
    } else if (counts[value] === 1) {
      counts[value] += 0;
    } else {
      counts[value] = 1;
    }
  }
  console.log(counts);
}

count_dup(num);
