import React from 'react';
import logo from "../images/education.jpeg";
import './AboutUs.css'


const AboutUs = () => {
    return (
        <div className=" bgcolor">
            <h3 className='mt-5'>About us</h3>
            <div class="row">
                <div class="col-md-6 mt-5">
                    <img src={logo} className="w-100 mt-5 " alt="" />

                </div>
                <div class=" col-md-6 mt-5">

                    <div class="ratio ratio-4x3 mt-5">
                        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                    </div>


                </div>
                <p className='p-style'>Founded in June 2018, EDU is a private Institution of Higher Education with a vision to substantially increase the quality and accessibility of higher education.  A new era of innovation in education is unfolding in front of our eyes. Technology is broadening the possibilities available to students and teachers alike, providing never-before-seen levels of convenience and efficiency. Traditional educational models are ceding way to flipped classrooms which highlight a democratic approach to learning, and actually doing, rather than simply memorizing for the sake of passing a test, is valued as a more efficient method of learning. However, millions of people in our global community are suffering from lack of access to quality education and basic healthcare, which is only forecast to worsen in the decades ahead. By harnessing the opportunities afforded to us in this digital age, and by implementing innovative and modern learning methods, we are making it possible for students anywhere in the world to access the transformative educations they need and deserve</p>
            </div>
        </div>
    );
};

export default AboutUs;