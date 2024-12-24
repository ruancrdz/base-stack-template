function loadComponent(targetId, componentPath) {
  fetch(componentPath)
    .then((response) => response.text())
    .then((html) => {
      document.getElementById(targetId).innerHTML = html;
    })
    .catch((error) => console.error("Erro ao carregar componente:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  // Carregar componentes
  loadComponent("sidebar", "src/components/sidebar.html");
  loadComponent("modal-container", "src/components/modal.html");
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("modal-open");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("modal-open");
  }
}

// Fechar modal ao clicar fora do conteúdo
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.classList.remove("modal-open");
  }
});

// Atualizar Progresso Horizontal
function updateProgress(elementId, percentage) {
  const progressElement = document.getElementById(elementId);
  progressElement.style.width = `${percentage}%`;
}

// Atualizar Progresso Circular
function updateCircularProgress(circleId, textId, percentage) {
  const circleElement = document.getElementById(circleId);
  const textElement = document.getElementById(textId);
  circleElement.style.background = `conic-gradient(#3498db ${percentage}%, #e0e0e0 ${percentage}%)`;
  textElement.innerText = `${percentage}%`;
}

document.querySelectorAll(".tooltip").forEach((tooltip) => {
  tooltip.addEventListener("mouseover", () => {
    const theme = tooltip.getAttribute("data-theme");
    if (theme) {
      tooltip.classList.add(`tooltip-${theme}`);
    }
  });

  tooltip.addEventListener("mouseout", () => {
    const theme = tooltip.getAttribute("data-theme");
    if (theme) {
      tooltip.classList.remove(`tooltip-${theme}`);
    }
  });
});

// Accordion Functionality
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector(".accordion-icon");

  // Toggle the open class
  content.classList.toggle("open");

  // Change the icon state
  if (content.classList.contains("open")) {
    icon.textContent = "−"; // Minus icon
  } else {
    icon.textContent = "+"; // Plus icon
  }
}

let currentSlide = 0;

function showSlide(index) {
  const slider = document.getElementById("carousel");
  const slides = slider.children;
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Optional: Automatic slider
setInterval(() => {
  nextSlide();
}, 5000);

function showAlert(type, message) {
  const alertContainer = document.getElementById("alertContainer");
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.innerText = message;

  // Remove alert on click
  alert.addEventListener("click", () => {
    alert.remove();
  });

  alertContainer.appendChild(alert);

  // Remove alert after 5 seconds
  setTimeout(() => {
    alert.remove();
  }, 5000);
}

// Select with Search
function filterSelectOptions() {
  const input = document.getElementById("selectSearchInput");
  const filter = input.value.toLowerCase();
  const options = document
    .getElementById("selectOptions")
    .querySelectorAll(".option");

  options.forEach((option) => {
    const text = option.textContent.toLowerCase();
    option.style.display = text.includes(filter) ? "block" : "none";
  });
}

function selectOption(value) {
  const input = document.getElementById("selectSearchInput");
  input.value = value;

  // Close options list
  const optionsList = document.getElementById("selectOptions");
  optionsList.style.display = "none";
}

document.getElementById("selectSearchInput").addEventListener("focus", () => {
  const optionsList = document.getElementById("selectOptions");
  optionsList.style.display = "block";
});

// Drag-and-Drop File Upload
function handleDragOver(event) {
  event.preventDefault();
  event.target.classList.add("drag-over");
}

function handleFileDrop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  displayFiles(files);
}

function handleFileChange(event) {
  const files = event.target.files;
  displayFiles(files);
}

function displayFiles(files) {
  const fileList = document.getElementById("fileList");
  fileList.innerHTML = "";

  Array.from(files).forEach((file) => {
    const fileItem = document.createElement("div");
    fileItem.className = "file-item";
    fileItem.textContent = file.name;
    fileList.appendChild(fileItem);
  });
}

function openTab(event, tabId) {
  // Desativar todas as abas
  const allTabs = document.querySelectorAll(".tab-btn");
  allTabs.forEach((tab) => tab.classList.remove("active"));

  // Esconder todo o conteúdo
  const allPanes = document.querySelectorAll(".tab-pane");
  allPanes.forEach((pane) => pane.classList.remove("active"));

  // Ativar aba clicada e mostrar conteúdo correspondente
  event.currentTarget.classList.add("active");
  document.getElementById(tabId).classList.add("active");
}
