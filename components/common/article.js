export default function article(props) {
  return (
    <div className="article-div">
      <h4>{props.h4}</h4>
      {props.children}
    </div>
  )
}