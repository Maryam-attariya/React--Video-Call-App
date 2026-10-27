import React, { useEffect, useRef } from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const Video_Room = () => {
    const { id } = useParams()
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return
        const appID = Number(1717966145)
        const serverSecret = "cce862ab12644f8ab631b61c05da1c23";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            'Maryam'
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)
        zp.joinRoom({
            container: containerRef.current,
            sharedLinks: [
                {
                    name: 'Personal link',
                    url: `http://localhost:5173/${id}`
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        })

        return () => {
            zp.destroy()
        }
    }, [id])

    return (
        <div className="flex h-dvh w-full flex-col bg-slate-50">
            {/* Top bar */}
            <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-white"
                        >
                            <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14" />
                            <rect x="3" y="6" width="12" height="12" rx="2" />
                        </svg>
                    </div>
                    <span className="hidden text-base font-semibold text-slate-900 sm:block">
                        Video Call
                    </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-500 sm:text-sm">Room:</span>
                    <span className="max-w-[120px] truncate text-xs font-semibold text-slate-800 sm:max-w-xs sm:text-sm">
                        {id}
                    </span>
                </div>
            </header>

            {/* Video area */}
            <main className="min-h-0 flex-1 p-2 sm:p-4">
                <div className="h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                    <div ref={containerRef} className="h-full w-full" />
                </div>
            </main>
        </div>
    )
}

export default Video_Room