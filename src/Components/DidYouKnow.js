import React from 'react'
import '../Styles/DidYouKnow.css'
import Oilfield2 from '../Assets/Oil-fields.jpg'
import { MdDateRange } from 'react-icons/md'
import {BsArrowLeft} from 'react-icons/bs'

const DidYouKnow = () => {
    return (
        <div className='didyknow' id='didyouknow'>
            <div className="didyouknowcol">
                <p className='didyouknowblogs'>
                    <BsArrowLeft/> Blogs
                </p>
                <h3 className="didyouknowh3">
                    Did You Know? <br />
                    Top Ten Interesting Oil and Gas Facts
                </h3>
                <div className="dateandwriter1">
                    <small>by Kathy Price</small> <br />
                    <small><MdDateRange /> December 01, 2022</small>
                </div>
                <div className="didyouknowimage1">
                    <img className='img-fluid' src={Oilfield2} alt=""/>
                </div>
                <div className="didyouknowcols">
                    <p className='didyouknowp1'>
                        Fancy learning about oil, and what makes it so fascinating? Well, look no further,
                        While the tide is gradually shifting towards renewable alternatives, the world still depends heavily upon the oil and gas, in a million ways. These are 10 fascinating facts about this sector, sourced from around the world.
                    </p>


                    <p className='didyouknowp'>
                        1. Crude oil is formed from animal and plant matter
                    </p>
                    <p className='didyouknowsmall'>
                        Crude oil originates 300+ million years ago from fossilized organic material such as animals and plants. Consisting of mostly algae and zooplankton, these organisms were the dominant forms of life on earth at that time. These organisms absorbed carbon molecules in their bodies, which, after they die and are buried under rock and mud for centuries, become kerogen. The process of catagenesis turns kerogen into hydrocarbons, which then form crude oil.
                    </p>

                    <p className='didyouknowp'>
                        2. The largest oil and gas company in the world is Saudi Arabian Oil Co.
                    </p>
                    <p className='didyouknowsmall'>
                        The largest oil and gas company in the world by market capitalisation is Saudi Arabian Oil Co, often referred to as Saudi Aramco. With a whopping $1.9 trillion market cap, the company dwarfs the second-largest market cap by an oil company, Exxon Mobil, by an astounding ratio of 10:1. Owning the second-largest proven crude oil reserve in the world at 270 billion barrels, it refines more oil than any other company, with a head-spinning rate of 5.4 million barrels a day. What makes the immensity of this company even more remarkable is that it only went public in 2019.
                    </p>

                    <p className='didyouknowp'>
                        3. Petroleum is older than dinosaurs.
                    </p>
                    <p className='didyouknowsmall'>
                        Ever wonder where the term fossil fuel comes from? Petroleum is made up of hydrocarbons that were originally formed from the remains of ancient plants and animals. In a process that takes millions of years, the combination of underground heat and pressure transforms hydrocarbons into petroleum. Thus, the petroleum we use today was formed from the fossils of animals and plants that pre-date the dinosaurs. The good news is that the earth is capable of producing more petroleum. The bad news is that we might be waiting a while.
                    </p>

                    <p className='didyouknowp'>
                        4. Most oil found in the ocean comes naturally from the ocean floor.
                    </p>
                    <p className='didyouknowsmall'>
                        The ocean floor is the ideal place for oil to form, over the course of millions of years. It acts as a vast landing pad for dead animals and plants (most things that die in the ocean eventually sink to the bottom) and the ultimate resting place for dead matter from land that has been swept into the ocean. Combined with compression, heat, and minimal oxygen over millions of years, petroleum or natural gas is formed. Naturally occurring oil seeps from the ocean floor account for nearly half of the oil released in the ocean environment every year.
                    </p>

                    <p className='didyouknowp'>
                        5. The ancient Egyptians used petroleum as medicine.
                    </p>
                    <p className='didyouknowsmall'>
                        In the ancient times, Egyptians used liquid forms of petroleum as medicine, most likely for dressing wounds, soothing pain and even as a laxative. Back to this date, petroleum jelly has been a staple in the medical and beauty industry for years due to its emollient properties which help the skin to heal.
                    </p>
                    <p className='didyouknowp'>
                        6. Oil has many nicknames
                    </p>
                    <p className='didyouknowsmall'>
                        Oil has a variety of nicknames, including 'Texas Tea', 'Black Gold', 'rock oil, 'petroleum', 'crude', and many more.
                    </p>
                    <p className='didyouknowp'>
                        6. Oil has many nicknames
                    </p>
                    <p className='didyouknowsmall'>
                        Oil has a variety of nicknames, including 'Texas Tea', 'Black Gold', 'rock oil, 'petroleum', 'crude', and many more.
                    </p>


                </div>
            </div>
        </div>
    )
}

export default DidYouKnow