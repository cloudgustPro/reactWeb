import React from 'react'

const Home = ()=>{
    return (
            <div className='px-12 w-auto '> 

                <div>
                    <h1>MAMA's KITCHEN</h1>
                    <p>Eat, Taste, Enjoy</p>
                </div>

                {/* card container */}
                <div className='mt-20  flex '>
                    <div className='border shadow rounded-lg mr-24'>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="" srcset="" />
                        </div>
                        <div className='pt-4'>
                            <p>Roaseted Egg</p>
                            <p>Egg, Oil, Salt</p>
                        </div>
                    </div>

                    <div className='mt-6 border shadow rounded-lg mr-24'>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="" srcset="" />
                        </div>
                        <div className='pt-4'>
                            <p>Roaseted Egg</p>
                            <p>Egg, Oil, Salt</p>
                        </div>
                    </div>

                    <div className='mt-6 border shadow rounded-lg mr-24'>
                        <div>
                            <img src="https://picsum.photos/200/300" alt="" srcset="" />
                        </div>
                        <div className='pt-4'>
                            <p>Roaseted Egg</p>
                            <p>Egg, Oil, Salt</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Home;