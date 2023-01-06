let main = document.querySelector('main')
let root = document.querySelector(':root')
let input = document.getElementById('input')
let result = document.getElementById('result')
let copyBtn = document.getElementById('copyToClipboard')

allowedKeys = ['(',')','/','*','-','+','1','2','3','4','5','6','7','8','9','0','.','%']


input.addEventListener('keydown', function(ev) {
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
  } 
  if (ev.key == 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key == 'Enter') {
    calculate()
  }
})

document.querySelectorAll('.charKey').forEach(function (btn) {
  btn.addEventListener('click', (ev) => {
    input.value += btn.dataset.value
    input.focus()
    })
})

document.querySelector('#clear').addEventListener('click', clear)

document.querySelector('#equal').addEventListener('click', calculate)

function clear () {
  input.value = ''
  input.focus()
}

function calculate () {
  result.value = 'ERRO!'
  result.classList.add('error')
  let givenResult = eval(input.value)
  clear()
  result.value = givenResult
  result.classList.remove('error')
}

document.getElementById('themeSwitcher').addEventListener('click', function(ev) {
  console.log(root)
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--primary-color', '#196335')
    main.dataset.theme = 'light'
  } else {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
})

copyBtn.addEventListener('click', function () {
  if (copyBtn.innerText === 'Copiar') {
    copyBtn.innerText = 'Copiado!'
    result.classList.add('success')
    navigator.clipboard.writeText(result.value)
  } else {
    copyBtn.innerText = 'Copiar'
    result.classList.remove('success')
  }
})

