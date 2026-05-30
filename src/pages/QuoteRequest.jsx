import { useState } from 'react';
import './QuoteRequest.css';

export default function QuoteRequest() {
  const [step, setStep] = useState(1);
  return (

    <main className="quote-page">
    <div className="quote-container">
      <h2>Request a Solar Quote</h2>

      {/* Progress */}
      <div className="progress">
        <div className={step >= 1 ? 'step active' : 'step'}>1</div>
        <div className={step >= 2 ? 'step active' : 'step'}>2</div>
        <div className={step >= 3 ? 'step active' : 'step'}>3</div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="form-step">
          <h3>System Size</h3>
          <input placeholder="e.g. 5kW" />
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="form-step">
          <h3>Location</h3>
          <input placeholder="Your address" />
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="form-step">
          <h3>Budget</h3>
          <input placeholder="₦ Budget range" />
        </div>
      )}

      {/* Buttons */}
      <div className="quote-btns">
        {step > 1 && (
          <button className="back-btn" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {step < 3 ? (
          <button className="next-btn" onClick={() => setStep(step + 1)}>
            Next
          </button>
        ) : (
          <button className="quote-btn">Submit</button>
        )}
      </div>
    </div>
  </main>
  );
}
