import { useContext, memo, useCallback, useState } from "react";
import { LOCALES } from "../../providers/i18n";
import { AppContext } from "../../providers/context";
import { useBooleanToggle } from "../../Hooks";
import { saveToStorage } from "../../utils/sessionStorage";

const Test = memo(({ onClick }) => {
  console.log("rendering");
  return <button onClick={onClick}>Click me!</button>;
});

const Settings = () => {
  const { state, dispatch } = useContext(AppContext);
  const [isVisible, changeIsVisible] = useBooleanToggle();

  const onChange = (e) => {
    const { value } = e.target;

    dispatch({
      type: "changeCurrency",
      currency: value,
    });
  };

  const onClick = useCallback(() => {
    console.log("Parent's click");
  }, []);

  const onChangeLocale = (e) => {
    const { value } = e.target;
    dispatch({
      type: "setLocale",
      locale: value,
    });
    saveToStorage("locale", value);
  };

  return (
    <>
      <h1>Setting</h1>
      <Test onClick={onClick} />
      <div>
        <form>
          <div>
            <label>
              Currency:
              <select
                name="currency"
                value={state.currency}
                onChange={onChange}
              >
                <option value="UAH">Гривня</option>
                <option value="USD">Dollar</option>
                <option value="EUR">Euro</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Lolale:
              <select
                name="locale"
                value={state.locale}
                onChange={onChangeLocale}
              >
                <option value={LOCALES.UKRAINIAN}>Українська</option>
                <option value={LOCALES.ENGLISH}>English</option>
              </select>
            </label>
          </div>
        </form>
      </div>
      <div>
        <button onClick={changeIsVisible}>Edvanced settings</button>
        {isVisible ? <h2>Edvanced settings</h2> : null}
      </div>
    </>
  );
};

export default Settings;
