import React from 'react';

const Summary = () => {
    return (
        <div class="stats stats-vertical lg:stats-horizontal shadow py-3">

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
    );
};

export default Summary;