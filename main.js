let trustAdmins = false
let ghostpingprotec = false
let prefix = "[]"

function setTrust(bool) {
    trustAdmins = bool
}

function setGpProt(bool) {
    ghostpingprotec = bool
}

function openTab(categoryName, element, buttonCategory) {
    let tabs = document.getElementsByClassName(categoryName);
    let tabButtons = document.getElementsByClassName(buttonCategory)
    for (let i = 0; i < tabs.length; i++) tabs[i].style.display = "none"
    for (let i = 0; i < tabButtons.length; i++)
        tabButtons[i].className = tabButtons[i].className.replace(" active", "")
    element.className += " active"
}

function generate() {
    let text = document.getElementById("botPrefix").value + "_"
        + document.getElementById("joinMsg").value.replace(/_/gi, " ") + "_"
        + document.getElementById("leaveMsg").value.replace(/_/gi, " ") + "_"
        + trustAdmins + "_"
        + ghostpingprotec + "_"
        + document.getElementById("logchnnlId").value + "_"
        + document.getElementById("jlchnnlId").value + "_"
        + document.getElementById("memberchnnlId").value + "_"
        + document.getElementById("muteroleid").value
    let input = document.getElementById("output")
    input.value = text

}

function copyToClipboard() {
    let copyText = document.getElementById("output")
    navigator.clipboard.writeText(copyText.value).then(r => alert("Copied output!"))
}