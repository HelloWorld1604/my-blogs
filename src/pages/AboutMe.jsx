import {Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';


import { Bar, Radar } from 'react-chartjs-2';
import {
      Chart as ChartJS,
      CategoryScale,
      RadialLinearScale,
      LinearScale,
      LineElement,
      PointElement,
      BarElement,
      Filler,
      Title,
      Tooltip,
      Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
      CategoryScale,
      RadialLinearScale,
      LinearScale,
      LineElement,
      PointElement,
      BarElement,
      Filler,
      Title,
      Tooltip,
      Legend
);

import './AboutMe.css';

function AboutMe() {

    /* Radar Chart settings --------*/
    const programmingRadarData = {
      labels: ['Python', 'Javascript', 'React'],
      datasets: [
        {
            label: "Programming skill",
            data: [70, 40, 55],
            backgroundColor: "rgba(69, 165, 255, 0.2)",
            borderColor: "#45A5FF",
            borderWidth: 1,
        },
      ],
    };

    const programmingRadarOptions = {
      // Customize your chart options here (e.g., scales, plugins)
      // Example:
      scales: {
        r: {
            ticks: {
                display: false,
          },

            angleLines: {
                display: true,
          },
            suggestedMin: 0,
            suggestedMax: 100,
        },
      },

      // Customize tooltip box
      plugins: {
            tooltip: {
                callbacks: {
                    title: function(context) {
                        if (context[0].label == "Python")
                            return context[0].label + ": "+ "Intermediated";
                        else if (context[0].label == "Javascript")
                            return context[0].label + ": "+ "Beginner";
                        else if (context[0].label == "React")
                            return context[0].label + ": "+ "Beginner";
                    },
                    label: function(context) {
                        return 0;
                    },
                },
        },
      },
    };

    const languageRadarData = {
      labels: ['Vietnamese', 'English', 'Japanese'],
      datasets: [
        {
            label: "Language",
            data: [100, 60, 70],
            backgroundColor: "rgba(255, 90, 90, 0.2)",
            borderColor: "#FF5A5A",
            borderWidth: 1,
        },
      ],
    };

    const languageRadarOptions = {
      // Customize your chart options here (e.g., scales, plugins)
      // Example:
      scales: {
        r: {
            ticks: {
                display: false,
          },
            angleLines: {
            display: true,
          },
            suggestedMin: 0,
            suggestedMax: 100,
        },
      },

      // Customize tooltip box
      plugins: {
            tooltip: {
                callbacks: {
                    title: function(context) {
                        if (context[0].label == "Vietnamese")
                            return context[0].label + ": "+ "Native";
                        else if (context[0].label == "Japanese")
                            return context[0].label + ": "+ "JLPT N3";
                        else if (context[0].label == "English")
                            return context[0].label + ": "+ "level B1";
                    },
                    label: function(context) {
                        return 0;
                    },
                },
        },
      },
    };

    /* Bar Chart settings ----------*/
      const barData = {
        labels: ['Communications', 'Goal Setting', 'Problems Solving', 'Learing Agility'],
        datasets: [
          {
            label: ["Intermediated"],
            skipNull: true,
            data: [72, null, 72, null],
            backgroundColor: "#404040",
            barPercentage: 0.3,
            borderRadius: 5,
          },
          {
            label: ["Advanced"],
            skipNull: true,
            data: [null, 76, null, 88],
            backgroundColor:"#45A5FF",
            barPercentage: 0.3,
            borderRadius: 5,
          },
        ],
      };

      const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },

            title: {
                display: true,
                text: 'Soft skills',
            },
        },

        scales: {
            /* Edit x coordination */
                x: {
                    /* vertical grid - lưới ngang */
                    grid: {
                        display: false,
                    },
                    /* taglines of graph - các mục của trục x */
                    ticks: {
                        font: "Inter",
                        color: "#404040",
                    },
                    /* coordinate x - tọa độ trục x */
                    border: {
                        color: "#404040",
                        width: 3,
                        z: 1,
                    },
                },
            /* Edit y coordination */
                y: {
                    /* horizontal grid - lưới ngang */
                    grid: {
                        display: false,
                    },
                    /* taglines of graph - các mục của trục y */
                    ticks: {
                        display: false,
                    },
                    /* coordinate y - tọa độ trục y */
                    border: {
                        display: false,
                        color: "#404040",
                        width: "2",
                    },
                },
            },

      };


    return (
    
        <div id="about-me">
            <Swiper
                className="slide"
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{clickable:true}}>

                <SwiperSlide>
                    <div className="slides">
                        
                        <div className="left-slide" id="bio-intro">
                            <h1 className="slide-title">Biography</h1>
                            <div id="LHT" />
                            <div className="slide-content-container">
                                <p className="slide-subtitle">My name is</p>
                                <h2 className="slide-headline">LUONG HUYEN TRANG</h2>
                                <p className="slide-content">
                                    I am a student majoring in AI design, and passionate about UX/UI
                                    aiming to create products that are valuable to users, highly motivated
                                    to learn and value teamwork with attentive listening and empathy
                                </p>
                            </div>
                        </div>

                        <div className="right-slide" id="fun-facts">
                            <div className="top-slide">

                                <div className="black-block">
                                    <p className="block-title">MBTI type</p>
                                    <div style={{height:"70px", display:"flex", alignItems:"center"}}><p style={{fontWeight:"bold", fontSize:"50px"}}>INFJ</p></div>
                                    <p className="block-name">Advocate</p>
                                    <p className="block-content">
                                        Từng trải nghiệm và luôn đi tìm ý nghĩa từ những gì mình đã trải qua. Và là một người cực kì thích xây dựng kế hoạch. Sushi takoyaki bim bim hoa quả trái cây dinh dưỡng bồi bổ.
                                    </p>
                                </div>

                                <div className="blue-block">
                                    <p className="block-title">Nationality</p>
                                    <img className="block-icon" src="./icons/Vietnam.png" />
                                    <p className="block-name">Vietnam</p>
                                    <p className="block-content">
                                        Tôi sinh ra và lớn lên ở một đất nước yêu hòa bình, nghìn năm lịch sử đầy hào hùng, khí thế. Cũng là một đất nước nhiều danh lam thắng cảnh đẹp, ẩm thực phong phú...
                                    </p>
                                </div>

                            </div>

                            <div className="bottom-slide">

                                <div className="blue-block">
                                    <p className="block-title">Hobby</p>
                                    <img className="block-icon" src="./icons/Film.png" />
                                    <p className="block-name">Watching anime</p>
                                    <p className="block-content">
                                        Tôi sinh ra và lớn lên ở một đất nước yêu hòa bình, nghìn năm lịch sử đầy hào hùng, khí thế. Cũng là một đất nước nhiều danh lam thắng cảnh đẹp, ẩm thực phong phú...
                                    </p>
                                </div>

                                <div className="black-block">
                                    <p className="block-title">Favorite Pet</p>
                                    <img className="block-icon" src="./icons/Turle.png" />
                                    <p className="block-name">Turle</p>
                                    <p className="block-content">
                                        Tôi sinh ra và lớn lên ở một đất nước yêu hòa bình, nghìn năm lịch sử đầy hào hùng, khí thế. Cũng là một đất nước nhiều danh lam thắng cảnh đẹp, ẩm thực phong phú...
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slides">
                        <div className="left-slide" id="history-timeline">
                            <div className="bio-frame-container">
                                <div className="bio-frame">
                                    <div className="bio-block">
                                        <ul id="bio-timeline">
                                            <li className="timeline-catalog">
                                                <div className="timeline-content">
                                                    <FontAwesomeIcon className="circle-regular-icon" icon={faCircleRegular} />
                                                    <p className="timeline-title">Educations</p> 
                                                </div>

                                                <div className="content-box">
                                                    <p className="timeline-year">2023 - 2025</p>
                                                    <div className="timeline-information">
                                                        <li className="list-infs" >Akamonkai Japanese Language School</li>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <p className="timeline-year">2025 - now</p>
                                                    <div className="timeline-information">
                                                        <li className="list-infs" >Waseda Bunri College of Arts and Sciences</li>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="timeline-catalog">
                                                <div className="timeline-content">
                                                    <FontAwesomeIcon className="circle-regular-icon" icon={faCircleRegular} />
                                                    <p className="timeline-title">Experiences</p> 
                                                </div>

                                                <div className="content-box">
                                                    <div className="timeline-sub-content-container">
                                                        <FontAwesomeIcon className="circle-solid-icon" icon={faCircleSolid} />
                                                        <p className="timeline-sub-content">Extracurriculars</p>
                                                    </div>

                                                    <p className="timeline-year">2022</p>
                                                    <div className="timeline-information" style={{height:"19vh"}}>
                                                        <ul className="list-infs-container">
                                                            <li className="list-infs" ><b>HR</b> - Vietnam and friends project (1 year)</li>
                                                            <li className="list-infs"><b>HR</b> - Bionimation project (6 months)</li>
                                                            <li className="list-infs">Steam for Vietnam Mentorship (4 months):
                                                                                      Introduction To Computer Science With Python</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <p className="timeline-year">2025</p>
                                                    <div className="timeline-information" style={{height:"14vh"}}>
                                                        <ul className="list-infs-container">
                                                            <li className="list-infs" >Waseda Bunri College of Arts and Sciences
                                                                                <br/>Open Campus volunteer</li>
                                                            <li className="list-infs" >Kita Fireworks festival volunteer</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <div className="timeline-sub-content-container">
                                                        <FontAwesomeIcon className="circle-solid-icon" icon={faCircleSolid} />
                                                        <p className="timeline-sub-content">Competitions</p>
                                                    </div>

                                                    <p className="timeline-year">2022</p>
                                                    <div className="timeline-information" style={{height:"5vh"}}>
                                                        <li className="list-infs" >Math Modeling Online Contest (top 19)</li>
                                                    </div>
                                                </div>

                                                <div className="content-box">
                                                    <div className="timeline-sub-content-container">
                                                        <FontAwesomeIcon className="circle-solid-icon" icon={faCircleSolid} />
                                                        <p className="timeline-sub-content">Internships</p>
                                                    </div>

                                                    <p className="timeline-year">2025</p>
                                                    <div className="timeline-information" style={{height:"7vh"}}>
                                                        <li className="list-infs" >USS Co., Ltd. 2027 Graduation Internship:
                                                                                <br/>Fundamentals and Development of System Planning</li>
                                                    </div>
                                                </div>                           
                                            </li>
                                        </ul>   
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-slide" id="skills">
                            <div className="top-slide" id="technical-cata" style={{position:"relative"}}>
                                <p className="slide2-title" id="tech-skill">Technical skills</p>
                                <div className="radar-chart-container">
                                    <div className="radar-chart">
                                        <Radar data={programmingRadarData} options={programmingRadarOptions} />
                                    </div>
                                    <div className="radar-chart">
                                        <Radar data={languageRadarData} options={languageRadarOptions} /> 
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-slide" id="soft-cata" style={{alignItems:"self-end", position:"relative"}}>
                                <p className="slide2-title" id="soft-skill">Soft skills</p>
                                <div className="bar-chart-container">
                                    <Bar data={barData} options={barOptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slides" style={{backgroundColor:"pink", fontFamily: "Michroma"}}>
                        In process...
                    </div>
                </SwiperSlide>
            

            </Swiper>
        </div>
    )
}

export default AboutMe;