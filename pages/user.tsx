import * as React from "react";
import Link from "next/link";

const User = () => {
  const [userName, setUserName] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <label>
        username
        <input type="text" value={userName} onChange={handleChange} />
      </label>
      <p>{userName} 깃허브 검색하기</p>
      <Link href={`/users/${userName}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default User;
