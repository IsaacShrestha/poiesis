System Context
To create an accurate working system, having system context from various facets helps extensively. With greater understanding of these facets a better requirement specification document can be created. For Poiesis, we consider the following,
1. Subject facet
2. Usage facet
3. IT System facet

1. Subject Facet

The proposed system is a car pooling app for (Elementary? middle?) school children. The system is going to be a web (mobile?) application (with computer and mobile webpages?). Also, the application is going to be an interactive user application with the primary users being drivers (parents/teachers) and the passengers (students).
The Subject Facet for Poiesis includes the sources, context objects and their relationship with one another as shown below:
• Requirement Sources
	o Stakeholders: Parents, Teachers, Students, School Administration, Emergency Service.
	o Digital Millennium Copyright Act, Children's Online Privacy Protection Rule
• Context Objects
	o Parents, Teachers, Students.
	o Cars, Documents (Registration, Insurance etc.), Time Schedule, Location, Route
	o Login, Schedule a ride, Confirm availability.
• Properties and Relationships
	o Inability to reach school on time.
	o Not having a mode of transportation.
The subject facet includes objects that are listed below:
• Location
• Car
• Student
• Parent
• Teacher
There are also various events, for example:
• Registration
• Verification
• Login
• Availability
• Delete account
• Send pick up request
• Start Ride
• End Ride

The interaction between these objects and events can be seen in behavioral diagrams such as Use-Case, State-Chart and Sequence Diagrams.

2. Usage Facet

The critical (Primary) stakeholders identified along with their usage goals are listed as follows:
a. Students
The students will be using this system to travel to school on a regular basis. The students can directly choose the time, place and driver for their commute. The system provides timely notification to the student so that they can get ready in time for their pick up. Also, the students can rate the ride they have previously taken and choose fun rides.

b. Parents
The parents will be playing a dual role in the system. They can act as guardians or volunteer. As a guardian, the system can be used to request rides for the students. They can also receive notification from the system to better plan. Parents can also use the system to track the car in which their child/children is/are travelling.

c. Teachers
Teachers can act as volunteer for driving the students to the school. They can accept requests for rides by the students or guardians. They can also cancel these rides should there be any problems. 

• Requirement Sources
	o Direct users: Students, Parents, Teachers.
	o Indirect users: School Management, Emergency Service.
	o Digital Millennium Copyright Act
	o Children's Online Privacy Protection Rule
	o Title 16: Commercial Practices
	o Commutewise
	o Safr
	o Rideshare
• Context Objects
	o Students, Parents, Teachers.
	o Schedule pick up by giving time and location; Login; Accepting pick up requests.
	o School System to verify Driver (Volunteer) identity. GPS to track vehicles. 
• Properties and Relationships
	o Share and cross check Driver (Volunteer) info with School system to confirm identity. 
	o Parents and Students can use the system to ensure students reach school on time.
	o Parents can track the car using GPS for student’s safety.

3. IT System Facet

• Requirement Sources
	o Persons who deal with planning design and operation of the IT system environment, technology consultants, suppliers
	o Developers, System Admin (School), GPS
	o IT infrastructure documents, reference architecture
	o The system will be modeled after ride sharing apps like Uber and Commutewise. 
	o https://eng.uber.com/new-rider-app/ & https://github.com/drapanjanas/commutewise-app
• Context Objects
	o HTML5, PHP, SQL.
	o Deployable on cell phone or laptop.

Legal/Ethical Consideration

DMCA (Digital Millennium Copyright Act)
It is a United States copyright law that implements two 1996 treaties of the world intellectual property organization. Protects the act of circumventing an access control, whether or not there is actual infringement of the copyright itself.

Children's Online Privacy Protection Rule ("COPPA")
COPPA imposes certain requirements on operators of websites or online services directed to children under 13 years of age, and on operators of other websites or online services that have actual knowledge that they are collecting personal information online from a child under 13 years of age.

Title 16: Commercial Practices, CHAPTER II—CONSUMER PRODUCT SAFETY COMMISSION, PART 1200—DEFINITION OF CHILDREN'S PRODUCT UNDER THE CONSUMER PRODUCT SAFETY ACT
This part provides guidance on the definition of children's product and the factors the Commission will consider when making determinations regarding children's products as set forth under 15 U.S.C. 2052(2).
(We will need this if elementary students can use the app.)

National Traffic and Motor Vehicle Safety Act
Ensures that the transportation vehicle being used meets the government set safety standards.

Nebraska Revised Statute 60-6,267 to 60-6,269
Children below the age of 6 have to be placed in a Child restraint system and children between the age of 6 to 18 have to be restrained using a 3-point safety belt system during travel.
	
