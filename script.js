console.log('test');

const container = document.querySelector ('.container');
const limit = 70;

for (let i = 0; i < 70; i++) {
  const box = document.createElement ('div');
  box.className = 'box';
  box.append(i);
  console.log(box);
}