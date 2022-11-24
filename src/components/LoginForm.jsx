import { useState } from "react";

const LoginForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [remindData, setRemindData] = useState(false);

  const handleCardNumber = (e) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let newCardNumber = e.target.value;

    if (newCardNumber.slice(-1) === " ")
      newCardNumber = newCardNumber.slice(0, newCardNumber.length - 1);

    if (!(numbers.includes(newCardNumber.slice(-1)) || newCardNumber === ""))
      return null;
    if (newCardNumber.length > 19) return null;

    if (newCardNumber.length === 4 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    if (newCardNumber.length === 9 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    if (newCardNumber.length === 14 && newCardNumber.length > cardNumber.length)
      return setCardNumber(newCardNumber + " ");

    setCardNumber(newCardNumber);
  };

  const handleDocumentNumber = (e) => {
    let newDocumentNumber = e.target.value;
    setDocumentNumber(newDocumentNumber);
  };
  const handlePassword = (e) => {
    let newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleRemindData = (e) => {
    let newRemindData = e.target.checked;
    setRemindData(newRemindData);
  };

  return (
    <div className="bg-login-sm bg-cover h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <form
          className="w-88 p-7 bg-gradient-to-t from-white/95 to-white text-black rounded-tl-3xl rounded-br-3xl"
          action=""
        >
          <div className="relative flex flex-col-reverse py-5">
            <input
              type="text"
              className="peer bg-black/0 h-6 outline-none border-b transition-all duration-200 focus:border-b-2 focus:border-intb-green-login"
              id="card-number"
              value={cardNumber}
              inputMode="decimal"
              onChange={(e) => handleCardNumber(e)}
            />
            <label
              htmlFor="card-number"
              content="Número de tarjeta"
              className={`invisibe absolute left-0 after:content-[attr(content)] peer-focus:bottom-12 peer-focus:text-xs transition-all duration-200 peer-focus:after:text-intb-green-login ${
                cardNumber
                  ? "bottom-12 text-xs after:text-intb-green-login"
                  : "text-sm bottom-6 after:text-gray-400"
              }`}
            ></label>
          </div>
          <div className="flex flex-row gap-2">
            <select
              className="bg-black/0 text-xs w-24 my-5 border-b transition-all duration-200 focus:border-b-2 focus:border-intb-green-login"
              name=""
              id="type-document"
            >
              <option value="value1" defaultValue>
                DNI
              </option>
              <option value="value2">CE</option>
              <option value="value3">PAS</option>
            </select>
            <div className="relative flex flex-col-reverse py-5 w-full">
              <input
                type="text"
                className="peer bg-black/0 h-6 outline-none border-b transition-all duration-200 focus:border-b-2 focus:border-intb-green-login"
                id="document-number"
                value={documentNumber}
                onChange={(e) => handleDocumentNumber(e)}
              />
              <label
                htmlFor="document-number"
                content="Número de documento"
                className={`invisibe absolute left-0 after:content-[attr(content)] peer-focus:bottom-12 peer-focus:text-xs transition-all duration-200 peer-focus:after:text-intb-green-login ${
                  documentNumber
                    ? "bottom-12 text-xs after:text-intb-green-login"
                    : "text-sm bottom-6 after:text-gray-400"
                }`}
              ></label>
            </div>
          </div>
          <div className="relative flex flex-col-reverse py-5 w-full">
            <input
              type="text"
              className="peer bg-black/0 h-6 outline-none border-b transition-all duration-200 focus:border-b-2 focus:border-intb-green-login"
              id="password"
              value={password}
              inputMode="decimal"
              onChange={(e) => handlePassword(e)}
            />
            <label
              htmlFor="password"
              content="Clave web"
              className={`invisibe absolute left-0 after:content-[attr(content)] peer-focus:bottom-12 peer-focus:text-xs transition-all duration-200 peer-focus:after:text-intb-green-login ${
                password
                  ? "bottom-12 text-xs after:text-intb-green-login"
                  : "text-sm bottom-6 after:text-gray-400"
              }`}
            ></label>
          </div>
          <div>
            <input
              className="mr-2 bg-black/0"
              type="checkbox"
              id="remind-data"
              onChange={(e) => handleRemindData(e)}
            />
            <label htmlFor="remind-data">Recordar datos</label>
          </div>
          <div className="w-full flex">
            <button className="text-sm text-white mt-5 w-40 h-10 rounded-sm mx-auto bg-intb-green-login-btn/50">
              Ingresar
            </button>
          </div>
        </form>
        <div className="bg-gradient-to-r from-green-600/80 to-green-900/80">
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
