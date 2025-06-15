import React from 'react';

function Results(props) {
    const data = props.ipData ? props.ipData : [];

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20 md:top-0 z-2000 px-4 w-full">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl p-6 md:p-8 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* IP Address */}
                    <div className="text-center lg:text-left lg:border-r lg:border-gray-200 lg:pr-8">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            IP Address
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-gray-900 break-all">
                            {data.ip ? data.ip : "Loading..."}
                        </p>
                    </div>

                    {/* Location */}
                    <div className="text-center lg:text-left lg:border-r lg:border-gray-200 lg:pr-8">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Location
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            {data.city ? data.city : "Loading..."}
                        </p>
                        {data.postal_code && (
                            <p className="text-lg font-semibold text-gray-700 mt-1">
                                {data.postal_code}
                            </p>
                        )}
                    </div>

                    {/* Timezone */}
                    <div className="text-center lg:text-left lg:border-r lg:border-gray-200 lg:pr-8">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            Timezone
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">
                            {data.time_zone ? `UTC ${data.time_zone}` : "Loading..."}
                        </p>
                    </div>

                    {/* ISP */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            ISP
                        </h3>
                        <p className="text-xl md:text-2xl font-bold text-gray-900 break-words">
                            {data.company?.name ? data.company.name : "Loading..."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Results;