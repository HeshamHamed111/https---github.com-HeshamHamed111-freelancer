import React from 'react'
import Lessons from '../components/Content';
import ModelButton from '../components/ModuleButton';
import Title from '../components/Title';
import AllCourses from '../components/Courses';

function Page1(props) {
    return(
        <>
        <ModelButton /> 
        <Title text="Unit One 1"/>
        <Lessons />
        <AllCourses />
        </>
    )

}
export default Page1