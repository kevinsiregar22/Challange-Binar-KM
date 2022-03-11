const isValidPassword = (givenPassword) => {
  let regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  let uppercase = "@[A-Z]@";
  let lowercase = "@[a-z]@";
  let number = "@[0-9]@";

  if (!givenPassword) {
    return "inputan tidak boleh kosong";
  } else if (typeof givenPassword !== "string") {
    //cek apakah tipe data param givenPassword === string jika ya tampilkan error
    return "Password tidak boleh berupa number";
  } else if (givenPassword.match(regexPass)) {
    //cek apakah tipe data param givenPassword sesuai regex jika ya tampilkan valid
    return "Valid : Memenuhi Requirement Pembuatan Password";
  } else if (givenPassword.length < 8) {
    //cek apakah tipe data param givenPassword.lenght < 8  jika ya tampilkan error
    return "Error : passaword setidaknya minimal 8 Karakter ";
  } else if (givenPassword.length > uppercase.length) {
    //cek apakah tipe data param givenPassword.length >dan tidak mempunyao uppercase jika ya tampilkan error
    return "Error : passaword setidaknya memiliki huruf uppercase";
  } else {
    return "invalid";
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(7));
console.log(isValidPassword());

// else if (givenPassword < 8)
// {
//     return ("Your password must be at least 8 characters");
// }
// else if ((?=.*[A-Z]))
// {
//     return ("Your password must contain at least one letter.");
// }
// else if ((?=.*\d)  < 0)
// {
//     return ("Your password must contain at least one digit.");
// }
