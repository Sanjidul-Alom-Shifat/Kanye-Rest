// const LoadQuotes = () => {
    // fetch('https://api.kanye.rest/')
    //     .then(response => response.json())
    //     .then(data => DisplayQuotes(data))
    //     .catch(error => console.log(error));  
// }

const LoadQuotes = async () => {
    try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        DisplayQuotes(data);
    }
    catch(error) {
        console.log(error);
    }
}

const DisplayQuotes = Quotes => {
    const BlockQuotes = document.getElementById('quotes-div');
    console.log(Quotes);
    BlockQuotes.innerHTML = `" ${Quotes.quote} "`;
}

LoadQuotes();

document.getElementById('refresh-btn').addEventListener('click', function () {
    LoadQuotes();
})