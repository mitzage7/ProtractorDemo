function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

var a = 4;
var b = ["Hello", "world", "4", "goodbye"];

console.log(b.length + " is the size of the array");
for (var i = 0; i < b.length; i++) {
  console.log(b[i]);
}

var c = new Array();
c[0] = "goodbye";
c[1] = "4";
c[2] = "world";
c[3] = "hello";
c[4] = "bad";

console.log(c.length + " is the size of the array called c");
for (var i = 0; i < c.length; i++) {
  console.log(c[i]);
}

console.log("Print the array numbers in reverse");
for (var j = c.length - 1; j >= 0; j--) {
  console.log(c[j]);
}

var name = "Mihai"; // String literal declaration.

console.log(name.charAt(3)); 
var newName = name.concat("Fratila");
console.log(newName);

console.log(name.indexOf("a"));

//starting index is inclusive and ending index is exclusive.
console.log(name.slice(1, 4));

console.log(name.toUpperCase());

var name = "Mihai     ";

console.log(name.trim());

var name2 = new String("Mihai"); // String object declaration.