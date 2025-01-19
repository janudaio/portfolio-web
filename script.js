document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.addEventListener('keydown', function (e) {
    if (
        e.key === 'F12' ||
        (e.ctrlKey &&
            (e.key === 'u' ||
                e.key === 'U' ||
                e.key === 'i' ||
                e.key === 'I' ||
                e.key === 'c' ||
                e.key === 'C'))
    ) {
        e.preventDefault();
    }
});
