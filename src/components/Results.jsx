
import React from 'react';

function Results() {
    return (
        <div className="flex justify-center items-center relative top-auto mx-auto">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* IP Address */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">IP Address</h3>
                        <p className="text-lg font-semibold text-gray-900">Test IP</p>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Location</h3>
                        <p className="text-lg font-semibold text-gray-900">Test City</p>
                        <p className="text-lg font-semibold text-gray-900">12345</p>
                    </div>

                    {/* Timezone */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Timezone</h3>
                        <p className="text-lg font-semibold text-gray-900">UTC-05:00</p>
                    </div>

                    {/* ISP */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">ISP</h3>
                        <p className="text-lg font-semibold text-gray-900">Test ISP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;