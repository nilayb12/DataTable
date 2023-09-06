const csvFileInput = document.querySelector("#csvFileInput");
csvFileInput.addEventListener("change", (e) => {
    Papa.parse(csvFileInput.files[0], {
        complete: function(result) {
            if (result.data && result.data.length > 0) {
                htmlTableGen(result.data)
            }
        }
    });
});

function htmlTableGen(content) {
    let csv_preview = document.getElementById('csvTable');
    let html = '<table id="tableData" class="table table-condensed table-hover table-striped" style="width:100%">';

    if (content.length == 0 || typeof(content[0]) === 'undefined') {
        return null
    } else {
        const header = content[0];
        const data = content.slice(1);
        html += '<thead>';
        html += '<tr>';
        header.forEach(function(colData) {
            html += '<th>' + colData + '</th>';
        });
        html += '</tr>';
        html += '</thead>';
        html += '<tbody>';
        data.forEach(function(row) {
            if (header.length === row.length) {
                html += '<tr>';
                row.forEach(function(colData) {
                    html += '<td>' + colData + '</td>';
                });
                html += '</tr>';
            }
        });
        html += '</tbody>';
        html += '</table>';
        csv_preview.innerHTML = html;
        initDataTable();
    }
}

function initDataTable() {
    $('#tableData').dataTable({
        scrollX: true,
        scrollY: (window.innerHeight / 2) + "px",
        dom: 'Bfrtip',
        buttons: [
            'colvis',
            {
                extend: 'csv',
                text: 'Download CSV',
                exportOptions: {
                    columns: ':visible'
                }
            }
        ]
    })
}
