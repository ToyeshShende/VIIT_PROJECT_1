import React ,{useState} from 'react';
import showPwdImg from '../components/showpassword.svg';
import hidePwdImg from '../components/hidepassword.svg';

export default function SignupPage() {
  const [pwd1, setPwd1] = useState('');
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);
  const [pwd2, setPwd2] = useState('');
  const [isRevealPwd2, setIsRevealPwd2] = useState(false);
  return (
    <div className="signin-container">
      <div className="left-section">
        <img
          className="leftimage"
          src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1693892933~exp=1693893533~hmac=706f82924443d55abba798d551b9a4309a7d950fc377445ef0358ef62de8384b"
          alt="loading"
        />
      </div>
      <div className="right-section">
        <div className="signin-content">
          <img
            className="logoviit"
            src="https://vierp-test.s3.ap-south-1.amazonaws.com/logo/vit_logo_new.png"
            alt="loading"
          />
          <h2>
            <strong style={{ color: 'rgb(70, 71, 191)' }}>SIGN</strong>
            <strong style={{ color: 'rgb(243, 156, 18)' }}> UP</strong>
            </h2>

          <form>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your EMAIL"
                required
              />
            </div>
            <div className="form-group">
              <div className="pwd-container">
                    <input
                      name="pwd"
                      placeholder="Enter Password"
                      type={isRevealPwd1 ? "text" : "password"}
                      value={pwd1}
                      onChange={e => setPwd1(e.target.value)}
                      required
                    />
                    <img
                      title={isRevealPwd1 ? "Hide password" : "Show password"}
                      src={isRevealPwd1 ? hidePwdImg : showPwdImg}
                      onClick={() => setIsRevealPwd1(prevState => !prevState)} alt='loading'
                    />
                  </div>
            </div>
            <div className="form-group">
            <div className="pwd-container">
                    <input
                      name="pwd2"
                      placeholder="Enter confirm Password"
                      type={isRevealPwd2 ? "text" : "password"}
                      value={pwd2}
                      onChange={e => setPwd2(e.target.value)}
                      required
                    />
                    <img
                      title={isRevealPwd2 ? "Hide password" : "Show password"}
                      src={isRevealPwd2 ? hidePwdImg : showPwdImg}
                      onClick={() => setIsRevealPwd2(prevState => !prevState)} alt='loading'
                    />
                  </div>
            </div>

            <div className="form-group">
              <button className='signupbutton-1'type="submit">Sign Up</button>
            </div>
            <div className="new-user-button">
            <button className='signinbutton-1'type="submit">Already User?</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
