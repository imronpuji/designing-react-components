import { useState, useEffect } from "react"

// declare global interface for window

declare global {
  interface Window {
    grecaptcha: {
      render: (id: string) => void
      getResponse: () => string
      reset: () => void
    }
    getResponseCaptcha: (token: string) => void
  }
}

const GoogleRecaptchaV2 = () => {
  const [isRecaptchaPassed, setIsRecaptchaPassed] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    if (window) {
      setIsClient(!isClient)
    }
  }, [])

  useEffect(() => {
    if (isClient) {
      window.grecaptcha?.render("g-recaptcha")
      window.getResponseCaptcha = function (token: string) {
        setIsRecaptchaPassed(!isClient)
      }
    }
  }, [isClient])

  return (
    <form action="?">
      <div
        className="g-recaptcha"
        id="g-recaptcha"
        data-sitekey={process.env.NEXT_PUBLIC_GR_SITE_KEY}
        data-callback="getResponseCaptcha"
      ></div>
      <br />
      <button
        className="bg-blue-600 text-white px-8 py-2 rounded-full"
        disabled={!isRecaptchaPassed}
        type="submit"
      >
        submit
      </button>
    </form>
  )
}
export default GoogleRecaptchaV2
