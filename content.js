let a = null;

function getElementMouseIsOn(e) {
    a = e.target;
}

function copyStringToClipboard (str) {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

window.onmouseover = getElementMouseIsOn

window.onkeyup = (e) => {
    if (e.key == 'e') {
        let elem = a
        while (true) {
            if (elem && elem.nodeName === 'A') {
                copyStringToClipboard(elem.href)
                console.log(elem.href)
                alert('Achei uma URL e já copiei pra você');
                break
            }
            if (elem) {
                elem = elem.parentElement
                if (elem.nodeName === 'BODY') {
                    console.log('Desculpa, Não achei nenhum link');
                    break;
                }
            } else {
                break
            }
        }
    }
}
