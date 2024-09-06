function bookAppointment() {
    const department = document.getElementById('department').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!department || !date || !time) {
        alert('Please fill out all fields.');
        return;
    }

    const confirmationDetails = `
        Department: ${department.charAt(0).toUpperCase() + department.slice(1)}<br>
        Date: ${date}<br>
        Time: ${time}
    `;

    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('appointment-form').reset();
}