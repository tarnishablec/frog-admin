const xlsx = require('xlsx');
const fileSaver = require('file-saver');

export function jsonToFile(data, filename) {

	let opts = {
		bookType: 'csv',
		bookSST: false,
		type: 'binary',
	};

	let workSheet = xlsx.utils.json_to_sheet(data);
	let workBook = xlsx.utils.book_new();
	xlsx.utils.book_append_sheet(workBook, workSheet, filename);

	let str = xlsx.write(workBook, opts);

	let blob = new Blob([this.s2ab(str)], {type: '\'application/octet-stream\''});

	fileSaver.saveAs(blob, filename + '.csv');
}

export function s2ab(s) {
	let buf = new ArrayBuffer(s.length);
	let view = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) {
		view[i] = s.charCodeAt(i) & 0xFF;
	}
	return buf;
}
