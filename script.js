const container = document.querySelector("#container");
container.style.cssText = 'display: flex; flex-wrap: wrap';

const header = document.createElement("div");
header.textContent ="Number of pixels (n x n): ";
header.style.cssText = 'display: flex; gap: 15px; margin: 15px; width: 100% ; padding: 15px ;align-items: center ; justify-content: center;'


for (let i = 25 ; i <= 100 ; i += 25){
    const btn = document.createElement('button');
    btn.textContent= i;
    btn.addEventListener('click', function(e){
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.remove();
        });
        n = this.textContent;
        createGrid(n);
    });
    header.appendChild(btn);
}

container.append(header);



function createGrid(n){
    for (let i = 0 ; i < n*n; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.style['width'] = 1/n*100 + "%";
        div.style['height'] = 1/n*100 + "vh";
        div.addEventListener("mouseover", function(e){
            e.target.style.cssText += 'background-color: blue';
        });
        container.appendChild(div);
    }
}





