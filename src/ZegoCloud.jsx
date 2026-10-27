import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ZegoCloud = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const joinRoom = useCallback(() => {
        if (!value.trim()) return
        navigate(`/room/${value.trim()}`)
    }, [navigate, value])

    return (
        <div className="relative min-h-dvh overflow-hidden bg-slate-50 px-4 py-10 flex items-center justify-center">
            {/* Soft background blobs */}
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />

            <div className="relative w-full max-w-md">
                {/* Card */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-10">
                    {/* Icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 shadow-lg shadow-indigo-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 text-white"
                        >
                            <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14" />
                            <rect x="3" y="6" width="12" height="12" rx="2" />
                        </svg>
                    </div>

                    <h1 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Video Call
                    </h1>
                    <p className="mt-2 text-center text-sm text-slate-500 sm:text-base">
                        Room ID enter karein aur call join karein
                    </p>

                    {/* Form */}
                    <div className="mt-8 space-y-4">
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                Room ID
                            </label>
                            <input
                                type="text"
                                placeholder="Enter room id"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && joinRoom()}
                                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                            />
                        </div>

                        <button
                            onClick={joinRoom}
                            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-sky-600 hover:shadow-xl active:scale-[0.98]"
                        >
                            JOIN
                        </button>
                    </div>

                    {/* Divider + hint */}
                    <div className="mt-8 border-t border-slate-100 pt-5">
                        <p className="text-center text-xs text-slate-400 sm:text-sm">
                            Same room ID wale log aapas mein connect honge
                        </p>
                    </div>
                </div>

                {/* Feature chips */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                    {['HD Video', 'Clear Audio', 'Secure'].map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ZegoCloud