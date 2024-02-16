import React, { useState } from 'react';
import '../style/middle.css';
import Slider from './Slider';
import { useUser } from './UserContext';

const Middle = () => {
    const { userData } = useUser();
    console.log('User data in Middle component:', userData);

    const [isSliderOpen, setIsSliderOpen] = useState(false);

    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    };

    return (
        <>
            <div className="middle">
                <div className="side-bar">
                    <div id="menu-button" onClick={toggleSlider}>
                        <div className="menu-line"></div>
                        <div className="menu-line"></div>
                        <div className="menu-line mr"></div>
                    </div>
                    {console.log(userData)}
                    <Slider isOpen={isSliderOpen} toggleSlider={toggleSlider} user={userData} />
                    {/* Use userData directly as a prop */}
                </div>
                <div id="container">
                    <div className="blog-content-one">
                        <div className="blog-one">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                        <div className="blog-two">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                        <div className="blog-three">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                        <div className="blog-four">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                    </div>
                    <div className="blog-content-two">
                        <div className="blog-five">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                        <div className="blog-six">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                        <div className="blog-seven">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div></div>
                        <div className="blog-eight">
                            <div className="blog-img">Img</div>
                            <div className="title-img">Title</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Middle;