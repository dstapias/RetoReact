import React from 'react';
import { useState } from 'react';

function ProgressBar() {
    const [percentage, setPercentage] = useState(0);
    const handleInputChange = (event) => {
        const value = Math.min(100, Math.max(0, event.target.value)); // Limita el valor entre 0 y 100
        setPercentage(value);
    }
    return (
        <div className="container mt-4">
            <h1>Progress Bar</h1>
            <div className="progress" style={{ height: '30px' }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%`, backgroundColor: '#76c7c0' }}
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {percentage}%
                </div>
            </div>
            <input
                type="number"
                value={percentage}
                onChange={handleInputChange}
                className="form-control mt-2"
                placeholder="Ingrese porcentaje"
            />
        </div>
    );
}
export default ProgressBar;