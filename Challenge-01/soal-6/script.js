const getAngkaTerbesarKedua = (dataNumbers) => {
  if (typeof dataNumbers === "string") {
    // cek apakah tipe data param dataNumber === string jika ya tampilkan error
    return "Error : Inputan Salah, inputan harus berupa angka pada suatu array bukan string !";
  } else if (typeof dataNumbers === "object") {
    // cek apakah tipe data param dataNumber === object jika ya tampilkan error
    const hasilSort = dataNumbers
      .sort((a, b) => {
        //method untuk mengurutkan data
        return a - b;
      })
      .reverse(); //method membalikkan data
    let angkaKedua = hasilSort[1]; //simpan hasil array index ke 1 ke variabel angkaKedua

    // console.log(angkaKedua);
    return angkaKedua;
  } else {
    return "Error : inputan harus berupa beberapa angka pada suatu array bukan 0 / null";
  }
};

let dataAngka = [9, 4, 7, 7, 4, 3, 2, 8, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua("3443"));
