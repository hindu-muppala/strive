

export default function json2html(data) {
    // Extract all unique keys to use as headers
    const headers = [...new Set(data.flatMap(obj => Object.keys(obj)))];

    // Begin constructing the HTML table as a string
    let html = `<table data-user="hindumuppala@gmail.com">\n  <thead>\n    <tr>`;
    headers.forEach(header => {
        html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;

    // Add each row from the data
    data.forEach(row => {
        html += `    <tr>`;
        headers.forEach(header => {
            html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
        });
        html += `</tr>\n`;
    });

    html += `  </tbody>\n</table>`;
    return html;
}
