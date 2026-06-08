function EventCard(props) {
  return (
    <div className="event-box">

      <img className="event-image" src={props.image} alt={props.title} />

      <h3>{props.title}</h3>

      <p><b>When:</b> {props.date}</p>
      <p><b>Where:</b> {props.location}</p>

      <a className="event-link" href={props.link} target="_blank">
        Learn More
      </a>

    </div>
  )
}

export default EventCard