"use client"
import { Gymcontext } from '@/Context/WorkoutContext';
import React, { useContext } from 'react';

const SavedGym = () => {
    const {Saved}=useContext(Gymcontext)
    console.log(Saved)
    return (
        <div>
            
        </div>
    );
};

export default SavedGym;