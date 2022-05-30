import React from 'react'
import Lessons from '../components/Content';
import ModelButton from '../components/ModuleButton';
import Title from '../components/Title';
import AllCourses from '../components/Courses/AllCourses';

function Page1() {
    return(
        <React.Fragment>
        <ModelButton /> 
        <Title text="Unit One 1"/>
        <Lessons />
        <AllCourses />
        </React.Fragment>
    )

}
export default Page1