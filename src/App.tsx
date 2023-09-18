import React from "react";
import Comment from "./components/comment/Comment";
import style from "./css/App.module.css";
import UseInput from "./hooks/UseInput";
import { UsernameContext } from "./hooks/useUsername";
import data from "./data.json";

function App() {
  const username = UseInput("");
  const [sendUsername, setSendUsername] = React.useState<string|number>("");

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSendUsername(username.value);
    username.clear()
  }

  return (
    <UsernameContext.Provider value={{ username: sendUsername}}>
      <div className={style.app}>

        <form action="" method="post" onSubmit={(e) => onSubmitForm(e)} style={{ display: "flex", justifyContent: "center", gap: "8px", paddingTop: "12px" }}>
          <label htmlFor="username">Name</label>
          <input name="usename" type="text" value={username.value} onChange={username.onChange} />
          <button type="submit" style={{width:"32px"}}>ok</button>
        </form>


        <div className={style.content}>
          <Comment username={"amyrobson"} />
        </div>

      </div>
    </UsernameContext.Provider>
  );
}

export default App;
