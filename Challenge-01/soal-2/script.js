let checkTypeName = (givenNumber) => {
  if (typeof givenNumber === "string" || typeof givenNumber === "array" || typeof givenNumber === "object") {
    return "Error : Invalid Data Type";
  } else if (givenNumber % 2 === 0) {
    //cek apakah param givenNumber % 2 === 0 jika ya tampilkan genap
    return "GENAP";
  } else if (givenNumber % 2 === 1) {
    //cek apakah param givenNumber % 2 === 1 jika ya tampilkan ganjil
    return "GANJIL";
  } else {
    return "Error : Bro where is the parameter ?";
  }
};

console.log(checkTypeName(10));
console.log(checkTypeName(3));
console.log(checkTypeName("3"));
console.log(checkTypeName({}));
console.log(checkTypeName([]));
console.log(checkTypeName());
