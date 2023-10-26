<script>
  import { onMount } from "svelte";

  onMount(() => {
    (function () {
      "use strict";
      /*
       * Form Validation
       */

      // Fetch all the forms we want to apply custom validation styles to
      const forms = document.querySelectorAll(".needs-validation");
      const result = document.getElementById("result");
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();

              form.querySelectorAll(":invalid")[0].focus();
            } else {
              /*
               * Form Submission using fetch()
               */

              const formData = new FormData(form);
              event.preventDefault();
              event.stopPropagation();
              const object = {};
              formData.forEach((value, key) => {
                object[key] = value;
              });
              const json = JSON.stringify(object);
              result.innerHTML = "Please wait...";

              fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: json,
              })
                .then(async (response) => {
                  let json = await response.json();
                  if (response.status == 200) {
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                  } else {
                    console.log(response);
                    result.innerHTML = json.message;
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                  }
                })
                .catch((error) => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
                })
                .then(function () {
                  form.reset();
                  form.classList.remove("was-validated");
                  setTimeout(() => {
                    result.style.display = "none";
                  }, 5000);
                });
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  });
</script>

<div class="pt-20 flex flex-col items-center">
  <div class="flex items-center text-white">
    <div class="container mx-auto">
      <div class="max-w-xl mx-auto my-10 p-5 shadow-sm">
        <div class="text-center">
          <h1 class="my-3 text-3xl font-semibold">Contact Us</h1>
          <p>Fill up the form below to send us a message.</p>
        </div>
        <div class="m-7">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
            class="needs-validation"
            novalidate
          >
            <input
              type="hidden"
              name="access_key"
              value="8ca6d088-ce54-4de1-a6ea-7957751c5e28"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Web3Forms"
            />
            <input type="checkbox" name="botcheck" id="" style="display: none;" />
  
            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label for="fname" class="block mb-2 text-sm">First Name</label>
                <input
                  type="text"
                  name="name"
                  id="first_name"
                  required
                  class="w-full px-3 py-2 border bg-black"
                />
                <div
                  class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                  Please provide your first name.
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <label for="lname" class="block mb-2 text-sm">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="lname"
                  required
                  class="w-full px-3 py-2 border bg-black"
                />
                <div
                  class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
                >
                  Please provide your last name.
                </div>
              </div>
            </div>
  
            <div class="flex mb-6 space-x-4">
              <div class="w-full md:w-1/2">
                <label for="email" class="block mb-2 text-sm">Email Address</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="w-full px-3 py-2 border bg-black"
                />
                <div class="empty-feedback text-red-400 text-sm mt-1">
                  Please provide your email address.
                </div>
                <div class="invalid-feedback text-red-400 text-sm mt-1">
                  Please provide a valid email address.
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label for="message" class="block mb-2 text-sm">Your Message</label>
  
              <textarea
                rows="5"
                name="message"
                id="message"
                class="w-full px-3 py-2 border bg-black"
                required
              />
              <div
                class="empty-feedback invalid-feedback text-red-400 text-sm mt-1"
              >
                Please enter your message.
              </div>
            </div>
            <div class="mb-6">
              <button type="submit" class="w-full px-3 py-4 btn btn-outline">
                Send Message
              </button>
            </div>
            <p class="text-base text-center" id="result" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>



<style>
  .invalid-feedback,
  .empty-feedback {
    display: none;
  }

  .was-validated :placeholder-shown:invalid ~ .empty-feedback {
    display: block;
  }

  .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
    display: block;
  }

  .is-invalid,
  .was-validated:invalid {
    border-color: #dc3545;
  }
</style>
