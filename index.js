function readM() {
    let dot  = document.getElementById('dots'),
        more = document.getElementById('more'),
        btn = document.getElementById('btn');

        if(dot.style.display == 'none'){
            dot.style.display = 'inline';
            btn.innerHTML = '...read more';
            more.style.display = 'none';
        } else{
            dot.style.display = 'none';
            btn.innerHTML = '...hide';
            more.style.display = 'inline';
        }
}