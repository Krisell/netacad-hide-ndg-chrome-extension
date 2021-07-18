const NDGModules = [...document.querySelectorAll('li.section')].filter((li) =>
  li.innerText.includes('NDG Online Lab Service'),
)

const updateNdgDisplay = (display) => NDGModules.forEach((ndg) => (ndg.style.display = display))

updateNdgDisplay('none') // Hide by default when extension is activated
chrome.runtime.onMessage.addListener((display) => {
  updateNdgDisplay(display)
})
