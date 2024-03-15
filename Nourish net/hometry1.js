document.getElementById('toggle-reviews').addEventListener('click', function() {
    document.getElementById('default-reviews').classList.toggle('hidden');
});


document.getElementById('name-input').addEventListener('focus', function(){
    this.style.outline='2px solid #FFA559';
})


document.getElementById('name-input').addEventListener('blur', function(){
    this.style.outline='2px solid #ccc';
})

document.querySelector('textarea').addEventListener('focus', function(){
    this.style.outline='2px solid #FFA559';
})

document.querySelector('textarea').addEventListener('blur', function(){
    this.style.outline='2px solid #ccc';
})


document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name-input');
    var commentInput = document.getElementById('comment-input');

    var name = nameInput.value.trim();
    var comment = commentInput.value.trim();

    if (name === '' || comment === '') {
        alert('Please fill in all fields.');
        return;
    }

    addReview(name, comment);
    nameInput.value = '';
    commentInput.value = '';
});

function addReview(name, comment) {
    var reviewContainer = document.getElementById('default-reviews');
    var newReview = document.createElement('div');
    newReview.className = 'review';
    newReview.innerHTML = '<p class="name">' + name + '</p><p>' + comment + '</p>';
    reviewContainer.appendChild(newReview);
}