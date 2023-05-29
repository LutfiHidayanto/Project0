document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;

    document.querySelector('button').onclick = () => {
        counter++;
        document.querySelector('span').innerHTML = counter;
    }
})