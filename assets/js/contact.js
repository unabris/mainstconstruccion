$(function() {
  $('#contact_form').submit(function(e) {
    e.preventDefault();

    if(grecaptcha.getResponse() == "") {
      alert('Are you a robot?');
    } else {
      submitForm(this);
    }
  });

  $('#contact_form  .form__message').click(function() {
    $(this).slideUp();
  });

  function submitForm(element) {
    var sendButton = $(element).siblings('input[type=submit]');

    $.ajax({
      url: $(element).attr('action'),
      method: "POST",
      data: $.grep($(element).serializeArray(), function(e) { return e.name != 'g-recaptcha-response'; }),
      dataType: "json",
      beforeSend: function() {
        sendButton.prop('disabled', true);
      },
      complete: function() {
        $('#contact_form .form__message').html('Gracias por su mensaje').slideDown();
        clearForm();
        sendButton.prop('disabled', false);
      },
      error: function() {
        $('#contact_form .form__message').html('Ha ocurrido un error, inténtelo de nuevo más tarde').slideDown();
        clearForm();
        sendButton.prop('disabled', false);
      }
    });
  }

  function clearForm() {
    $('#contact_form input[type=text]').val('');
    $('#contact_form input[type=email]').val('');
    $('#contact_form textarea').val('');
    grecaptcha.reset();
    // Remove yellow color from autocompleted input fields
    if (navigator.userAgent.toLowerCase().indexOf('chrome') >= 0) {
      $('input:-webkit-autofill').each(function() {
        var text = $(this).val();
        var name = $(this).attr('name');
        $(this).after(this.outerHTML).remove();
        $('input[name=' + name + ']').val(text);
      });
    }
  }
});
