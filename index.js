const container = document.createElement('div')
container.setAttribute('id', 'container');
document.body.appendChild(container);

for(let i=0; i<256; i++){
    const div = document.createElement('div');
    container.appendChild(div)
}