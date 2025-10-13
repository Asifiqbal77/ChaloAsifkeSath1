import React, { useState } from 'react';
// import bachgr from './assets/backgr.avif';
import pic3 from './assets/pic3.avif'
function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'transparent',
        backgroundImage: `url(${pic3})`,
   
        backgroundSize: '100vh',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
      }}
    >
      <div
        style={{
          backgroundColor: 'transparent', // keep card white for readability
          border:'2px solid white',
          borderRadius: '12px',
          padding: '30px',
          width: '500px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }}
      >
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: isLogin ? '#003b5b' : '#eee',
              color: isLogin ? '#fff' : '#333',
              border: 'none',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: !isLogin ? '#003b5b' : '#eee',
              color: !isLogin ? '#fff' : '#333',
              border: 'none',
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <>
            <h2 className='mb-4 fs-3 text-white'>Login Form</h2>

            <div className='row mb-2'>
              <div className='col text-white'>Email</div>
              </div>
              <div className='row '>
              <div className='col'>
                <input type="text" placeholder="email here" className='form-control mb-3' />
              </div>
            </div>

            <div className='row'>
              <div className='col text-white'>password</div>
              </div>
              <div className='row'>
              <div className='col'>
                <input type="password" placeholder="pasword" className='form-control mb-3' />
              </div>
            </div>

            {/* login button bottom */}
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">Login</button>
            </div>

            <div className="mt-3 text-center fs-6 text-white">
              Not a member?{' '}
              <a href="#" className="text-primary text-decoration-none">
                Signup now
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className='mb-3 fs-4 text-white'>Signup Form</h2>

            <div className='row'>
              <div className='col text-white'>Name</div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <input type="text" placeholder="FullName here" className='form-control mb-3' />
              </div>
            </div>

            <div className='row'>
              <div className='col text-white'>Email</div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <input type="text" placeholder="email here" className='form-control mb-3' />
              </div>
            </div>

            <div className='row'>
              <div className='col text-white'>password</div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <input type="password" placeholder="pasword" className='form-control mb-3' />
              </div>
            </div>

            <div className='row'>
              <div className='col text-white'>psasword</div>
            </div>
            <div className='row mb-2'>
              <div className='col'>
                <input type="password" placeholder="Confirm password" className='form-control mb-3' />
              </div>
            </div>

            <div className="d-grid gap-2 col-8 mx-auto">
              <button className="btn btn-primary" type="button">Signup</button>
            </div>

            <div className="mt-3 text-center fs-6 text-white">
              Already have an account{' '}
              <a href="#" onClick={() => setIsLogin(true)} className="text-primary text-decoration-none">
                Login
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
