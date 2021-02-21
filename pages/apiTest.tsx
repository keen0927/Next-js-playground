import fetch from "isomorphic-unfetch";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users/keen0927");
    if (res.status === 200) {
      const user = await res.json();
      return {
        props: { user }
      };
    }
    return { props: {} };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

const apiTest = ({ user }) => {
  const username = user && user.name;
  return <div>UserName : {username}</div>;
};

export default apiTest;
