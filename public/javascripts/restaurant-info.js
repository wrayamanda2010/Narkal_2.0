$(document).ready(function() {
  'use strict';

  // eslint-disable-next-line max-statements
  $('#basic-info').submit((event) => {
    event.preventDefault();
    var rest = {}

    const
    const restName = $('#basic-info__name').val().trim()
    const email = $('#basic-info__email').val().trim()
    const hoursOperation = $('#basic-info__hours').val().trim()
    const streetAddressOne = $('#basic-info__address_one').val().trim()
    const streetAddressTwo = $('#basic-info__address_two').val().trim()
    const city = $('#basic-info__city').val().trim()
    const state = $('#basic-info__state').val().trim()
    const zip = $('#basic-info__zipcode').val().trim()
    const phone = $('#basic-info__phone').val().trim()
    const country = $('#basic-info__country').val().trim()
    const facebook = $('#basic-info__facebook').val().trim()
    const instagram = $('#basic-info__instagram').val().trim()
    const twitter = $('#basic-info__twitter').val().trim()
    const expense_1 = $('#expense__1').val()
    const expense_2 = $('#expense__2').val()
    const expense_3 = $('#expense__3').val()
    const expense_4 = $('#expense__4').val()


    rest = {
      "restName": restName,
      "email": email,
      "hours-operation": hoursOperation,
      "address_one": streetAddressOne,
      "address_two": streetAddressTwo,
      "city": city,
      "state": state,
      "zip": zip,
      "phone": phone,
      "country": country,
      "facebook": facebook,
      "instagram": instagram,
      "twitter": twitter,
      "expense_1": expense_1,
      "expense_2": expense_2,
      "expense_3": expense_3,
      "expense_4": expense_4

    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify(rest),
      dataType: 'json',
      type: 'POST',
      url: '/restaurant-info'
    }

    $.ajax(options)
      .done(function(resp) {
        window.location.href = "/restaurant-options"
      })
      .fail(($xhr) => {
        window.location.href = "/restaurant-info"
      })
  })
})
