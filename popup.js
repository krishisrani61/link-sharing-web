const phoneticMap = {
  A: "Alpha",   B: "Bravo",   C: "Charlie", D: "Delta",   E: "Echo",    F: "Foxtrot",
  G: "Golf",    H: "Hotel",   I: "India",   J: "Juliet",  K: "Kilo",    L: "Lima",
  M: "Mike",    N: "November",O: "Oscar",   P: "Papa",    Q: "Quebec",  R: "Romeo",
  S: "Sierra",  T: "Tango",   U: "Uniform", V: "Victor",  W: "Whiskey", X: "X-ray",
  Y: "Yankee",  Z: "Zulu",
  0: "Zero",    1: "One",     2: "Two",     3: "Three",   4: "Four",
  5: "Five",    6: "Six",     7: "Seven",   8: "Eight",   9: "Nine"
};

chrome.storage.local.get("lastCode", ({ lastCode }) => {
  if (!lastCode) return;

  document.getElementById("code").textContent = `Code: ${lastCode}`;

  const phonetic = lastCode
    .toUpperCase()
    .split("")
    .map(char => phoneticMap[char] || char)
    .join(" ");
  
  document.getElementById("phonetic").textContent = `Phonetic: ${phonetic}`;
});

document.getElementById("copy").onclick = async () => {
  const { lastCode } = await chrome.storage.local.get("lastCode");
  navigator.clipboard.writeText(lastCode);
};
