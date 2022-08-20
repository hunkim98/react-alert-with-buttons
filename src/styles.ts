import { CSSProperties } from "react";

const styles: Record<string, CSSProperties> = {
  Background: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 20px",
  },
  Container: {
    backgroundColor: "white",
    padding: 15,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: 600,
    alignItems: "center",
  },
  CloseButton: {
    cursor: "pointer",
    alignSelf: "flex-end",
    opacity: 0.5,
  },
  Message: {
    alignSelf: "center",
    paddingTop: 15,
    paddingBottom: 20,
    fontSize: "1.2em",
    wordBreak: "keep-all",
    lineHeight: "1.3em",
  },
  ButtonsContainer: {
    display: "flex",
    padding: "20px 0",
    width: "100%",
  },
  Button: {
    cursor: "pointer",
    color: "black",
    background: "none",
    border: "none",
    marginBottom: 10,
    padding: "15px 0",
    fontSize: "1em",
    flex: "1 0",
  },
};
export default styles;
