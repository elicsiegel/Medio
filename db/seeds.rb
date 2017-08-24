# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all 

user1 = User.create!(username: "Eli", password: "password") 
user2 = User.create!(username: "Jim", password: "password") 
user3 = User.create!(username: "Davis", password: "password") 
user4 = User.create!(username: "Michelle", password: "password") 
user5 = User.create!(username: "Freddy", password: "password") 
user6 = User.create!(username: "Betty", password: "password") 
user7 = User.create!(username: "Guest", password: "password")

Story.destroy_all

story1 = Story.new(title: "Our first story", body: "Once upon a time, Medio was born", author_id: user1.id)

file = File.open('app/assets/images/medio.jpg')
story1.image = file
story1.save!

story2 = Story.new(title: "Drawing the Eclipse", body: "Today I drew the eclipse for CBS News in NY City, and while not a totality zone (love that phrase, which means a place where you can experience a full eclipse. NYC was about 75%), it didn’t matter to me. I was happy to be able to cover and draw the city I love so much, to draw New Yorkers as they gathered to gaze skyward. I was stationed at the American Museum of Natural History, where they held an “event” on their Hayden Planetarium terrace (a homecoming of sorts for me: my first job in NYC was in the art department of the museum).
People were in a friendly, exited, chatty mood. I spent most of the time watching people, although I did put on my eclipse glasses three times to view the sun/moon; frankly I found the people more interesting. But the mood was unique: there were oos and aahs, and clapping at times. As I watched and drew the gathered group around me, what I felt was comaraderie, a relief to be spending time together doing something that was not about politics or feeling divided as a country. Perhaps that’s my spin. But nonetheless, it was wonderful to see such a diversity of people come out to watch the eclipse — the very young and the very old, and many, many different races.", author_id: user5.id)

file = File.open('app/assets/images/eclipse.jpg')
story2.image = file
story2.save!

story3 = Story.new(title: "Where does it come from?", author_id: user2.id, body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.')

file = File.open('app/assets/images/Latin.jpg')
story3.image = file
story3.save!

story4 = Story.new(title: "The Pleasures Of New York By Car", author_id: user3.id, body: "My two cars have enough miles between them to circle the earth ten times at the equator. I prefer the older one, a 2000 Honda Civic that used to belong to my mother-in-law. It has racked up most of its miles in New Jersey, where I live, and in New York City. Nothing about it stands out—not its tan color, or its shape, or the small yellow-and-white 2004 parking decal from the College of Staten Island on its left rear window. If you asked people to draw a car, my Honda is probably about what they would come up with. It has been through a lot. Last year, while driving absent-mindedly, I let it get overheated. I had not paid attention to the greenish stain on the pavement where I parked it. All the coolant had leaked out through a hole in the radiator. I started smelling strange smells, steam and smoke came from under the hood, and I pulled over next to a Baptist church on Route 3 whose occupants immediately emerged to ask if they could help. I had “melted” the engine, my mechanic said later; extreme heat had wrecked it beyond repair. He put in a used engine to replace it.
In eighteen years, the car’s exterior has accumulated some dents. I haven’t noticed them, growing accustomed to them over time. The result is that the car looks different to me from the way it does to other people, just the way my face looks different in my bathroom mirror from the way it does in the security photos of me that the staff behind front desks take before I go into office buildings in Manhattan. I mean that I do not think of my car as a junker.
Recently, I was in a seven-car pileup on the Garden State Parkway. No one was badly hurt, though the multiple collisions totalled several cars. I got hit on the left rear bumper, which was smashed in, along with the tail-light. The plastic part of the bumper was hanging down. A state policeman who assessed the various damages came over to my Honda with his clipboard. He walked around the car, taking it all in. Then he stopped at the trashed bumper, pointed to it and the tail-light, and asked, “Was it like this before?”
Some people say that they hate to drive in the city and that driving in New Jersey is even worse. It’s true that New Jersey can be a bit of a puzzle. I think the state has decided that providing the kind of road signs that actually explain where you should go would do more harm than good, slowing traffic flow at crucial junctures. So the policy seems to be that the driver will learn by trial and error. In complicated places, of which there are many, you make the mistake once or twice or three times and then you learn. The misconception people have about driving in New Jersey is that we Jersey drivers think we are driving. In fact, we are swarming. Freeways are nice, but if you have to redirect down a puddled two-lane road between tall reeds that’s fine, too. Anyplace where you can drive is acceptable, basically. And you have to be able to switch quickly from driving-swarming to merely sitting, when you find yourself in a traffic jam. Then it’s best just to chill out, count how many hot, idling trucks within your field of vision have “Logistics” in their company names, and enjoy the temporarily reduced risk of major accident.")

file = File.open('app/assets/images/dropcar.jpg')
story4.image = file
story4.save!


