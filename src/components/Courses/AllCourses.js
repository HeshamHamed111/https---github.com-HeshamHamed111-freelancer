import React from 'react'
import pdf from "../../images/pdf.png"
import rar from "../../images/rar.jpg"
import file from "../../images/file.jpg"
import video from "../../images/video.png"
import documents from "../../images/documents.png"
import quiz from "../../images/quiz.png"
import Courses from './courses';

function AllCourses() {
   
  return (
    <React.Fragment>
    <Courses src={pdf} couserName="Course Material 1" upload="Upload Date :" date="April 1 , 2021" valueProgress={80} views="660" viewsAll="880"/>
    <Courses src={rar} couserName="Course Material 2" upload="Upload Date :" date="April 1 , 2021" valueProgress={0} views="" />
    <Courses src={file} couserName="Course Material 3" upload="Upload Date :" date="April 1 , 2021" valueProgress={0} />    
    <Courses src={video} couserName="Video 1" upload="Upload Date :" date="April 1 , 2021" valueProgress={85} views="700" viewsAll="800" />
    <Courses src={video} couserName="Video 2" upload="Upload Date :" date="April 1 , 2021" valueProgress={88} views="720" viewsAll="800" />
    <Courses src={documents} couserName="Assignment 1" />
    <Courses src={documents} couserName="Assignment 2" />
    <Courses src={quiz} couserName="Quiz 1" />
    <Courses src={quiz} couserName="Quiz 2" />
    </React.Fragment>
  )
}

export default AllCourses