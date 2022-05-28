import React, { useState } from 'react';
import useParts from '../../hooks/useParts';
import BookingModal from './BookingModal';
import Part from './Part';

const Parts = () => {
    const [part,setPart]=useState(null);
    const [parts] = useParts();
    return (
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    parts.map(part => <Part key={part.id} part={part} setPart={setPart}></Part>)
                }
            </div>
            {part && <BookingModal part={part}></BookingModal>}
        </div>
    );
};

export default Parts;