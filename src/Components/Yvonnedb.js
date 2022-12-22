import React from 'react'
import Pic11 from '../Assets/Yvonne2.jpeg'
import Pic22 from '../Assets/Yvonne1.jpeg'
import Pic33 from '../Assets/Yvonne3.jpeg'
import { MdDateRange } from 'react-icons/md'
import '../Styles/Yvonne.css'

const Yvonnedb = () => {
    return (
        <div className='yvonneblog' id='yvonneblog'>
            <div className="coltextyvonne">
                <div className="yvonneheader">
                    <div className='pic11'>
                        <img className='img-fluid' src={Pic11} alt="" width={600} />
                    </div>
                    <div className='yvonnetitle'>
                        <h5 className='h5offshore'>
                            Life of an Offshore Medic
                        </h5>
                        <div className="dateandwriter">
                            <small>by Kathy Price</small> <br />
                            <small><MdDateRange /> December 01, 2022</small>
                        </div>
                    </div>
                </div>

                <p className='firsttime'>
                    4:45 a.m.
                </p>
                <p className='yvonnetext'>
                    Wake and shower, I start  the day with a morning meeting on safety drills and general precautions. The goal of this meeting is to make sure everyone knows the plan and has the knowledge and skills to perform the work. When we have a new crew member (aka “green hand”), they are assigned a mentor. The mentor is a more seasoned crew member and is responsible for showing the new employee how we safely get the work done. We all work rotational schedules: I work four weeks on/two weeks off. My partner works three weeks on/one week off. I have been on the same offshore rig since I moved from onshore.
                </p>

                <p className='yvonnetext'>
                    The main part of my job is looking after the well-being of everyone on board; that is between 90-110 people. Basically I treat any illness that comes my way. Plus I do a lot to prevent problems arising in the first place. On a rig you have a lot of people living in a small space. So one task is to stop the spread of infectious diseases. There isn't really a typical day or even a typical offshore medic role. Each day is different and so is each placing. Some medics focus on putting safety procedures in place, others are more administrative. It depends on the environment, the equipment and current priorities.
                </p>

                <div>
                    <img className='img-fluid' src={Pic22} alt="" width={600} />
                </div>

                <p className='question1'>
                    Can you tell us more about work related injuries?
                </p>

                <p className='yvonnetext'>
                    The extreme environment and unusual equipment inevitably brings challenges. Although in this industry risks are kept to an absolute minimum. Over the years I have seen work related stress, back injuries, chemical dermatitis and other conditions. Also, hearing problems from excess noise, and hand vibration problems from power tools. I have seen some strange injuries and it can be hard to visualise how they happened. So I spend time watching the crew to see exactly what their work involves. Understanding how injuries happen helps prevent them.
                    I carry out workplace assessments to understand every job from both a health and safety perspective. Occupational Health is a real priority in this industry. It is a big interest of mine too. In fact, I'm close to completing a degree in Occupational Health from Robert Gordon's University. I have used my work experience in my studies. For example, I analysed what brought people to our Sick Bay. I found that, in 2014, the most common complaint was muscular conditions. Then I worked with the crew to find safer ways of doing things. It was great. It helped my studies and improved safety on the rigs I've been on.
                </p>

                <p className='question1'>
                    Isn't it a challenge to stay fit in the confined spaces of a rig?
                </p>

                <p className='yvonnetext'>
                    Yes, it is. That's something we have been focusing on with our "Rig Run" competition. It is an idea I helped introduce. Rig Runs last six weeks. It involves cardio exercise in the gym: on the bikes, rowing machine and cross trainer. Each participant's times and distances are carefully recorded. This creates a competition between all the rigs in the area. We have held four Rig Runs in the last two years. They are a great way to get people active and everyone loves them.
                </p>
                <div className="pic33">
                    <img className='img-fluid' src={Pic33} alt="" width={600} />
                </div>

                <p className="question1">
                    How would you sum up your job?
                </p>

                <p className="yvonnetext">
                    I love my job. Especially the autonomy and the travel to unusual places. No two days are the same. It is challenging, but I am always learning and that is really important to me.
                </p>
            </div>
        </div>
    )
}

export default Yvonnedb



