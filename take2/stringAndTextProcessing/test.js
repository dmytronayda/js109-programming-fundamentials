let str = 'Dima'; 

let replaceVowels = (string, replaceWith) => {
  return string
    .split('')
    .map(char => {
      if (['a', 'e', 'i', 'o', 'u'].includes(char)) return replaceWith;
      else {
        return char;
      }
    })
    .join('');
}

console.log(replaceVowels(str, '_')); // 'D_m_'