import React, { CSSProperties, useEffect, useState } from "react";
import { AlertContext, AlertProps } from "./Context";
import { createPortal } from "react-dom";
import styles from "./styles";
import "./mediaQuery.css";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  containerStyle: CSSProperties;
  defaultConfirmText: string;
  buttonStyle: CSSProperties;
}

const Provider: React.FC<Props> = ({
  children,
  containerStyle,
  defaultConfirmText,
  buttonStyle,
}) => {
  const [rootBody, setRootBody] = useState<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps>();
  const open = ({ message, buttons }: AlertProps) => {
    setAlert({ message, buttons });
  };

  const close = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    //open modal when open is called (open sets the message and buttons)
    if (alert) {
      setIsOpen(true);
    }
  }, [alert]);

  useEffect(() => {
    setRootBody(document.body);
  }, []);
  return (
    <AlertContext.Provider value={{ open, close }}>
      {rootBody &&
        isOpen &&
        alert &&
        createPortal(
          <div style={styles.Background}>
            <div
              style={
                containerStyle
                  ? { ...styles.Container, ...containerStyle }
                  : styles.Container
              }
            >
              <div style={styles.CloseButton}>
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
                </svg>
              </div>
              <div style={styles.Message}></div>
              <div
                style={styles.ButtonsContainer}
                className="AlertButtonsMediaQuery"
              >
                {alert.buttons ? (
                  alert.buttons.map((element) => {
                    return (
                      <div
                        style={
                          element.style
                            ? { ...styles.Button, ...element.style }
                            : styles.Button
                        }
                        key={element.label}
                        onClick={() => {
                          if (element.onClick) {
                            element.onClick();
                          }
                        }}
                      >
                        {element.label}
                      </div>
                    );
                  })
                ) : (
                  <div
                    style={
                      buttonStyle
                        ? { ...styles.Button, ...buttonStyle }
                        : styles.Button
                    }
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {defaultConfirmText ? defaultConfirmText : "Yes"}
                  </div>
                )}
              </div>
            </div>
          </div>,
          rootBody
        )}
      {children}
    </AlertContext.Provider>
  );
};

export default Provider;
