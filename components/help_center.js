import style from "../styles/helpcenterstyle.module.scss";
import { MainTopicCard } from "../components/common/main_topic_card";
import { PopularTopicCard } from "../components/common/popular_topic_card";
export default function HelpCenter() {
  return (
    <div className={style.helpCenterWrapper}>
      <div className={style.mainTopicsWrapper}>
        <MainTopicCard
          icon='/assets/icons/suitcase.svg'
          mainText='Unemployment Insurance Benefits (BPO)'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/medical-sign.svg'
          mainText='Disability Insurance Benefits'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/family-icon.svg'
          mainText='Paid Family Leave'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/wrong-icon.svg'
          mainText='Report Fraud'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/call-jobs.svg'
          mainText='Workforce Services'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/suitcase.svg'
          mainText='CalJOBS'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/labor-market-info.svg'
          mainText='Labor Market Information'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/taxes.svg'
          mainText='Taxes'
          handleClick={() => null}
        />
        <MainTopicCard
          icon='/assets/icons/benefit.svg'
          mainText='Benefit Overpayment Collections'
          handleClick={() => null}
        />
      </div>
      <div className={style.popularTopicsWrapper}>
        <div className={style.title}>
          <p>Popular Topics</p>
        </div>
        <div className={style.carouselWrapper}>
          <PopularTopicCard
            questionText='How do I file a new claim?'
            answerText={
              <>
                <p>To file a new claim, use one of the following options:</p>
                <p>
                  Online: <a href='/'> UI OnlineSM </a>UI OnlineSM is the
                  fastest and most convenient way to file your claim...
                </p>
              </>
            }
            handleClick={() => null}
          />
          <PopularTopicCard
            questionText='Certifying Benefits'
            answerText={
              <>
                <p>
                  Reporting Wages While Certifying for Continued Benefits...
                </p>
              </>
            }
            handleClick={() => null}
          />
          <PopularTopicCard
            questionText='Where is my payment?'
            answerText={
              <>
                <p>
                  Reporting Wages While Certifying for Continued Benefits...
                </p>
              </>
            }
            handleClick={() => null}
          />
        </div>
      </div>
    </div>
  );
}
