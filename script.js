const container = document.querySelector("#container");
container.style.cssText += 'display: flex';
container.style.cssText += 'flex-wrap: wrap';

for (let i = 0 ; i < 256; i++){
    const div = document.createElement('div');
    div.style.cssText += 'width: 6.25%';
    div.style.cssText += 'height: 6.25vh';
    div.style.cssText += 'background-color: red';
    container.appendChild(div);
}


