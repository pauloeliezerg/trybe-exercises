// asterisk challenge (reverse triangle)
let n = 5;
let symbol = "*";
let blank = " ";
let inputLine = "";

for (let lineIndex = 1; lineIndex <= n; lineIndex += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (lineIndex <= n - columnIndex) inputLine += blank;
    else inputLine += symbol;
    if (columnIndex === n) {
      console.log(inputLine);
      inputLine = "";
    }
  }
}
