(function () {

  const selectors = {
    form: 'form',
  };

  const init = () => {
    // get all forms
    const forms = document.querySelectorAll(selectors.form);
    // loop through each form, find all inputs and remove the default browser validation
    forms.forEach((form) => {
      form.querySelectorAll('input').forEach((input) => {
        // remove attribute 'required' from all inputs
        input.removeAttribute('required');
      });
      form.querySelectorAll('select').forEach((select) => {
        // remove attribute 'required' from all inputs
        select.removeAttribute('required');
      });
      form.querySelectorAll('textarea').forEach((textarea) => {
        // remove attribute 'required' from all inputs
        textarea.removeAttribute('required');
      });
    });

    // add event listener to form fields on focus
    forms.forEach((form) => {
      form.querySelectorAll('input').forEach((input) => {
        input.addEventListener('focus', (event) => {
          // get the label element just before the field and remove the class 'text-red-500'
          const label = event.target.previousElementSibling;
          label.classList.remove('text-red-500');
        });
      });
    });
  };

  init();
  
})();