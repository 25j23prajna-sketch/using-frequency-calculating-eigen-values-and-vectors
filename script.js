function calculate() {
  let m1 = parseFloat(document.getElementById("m1").value);
  let m2 = parseFloat(document.getElementById("m2").value);
  let k = parseFloat(document.getElementById("k").value);

  // Simplified symmetric system
  let a = (2 * k) / m1;
  let b = -k / m1;
  let c = -k / m2;
  let d = (2 * k) / m2;

  // Eigenvalues of 2x2 matrix
  let trace = a + d;
  let det = a * d - b * c;

  let lambda1 = (trace + Math.sqrt(trace * trace - 4 * det)) / 2;
  let lambda2 = (trace - Math.sqrt(trace * trace - 4 * det)) / 2;

  let w1 = Math.sqrt(lambda1).toFixed(2);
  let w2 = Math.sqrt(lambda2).toFixed(2);

  document.getElementById("result").innerHTML =
    `ω₁ = ${w1} rad/s <br> ω₂ = ${w2} rad/s`;
}
