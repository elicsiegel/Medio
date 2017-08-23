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

Story.destroy_all

story1 = Story.create!(title: "Our first story", body: "Once upon a time, Medio was born", author_id: user1.id)

story2 = Story.create!(title: "Drawing the Eclipse", body: "Today I drew the eclipse for CBS News in NY City, and while not a totality zone (love that phrase, which means a place where you can experience a full eclipse. NYC was about 75%), it didn’t matter to me. I was happy to be able to cover and draw the city I love so much, to draw New Yorkers as they gathered to gaze skyward. I was stationed at the American Museum of Natural History, where they held an “event” on their Hayden Planetarium terrace (a homecoming of sorts for me: my first job in NYC was in the art department of the museum).
People were in a friendly, exited, chatty mood. I spent most of the time watching people, although I did put on my eclipse glasses three times to view the sun/moon; frankly I found the people more interesting. But the mood was unique: there were oos and aahs, and clapping at times. As I watched and drew the gathered group around me, what I felt was comaraderie, a relief to be spending time together doing something that was not about politics or feeling divided as a country. Perhaps that’s my spin. But nonetheless, it was wonderful to see such a diversity of people come out to watch the eclipse — the very young and the very old, and many, many different races.", author_id: user5.id)

story3 = Story.create!(title: "Where does it come from?", author_id: user2.id, body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.')

story4 = Story.create!(title: "Where can I get some?", author_id: user3.id, body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.")


