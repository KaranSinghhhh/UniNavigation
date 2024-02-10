import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import NVCImage from '../images/NVC.png';
import Lex17Image from '../images/Lawrence & Eris.png'
import NewmanRealEstate from "../images/NewmanRealEstate.png"
import NewmanLibrary from "../images/NewmanLibrary.jpeg"
import StudentCenter from "../images/StudentCenter.jpeg"
import MarxeSchool from "../images/TheMarxeSchool.jpeg"




function Cards() {
 return (
   <div className='cards'>
     <h1>Baruch Campus</h1>
     <div className="cards__container">
       <div className="cards__wrapper">
         <ul className="cards__items">
         <CardItem
             src={NVCImage}
             text="Newman Vertical Campus"
             label="NVC"
             phone="646-312-1000" // Example phone number
             email="confrencecenter@baruch.cuny.edu"
             address="55 Lexington Ave, New York, NY 10010" // Example address
             elevator = "Express: 2,5,8,11 | Local: 1-13"
             latitude = {40.7402676397689}
             longitude = {-73.983967890}
             zoom = {18}
           
             backContent ={
              <div className='card-back-content'>
                <h3>Student Services</h3>
                <div>
                <a href="https://sacc.baruch.cuny.edu/">SACC</a> offers academic support services to Baruch students. It provides tutoring, workshops, and other resources to help students excel academically.
                <p>NVC 2-116 | 646-312-4830 | <a href="mailto:sacc@baruch.cuny.edu">sacc@baruch.cuny.edu</a></p>    

                <a href="https://studentaffairs.baruch.cuny.edu/starr-career-development-center/">Starr CDC</a> assists students with career development, offering services like resume reviews, career counseling, and internship/job search assistance.
                <p>NVC | 646-312-4670 | <a href="mailto:careerdc@baruch.cuny.edu">careerdc@baruch.cuny.edu</a></p>

                <a href='https://studentaffairs.baruch.cuny.edu/counseling/'>Counseling Center</a> provides mental health services, including individual counseling, group therapy, and wellness workshops.
                <p>646-312-2155 | <a href="mailto:counseling@baruch.cuny.edu">counseling@baruch.cuny.edu</a></p>

                <a href="https://studentaffairs.baruch.cuny.edu/student-disability-services/">Student Disability Services</a> offers accommodations and support for students with disabilities to ensure equal access to college programs and activities.
                <p>NVC 2-272 | 646-312-4590 | <a href="mailto:disability.services@baruch.cuny.edu">disability.services@baruch.cuny.edu</a></p>

                <a href="https://enrollmentmanagement.baruch.cuny.edu/seek/">SEEK Program</a> is a higher education opportunity program providing academic and financial support to eligible students.
                <p>NVC 2-230 | 646-312-4640 | <a href="mailto:seek@baruch.cuny.edu">seek@baruch.cuny.edu</a></p>
                  
                <a href="https://enrollmentmanagement.baruch.cuny.edu/international-student-service-center/">International Student Service Center</a> provides resources and advising for international students on matters like visas, employment, and cultural adjustment.
                <p>NVC | 646-312-2050 | <a href="mailto:issc@baruch.cuny.edu">issc@baruch.cuny.edu</a></p>
                  
                <a href="https://studentaffairs.baruch.cuny.edu/health/">Health Services</a> offers a range of health-related services, including medical care, health education, and wellness programs.
                <p>NVC | 646-312-2040</p>

                <a href="https://blogs.baruch.cuny.edu/writingcenter/">Writing Center</a> provides support for students in improving their writing skills, offering one-on-one tutoring sessions and writing workshops.
                <p>NVC 8-185 | 646-212-4012 | <a href="mailto:writing.center@baruch.cuny.edu">writing.center@baruch.cuny.edu</a></p>

                </div>
              </div>
             }
           
           />

            <CardItem
             src={NewmanLibrary}
             text="William & Anita Newman Library"
             label="Newman Library & Tech Center"
             
             phone="646-312-1610" // Example phone number
             
             email="circulation@baruch.cuny.edu" // Example email
             address="151 East 25th Street, New York, NY 10010" // Example address
             elevator = "1-5(library) - 6(BCTC)"
             latitude = {40.74064}
             longitude = {-73.98294}
             zoom = {18}

             backContent={
              <div>
                <h3>Services</h3>
                <div>
                  <a href="https://library.baruch.cuny.edu/students/scanning-and-printing-services/">Scanning & Printing:</a> The library provides printers and scanners for student use.
                  <p>Location: 2nd Floor </p>

                 
                  <a href="https://guides.newman.baruch.cuny.edu/">Research Guides & Databases:</a> They offer extensive research guides and database access for various subjects.
                
                  <br></br>
                  <a href="https://library.baruch.cuny.edu/students/study-rooms/">Room Reservations:</a> Students can reserve study and presentation rooms through the library.
                
                  <br></br>
                  <a href="https://library.baruch.cuny.edu/help/schedule-a-research-consultation/#:~:text=For%20brief%20or%20basic%20questions,up%20to%2060%20minutes%20long.">Online Chat with a Librarian:</a> A 24/7 online chat service is available for assistance.
                  <p>646-312-1610 or stop by the Reference Desk</p>
                
                  <a href="https://library.baruch.cuny.edu/students/borrowing-library-materials/technology-loan-service/#:~:text=Borrow%20a%20laptop%20or%20a,bank%20on%20the%202nd%20floor.">Technology Loan Service:</a> A wide range of technology items can be loaned out for short loan periods or for the entire semester such as laptops, ipads, graphing calculators, and more.
                </div>
              </div>
             }
           />





            <CardItem
             src={Lex17Image}
             text="Lawrence and Eris Field Building"
             label="17 Lex"
             phone = "646-660-6008"
             address="17 Lexington Ave, New York, NY 10010" // Example address
             elevator = "Local: 1-16"
             latitude = {40.73913799264156}
             longitude = {-73.98477753267724}
             zoom = {18}
            
             backContent = {
              <div className='card-back-content'>
                <h3>Departments</h3>
                <div>
                  <a href="https://weissman.baruch.cuny.edu/weissman-academic-departments/the-department-of-natural-sciences/">Natural Sciences</a>
                  <p>17 Lex Room: 920 | 646-660-6200 | wsas.natsci@baruch.cuny.edu</p>
                </div>

                <h3>Other</h3>
                <div>
                  <a href="https://www.alumni.baruch.cuny.edu/bcf/17llc">17 Lex society</a>
                  <p>bcf@baruch.cuny.edu | 646-660-6061</p>
                </div>


              </div>
             }

           />


           <CardItem
             src={NewmanRealEstate}
             text="Steven L. Newman Real Estate Institute"
             label="Newman Real Estate"
             phone="646-660-6950" // Example phone number
             email="newman.institute@baruch.cuny.edu" // Example email
             address="137 East 22nd Street, New York, NY 10010" // Example address
             latitude = {40.73888}
             longitude = {-73.98457}
             zoom = {18}

             backContent = {
              <div className='card-back-content'>
                <h3>Services</h3>
                <div>
                  <a href="https://www.newmaninstitute.org/">Real Estate Research Guide:</a> This guide is designed to help real estate students and practitioners better understand real estate. It includes various sections on research guidelines, market research, and project due diligence. 
                  <br></br>
                  <a href="https://guides.newman.baruch.cuny.edu/realestatedatabases">Real Estate Database:</a>  A specialized tool to aid in real estate research, likely providing access to relevant data, publications, and industry information.
                  <br></br>
                  <a href="https://zicklin.baruch.cuny.edu/faculty-research/academic-departments/real-estate/zicklin-real-estate-events/">Events:</a> Workshops and seminars on various topics related to real estate, such as market trends, real estate law, property management, and investment strategies.
                </div>
              </div>
             }
           />


           


           <CardItem
             src={StudentCenter}
             text="Aaronson Student Center"
             label="Student Center"
             phone="646-312-3149" // Example phone number
             email="Student.Center@baruch.cuny.edu" // Example email
             address="East 24th Street between Lexington and Third Avenues" // Example address
             latitude = {40.7402676397689}
             longitude = {-73.983967890}
             zoom = {18}
             backContent ={
              <div>
                <h3>Services and Facilities</h3>
                <p>Multipurpose Room: The center includes a large multipurpose room designed for various student activities and events.</p>
                <p>Lounge Areas and Meeting Spaces: There are comfortable lounge areas and meeting spaces within the center, which are equipped with inviting accents like colorful furniture and high ceilings.</p>
                <p>Designated Meeting Areas: The center provides designated meeting areas for over 130 student clubs and organizations at Baruch College.</p>
                <p>Social and Study Space: The center is envisioned as a dynamic and energizing space for students to socialize, study together, and build community.</p>
                <p>Accessibility and Operation: The student center is accessible from East 24th Street and operates on weekdays, offering 90-minute time slots for student use. The center undergoes deep-cleaning between these slots.</p>
                <p>Contribution to Campus Life: The center aims to enhance the on-campus community experience, especially valuable for students transitioning from online to in-person classes.</p>
              </div>
             }
           />


           <CardItem
             src={MarxeSchool}
             text="Marxe School of Public and International Affairs"
             label="Marxe School/Admin Center"
             phone="646-660-6700" // Example phone number
             email="angelina.delgado@baruch.cuny.edu" // Example email
             address="135 East 22nd St, (Lexington Ave & 23rd St) New York, NY 10010" // Example address
             
             latitude = {40.73885}
             longitude = {-73.98490}
             zoom = {18}
             
             backContent = {
              <div>
                <h3>Services</h3>
                <div>
                  <a href="https://baruch-graduate.catalog.cuny.edu/the-campus-student-services-and-student-life/student-services/career-advisement-services">Career Consultations:</a> Individualized support in career planning, job search strategies, and professional development. 
                  <p>646-660-6798 |  <a href="mailto:mspia.careerservices@baruch.cuny.edu">mspia.careerservices@baruch.cuny.edu</a></p>
                
                  <p>Resume and Cover Letter Critiques: Personalized reviews and updates.</p>
                  <p>LinkedIn Profile Analysis: Advice on enhancing LinkedIn presence for professional networking.</p>
                  <p>Mock Interviews: Practice interviews with real-time feedback.</p>
                  <p>Job and Internship Postings: Access to a database with current listings.</p>
                  <p>Networking Opportunities: On-campus recruitment events, job fairs, and career panels.</p>
                  <p>MBTI Career Assessment: Personality type assessments to explore strengths and weaknesses in relation to career paths.</p>
                </div>
              </div>
             }
           />




         </ul>
       </div>


     </div>


    
   </div>
 )
}


export default Cards
