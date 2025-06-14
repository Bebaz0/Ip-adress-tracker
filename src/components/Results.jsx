
import React from 'react';

function Results(props) {
    const data = props.ipData? props.ipData : [];
    return (
        <div className="flex justify-center items-center relative top-auto mx-auto">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl p-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    {/* IP Address */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">IP Address</h3>
                        <p className="text-lg font-semibold text-gray-900">{data.ip? data.ip : "Loading"}</p>
                    </div>

                    {/* Location */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Location</h3>
                        <p className="text-lg font-semibold text-gray-900">{data.city? data.city : "Loading"}</p>
                        <p className="text-lg font-semibold text-gray-900">{data.postal_code? data.postal_code : "Loading"}</p>
                    </div>

                    {/* Timezone */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Timezone</h3>
                        <p className="text-lg font-semibold text-gray-900">{data.time_zone? data.time_zone : "Loading"}</p>
                    </div>

                    {/* ISP */}
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">ISP</h3>
                        <p className="text-lg font-semibold text-gray-900">{data.company?.name? data.company.name: "Loading"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;