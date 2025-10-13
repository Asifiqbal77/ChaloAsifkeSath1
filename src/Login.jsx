import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
       style={{
         height: '100vh',
         backgroundColor: 'aquamarine',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
       }}
    >    
    {/* className='position-absolute top-50 start-50 translate-middle border border-danger' */}
      <div 
      
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '30px',
          width: '300px',
          //boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
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
              border: '2px',
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


                {/* style={{ marginBottom: '20px', fontWeight: 'bold', fontSize: '22px' }} */}

        {isLogin ? (
          <>
            <h2 className='mb-4  fs-3'>Login Form</h2>

            <div className='row mb-2'>
              <div className='col-2 p-2' >Email</div>
              <div className='col-10'>
                <input type="text" placeholder="email here" className='form-control' />
              </div>
            </div>

               <div className='row mb-4'>
              <div className='col-3 p-2' >password</div>
              <div className='col-9'>
                <input type="password" placeholder="pasword" className='form-control'  />
              </div>
            </div>


                {/* login bitton bottom */}
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button">Login</button>
                  </div>

             <div className="mt-3 text-center fs-6">
               Not a member?{' '}
               <a href="#" className="text-primary text-decoration-none">
               Signup now
               </a>
              </div>

              </>
        ) : (
          <>
          <h2 className='mb-5  fs-4'>Signup Form</h2>

          <div className='row mb-2'>
              <div className='col-2 p-2 ' >Name</div>
              <div className='col-10'>
                <input type="text" placeholder="FullName here" className='form-control' />
              </div>
             </div>


            <div className='row mb-2'>
              <div className='col-2 p-2' >Email</div>
              <div className='col-10'>
                <input type="text" placeholder="email here" className='form-control' />
              </div>
            </div>
                 

                 <div className='row mb-4'>
              <div className='col-3 p-2' >password</div>
              <div className='col-9'>
                <input type="password" placeholder="pasword" className='form-control'  />
              </div>
            </div>

             <div className='row mb-4'>
              <div className='col-3 p-2' >psasword</div>
              <div className='col-9'>
                <input type="password" placeholder="Confirm password" className='form-control'  />
              </div>
            </div>


                <div class="d-grid gap-2 col-8 mx-auto">
                    <button class="btn btn-primary" type="button">Signup</button>
                  </div>
            
            <div className="mt-3 text-center fs-6">
               Already have an account{' '}
               <a href="#"  onClick={() => setIsLogin(true)}className="text-primary text-decoration-none  ">
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