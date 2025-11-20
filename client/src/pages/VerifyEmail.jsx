import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import toast from 'react-hot-toast'

const VerifyEmail = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')

    const code = searchParams.get('code')

    useEffect(() => {
        const verifyEmail = async () => {
            if (!code) {
                setMessage('Invalid verification link')
                setLoading(false)
                return
            }

            try {
                const response = await Axios({
                    ...SummaryApi.verifyEmail, // You need to add this to your SummaryApi
                    data: { code }
                })

                if (response.data.success) {
                    setMessage('Email verified successfully!')
                    toast.success('Email verified successfully!')
                    // Redirect to login after 2 seconds
                    setTimeout(() => {
                        navigate('/login')
                    }, 2000)
                } else {
                    setMessage(response.data.message || 'Verification failed')
                    toast.error(response.data.message || 'Verification failed')
                }
            } catch (error) {
                setMessage('Verification failed. Please try again.')
                toast.error('Verification failed. Please try again.')
                console.error('Verification error:', error)
            } finally {
                setLoading(false)
            }
        }

        verifyEmail()
    }, [code, navigate])

    return (
        <section className='w-full container mx-auto px-2'>
            <div className='bg-white my-4 w-full max-w-lg mx-auto rounded p-7 text-center'>
                {loading ? (
                    <div>
                        <p>Verifying your email...</p>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800 mx-auto mt-4"></div>
                    </div>
                ) : (
                    <div>
                        <p className={`text-lg ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                            {message}
                        </p>
                        {message.includes('successfully') && (
                            <p className="text-gray-600 mt-2">Redirecting to login page...</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default VerifyEmail