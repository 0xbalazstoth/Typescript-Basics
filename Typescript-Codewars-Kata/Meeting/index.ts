//Kata: https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript

console.log(
  meeting(
    'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
  )
);

export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map((m) => '(' + m.split(':').reverse().join(', ') + ')')
    .sort()
    .join('');
}
