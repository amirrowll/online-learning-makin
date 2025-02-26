import React, { useState, useEffect } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

interface CaptchaProps {
    setCaptchaId: (id: string) => void;
    setCaptchaImage: (image: string) => void;
    setLoginError: (error: string) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ setCaptchaId, setCaptchaImage, setLoginError }) => {
    const [internalCaptchaId, setInternalCaptchaId] = useState('');
    const [internalCaptchaImage, setInternalCaptchaImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [retryCount, setRetryCount] = useState(0);
    const MAX_RETRIES = 3;

    const handleCaptchaError = (message: string) => {
        setLoginError(message);
        if (retryCount < MAX_RETRIES) {
            setRetryCount(prev => prev + 1);
            setTimeout(generateCaptcha, 1000);
        }
    };

    const generateCaptcha = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://109.230.200.230:8585/api/captcha/Generate-Captcha', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                if (data.captchaId && data.captchaImage) {
                    setInternalCaptchaId(data.captchaId);
                    setInternalCaptchaImage(data.captchaImage);
                    setCaptchaId(data.captchaId);
                    setCaptchaImage(data.captchaImage);
                    setRetryCount(0);
                } else {
                    handleCaptchaError('دریافت کپچا با خطا مواجه شد. در حال تلاش مجدد...');
                }
            } else {
                handleCaptchaError('خطا در دریافت کپچا. در حال تلاش مجدد...');
            }
        } catch (error) {
            handleCaptchaError('خطا در ارتباط با سرور. در حال تلاش مجدد...');
        } finally {
            setIsLoading(false);
        }
    };

    const refreshCaptcha = async () => {
        if (isLoading) return;

        setIsLoading(true);
        try {
            const response = await fetch('https://109.230.200.230:8585/api/captcha/Refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ captchaId: internalCaptchaId }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.captchaId && data.captchaImage) {
                    setInternalCaptchaId(data.captchaId);
                    setInternalCaptchaImage(data.captchaImage);
                    setCaptchaId(data.captchaId);
                    setCaptchaImage(data.captchaImage);
                    setRetryCount(0);
                } else {
                    handleCaptchaError('بارگذاری مجدد کپچا با خطا مواجه شد');
                }
            } else {
                handleCaptchaError('خطا در بارگذاری مجدد کپچا');
            }
        } catch (error) {
            handleCaptchaError('خطا در ارتباط با سرور');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        generateCaptcha();

        return () => {
            // Cleanup
            setInternalCaptchaId('');
            setInternalCaptchaImage('');
        };
    }, []);

    return (
        <div className="relative mt-4">
            {internalCaptchaImage ? (
                <div className="flex items-center justify-between rounded-lg bg-white p-2">
                    <img
                        src={internalCaptchaImage}
                        alt="کد امنیتی"
                        className="h-12 object-contain"
                    />
                    <button
                        type="button"
                        onClick={refreshCaptcha}
                        disabled={isLoading}
                        className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                        aria-label="بارگذاری مجدد کپچا"
                    >
                        <FiRefreshCw
                            className={`size-5 ${isLoading ? 'animate-spin' : ''}`}
                        />
                    </button>
                </div>
            ) : (
                <div className="flex h-16 animate-pulse items-center justify-center rounded-lg bg-gray-100">
                    <span className="text-gray-400">در حال بارگذاری کپچا...</span>
                </div>
            )}
        </div>
    );
};

export default Captcha;