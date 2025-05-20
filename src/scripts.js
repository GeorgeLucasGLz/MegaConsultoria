const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("leftSlide")) {
        entry.target.classList.add("showLeft");
      } else if (entry.target.classList.contains("topSlide")) {
        entry.target.classList.add("showTop");
      } else if (entry.target.classList.contains("rightSlide")) {
        entry.target.classList.add("showRight");
      } else if (entry.target.classList.contains("topSlideRetard")) {
        entry.target.classList.add("showTopRetard");
      } else if (entry.target.classList.contains("bottomSlide")) {
        entry.target.classList.add("showBottom");
      }
    } else {
      entry.target.classList.remove(
        "showLeft",
        "showTop",
        "showRight",
        "showTopRetard, showBottom"
      );
    }
  });
});

const elementsVisibility = document.querySelectorAll(".hidden-box");
elementsVisibility.forEach((element) => myObserver.observe(element));

// Adicione este código ao arquivo scripts.js
document.addEventListener("DOMContentLoaded", function () {
  // Código de scroll (o que já adicionamos acima)

  // Menu hambúrguer
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-links");

  mobileToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    this.classList.toggle("active");
  });
});

// Script para atualizar o ano automaticamente
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Script para mostrar/ocultar o botão "Back to Top"
window.addEventListener("scroll", function () {
  const backToTop = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Aqui você adicionaria o código para processar o formulário via AJAX

  // Exemplo simplificado de simulação de envio
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("form-success").style.display = "block";

  // Resetar o formulário após 50 segundos
  setTimeout(function () {
    document.getElementById("contactForm").reset();
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("form-success").style.display = "none";
  }, 50000);
});

/* Script para mostrar/esconder botão Back to Top */
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // Atualizar o ano atual no copyright
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Modal functionality

const modal = document.getElementById("simulacaoModal");
const btnOpenModal = document.querySelectorAll(".option-badge");
const span = document.getElementsByClassName("close-modal")[0];

// Open modal when clicking any option badge
btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

// Close modal when clicking the X
span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

// Close modal when clicking outside the modal content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
};

// Form submission
document
  .getElementById("simulacaoForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const valorCredito = document.getElementById("valorCredito").value;
    const entrada = document.getElementById("entrada").value || "0";
    const modalidade = document.getElementById("modalidade").value;
    const valorParcela =
      document.getElementById("valorParcela").value || "A combinar";

    // Format the message
    const message =
      `Olá! Gostaria de simular um crédito com os seguintes dados: %0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Telefone:* ${telefone}%0A` +
      `*Valor do Crédito:* R$ ${parseFloat(valorCredito).toLocaleString(
        "pt-BR",
        { minimumFractionDigits: 2 }
      )}%0A` +
      `*Entrada:* R$ ${parseFloat(entrada).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}%0A` +
      `*Modalidade:* ${modalidade}%0A` +
      `*Valor da Parcela:* ${
        valorParcela === "A combinar"
          ? "A combinar"
          : "R$ " +
            parseFloat(valorParcela).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })
      }`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/55xxxxxxxxxxx?text=${message}`, "_blank");

    // Reset form
    this.reset();
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

// Phone number mask
document.getElementById("telefone").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 10) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (value.length > 5) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else if (value.length > 0) {
    value = value.replace(/^(\d*)/, "($1");
  }

  e.target.value = value;
});

// Helper functions for currency handling
const formatCurrency = (value) => {
  if (!value) return "";
  const number = parseFloat(value);
  return isNaN(number)
    ? ""
    : number.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
};

// Parse currency string to number (e.g., "1.234,56" -> 1234.56)
const parseCurrency = (value) => {
  if (!value) return "";
  // Remove all non-digit except comma and dot
  const cleanValue = value
    .toString()
    .replace(/[^\d,]/g, "")
    .replace(",", ".");
  return parseFloat(cleanValue) || "";
};

// Simple number input validation
const numberInputs = document.querySelectorAll('input[type="number"]');

// Initialize number inputs
numberInputs.forEach((input) => {
  // Ensure minimum value is respected
  input.addEventListener("change", function () {
    if (this.value && this.hasAttribute("min")) {
      const min = parseFloat(this.min);
      if (parseFloat(this.value) < min) {
        this.value = min;
      }
    }
  });
});

// Modal functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal and its content
  const modal = document.getElementById("simulacaoModal");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.querySelector(".close-modal");

  // Function to open modal with animation
  function openModal() {
    // First make it visible
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    // Force reflow
    void modal.offsetHeight;

    // Add show class for fade in effect
    modal.classList.add("show");

    // Reset modal content styles
    modalContent.style.transform = "translateY(0)";
    modalContent.style.opacity = "1";

    // Set focus on first input when modal opens
    const firstInput = modal.querySelector("input, select");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }

  // Function to close modal with animation
  function closeModal() {
    // Start fade out animation
    modal.classList.remove("show");
    modalContent.style.transform = "translateY(20px)";
    modalContent.style.opacity = "0";

    // Wait for animation to complete before hiding
    setTimeout(() => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }, 300);
  }

  // Add click event to all service card buttons and modal buttons
  document.addEventListener("click", function (e) {
    const serviceCta = e.target.closest(".service-cta, .btn-simular");
    if (serviceCta) {
      e.preventDefault();
      openModal();
    }
  });

  // Close modal when clicking the X
  closeBtn.addEventListener("click", closeModal);

  // Close modal when clicking outside the modal content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});

// Format all currency inputs on form submit
document
  .getElementById("simulacaoForm")
  .addEventListener("submit", function (e) {
    const currencyInputs = document.querySelectorAll('input[type="number"]');
    currencyInputs.forEach((input) => {
      if (input.value) {
        const number = parseCurrency(input.value);
        if (!isNaN(number)) {
          input.value = formatCurrency(number);
        }
      }
    });
  });
