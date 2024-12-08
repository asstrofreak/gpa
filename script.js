let totalPoints = 0;
let totalCredits = 0;
let visitorCount = 0;

// Increment visitor count when the page loads
window.onload = function() {
    visitorCount++;
    document.getElementById('visitor-count').textContent = visitorCount;
};

document.getElementById('gpa-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the selected grade and credits
    const grade = parseFloat(document.getElementById('grade').value);
    const credits = parseFloat(document.getElementById('credits').value);

    // Update the total points and total credits
    totalPoints += grade * credits;
    totalCredits += credits;

    // Create a new list item for the grade and credits
    const listItem = document.createElement('li');
    listItem.textContent = `Grade: ${grade}, Credits: ${credits}`;
    
    document.getElementById('grade-list').appendChild(listItem);

    // Calculate GPA
    const gpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('gpa').textContent = gpa;

    // Reset the form
    document.getElementById('gpa-form').reset();
});

// Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', function() {
    totalPoints = 0;
    totalCredits = 0;
    document.getElementById('gpa').textContent = '0.00';
    document.getElementById('grade-list').innerHTML = '';
    document.getElementById('gpa-form').reset();
});