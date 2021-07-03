const NDGModules = [...document.querySelectorAll('li.section')].filter((li) => li.ariaLabel.includes('NDG Online'))

const updateNdgDisplay = (display) => NDGModules.forEach((ndg) => (ndg.style.display = display))

updateNdgDisplay('none') // Hide by default when extension is activated
chrome.runtime.onMessage.addListener((show) => {
  updateNdgDisplay(show ? 'initial' : 'none')
})
