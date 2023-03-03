import { useEffect } from "react";
import { useState } from "react";

const Payment = () => {
  const initialMethods = {
    evc: false,
    zaad: false,
    sahal: false,
  };
  const [paymentMethod, setPaymentMethod] = useState(initialMethods);
  const [update, setUpdate] = useState(false);

  useEffect(() => {}, [update]);

  return (
    <div>
      <h4>pay with</h4>
      <div className="payment-cards">
        <div
          className={`payment-card ${paymentMethod.zaad && "selected"}`}
          onClick={() => setPaymentMethod({ ...initialMethods, zaad: true })}
        >
          <h3>Zaad service</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.evc && "selected"}`}
          onClick={() => setPaymentMethod({ ...initialMethods, evc: true })}
        >
          <h3>EVC Plus</h3>
        </div>
        <div
          className={`payment-card ${paymentMethod.sahal && "selected"}`}
          onClick={() => setPaymentMethod({ ...initialMethods, sahal: true })}
        >
          <h3>sahal</h3>
        </div>

        <form>
          <input type="text" className="form-control" placeholder="25261..." />
          <button className="btn-proceed">proceed</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
