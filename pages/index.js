import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Index = () => {
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      message: '',
      expiresIn: '60',
    },
    onSubmit: async (values) => {
      const result = await fetch('/api/send-message', {
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const json = await result.json()
      router.push('/msg?id=' + json.id)
    },
  })
  return (
    <>
      <Head>
        <title>Flash Message App</title>
      </Head>
      <div className=' mt-20 p-8 mx-auto max-w-md'>
        <img src='/logo.png' className='mx-auto' />
        <h1 className='text-white text-3xl text-center font-bold'>
          Flash Message
        </h1>
        <form onSubmit={form.handleSubmit} className='mt-4'>
          <textarea
            className='p-3 rounded-xl text-white border-0 shadow-sm bg-gray-900 h-28 w-full'
            onChange={form.handleChange}
            value={form.values.message}
            name='message'
            placeholder='type your private message...'
          ></textarea>
          <div className='mt-4 text-center'>
            <label className='text-white'>Your message expires in 1 minute</label>
          </div>
          <button
            type='submit'
            className='mt-4 bg-yellow-600 p-3 rounded-lg w-full h-full hover:bg-yellow-600'
          >
            {' '}
            Send your flash message!
          </button>
        </form>
      </div>
    </>
  )
}
export default Index
