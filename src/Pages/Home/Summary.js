import React from 'react';

const Summary = () => {
    return (
        <div>
            <h1 className='text-center text-primary text-bold mt-4 text-3xl'>Business Summary</h1>
            <div class="stats stats-vertical lg:stats-horizontal shadow mt-5 mb-3">

                <div class="stat w-60">
                    <div class="stat-title text-2xl">Served</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc text-2xl"> customers</div>
                </div>
                <div class="stat w-60">
                    <div class="stat-title text-2xl"> Annual revenue</div>
                    <div class="stat-value">120  M+</div>
                    {/* <div class="stat-desc">↗︎ 400 (22%)</div> */}
                </div>
                <div class="stat w-60">
                    {/* <div class="stat-title"></div> */}
                    <div class="stat-value">33K+</div>
                    <div class="stat-desc text-2xl">Reviews</div>
                </div>

                <div class="stat w-60">
                    <div class="stat-title text-2xl">Tools</div>
                    <div class="stat-value">50+</div>
                </div>
            </div>
        </div>
    );
};

export default Summary;