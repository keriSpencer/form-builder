// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let fields = document.getElementById('fields')
let template = ""
for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'select') {
    template += "<select type='" + formData[i].select + "' id='" + formData[i].id + "'>"
    template += "<option value='' disable selected>" + formData[4].label + "</option>"
    for (let j = 0; j < formData[i].options.length; j++) {
      template += "<option value='" + formData[i].options[j].value + "'>" + formData[i].options[j].label + "</option>"
    }
    template += "</select>"
  } else {
    template += "<input type='" + formData[i].type + "' id='" + formData[i].id + "' type='>" + formData[i].type + "' placeholder='" + formData[i].label + "'>"
  }
}

fields.innerHTML = template




//
//
// ( function(){
//   let last = formData[ 1 ]
//   console.log( last )
//   console.log( last.label )
// })();
//
// ( function(){
//   let email = formData[ 2 ]
//   console.log( email )
//   console.log( email.label )
// })();
//
// ( function(){
//   let website = formData[ 3 ]
//   console.log( website )
//   console.log( website.label )
// })();
//
// ( function(){
//   let language = formData[ 4 ]
//   console.log( language )
//   console.log( language.label )
// })();
//
// ( function(){
//   let comment = formData[ 5 ]
//   console.log( comment )
//   console.log( comment.label )
// } )();
//
// ( function(){
//   let mobile = formData[ 6 ]
//   console.log( mobile )
//   console.log( mobile.label )
// })();
//
// ( function(){
//   let homePhone = formData[ 7 ]
//   console.log( homePhone )
//   console.log( homePhone.label )
// })();
