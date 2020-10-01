import Article from "../../../../common/article";

export default function bpo_locked_out_of_account() {
  return (
    <Article h4="I Was Locked Out of My Account">
      <p>You will be locked out of your account if:</p>
      <ol>
        <li>
          You exceed the maximum number of attempts by entering the
          wrong password.
        </li>
        <li>
          You exceed the maximum number of attempts by typing the wrong
          answers to your security questions.
        </li>
      </ol>
      <p>
        If you are locked out, you can try to log in again later. Wait at
        least one hour before trying again.
      </p>
    </Article>
  );
}
