import { useState } from "react";

const LoginForm = () => {
  const [cardNumber, setCardNumber] = useState("");

  const saveValue = (e) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let newCardNumber = e.target.value;

    if (newCardNumber.slice(-1) === " ")
      newCardNumber = newCardNumber.slice(0, newCardNumber.length - 1);

    if (!(numbers.includes(newCardNumber.slice(-1)) || newCardNumber === ""))
      return null;
    if (newCardNumber.length > 19) return null;

    console.log(newCardNumber, newCardNumber.length);
    console.log(cardNumber, cardNumber.length);

    if (newCardNumber.length === 4 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    if (newCardNumber.length === 9 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    if (newCardNumber.length === 14 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    setCardNumber(newCardNumber);
  };
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <form
          className="w-88 p-5 bg-white text-black rounded-tl-3xl rounded-br-3xl "
          action=""
        >
          <div className="flex flex-col-reverse">
            {/* <input type="email" class="peer" /> */}
            <input
              type="text"
              className="peer"
              id="card-number"
              placeholder="Número de tarjeta"
              value={cardNumber}
              inputMode="decimal"
              onChange={(e) => saveValue(e)}
            />
            <label
              htmlFor="card-number"
              className={`text-xs ${
                cardNumber ? "visible" : "invisible"
              } peer-focus:visible`}
            >
              Número de tarjeta
            </label>
          </div>
          <div>
            <select name="" id="type-document">
              <option value="value1" defaultValue>
                DNI
              </option>
              <option value="value2">CE</option>
              <option value="value3">PAS</option>
            </select>
            <input
              type="text"
              id="number-document"
              placeholder="Número de documento"
            />
          </div>
          <input
            type="text"
            id="number-document"
            placeholder="Número de tarjeta"
          />
          <div>
            <input type="checkbox" id="save-data" />
            <label htmlFor="recordar">Recordar datos</label>
          </div>
          <button>Ingresar</button>
        </form>
        <div className="bg-green-200">
          <button>Regístrate</button>
          <span>|</span>
          <button>Olvidé mi clave web</button>
          <span>|</span>
          <button>Ayuda</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
