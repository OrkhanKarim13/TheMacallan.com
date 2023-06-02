import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="signUp">
        <form action="/en">
          <div className="container">
            <div className="formText">
              <p>
                Join The Macallan Society and receive all of the latest news
                from The Macallan
              </p>
            </div>
            <div className="signupPromo">
              <div className="loginInp">
                <input type="text" placeholder="ENTER YOUR EMAIL ADDRESS" />
              </div>
              <div className="loginBtn">
                <Link to="/NewsLetter"><input type="submit" value={"SUBSCRIBE"} /></Link>
                <Link href="/" className="learnBTn">
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default SignUp