import './SignIn.css'

export default function SignIn() {
  return (
    <div className="sign-in">
      <div className="rectangle-1">
      </div>
      <div className="container-3">
        <div className="logo">
          <div className="icon">
            <img className="group" src="assets/vectors/Group18_x2.svg" />
          </div>
          <span className="expense-tracker">
            ExpenseTracker
          </span>
        </div>
        <div className="text">
          <div className="sign-in-1">
            Sign In
          </div>
          <span className="welcome-back-to-effortless-expense-tracking-your-financial-dashboard-awaits">
            Welcome back to effortless expense tracking! Your financial dashboard awaits.
          </span>
        </div>
        <div className="email">
          <span className="email-1">
            Email
          </span>
        </div>
        <div className="password">
          <span className="password-1">
            Password
          </span>
          <img className="eye-off" src="assets/vectors/EyeOff8_x2.svg" />
        </div>
        <div className="container-2">
          <div className="block">
            <div className="container">
              <img className="arrow-15" src="assets/vectors/Arrow1532_x2.svg" />
            </div>
            <div className="text-1">
              <div className="your-balance">
                Your balance
              </div>
              <span className="container">
                $632.000
              </span>
            </div>
            <div className="container-1">
              <span className="container-1">
                +1.29%
              </span>
            </div>
          </div>
          <div className="btns">
            <div className="sign-in-2">
              <span className="sign-in-3">
                Sign In
              </span>
            </div>
            <p className="label">
              <span className="label-sub-14"></span><span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}