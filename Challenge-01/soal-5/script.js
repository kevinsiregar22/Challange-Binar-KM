const getSplitName = (personName) => {
  if (typeof personName === "number") {
    //cek apakah tipe data param personName === number jika ya tampilkan error
    return "inputan tidak boleh angka / null";
  } else if (typeof personName === "string") {
    //cek apakah tipe data param personName === string jika ya jalankan blok statment berikut
    let splitPersonName = personName.split(" ");
    let biodata = {
      firstName: [splitPersonName[0]],
      secondName: [splitPersonName[1]],
      lastName: [splitPersonName[2]],
    };

    let obj = Object.entries(biodata); //mengubah ke bentuk array
    // console.log(obj);

    return obj;
  } else {
    return "data tidak boleh kosong";
  }

  // const biodata{
  //   firstName : splitPersonName[0],
  //   middleName : splitPersonName[1],
  //   lastName : splitPersonName[2],
  // }
};

console.log(getSplitName("Aldi Daniela Pratama"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aldi Daniela Pratama Aurora"));
console.log(getSplitName(0));
console.log(getSplitName());
