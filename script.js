let display = document.getElementById('display');

function press(value) {
  if (display.value === '0') {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
