export default function Header(props: any) {
  return (
    <>
      <img src={props.img} alt="images" />
      <p style={{ fontWeight: 800 }}>{props.username}</p>
    </>
  );
}
