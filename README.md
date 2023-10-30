# Dynamic Datatable
A JavaScript Project to upload & view a .csv file and apply search, sort & filter to it without modifying the source.
Tested upto 70K Records in a single file.

## Tech Stack:
- [Datatable](https://datatables.net/)
- [PapaParse](https://www.papaparse.com/)
- [JQuery](https://jquery.com/)
- [PHP](https://www.php.net/)

### Note:
- May get stuck processing very large files (might even crash the browser with 'Out of Memory' error), if browser doesn't crash just wait until it starts responding.
- An alternate Index file has been added that has the ability to SCAN a Directory (Working Dir by Default), LIST all Files in a DropDownList and then Choose one to Process. Just Deploy index.php instead of index.html to see it in action. I don't want the Project to get flagged so I didn't deploy it 😅
