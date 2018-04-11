document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    console.log('Readystae', xhr.readyState);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function(){

    }

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // // Old way
    // xhr.onreadystatechange = function (){
    //     console.log('Readystae', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function (){

    }

    xhr.send();
}