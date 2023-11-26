
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'
import { imgUpload } from '../../api/utils'
import useAuth from '../../hooks/useAuth'
// import useSaveUser from '../../hooks/useSaveUser'
import { saveUser } from '../../api/auth'
import { ImSpinner3 } from 'react-icons/im'

const SignUp = () => {

  const navigate = useNavigate()
  const { createUser, updateUserProfile, signInWithGoogle, loading,user } = useAuth()
  const location= useLocation()
  const from= location?.state?.from?.pathname || "/";

  const handleSignUp = async e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]
    console.log(email, name, password)
    console.log(image);

    try {
      // upload image
      const imageData = await imgUpload(image)
      // registration
      const result = await createUser(email, password)
      updateUserProfile(name, imageData?.data?.display_url)
      console.log(result)
      // save user in database
      const dbResponse = await saveUser(result?.user,name)
      console.log(dbResponse);
      // get token
      // await getToken(result?.user?.email)
      toast.success('Registration successful')
      navigate(from,{replace:true})

    }
    catch (error) {
      console.log(error);
      toast.error(error?.message)
    }
  }
  const handleGoogleSignIn = () => {
    try {
      signInWithGoogle()
        .then(result => {
          console.log(result.user);
          saveUser(result?.user, result?.user?.displayName)
          //get token
          // getToken(result?.user?.email)
          toast.success('Successfullly Registered with google')
          navigate(from,{replace:true})
          console.log(loading);
        })
    }
    catch (error) {
      console.log(error);
      toast.error(error?.message)
    }

  }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Building Hub</p>
        </div>
        <form onSubmit={handleSignUp}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                className="file-input file-input-bordered file-input-info w-full max-w-x"
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-info bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-info w-full rounded-md py-3 text-white'
            >
               {loading ? (<ImSpinner3 className='animate-spin m-auto'></ImSpinner3>) : ("Continue")}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp