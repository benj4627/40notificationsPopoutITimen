// Fang ikonet øverst til højre - den skal "toggle" om .notifications skal vises
let toggleUserEl = document.querySelector('.toggleUser');

// Fang .notifications
let notificationsEl = document.querySelector('.notifications'); 

// Når man klikker på ikonet, skal .notications vises - I skal finde ud af hvordan det skal gøre, Google og evt. eller spørge om hjælp
toggleUserEl.addEventListener('click', () => {
    // Toggles mellem de pågældende css classes, og på den måde ændrer right fra -100% til 0, sådan at notifications kommer ind på skærmen igen. 
    notificationsEl.classList.toggle('notificationsOpen');
  });


// Her er et bud på hvordan det KUNNE se ud: https://watch.screencastify.com/v/0vbuYrwmHcayz9RFVkYO / https://www.youtube.com/watch?v=TOiEd8WUHxc
// I øvrigt er jeg inspireret af den her: https://dribbble.com/shots/17272091-Notification-Dropdown-for-Earth-Fund
