var n = new Array();
n[0] = "Tamara";
n[1] = "ASel";
n[2] = "Aruzhan";
n[3] = "Zhaiya";
n[4] = "Sabina";
n[5] = "Zhanerke";
n[6] = "Asema";
n[7] = "Meruert";

for (let i = 0; i < n.length; i++) {
  let name = n[i];
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log("Goodbye " + name);
  } else {
    console.log("Hello " + name);
  }
}