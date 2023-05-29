import Header from "./Header";
import Body from "./Body";

export default function Cards(props: any) {
  return (
    <>
      <Header img={props.data.profileImg} username={props.data.username} />
      <Body comment={props.data.comment} />
    </>
  );
}
