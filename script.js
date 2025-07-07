
function calculate() {
  let t = parseFloat(document.getElementById('thanawya').value) || 0;
  let q = parseFloat(document.getElementById('qodrat').value) || 0;
  let h = parseFloat(document.getElementById('tahsili').value) || 0;

  if (t > 100 || q > 100 || h > 100) {
    document.getElementById('result').innerText = "يجب ألا تتجاوز الدرجات 100";
    return;
  }

  let result = (t * 0.3) + (q * 0.3) + (h * 0.4);
  document.getElementById('result').innerText = "النسبة الموزونة: " + result.toFixed(2) + "%";
}
