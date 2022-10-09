import Section from "../UI/Section";
import style from "./BookSection.module.css";
import bookPic from "../images/book-pic-dark.png";
import ball from "../images/ball.png";
import greenBall from "../images/ball-green.png";
import dumbells from "../images/dumbbells.png";
import BookList from "./BookList";
import OrangeBtn from "../UI/OrangeBtn";
import HeadingTwo from "../UI/HeadingTwo";
import Paragraph from "../UI/Paragraph";

const BookSection = () => {
  return (
    <Section className={style.bookSec}>
      <div className={style.imgSection}>
        <div className={style.images}>
          <div className={style.mainImg}>
            <img src={bookPic} alt="watch" className={style.bookwatch} />
          </div>
          <div className={style.ballImg}>
            <img src={ball} alt="ball" className={style.bookball} />
          </div>
          <div className={style.greenBallImg}>
            <img
              src={greenBall}
              alt="green-ball"
              className={style.bookgreenball}
            />
          </div>
          <div className={style.dumbellImg}>
            <img src={dumbells} alt="black-ball" className={style.dumbells} />
          </div>
        </div>
      </div>

      <div className={style.bookSectionTitle}>
        <HeadingTwo>Book a class</HeadingTwo>
        <Paragraph>
          Track your workouts, get better results, and be the best version of
          you. Less thinking, more lifting.
        </Paragraph>
        <BookList></BookList>

        <div className={style.bookDiscountSec}>
          <p>
            <span style={{ color: "rgb(29, 124, 29)", fontWeight: "700" }}>
              10% Discount
            </span>
            if you’re already using the
            <span style={{ color: "white", fontWeight: "700" }}>
              Fitness Pro
            </span>{" "}
            on App Store
          </p>
        </div>

        <OrangeBtn>Book a class</OrangeBtn>
      </div>
    </Section>
  );
};

export default BookSection;
