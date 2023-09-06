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
