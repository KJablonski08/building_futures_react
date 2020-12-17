import React from 'react';
import { Jumbotron, Container, Accordion, Card, Button } from 'react-bootstrap';
import './about.css';

const About = () => {
	return (
		<div id='about'>
			<Jumbotron fluid>
				<Container>
					<div id='quote'>
						<h3>
							Never doubt that a small group of thoughtful committed citizens
							can change the world. Indeed, it is the only thing that ever has.
						</h3>
						<h5>-Margaret Mead</h5>
					</div>
					<hr />
					<div className='about-us'></div>
					<hr />
					<p>
						Jim Nowak and Adam Jablonski first crossed paths in December of
						2005. Two months later, they began walking the same path in Kenya,
						and they never separated. It was here that seeds for what would
						become Building Futures, Inc was formed. They were working with
						another organization when the idea came to them. It was a different
						way of approaching these marvelous people and helping them to
						achieve their goals. Two years later, Building Futures, Inc. became
						a reality. Our service work is incredibly rewarding. Every smile on
						a child’s face, every tear of joy on a parent’s cheek, and every
						gentle touch from the elderly keep us coming back. They are constant
						reminders that we are doing the right thing for the right reason.
					</p>
					<br />
					<div className='who-we-are'>
						<Accordion id='accordion'>
							<Card id='accordion-card'>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									<div class='image-area'>
										<div class='img-wrapper'>
											<img
												src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11102811_10202695305823027_6704291235392128388_n.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=r5CH2PCq3e4AX9U3w7L&_nc_ht=scontent-iad3-1.xx&oh=0711fd56d9c6c0e404dead007febbb35&oe=6001348C'
												alt='Atul Prajapati'
												id='director-img'></img>
											<br />
											<br />
											<h2>Director: Adam Jablonski</h2>
										</div>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										Adam and his wife Andrea have three children and recently
										celebrated their 27th anniversary. Katie, a graduate of
										Stonehill College, is a Sales Representative with W.B. Mason
										Company. Kevin is a graduate of St. John Fisher College and
										is also employed by W.B. Mason Company. Karen, is in her
										senior year at St. Bonaventure University pursuing a
										teaching degree. The entire family is active within the
										organization both in Kenya and here in the US. Whether
										making kits for the Pad Project in their home or planting
										trees as a family in Kenya, everyone is eager to help make a
										difference. They’re happy to bring friends to Africa, too!
										Over the last few years, they’ve introduced dozens of people
										to this part of the world and the marvelous people they’ve
										befriended there. “Traveling to Kenya is not for everyone.
										It’s a lot of traveling, and the living conditions while in
										country are very different. We’ve been blessed to be able to
										take the time to travel here as a family, and have the
										people in Kenya become members of our extended family. The
										privilege for us to watch our families grow is priceless.”
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>

						<Accordion id='accordion'>
							<Card id='accordion-card'>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									<div class='image-area'>
										<div class='img-wrapper'>
											<img
												src='http://www.buildingfuturesinc.com/Building_Futures,_Inc./About_Us_files/shapeimage_10%20copy.png'
												alt='Atul Prajapati'
												id='director-img'></img>
											<br />
											<br />
											<h2>Director: Steve Erickson</h2>
										</div>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										Steve has an extensive background in Education, Banking,
										Insurance and Non-Profit Management and is in charge of the
										finances of our organization. He is married to his wife of
										36 years, Janet, and they have been Fairport residents for
										25 years. Janet has helped organize fundraisers at French
										Road Elementary School and is encouraging in all matters
										behind the scenes. Both daughters, Leigh and Jessie, had an
										affinity for Jim Nowak as their teacher (as they did for
										many of their Fairport teachers) and have been actively
										involved in the organization’s fund raising activities.
										“Four years ago I met Jim Nowak while he was fixing our pool
										(that no one else would fix) and I heard about what he and
										Adam were doing with Building Futures in Kenya and I jumped
										in to help out with the accounting and paperwork. It has
										been gratifying to contribute to the various activities of
										Building Futures, Inc. These activities have exposed the
										innate human compassion of children and adults here in
										America and in Africa. This kind of work makes the world a
										better and more peaceful place. Don’t just sit there... hit
										the donate button! You’ll be glad you did!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						<Accordion id='accordion'>
							<Card id='accordion-card'>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									<div class='image-area'>
										<div class='img-wrapper'>
											<img
												src='http://www.buildingfuturesinc.com/Building_Futures,_Inc./About_Us_files/IMG_0670.jpg'
												alt='Atul Prajapati'
												id='director-img'></img>
											<br />
											<br />
											<h2>Director: Tim Slisz</h2>
										</div>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										A 47 year resident of Fairport, Tim got his Bachelors and
										Masters Degrees from Nazareth College. Tim first met
										co-founder Jim Nowak in High School. “He was my history
										teacher and was a leader in a program called Senior Seminar,
										a group that met to discuss world issues. His spark ignited
										in me the drive and desire to help those in need, no matter
										where they live. When I started teaching 6th grade in 1990,
										I reconnected with Jim. His energy was stronger than ever
										and he has always been a driving force in my teaching.” Soon
										after teaching began, Tim started fostering children who
										needed a safe place to stay. Over the last 20 years, Tim has
										had 10 children stay in his home at various times and for
										various reasons and the two children that stayed the longest
										were Haitian refugees. “To this day, they are a very big
										part of my life. My one son has 2 children thus I have
										become known as Papa Tim - a name more precious than gold!”
										When not helping others in the community, Tim can be found
										working on and driving his antique Ford Model T, walking and
										hiking with his two English Springer Spaniels, enjoying the
										grand kids, exploring Adirondack State Park, relaxing on
										Martha’s Vineyard or out on his friends’ various dairy
										farms. Tim is currently a member of the Village Board of
										Trustees, sits on the Board of Directors for Linwood Gardens
										Ltd. and is a religion teacher for the Church of the
										Assumption in Fairport.
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
						<Accordion id='accordion'>
							<Card id='accordion-card'>
								<Accordion.Toggle as={Button} variant='link' eventKey='0'>
									<div class='image-area'>
										<div class='img-wrapper'>
											<img
												src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/86710120_10157183094192689_2226993663131516928_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=_VPbZyQYTa8AX-E1RyH&_nc_ht=scontent-iad3-1.xx&oh=a274da158cd994285f5381b6193dd5e0&oe=600013D0'
												alt='Atul Prajapati'
												id='director-img'></img>
											<br />
											<br />
											<h2>Director: Isaac Parsaloi Kasura</h2>
										</div>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey='0'>
									<Card.Body>
										a Maasai Warrior, world-renowned Mara Guide, and dear
										friend. He helps us with our projects in Kenya, and is
										currently spearheading our Birthing Center at Masai Mara.
										When not with his wife (Leia) and children (Caleb and
										Tatiana), his professional career takes him to Masai Mara
										Game Preserve where he is an accomplished guide. If you ever
										have an opportunity to visit Maasai Mara, you won’t find a
										better guide than Isaac!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</div>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default About;
