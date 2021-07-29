import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import { WhatsappIcon, WhatsappShareButton } from 'next-share'

const Msg = () => {
  const router = useRouter()
  const { data } = useSWR(() => `/api/messages?id=${router.query.id}`)
  return (
    <>
      <Head>
        <title>Flash Message - Reading message</title>
      </Head>
      <div className='p-8 mx-auto max-w-md'>
        <img src='/logo.png' className='mx-auto' />
        <h1 className='text-white text-2xl text-center font-bold'>
          Your private message
        </h1>
        <div className='mt-4 p-3 rounded-xl text-white border-0 shadow-sm bg-gray-900 w-full'>
          {!data && <p>Loading...</p>}
          {data && !data.message && (
            <p className='text-center font-bold'>
              ⚡ Invalid or expired message.
            </p>
          )}
          {data && data.message && <p>{data.message}</p>}
        </div>
        <div className='p-8 text-center text-white mx-auto max-w-md flex flex-col justify-center items-center'>
          <span className='mb-4 text-center font-bold'>Share in</span>
          <WhatsappShareButton
            url={`https://flash-message.vercel.app/msg?id=${router.query.id}`}
            title={'run to see, the message expire in 1 minute.'}
            separator=":: "
            >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div className='p-4 text-center'>
          <Link href='/'>
            <a className='text-white'>⬅ Send a new private message</a>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Msg
