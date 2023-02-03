console.log("selectors.js loaded");

function highlight(element)
{
    element.css("background-color", "#fcf30040")
}

function cssSelectors() {
    $('p').css('background-color', '#2a9d8f');


    // using classes
    $('.red-box').css('background-color', '#2a9d8f');


    // using id
    $('#list').css('background-color', '2a9d8f');

    // Multiple Selectors
    $('h1, h2').css('background-color', '#3a86ff');
    $('li:even').css('background-color', 'red');
    
}

function traversingTheDom() {
    // child
    //$('#list').find('li').css('background-color', '#3a86ff')

    // all parents of the ul
   // $('#list').parents('body').css('background-color', '#3a86ff');

    //Direct parents
   // $('#list').parent('div').css('font-size', '20px');
    
    // siblings('div') <- sibling divs of element

    // prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').prev().next('').css('background-color', '#3a86ff');

}


function filtering() {
    // filter
    //$('#list').find('li').filter(':even').css('background-color', '#3a86ff');
    
  /*   $('#list').filter(function (index) {
        return index % 3 === 0;
    }).css('background-color', '#219ebc'); */

    // highlighting
    let items = $('#list').find('li');
    highlight(items);
}

function addingReplacingRemoving() {
    $('ul ul:first').append($("<li>I'm going to be the last item.</li>"));

    $("<li> Now I'm going to be the last item</li>").appendTo("ul ul:first");

    // insert as first child
    $('ul ul:first').prepend($("<li>I'm going to be the first child.</li>"));

    // reverse the syntax
    $("<li>Now I'm First!!</li>").prependTo("ul ul:first");

    //after
    $('.red-box').before("<div class='red-box'> Another Red Box!</div>");

    let text1 = "Last Night, Darth Vader came down from planet Vulcan"

    // Replace 
    $('li').replaceWith('<li>${text1}</li>');

    // Replace all
    $("<div class='green-box'> Created Green Box</div>").replaceAll(".red-box");

    //Remove
    //$('li').remove();

    // detaching = safe
    let detachedItems = $('li').detach();
    $('#content').append(detachedItems);
}

//addingReplacingRemoving();
//filtering();
//traversingTheDom();
//cssSelectors();