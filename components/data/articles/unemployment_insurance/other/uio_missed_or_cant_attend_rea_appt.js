import CalJobsLink from '../../common_links/caljobs_link'

export default function missed_or_cant_attend_rea() {
  return(
    <div className="article-div">
      <h4>Missed or Can&#39;t Attend REA Appointment</h4>
      <p>
            If you received a Reemployment and Eligibility Assessment
            Appointment (REA) Notice, you have been scheduled to attend an REA
            appointment and bring the completed REA questionnaire that was sent
            to you. The questionnaire includes a section titled, Work Search
            Questionnaire, where you must list your efforts to seek work for the
            two weeks prior to your appointment. During your scheduled
            interview, the Employment Development Department (EDD) will review
            your efforts to seek work and provide information on appropriate
            services to assist you in returning to work as quickly as possible.
      </p>
      <p>During your appointment, you will have the opportunity to:</p>
      <ul>
        <li>Discuss your work search efforts.</li>
        <li>
                Receive labor market information specific to your job search and
                occupation.
        </li>
        <li>
                Learn about available resources and tools you can use in your
                work search.{" "}
        </li>
        <li>
                Learn about re-employment and re-training services available.
        </li>
      </ul>
      <p>
            At the REA appointment you will create a reemployment plan and agree
            to attend at least one additional mandatory reemployment service
            appointment. The additional service appointment may be after you
            complete the REA interview or it may be scheduled for another date
            and time and potentially in a different location.{" "}
        <b>
                Failure to attend either the REA interview or the additional
                service appointment may affect your eligibility to receive
                Unemployment Insurance benefits.
        </b>
      </p>
      <p>Important!</p>
      <ul>
        <li>
                If you receive other forms from the EDD, you must complete and
                mail the forms as instructed.
        </li>
        <li>
                Failure to complete and mail the forms as instructed may affect
                your eligibility to receive Unemployment Insurance benefits.
        </li>
        <li>
                Prior to the appointment, you must add or update a résumé in
          <CalJobsLink /> (CA’s online job matching system).
        </li>
        <li>
                Failure to register in <CalJobsLink /> may affect your eligibility to
                receive unemployment insurance benefits.
        </li>
      </ul>
    </div>
  )
}