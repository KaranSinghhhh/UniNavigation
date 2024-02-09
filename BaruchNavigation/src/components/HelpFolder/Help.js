import React, { useState } from 'react';
import './Help.css';
import { FaAngleDown, FaAngleUp, FaPiggyBank, FaPlus, FaMinus, FaAmericanSignLanguageInterpreting} from 'react-icons/fa';
import ToggleButton from "./ToggleButton"
import FinancialAid from "../images/Financial Aid.jpeg"
import Grades from "../images/Grades.jpeg"
import Schedule from "../images/Schedule.png"
import Schools from "../images/Schools.png"
import TransferCredits from "../images/TransferCredits.png"
import International from "../images/International.jpeg"
import InternationalServices from "../images/InternationalServices.jpeg"

function Help() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const toggleCategory = (i) => {
    if (selectedCategory === i) {
      return setSelectedCategory(null);
    }

    setSelectedCategory(i);
    setSelectedSubcategory(null); // Reset subcategory selection when changing category
  };

  const toggleSubcategory = (subcategoryName) => {
    if (selectedSubcategory === subcategoryName) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategoryName);
    }
  };

  return (
    <div className='help__main'>
      <h1 className="main__title">Help</h1>
      <div className='wrapper'>
        <div className='accordion'>
          {data.map((item, i) => (
            <div className='item' key={i}>
              <div className='title' onClick={() => toggleCategory(i)}>
                
                
                {item.icon && <span>{item.icon()}</span>}

                <h2>{item.category}</h2>
                
                <span>{selectedCategory === i ? <FaMinus/>  :  <FaPlus/>}</span>
              </div>
              <div className={selectedCategory === i ? 'content show' : 'content'}>
                <div className="subcategory-container">
                  {item.subcategory.map((sub, index) => (
                    <button
                      key={index}
                      className={`subcategory-button ${selectedSubcategory === sub.name ? 'selected' : ''}`}
                      onClick={() => toggleSubcategory(sub.name)}
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
                {selectedSubcategory &&
                  <div className="subcategory-content">
                    {item.subcategory.find(sub => sub.name === selectedSubcategory)?.info}
                  </div>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



const data = [
   {
       category: "Financial Aid",
       icon: () => <img src={FinancialAid} className='accorion_imgs'/>,
       subcategory: [
           { name: "Fafsa", 
           info: (
                <div >
                   <span>1. Requires you to be a full-time student every semester (12 credits per Fall/Spring Semester) if you are eligible for FAFSA aid</span> 
                   <hr></hr>
                   <span>2. Fafsa can cover some tuition for courses taken during the summer </span>
                   <hr></hr>
                   <span>3. Fafsa does not cover tuition for courses taken during the winter</span>
                   <hr></hr>
                </div>
           )
           },
           
           
           
           
           { name: "Tap", 
           info: 
                (
                  <div>
                    <ul>1. If you are a recepient of a tap award, in order to keep this reward you must:
                      <ToggleButton>
                          <li>Be in a approved program of study and achieved good academic standing of atleast a "C" average after a 4th semester payment</li>
                          <li>Be enrolled as a full-time student taking atleast 12 credits per Fall and Spring semester towards your degree program</li>
                          <li>If any withdrawm classes lead you to under 12 credits for the Fall/Spring semester, your Tap award will be affected.</li>
                      </ToggleButton>
                    </ul>
                    <hr></hr>
                    <ul>2. If you are a recepient of a part-time tap award, in order to keep this award, you must:
                      <ToggleButton>
                          <li>Be in a approved program of study and have a cumulative grade-point average of atleast a 2.00</li>
                          <li>Be enrolled as a part-time student taking between 6 to 11 credits per Fall and Spring semester towards your degree program.</li>
                          <li>If any withdrawn classes lead you to under 6 credits, your part-time tap award will be affected</li>
                      </ToggleButton>
                    </ul>
                    <hr></hr>
                    
                  </div>
                )
           
           },
           { name: "Excelsior", 
           info: 
                (
                    <div >
                        <span>1. If you are a recepient of the Excelsior Scholarship, in order to keep this scholarship, you must:</span>
                        <ul>
                            <ToggleButton>
                                <li> Be enrolled as a full-time student taking atleast 12 credits per semester and completing atleast 30 credits each year towards your degree program with no break in enrollment.</li>
                                <li>
                                    Courses taken over the winter and summer also apply to the 30 credits per year requirement, however the Excelsior Scholarship does not cover the tuition for courses over the winter and summer.</li>
                                <li>
                                    Exmaples: 15 Credit Fall/15 Credit Spring | 12 Credit Fall/18 Credit Spring | 12 Credit Fall/3 Credit Winter/12 Credit Spring/3 Credit Summer
                                </li>
                            </ToggleButton>

                        </ul>
                        <hr></hr>
                        <span>2. Failed Courses or W grades within one semester can impact your progress towards the 30 credits per year requirement</span>
                        <hr></hr>
                        <span>3. An Excelsior Scholarship recepient must declare a major towards the end of sophomore year or the during the midpoint of the first semester of junior year.</span>
                        <hr></hr>
                    </div>
                )
           }
       ]
   },
   {
       category: "Grades",
       icon: () => <img src={Grades} className='accorion_imgs'/>,
       subcategory: [
           {  
               name: "Grades Not Submitted",
               info: (
                   <div className='grades'>
                       <h5>If grades are not submitted after the deadline:</h5>
                       <span>1. Reach out to your professor</span>
                       <hr></hr>
                       <span>2. Try contacting the department head of your respective course </span>
                       <hr></hr>
                       <span>3. As the final step, try reaching out to the student of dean affairs</span>
                       <hr></hr>
                   </div>
               )
           },
           {
               name: "W Grades",
               info: (
                   <div className='w_grades'>
                       <span>1. W grades do not have an impact on your gpa </span>
                       <hr></hr>
                       <ul> 2. W grades can potentially impact your financial aid
                           <ToggleButton  >
                                <li>
                                    - Dropping a 3-credit class from a 15-credit course load will still maintain your full-time student status, as you remain above the 12-credit threshold for full-time enrollment
                                </li>
                                <li>
                                    - If you're enrolled in a 14-credit course load and decide to drop a 3-credit class, your total credits will fall to 11. This places you below the full-time enrollment threshold, changing your status to a part-time student.
                                </li>
                           </ToggleButton>
                       </ul>
                       <hr></hr>
                   </div>
               )
           },
           {
            name: "F Grades",
            info: (
                <div className='Low Grades'>
                    <span>1. F grades appear on your transcript</span>
                    <hr></hr>
                    <span>2. F grades on your trasncript can be replaced once you retake the class and received a passing grade</span>
                    <hr></hr>
                    <span>3. Any grade of D or better in a course can't be retaken for a higher grade </span>
                    <hr></hr>
                </div>
            )
           }
       ]
   },
   {
       category: "Schedule",
       icon: () => <img src={Schedule} className='accorion_imgs'/>,
       subcategory: [
           {name: "Enrollment Times", 
           info: 
            (
                <div>
                    <span>1. Athletes, Macaulay Honors, and Disabilities students get priority registration.</span>
                    <hr></hr>
                    <span>2. Enrollment dates are then determined by your year status:  </span>
                    <ToggleButton>
                      <span>Seniors &rarr; Juniors &rarr; Sophmores &rarr; Freshman</span>
                      </ToggleButton>
                    <hr></hr>
                    <span>3. Within each Enrollment date, the Enrollment time is determined by credits completed and by GPA.</span>
                </div>
            )
            },
            {
              name: "Schedule Builder",
              info: 
                (
                  <div>
                    <span>1. In order to check-out a schedule, it must be after your enrollment time:</span>
                    <hr></hr>
                    <span>2. Some courses are specifically designated for freshman students or Seek student</span>
                    <hr></hr>
                    <span>3. Dealing with Schedule Builder Errors: </span>
                    <ToggleButton className='schedule-builder'>
                      <ul>
                        <li>
                          <span>Error: Unable to add this class - requisites have not been met.</span>
                          <br></br>
                          <span>PREREQUISITE: Must be part of these student groups (ZICK or ZKTP).</span>
                          <br></br>
                          <span>- Error Meaning: You have not been accepted into the Zicklin School of Business, therefore you are unable to register for this course</span>
                        </li>
                        <li>
                          <span>Error: You do not have a valid enrollment enrollment appointment at this time</span>
                          <br></br>
                          <span>- Error meaning: You are trying to enroll before your scheduled enrollment time</span>
                          <br></br>
                          <span>- Locating your enrollment time: </span>
                          <span>Cuny First &rarr; Student Center &rarr; Course Planning and Enrollment  &rarr; Enrollment Dates &rarr; Select the semester</span>
                        </li>
                        <li>
                        <span>Error: 503 Service Unavilable</span>
                          <br></br>
                          <span>- Error meaining: The server is currently unable to handle the request. This can be due to the server being overloaded or down for maintenance.  </span>
                          <br></br>
                          <span>Solution: If you encounter this during your registration time, you should email registrationissues@baruch.cuny.edu for assistance</span>
                        </li>
                      </ul>


                    </ToggleButton>
                    <hr></hr>
                    <span>4. How Waitlists work:</span>
                    <ToggleButton>
                      <ul>
                        <li>Waitlists are processed every couple of days (3-4) and they are processed more frequently towards the start of the semester</li>
                        <li>All students on a waitlist are dropped on the first day of the semester</li>
                        <li>If you are a Zicklin student on a waitlist for a class that is needed for your graduation, you can fill out a course request form</li>
                        <a href="https://zicklin.baruch.cuny.edu/academic-programs/undergraduate/current-undergraduate-students/waitlists/graduating-senior-form/">Graduation Senior Request Form</a>
                        <li>If you are taking two co-requisite classes (For Example: BUS 2000 & CIS 2200), you must be enrolled in both classes. </li>
                        <li></li>
                      </ul>
                    </ToggleButton>
                  </div>
                )
            },
            {
              name: "Credit Overload",
              info:
                (
                  <div className='credit-overload'>
                    <span>1. A Fall or Spring schedule with a courseload of 19 or more credits and up to 21 credits requires you to fill out a credit overload application.</span>
                    <ToggleButton>
                      <ul>
                      <li><a href="https://zicklin.baruch.cuny.edu/academic-programs/undergraduate/current-undergraduate-students/business-courses-enrollment-criteria/unit-overload/">Credit Overload Application for Zicklin School of Business Students</a></li>
                      <br></br>
                      <li><a href="https://weissman.baruch.cuny.edu/wp-content/uploads/sites/20/2020/09/REVISEDCreditOverload5.2020-1.pdf">Credit Overload Application for Students admitted into the Weissman School of Arts and Sciences </a></li>
                      <br></br>
                      <li><a href="https://marxe.baruch.cuny.edu/wp-content/uploads/sites/7/2023/04/BSPA-Credits-Overload-Application.docx">Credit Overload Application for students admitted into the Marxe School of Public and International Affairs</a></li>
                      <br></br>
                      <li><a href="https://enrollmentmanagement.baruch.cuny.edu/wp-content/uploads/sites/18/2020/08/Credit-Overload-NEWANDREVISED11.12.20.pdf">Credit Overload Application for students not officially admitted into the Zicklin School of Business, Weissmna School of Arts and Sciences or the Marxe School of Public and International Affairs</a></li>
                      </ul>
                    </ToggleButton>

                  </div>
                )
              
            }
       ]
   },
   {
    category: "Schools",
    icon: () => <img src={Schools} className='accorion_imgs'/>,
        subcategory: [
          {
            name: "Zicklin School of Business",
            info:
              (
                <div>
                  <span>1. To gain admission into the school via regular entry:</span>
                  <hr></hr>
                  <ToggleButton>
                    <ul>
                        <span>- Completion of:</span>
                        <li>COM 2020</li>
                        <li>ENG 2150</li>
                        <li>Pre-Calculus (MTH 2003 or MTH 2009) or Calculus or placement into Calculus</li>
                    </ul>
                    <br></br>
                    <ul>
                      <span>- Completion of 7 pre-business courses with a minimum of 2.25 average GPA:</span>
                      <li>ACC 2101</li>
                      <li>CIS 2200</li>
                      <li>ECO 1001</li>
                      <li>ECO 1002</li>
                      <li>ENG 2100</li>
                      <li>LAW 1101</li>
                      <li>STA 2000</li>
                    </ul>
                    <br></br>
                    <span>- Completion of atleast 45 credits with an overall Baruch GPA of 2.25 or higher (The above must be completed and any general electives can count towards this 45 Credit mark)</span>
                  </ToggleButton>
                  
                  <span>2. To gain Admission into the school via early entry:</span>
                  <ToggleButton>
                    <ul>
                      <li>Completion of Pre-Calculus (MTH 2003 or MTH 2009) or Calculus or placement into Calculus </li>
                    </ul>

                  </ToggleButton>
                  <hr></hr>
                  <span>3. After admission via regular or early entry, you can start taking your major-related classes</span>
                  <hr></hr>
                  <span>4. All Zicklin students have to complete a liberal arts minor</span>
                  <hr></hr>
                </div>
              )

              
          },
          {
            name: "Weissman School of Arts and Sciences",
            info:
              (
                <div>
                  <span>1. To gain admission into the school, you must:</span>
                  <hr></hr>
                  <ToggleButton>
                    <ul>
                      <span>Completion of:</span>
                      <li>COM 1010</li>
                      <li>Two consecutive semesters of the same foreign language course</li>
                      </ul>
                  </ToggleButton>
                  
                  <span>2. To declare a liberal arts major within the school, you must:</span>
                    <ToggleButton>
                      <ul>
                        <span>Completion of:</span>
                        <li>Atleast 45 credits with an overall GPA of 2.0</li>
                        <li>Must have completed the Pathways general education and the majors math requirements</li>
                      </ul>
                    </ToggleButton>
                  <hr></hr>
                  <span>3. Information about double majors:</span>
                  <ToggleButton>
                    <ul>
                      <li>Only Weissman Students are allowed to declare a double major</li>
                      <li>Steps towards a double major:</li>
                      <p>- A Weissman student intending on double majoring must pick the dual majors from the Weissman School of Arts and Sciences</p>
                      <p>- Two separate major forms must be filed with each form having approved courses signed by the appropriate department advisor</p>
                      <p>- The Office of the Associate Dean must then approve these two majors forms. </p>
                      <li>A minimum of 60 percent of credits for each major must be completed at Baruch College</li>
                      <li>Fafsa will cover both of your majors while state aid covers your first major and considers your second major optional</li>
                      <li>*Zicklin and Marxe students are unable to declare a double major</li>
                      <li>*Double majors within the math department are prohibited</li>
                      <span>Transfer</span>
                    </ul>
                  </ToggleButton>
                  <hr></hr>
                </div>
              )
          },
          {
            name: "Marxe School of Public and International Affairs",
            info: 
              (
                <div>
                  <span>1. Major Requirements</span>
                  <ul>
                    <li>PAF 3010 (Race, inequality, and Public Policy)</li>
                    <li>PAF 3015 (Qualitative Studies of Communities)</li>
                    <li>PAF 3102 (Economic Analysis of Public Policy)</li>
                    <li>PAF 3108 (Strategic Communication for Public Causes)</li>
                    <li> PAF 3401 (Quantitative Methods for Policy and Practice) </li>
                    <li> PAF 4401 (Capstone or PAF 6001H & 6002H Honors Thesis Option)</li>
                  </ul>
                </div>
              )
          }
        ]  

    
  },
  {
    category: "Transfer",
    icon: () => <img src={TransferCredits} className='accorion_imgs'/>,
    subcategory: [
      {
      name: "Transfer Credits",
      info: (
        <div className="transfer-credits">
          <span>1. The GPA from your transfer credits are not not counted towards your Baruch GPA. Your transfer grades are posted but they are not calculated.</span>
          <hr></hr>
          <span>2. Cuny to Cuny Transfer:</span>
          <ToggleButton>
            <ul>
              <li>CUNY has a unified core curriculm known as "Flexible Core" or "Pathways". At Baruch and every other CUNY, courses that fulfill these pathway requirements at one CUNY College are transfered as pathway credits to Baruch College. </li>
              <a href="https://genedreq.baruch.cuny.edu/pathwaysatbaruch/flexiblecore/">Pathways at Baruch College</a>
              <li>For major-specific credits, the transferability of these credits often depends on the similairty of the programs between the transfering CUNY and Baruch College</li>
              <a href="https://explorer.cuny.edu/course-transfer">Cuny to Cuny Transfer Explorer</a>
              <li>If there is no equivalent course between the transfering CUNY and Baruch College for a certain course, that course will be granted as elective credit and listed as "7000" on the Transfer Credit Report </li>
              <li>Only courses taken with a grade of D- or better at other CUNY colleges will be accepted for transfer credit at Baruch</li>
              <li>College Now courses with a D- or better are also accepted for transfer students and freshman applicants </li>
            </ul>
          </ToggleButton>
          <hr></hr>
          <span>3. SUNY to CUNY Transfer:</span>
          <ToggleButton>
            <ul>
              <li>A transfer student who has completed an Associate's degree (AA or AS) at a SUNY College or completed the 30-credit General Education Requirement will be considered to have met Baruch College's Flexible Core/Pathways requirement.</li>
              <li>A Transfer student who has completed only a portion of the 30-credit GER at a SUNY College, these transfer credits earned will be evaluated to the corresponding Flexible Core/Pathways courses at Baruch College.</li>
              <li>Only courses taken with a grade of C or better at SUNY colleges will be accepted for tarsnfer credit at Baruch  </li>
              <li>There is no specified maximumn number of crefits that can be transfered from a SUNY College to Baruch College.</li>
             
            </ul>
          </ToggleButton>
          <hr></hr>
          <span>4. AP Credits</span>
          <ToggleButton>
            <ul>
              <li>Official score report for AP classes from College Board can be sent to CODE <span>2950</span></li>
              <li>AP scores of a 3 will be accepted for elective credit only and will be labeled as LAS 7000 or NONLA 7000 </li>
              <li>AP scores of a 4 or 5 will be granted college credit for an equivalent course at Baruch Collge.</li>
            </ul>
          </ToggleButton>

        </div>
      )
    },
    {name: "E-permit",
     info: 
      (
        <div>
          <span>1. E-permit classes do not affect financial aid, and E-permit classes are considered for full-time student status</span>
          <hr></hr>
          <span>2. E-permit classes can be taken for major related courses but 60% of major courses as well as Capstone courses must be completed at Baruch College. </span>
          <hr></hr>
          <span>3. Students must be in good academic standing, a strict policy on a cumilative gpa of 2.00 or higher is enforced.</span>
          <hr></hr>
          <span>4. Holds on your Account may disqualify you from ePermit consideration or Approval</span>
          <hr></hr>
          <span>5. All the prerequisites for the e-Permit course must adhere to both Baruch's and the host college's policies, and keep track of any changes in course status. </span>
          <hr></hr>
        </div>
      )
    }
    ]
  },
  {
    category: "International Students",
    icon: () => <img src={InternationalServices} className='accorion_imgs'/>,
    subcategory: [
      {
        name: "Application Process Details",
        info: 
          (
            <div>
              <a href="https://baruch.az1.qualtrics.com/jfe/form/SV_6hzHQ3znnoWzFzv?Q_JFE=qdg">International Student Admissions Application</a>           
              <br></br>
              <span>1. International students must meet specific admission requirements, including proof of English Proficiency (TOEFL, IELTS, or Duolingo English Test) </span>
              <hr></hr>
              <span>2. Official English Translation of Foreign Records such as transcripts are required</span>
              <hr></hr>
              <span>3. International students are recommended to apply 4 weeks before the priority deadline as international transcripts take longer to be received and processed by the CUNY Processing Center </span>
              <hr></hr>
              <span>4. After applying:</span>
              <ToggleButton>
                <ul>
                  <li>Submit the application fee of $65 for freshman application</li>
                  <li>After you apply, you will be required to submit supporting documents to CUNY in order to complete your application for Admission review. Do NOT send these documents to Baruch College</li>
                  <li>Your translated secondary school transcript can be uploaded onto your CUNY application but in certain cases where additional information is required, they can be sent to <span>admissions@cuny.edu</span></li>
                </ul>
              </ToggleButton>
            </div>
          )
      }
    ]
  }

   
];


export default Help;
