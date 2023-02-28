function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("first-arrow").style.opacity = "0";
  document.getElementById("first-arrow").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("first-arrow").style.opacity = "1";
  document.getElementById("first-arrow").style.visibility = "visible";
}

function hideSecondArrowOnLoad() {
  const secondArrow = document.getElementById("second-arrow");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 850) {
      secondArrow.style.visibility = "visible";
      secondArrow.style.opacity = "1";
      secondArrow.addEventListener("click", smoothScroll);
    } else {
      secondArrow.style.opacity = "0";
      secondArrow.style.visibility = "hidden";
      secondArrow.removeEventListener("click", smoothScroll);
    }
  });
}

window.addEventListener("load", hideSecondArrowOnLoad);

//Contact Form

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const oregonCapital = this.oregon_capital.value.toLowerCase();

  if (oregonCapital === "salem") {
    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_d2s1obw";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Message sent! :)");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  } else {
    alert("Please enter the correct capital of Oregon!");
  }
});

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("fade-out");
  setTimeout(() => {
    popup.remove();
  }, 500);
}

// Reset URL back to normal without anchor tag:

// const anchorTags = document.querySelectorAll('a[href^="#"]');
// anchorTags.forEach(anchorTag => {
//   anchorTag.addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default behavior of jumping to the anchor
//     const target = document.querySelector(this.hash); // Get the target element
//     const href = this.getAttribute('href'); // Get the href attribute of the anchor tag
//     window.history.replaceState(null, null, href); // Replace the current URL with the URL without the anchor fragment
//     target.scrollIntoView({behavior: 'smooth'}); // Scroll to the target element
//     window.location.replace(window.location.href.split('#')[0]); // Replace the URL back to its original state
//   });
// });
