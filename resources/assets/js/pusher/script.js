// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('9f9d8b9266b0580d23dd', {
    cluster: 'us2',
    encrypted: true
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
    alert(data.message);
});