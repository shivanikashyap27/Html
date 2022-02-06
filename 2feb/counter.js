let counter_value = 0;
let counter_running = true;

let counter_id = setInterval(function() {
    counter_value = counter_value + 1;
    document.getElementById('seconds').innerText = counter_value;
}, 1000);

document.getElementById('stop_btn').addEventListener('click', function() {
    clearInterval(counter_id);
    counter_running = false;
});

document.getElementById('resume_btn').addEventListener('click', function() {
    if(counter_running == false) {
        counter_id = setInterval(function() {
            counter_value = counter_value + 1;
            document.getElementById('seconds').innerText = counter_value;
        }, 1000);
    }
});