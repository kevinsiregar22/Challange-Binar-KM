const cekEmail = (email) => {
  let Regex = /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;

  if (!email) {
    //cek apakah paramater ada atau tidak , tampilkan error
    return "data tidak boleh kosong";
  } else if (typeof email !== "string") {
    //cek apakah tipe data parameter email tidak sama dengan string
    return "data harus string";
  } else if (email.match(Regex)) {
    // apakah email sesuai dengan kode reGex, jika ya valid
    return "valid";
  } else if (!email.includes("@")) {
    //apakah ada simbol @, jika tidak tampikan error
    return "error : harus mengggunakan @";
  } else {
    return "invalid";
  }
};

console.log(cekEmail("apranata@binar.co.id"));
console.log(cekEmail("apranata@binar.com"));
console.log(cekEmail("apranata@binar"));
console.log(cekEmail("apranata"));
console.log(cekEmail(3222));
console.log(cekEmail());
