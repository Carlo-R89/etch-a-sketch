let pDiv = document.querySelector('.container');
const button = document.getElementById('btn');
const container = document.getElementById('cont');
const styling = () => {
  for (let child of pDiv.children) {
    child.classList.add('item');
    child.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'red';
    });
  }
};
let len = 16;
let totalSquares = len * len;

for (let i = 0; i < totalSquares; i++) {
  pDiv.append(document.createElement('div'));
}

pDiv.style.gridTemplateColumns = `repeat(${len}, minmax(25px, 1fr))`;
styling();

button.addEventListener('click', () => {
  len = Number(prompt('Set size:', ''));
  if (len > 80) {
    throw new Error(alert('Grid is too large!'));
  }
  totalSquares = len * len;
  container.removeChild(pDiv);
  pDiv = document.createElement('div');
  pDiv.classList.add('container');
  container.appendChild(pDiv);
  for (let i = 0; i < totalSquares; i++) {
    pDiv.append(document.createElement('div'));
  }
  styling();
  pDiv.style.gridTemplateColumns = `repeat(${len}, minmax(5px, 1fr))`;
});
