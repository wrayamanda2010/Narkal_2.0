$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#form__signup').submit((event) => {
    event.preventDefault();
    var user = {}

    const is_owner = $('#is_owner').val()
    const username = $('#signup__username').val().trim()
    const firstName = $('#signup__first-name').val().trim()
    const lastName = $('#signup__last-name').val().trim()
    const email = $('#signup__email').val().trim()
    const password = $('#signup__password').val()
    const facebook = $('#signup__facebook').val().trim()
    const instagram = $('#signup__instagram').val().trim()
    const twitter = $('#signup__twitter').val().trim()

    user = {
      "is_owner": is_owner,
      "username": username,
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "facebook": facebook,
      "instagram": instagram,
      "twitter": twitter
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(user),
      dataType: 'json',
      type: 'POST',
      url: '/restaurant-signup'
    }

    $.ajax(options)
      .done(function() {
        window.location.href = "/restaurant-info/${id}";
      })
      .fail(($xhr) => {
        window.location.href="/"
      })
  })
})
