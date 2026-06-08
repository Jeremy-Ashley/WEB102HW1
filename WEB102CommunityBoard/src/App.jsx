import './App.css'
import EventCard from './components/EventCard'

function App() {
  return (
    <div>
      <h1>Events to Look Forward To!</h1>

      <div className="event-container">
      

        <EventCard
          title="50 Years of Music in the Park"
          date="Thursday, June 18, 2026"
          location="TD Pavilion"
          image="https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill%2Cg_auto%2Ch_1200%2Cw_1200/f_auto/q_auto/v1770134333/Mann-Center-Tour_50_Years_Admat_Final_Rev3?_a=BAACwmDQ"
          link="https://philorch.ensembleartsphilly.org/tickets-and-events/orchestra-on-tour/the-mann-center-residency-50-years-of-music-in-the-park"
        />

        <EventCard
          title="The Wizard of Oz in Concert"
          date="Friday, June 26 - Saturday, June 27, 2026"
          location="Marian Anderson Hall"
          image="https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill%2Cg_center%2Ch_1200%2Cw_1200/f_auto/q_auto/v1769805054/wizard-oz-in-concert-orchestra-season_Wiz_2?_a=BAACwmDQ"
          link="https://philorch.ensembleartsphilly.org/tickets-and-events/2025-26-season/the-wizard-of-oz-in-concert"
        />

        <EventCard
          title="Brahms & Liszt"
          date="Friday, July 10, 2026"
          location="Gerald R. Ford Ampitheater"
          image="https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill%2Cg_auto%2Ch_1200%2Cw_1200/f_auto/q_auto/v1770062365/on-tour-bravo-vail-POA_20230712_BravoVail_Yannick_784_TomasCohen?_a=BAACwmDQ"
          link="https://philorch.ensembleartsphilly.org/tickets-and-events/orchestra-on-tour/bravo-vail-tour-brahms-and-liszt"
        />

        <EventCard
          title="Disney's Fantasia in Concert"
          date="Friday, July 17, 2026"
          location="Gerald R. Ford Ampitheater"
          image="https://res.cloudinary.com/dwjhoulgv/image/upload/c_fill%2Cg_auto%2Ch_1200%2Cw_1200/f_auto/q_auto/v1737646437/DC_Fantasia_9?_a=BAACwmDQ"
          link="https://philorch.ensembleartsphilly.org/tickets-and-events/orchestra-on-tour/bravo-vail-tour-disneys-fantasia-in-concert"
        />

        <EventCard
          title="Philadelphia Phillies vs. Toronto Blue Jays"
          date="Sunday, August 9, 2026"
          location="Citizens Bank Park"
          image="https://s3.amazonaws.com/eventticketscenter/thumbs/performers/818-sports-baseballmlb-philadelphia-phillies.webp"
          link="https://www.eventticketscenter.com/philadelphia-phillies-vs-toronto-blue-jays-philadelphia-08-09-2026/7367173/t"
        />


        <EventCard
          title="Philadelphia Phillies vs. New York Mets"
          date="Sunday, June 21"
          location="Citizens Bank Park"
          image="https://s3.amazonaws.com/eventticketscenter/thumbs/performers/818-sports-baseballmlb-philadelphia-phillies.webp"
          link="https://www.eventticketscenter.com/philadelphia-phillies-vs-new-york-mets-philadelphia-06-21-2026/7367144/t"
        />

        <EventCard
          title="Philadelphia Phillies vs. Pittsburgh Pirates"
          date="Wednesday, July 1"
          location="Citizens Bank Park"
          image="https://s3.amazonaws.com/eventticketscenter/thumbs/performers/818-sports-baseballmlb-philadelphia-phillies.webp"
          link="https://www.eventticketscenter.com/philadelphia-phillies-vs-pittsburgh-pirates-philadelphia-07-01-2026/7367151/t"
        />

        <EventCard
          title="Philadelphia Phillies vs. New York Mets"
          date="Thursday, June 18"
          location="Citizens Bank Park"
          image="https://s3.amazonaws.com/eventticketscenter/thumbs/performers/818-sports-baseballmlb-philadelphia-phillies.webp"
          link="https://www.eventticketscenter.com/philadelphia-phillies-vs-new-york-mets-philadelphia-06-18-2026/7367142/t"
        />

        <EventCard
          title="Philadelphia Ice Cream Festival"
          date="July 12, 2026"
          location="Reading terminal Market"
          image="https://static.wixstatic.com/media/0e1be7_e18747c7d9d8428a95fafe71fae43aa9~mv2.jpg/v1/fill/w_840,h_560,al_c,lg_1,q_85,enc_avif,quality_auto/0e1be7_e18747c7d9d8428a95fafe71fae43aa9~mv2.jpg"
          link="https://www.bassettsicecream.com/single-post/plenty-of-sweet-treats-at-reading-terminal-market-ice-cream-festival"
        />
        

        <EventCard
          title="Philly Taco Festival"
          date="August 15, 2026"
          location="Stateside Live"
          image="https://www.eventbrite.com/e/_next/image?url=https%3A%2F%2Fimg.evbuc.com%2Fhttps%253A%252F%252Fcdn.evbuc.com%252Fimages%252F1185480288%252F245916489280%252F1%252Foriginal.20260526-223333%3Fcrop%3Dfocalpoint%26fit%3Dcrop%26w%3D1880%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26fp-x%3D0.656%26fp-y%3D0.388%26s%3D97660c7e45f8744877c527de2f0fba59&w=1880&q=75"
          link="https://www.eventbrite.com/e/philadelphia-taco-festival-tickets-1990449979470?aff=ebdiglgoogleliveevents"
        />

        <EventCard
          title="Sazón Latin Food Festival"
          date="September 19, 2026"
          location="Two Locals Brewing"
          image="https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/641527369_1501933748603949_2670012633048952946_n.jpg?stp=dst-jpg_tt6&cstp=mx2160x1080&ctp=p960x960&_nc_cat=101&ccb=1-7&_nc_sid=75d36f&_nc_ohc=M2XdQ47jVUQQ7kNvwHy1gqb&_nc_oc=AdovQAOC1gyIHXiKsDjpl7e5PlMmmDrb7FTbiTkGZ7cNV0ySaeW-RM9Citqe6bWIV-c&_nc_zt=23&_nc_ht=scontent-iad3-1.xx&_nc_gid=2PnGXxx7OAKXAR2WZS2mBQ&_nc_ss=7b289&oh=00_Af82RRh20HdKAv2MHxjO9gU9Ov8R9YafXNwRCJJQ0vJJtg&oe=6A2C224B"
          link="https://www.facebook.com/events/two-locals-brewing/saz%C3%B3n-latin-food-festival-2026-philadelphias-taste-of-latin-american-food/931456929261588/"
        />

        <EventCard
          title="The Inquirer Food Festival"
          date="November 14, 2016"
          location="The Fillmore Philadelphia"
          image="https://www.inquirer.com/resizer/v2/7W7JTV6MLJBYVOYHC2ISDQ3RCA.jpg?auth=0dbbf286b5457374f34d188a81fc26d31f2a3501779776c892ff9f6ab478468f&width=800&height=533&smart=true"
          link="https://www.inquirer.com/food/inquirer-food-fest-2026-tickets-new-restaurants-20260605.html"
        />

      </div>
    </div>
  )
}

export default App