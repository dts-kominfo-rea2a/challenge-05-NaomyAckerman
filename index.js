const names = ['Halo', 'Angel', 'Nyoman', 'Ketut', 'Aisyah'];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (names, sortFunction) => {
	let nameSort = sortFunction(names);
	let newName = [];
	for (let index = 0; index < nameSort.length; index++) {
		newName.push(index + 1 + '. ' + nameSort[index]);
	}
	return newName;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => {
	return names.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => {
	return names.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
	console.log(sorter?.(names, sortAscending)?.join('\n'));
	console.log(sorter?.(names, sortDescending)?.join('\n'));
})();

module.exports = {
	sorter,
	sortAscending,
	sortDescending,
	names,
};
