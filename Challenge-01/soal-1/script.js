function changeWord(selectedWord, changeWord, text) {
  return text.replace(selectedWord, changeWord); //method replace mempunyai 2 param, param 1 untuk teks/kata yang dipilih untuk digantikan, param 2 untuk teks/kata pengganti
}
let kalimat1 = "Andini sangat mencintai kamu selamanya";
let kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "semeru", kalimat2));
