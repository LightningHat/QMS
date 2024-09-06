function bookBed() {
    const department = document.getElementById('department').value;
    const bedType = document.getElementById('bed-type').value;
    const admissionDate = document.getElementById('admission-date').value;
    const dischargeDate = document.getElementById('discharge-date').value;

    if (!department || !bedType || !admissionDate || !dischargeDate) {
        alert('Please fill out all fields.');
        return;
    }

    const confirmationDetails = `
        Department: ${department.charAt(0).toUpperCase() + department.slice(1)}<br>
        Bed Type: ${bedType.charAt(0).toUpperCase() + bedType.slice(1)}<br>
        Admission Date: ${admissionDate}<br>
        Expected Discharge Date: ${dischargeDate}
    `;

    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('appointment-form').reset();
}