const dropdownList = document.getElementById("dropdownList");
const dropdownHeader = document.getElementById("dropdownHeader");
const dropdownArrow = document.getElementById("dropdownArrow");
const selectedItemSpan = document.getElementById("selectedItem");

function dropdown() {
  dropdownList.style.display = dropdownList.style.display === "block" ? "none" : "block";
  dropdownArrow.textContent = dropdownList.style.display === "block" ? "▴" : "▾";
}

function selectItem(item) {
  // Update selected text
  selectedItemSpan.textContent = item.textContent;

  // Clear existing selected
  document.querySelectorAll(".dropdownlistin li").forEach(li => li.classList.remove("selected"));

  // Mark selected
  item.classList.add("selected");

  // Close dropdown
  dropdownList.style.display = "none";
  dropdownArrow.textContent = "▾";
}

// Close dropdown on outside click
document.addEventListener("click", function(e) {
  if (!document.querySelector(".dropdown").contains(e.target)) {
    dropdownList.style.display = "none";
    dropdownArrow.textContent = "▾";
  }
});
