import React, { useState } from 'react';

function BirthdaySelection() {
    const [birthdate, setBirthdate] = useState('');

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };

    return (
        <div>
            <label>Select Your Birthday:</label>
            <input type="date" value={birthdate} onChange={handleBirthdateChange} />
        </div>
    );
}

export default BirthdaySelection;
