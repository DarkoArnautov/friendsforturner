let currentSearchTerm = '';

function changeHandler(e) {
    currentSearchTerm = e.target.value;
}

function handleKeyPress(e) {
    if (e && e.key === 'Enter') {
        handleSubmit();
    }
}

function handleSubmit() {
    window.open('https://www.google.com/search?q=site:' + window.location.hostname + ' ' + currentSearchTerm);
}